import {
  Component,
  createEffect,
  onCleanup,
  onMount,
  Show,
  Signal,
} from "solid-js";
import { createForm } from "@felte/solid";
import { SendIcon } from "../../components/SendIcon";
import { Button } from "../../components/Button";
import { z } from "zod";
import { validator } from "@felte/validator-zod";
import reporter from "@felte/reporter-tippy";
import HCaptcha from "solid-hcaptcha";
import "tippy.js/dist/tippy.css";
import "./customTippy.css";
import toast from "solid-toast";

const schema = z.object({
  email: z.string().email("Email is invalid!"),
  name: z.string().min(3, "Name at least have 3 character"),
  message: z.string().min(3, "Message at least have 3 character"),
  captchaToken: z.string().min(3),
});
export type ContactSchema = z.infer<typeof schema>; // string

export const ContactForm: Component<{}> = () => {
  const { form, isSubmitting, errors, setData } = createForm<ContactSchema>({
    extend: [
      validator({ schema }),
      reporter({
        tippyProps: {
          theme: "error",
        },
      }),
    ],
    onSubmit: async (values) => {
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      };

      try {
        const fetchResponse = await fetch(`/sendEmail`, settings);
        const json = (await fetchResponse.json()) as { message: string } | null;
        console.log("🚀 ~ file: ContactForm.tsx:51 ~ onSubmit: ~ json", json);
        if (fetchResponse.status === 200)
          toast.success(json?.message || "Message succesfully sent!", {
            duration: 5000,
            position: "bottom-center",
          });
        else
          toast.error(json?.message || "Error while trying to send message!", {
            duration: 5000,
            position: "bottom-center",
          });
      } catch (error) {
        console.log("🚀 ~ file: ContactForm.tsx:42 ~ onSubmit: ~ error", error);
        toast.error("Error while trying to send message!", {
          duration: 5000,
          position: "bottom-center",
        });
      }
    },
  });

  return (
    <form ref={form} class="contact__form mx-auto max-w-[360px] lg:m-0">
      <TextInput
        errors={errors}
        label="Email"
        name="email"
        placeholder="Insert your email, eg: tes@mail.com"
      />
      <TextInput
        errors={errors}
        label="Name"
        name="name"
        placeholder="Insert your name"
      />
      <TextInput
        errors={errors}
        label="Message"
        type="textarea"
        name="message"
        placeholder="Write me your message here"
        includeProps={{ cols: 30, rows: 10 }}
      />

      <HCaptcha
        sitekey={import.meta.env.PUBLIC_HCAPTCHA_SITE_KEY}
        onVerify={(token) => {
          setData("captchaToken", token);
        }}
      />
      <Show when={Array.isArray(errors()?.captchaToken)}>
        <span class="text-sm text-red-400">Captcha must be valid!</span>
      </Show>

      <Button
        isLoading={isSubmitting}
        icon={SendIcon}
        type="submit"
        class="mt-6"
      >
        Send Message
      </Button>
    </form>
  );
};

const TextInput: Component<{
  errors: () => any;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  includeProps?: { [key: string]: any };
}> = (props) => {
  return (
    <div
      class="contact__form-div relative mb-8"
      classList={{
        "h-16": props.type !== "textarea",
        "h-44": props.type === "textarea",
      }}
    >
      <label
        for={props.name}
        class="contact__form-tag absolute -top-3 left-5 z-20 bg-body p-1 text-sm"
      >
        {props.label}
      </label>
      <Show
        when={props.type === "textarea"}
        fallback={
          <input
            id={props.name}
            type={props.type}
            name={props.name}
            class="contact__form-input absolute top-0 left-0 z-10 h-full w-full rounded-xl border-2 border-red-400  bg-transparent p-6 text-normalTextColor outline-none"
            classList={{
              "border-gray-300": props.errors()[props.name] === null,
              "border-red-400": props.errors()[props.name] !== null,
            }}
            placeholder={props.placeholder}
            {...props.includeProps}
          />
        }
      >
        <textarea
          id={props.name}
          name={props.name}
          class="contact__form-input ute top-0 left-0 z-10 h-44 w-full resize-none rounded-xl border-2 bg-transparent p-6 text-normalTextColor outline-none"
          classList={{
            "border-gray-300": props.errors()[props.name] === null,
            "border-red-400": props.errors()[props.name] !== null,
          }}
          placeholder={props.placeholder}
          {...props.includeProps}
        />
      </Show>
    </div>
  );
};
