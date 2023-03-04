import Type from "../utilities/filter/Type";
import { useEffect, useState } from "react";

function Filter() {
  const [shadow, SetShadow] = useState(false);

  useEffect(() => {
    const HomeObserverOptions = {
      root: null,
      threshold: 0.1,
    };
    const HomeObserverFunction = (entries) => {
      const entry = entries[0];
      console.log("set state");
      SetShadow(!entry.isIntersecting);
    };
    new IntersectionObserver(HomeObserverFunction, HomeObserverOptions).observe(
      document.querySelector("#aboveHeader")
    );
  }, []);

  return (
    <section
      id="Filter"
      className={`flex items-center p-8 sticky top-[66px] bg-white pb-3 gap-6 mb-3 ${
        shadow && "shadow-md"
      }`}
    >
      <div className="flex items-center grow overflow-x-auto gap-14 scrollbar-hide">
        <Type
          name="Treanding"
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
      <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl">
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[14px] w-[14px] fill-black"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>
        <span>Filter</span>
      </button>
    </section>
  );
}

export default Filter;
