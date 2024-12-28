import { IoCalendarOutline } from "solid-icons/io";
import { Component } from "solid-js";

export const Education: Component<{}> = (props) => {
  return (
    <div>
      <h3 class="mb-5 border-b-2 border-title font-poppins text-lg font-semibold">
        EDUCATION
      </h3>

      <ul class="relative grid gap-3 print:print-color-adjust-exact">
        <li class="relative">
          <h4 class="mb-1 font-poppins font-semibold">
            Bachelor of Informatics
          </h4>
          <h5 class="mb-2 text-sm font-medium">
            Universitas Amikom Yogyakarta
          </h5>

          <div class="flex items-baseline justify-between">
            <p class="font-semibold">
              GPA: <span class="underline">3.25</span>
            </p>
            <p class="flex items-baseline space-x-2 text-xs">
              <IoCalendarOutline />
              <span>Sep 2017 - Oct 2022</span>
            </p>
          </div>
        </li>
        <li class="relative">
          <h4 class="mb-1 font-poppins font-semibold">
            Computer & Network Engineering
          </h4>
          <h5 class="mb-2 text-sm font-medium">SMKN 2 Yogyakarta</h5>
          <div class="flex justify-end">
            <p class="flex items-baseline space-x-2 text-xs">
              <IoCalendarOutline />
              <span>Jul 2013 - May 2016</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
