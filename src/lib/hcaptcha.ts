import { the } from "./utils";

type CaptchaSuccess = {
  success: true;
};
type CaptchaError = {
  success: false;
  errorCodes?: string;
};

export const verifyRecaptcha = async (input: {
  captchaToken: string;
  hcaptchaSecret: string;
}): Promise<CaptchaSuccess | CaptchaError> => {
  const [verifyRes, verifyError] = await the(
    fetch("https://www.google.com/recaptcha/api/siteverify", {
      body: new URLSearchParams({
        response: input.captchaToken,
        secret: input.hcaptchaSecret,
      }).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    }),
  );
  if (verifyError || !verifyRes?.ok)
    return {
      success: false,
    };

  const captchaRes = await verifyRes.json();
  console.log("🚀 ~ captchaRes:", captchaRes);

  if (!captchaRes.success) {
    const errorCodes = captchaRes["error-codes"];
    console.error("🚀 ~ errorCodes:", errorCodes);
    return {
      success: false,
      errorCodes: errorCodes,
    };
  }

  return {
    success: captchaRes.success,
  };
};
