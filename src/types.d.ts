type SVGSVGElementTags = JSX.SVGElementTags["svg"];
interface IconProps extends SVGSVGElementTags {
  size?: string | number;
  class?: string;
  classList?: SVGSVGElementTags["classList"];
}

declare module "astro-imagetools/components";
