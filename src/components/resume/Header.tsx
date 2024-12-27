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
          Full Stack Developer
        </h2>

        <p class="mt-4 text-justify text-sm">
          Full Stack Developer with 2 years experience in building modern web &
          mobile apps using React and React Native. Im also proficient in
          building RESTFul API using Express / Nest.js and interfacing with data
          through SQL / NoSQL Databases.
        </p>
      </div>

      <div class="flex-col space-y-2 text-xs">
        <p class="flex justify-end space-x-2">
          <a
            class="underline hover:text-black"
            href="mailto:candra.ardianeka@gmail.com"
          >
            candra.ardianeka@gmail.com
          </a>
          <BxMailSend class="size-4" />
        </p>

        <p class="flex justify-end space-x-2">
          <span>Yogyakarta, Indonesia</span>
          <BiRegularMap class="size-4" />
        </p>

        <p class="flex justify-end space-x-2">
          <a class="underline hover:text-black" href="https://ardianeka.my.id">
            ardianeka.my.id
          </a>
          <AiOutlineGlobal class="size-4" />
        </p>

        <p class="flex justify-end space-x-2">
          <a
            class="underline hover:text-black"
            href="https://www.linkedin.com/in/eekrain/"
          >
            linkedin.com/in/eekrain
          </a>
          <FaBrandsLinkedin class="size-4" />
        </p>

        <p class="flex justify-end space-x-2">
          <a
            class="underline hover:text-black"
            href="https://github.com/eekrain"
          >
            github.com/eekrain
          </a>
          <FaBrandsGithub class="size-4" />
        </p>
      </div>
    </header>
  );
};
