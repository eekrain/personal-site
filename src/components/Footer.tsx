import { Component } from "solid-js";
import {
  FaBrandsGithub,
  FaBrandsInstagram,
  FaBrandsLinkedin,
} from "solid-icons/fa";

const Footer: Component<{}> = (props) => {
  return (
    <footer class="mt-24 border-t border-gray-100 bg-white">
      <div class="container mx-auto pb-12 pt-8">
        <h1 class="mb-8 text-center text-4xl font-semibold text-title">Eka</h1>

        <ul class="mb-8 flex justify-center gap-x-6">
          <li>
            <a href="/" class="footer__link text-title hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="text-title hover:text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#" class="text-title hover:text-black">
              Blogs
            </a>
          </li>
        </ul>

        <div class="flex justify-center gap-x-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-title text-lg text-white hover:bg-black"
          >
            <FaBrandsLinkedin />
          </a>
          <a
            href="https://github.com/eekrain"
            target="_blank"
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-title text-lg text-white hover:bg-black"
          >
            <FaBrandsGithub />
          </a>
          <a
            href="https://www.instagram.com/eekrain"
            target="_blank"
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-title text-lg text-white hover:bg-black"
          >
            <FaBrandsInstagram />
          </a>
        </div>

        <span class="mt-16 block text-center text-sm tracking-wide text-title">
          &#169; Eka. Built with{" "}
          <a
            href="https://docs.solidjs.com/solid-start"
            class="underline hover:text-black"
          >
            Solid Start
          </a>
          .
        </span>
      </div>
    </footer>
  );
};
export default Footer;
