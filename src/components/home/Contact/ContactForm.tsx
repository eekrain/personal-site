import { Component, createSignal } from "solid-js";
import { MyInput } from "~/components/ui/my-input";
import HCaptcha from "solid-hcaptcha";
import { publicEnv } from "~/lib/env";
import { Button } from "~/components/ui/button";
import { FaSolidPaperPlane } from "solid-icons/fa";

export const ContactForm: Component<{}> = (props) => {
  const [captchaSucceed, setCaptchaSucceed] = createSignal("");
  const errors = () => ({});
  return (
    <form class="mx-auto grid gap-4 lg:m-0 lg:w-[360px]">
      <div>
        <MyInput
          errors={errors}
          label="Email"
          name="email"
          type="email"
          placeholder="john.doe@gmail.com"
        />
        <span>anjing</span>
      </div>
      <MyInput
        errors={errors}
        label="Name"
        name="name"
        placeholder="Insert your name"
      />
      <MyInput
        errors={errors}
        label="Message"
        type="textarea"
        name="message"
        placeholder="Write me your message here"
        includeProps={{ cols: 30, rows: 10 }}
      />

      <div class="mx-auto lg:mx-0">
        <HCaptcha
          sitekey={publicEnv.VITE_HCAPTCHA_SITE_KEY}
          onVerify={(token) => {
            setCaptchaSucceed(token);
          }}
        />
      </div>

      <Button
        class="mx-auto w-fit rounded-2xl lg:mx-0"
        size="xl"
        as="a"
        href="#contact"
      >
        <span>Send Message</span>
        <FaSolidPaperPlane class="size-7 pl-2" />
      </Button>
    </form>
  );
};
