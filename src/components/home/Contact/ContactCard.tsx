import { FaSolidArrowRightLong } from "solid-icons/fa";
import { Component, createSignal, JSX } from "solid-js";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export const ContactCard: Component<{
  title: string;
  data: string;
  href: string;
  icon: JSX.Element;
}> = (props) => {
  const [btnHover, setBtnHover] = createSignal(false);
  return (
    <Card>
      <CardHeader>
        <div class="flex justify-center">{props.icon}</div>
      </CardHeader>

      <CardContent class="flex flex-col items-center text-normalTextColor">
        <h3 class="text-sm font-medium">{props.title}</h3>
        <span class="mb-3 block text-sm">{props.data}</span>

        <a
          href={props.href}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          class="inline-flex items-center justify-center gap-x-1 text-sm hover:text-black"
        >
          Write me
          <FaSolidArrowRightLong
            class={cn(
              "transition-all duration-300",
              btnHover() && "translate-x-1",
            )}
          />
        </a>
      </CardContent>
    </Card>
  );
};
