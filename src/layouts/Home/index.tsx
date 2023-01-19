import { Component } from "solid-js";
import { ScrollDown } from "../../components/ScrollDown";
import { Social } from "../../components/Social";
import { Data } from "./Data";

export const Home: Component<{}> = (props) => {
  return (
    <section class="home pt-20 pb-20 lg:pt-24 lg:pb-0" id="home">
      <div class="home__container grid lg:gap-y-8 xl:gap-y-12">
        <div class="grid items-center gap-y-4 md:grid-cols-[0.5fr_3fr] lg:grid-cols-[70px_repeat(2,_1fr)] lg:gap-x-5 xl:grid-cols-[116px_repeat(2,_1fr)] xl:gap-x-8 ">
          <Social />
          <div class="home__img animate-profile_animate shadow-innerProfileMD w-[200px] h-[200px] lg:order-1 lg:justify-self-center lg:shadow-innerProfileLG lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] xl:shadow-innerProfileXL" />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};
