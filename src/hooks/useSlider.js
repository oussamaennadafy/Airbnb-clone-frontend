function useSlider(
  viewportElement,
  elementToScroll,
  leftArrow,
  rightArrow,
  margine = 0
) {
  // hide the left arrow at first time
  leftArrow.classList.add("hidden");

  // add the scroll event
  leftArrow.addEventListener("click", () => {
    elementToScroll.scrollTo({
      left: elementToScroll.scrollLeft - viewportElement.clientWidth + margine,
      behavior: "smooth",
    });
  });
  rightArrow.addEventListener("click", () => {
    elementToScroll.scrollTo({
      left: elementToScroll.scrollLeft + viewportElement.clientWidth - margine,
      behavior: "smooth",
    });
  });

  // logic to show or hide arrows
  elementToScroll.addEventListener("scroll", (event) => {
    // left arrow
    if (event.target.scrollLeft > 0) leftArrow.classList.remove("hidden");
    else leftArrow.classList.add("hidden");

    // right arrow
    if (
      event.target.scrollLeft + viewportElement.clientWidth <
      event.target.scrollWidth
    )
      rightArrow.classList.remove("hidden");
    else rightArrow.classList.add("hidden");
  });
}

export default useSlider;
