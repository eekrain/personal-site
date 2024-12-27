import { Component, createEffect } from "solid-js";
import { BackEnd } from "./BackEnd";
import { FrontEnd } from "./FrontEnd";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { setCurrentPage } from "~/lib/page-state";

const HomeSkills: Component<{}> = (props) => {
  let section: HTMLElement | undefined;
  const visible = createVisibilityObserver({ threshold: 0.4 })(() => section);
  createEffect(() => {
    if (visible()) setCurrentPage("#skills");
  });

  return (
    <section
      ref={section}
      id="skills"
      class="mt-[100px] min-h-[85vh] scroll-mt-44 xl:mt-0"
    >
      <h2 class="text-center text-4xl text-title">Skills</h2>
      <span class="mb-12 block text-center lg:mb-16">My Technical Level</span>
      <div class="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
        <FrontEnd />
        <BackEnd />
      </div>
    </section>
  );
};

export default HomeSkills;
