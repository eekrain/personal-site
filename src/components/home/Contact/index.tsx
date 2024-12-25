import { IconProps } from "solid-icons";
import { Component, createEffect, createSignal, Show } from "solid-js";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { ContactCard } from "./ContactCard";
import { FaBrandsFacebookMessenger } from "solid-icons/fa";
import { ContactForm } from "./ContactForm";
import { publicEnv } from "~/lib/env";

const HomeContact: Component<{}> = (props) => {
  const [ready, setReady] = createSignal(false);
  createEffect(() => {
    setReady(true);
  });

  return (
    <section id="contact">
      <h2 class="text-center text-4xl text-title">Contact</h2>
      <span class="mb-12 block text-center lg:mb-16">Get in touch</span>

      <div class="flex flex-col justify-center gap-y-12 lg:grid-cols-[30%_1fr] lg:flex-row lg:gap-12 lg:gap-x-24">
        <div>
          <h3 class="mb-6 text-center font-medium">Talk to me</h3>
          <div class="grid justify-center gap-y-4 lg:justify-start">
            <ContactCard
              title="Email"
              data="candra.ardianeka@gmail.com"
              href="mailto:candra.ardianeka@gmail.com"
              icon={
                <BxMailSend class="size-8 justify-self-center text-title" />
              }
            />

            <ContactCard
              title="Messenger"
              data="eekrain"
              href="https://m.me/eekrain"
              icon={
                <FaBrandsFacebookMessenger class="size-8 justify-self-center text-title" />
              }
            />
          </div>
        </div>

        <div>
          <h3 class="mb-6 text-center font-medium">Tell me anything</h3>
          <Show when={ready()}>
            <ContactForm />
          </Show>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;

export const BxMailSend: Component<IconProps> = (props) => {
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
      <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
      <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
    </svg>
  );
};
