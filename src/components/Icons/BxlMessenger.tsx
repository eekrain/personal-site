import { Component } from "solid-js";

export const BxlMessenger: Component<IconProps> = (props) => {
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
      <path d="M12 3c-4.92 0-8.91 3.729-8.91 8.332 0 2.616 1.291 4.952 3.311 6.479V21l3.041-1.687c.811.228 1.668.35 2.559.35 4.92 0 8.91-3.73 8.91-8.331C20.91 6.729 16.92 3 12 3zm.938 11.172-2.305-2.394-4.438 2.454 4.865-5.163 2.305 2.395 4.439-2.455-4.866 5.163z"></path>
    </svg>
  );
};
