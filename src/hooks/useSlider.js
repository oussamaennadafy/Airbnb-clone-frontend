function useSlider(
  element,
  viewportElement,
  leftArrow,
  rightArrow,
  margine = 0
) {
  leftArrow.addEventListener("click", () => {
    element.scrollTo({
      left: element.scrollLeft - viewportElement.clientWidth + margine,
      behavior: "smooth",
    });
  });
  rightArrow.addEventListener("click", () => {
    element.scrollTo({
      left: element.scrollLeft + viewportElement.clientWidth - margine,
      behavior: "smooth",
    });
  });
  element.addEventListener("scroll", (event) => {
    if (event.target.scrollLeft >= viewportElement.clientWidth) {
    }
  });
}

export default useSlider;
