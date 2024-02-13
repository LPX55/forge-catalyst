import * as React from "react";
const SvgPerpindex = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    fill="none"
    {...props}
  >
    <circle cx={200} cy={200} r={200} fill="url(#PERPINDEX_svg__a)" />
    <defs>
      <linearGradient
        id="PERPINDEX_svg__a"
        x1={40}
        x2={352.5}
        y1={45}
        y2={400}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F09" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgPerpindex;
