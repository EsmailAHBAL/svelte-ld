// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export async function load(): Promise<{ data: any }> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const js = await res.json()
  return {
    data: js
  }
}
