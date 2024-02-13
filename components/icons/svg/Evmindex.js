import * as React from "react";
const SvgEvmindex = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    fill="none"
    {...props}
  >
    <circle cx={200} cy={200} r={200} fill="url(#EVMINDEX_svg__a)" />
    <defs>
      <linearGradient
        id="EVMINDEX_svg__a"
        x1={40}
        x2={352.5}
        y1={45}
        y2={400}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2400FF" />
        <stop offset={1} stopColor="#8F00FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgEvmindex;
