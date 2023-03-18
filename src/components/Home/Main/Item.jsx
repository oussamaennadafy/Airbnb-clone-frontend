import { useEffect, useRef, useState } from "react";
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

  //states
  const [displayLeftArrow, setDisplayLeftArrow] = useState(false);
  const [displayRightArrow, setDisplayRightArrow] = useState(true);

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
  }, []);

  // logic of arrows display
  useEffect(() => {
    const parentElement = scrollElementRef.current;
    const firstElementChild = parentElement.firstElementChild.firstElementChild;
    const lastElementChild = parentElement.lastElementChild.lastElementChild;

    const filterObserverOptions = {
      root: parentElement,
      threshold: 0.1,
    };
    const filterObserverFunction = (entries) => {
      // get rid of the first initial entries
      if (entries.length > 1) return;
      // check for the left arrow
      if (entries[0].target === firstElementChild) {
        setDisplayLeftArrow((prevState) => !prevState);
      }
      // check for the left arrow
      if (entries[0].target === lastElementChild) {
        setDisplayRightArrow((prevState) => !prevState);
      }
    };
    const filterObserver = new IntersectionObserver(
      filterObserverFunction,
      filterObserverOptions
    );
    filterObserver.observe(firstElementChild);
    filterObserver.observe(lastElementChild);
  }, []);

  return (
    <figure className="group cursor-pointer font-normal">
      <div className="relative w-full">
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
        </div>
        <button className="absolute w-6 h-6 top-4 right-4 rounded-full">
          <img className="w-full h-full" src={heartIcon} alt="heart icon" />
        </button>
        <button
          ref={leftArrowRef}
          className={`absolute flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center w-8 h-8 top-1/2 -translate-y-1/2 left-4 rounded-full bg-gray-100 hover:scale-105 hover:shadow-sm ${
            displayLeftArrow ? "" : "opacity-0 pointer-events-none invisible"
          }`}
        >
          <img className="w-2/4 h-2/4" src={leftArrow} alt="left arrow" />
        </button>

        {displayRightArrow && (
          <button
            ref={rightArrowRef}
            className="absolute flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center w-8 h-8 top-1/2 -translate-y-1/2 right-4 rounded-full bg-gray-100 hover:scale-105 hover:shadow-sm"
          >
            <img className="w-2/4 h-2/4" src={rightArrow} alt="right arrow" />
          </button>
        )}
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
