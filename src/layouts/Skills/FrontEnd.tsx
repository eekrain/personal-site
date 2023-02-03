import { Component } from "solid-js";
import { SkillItem } from "./SkillItem";

export const FrontEnd: Component<{}> = (props) => {
  return (
    <div class="skills__content bg-white border border-gray-100 p-6 md:py-8 md:px-16 rounded-3xl">
      <h3 class="skills__title font-medium text-title text-center mb-6">
        Front-End Developer
      </h3>
      <div class="skills__box flex justify-center gap-x-5 md:gap-x-10">
        <div class="skills__group grid items-start gap-y-4">
          {/* items */}

          <SkillItem name="HTML&CSS" level="Basic" />
          <SkillItem name="Javascript" level="Intermediate" />
          <SkillItem name="Tailwind" level="Intermediate" />
        </div>
        <div class="skills__group grid items-start gap-y-4">
          <SkillItem name="Git" level="Intermediate" />
          <SkillItem name="React" level="Intermediate" />
          <SkillItem name="React Native" level="Intermediate" />
        </div>
      </div>
    </div>
  );
};
