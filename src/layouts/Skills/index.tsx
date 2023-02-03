import { Component } from "solid-js";
import { BackEnd } from "./BackEnd";
import { FrontEnd } from "./FrontEnd";

export const Skills: Component<{}> = (props) => {
  return (
    <section
      class="skills pt-20 pb-20 lg:pt-24 lg:pb-0 lg:mb-16 xl:mb-24"
      id="skills"
    >
      <h2 class="section__title text-4xl text-title text-center">Skills</h2>
      <span class="section__subtitle block text-lg text-center mb-12 lg:mb-16">
        My Technical Level
      </span>
      <div class="skills__container container mx-auto grid md:grid-cols-1 gap-y-8  lg:grid-cols-[max-content] xl:grid-cols-[repeat(2,_350px)] justify-center xl:gap-x-12 xl:gap-y-0">
        <FrontEnd />
        <BackEnd />
      </div>
    </section>
  );
};
