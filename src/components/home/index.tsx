import { ParentComponent } from "solid-js";
import Social from "./Social";
import { Intro } from "./Intro";
import { ScrollDown } from "./ScrollDown";

const Home: ParentComponent<{}> = (props) => {
  return (
    <section id="home" class="container flex h-dvh flex-col justify-center">
      <div class="-mt-20 grid lg:gap-y-8 xl:gap-y-12">
        <div class="grid items-center gap-y-4 md:grid-cols-[0.5fr_3fr] lg:grid-cols-[70px_repeat(2,_1fr)] lg:gap-x-5 xl:grid-cols-[116px_repeat(2,_1fr)] xl:gap-x-8">
          <Social />
          <div class="animate-profile-animate xl:shadow-innerProfileXL relative h-[200px] w-[200px] overflow-clip lg:order-1 lg:h-[250px] lg:w-[250px] lg:justify-self-center xl:h-[300px] xl:w-[300px]">
            <div class="animate-profile-animate shadow-innerProfileMD lg:shadow-innerProfileLG xl:shadow-innerProfileXL absolute left-0 top-0 z-10 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]" />
            <img src="/img/profile_picture.jpg" alt="Main profile image" />
          </div>
          <Intro />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
