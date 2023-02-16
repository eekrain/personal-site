import {
  createViewportObserver,
  createVisibilityObserver,
} from "@solid-primitives/intersection-observer";
import { Component, createEffect, JSX } from "solid-js";
import { ScrollDown } from "../../components/ScrollDown";
import { Social } from "../../components/Social";
import { setActivePage } from "../../utils/activePage";
import { Data } from "./Data";

export const Home: Component<{ mainPhoto?: JSX.Element }> = (props) => {
  let section: HTMLElement | undefined;

  const visible = createVisibilityObserver({ threshold: 0.6 })(() => section);

  createEffect(() => {
    if (visible()) setActivePage("home");
  });

  return (
    <>
      <div id="home" class="relative -top-24" />
      <section
        ref={section}
        class="home pt-20 lg:h-[calc(100vh_-_4rem)] lg:pt-24"
        id="home"
      >
        <div class="home__container grid lg:gap-y-8 xl:gap-y-12">
          <div class="grid items-center gap-y-4 md:grid-cols-[0.5fr_3fr] lg:grid-cols-[70px_repeat(2,_1fr)] lg:gap-x-5 xl:grid-cols-[116px_repeat(2,_1fr)] xl:gap-x-8 ">
            <Social />
            {/* {props.mainPhoto} */}
            <div class="relative h-[200px] w-[200px] animate-profile_animate overflow-clip lg:order-1 lg:h-[250px] lg:w-[250px] lg:justify-self-center xl:h-[300px] xl:w-[300px] xl:shadow-innerProfileXL">
              <div class="absolute top-0 left-0 z-10 h-[200px] w-[200px] animate-profile_animate shadow-innerProfileMD lg:h-[250px] lg:w-[250px] lg:shadow-innerProfileLG xl:h-[300px] xl:w-[300px] xl:shadow-innerProfileXL" />
              {props.mainPhoto}
            </div>
            {/* <div class="home__img h-[200px] w-[200px] animate-profile_animate shadow-innerProfileMD lg:order-1 lg:h-[250px] lg:w-[250px] lg:justify-self-center lg:shadow-innerProfileLG xl:h-[300px] xl:w-[300px] xl:shadow-innerProfileXL" /> */}
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};
