import { lazy } from "solid-js";
import HomeAbout from "~/components/home/About";
import HomeTop from "~/components/home/Top";
import HomeSkills from "~/components/home/Skills";
import HomeQualification from "~/components/home/Qualification";
import MySiteTitle from "~/components/MySiteTitle";

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
