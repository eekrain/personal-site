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
          <h4 class="mb-1 font-semibold">
            <span>Complete Next.js with React & Node</span>

            <a
              class="ml-2 inline-block"
              target="_blank"
              href="https://www.udemy.com/certificate/UC-b3198aad-f9fa-4514-95af-887e0bb9aa56/"
            >
              <ExternalLinkIcon />
            </a>
          </h4>

          <p class="mt-2 text-xs">
            Understanding the basic concepts of Next.js (SSG, SSR, ISR, Markdown
            and the new App Router) through building multiple projects.
          </p>
          <p class="mt-1 flex items-center justify-end space-x-2 text-xs">
            <IoCalendarOutline />
            <span>Sep 2022</span>
          </p>
        </li>

        <li>
          <h4 class="mb-1 font-semibold">
            <span>Modern React with Redux</span>
            <a
              class="ml-2 inline-block"
              target="_blank"
              href="https://www.udemy.com/certificate/UC-b3198aad-f9fa-4514-95af-887e0bb9aa56/"
            >
              <ExternalLinkIcon />
            </a>
          </h4>

          <p class="mt-2 text-xs">
            Focused on building complex React.js apps leveraging Redux and best
            practices, with rapid UI development using TailwindCSS.
          </p>
          <p class="mt-1 flex items-center justify-end space-x-2 text-xs">
            <IoCalendarOutline />
            <span>Sep 2022</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
