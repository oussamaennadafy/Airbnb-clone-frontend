import { useEffect, useState } from "react";
import Item from "./Item";

export default function Main() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/places")
      .then((response) => response.json())
      .then((response) => {
        setPlaces(response.body.places);
        console.log(response.body.places[0]);
      });
  }, []);
  return (
    <main
      id="Main"
      className="min-h-screen max-w-screen py-8 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-x-5 gap-y-10 mt-1"
    >
      {places.map((place) => (
        <Item
          key={place._id}
          photos={place.images}
          location={place.location}
          rating={place.ratingAverage}
          views={place.viewedTimesLastWeek}
          availability="Feb 26 - Mar 4"
          price={place.price}
        />
      ))}
    </main>
  );
}
