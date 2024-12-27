import * as v from "valibot";

const serverEnvSchema = v.object({
  EMAILJS_PUBLIC_KEY: v.pipe(v.string(), v.minLength(1)),
  EMAILJS_PRIVATE_KEY: v.pipe(v.string(), v.minLength(1)),
  EMAILJS_SERVICE_ID: v.pipe(v.string(), v.minLength(1)),
  EMAILJS_TEMPLATE_ID: v.pipe(v.string(), v.minLength(1)),
  HCAPTCHA_SECRET_KEY: v.pipe(v.string(), v.minLength(1)),
});
type ServerEnvSchema = v.InferOutput<typeof serverEnvSchema>;

export let serverEnv: ServerEnvSchema = {} as ServerEnvSchema;

try {
  serverEnv = v.parse(serverEnvSchema, process.env);
} catch (error) {
  console.error("Environment validation error:", error);
}
