import { IoCalendarOutline } from "solid-icons/io";
import { Component } from "solid-js";

export const Skills: Component<{}> = (props) => {
  return (
    <div>
      <h3 class="mb-5 border-b-2 border-title font-poppins text-lg font-semibold">
        SKILLS
      </h3>

      <ul class="print-color-adjust-exact flex flex-wrap gap-2 text-white">
        <li class="bg-title px-2">ReactJS</li>
        <li class="bg-title px-2">React Native</li>
        <li class="bg-title px-2">AstroJS</li>
        <li class="bg-title px-2">SolidJS</li>
        <li class="bg-title px-2">NextJS</li>
        <li class="bg-title px-2">TailwindCSS</li>
        <li class="bg-title px-2">Git</li>
        <li class="bg-title px-2">NodeJS</li>
        <li class="bg-title px-2">tRPC</li>
        <li class="bg-title px-2">NestJS</li>
        <li class="bg-title px-2">Express</li>
        <li class="bg-title px-2">GraphQL</li>
        <li class="bg-title px-2">RestFUL</li>
        <li class="bg-title px-2">AWS Serverless</li>
        <li class="bg-title px-2">Serverless Stack</li>
        <li class="bg-title px-2">Docker</li>
      </ul>
    </div>
  );
};
