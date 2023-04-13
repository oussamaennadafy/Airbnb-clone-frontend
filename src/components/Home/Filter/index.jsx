/* components */
import Category from "./Category";
/* hook */
import { useEffect, useState, useRef } from "react";
/* custom hook */
import useSlider from "../../../hooks/useSlider";
/* assets */
import { filterIcon, closeIcon } from "../../../assets/icons";
import { LeftArrow, RightArrow } from "../../../assets/configurable-icons";
import CategoryLoader from "../../../utilities/LoadingTmplates/CategoryLoader";

/* static Categories */
// import Categories from "../../../static/Categories";

function Filter({ selectedCategory, setSetselectedCategory }) {
  const [scroll, setScroll] = useState(false);
  const [Categories, setCategories] = useState([]);
  const [displayFilter, setdisplayFilter] = useState(true);
  const containerRef = useRef();
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();

  useEffect(() => {
    useSlider(
      containerRef.current,
      leftArrowRef.current,
      rightArrowRef.current,
      100
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
      .then((data) => setCategories(data.body.categories))
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
          className="h-full bg-white z-10 w-9 transition-all absolute top-1/2 flex items-center justify-center -translate-y-1/2 left-0 left-btn left-arrow-shadow"
        >
          <div className="bg-white hover:scale-105 transition-all hover:shadow-sm active:scale-100 w-max h-max p-2 rounded-full border border-gray-300">
            <LeftArrow className="w-3 h-3 stroke-black stroke-[4]" />
          </div>
        </button>
        <div
          ref={containerRef}
          className="flex items-center grow gap-14 h-full overflow-x-auto hide-scrollbar"
        >
          {Categories.length
            ? Categories.map((type) => {
                return (
                  <Category
                    key={type.label}
                    label={type.label}
                    setSetselectedCategory={setSetselectedCategory}
                    active={type.label === selectedCategory}
                    src={type.src}
                  />
                );
              })
            : new Array(30)
                .fill(null)
                .map((_, index) => <CategoryLoader key={index} />)}
        </div>
        <button
          ref={rightArrowRef}
          className="h-full bg-white w-9 absolute top-1/2 flex items-center justify-center -translate-y-1/2 right-0 right-btn transition-all right-arrow-shadow"
        >
          <div className="w-max h-max p-2 hover:scale-105 hover:shadow-sm active:scale-100 transition-all rounded-full border border-gray-300">
            <RightArrow className="w-3 h-3 stroke-black stroke-[4]" />
          </div>
        </button>
      </div>
      <button className="flex items-center gap-2 min-w-max px-4 py-3 border border-gray-300 rounded-xl">
        <img src={filterIcon} alt="filter icon" className="h-3" />
        <span>Filter</span>
      </button>
      {scroll && (
        <button
          onClick={() => setdisplayFilter(false)}
          className={`p-3 rounded-full min-w-max bg-gray-50 hover:bg-gray-100`}
        >
          <img
            className="min-w-5 md:min-w-9"
            src={closeIcon}
            alt="close icon"
          />
        </button>
      )}
    </section>
  );
}

export default Filter;
