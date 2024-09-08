<script>
  import Hello from "./Hello.svelte";
  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  import { onMount } from "svelte";
  let id = 3;
  let url = $state(0);
  let counter = 0;
  let numbers = [1, 2];

  export let data;

  onMount(() => {
    const h = "by me ";
    alert("created" + h);
  });

  $: mount = [1, 2];
  function addNumber() {
    numbers[numbers.length] = numbers.length + 1;
  }
  $: sum = numbers.reduce((p, c) => p + c, 0);
  function increment() {
    counter += 1;
    id = counter;
    if (counter > 2) {
      mount = [...mount, counter];
    }
  }
</script>

<svelte:head>
  <title>{id}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="text-2xl font-bold">
  <Hello id={20} />
  <div class="m-3 p-10 flex space-x-3 border-l-gray-300 border-l text-sm">
    <button on:click={addNumber}> add number</button>
    <div class="bg-sky-400 p-3">{numbers.join(" , ")} = {sum}</div>
  </div>
  <div class="p-32">
    <p class="p-3 text-4xl italic my-3">{counter}</p>
    <button on:click={increment} class="bg-amber-400 px-10"
      >{counter == 1 ? "this once " : "increment"}</button
    >
    <button class="bg-sky-400 px-10">decrement</button>
    {#each mount as item}
      <div>{item}</div>
    {/each}
  </div>
  <div class="grid grid-cols-3 gap-3">
    {#each data.data as item}<div class="p-3 border-b-b border-b">
        {item.title}
        <div class="my-3 text-sm italic max-w-3xl mx-auto">
          {item.body}
        </div>
      </div>{/each}
  </div>
</div>
