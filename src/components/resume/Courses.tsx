import { IoCalendarOutline } from "solid-icons/io";
import { Component } from "solid-js";
import ExternalLinkIcon from "../ExternalLinkIcon";

export const Courses: Component<{}> = (props) => {
  return (
    <div>
      <h3 class="mb-5 border-b-2 border-title font-poppins text-lg font-semibold">
        COURSES
      </h3>

      <ul class="grid gap-3">
        <li>
          <a
            class="group"
            target="_blank"
            href="https://www.udemy.com/certificate/UC-703ca5f1-c8e0-4297-b9a5-38e6cd7abb43/"
          >
            <h4 class="mb-1 font-poppins font-semibold">
              <span class="group-hover:underline group-hover:underline-offset-4">
                Complete Next.js with React & Node
              </span>

              <ExternalLinkIcon class="-mt-1 ml-2 inline-block" />
            </h4>
          </a>

          <p class="mt-2 text-xs">
            Understanding the basic concepts of Next.js (SSG, SSR, ISR, Markdown
            and the new App Router) through building multiple projects.
          </p>

          <div class="mt-1 flex justify-between">
            <p class="font-semibold">Udemy</p>
            <p class="mt-1 flex items-center justify-end space-x-2 text-xs">
              <IoCalendarOutline />
              <span>Dec 2024</span>
            </p>
          </div>
        </li>

        <li>
          <a
            class="group"
            target="_blank"
            href="https://www.udemy.com/certificate/UC-b3198aad-f9fa-4514-95af-887e0bb9aa56/"
          >
            <h4 class="mb-1 font-poppins font-semibold">
              <span class="group-hover:underline group-hover:underline-offset-4">
                Modern React with Redux
              </span>

              <ExternalLinkIcon class="-mt-1 ml-2 inline-block" />
            </h4>
          </a>

          <p class="mt-2 text-xs">
            Focused on building complex React.js apps leveraging Redux and best
            practices, with rapid UI development using TailwindCSS.
          </p>

          <div class="mt-1 flex justify-between">
            <p class="font-semibold">Udemy</p>
            <p class="mt-1 flex items-center justify-end space-x-2 text-xs">
              <IoCalendarOutline />
              <span>Sep 2022</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
