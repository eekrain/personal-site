import {
  FaBrandsGithub,
  FaBrandsInstagram,
  FaBrandsLinkedin,
} from "solid-icons/fa";
import { Component } from "solid-js";

const Social: Component<{}> = (props) => {
  return (
    <div class="relative flex flex-col items-center gap-14 self-center justify-self-end text-title">
      <div class="absolute left-0 top-0 flex h-full w-full justify-center">
        <hr class="h-full w-[1px] bg-title" />
      </div>

      <a
        href="https://www.linkedin.com/in/eekrain/"
        target="_blank"
        class="z-10 flex size-7 items-center justify-center bg-body"
      >
        <FaBrandsLinkedin class="size-5 transition-all duration-200 hover:size-6" />
      </a>

      <a
        href="https://github.com/eekrain"
        target="_blank"
        class="z-10 flex size-7 items-center justify-center bg-body"
      >
        <FaBrandsGithub class="size-5 transition-all duration-200 hover:size-6" />
      </a>

      <a
        href="https://www.instagram.com/eekrain"
        target="_blank"
        class="z-10 flex size-7 items-center justify-center bg-body"
      >
        <FaBrandsInstagram class="size-5 transition-all duration-200 hover:size-6" />
      </a>
    </div>
  );
};

export default Social;
