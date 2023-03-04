const Item = (props) => {
  // desctructer props
  const { photos, location, rating, views, period, price } = props;

  return (
    <a href="">
      <figure>
        <img className="w-full object-cover" src={photos[0]} />
        <figcaption>
          <div className="flex justify-between">
            <strong>{location}</strong>
            <div className="flex">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="h-3 w-3 fill-balack"
              >
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"
                ></path>
                <span>{rating}</span>
              </svg>
            </div>
          </div>
          <p>Viewed {views} times last week</p>
          <p>{period}</p>
          <strong>{price} night</strong>
        </figcaption>
      </figure>
    </a>
  );
};

export default Item;
