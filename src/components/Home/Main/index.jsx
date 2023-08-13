import { useEffect, useState } from "react";
import Item from "./Item";
import MainLoader from "./../../../utilities/LoadingTmplates/MainLoader";
import context from "./../../../context";

export default function Main({ selectedCategory: category }) {
  const [places, setPlaces] = useState([]);
  const [loader, setLoader] = useState(true);
  // const [page, setPage] = useState(1);

  // const mainRef = useRef(null);
  // const firstLoadingFigureRef = useRef(null);

  // const getLimit = useCallback(() => {
  //   const columns = Math.floor(
  //     mainRef?.current?.clientWidth / mainRef?.current?.firstChild?.clientWidth
  //   );
  //   const ROWS = 2;
  //   const limit = columns * ROWS;
  //   return limit;
  // }, []);

  // useEffect(() => {
  //   const loaderObserverCallback = ([firstEntry], observer) => {
  //     if (
  //       firstEntry.intersectionRatio > 0 &&
  //       firstEntry.intersectionRatio < 1
  //     ) {
  //       setPage((prevPage) => prevPage + 1);
  //     }
  //   };
  //   const loaderObserverOptions = {
  //     root: null,
  //   };
  //   const loaderObserver = new IntersectionObserver(
  //     loaderObserverCallback,
  //     loaderObserverOptions
  //   );
  //   if (firstLoadingFigureRef) {
  //     loaderObserver.observe(firstLoadingFigureRef.current);
  //   }
  //   return () => {
  //     loaderObserver.disconnect();
  //   };
  // }, []);

  // useEffect(() => {
  //   setLoader(true);
  //   // const limit = getLimit();
  //   console.log(`fetch page ${page}, with limit of ${limit} items`);
  //   const fields =
  //     "_id,images,location,ratingAverage,viewedTimesLastWeek,price,from,to";
  //   fetch(
  //     `http://${context.SERVER_IP}:${context.SERVER_PORT}/api/v1/places?fields=${fields}&category=${category}`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.body.places.length === 0) setLoader(false);
  //       else
  //         setPlaces((prevPlaces) => [...prevPlaces, ...response.body.places]);
  //     })
  //     .catch((err) => console.log(err));
  // }, [page]);

  useEffect(() => {
    setLoader(true);
    console.log("re fetch");
    // const limit = getLimit();
    // console.log(`fetch page ${page}, with limit of ${limit} items`);
    const abortController = new AbortController();
    const fields =
      "_id,images,location,ratingAverage,viewedTimesLastWeek,price,from,to";
    fetch(
      `${context.HOST_NAME}/api/v1/places?fields=${fields}&category=${category}`,
      {
        signal: abortController.signal,
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // if (response.body.places.length === 0) setLoader(false);
        setPlaces(response.body.places);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
    return () => {
      abortController.abort();
    };
  }, [category]);
  // loading
  if (loader)
    return (
      <div className="min-h-screen max-w-screen py-8 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-x-5 gap-y-10 mt-1">
        <MainLoader limit={10} />
      </div>
    );

  // no item found
  if (!places.length)
    return (
      <div className="min-h-screen max-w-screen py-8 px-12 text-center mt-4 text-3xl">
        no places found in this category
      </div>
    );
  return (
    <main
      id="Main"
      className="min-h-screen max-w-screen py-8 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-x-5 gap-y-10 mt-1"
    >
      {places.map((place) => (
        <Item place={place} key={place._id} />
      ))}
    </main>
  );
}
