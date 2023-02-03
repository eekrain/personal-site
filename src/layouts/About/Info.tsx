import { Component } from "solid-js";

export const Info: Component<{}> = (props) => {
  return (
    <div class="about__info grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 lg:gap-y-0  mb-8 justify-center xl:justify-start">
      <div class="about__box bg-white border border-gray-100 py-3 px-2 xl:py-4 xl:px-5 rounded-xl text-center">
        <i class="bx bx-award about__icon text-2xl text-title mb-2"></i>
        <h3 class="about__title text-sm font-medium">Experience</h3>
        <span class="about__subtitle text-xs ">2 Years Working</span>
      </div>

      <div class="about__box bg-white border border-gray-100 py-3 px-2 xl:py-4 xl:px-5 rounded-xl text-center">
        <i class="bx bx-briefcase about__icon text-2xl text-title mb-2"></i>
        <h3 class="about__title text-sm font-medium">Completed</h3>
        <span class="about__subtitle text-xs ">8 Projects</span>
      </div>

      <div class="about__box bg-white border border-gray-100 py-3 px-2 xl:py-4 xl:px-5 rounded-xl text-center ">
        <i class="bx bx-support about__icon text-2xl text-title mb-2"></i>
        <h3 class="about__title text-sm font-medium">Support</h3>
        <span class="about__subtitle text-xs ">Online 24/7</span>
      </div>
    </div>
  );
};
