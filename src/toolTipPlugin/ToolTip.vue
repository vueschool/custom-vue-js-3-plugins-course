<script setup>
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { onMounted, ref } from "vue";
const props = defineProps({
  text: { type: String, required: true },
});

const tooltip = ref(null);

onMounted(() => {
  tippy(tooltip.value.parentNode, {
    content: props.text,
  });
});
</script>
<template>
  <span ref="tooltip"></span>
</template>
