import { createScrollPosition } from "@solid-primitives/scroll";
import { Component, createMemo } from "solid-js";
import { UilArrowUp } from "./Icons/UilArrowUp";

export const ScrollUp: Component<{}> = (props) => {
  const scroll = createScrollPosition(() =>
    typeof window === undefined ? undefined : window
  );
  const scrollY = () => scroll.y;

  const showScrollUp = createMemo(() => {
    const y = scrollY();
    if (y && y > 460) return true;
    else return false;
  });

  return (
    <a
      href="#"
      class="fixed right-4 z-10 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-title opacity-80 transition-all duration-300 hover:bg-black sm:right-6 xl:right-10 xl:h-8 xl:w-8"
      classList={{
        "bottom-16 lg:bottom-12": showScrollUp(),
        "-bottom-1/4": !showScrollUp(),
      }}
    >
      <UilArrowUp class="text-xl text-white xl:text-2xl" />
    </a>
  );
};
