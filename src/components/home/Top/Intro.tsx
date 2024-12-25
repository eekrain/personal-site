import { Component } from "solid-js";
import { Button } from "../../ui/button";
import { FaSolidPaperPlane } from "solid-icons/fa";

export const Intro: Component<{}> = (props) => {
  return (
    <div class="col-span-2 flex flex-col items-center gap-4 lg:col-span-1 lg:items-start">
      <h1 class="font-jakarta text-3xl font-bold text-title md:text-4xl lg:mb-2">
        Ardian Eka Candra 👋
      </h1>

      <div class="flex items-center gap-2">
        <hr class="hidden h-[2px] w-[40px] bg-title lg:block xl:w-[70px]" />
        <h3 class="font-jakarta text-lg font-semibold text-title">
          Full-Stack Developer
        </h3>
      </div>

      <div class="flex max-w-[400px] flex-col items-end text-base sm:max-w-[500px] lg:items-start">
        <p>
          I'm a full-stack developer based in Yogyakarta, ID. I'm passionate and
          dedicated to my work.
        </p>

        <Button class="mt-6 w-fit rounded-2xl" size="xl" as="a" href="#contact">
          Say Hi
          <FaSolidPaperPlane class="size-7 pl-2" />
        </Button>
      </div>
    </div>
  );
};
