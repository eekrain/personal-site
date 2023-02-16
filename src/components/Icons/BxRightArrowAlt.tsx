import { Component } from "solid-js";

export const BxRightArrowAlt: Component<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      height={props.size || "1em"}
      width={props.size || "1em"}
      fill="currentColor"
      {...props}
    >
      <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
    </svg>
  );
};
