import starIcon from "../../assets/star-icon.svg";

const Item = (props) => {
  // desctructer props
  const { photos, location, rating, views, period, price } = props;

  return (
    <a href="">
      <figure className="font-normal">
        <img
          className="h-[300px] w-full object-cover rounded-lg"
          src={photos[0]}
        />
        <figcaption>
          <div className="flex justify-between pt-1">
            <strong>{location}</strong>
            <div className="flex items-center">
              <img className="w-3" src={starIcon} alt="star icon" />
              <span className="ml-2">{rating}</span>
            </div>
          </div>
          <p className="text-gray-800">Viewed {views} times last week</p>
          <p className="text-gray-800">{period}</p>
          <p>
            <strong>${price}</strong> <span>night</span>
          </p>
        </figcaption>
      </figure>
    </a>
  );
};

export default Item;
