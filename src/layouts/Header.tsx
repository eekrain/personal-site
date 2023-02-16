import { Button } from "@kobalte/core";
import { createScrollPosition } from "@solid-primitives/scroll";
import {
  Component,
  createSignal,
  ParentComponent,
  createMemo,
  JSX,
} from "solid-js";
import { UilApps } from "../components/Icons/UilApps";
import { UilEstate } from "../components/Icons/UilEstate";
import { UilFileAlt } from "../components/Icons/UilFileAlt";
import { UilMessage } from "../components/Icons/UilMessage";
import { UilTimes } from "../components/Icons/UilTimes";
import { UilUser } from "../components/Icons/UilUser";
import { activePage, PageIds } from "../utils/activePage";

const [toggleMenu, setToggleMenu] = createSignal(false);

export const Header: Component<{}> = (props) => {
  const scroll = createScrollPosition(() =>
    typeof window === undefined ? undefined : window
  );
  const scrollY = () => scroll.y;

  const showShadowMenu = createMemo(() => {
    const y = scrollY();
    if (y && y > 80) return true;
    else return false;
  });

  return (
    <header
      class="fixed bottom-0 left-0 z-50 h-16 w-full bg-white transition-all duration-300 lg:top-0"
      classList={{ "shadow-menu": showShadowMenu() }}
    >
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
            <NavItem pageId="home" Icon={() => <UilEstate />}>
              Home
            </NavItem>
            <NavItem pageId="about" Icon={() => <UilUser />}>
              About
            </NavItem>
            <NavItem pageId="skills" Icon={() => <UilFileAlt />}>
              Skills
            </NavItem>
            {/* <NavItem pageId="services" Icon={() => <UilBriefcaseAlt />}>
              Services
            </NavItem>
            <NavItem pageId="portfolio" Icon={() => <UilScenery />}>
              Portfolio
            </NavItem> */}
            <NavItem pageId="contact" Icon={() => <UilMessage />}>
              Contact
            </NavItem>
          </ul>

          <Button.Root
            class="absolute right-6 bottom-2 cursor-pointer text-2xl lg:hidden"
            onPress={() => setToggleMenu(() => false)}
          >
            <UilTimes class="text-title transition-all duration-300 hover:text-black" />
          </Button.Root>
        </div>

        <Button.Root
          class="transition-all duration-300 lg:hidden"
          onPress={() => setToggleMenu((prev) => true)}
        >
          <UilApps class="text-title transition-all duration-300 hover:text-black" />
        </Button.Root>
      </nav>
    </header>
  );
};
console.log("🚀 ~ file: Header.tsx:75 ~ activePage()", activePage());
console.log("🚀 ~ file: Header.tsx:75 ~ activePage()", activePage());

export const NavItem: ParentComponent<{
  Icon: Component<IconProps>;
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
        <span class="lg:hidden">
          <props.Icon />
        </span>
        {props.children}
      </a>
    </li>
  );
};
