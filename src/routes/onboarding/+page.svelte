<script>
  import { page } from "$app/stores";
</script>

<section>
  <div class="flex flex-col place-items-center">
    <div class="grid grid-cols-1 gap-4">
      <h2 class="font-light">{$page.data.session?.user?.name}</h2>
      <h2 class="font-light">{$page.data.session?.user?.email}</h2>
    </div>
    <img
      src={$page.data.session?.user?.image}
      alt=""
      class="h-24 w-24 rounded-full my-3"
    />
    <div></div>
    <div class="text-sm font-bold text-gray-600">change avatar</div>
    <div class="p-3 flex justify-center">
      <input
        type="file"
        class="w-3/4 bg-gray-400 p-3 font-bold"
        placeholder="change"
      />
    </div>
  </div>
</section>
