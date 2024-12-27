import { createEffect, ParentComponent } from "solid-js";
import Social from "./Social";
import { Intro } from "./Intro";
import { ScrollDown } from "./ScrollDown";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { setCurrentPage } from "~/lib/page-state";

const HomeTop: ParentComponent<{}> = (props) => {
  let section: HTMLElement | undefined;
  const visible = createVisibilityObserver({ threshold: 0.8 })(() => section);
  createEffect(() => {
    if (visible()) setCurrentPage("#home");
  });

  return (
    <section ref={section} id="home" class="flex h-dvh flex-col justify-center">
      <div class="-mt-20 grid lg:gap-y-8 xl:gap-y-12">
        <div class="grid grid-cols-[0.5fr_1fr] items-center gap-8 lg:grid-cols-[70px_repeat(2,_1fr)]">
          <Social />
          <div class="relative h-[200px] w-[200px] animate-profile-animate overflow-clip lg:order-1 lg:h-[250px] lg:w-[250px] lg:justify-self-center xl:h-[300px] xl:w-[300px] xl:shadow-innerProfileXL">
            <div class="absolute left-0 top-0 z-10 h-[200px] w-[200px] animate-profile-animate shadow-innerProfileMD lg:h-[250px] lg:w-[250px] lg:shadow-innerProfileLG xl:h-[300px] xl:w-[300px] xl:shadow-innerProfileXL" />
            <img src="/img/profile_picture.jpg" alt="Main profile image" />
          </div>
          <Intro />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default HomeTop;
