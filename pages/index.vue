<template>
  <div>
    <Sharing
      v-for="(share, index) in shares"
      :key="index"
      :share="share"
      :id="share.word"
    />
    <div id="new-word">
      <NewWord />
    </div>
    <Toast position="bottom-right" />
  </div>
</template>

<script>
import _ from "lodash";
export default {
  auth: false,
  mounted() {
    this.$bus.on("word-shared", this.onNewWord);
  },
  async asyncData({ $axios }) {
    const fetchRecent = async function () {
      try {
        return await $axios.$get("/api/words");
      } catch (err) {
        console.error("Could not fetch words list from backend", err.message);
        return [];
      }
    };
    const shares = await fetchRecent();
    return { shares };
  },
  methods: {
    async onNewWord({ word }) {
      console.log("New word event");
      console.log("Fetching new word data...");
      const data = await this.$axios.$get("/api/words/" + word);
      const index = _.findIndex(this.shares, { word });
      if (index > -1) {
        this.shares.splice(index, 1, data);
      } else {
        this.shares.push(data);
      }
      window.location.href = "#" + word;
    },
  },
};
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