import { IoCalendarOutline } from "solid-icons/io";
import { Component } from "solid-js";

export const Skills: Component<{}> = (props) => {
  return (
    <div>
      <h3 class="mb-5 border-b-2 border-title font-poppins text-lg font-semibold">
        SKILLS
      </h3>

      <ul class="flex flex-wrap gap-2 text-sm text-white print:print-color-adjust-exact">
        <li class="bg-title px-2 py-1">React.js</li>
        <li class="bg-title px-2 py-1">React Native</li>
        <li class="bg-title px-2 py-1">Next.js</li>
        <li class="bg-title px-2 py-1">Typescript</li>
        <li class="bg-title px-2 py-1">TailwindCSS</li>
        <li class="bg-title px-2 py-1">Git</li>
        <li class="bg-title px-2 py-1">Node.js</li>
        <li class="bg-title px-2 py-1">Nest.js</li>
        <li class="bg-title px-2 py-1">Express</li>
        <li class="bg-title px-2 py-1">tRPC</li>
        <li class="bg-title px-2 py-1">SQL</li>
        <li class="bg-title px-2 py-1">Drizzle ORM</li>
        <li class="bg-title px-2 py-1">Prisma ORM</li>
        <li class="bg-title px-2 py-1">SST</li>
        <li class="bg-title px-2 py-1">Docker</li>
      </ul>
    </div>
  );
};
