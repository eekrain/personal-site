import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { type Component, createEffect, createSignal } from "solid-js";
import { BxlMessenger } from "../../components/Icons/BxlMessenger";
import { BxMailSend } from "../../components/Icons/BxMailSend";
import { BxRightArrowAlt } from "../../components/Icons/BxRightArrowAlt";
import { setActivePage } from "../../utils/activePage";
import { ContactForm } from "./ContactForm";

export const Contact: Component<{}> = (props) => {
  let section: HTMLElement | undefined;

  const visible = createVisibilityObserver({ threshold: 0.4 })(() => section);

  createEffect(() => {
    if (visible()) setActivePage("contact");
  });

  return (
    <section ref={section} class="contact">
      <div class="relative mt-24 lg:-top-16" id="contact" />
      <h2 class="section__title text-center text-4xl text-title">Contact</h2>
      <span class="section__subtitle mb-12 block text-center lg:mb-16">
        Get in touch
      </span>

      <div class="contact__container container mx-auto grid grid-cols-1 justify-center gap-y-12 lg:grid-cols-[repeat(2,_max-content)] lg:gap-12 lg:gap-x-24">
        <div class="contact__content">
          <h3 class="contact__title mb-6 text-center font-medium">
            Talk to me
          </h3>
          <div class="contact__info grid grid-cols-[300px] justify-center gap-y-4 lg:justify-start">
            <ContactCard
              title="Email"
              data="candra.ardianeka@gmail.com"
              href="mailto:candra.ardianeka@gmail.com"
              Icon={(props) => <BxMailSend {...props} />}
            />
            <ContactCard
              title="Messenger"
              data="eekrain"
              href="https://m.me/eekrain"
              Icon={(props) => <BxlMessenger {...props} />}
            />
          </div>
        </div>

        <div class="contact__content">
          <h3 class="contact__title mb-6 text-center font-medium">
            Tell me anything
          </h3>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactCard: Component<{
  title: string;
  data: string;
  href: string;
  Icon: Component<IconProps>;
}> = (props) => {
  const [btnHover, setBtnHover] = createSignal(false);
  return (
    <div class="contact__card rounded-xl border border-gray-100 bg-white p-4 text-center">
      <props.Icon class="contact__card-icon mb-4 inline-block text-3xl text-title" />

      <h3 class="contact__card-title text-sm font-medium">{props.title}</h3>
      <span class="contact__card-data mb-3 block text-sm">{props.data}</span>

      <a
        href={props.href}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        class="contact__button inline-flex items-center justify-center gap-x-1 text-sm hover:text-black"
      >
        Write me
        <BxRightArrowAlt
          class="contact__button-icon transition-all duration-300 "
          classList={{ "translate-x-1": btnHover() }}
        />
      </a>
    </div>
  );
};
