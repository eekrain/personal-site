import { Component } from "solid-js";
import { SkillItem } from "./SkillItem";

export const BackEnd: Component<{}> = (props) => {
  return (
    <div class="skills__content bg-white border border-gray-100 py-8 px-16 rounded-3xl">
      <h3 class="skills__title font-medium text-title text-center mb-6">
        Back-End Developer
      </h3>
      <div class="skills__box flex justify-center gap-x-10">
        <div class="skills__group grid items-start gap-y-4">
          {/* items */}

          <SkillItem name="NodeJS" level="Intermediate" />
          <SkillItem name="PHP" level="Basic" />
          <SkillItem name="Docker" level="Basic" />
        </div>
        <div class="skills__group grid items-start gap-y-4">
          <SkillItem name="SQL" level="Intermediate" />
          <SkillItem name="DynamoDB" level="Basic" />
          <SkillItem name="AWS Serverless" level="Basic" />
        </div>
      </div>
    </div>
  );
};
