function useSlider(
  element,
  viewportElement,
  leftArrow,
  rightArrow,
  margine = 0
) {
  // console.log("element to scroll", element);
  // console.log("view port element", viewportElement);
  // console.log("left arrow", leftArrow);
  // console.log("right arrow", rightArrow);
  // return;
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
