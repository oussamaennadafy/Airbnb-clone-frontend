/* components */
import Type from "./Type";
/* hook */
import { useEffect, useState, useRef } from "react";
/* custom hook */
import useSlider from "../../../hooks/useSlider";
/* assets */
import {
  leftArrow,
  rightArrow,
  filterIcon,
  closeIcon,
} from "../../../assets/icons";

/* static types */
// import types from "../../../static/Types";

function Filter() {
  const [scroll, setScroll] = useState(false);
  const [types, setTypes] = useState([]);
  const [displayFilter, setdisplayFilter] = useState(true);
  const containerRef = useRef();
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();

  useEffect(() => {
    useSlider(
      containerRef.current,
      leftArrowRef.current,
      rightArrowRef.current
    );
  }, []);

  // handle the diplay of filter
  useEffect(() => {
    const homeObserverOptions = {
      root: null,
      threshold: 0,
    };
    const homeObserverFunction = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setdisplayFilter(true);
      }
      setScroll(!entry.isIntersecting);
    };
    new IntersectionObserver(homeObserverFunction, homeObserverOptions).observe(
      document.querySelector("#aboveHeader")
    );
  }, []);
  // get categories
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setTypes(data.body.categories))
      .catch(() => console.log("error accure"));
  }, []);

  return (
    <section
      className={`flex items-center transition-all px-12 pt-[16px] h-[86px] sticky md:top-[66px] -top-4 bg-white gap-5 overflow-y-hidden z-10 ${
        scroll ? "shadow-md" : ""
      } ${
        displayFilter
          ? ""
          : "opacity-0 -translate-y-full pointer-events-none invisible"
      }`}
    >
      <div className="flex items-center grow h-full overflow-x-auto relative">
        <button
          ref={leftArrowRef}
          className="absolute z-10 left-1/1 h-full w-8 left-arrow-shadow bg-white flex items-center transition-all"
        >
          <a className="z-10 left-1/1 min-h-max min-w-max p-2 bg-white border border-gray-300 rounded-full">
            <img src={leftArrow} alt="left arrow" className="w-3" />
          </a>
        </button>
        <div
          ref={containerRef}
          className="flex items-center grow gap-14 h-full overflow-x-auto hide-scrollbar"
        >
          {types?.map((type) => {
            return (
              <Type
                key={type.label}
                label={type.label}
                active={false}
                src={type.src}
              />
            );
          })}
        </div>
        <button
          ref={rightArrowRef}
          className="z-10 left-1/1 h-full w-max right-arrow-shadow bg-white flex items-center transition-all"
        >
          <a className="min-h-max min-w-max p-2 bg-white border border-gray-300 rounded-full">
            <img src={rightArrow} alt="right arrow" className="w-3" />
          </a>
        </button>
      </div>
      <button className="flex items-center gap-2 min-w-max px-4 py-3 border border-gray-300 rounded-xl">
        <img src={filterIcon} alt="filter icon" className="h-3" />
        <span>Filter</span>
      </button>
      <button
        onClick={() => setdisplayFilter(false)}
        className={`${
          scroll ? "block" : "hidden"
        } p-3 rounded-full min-w-max bg-gray-50 hover:bg-gray-100`}
      >
        <img className="min-w-5 md:min-w-9" src={closeIcon} alt="close icon" />
      </button>
    </section>
  );
}

export default Filter;
