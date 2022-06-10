<script setup>
// const word = useState("word", () => "");
const share = (w) => {
  const opts = {
    method: "POST",
    body: w,
  };
  $fetch("http://localhost:8080/words", opts).then(() =>
    console.log("shared!")
  );
};
</script>

<template>
  <div>
    Share your word to the world!
    <input type="text" v-model="word" @keypress.enter="share(word)"/>
    <button @click="share(word)">Share</button>
  </div>
</template>


<style>
</style>