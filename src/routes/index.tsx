import HomeAbout from "~/components/home/About";
import HomeTop from "~/components/home/Top";
import HomeSkills from "~/components/home/Skills";

export default function Page() {
  return (
    <div class="container">
      <HomeTop />
      <HomeAbout />
      <HomeSkills />
    </div>
  );
}
