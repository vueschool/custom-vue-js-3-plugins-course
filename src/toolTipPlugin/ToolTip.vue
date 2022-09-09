<script setup>
defineProps({
  text: { type: String, required: true },
});
</script>
<template>
  {{ text }}
</template>
