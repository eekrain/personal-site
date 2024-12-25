import HomeAbout from "~/components/home/About";
import HomeTop from "~/components/home/Top";
import HomeSkills from "~/components/home/Skills";
import HomeContact from "~/components/home/Contact";

export default function Page() {
  return (
    <div class="container">
      <HomeTop />
      <HomeAbout />
      <HomeSkills />
      <HomeContact />
    </div>
  );
}
