import { action } from "@solidjs/router";
import { verifyRecaptcha } from "~/lib/hcaptcha";
import * as v from "valibot";
import { contactSchema } from "~/lib/contact-schema";
import { serverEnv } from "~/lib/env";
import emailjs from "@emailjs/nodejs";
import { the } from "~/lib/utils";

export type SendContactResult = { success: boolean; message: string };
export const sendContactAction = action(
  async (formValues: any): Promise<SendContactResult> => {
    "use server";

    const validated = v.safeParse(contactSchema, formValues);
    // console.log("🚀 ~ validated:", validated);

    if (!validated.success) {
      const errorFields: string[] = [];
      validated.issues.forEach((val) => {
        const key = val.path?.[0].key as string | undefined;
        if (key) errorFields.push(key);
      });

      return {
        success: false,
        message: `Please check and make sure your inputs are correct. Error fields: ${errorFields.join(", ")}.`,
      };
    }

    const captchaRes = await verifyRecaptcha({
      captchaToken: formValues.captchaToken,
      hcaptchaSecret: serverEnv.RECAPTCHA_SECRET_KEY,
    });
    // console.log("🚀 ~ captchaRes:", captchaRes);

    if (!captchaRes.success) {
      if (captchaRes.errorCodes)
        return {
          success: false,
          message:
            "Something went wrong with captcha setup. Please contact me via email instead.",
        };
      else
        return {
          success: false,
          message: "Captcha challenge was failed. Please try sending again.",
        };
    }

    const { captchaToken, ...templateParams } = validated.output;

    const [sendRes, sendErr] = await the(
      emailjs.send("service_soohst9", "template_4ia434k", templateParams, {
        publicKey: serverEnv.EMAILJS_PUBLIC_KEY,
        privateKey: serverEnv.EMAILJS_PRIVATE_KEY, // optional, highly recommended for security reasons
      }),
    );

    console.log("🚀 ~ sendErr:", sendErr);
    console.log("🚀 ~ sendRes:", sendRes);

    if (sendErr || !sendRes?.status) {
      return {
        success: false,
        message:
          "Message was failed to send. Please contact me via email instead.",
      };
    }

    return {
      success: true,
      message:
        "Your message has been sent! I will reply to your message via email. Thank you for reaching me!",
    };
  },
);
