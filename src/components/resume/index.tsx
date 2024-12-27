import { Component } from "solid-js";
import { Header } from "./Header";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Courses } from "./Courses";

const ResumePage: Component<{}> = (props) => {
  return (
    <div>
      <Header />
      <hr class="my-4 border-t-2 border-gray-600" />

      <div class="grid grid-cols-[35%_1fr] gap-x-8">
        <div class="grid gap-4">
          <Education />
          <Courses />
          <Skills />
        </div>
        <div>
          <WorkExperience />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
