<template>
  <div class="meaning">
    <b>{{ partOfSpeech }}</b>
    <p v-for="(def, index) in definitions" :key="index">{{ def.definition }}</p>
    {{ synonyms }}
    {{ antonyms }}
  </div>
</template>

<script>
export default {
  props: ["partOfSpeech", "definitions", "synonyms", "antonyms"],
};
</script>

<style>
.meaning {
  border: 1px solid rgb(208, 208, 208);
  border-radius: 5px;
  padding: 1rem;
}
</style>