import { createScrollPosition } from "@solid-primitives/scroll";
import { Component, createMemo } from "solid-js";

export const ScrollUp: Component<{}> = (props) => {
  const scroll = createScrollPosition();
  const scrollY = () => scroll.y;

  const showScrollUp = createMemo(() => {
    if (scrollY() > 460) return true;
    else return false;
  });

  return (
    <a
      href="#"
      class="scrollup fixed right-4 z-10 rounded-lg bg-title py-1 px-2 opacity-80 transition-all duration-300 hover:bg-black sm:right-6 xl:right-10"
      classList={{
        "bottom-16 lg:bottom-12": showScrollUp(),
        "-bottom-1/4": !showScrollUp(),
      }}
    >
      <i class="uil uil-arrow-up scrollup__icon text-xl text-white xl:text-2xl"></i>
    </a>
  );
};
