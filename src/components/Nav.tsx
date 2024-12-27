import { useLocation } from "@solidjs/router";
import { AiOutlineUser } from "solid-icons/ai";
import { FiHome } from "solid-icons/fi";
import { HiOutlineDocumentText, HiOutlinePaperAirplane } from "solid-icons/hi";
import { Component, createSignal, JSX, ParentComponent } from "solid-js";
import { currentPage } from "~/lib/page-state";
import { cn } from "~/lib/utils";

const Nav: Component<{}> = (props) => {
  const location = useLocation();
  // const active = (path: string) =>
  //   path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  const [toggleMenu, setToggleMenu] = createSignal(false);

  return (
    <header
      class={cn(
        "fixed bottom-0 left-0 z-50 h-16 w-full bg-white font-medium transition-all duration-300 lg:top-0",
        location.pathname === "/resume" && "sticky",
      )}
    >
      <nav class="container mx-6 flex h-16 items-center justify-between rounded-t-2xl lg:container lg:mx-auto lg:gap-x-4 lg:rounded-none lg:bg-white lg:px-4 xl:px-0">
        <a href="/" class="font-brand text-2xl text-title md:text-4xl">
          Eka.
        </a>

        <div
          class={cn(
            "fixed left-0 z-50 w-full rounded-t-2xl bg-background px-6 pb-16 pt-8 shadow-menu transition-all duration-300 lg:transition-none",
            "-bottom-full lg:static lg:z-0 lg:w-auto lg:rounded-none lg:bg-white lg:p-0 lg:shadow-none",
            toggleMenu() && "bottom-0",
          )}
        >
          <ul class="grid grid-cols-3 gap-8 lg:flex">
            <NavItem href="#home" icon={<FiHome />}>
              Home
            </NavItem>
            <NavItem href="#about" icon={<AiOutlineUser />}>
              About
            </NavItem>
            <NavItem href="#skills" icon={<HiOutlineDocumentText />}>
              Skills
            </NavItem>
            <NavItem href="#contact" icon={<HiOutlinePaperAirplane />}>
              Contact
            </NavItem>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

export const NavItem: ParentComponent<{
  icon: JSX.Element;
  href: string;
}> = (props) => {
  const active = () => currentPage() === props.href;

  return (
    <li class="flex flex-col items-center text-sm font-medium text-gray-600">
      <a
        href={props.href}
        class={cn(
          "flex flex-col items-center transition-all duration-300 lg:hover:text-black",
          active() && "text-black",
        )}
      >
        <span class="lg:hidden">{props.icon}</span>
        {props.children}
      </a>
    </li>
  );
};
