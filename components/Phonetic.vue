<template>
  <span>
    {{ text }}
    <a
      v-if="!!audio"
      class="fa-solid fa-volume-high"
      @click="playAudio(audio)"
    />
  </span>
</template>

<script setup>
const props = defineProps({
  text: String,
  audio: String,
});
const playAudio = (url) => new Audio(url).play();
</script>

<style>
</style>