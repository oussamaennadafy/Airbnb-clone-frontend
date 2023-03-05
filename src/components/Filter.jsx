import Type from "../utilities/filter/Type";
import { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import filterIcon from "../assets/filter-icon.svg";
import closeIcon from "../assets/close-icon.svg";

function Filter() {
  const [scroll, SetScroll] = useState(false);
  const filterRef = useRef();
  const scrollRef = useRef();
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();

  useEffect(() => {
    const homeObserverOptions = {
      root: null,
      threshold: 0.1,
    };
    const homeObserverFunction = (entries) => {
      const entry = entries[0];
      SetScroll(!entry.isIntersecting);
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
        leftArrowRef.current.classList.toggle("opacity-0");
        leftArrowRef.current.classList.toggle("pointer-events-none");
        leftArrowRef.current.classList.toggle("invisible");
      }
      // check for the left arrow
      if (entries[0].target === lastElementChild) {
        rightArrowRef.current.classList.toggle("opacity-0");
        rightArrowRef.current.classList.toggle("pointer-events-none");
        rightArrowRef.current.classList.toggle("invisible");
      }
    };
    const filterObserver = new IntersectionObserver(
      filterObserverFunction,
      filterObserverOptions
    );
    filterObserver.observe(firstElementChild);
    filterObserver.observe(lastElementChild);
  }, []);

  const hideFilter = () => {
    filterRef.current.classList.add(
      "opacity-0",
      "-translate-y-full",
      "pointer-events-none",
      "invisible"
    );
  };

  const handleClick = () => {
    console.dir(scrollRef.current.parentElement);
  };

  return (
    <section
      ref={filterRef}
      className={`flex items-center transition-all px-8 pt-[14px] h-[86px] sticky top-[66px] bg-white gap-5 overflow-y-hidden ${
        scroll ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center grow h-full overflow-x-auto scrollbar-hide">
        <div
          onClick={handleClick}
          ref={leftArrowRef}
          className="absolute z-10 left-1/1 h-full w-8 left-arrow-shadow bg-white flex items-center transition-all opacity-0 pointer-events-none invisible"
        >
          <button className="z-10 left-1/1 min-h-max min-w-max p-2 bg-white border border-gray-300 rounded-full">
            <img src={leftArrow} alt="left arrow" className="w-3" />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex items-center grow gap-14 h-full overflow-x-auto scrollbar-hide"
        >
          <Type
            name="Trending"
            active={true}
            img="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
          />
          <Type
            name="Riads"
            img="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
          />
          <Type
            name="Iconic cities"
            img="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
          />
          <Type
            name="Beachfont"
            img="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
          />
          <Type
            name="Amazing pools"
            img="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
          />
          <Type
            name="Islands"
            img="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
          />
          <Type
            name="Riads"
            img="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
          />
          <Type
            name="Iconic cities"
            img="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
          />
          <Type
            name="Beachfont"
            img="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
          />
          <Type
            name="Amazing pools"
            img="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
          />
          <Type
            name="Islands"
            img="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
          />
          <Type
            name="Riads"
            img="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
          />
          <Type
            name="Iconic cities"
            img="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
          />
          <Type
            name="Beachfont"
            img="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
          />
          <Type
            name="Amazing pools"
            img="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
          />
          <Type
            name="Islands"
            img="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
          />
          <Type
            name="Riads"
            img="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
          />
          <Type
            name="Iconic cities"
            img="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
          />
          <Type
            name="Beachfont"
            img="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
          />
          <Type
            name="Amazing pools"
            img="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
          />
          <Type
            name="Islands"
            img="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
          />
        </div>
        <div
          ref={rightArrowRef}
          className="z-10 left-1/1 h-full w-max right-arrow-shadow bg-white flex items-center transition-all"
        >
          <button className="min-h-max min-w-max p-2 bg-white border border-gray-300 rounded-full">
            <img src={rightArrow} alt="right arrow" className="w-3" />
          </button>
        </div>
      </div>
      <button className="flex items-center gap-2 min-w-max px-4 py-3 border border-gray-300 rounded-xl">
        <img src={filterIcon} alt="filter icon" className="h-3" />
        <span>Filter</span>
      </button>
      <button onClick={hideFilter} className={scroll ? "block" : "hidden"}>
        <img className="w-9" src={closeIcon} alt="close icon" />
      </button>
    </section>
  );
}

export default Filter;
