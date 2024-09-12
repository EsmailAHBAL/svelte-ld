<script type="ts">
  import LL from "$lib/i18/i18n-svelte";
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";
</script>

<div class="mt-10 flex flex-col place-items-center py-10 italic">
  {$page.data.session?.user?.name}
  <div class="text-3xl font-bold">{$LL.message()}</div>
  <div class="text-xl font-light p-3">{$LL.tagLine()}</div>
  <div>
    <button on:click={signIn}>dkkf</button>
    <button class="bg-red-600 p-3 my-3 text-white">SingUp Youtube</button>
  </div>
</div>
