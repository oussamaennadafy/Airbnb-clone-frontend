const Type = ({ img, name }) => {
  return (
    <div className="w-[100px] opacity-50 hover:opacity-100 cursor-pointer first:opacity-100">
      <img className="w-7 mx-auto mb-1 text-gray" src={img} alt={name} />
      <p className="text-xs text-center">{name}</p>
    </div>
  );
};

export default Type;
