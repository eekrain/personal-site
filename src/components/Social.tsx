import { Component } from "solid-js";

export const Social: Component<{}> = (props) => {
  return (
    <div class="home-social grid grid-cols-1 gap-y-4">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        class="home-social-icon text-title text-xl hover:text-black transition-all duration-300"
      >
        <i class="uil uil-linkedin" />
      </a>
      <a
        href="https://github.com/eekrain"
        target="_blank"
        class="home-social-icon text-title text-xl hover:text-black transition-all duration-300"
      >
        <i class="uil uil-github" />
      </a>
      <a
        href="https://www.instagram.com/eekrain"
        target="_blank"
        class="home-social-icon text-title text-xl hover:text-black transition-all duration-300"
      >
        <i class="uil uil-instagram" />
      </a>
    </div>
  );
};
