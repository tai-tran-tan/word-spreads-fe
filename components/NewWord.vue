<script>
export default {
  data() {
    return {
      showPanel: false,
      loggedIn: this.$auth.loggedIn,
      word: ''
    };
  },
  methods: {
    togglePanel: function (isShow) {
      this.showPanel = isShow;
    },
    share(word) {
      if (this.loggedIn) {
        this.$axios.post("/api/words", {word})
          .then(() => {
            console.log("shared!");
            this.word = ''
            this.showPanel = false
            this.$showToast('Word shared successfully')
            this.$bus.emit('word-shared', {word})
          })
          .catch((err) => {
            console.log(JSON.stringify(err));
            this.$showToast("Word not found in dictionary, please check spelling/typo then try again!", "warn")
          });
      } else {
        this.$showToast('Please login to continue')
        this.$router.push('/login')
      }
    },
  },
};
</script>

<template>
  <div>
    <button v-if="!showPanel" @click="togglePanel(!showPanel)">
      + Share a word
    </button>
    <div v-if="showPanel">
      Share your word to the world!
      <InputText v-model="word" @keypress.enter.prevent="share(word)" />
      <Button @click.prevent="share(word)" label="Share" />
    <Toast position="bottom-right" />
    </div>
  </div>
</template>