import { Component } from "solid-js";
import { Header } from "./Header";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Courses } from "./Courses";
import { Projects } from "./Projects";
import { setCurrentPage } from "~/lib/page-state";

const ResumePage: Component<{}> = (props) => {
  setCurrentPage(null);
  return (
    <div>
      <Header />
      <hr class="mb-8 mt-4 border-t-2 border-gray-600" />

      <div class="grid grid-cols-[35%_1fr] gap-x-8">
        <div class="flex flex-col gap-4">
          <Education />
          <Courses />
          <Skills />
        </div>
        <div class="flex flex-col gap-4">
          <WorkExperience />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
