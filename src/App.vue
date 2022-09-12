<script setup>
import { ref } from "vue";
const tooltipText = ref("Hello world");
</script>

<template>
  <h3>Custom Vue.js 3 Plugins</h3>
  <input type="text" v-model="tooltipText" /> <br />
  <span>Hover Over Me <ToolTip :text="tooltipText" /></span>
</template>
