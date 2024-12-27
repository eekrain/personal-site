import { Component, Show } from "solid-js";
import { cn } from "~/lib/utils";

export const MyInput: Component<{
  error: string;
  fieldProps: any;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}> = (props) => {
  return (
    <div class="relative">
      <label
        for={props.name}
        class="absolute -top-3 left-5 z-20 bg-body p-1 text-sm"
      >
        {props.label}
      </label>

      <Show
        when={props.type === "textarea"}
        fallback={
          <>
            <input
              id={props.name}
              type={props.type}
              name={props.name}
              class={cn(
                "w-full rounded-xl border-2 border-gray-300 bg-transparent px-6 py-4 text-normalTextColor outline-none",
                props.error && "border-red-400",
              )}
              placeholder={props.placeholder}
              {...props.fieldProps}
            />
          </>
        }
      >
        <textarea
          id={props.name}
          name={props.name}
          class={cn(
            "w-full rounded-xl border-2 border-gray-300 bg-transparent px-6 py-4 text-normalTextColor outline-none",
            props.error && "border-red-400",
          )}
          placeholder={props.placeholder}
          rows={10}
          {...props.fieldProps}
        />
      </Show>

      <Show when={props.error}>
        <div class="text-red-500">{props.error}</div>
      </Show>
    </div>
  );
};
