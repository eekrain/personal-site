import { useLocation } from "@solidjs/router";
import { AiOutlineUser } from "solid-icons/ai";
import { FiHome } from "solid-icons/fi";
import { HiOutlineDocumentText, HiOutlinePaperAirplane } from "solid-icons/hi";
import {
  Component,
  createEffect,
  createSignal,
  JSX,
  ParentComponent,
} from "solid-js";
import { currentPage } from "~/lib/page-state";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { RiSystemAppsLine } from "solid-icons/ri";
import { CgClose } from "solid-icons/cg";

const Nav: Component<{}> = (props) => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = createSignal(false);

  createEffect(() => {
    console.log("🚀 ~ createEffect ~ location.pathname:", location.pathname);
  });

  return (
    <header
      class={cn(
        "fixed bottom-0 left-0 z-50 h-16 w-full bg-white font-medium shadow-[0_-3px_10px_rgb(0,0,0,0.2)] transition-all duration-300 lg:top-0 lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
        location.pathname === "/resume" && "sticky",
      )}
    >
      <nav class="container flex h-16 items-center justify-between rounded-t-2xl lg:container lg:mx-auto lg:gap-x-4 lg:rounded-none lg:bg-white lg:px-4 xl:px-0">
        <a href="/" class="font-brand text-2xl text-title md:text-4xl">
          Eka.
        </a>
        <div
          class={cn(
            "fixed left-0 z-50 w-full rounded-t-2xl bg-background pb-16 pt-8 shadow-menu transition-all duration-300 lg:transition-none",
            "-bottom-full lg:static lg:z-0 lg:w-auto lg:rounded-none lg:bg-white lg:p-0 lg:shadow-none",
            toggleMenu() && "bottom-0",
          )}
        >
          <ul class="grid grid-cols-3 gap-8 lg:flex">
            <NavItem href="/#home" icon={<FiHome />}>
              Home
            </NavItem>
            <NavItem href="/#about" icon={<AiOutlineUser />}>
              About
            </NavItem>
            <NavItem href="/#skills" icon={<HiOutlineDocumentText />}>
              Skills
            </NavItem>
            <NavItem href="/#contact" icon={<HiOutlinePaperAirplane />}>
              Contact
            </NavItem>
            <NavItem href="/projects" icon={<AiOutlineUser />}>
              Projects
            </NavItem>
          </ul>

          <Button
            class="absolute bottom-2 right-4 cursor-pointer text-2xl lg:hidden"
            variant="outline"
            size="icon"
            onClick={() => setToggleMenu((prev) => false)}
          >
            <CgClose class="text-title transition-all duration-300 hover:text-black" />
          </Button>
        </div>
        <Button
          class="lg:hidden"
          variant="outline"
          size="icon"
          onClick={() => setToggleMenu((prev) => true)}
        >
          <RiSystemAppsLine class="text-title transition-all duration-300 hover:text-black" />
        </Button>
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
