import { Component } from "solid-js";
import { BxAward } from "../../components/Icons/BxAward";
import { BxBriefcase } from "../../components/Icons/BxBriefcase";
import { BxSupport } from "../../components/Icons/BxSupport";

export const Info: Component<{}> = (props) => {
  return (
    <div class="about__info mb-8 grid grid-cols-2 justify-center gap-x-2 gap-y-2  lg:grid-cols-3 lg:gap-y-0 xl:justify-start">
      <div class="about__box rounded-xl border border-gray-100 bg-white py-3 px-2 text-center xl:py-4 xl:px-5">
        <BxAward class="about__icon mb-4 inline-block text-center text-2xl text-title" />
        <h3 class="about__title text-sm font-medium">Experience</h3>
        <span class="about__subtitle text-xs ">2 Years Working</span>
      </div>

      <div class="about__box rounded-xl border border-gray-100 bg-white py-3 px-2 text-center xl:py-4 xl:px-5">
        <BxBriefcase class="about__icon mb-4 inline-block text-2xl text-title" />
        <h3 class="about__title text-sm font-medium">Completed</h3>
        <span class="about__subtitle text-xs ">8 Projects</span>
      </div>

      <div class="about__box rounded-xl border border-gray-100 bg-white py-3 px-2 text-center xl:py-4 xl:px-5 ">
        <BxSupport class="about__icon mb-4 inline-block text-2xl text-title" />
        <h3 class="about__title text-sm font-medium">Support</h3>
        <span class="about__subtitle text-xs ">Online 24/7</span>
      </div>
    </div>
  );
};
