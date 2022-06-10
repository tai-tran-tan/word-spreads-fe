<template>
  <div>
    <h4>{{ share.word }}</h4>

    Phonetics:
    <Phonetic
      v-for="(phonetic, index) in share.phonetics"
      :key="index"
      v-bind="phonetic"
    />

    Meanings:
    <Mean v-for="(mean, index) in share.meanings" :key="index" v-bind="mean" />

    <hr />
  </div>
</template>

<script>
export default {
  props: ["share"],
};
</script>

<style>
hr {
  margin: 3rem;
}
</style>