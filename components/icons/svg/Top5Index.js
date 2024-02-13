import * as React from "react";
const SvgTop5Index = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    fill="none"
    {...props}
  >
    <circle cx={200} cy={200} r={200} fill="url(#TOP5INDEX_svg__a)" />
    <defs>
      <linearGradient
        id="TOP5INDEX_svg__a"
        x1={40}
        x2={352.5}
        y1={45}
        y2={400}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="red" />
        <stop offset={1} stopColor="#05FF00" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTop5Index;
