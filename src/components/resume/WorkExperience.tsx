import { BiRegularMap } from "solid-icons/bi";
import { FiExternalLink } from "solid-icons/fi";
import { IoCalendarOutline } from "solid-icons/io";
import { Component } from "solid-js";
import ExternalLinkIcon from "../ExternalLinkIcon";

export const WorkExperience: Component<{}> = (props) => {
  return (
    <div>
      <h3 class="mb-4 border-b-2 border-title font-poppins text-lg font-semibold">
        PROFESSIONAL EXPERIENCE
      </h3>

      <ul class="grid gap-2">
        <li>
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-medium">Full Stack Developer</h4>

            <p class="flex items-baseline space-x-2 text-xs">
              <IoCalendarOutline />
              <span>Dec 2023 - Dec 2024</span>
            </p>
          </div>
          <div class="mt-1 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h5 class="text-sm font-semibold">Platon</h5>
              <a target="_blank" href="https://platon.co.id/?lang=id">
                <ExternalLinkIcon />
              </a>
            </div>

            <p class="flex items-baseline space-x-2 text-xs">
              <BiRegularMap />
              <span>Remote</span>
            </p>
          </div>

          <p class="mt-2 text-sm">
            I work on the Platon freelance platform as a full-stack developer. I
            take jobs related to React.js, Next.js, React Native, and
            Express.js. Various jobs from implementing initial designs from
            Figma, troubleshooting of some errors, and performance improvement
            through debugging and better state management.
          </p>
        </li>

        <li>
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-medium">Full Stack Developer</h4>

            <p class="flex items-baseline space-x-2 text-xs">
              <IoCalendarOutline />
              <span>Mar 2020 - Mar 2021</span>
            </p>
          </div>
          <div class="mt-1 flex items-center justify-between">
            <h5 class="text-sm font-semibold">
              PT. Wahana Bumilangit Teknologi
            </h5>

            <p class="flex items-baseline space-x-2 text-xs">
              <BiRegularMap />
              <span>Purwokerto, ID</span>
            </p>
          </div>

          <ul class="mt-2 list-disc pl-4 text-sm">
            <li>
              Designed a CMS (<i>Content Management System</i>) with
              multi-tenant capabilities for villages in Puwokerto at scales.
            </li>
            <li>
              Built the CMS with <i>Nest.js</i> for the back-end and
              <i> React.js</i> for the CMS Dashboard
            </li>
            <li>
              Manage the infrastructure code (<i>Docker</i>) and networking (
              <i>SSL, DNS, Linux VPS</i>).
            </li>
            <li>
              Built the landing page template for every village with{" "}
              <i>Next.js</i>, with data based on our CMS.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
