import { JSX, ParentComponent, Switch, Match } from "solid-js";

export const Button: ParentComponent<{
  href?: string;
  iconName?: string;
  icon?: JSX.Element;
  download?: string;
}> = (props) => {
  return (
    <a
      href={props.href}
      class=" bg-title text-white py-5 px-8 rounded-2xl font-medium hover:bg-black transition-all duration-300"
      classList={{
        "inline-block": props.icon || props.iconName ? false : true,
        "inline-flex items-center": props.icon || props.iconName ? true : false,
      }}
    >
      <span classList={{ "mr-2": props.icon || props.iconName ? true : false }}>
        {props.children}
      </span>

      <Switch>
        <Match when={props.icon && !props.iconName}>{props.icon}</Match>
        <Match when={!props.icon && props.iconName}>
          <i class={`uil ${props.iconName}`} />
        </Match>
        <Match when={!props.icon && props.iconName}>
          Error double icon input
        </Match>
      </Switch>
    </a>
  );
};
