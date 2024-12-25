import {
  FaBrandsGithub,
  FaBrandsInstagram,
  FaBrandsLinkedin,
} from "solid-icons/fa";
import { Component } from "solid-js";

const Social: Component<{}> = (props) => {
  return (
    <div class="flex flex-col items-center gap-2 self-center justify-self-end">
      <a
        href="https://www.linkedin.com/in/eekrain/"
        target="_blank"
        class="home-social-icon text-xl text-title transition-all duration-300 hover:text-black"
      >
        <FaBrandsLinkedin />
      </a>
      <hr class="h-10 w-[1px] bg-title" />
      <a
        href="https://github.com/eekrain"
        target="_blank"
        class="home-social-icon text-xl text-title transition-all duration-300 hover:text-black"
      >
        <FaBrandsGithub />
      </a>
      <hr class="h-10 w-[1px] bg-title" />
      <a
        href="https://www.instagram.com/eekrain"
        target="_blank"
        class="home-social-icon text-xl text-title transition-all duration-300 hover:text-black"
      >
        <FaBrandsInstagram />
      </a>
    </div>
  );
};

export default Social;
