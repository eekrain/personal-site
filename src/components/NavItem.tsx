import { ParentComponent } from "solid-js";
import { Button } from "@kobalte/core";

export const NavItem: ParentComponent<{
  activeLink: string;
  iconName: string;
}> = (props) => {
  return (
    <Button.Root class="flex flex-col items-center text-base text-gray-700">
      <i class={`uil ${props.iconName}`}></i>
      {props.children}
    </Button.Root>
  );
};
