import * as v from "valibot";

export const contactSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your email."),
    v.email("Please enter your correct email address."),
  ),
  name: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your name."),
    v.minLength(3, "Name minimum should be 3 characters long."),
  ),
  message: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your message."),
    v.minWords("id", 3, "Message has to contains minimum 3 words"),
  ),
  captchaToken: v.pipe(
    v.string(),
    v.nonEmpty("Please complete the captcha challenge first."),
  ),
});
export type ContactSchema = v.InferOutput<typeof contactSchema>;
