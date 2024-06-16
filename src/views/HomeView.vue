<script setup>
import { useCommonStore } from "../stores/commonStore";
const store = useCommonStore();
</script>

<template>
  <main>
    {{ store.test }}
    <div class="text-2xl text-blue-500">
      hello world
    </div>
  </main>
</template>
