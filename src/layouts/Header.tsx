import { Component, createSignal } from "solid-js";
import { NavItem } from "../components/NavItem";

export const Header: Component<{}> = (props) => {
  const [activeLink, setActiveLink] = createSignal("home");
  return (
    <header class="w-full fixed top-0 left-0 ">
      <nav class="max-w-lg768 mx-auto flex justify-between items-center gap-x-4">
        <a href="/">Eka</a>

        <div>
          <ul class="flex gap-x-8">
            <li>
              <NavItem activeLink={activeLink()} iconName="uil-estate">
                Home
              </NavItem>
            </li>
            <li>
              <NavItem activeLink={activeLink()} iconName="uil-user">
                About
              </NavItem>
            </li>
            <li>
              <NavItem activeLink={activeLink()} iconName="uil-file-alt">
                Skills
              </NavItem>
            </li>
            <li>
              <NavItem activeLink={activeLink()} iconName="uil-briefcase-alt">
                Services
              </NavItem>
            </li>
            <li>
              <NavItem activeLink={activeLink()} iconName="uil-scenery">
                Portfolio
              </NavItem>
            </li>
            <li>
              <NavItem activeLink={activeLink()} iconName="uil-message">
                Contact
              </NavItem>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
