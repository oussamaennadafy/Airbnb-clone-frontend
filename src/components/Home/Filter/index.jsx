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
import types from "../../../static/Types";

function Filter() {
  const [scroll, setScroll] = useState(false);
  const [displayFilter, setdisplayFilter] = useState(true);
  const [displayLeftArrow, setDisplayLeftArrow] = useState(false);
  const [displayRightArrow, setDisplayRightArrow] = useState(true);
  const scrollRef = useRef();
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();

  useEffect(() => {
    useSlider(
      scrollRef.current,
      scrollRef.current.parentElement,
      leftArrowRef.current,
      rightArrowRef.current,
      100
    );
  }, []);

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

  useEffect(() => {
    const parentElement = scrollRef.current;
    const firstElementChild = parentElement.firstElementChild;
    const lastElementChild = parentElement.lastElementChild;

    const filterObserverOptions = {
      root: parentElement,
      threshold: 0.1,
    };
    const filterObserverFunction = (entries) => {
      // get rid of the first initial entries
      if (entries.length > 1) return;
      // check for the left arrow
      if (entries[0].target === firstElementChild) {
        console.log("left arrow");
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
    <section
      className={`flex items-center transition-all px-8 pt-[16px] h-[86px] sticky md:top-[66px] -top-4 bg-white gap-5 overflow-y-hidden ${
        scroll ? "shadow-md" : ""
      } ${
        displayFilter
          ? ""
          : "opacity-0 -translate-y-full pointer-events-none invisible"
      }`}
    >
      <div className="flex items-center grow h-full overflow-x-auto scrollbar-hide relative">
        <button
          ref={leftArrowRef}
          className={`absolute z-10 left-1/1 h-full w-8 left-arrow-shadow bg-white flex items-center transition-all ${
            !displayLeftArrow ? "opacity-0 pointer-events-none invisible" : ""
          }`}
        >
          <a className="z-10 left-1/1 min-h-max min-w-max p-2 bg-white border border-gray-300 rounded-full">
            <img src={leftArrow} alt="left arrow" className="w-3" />
          </a>
        </button>
        <div
          ref={scrollRef}
          className="flex items-center grow gap-14 h-full overflow-x-auto scrollbar-hide"
        >
          {types.map((type) => {
            return (
              <Type
                key={type.name}
                name={type.name}
                active={type.active}
                img={type.img}
              />
            );
          })}
        </div>
        <button
          ref={rightArrowRef}
          className={`z-10 left-1/1 h-full w-max right-arrow-shadow bg-white flex items-center transition-all ${
            !displayRightArrow ? "opacity-0 pointer-events-none invisible" : ""
          }`}
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
