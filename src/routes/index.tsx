import MySiteTitle from "~/components/MySiteTitle";
import HomeAbout from "~/components/home/About";
import HomeTop from "~/components/home/Top";
import HomeSkills from "~/components/home/Skills";
import HomeQualification from "~/components/home/Qualification";

import { lazy } from "solid-js";
const HomeContact = lazy(() => import("~/components/home/Contact"));

export default function Page() {
  return (
    <div class="container">
      <MySiteTitle>🏠 Home</MySiteTitle>

      <HomeTop />
      <HomeAbout />
      <HomeSkills />
      <HomeQualification />
      <HomeContact />
    </div>
  );
}
