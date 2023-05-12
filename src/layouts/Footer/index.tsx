import { Component } from "solid-js";
import { UilGithub } from "../../components/Icons/UilGithub";
import { UilInstagram } from "../../components/Icons/UilInstagram";
import { UilLinkedIn } from "../../components/Icons/UilLinkedIn";

export const Footer: Component<{}> = (props) => {
  return (
    <footer class="mt-24 border-t border-gray-100 bg-white">
      <div class="container mx-auto pt-8 pb-12">
        <h1 class="mb-8 text-center text-4xl font-semibold text-title">Eka</h1>

        <ul class="mb-8 flex justify-center gap-x-6">
          <li>
            <a href="#" class="footer__link text-title hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#" class="text-title hover:text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#" class="text-title hover:text-black">
              Testimonials
            </a>
          </li>
        </ul>

        <div class="flex justify-center gap-x-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-title text-lg text-white hover:bg-black"
          >
            <UilLinkedIn />
          </a>
          <a
            href="https://github.com/eekrain"
            target="_blank"
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-title text-lg text-white hover:bg-black"
          >
            <UilGithub />
          </a>
          <a
            href="https://www.instagram.com/eekrain"
            target="_blank"
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-title text-lg text-white hover:bg-black"
          >
            <UilInstagram />
          </a>
        </div>

        <span class="mt-16 block text-center text-sm tracking-wide text-title">
          &#169; Eka. All rights reserved.
        </span>
        <span class="mt-2 block text-center text-sm tracking-wide text-title">
          Built with{" "}
          <a href="https://astro.build/" class="underline hover:text-black">
            Astro
          </a>
          . Deployed on{" "}
          <a href="https://vercel.com/" class="underline hover:text-black">
            Vercel
          </a>
          .
        </span>
      </div>
    </footer>
  );
};
