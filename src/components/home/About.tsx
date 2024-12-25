import { Component } from "solid-js";
import { Button } from "../ui/button";
import { RiDocumentFileList3Line } from "solid-icons/ri";
import { TbAward } from "solid-icons/tb";
import { HiOutlineBriefcase } from "solid-icons/hi";

const HomeAbout: Component<{}> = (props) => {
  return (
    <section id="about" class="section min-h-[85vh] scroll-mt-36">
      <div class="relative mt-24 lg:-top-16 lg:mt-0" />
      <h2 class="text-center text-4xl text-title">About Me</h2>
      <span class="mb-12 block text-center lg:mb-16">My introduction</span>
      <div class="container mx-auto grid grid-cols-1 items-center gap-y-10 xl:grid-cols-2 xl:gap-x-16">
        <div class="h-[250px] max-w-[200px] justify-self-center overflow-clip rounded-3xl xl:h-full xl:max-w-[350px]">
          <img src="/img/profile_picture.jpg" alt="Main profile image" />
        </div>
        <div class="text-center xl:text-start">
          <div class="mb-8 grid grid-cols-2 justify-center gap-x-2 gap-y-2">
            <div class="rounded-xl border border-gray-100 bg-white px-2 py-3 text-center xl:px-5 xl:py-4">
              <TbAward class="mb-4 inline-block text-center text-2xl text-title" />
              <h3 class="text-sm font-medium">Experience</h3>
              <span class="text-xs">2 Years Working</span>
            </div>

            <div class="rounded-xl border border-gray-100 bg-white px-2 py-3 text-center xl:px-5 xl:py-4">
              <HiOutlineBriefcase class="mb-4 inline-block text-2xl text-title" />
              <h3 class="text-sm font-medium">Completed</h3>
              <span class="text-xs">8 Projects</span>
            </div>
          </div>

          <p class="lg mb-8 p-0 md:px-10 lg:p-0 lg:py-0">
            Full-Stack Developer, I build information system based on client
            request. I have 2 years of experience and many client are happy with
            the projects carried out.
          </p>

          <Button class="rounded-2xl" size="xl" as="a" href="/resume">
            My Resume
            <RiDocumentFileList3Line class="size-7 pl-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
