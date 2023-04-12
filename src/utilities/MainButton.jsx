import Loader from "./Loader";

function MainButton({ label, loading }) {
  return (
    <button
      type="submit"
      className="w-full rounded-lg py-3 h-12 text-white font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-rose-500"
    >
      {loading ? <Loader /> : label}
    </button>
  );
}

export default MainButton;
