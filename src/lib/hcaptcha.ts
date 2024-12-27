import { the } from "./utils";

type CaptchaSuccess = {
  success: true;
};
type CaptchaError = {
  success: false;
  errorCodes?: string;
};

export const verifyHcaptcha = async (input: {
  captchaToken: string;
  hcaptchaSecret: string;
}): Promise<CaptchaSuccess | CaptchaError> => {
  const [verifyRes, verifyError] = await the(
    fetch("https://hcaptcha.com/siteverify", {
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

  const data = await verifyRes.json();
  console.log("🚀 ~ data:", data);

  if (!data.success) {
    const errorCodes = data["error-codes"];
    console.error("🚀 ~ errorCodes:", errorCodes);
    return {
      success: false,
      errorCodes: errorCodes,
    };
  }

  return {
    success: data.success,
  };
};
