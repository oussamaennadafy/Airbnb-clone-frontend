function useSlider(element, viewWidth, leftArrow, rightArrow, margine = 0) {
  leftArrow.addEventListener("click", () => {
    element.scrollTo({
      left: element.scrollLeft - viewWidth.clientWidth + margine,
      behavior: "smooth",
    });
  });
  rightArrow.addEventListener("click", () => {
    element.scrollTo({
      left: element.scrollLeft + viewWidth.clientWidth - margine,
      behavior: "smooth",
    });
  });
}

export default useSlider;
