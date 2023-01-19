import { createBreakpoints } from "@solid-primitives/media";
import {
  Component,
  createSignal,
  ParentComponent,
  createEffect,
} from "solid-js";
import { MY_BREAKPOINTS } from "../constants/myBreakpoints";

const [activeLink, setActiveLink] = createSignal("#contact");

export const Header: Component<{}> = (props) => {
  const matches = createBreakpoints(MY_BREAKPOINTS);

  return (
    <header
      classList={{
        "bottom-0": (matches.xs || matches.sm) && !matches.md,
        "top-0": matches.md,
      }}
      class="w-full fixed left-0  bg-yellow-300"
    >
      <nav class="max-w-lg768 mx-auto flex justify-between items-center gap-x-4 h-16 md:mx-6 bg-violet-200">
        <a href="/" class="font-medium text-title">
          Eka
        </a>

        <div
          classList={{
            "fixed bottom-0 left-0 w-full bg-red-200 pt-8 pb-16 px-6 rounded-t-2xl z-50 shadow-2xl":
              (matches.xs || matches.sm) && !matches.md,
          }}
        >
          <ul
            class="flex gap-8 "
            classList={{
              "grid grid-cols-3": (matches.xs || matches.sm) && !matches.md,
            }}
          >
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

          <i classList={{ "uil uil-times": true, hidden: true }} />
        </div>

        <div classList={{ hidden: true }}>
          <i class="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export const NavItem: ParentComponent<{
  iconName: string;
  href: string;
}> = (props) => {
  return (
    <li class="flex flex-col items-center text-gray-600 text-sm font-medium">
      <a
        href={props.href}
        classList={{
          "flex flex-col items-center transition-all duration-300": true,
          "hover:text-black": true,
          "text-black": activeLink() === props.href,
        }}
      >
        <i class={`uil ${props.iconName} md:hidden`} />
        {props.children}
      </a>
    </li>
  );
};
