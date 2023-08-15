import { forwardRef } from "react";

const Line = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500"
    ></div>
  );
});

export default Line;
