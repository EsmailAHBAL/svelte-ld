import { redirect } from "@sveltejs/kit"

export const load = async ({ locals }: any) => {
  const session = await locals.getSession()
  console.log(session)
  return {
    locals: locals.lang,
    session

  }
}
