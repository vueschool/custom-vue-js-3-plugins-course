<script setup lang="ts">
import { ref } from "vue";
const tooltipText = ref("Hello world");
</script>

<template>
  <h3>Custom Vue.js 3 Plugins</h3>
  <input type="text" v-model="tooltipText" /> <br />
  <span
    >Hover Over Me
    <ToolTip :text="tooltipText" :options="{ placement: 'bottom' }"
  /></span>

  <br />

  <span>And me <ToolTip :text="tooltipText" /></span>

  <br />

  <button @click="$hideAllTooltips()">Hide All</button>
</template>
