import React from "react";

function LeftIcon({ className }) {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      // style="display: block; fill: gray; stroke: black; stroke-width: 5.33333; overflow: visible;"
    >
      <g fill="none">
        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
      </g>
    </svg>
  );
}

export default LeftIcon;
