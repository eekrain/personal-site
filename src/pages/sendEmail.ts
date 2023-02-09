import type { APIRoute } from "astro";
import { ContactSchema } from "../layouts/Contact/ContactForm";
import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    let emailjsResponse: EmailJSResponseStatus | undefined;
    const body = (await request.json()) as ContactSchema;

    return new Response(
      JSON.stringify({
        message: "Captcha verification failed, please try again!",
      }),
      {
        status: 403,
      }
    );
    const checkCaptcha = await fetch("https://hcaptcha.com/siteverify", {
      body: `response=${body.captchaToken}&secret=${
        import.meta.env.HCAPTCHA_SECRET_KEY
      }`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const captchaResponse = (await checkCaptcha.json()) as {
      success: boolean;
    };

    if (captchaResponse.success !== true) {
      return new Response(
        JSON.stringify({
          message: "Captcha verification failed, please try again!",
        }),
        {
          status: 403,
        }
      );
    }

    const templateParams = {
      email: body.email,
      name: body.name,
      message: body.message,
    };

    try {
      emailjsResponse = await emailjs.send(
        "service_soohst9",
        "template_4ia434k",
        templateParams,
        {
          publicKey: import.meta.env.EMAILJS_PUBLIC_KEY,
          privateKey: import.meta.env.EMAILJS_PRIVATE_KEY, // optional, highly recommended for security reasons
        }
      );
    } catch (error) {
      console.error(
        "🚀 ~ file: sendEmail.ts:30 ~ constpost:APIRoute= ~ error",
        error
      );
    }

    console.log(
      "🚀 ~ file: sendEmail.ts:51 ~ constpost:APIRoute= ~ emailjsResponse",
      emailjsResponse
    );

    if (emailjsResponse?.status === 200) {
      return new Response(
        JSON.stringify({
          message: "Your message has been sent!",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        message:
          "Currently,emailjs cannot process your message. Please try another method to contact me.",
      }),
      {
        status: 503,
      }
    );
  }
  return new Response(null, { status: 400 });
};

// export const post: APIRoute = async ({ request }) => {
//   if (request.headers.get("Content-Type") === "application/json") {
//     let sendResponse: Response | undefined;
//     const body = (await request.json()) as ContactSchema;
//     console.log("🚀 ~ file: sendEmail.ts:8 ~ constpost:APIRoute= ~ body", body);

//     try {
//       sendResponse = await fetch(
//         `https://api.emailjs.com/api/v1.0/email/send`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             service_id: "service_soohst9",
//             template_id: "template_4ia434k",
//             user_id: "-B5PMeMVvF8SRaHH7",
//             template_params: {
//               email: body.email,
//               name: body.name,
//               message: body.message,
//             },
//           }),
//         }
//       );
//       console.log(
//         "🚀 ~ file: sendEmail.ts:32 ~ constpost:APIRoute= ~ sendResponse",
//         sendResponse
//       );
//     } catch (error) {
//       console.error(
//         "🚀 ~ file: sendEmail.ts:39 ~ constpost:APIRoute= ~ error",
//         error
//       );
//     }

//     if (sendResponse?.ok)
//       return new Response(
//         JSON.stringify({
//           message: "Message sent succesfully!",
//           details: sendResponse?.text,
//         }),
//         {
//           status: 200,
//         }
//       );
//     else {
//       return new Response(
//         JSON.stringify({
//           message:
//             "Currently, message can't be handled by emailjs. Please try other method for contacting me.",
//           details: sendResponse?.text,
//         }),
//         {
//           status: sendResponse?.status || 503,
//         }
//       );
//     }
//   }
//   return new Response(null, { status: 400 });
// };
