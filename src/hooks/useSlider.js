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
}

export default useSlider;
