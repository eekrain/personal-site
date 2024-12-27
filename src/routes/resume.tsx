import { Component } from "solid-js";
import MySiteTitle from "~/components/MySiteTitle";
import ResumePage from "~/components/resume";

const Page: Component<{}> = (props) => {
  return (
    <>
      <MySiteTitle>📄 Resume</MySiteTitle>

      <main
        id="print"
        class="mx-auto mt-8 block h-[29.7cm] w-[21cm] bg-body p-[1cm] font-jakarta text-gray-700 shadow-paperPage print:m-0 print:h-auto print:w-full print:bg-none print:p-0 print:shadow-none"
      >
        <ResumePage />
      </main>
    </>
  );
};

export default Page;
