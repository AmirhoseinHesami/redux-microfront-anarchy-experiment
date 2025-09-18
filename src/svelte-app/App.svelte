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

<div class="h-full flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-gray-800">Order Summary</h2>
      <span class="text-sm font-medium text-gray-500">{$basket.length} items</span>
    </div>

    {#if $basket.length > 0}
      <div class="space-y-4">
        <div class="flex justify-between text-sm">
          <span class="text-gray-600">Subtotal</span>
          <span class="font-medium text-gray-800">${($basket.reduce((acc, item) => acc + item.quantity, 0) * 9.99).toFixed(2)}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-600">Shipping</span>
          <span class="font-medium text-gray-800">$4.99</span>
        </div>
        <div class="border-t pt-4 flex justify-between">
          <span class="font-semibold text-gray-800">Total</span>
          <span class="font-semibold text-gray-800">${($basket.reduce((acc, item) => acc + item.quantity, 0) * 9.99 + 4.99).toFixed(2)}</span>
        </div>
      </div>
    {:else}
      <div class="text-center py-6 bg-gray-50 rounded-lg">
        <p class="text-gray-500 text-sm">Add items to see order summary</p>
      </div>
    {/if}
  </div>

  <button
    class="w-full mt-6 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
    on:click={handleClear}
    disabled={$basket.length === 0}
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
    Clear Cart
  </button>
</div>





