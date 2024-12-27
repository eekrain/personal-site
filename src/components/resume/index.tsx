import { Component } from "solid-js";
import { Header } from "./Header";
import { WorkExperience } from "./WorkExperience";

const ResumePage: Component<{}> = (props) => {
  return (
    <div>
      <Header />
      <hr class="my-4 border-t-2 border-gray-600" />

      <div class="grid grid-cols-[35%_1fr] gap-x-8">
        <div>
          <h3 class="font-poppins text-lg font-semibold">EDUCATION</h3>
          <hr class="mb-4 mt-2 border-t-2 border-gray-600" />
        </div>
        <WorkExperience />
      </div>
    </div>
  );
};

export default ResumePage;
