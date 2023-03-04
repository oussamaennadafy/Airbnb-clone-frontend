const Type = ({ img, name }) => {
  return (
    <div className=" opacity-50 hover:opacity-100 cursor-pointer first-of-type:opacity-100">
      <img className="w-7 mx-auto mb-1 text-gray" src={img} alt={name} />
      <p className="text-xs text-center whitespace-nowrap">{name}</p>
    </div>
  );
};

export default Type;
