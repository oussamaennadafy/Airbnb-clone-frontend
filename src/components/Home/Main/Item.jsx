import { useEffect, useRef, useState } from "react";
import { starIcon, leftArrow, rightArrow } from "../../../assets/icons";
import { HeartIcon } from "./../../../assets/configurable-icons";
import useSlider from "../../../hooks/useSlider";
import { Link } from "react-router-dom";

const Item = (props) => {
  // desctructer props
  const {
    _id,
    images,
    location,
    ratingAverage: rating,
    viewedTimesLastWeek: views,
    availability,
    price,
    from,
    to,
  } = props.place;

  // refs
  const scrollElementRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const lastElementRef = useRef(null);

  // impliment the useSlider custom hook
  useEffect(() => {
    useSlider(
      scrollElementRef.current.parentElement,
      scrollElementRef.current,
      leftArrowRef.current,
      rightArrowRef.current,
      lastElementRef.current
    );
  }, []);

  // handle Click Arrows
  const handleClickArrows = (e) => {
    e.stopPropagation();
  };

  const formatDate = (from, to) => {
    const fromMonth = from?.split(" ")[1];
    const fromDay = from?.split(" ")[2];
    const toMonth = to?.split(" ")[1];
    const toDay = to?.split(" ")[2];
    return `${fromMonth} ${fromDay} - ${
      toMonth !== fromMonth ? toMonth : ""
    } ${toDay}`;
  };

  return (
    <figure className="group cursor-pointer font-normal">
      <Link
        target="_blanc"
        to={`/places/${_id}`}
        className="relative min-w-full"
      >
        <div
          ref={scrollElementRef}
          className="h-[300px] min-w-full relative overflow-auto hide-scrollbar rounded-lg"
        >
          <div className="flex h-full min-w-full">
            {images.map((image) => {
              return (
                <img
                  ref={lastElementRef}
                  className="min-h-full min-w-full object-cover"
                  key={image}
                  src={image}
                />
              );
            })}
          </div>
        </div>
        <button className="absolute w-6 h-6 top-4 right-4 rounded-full">
          <HeartIcon stroke="white" fill="#00000080" />
        </button>
        <button
          ref={leftArrowRef}
          onClick={handleClickArrows}
          className="absolute flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center w-8 h-8 top-1/2 -translate-y-1/2 left-4 rounded-full bg-gray-100 hover:scale-105 hover:shadow-sm"
        >
          <img className="w-2/4 h-2/4" src={leftArrow} alt="left arrow" />
        </button>
        <button
          ref={rightArrowRef}
          onClick={handleClickArrows}
          className="absolute flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center w-8 h-8 top-1/2 -translate-y-1/2 right-4 rounded-full bg-gray-100 hover:scale-105 hover:shadow-sm"
        >
          <img className="w-2/4 h-2/4" src={rightArrow} alt="right arrow" />
        </button>
      </Link>
      <figcaption>
        <div className="flex justify-between pt-1">
          <strong className="font-semibold">{location}</strong>
          <div className="flex items-center">
            <img className="w-3" src={starIcon} alt="star icon" />
            <span className="ml-2">{rating}</span>
          </div>
        </div>
        <p className="text-gray-800 opacity-80">
          Viewed {views} times last week
        </p>
        <p className="text-gray-800 opacity-80">{formatDate(from, to)}</p>
        <p>
          <strong>MAD {price}</strong> <span>night</span>
        </p>
      </figcaption>
    </figure>
  );
};

export default Item;
