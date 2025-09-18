<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { store, increment, decrement } from "../store";

const basket = ref(store.getState().basket);

function handleIncrement(id: string) {
  store.dispatch(increment(id));
}

function handleDecrement(id: string) {
  store.dispatch(decrement(id));
}

let unsubscribe: () => void;

onMounted(() => {
  unsubscribe = store.subscribe(() => {
    basket.value = store.getState().basket;
  });
});

onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});
</script>

<template>
  <div class="h-full bg-gray-50 rounded-lg p-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-gray-800">
        Shopping Cart <span class="text-[#41B883] font-bold">(Vue)</span>
      </h2>
      <span class="text-sm text-gray-500">{{ basket.length }} items</span>
    </div>

    <div
      v-if="basket.length === 0"
      class="flex flex-col items-center justify-center h-40"
    >
      <svg
        class="w-12 h-12 text-gray-400 mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <p class="text-gray-500 text-sm">Your cart is empty</p>
    </div>

    <ul v-else class="space-y-3">
      <li
        v-for="item in basket"
        :key="item.id"
        class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
      >
        <div class="flex flex-col">
          <span class="font-medium text-gray-800">{{ item.name }}</span>
          <div class="flex items-center gap-2 text-sm">
            <span class="text-gray-500">x{{ item.quantity }}</span>
            <span class="text-blue-600"
              >${{ (item.price * item.quantity).toFixed(2) }}</span
            >
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            class="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 cursor-pointer"
            @click="handleIncrement(item.id)"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full transition-colors duration-200 cursor-pointer"
            @click="handleDecrement(item.id)"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
