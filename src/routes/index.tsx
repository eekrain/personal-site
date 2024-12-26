import HomeAbout from "~/components/home/About";
import HomeTop from "~/components/home/Top";
import HomeSkills from "~/components/home/Skills";
import HomeContact from "~/components/home/Contact";
import HomeQualification from "~/components/home/Qualification";
import MySiteTitle from "~/components/MySiteTitle";

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
