import type { Handle } from "@sveltejs/kit"
import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors"
import { sequence } from '@sveltejs/kit/hooks';
import { handleAuth } from "./auth";
export { handleAuth } from "./auth";
export const forLang: Handle = (async ({ event, resolve }) => {
  const r = initAcceptLanguageHeaderDetector(event.request)()
  event.locals.lang = r[0]
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", r[0])
  })
})
export const handle = sequence(handleAuth, forLang)
