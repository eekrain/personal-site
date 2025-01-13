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
        <div class="grid grid-cols-[0.3fr_1fr] items-center gap-8 lg:grid-cols-[70px_repeat(2,_1fr)]">
          <Social />

          <picture class="animate-profile-picture relative size-[200px] overflow-clip lg:order-1 lg:size-[250px] lg:justify-self-center xl:size-[300px] xl:shadow-innerProfileXL">
            <div class="animate-profile-picture absolute left-0 top-0 z-10 h-full w-full shadow-innerProfileMD lg:shadow-innerProfileLG xl:shadow-innerProfileXL" />
            <img
              sizes="(max-width: 1000px) 40vw, 400px"
              srcset="/img/profile_picture_200.webp 200w,/img/profile_picture_400.webp 400w"
              src="profile_picture_400.webp"
              alt="Ardian Eka Candra Picture"
              class="h-full w-full"
            />
          </picture>

          <Intro />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default HomeTop;
