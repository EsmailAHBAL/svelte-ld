
import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18/i18n-util.async';
import { setLocale } from '$lib/i18/i18n-svelte';
import { detectLocale } from '$lib/i18/i18n-util';
export const load = (async (event) => {
  const locale = detectLocale(() => [event.data.locals]);
  await loadLocaleAsync(locale);
  if (event.data.session.user) {
    console.log('logged')
    setTimeout(() => { console.log('here we go') }, 3333)
  }
  setLocale(locale);
  return event.data;
}) satisfies LayoutLoad;
