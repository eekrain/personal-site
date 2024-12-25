import { HiOutlineBriefcase } from "solid-icons/hi";
import { TbAward } from "solid-icons/tb";
import { Component } from "solid-js";

export const Info: Component<{}> = (props) => {
  return (
    <div class="mb-8 grid grid-cols-2 justify-center gap-x-2 gap-y-2">
      <div class="rounded-xl border border-gray-100 bg-white px-2 py-3 text-center xl:px-5 xl:py-4">
        <TbAward class="mb-4 inline-block text-center text-2xl text-title" />
        <h3 class="text-sm font-medium">Experience</h3>
        <span class="text-xs">2 Years Working</span>
      </div>

      <div class="rounded-xl border border-gray-100 bg-white px-2 py-3 text-center xl:px-5 xl:py-4">
        <HiOutlineBriefcase class="mb-4 inline-block text-2xl text-title" />
        <h3 class="text-sm font-medium">Completed</h3>
        <span class="text-xs">8 Projects</span>
      </div>
    </div>
  );
};
