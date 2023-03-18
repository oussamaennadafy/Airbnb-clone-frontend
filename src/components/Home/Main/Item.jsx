import { useEffect, useRef } from "react";
import {
  starIcon,
  leftArrow,
  rightArrow,
  heartIcon,
} from "../../../assets/icons";
import useSlider from "../../../hooks/useSlider";

const Item = (props) => {
  // desctructer props
  const { id, photos, location, rating, views, period, price } = props;

  // refs
  const scrollElementRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  // impliment the useSlider custom hook
  useEffect(() => {
    useSlider(
      scrollElementRef.current,
      scrollElementRef.current.parentElement,
      leftArrowRef.current,
      rightArrowRef.current
    );
  });

  return (
    <figure onClick={handleClick} className="group cursor-pointer font-normal">
      <div
        ref={scrollElementRef}
        className="h-[300px] w-full relative overflow-auto hide-scrollbar"
      >
        <div className="flex h-full w-full">
          {photos.map((photo) => {
            return (
              <img
                className="min-h-full min-w-full object-cover rounded-lg"
                key={photo}
                src={photo}
              />
            );
          })}
        </div>
        <button className="absolute w-6 h-6 top-4 right-4 rounded-full">
          <img className="w-full h-full" src={heartIcon} alt="heart icon" />
        </button>
        <button
          ref={leftArrowRef}
          className="absolute flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center w-8 h-8 top-1/2 -translate-y-1/2 left-4 rounded-full bg-gray-100 hover:scale-105 hover:shadow-sm"
        >
          <img className="w-2/4 h-2/4" src={leftArrow} alt="left arrow" />
        </button>
        <button
          ref={rightArrowRef}
          className="absolute flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center w-8 h-8 top-1/2 -translate-y-1/2 right-4 rounded-full bg-gray-100 hover:scale-105 hover:shadow-sm"
        >
          <img className="w-2/4 h-2/4" src={rightArrow} alt="right arrow" />
        </button>
      </div>
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
        <p className="text-gray-800 opacity-80">{period}</p>
        <p>
          <strong>MAD {price}</strong> <span>night</span>
        </p>
      </figcaption>
    </figure>
  );
};

export default Item;
