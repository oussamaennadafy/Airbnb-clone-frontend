import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Home/Header";
import ReserveCard from "./../components/Place/ReserveCard";
import {
  shareIcon,
  starIcon,
  superHostIcon,
  locationIcon,
  freeCancelationIcon,
} from "../assets/icons";
import { HeartIcon } from "../assets/configurable-icons";
import AuthModal from "../utilities/AuthModal";

function Place() {
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [error, setError] = useState("");
  //
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayAuthModal, setDisplayAuthModal] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu((previousMenuState) => !previousMenuState);
  };
  //
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/places/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.body.place);
        setPlace(data.body.place);
      })
      .catch(() => setError("something went wrong"));
  }, []);
  return (
    <>
      <AuthModal
        displayAuthModal={displayAuthModal}
        setDisplayAuthModal={setDisplayAuthModal}
      />
      <Header
        setDisplayAuthModal={setDisplayAuthModal}
        displayMenu={displayMenu}
        toggleMenu={toggleMenu}
      />
      {Object.keys(place).length ? (
        <section className="lg:px-28 md:px-12 sm:px-6 px-4">
          <figure className="mt-5 mb-12">
            <figcaption className="mb-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2 lg:h-[21rem] rounded-md overflow-hidden">
              {place.images?.map((image) => (
                <div
                  key={image}
                  className="lg:first-of-type:col-span-2 lg:first-of-type:row-span-2 h-96 lg:h-full cursor-pointer relative"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black hover:opacity-20 opacity-0 transition" />
                  <img className="object-cover h-full w-full" src={image} />
                </div>
              ))}
            </div>
          </figure>
          <div className="grid grid-cols-[1fr-1fr] lg:grid-cols-[auto,40%] gap-10 lg:gap-24">
            <div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-5">
                <div>
                  <h2 className="font-medium text-xl text-gray-900">
                    Dome hosted by Natura
                  </h2>
                  <p>2 guests . 1 bedroom . 1 bed . 1 bath</p>
                </div>
                <img
                  className="rounded-full w-10 h-10"
                  src={place.images?.[0]}
                  alt="avatar"
                />
              </div>
              <div className="pt-5 border-b border-gray-300">
                <div className="flex items-start gap-4 pb-4">
                  <img
                    className="w-7"
                    src={superHostIcon}
                    alt="superHost Icon"
                  />
                  <div>
                    <strong className="text-gray-900 font-semibold">
                      Natura is a Superhost
                    </strong>
                    <p className="text-gray-600">
                      Superhosts are experienced, highly rated hosts who are
                      committed to providing great stays for guests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4">
                  <img
                    className="w-7"
                    src={locationIcon}
                    alt="superHost Icon"
                  />
                  <div>
                    <strong className="text-gray-900 font-semibold">
                      Great location
                    </strong>
                    <p className="text-gray-600">
                      recent guests gave the location good rating.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-5">
                  <img
                    className="w-7"
                    src={freeCancelationIcon}
                    alt="superHost Icon"
                  />
                  <div>
                    <strong className="text-gray-900 font-semibold">
                      Free Cancelation
                    </strong>
                    <p className="text-gray-600">
                      you can cancel your reservation any time as soon as your
                      not in the house, feel free and take your time
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <img
                  src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                  className="w-36 mb-3"
                  alt=""
                />
                <p className="mb-2">
                  Every booking includes free protection from Host
                  cancellations, listing inaccuracies, and other issues like
                  trouble checking in.
                </p>
                <p className="font-semibold underline">Learn more</p>
              </div>
            </div>
            <ReserveCard place={place} />
          </div>
        </section>
      ) : (
        <div className="lg:px-28 md:px-12 sm:px-6 px-4">
          <figure className="mt-7 mb-12">
            <figcaption className="mb-5">
              <div className="h-8 w-5/12 bg-gray-200"></div>
              <div className="h-5 mt-3 w-3/12 bg-gray-200"></div>
            </figcaption>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2 lg:h-[21rem] rounded-md overflow-hidden">
              <div className="bg-gray-200 col-span-2 row-span-2"></div>
              <div className="bg-gray-200"></div>
              <div className="bg-gray-200"></div>
              <div className="bg-gray-200"></div>
              <div className="bg-gray-200"></div>
            </div>
          </figure>
          <div className="grid grid-cols-[1fr-1fr] lg:grid-cols-[auto,40%] gap-10 lg:gap-24">
            <div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-5">
                <div className="w-full">
                  <div className="h-6 bg-gray-200 w-8/12 mb-2"></div>
                  <div className="h-4 bg-gray-200 w-6/12 mb-2"></div>
                </div>
                <div className="rounded-full w-10 h-10 flex-shrink-0 bg-gray-200"></div>
              </div>
              <div className="pt-5 border-b border-gray-300">
                <div className="flex items-start gap-4 pb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200"></div>
                  <div className=" w-full">
                    <div className="w-5/12 h-5 bg-gray-200 mb-3"></div>
                    <div className="w-10/12 bg-gray-200 h-10"></div>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200"></div>
                  <div className=" w-full">
                    <div className="w-5/12 h-5 bg-gray-200 mb-3"></div>
                    <div className="w-10/12 bg-gray-200 h-10"></div>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200"></div>
                  <div className=" w-full">
                    <div className="w-5/12 h-5 bg-gray-200 mb-3"></div>
                    <div className="w-10/12 bg-gray-200 h-10"></div>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="w-44 mb-3 h-10 bg-gray-200"></div>
                <div className="bg-gray-200"></div>
                <div className="bg-gray-200 h-12 w-full"></div>
                <div className="bg-gray-200 h-5 w-28 mt-3"></div>
              </div>
            </div>
            {/* <ReserveCard place={place} /> */}
            <div className="h-full w-full rounded-md bg-gray-200"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Place;
