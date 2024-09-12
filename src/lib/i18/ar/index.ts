import type { BaseTranslation } from "typesafe-i18n";
import en from "../en";
import type { Translation } from "../i18n-types";

const ar = {
  ...en as Translation,
  message: "مرحبا بالعالم من المغرب",
  tagLine: "مرحباً بكم في التطبيق المدرج"
} satisfies BaseTranslation
export default ar
