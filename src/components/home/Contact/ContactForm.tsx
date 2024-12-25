import { Component, createSignal } from "solid-js";
import { MyInput } from "~/components/ui/my-input";
import HCaptcha from "solid-hcaptcha";
import { publicEnv } from "~/lib/env";

export const ContactForm: Component<{}> = (props) => {
  const [captchaSucceed, setCaptchaSucceed] = createSignal("");
  const errors = () => ({});
  return (
    <form class="mx-auto grid gap-4 lg:m-0 lg:w-[360px]">
      <MyInput
        errors={errors}
        label="Email"
        name="email"
        type="email"
        placeholder="john.doe@gmail.com"
      />
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

      <HCaptcha
        sitekey={publicEnv.VITE_HCAPTCHA_SITE_KEY}
        onVerify={(token) => {
          setCaptchaSucceed(token);
        }}
      />
    </form>
  );
};
