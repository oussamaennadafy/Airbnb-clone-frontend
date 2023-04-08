function useformatPrice(price) {
  return new Intl.NumberFormat("en-ma", {
    style: "currency",
    currency: "MAD",
  })
    .format(price)
    .split(".")[0];
}

export default useformatPrice;
