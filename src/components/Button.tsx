import { Button as KobalteButton, PressEvents } from "@kobalte/core";
import { JSX, ParentComponent, Switch, Match, Show } from "solid-js";
import { classList } from "solid-js/web";
import { LoadingIcon } from "./LoadingIcon";

interface Button
  extends Pick<
    JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
    "class" | "href" | "download" | "target"
  > {
  isLoading?: () => boolean;
  type?: "reset" | "button" | "submit" | undefined;
  onPress?: PressEvents["onPress"];
  href?: string;
  iconName?: string;
  icon?: JSX.Element;
}

export const Button: ParentComponent<Button> = (props) => {
  const Internal = () => (
    <>
      <span classList={{ "mr-2": props.icon || props.iconName ? true : false }}>
        {props.children}
      </span>

      <div
        classList={{
          hidden: props.isLoading && props.isLoading() === true ? false : true,
        }}
      >
        <LoadingIcon />
      </div>

      <Switch>
        <Match when={props.icon && props.iconName}>
          Error double icon input
        </Match>
        <Match when={props.icon && !props.iconName}>
          <div
            classList={{
              hidden: props.isLoading && props.isLoading() === true,
            }}
          >
            {props.icon}
          </div>
        </Match>
        <Match when={!props.icon && props.iconName}>
          <i
            class={`uil ${props.iconName}`}
            classList={{
              hidden: props.isLoading && props.isLoading() === true,
            }}
          />
        </Match>
      </Switch>
    </>
  );
  return (
    <Show
      when={props.href}
      fallback={
        <KobalteButton.Root
          class={`rounded-2xl  py-5 px-8 font-medium  transition-all duration-300  ${props.class}`}
          classList={{
            "bg-title text-white hover:bg-black":
              props.isLoading && props.isLoading() === true ? false : true,
            "border-2 border-gray-300":
              props.isLoading && props.isLoading() === true ? true : false,
            "inline-block": props.icon || props.iconName ? false : true,
            "inline-flex items-center":
              props.icon || props.iconName ? true : false,
          }}
          onPress={props.onPress}
          type={props.type}
        >
          <Internal />
        </KobalteButton.Root>
      }
    >
      <a
        target={props.target}
        download={props.download}
        href={props.href}
        class=" rounded-2xl bg-title py-5 px-8 font-medium text-white transition-all duration-300 hover:bg-black"
        classList={{
          "inline-block": props.icon || props.iconName ? false : true,
          "inline-flex items-center":
            props.icon || props.iconName ? true : false,
        }}
      >
        <Internal />
      </a>
    </Show>
  );
};
