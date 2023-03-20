function useSlider(
  viewportElement,
  elementToScroll,
  leftArrow,
  rightArrow,
  lastChild,
  margine = 0
) {
  const middleOfChild = Math.round(lastChild.clientWidth / 2);
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
    if (event.target.scrollLeft > middleOfChild)
      leftArrow.classList.remove("hidden");
    else leftArrow.classList.add("hidden");

    // right arrow
    if (
      event.target.scrollLeft + viewportElement.clientWidth + middleOfChild <=
      event.target.scrollWidth
    )
      rightArrow.classList.remove("hidden");
    else rightArrow.classList.add("hidden");

    // clear the scroll
    const remainder = event.target.scrollLeft % viewportElement.clientWidth;
  });
}

export default useSlider;
