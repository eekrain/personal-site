import { Button } from "@kobalte/core";
import { createBreakpoints } from "@solid-primitives/media";
import {
  Component,
  createSignal,
  ParentComponent,
  createEffect,
} from "solid-js";
import { MY_BREAKPOINTS } from "../constants/myBreakpoints";
import { activePage, PageIds } from "../utils/activePage";

const [toggleMenu, setToggleMenu] = createSignal(false);

export const Header: Component<{}> = (props) => {
  createEffect(() => {
    console.log(
      "🚀 ~ file: Header.tsx:19 ~ createEffect ~ activePage",
      activePage()
    );
  });

  return (
    <header class="fixed bottom-0 left-0 z-50 h-16 w-full bg-white lg:top-0">
      <nav class="mx-6 flex h-16 items-center justify-between rounded-t-2xl lg:container lg:mx-auto lg:max-w-lg968  lg:gap-x-4 lg:rounded-none lg:bg-white lg:px-4 xl:px-0 ">
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
            <NavItem pageId="home" iconName="uil-estate">
              Home
            </NavItem>
            <NavItem pageId="about" iconName="uil-user">
              About
            </NavItem>
            <NavItem pageId="skills" iconName="uil-file-alt">
              Skills
            </NavItem>
            {/* <NavItem pageId="services" iconName="uil-briefcase-alt">
              Services
            </NavItem>
            <NavItem pageId="portfolio" iconName="uil-scenery">
              Portfolio
            </NavItem> */}
            <NavItem pageId="contact" iconName="uil-message">
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
console.log("🚀 ~ file: Header.tsx:75 ~ activePage()", activePage());
console.log("🚀 ~ file: Header.tsx:75 ~ activePage()", activePage());

export const NavItem: ParentComponent<{
  iconName: string;
  pageId: PageIds;
}> = (props) => {
  return (
    <li class="flex flex-col items-center text-sm font-medium text-gray-600">
      <a
        href={`#${props.pageId}`}
        class="lg:hover:text-black"
        classList={{
          "flex flex-col items-center transition-all duration-300": true,
          "text-black": activePage() === props.pageId,
        }}
      >
        <i class={`uil ${props.iconName} lg:hidden`} />
        {props.children}
      </a>
    </li>
  );
};
