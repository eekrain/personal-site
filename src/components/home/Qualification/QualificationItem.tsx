import { IoCalendarOutline } from "solid-icons/io";
import { Component, JSX, Show } from "solid-js";

export const QualificationItem: Component<{
  position: "left" | "right";
  title: string;
  subtitle: JSX.Element;
  date: string;
}> = (props) => {
  const Data = () => (
    <div>
      <h3 class="text-base font-medium">{props.title}</h3>
      {props.subtitle}
      <div class="flex items-center gap-2 text-sm">
        <IoCalendarOutline />
        {props.date}
      </div>
    </div>
  );
  const Separator = () => (
    <div>
      <span class="inline-block h-3 w-3 rounded-full bg-normalTextColor"></span>
      <span class="block h-full w-px translate-x-[5px] translate-y-[-7px] bg-normalTextColor"></span>
    </div>
  );
  return (
    <div class="grid grid-cols-[1fr_max-content_1fr] gap-x-2 md:gap-x-6">
      <Show
        when={props.position === "left"}
        fallback={
          <>
            <div></div>
            <Separator />
          </>
        }
      >
        <Data />
      </Show>
      <Show when={props.position === "left"} fallback={<Data />}>
        <Separator />
      </Show>
    </div>
  );
};
