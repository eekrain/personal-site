import { ParentComponent } from "solid-js";
import { Title } from "@solidjs/meta";

const MySiteTitle: ParentComponent<{}> = (props) => {
  return <Title>{props.children} | Ardian Eka Candra</Title>;
};
export default MySiteTitle;
