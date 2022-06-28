<template>
  <div class="share">
    <h3 class="text-center">{{ share.word }}</h3>
    <div>
      Phonetics:
      <Phonetic
        v-for="(phonetic, index) in share.phonetics"
        :key="index"
        v-bind="phonetic"
      />
    </div>
    <div>
      Meanings:
      <Mean
        v-for="(mean, index) in share.meanings"
        :key="index"
        v-bind="mean"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["share"],
};
</script>

<style>
.share {
  border: 1px solid grey;
  border-radius: 0.5rem;
  background-color: #fbf7ed;
  margin: 1rem 0rem;
}
</style>