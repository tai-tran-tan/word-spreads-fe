<template>
  <div>
    <Sharing v-for="(share, index) in data" :key="index" :share="share" />
    <div id="new-word">
      <NewWord/>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("http://localhost:8080/words");
</script>

<style> 
#new-word {
  background-color: lightskyblue;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  left: auto;
  top: auto;
}
</style>