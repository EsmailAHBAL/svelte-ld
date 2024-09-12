import en from "../en"
import type { Translation } from "../i18n-types"
const de = {
  ...en as Translation,
  message: 'Hallo wereld vanuit Marokko'
} satisfies Translation

export default de
