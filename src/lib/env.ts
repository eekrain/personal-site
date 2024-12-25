import * as v from "valibot";

const publicEnvSchema = v.object({
  VITE_HCAPTCHA_SITE_KEY: v.pipe(v.string(), v.minLength(1)),
});
type PublicEnvSchema = v.InferOutput<typeof publicEnvSchema>;

export let publicEnv: PublicEnvSchema = {} as PublicEnvSchema;

try {
  publicEnv = v.parse(publicEnvSchema, import.meta.env);
} catch (error) {
  console.error("Environment validation error:", error);
}
