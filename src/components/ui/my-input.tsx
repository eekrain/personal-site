import { Component, Show } from "solid-js";
import { cn } from "~/lib/utils";

export const MyInput: Component<{
  errors: () => any;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  includeProps?: { [key: string]: any };
}> = (props) => {
  return (
    <div class={cn("relative mb-8 h-8", props.type === "textarea" && "h-44")}>
      <label
        for={props.name}
        class="absolute -top-3 left-5 z-20 bg-body p-1 text-sm"
      >
        {props.label}
      </label>
      <Show
        when={props.type === "textarea"}
        fallback={
          <input
            id={props.name}
            type={props.type}
            name={props.name}
            class={cn(
              "absolute left-0 top-0 z-10 h-full w-full rounded-xl border-2 border-gray-300 bg-transparent p-6 text-normalTextColor outline-none",
            )}
            placeholder={props.placeholder}
            {...props.includeProps}
          />
        }
      >
        <textarea
          id={props.name}
          name={props.name}
          class={cn(
            "left-0 top-0 z-10 h-44 w-full resize-none rounded-xl border-2 border-gray-300 bg-transparent p-6 text-normalTextColor outline-none",
          )}
          placeholder={props.placeholder}
          {...props.includeProps}
        />
      </Show>
    </div>
  );
};
