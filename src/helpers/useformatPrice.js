function useformatPrice(price)
{
  return new Intl.NumberFormat("us-en", {
    style: "currency",
    currency: "MAD",
  })
    .format(price)
    .split(".")[0];
}

export default useformatPrice;
