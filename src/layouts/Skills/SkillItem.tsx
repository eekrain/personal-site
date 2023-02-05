import { Component } from "solid-js";

export const SkillItem: Component<{
  name: string;
  level: "Basic" | "Intermediate" | "Advanced";
}> = (props) => {
  return (
    <div class="skills__data flex gap-x-2">
      <i class="bx bx-badge-check text-base text-title"></i>

      <div>
        <h3 class="skills__name text-sm font-medium leading-4 text-title md:text-base">
          {props.name}
        </h3>
        <span class="skills__level text-xs">{props.level}</span>
      </div>
    </div>
  );
};
