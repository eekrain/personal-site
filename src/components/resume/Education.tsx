import { IoCalendarOutline } from "solid-icons/io";
import { Component } from "solid-js";

export const Education: Component<{}> = (props) => {
  return (
    <div>
      <h3 class="mb-5 border-b-2 border-title font-poppins text-lg font-semibold">
        EDUCATION
      </h3>

      <ul class="print:print-color-adjust-exact relative grid gap-3 pl-3">
        <hr class="absolute left-[4px] top-2 h-[93%] w-[1px] bg-title" />
        <li class="relative">
          <div class="absolute -left-[11px] top-[50%] size-2 rounded-full bg-title" />

          <h4 class="mb-1 font-semibold">Bachelor of Informatics</h4>
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
          <div class="absolute -left-[11px] top-[50%] size-2 rounded-full bg-title" />

          <h4 class="mb-1 font-semibold">Computer & Network Engineering</h4>
          <h5 class="text-sm font-medium">SMKN 2 Yogyakarta</h5>
        </li>
      </ul>
    </div>
  );
};
