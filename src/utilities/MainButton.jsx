function MainButton({ label }) {
  return (
    <button
      type="submit"
      className="w-full rounded-lg py-3 text-white font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-rose-500"
    >
      {label}
    </button>
  );
}

export default MainButton;
