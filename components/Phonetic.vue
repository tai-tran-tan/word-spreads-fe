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

<script>
export default {
  props: {
    text: String,
    audio: String,
  },
  methods: {
    playAudio: (url) => new Audio(url).play(),
  },
};
</script>

<style>
</style>