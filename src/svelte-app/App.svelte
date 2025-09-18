<script lang="ts">
  import { readable } from "svelte/store";
  import { store } from "../store";

  interface Item {
    id: string;
    name: string;
    quantity: number;
  }

  const basket = readable<Item[]>(store.getState().basket, (set) => {
    const unsubscribe = store.subscribe(() => {
      set(store.getState().basket);
    });
    return () => unsubscribe();
  });

  function handleClear() {
    store.dispatch({ type: "basket/clear" });
  }
</script> 

<div class="p-4 border rounded shadow-md max-w-sm mx-auto">
  <h2 class="font-bold text-lg mb-2">Checkout Basket</h2>
    <button
      class="w-full bg-blue-500 disabled:bg-gray-500 text-white px-4 py-2 rounded"
      on:click={handleClear}
      disabled={$basket.length === 0}
    >
      Clear Basket
    </button>
</div>





