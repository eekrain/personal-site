import { type Component, Show, createEffect } from "solid-js";
import {
  createForm,
  zodForm,
  type FieldStore,
  setValue,
} from "@modular-forms/solid";

import { SendIcon } from "../../components/SendIcon";
import { Button } from "../../components/Button";
import { z } from "zod";
import { validator } from "@felte/validator-zod";
import reporter from "@felte/reporter-tippy";
import HCaptcha from "solid-hcaptcha";
import "tippy.js/dist/tippy.css";
import "./customTippy.css";
import toast from "solid-toast";

const contactSchema = z.object({
  email: z.string().email("Email is invalid!"),
  name: z.string().min(3, "Name at least have 3 character"),
  message: z.string().min(3, "Message at least have 3 character"),
  captchaToken: z.string().min(3),
});
export type ContactSchema = z.infer<typeof contactSchema>; // string

export const ContactForm: Component<{}> = () => {
  const [contactForm, { Form, Field }] = createForm<ContactSchema>({
    validate: zodForm(contactSchema),
  });

  return (
    <Form
      onSubmit={(val) => {
        console.log("🚀 ~ file: ContactForm.tsx:29 ~ val:", val);
      }}
    >
      <Field name="email">
        {(field, props) => (
          <TextInput
            field={field}
            includeProps={props}
            label="Email"
            placeholder="Insert your email, eg: tes@mail.com"
          />
        )}
      </Field>

      <Field name="name">
        {(field, props) => (
          <TextInput
            field={field}
            includeProps={props}
            label="Name"
            placeholder="Insert your name"
          />
        )}
      </Field>

      <Field name="message">
        {(field, props) => (
          <TextInput
            field={field}
            includeProps={{ ...props, cols: 30, rows: 10 }}
            label="Message"
            type="textarea"
            placeholder="Write me your message here"
          />
        )}
      </Field>

      <Field name="captchaToken">
        {(field, props) => (
          <>
            <HCaptcha
              sitekey={import.meta.env.PUBLIC_HCAPTCHA_SITE_KEY}
              onVerify={(token) => {
                setValue(contactForm, field.name, token);
              }}
            />
            <Show when={Boolean(field.error)}>
              <span class="text-sm text-red-400">Captcha must be valid!</span>
            </Show>
          </>
        )}
      </Field>

      <Button
        isLoading={() => contactForm.submitting}
        icon={SendIcon}
        type="submit"
        class="mt-6"
      >
        Send Message
      </Button>
    </Form>
  );
};

const TextInput: Component<{
  label: string;
  type?: "textarea" | "text";
  placeholder?: string;
  field: FieldStore<any, any>;
  includeProps?: { [key: string]: any };
}> = (props) => {
  if (!props.type) props.type = "text";

  return (
    <>
      <div
        class="relative mb-8 w-full"
        classList={{
          "h-16": props.type !== "textarea",
          "h-44": props.type === "textarea",
        }}
      >
        <label
          for={props.field.name}
          class="absolute -top-3 left-5 z-20 bg-body p-1 text-sm"
        >
          {props.label}
        </label>
        <Show
          when={props.type === "textarea"}
          fallback={
            <input
              {...props.includeProps}
              id={props.field.name}
              name={props.field.name}
              type={props.type}
              class="absolute top-0 left-0 z-10 h-full w-full rounded-xl border-2 border-red-400  bg-transparent p-6 text-normalTextColor outline-none"
              classList={{
                "border-gray-300": !Boolean(props.field.error),
                "border-red-400": Boolean(props.field.error),
              }}
              placeholder={props.placeholder}
            />
          }
        >
          <textarea
            {...props.includeProps}
            id={props.field.name}
            name={props.field.name}
            class="top-0 left-0 z-10 h-44 w-full resize-none rounded-xl border-2 bg-transparent p-6 text-normalTextColor outline-none"
            classList={{
              "border-gray-300": !Boolean(props.field.error),
              "border-red-400": Boolean(props.field.error),
            }}
            placeholder={props.placeholder}
          />
        </Show>
      </div>
    </>
  );
};
