import { Component } from "solid-js";
import { UilGithub } from "./Icons/UilGithub";
import { UilInstagram } from "./Icons/UilInstagram";
import { UilLinkedIn } from "./Icons/UilLinkedIn";

export const Social: Component<{}> = (props) => {
  return (
    <div class="home-social grid grid-cols-1 gap-y-4">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        class="home-social-icon text-xl text-title transition-all duration-300 hover:text-black"
      >
        <UilLinkedIn />
      </a>
      <a
        href="https://github.com/eekrain"
        target="_blank"
        class="home-social-icon text-xl text-title transition-all duration-300 hover:text-black"
      >
        <UilGithub />
      </a>
      <a
        href="https://www.instagram.com/eekrain"
        target="_blank"
        class="home-social-icon text-xl text-title transition-all duration-300 hover:text-black"
      >
        <UilInstagram />
      </a>
    </div>
  );
};
