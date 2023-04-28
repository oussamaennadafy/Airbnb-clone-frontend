import { useEffect, useState, useRef } from "react";
import Item from "./Item";
import MainLoader from "./../../../utilities/LoadingTmplates/MainLoader";
import context from "./../../../context";

export default function Main({ selectedCategory: category }) {
  const [places, setPlaces] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(null);
  const mainRef = useRef(null);
  const fisrtChildLoaderRef = useRef(null);

  //

  useEffect(() => {
    const loaderObserver = new IntersectionObserver(
      ([firstEntry]) => {
        if (firstEntry.intersectionRatio > 0) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
      }
    );
    loaderObserver.observe(fisrtChildLoaderRef.current);
  }, []);

  //

  useEffect(() => {
    if (page) {
      const main = mainRef.current;
      const columns = Math.floor(
        main.clientWidth / main.firstChild.clientWidth
      );
      const rows = 2;
      const limit = columns * rows;
      setLimit(limit);
      fetch(
        `http://${context.SERVER_IP}:${context.SERVER_PORT}/api/v1/places?page=${page}&limit=${limit}`
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.result === 0) setLoader(false);
          else
            setPlaces((prevPlaces) => [...prevPlaces, ...response.body.places]);
        })
        .catch((err) => console.log(err));
    }
  }, [category, page]);

  //

  return (
    <>
      <main
        id="Main"
        ref={mainRef}
        className="min-h-screen max-w-screen py-8 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-x-5 gap-y-10 mt-1"
      >
        {places?.map((place) => (
          <Item place={place} key={place.title} />
        ))}
        {loader ? <MainLoader ref={fisrtChildLoaderRef} limit={limit} /> : null}
      </main>
    </>
  );
}
