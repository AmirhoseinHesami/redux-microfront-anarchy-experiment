<script lang="ts">
  import { readable, writable } from "svelte/store";
  import { store } from "../store";

  interface Item {
    id: string;
    name: string;
    quantity: number;
    price: number
  }

  const basket = readable<Item[]>(store.getState().basket, (set) => {
    const unsubscribe = store.subscribe(() => {
      set(store.getState().basket);
    });
    return () => unsubscribe();
  });

  const isLoading = writable(false);

  async function handleClear() {
    try {
      isLoading.set(true);
      await new Promise(resolve => setTimeout(resolve, 3000));
      store.dispatch({ type: "basket/clear" });
    } finally {
      isLoading.set(false);
    }
  }
</script> 

<div class="h-full flex flex-col justify-between">
    <div>
      <div class="flex items-baseline justify-between mb-4">
        <div class="flex flex-col gap-1">
          <h2 class="text-lg font-semibold text-gray-800">
            Order Summary 
          </h2>
          <span class="text-orange-500 font-bold">(Svelte)</span>
        </div>
        <span class="text-sm font-medium text-gray-500">
          {$basket.reduce((acc, item) => acc + item.quantity, 0)} total items
        </span>
      </div>

      {#if $basket.length > 0}
        <div class="space-y-4">
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Subtotal</span>
            <span class="font-medium text-gray-800">${$basket.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2)}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Shipping</span>
            <span class="font-medium text-gray-800">$4.99</span>
          </div>
          <div class="border-t pt-4 flex justify-between">
            <span class="font-semibold text-gray-800">Total</span>
            <span class="font-semibold text-gray-800">${($basket.reduce((acc, item) => acc + (item.quantity * item.price), 0) + 4.99).toFixed(2)}</span>
          </div>
        </div>
      {:else}
        <div class="text-center py-6 bg-gray-50 rounded-lg">
          <p class="text-gray-500 text-sm">Add items to see order summary</p>
        </div>
      {/if}
    </div>

    {#if $isLoading}
      <button
        class="w-full mt-6 bg-gray-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-3 cursor-wait"
        disabled
      >
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="animate-pulse">Processing order...</span>
      </button>
    {:else}
      <button
        class="w-full mt-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
        on:click={handleClear}
        disabled={$basket.length === 0}
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        Complete Purchase
      </button>
    {/if}
</div>





