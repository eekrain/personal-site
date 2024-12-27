import { Component, createSignal, Show } from "solid-js";
import { MyInput } from "~/components/ui/my-input";
import HCaptcha from "solid-hcaptcha";
import { Button } from "~/components/ui/button";
import { FaSolidPaperPlane } from "solid-icons/fa";
import { createForm, setValue, valiForm } from "@modular-forms/solid";
import { contactSchema, ContactSchema } from "~/lib/contact-schema";
import { useAction } from "@solidjs/router";
import {
  sendContactAction,
  SendContactResult,
} from "~/server/sendContactAction";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { FiAlertTriangle, FiCheckCircle } from "solid-icons/fi";
import { Grid } from "solid-spinner";

export const ContactForm: Component<{}> = (props) => {
  const sendContact = useAction(sendContactAction);
  const [loadingSend, setLoadingSend] = createSignal(false);
  const [contactResult, setContactResult] =
    createSignal<SendContactResult | null>(null);

  const [contactForm, { Form, Field }] = createForm<ContactSchema>({
    validate: valiForm(contactSchema),
  });

  return (
    <Form
      onSubmit={(values) => {
        setLoadingSend(true);
        setContactResult(null);
        sendContact(values)
          .then((res) => setContactResult(res))
          .catch((err) =>
            setContactResult({
              success: false,
              message:
                "Error while trying to submit. Please contact via email instead.",
            }),
          )
          .finally(() => setLoadingSend(false));
      }}
      class="mx-auto grid gap-4 lg:m-0 lg:w-[360px] xl:w-[400px]"
    >
      <Field name="email">
        {(field, props) => (
          <MyInput
            fieldProps={props}
            error={field.error}
            label="Email"
            name="email"
            type="email"
            placeholder="john.doe@gmail.com"
          />
        )}
      </Field>

      <Field name="name">
        {(field, props) => (
          <MyInput
            fieldProps={props}
            error={field.error}
            label="Name"
            name="name"
            placeholder="Insert your name"
          />
        )}
      </Field>

      <Field name="message">
        {(field, props) => (
          <MyInput
            fieldProps={props}
            error={field.error}
            label="Message"
            type="textarea"
            name="message"
            placeholder="Write me your message here"
          />
        )}
      </Field>

      <Field name="captchaToken">
        {(field, props) => (
          <div class="mx-auto mt-4 lg:mx-0">
            <input type="hidden" value={field.value} {...props} />
            <HCaptcha
              sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
              onVerify={(token) => {
                setValue(contactForm, "captchaToken", token);
              }}
            />

            <Show when={field.error}>
              <div class="text-red-500">{field.error}</div>
            </Show>
          </div>
        )}
      </Field>

      <Show when={contactResult()}>
        {(res) => (
          <Show
            when={res().success}
            fallback={
              <Alert variant="destructive">
                <FiAlertTriangle />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>{res().message}</AlertDescription>
              </Alert>
            }
          >
            <Alert>
              <FiCheckCircle />
              <AlertTitle>Message Sent!</AlertTitle>
              <AlertDescription>{res().message}</AlertDescription>
            </Alert>
          </Show>
        )}
      </Show>

      {/* <Alert>
        <FiCheckCircle />
        <AlertTitle>Message Sent!</AlertTitle>
        <AlertDescription>
          Your message has been sent! I will reply to your message via email.
          Thank you for reaching me!
        </AlertDescription>
      </Alert> */}

      <Button
        type="submit"
        class="mx-auto w-fit rounded-2xl lg:mx-0"
        size="xl"
        disabled={loadingSend()}
      >
        <span>Send Message</span>
        <Show
          when={loadingSend()}
          fallback={<FaSolidPaperPlane class="size-7 pl-2" />}
        >
          <Grid class="size-7 pl-2" />
        </Show>
      </Button>
    </Form>
  );
};
