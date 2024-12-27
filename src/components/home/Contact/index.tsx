import { IconProps } from "solid-icons";
import { Component, createEffect, createSignal, Show } from "solid-js";
import { ContactCard } from "./ContactCard";
import { FaBrandsFacebookMessenger } from "solid-icons/fa";
import { ContactForm } from "./ContactForm";
import { BxMailSend } from "~/components/BxMailSend";
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { setCurrentPage } from "~/lib/page-state";

const HomeContact: Component<{}> = (props) => {
  const [ready, setReady] = createSignal(false);
  createEffect(() => {
    setReady(true);
  });

  let section: HTMLElement | undefined;
  const visible = createVisibilityObserver({ threshold: 0.4 })(() => section);
  createEffect(() => {
    if (visible()) setCurrentPage("#contact");
  });

  return (
    <section ref={section} id="contact" class="min-h-[85vh] scroll-mt-16">
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
