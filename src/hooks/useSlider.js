function useSlider(
  container,
  leftArrow,
  rightArrow,
  margin = 0
)
{
  // hide the left arrow at first time
  leftArrow.classList.add("hidden");

  // add the functionality to scroll left and right
  leftArrow.addEventListener("click", () =>
  {
    container.scrollTo({
      left: container.scrollLeft - container?.clientWidth + margin,
      behavior: "smooth",
    });
  });
  rightArrow.addEventListener("click", () =>
  {
    container.scrollTo({
      left: container.scrollLeft + container?.clientWidth - margin,
      behavior: "smooth",
    });
  });

  // logic to show or hide arrows
  container.addEventListener("scroll", (event) =>
  {
    // left arrow
    if (event.target.scrollLeft > 0)
      leftArrow.classList.remove("hidden");
    else leftArrow.classList.add("hidden");

    // right arrow
    if (
      event.target.scrollLeft + container?.clientWidth + 10 <=
      event.target.scrollWidth
    )
      rightArrow.classList.remove("hidden");
    else rightArrow.classList.add("hidden");
  });
}

export default useSlider;
