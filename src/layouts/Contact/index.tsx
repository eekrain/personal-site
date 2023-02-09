import { Component, createSignal, Show } from "solid-js";
import { Button } from "../../components/Button";
import { SendIcon } from "../../components/SendIcon";
import { ContactForm } from "./ContactForm";

export const Contact: Component<{}> = (props) => {
  return (
    <section
      id="contact"
      class="contact section pt-20 pb-20 lg:mb-16 lg:pt-24 lg:pb-0 xl:mb-24"
    >
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
              iconClass="bx bx-mail-send"
            />
            <ContactCard
              title="Messenger"
              data="eekrain"
              href="https://m.me/eekrain"
              iconClass="bx bxl-messenger"
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
  iconClass?: string;
}> = (props) => {
  const [btnHover, setBtnHover] = createSignal(false);
  return (
    <div class="contact__card rounded-xl border border-gray-100 bg-white p-4 text-center">
      <i
        class={`${props.iconClass} contact__card-icon text-3xl text-title`}
      ></i>

      <h3 class="contact__card-title text-sm font-medium">{props.title}</h3>
      <span class="contact__card-data mb-3 block text-sm">{props.data}</span>

      <a
        href={props.href}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        class="contact__button inline-flex items-center justify-center gap-x-1 text-sm hover:text-black"
      >
        Write me
        <i
          class="bx bx-right-arrow-alt contact__button-icon transition-all duration-300 "
          classList={{ "translate-x-1": btnHover() }}
        ></i>
      </a>
    </div>
  );
};
