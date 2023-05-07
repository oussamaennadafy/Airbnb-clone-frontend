import { useEffect, useState, useRef } from "react";
import Item from "./Item";
import MainLoader from "./../../../utilities/LoadingTmplates/MainLoader";
import context from "./../../../context";

export default function Main({ selectedCategory: category }) {
  const [places, setPlaces] = useState([]);
  const [loader, setLoader] = useState(true);
  const firstLoaderPlaceRef = useRef(null);
  const [page, setPage] = useState(0);
  let limit = null;
  useEffect(() => {
    const columns = Math.floor(
      document.getElementById("Main")?.clientWidth /
        document.getElementById("Main")?.firstChild.clientWidth
    );
    const ROWS = 5;
    limit = columns * ROWS;
    // window.addEventListener("resize", getLimit);
  }, []);
  const fetchPlaces = () => {
    setLoader(true);
    console.log(`fetch ${page} page`);
    fetch(
      `http://${context.SERVER_IP}:${context.SERVER_PORT}/api/v1/places?page=${page}&limit=${limit}`
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
  };
  useEffect(() => {
    fetchPlaces();
  }, [category, page]);

  // event of intersecting with loader
  useEffect(() => {
    const loaderObserver = new IntersectionObserver(
      (entries) => {
        // If intersectionRatio is 0, the target is out of view
        // and we do not need to do anything.
        if (entries[0].intersectionRatio <= 0) return;
        setPage((prevPage) => prevPage + 1);
        fetchPlaces();
      },
      {
        root: null,
      }
    );
    loaderObserver.observe(firstLoaderPlaceRef.current);
  }, []);

  return (
    <>
      <main
        id="Main"
        className="min-h-screen max-w-screen py-8 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-x-5 gap-y-10 mt-1"
      >
        {places.map((place) => (
          <Item place={place} key={place.title} />
        ))}
        <MainLoader ref={firstLoaderPlaceRef} />
      </main>
    </>
  );
}
