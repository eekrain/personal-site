import {
  createViewportObserver,
  createVisibilityObserver,
} from "@solid-primitives/intersection-observer";
import { Component, createEffect } from "solid-js";
import { setActivePage } from "../../utils/activePage";
import { BackEnd } from "./BackEnd";
import { FrontEnd } from "./FrontEnd";

export const Skills: Component<{}> = (props) => {
  let section: HTMLElement | undefined;

  const visible = createVisibilityObserver({ threshold: 0.6 })(() => section);

  createEffect(() => {
    if (visible()) setActivePage("skills");
  });

  return (
    <>
      <section ref={section} class="skills">
        <div class="relative mt-24 lg:-top-16" id="skills" />
        <h2 class="section__title text-center text-4xl text-title">Skills</h2>
        <span class="section__subtitle mb-12 block text-center lg:mb-16">
          My Technical Level
        </span>
        <div class="skills__container container mx-auto grid justify-center gap-y-8  md:grid-cols-1 lg:grid-cols-[max-content] xl:grid-cols-[repeat(2,_350px)] xl:gap-x-12 xl:gap-y-0">
          <FrontEnd />
          <BackEnd />
        </div>
      </section>
    </>
  );
};
