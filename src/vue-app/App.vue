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
  <div class="p-4 border rounded">
    <h2 class="font-bold mb-2">Basket</h2>

    <div v-if="basket.length === 0" class="text-gray-500 text-center">
      <!-- <img src="/empty-basket.png" class="mx-auto w-24 h-24 mb-2" /> -->
      <p>Basket is empty</p>
    </div>

    <ul v-else>
      <li
        v-for="item in basket"
        :key="item.id"
        class="flex items-center justify-between mb-2"
      >
        <span>{{ item.name }} (x{{ item.quantity }})</span>
        <div class="flex gap-2">
          <button
            class="bg-green-500 text-white px-2 rounded"
            @click="handleIncrement(item.id)"
          >
            +
          </button>
          <button
            class="bg-red-500 text-white px-2 rounded"
            @click="handleDecrement(item.id)"
          >
            -
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
