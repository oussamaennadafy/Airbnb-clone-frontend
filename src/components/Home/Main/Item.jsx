import {
  starIcon,
  leftArrow,
  rightArrow,
  heartIcon,
} from "../../../assets/icons";

const Item = (props) => {
  // desctructer props
  const { id, photos, location, rating, views, period, price } = props;

  // handle click of the item
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <figure onClick={handleClick} className="group cursor-pointer font-normal">
      <div className="h-[300px] w-full relative">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={photos[0]}
        />
        <button className="absolute w-6 h-6 top-4 right-4 rounded-full">
          <img className="w-full h-full" src={heartIcon} alt="heart icon" />
        </button>
        <button className="absolute flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center w-7 h-7 top-1/2 -translate-y-1/2 left-4 rounded-full bg-gray-100 hover:bg-gray-700">
          <img className="w-2/4 h-2/4" src={leftArrow} alt="left arrow" />
        </button>
        <button className="absolute flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center w-7 h-7 top-1/2 -translate-y-1/2 right-4 rounded-full bg-gray-100 hover:bg-gray-700">
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
