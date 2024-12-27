import { Component } from "solid-js";
import { BxMailSend } from "../BxMailSend";
import { BiRegularMap } from "solid-icons/bi";
import { AiOutlineGlobal } from "solid-icons/ai";
import { FaBrandsGithub, FaBrandsLinkedin } from "solid-icons/fa";

export const Header: Component<{}> = (props) => {
  return (
    <header class="flex justify-between space-x-8">
      <div>
        <h1 class="font-poppins text-3xl font-bold tracking-wide text-title">
          Ardian Eka Candra
        </h1>
        <h2 class="text-lg font-semibold tracking-widest text-title">
          Fullstack Developer
        </h2>

        <p class="mt-4 text-justify text-xs">
          Full Stack Developer with 2 years experience in developing and
          managing modern web apps and mobile apps. Skilled in React.js,
          Next.js, React Native, NodeJS, Express.js, SQL, and Serverless
          environments.
        </p>
      </div>

      <div class="flex-col space-y-1 text-xs">
        <p class="flex justify-end space-x-2">
          <a
            class="underline hover:text-black"
            href="mailto:candra.ardianeka@gmail.com"
          >
            candra.ardianeka@gmail.com
          </a>
          <BxMailSend />
        </p>

        <p class="flex justify-end space-x-2">
          <span>Yogyakarta, Indonesia</span>
          <BiRegularMap />
        </p>

        <p class="flex justify-end space-x-2">
          <a class="underline hover:text-black" href="https://ardianeka.my.id">
            ardianeka.my.id
          </a>
          <AiOutlineGlobal />
        </p>

        <p class="flex justify-end space-x-2">
          <a
            class="underline hover:text-black"
            href="https://www.linkedin.com/in/eekrain/"
          >
            linkedin.com/in/eekrain
          </a>
          <FaBrandsLinkedin />
        </p>

        <p class="flex justify-end space-x-2">
          <a
            class="underline hover:text-black"
            href="https://github.com/eekrain"
          >
            github.com/eekrain
          </a>
          <FaBrandsGithub />
        </p>
      </div>
    </header>
  );
};
