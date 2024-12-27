import { IconProps } from "solid-icons";
import { Component } from "solid-js";
import { cn } from "~/lib/utils";

const ExternalLinkIcon: Component<IconProps> = (props) => {
  return (
    <svg
      fill="none"
      stroke-width="2"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
      style="overflow: visible; color: currentcolor;"
      height="1em"
      width="1em"
      {...props}
      class={cn("group transition-all duration-200", props.class)}
    >
      <path
        class="transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-125"
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      ></path>
      <path
        class="transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-[6px]"
        d="M15 3 21 3 21 9"
      ></path>
      <path
        class="transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-[6px]"
        d="M10 14 21 3"
      ></path>
    </svg>
  );
};

export default ExternalLinkIcon;
