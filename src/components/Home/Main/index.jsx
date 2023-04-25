import { useEffect, useState, useRef } from "react";
import Item from "./Item";
import MainLoader from "./../../../utilities/LoadingTmplates/MainLoader";

export default function Main({ selectedCategory: category }) {
  const [places, setPlaces] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const mainRef = useRef(null);
  let limit = null;
  const getColumns = () => {
    if (mainRef.current) {
      const columns = Math.floor(
        mainRef.current.clientWidth / mainRef.current.firstChild.clientWidth
      );
      const ROWS = 5;
      limit = columns * ROWS;
    }
  };
  useEffect(() => {
    setLoader(true);
    console.log(page, limit);
    fetch(
      `http://192.168.1.111:8000/api/v1/places?page=${page}&limit=${limit}`
      // to sort use sort=Field
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.body.places);
        setPlaces(response.body.places);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  }, [category]);
  useEffect(getColumns);
  window.addEventListener("resize", getColumns);
  if (loader) return <MainLoader />;
  return (
    <main
      id="Main"
      ref={mainRef}
      className="min-h-screen max-w-screen py-8 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-x-5 gap-y-10 mt-1"
    >
      {places.map((place) => (
        <Item place={place} key={place.title} />
      ))}
    </main>
  );
}
