import {
  createViewportObserver,
  createVisibilityObserver,
} from "@solid-primitives/intersection-observer";
import { Component, createEffect } from "solid-js";
import { Button } from "../../components/Button";
import { setActivePage } from "../../utils/activePage";
import { Info } from "./Info";

export const About: Component<{}> = (props) => {
  let section: HTMLElement | undefined;

  const visible = createVisibilityObserver({ threshold: 0.6 })(() => section);

  createEffect(() => {
    if (visible()) setActivePage("about");
  });

  return (
    <section ref={section} class="about section">
      <div id="about" class="relative mt-24 lg:-top-16 lg:mt-0" />
      <h2 class="section__title text-center text-4xl text-title">About Me</h2>
      <span class="section__subtitle mb-12 block text-center lg:mb-16">
        My introduction
      </span>
      <div class="about__container container mx-auto grid grid-cols-1 items-center gap-y-10 xl:grid-cols-2 xl:gap-x-16">
        <img
          src="/img/about.jpg"
          alt="About image"
          class="about__img w-[225px] justify-self-center rounded-3xl xl:w-[350px]"
        />
        <div class="about__data text-center xl:text-start">
          <Info />
          <p class="about__description lg mb-8 p-0 md:px-10 lg:p-0 lg:py-0 xl:pr-16">
            Full-Stack Developer, I build information system based on problems
            that my client has. I have years of experience and many client are
            happy with the projects carried out.
          </p>

          <Button download="" href="/files/Eka-CV.pdf" icon={FileIcon}>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

const FileIcon = () => (
  <svg
    class="button__icon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
      fill="#fff"
    ></path>
    <path
      d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
      fill="#fff"
    ></path>
    <path
      d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
      fill="#fff"
    ></path>
    <path
      d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
      fill="#fff"
    ></path>
  </svg>
);
