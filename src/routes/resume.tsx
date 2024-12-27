import { FiPrinter } from "solid-icons/fi";
import { Component, createEffect, createSignal, Show } from "solid-js";
import MySiteTitle from "~/components/MySiteTitle";
import ResumePage from "~/components/resume";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const Page: Component<{}> = (props) => {
  const [ready, setReady] = createSignal(false);

  createEffect(() => {
    setReady(true);
  });

  return (
    <>
      <MySiteTitle>📄 Resume</MySiteTitle>

      <div class="relative">
        <Show when={ready()}>
          <div class="container sticky right-0 top-[50%] flex justify-end">
            <Button
              onClick={() => {
                window.print();
              }}
              class="translate-x-[130px] rounded-2xl"
              size="xl"
            >
              <span>Print Out</span>
              <FiPrinter class="size-7 pl-2" />
            </Button>
          </div>
        </Show>
        <main
          id="print"
          class={cn(
            "mx-auto mt-8 block h-[29.7cm] w-[21cm] bg-body p-[1cm] font-jakarta text-gray-700 shadow-paperPage",
            "print:visible print:absolute print:left-0 print:top-0 print:m-0 print:h-auto print:w-full print:bg-none print:p-0 print:shadow-none",
          )}
        >
          <ResumePage />
        </main>
      </div>
    </>
  );
};

export default Page;
