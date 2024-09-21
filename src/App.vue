<script setup lang="ts">
import { useLocalStorage } from "./composables/useLocalStorage";
const data = useLocalStorage("msg", "Hello Vue Certification!");
</script>

<template>
  <div class="page">
    <input type="text" v-model="data" />
  </div>
</template>
