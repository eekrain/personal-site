import {
  FaBrandsGithub,
  FaBrandsInstagram,
  FaBrandsLinkedin,
} from "solid-icons/fa";
import { Component } from "solid-js";

const Social: Component<{}> = (props) => {
  return (
    <div class="home-social grid grid-cols-1 gap-y-4">
      <a
        href="https://www.linkedin.com/in/eekrain/"
        target="_blank"
        class="home-social-icon text-title text-xl transition-all duration-300 hover:text-black"
      >
        <FaBrandsLinkedin />
      </a>
      <a
        href="https://github.com/eekrain"
        target="_blank"
        class="home-social-icon text-title text-xl transition-all duration-300 hover:text-black"
      >
        <FaBrandsGithub />
      </a>
      <a
        href="https://www.instagram.com/eekrain"
        target="_blank"
        class="home-social-icon text-title text-xl transition-all duration-300 hover:text-black"
      >
        <FaBrandsInstagram />
      </a>
    </div>
  );
};

export default Social;
