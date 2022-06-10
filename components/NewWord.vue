<script setup>
const showPanel = useState('showPanel', () => false);
const togglePanel = isShow => showPanel.value = isShow
const share = (w) => {
  const opts = {
    method: "POST",
    body: w,
  };
  $fetch("http://localhost:8080/words", opts).then(() => {
    console.log("shared!");
    window.location.reload()
  });
};
</script>

<template>
  <div>
    <button v-if="!showPanel" @click="togglePanel(!showPanel)">
      + Share a word
    </button>
    <div v-if="showPanel">
      Share your word to the world!
      <input type="text" v-model="word" @keypress.enter="share(word)" />
      <button @click="share(word)">Share</button>
    </div>
  </div>
</template>