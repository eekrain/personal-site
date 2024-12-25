import { Component } from "solid-js";
import { BackEnd } from "./BackEnd";
import { FrontEnd } from "./FrontEnd";

const HomeSkills: Component<{}> = (props) => {
  return (
    <>
      <section id="skills" class="mt-[100px] min-h-[85vh] scroll-mt-36 xl:mt-0">
        <h2 class="text-center text-4xl text-title">Skills</h2>
        <span class="mb-12 block text-center lg:mb-16">My Technical Level</span>
        <div class="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          <FrontEnd />
          <BackEnd />
        </div>
      </section>
    </>
  );
};

export default HomeSkills;
