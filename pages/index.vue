<template>
  <div>
    <Sharing v-for="(share, index) in data" :key="index" :share="share" />
    <div id="new-word">
      <NewWord v-if="showNewWordPanel" />
      <button @click="showNewWordPanel = !showNewWordPanel">
        + Share a word
      </button>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("http://localhost:8080/words");
const showNewWordPanel = useState("showNewWordPanel", () => false);
</script>

<style> 
#new-word {
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  left: auto;
  top: auto;
}
</style>