import GitHub from "@auth/core/providers/github"
import { SvelteKitAuth } from "@auth/sveltekit"
import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, AUTH_SECRET } from "$env/static/private"
export const { handle: handleAuth } = SvelteKitAuth({
  providers: [GitHub({
    clientId: AUTH_GITHUB_ID,
    clientSecret: AUTH_GITHUB_SECRET
  })],
  secret: AUTH_SECRET,
  trustHost: true

})
