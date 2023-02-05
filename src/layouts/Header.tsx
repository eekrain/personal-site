import { Button } from "@kobalte/core";
import { createBreakpoints } from "@solid-primitives/media";
import {
  Component,
  createSignal,
  ParentComponent,
  createEffect,
} from "solid-js";
import { MY_BREAKPOINTS } from "../constants/myBreakpoints";

const [toggleMenu, setToggleMenu] = createSignal(false);
const [activeLink, setActiveLink] = createSignal("#contact");

export const Header: Component<{}> = (props) => {
  return (
    <header class="fixed bottom-0 left-0 z-50 h-16 w-full bg-white lg:top-0">
      <nav class="mx-6 flex h-16 items-center justify-between rounded-t-2xl bg-body lg:container lg:mx-auto  lg:max-w-lg968 lg:gap-x-4 lg:rounded-none lg:bg-white lg:px-4 xl:px-0 ">
        <a href="#" class="font-medium text-title ">
          Eka
        </a>

        <div
          class=""
          classList={{
            "fixed left-0 w-full bg-body pt-8 pb-16 px-6 rounded-t-2xl z-50 shadow-menu transition-all lg:transition-none duration-300":
              true,
            "lg:static lg:w-auto lg:bg-white lg:p-0 lg:rounded-none lg:z-0 lg:shadow-none":
              true,
            "-bottom-full": toggleMenu() === false,
            "bottom-0": toggleMenu() === true,
          }}
        >
          <ul class="grid grid-cols-3 gap-8 lg:flex">
            <NavItem href="#home" iconName="uil-estate">
              Home
            </NavItem>
            <NavItem href="#about" iconName="uil-user">
              About
            </NavItem>
            <NavItem href="#skills" iconName="uil-file-alt">
              Skills
            </NavItem>
            <NavItem href="#services" iconName="uil-briefcase-alt">
              Services
            </NavItem>
            <NavItem href="#portfolio" iconName="uil-scenery">
              Portfolio
            </NavItem>
            <NavItem href="#contact" iconName="uil-message">
              Contact
            </NavItem>
          </ul>

          <Button.Root
            class="absolute right-6 bottom-2 cursor-pointer text-2xl lg:hidden"
            onPress={() => setToggleMenu(() => false)}
          >
            <i class="uil uil-times text-title transition-all duration-300 hover:text-black" />
          </Button.Root>
        </div>

        <Button.Root
          class="transition-all duration-300 lg:hidden"
          onPress={() => setToggleMenu((prev) => true)}
        >
          <i class="uil uil-apps text-title transition-all duration-300 hover:text-black" />
        </Button.Root>
      </nav>
    </header>
  );
};

export const NavItem: ParentComponent<{
  iconName: string;
  href: string;
}> = (props) => {
  return (
    <li class="flex flex-col items-center text-sm font-medium text-gray-600">
      <a
        href={props.href}
        classList={{
          "flex flex-col items-center transition-all duration-300": true,
          "hover:text-black": true,
          "text-black": activeLink() === props.href,
        }}
      >
        <i class={`uil ${props.iconName} lg:hidden`} />
        {props.children}
      </a>
    </li>
  );
};
