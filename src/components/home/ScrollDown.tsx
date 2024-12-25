import { Component } from "solid-js";
import { FiArrowDown } from "solid-icons/fi";

export const ScrollDown: Component<{}> = (props) => {
  return (
    <div class="hidden lg:ml-24 lg:block">
      <a href="#about" class="inline-flex items-center">
        <ScrollIcon />
        <span class="ml-[2px] mr-1 font-medium text-title">Scroll Down</span>
        <FiArrowDown class="text-xl text-title" />
      </a>
    </div>
  );
};

const ScrollIcon = () => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 247 390"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "1.5",
    }}
  >
    <path
      class="animate-scroll"
      d="M123.359,79.775l0,72.843"
      style={{
        fill: "none",
        stroke: "#333",
        "stroke-width": "20px",
      }}
    ></path>
    <path
      id="mouse"
      d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
      style={{
        fill: "none",
        stroke: "#333",
        "stroke-width": "20px",
      }}
    ></path>
  </svg>
);
