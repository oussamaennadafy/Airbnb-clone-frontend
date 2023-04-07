import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Home/Header";
import { shareIcon, starIcon } from "../assets/icons";
import { HeartIcon } from "../assets/configurable-icons";

function Place() {
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/places/${id}`)
      .then((response) => response.json())
      .then((data) => setPlace(data.body.place))
      .catch(() => setError("something went wrong"))
      .finally(() => setLoader(false));
  }, []);
  return (
    <>
      <Header />
      <section className="px-12">
        <figure className="my-5">
          <figcaption>
            <h1 className="font-medium text-2xl">{place.title}</h1>
            <div className="mt-4 flex justify-between">
              <div className="flex gap-2 items-center">
                <img className="w-3" src={starIcon} alt="star icon" />
                <strong>{place.ratingAverage}</strong>.
                <p className="underline">{place.ratingsCount} reviews</p>.
                <p className="underline">{place.location}</p>
              </div>
              <div className="flex items-center">
                <button className="px-4 py-1 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <img className="w-5" src={shareIcon} alt="share icon" />
                  <span className="underline">share</span>
                </button>
                <button className="px-4 py-1 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <HeartIcon stroke="black" fill="white" />
                  <span className="underline">save</span>
                </button>
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
}

export default Place;
