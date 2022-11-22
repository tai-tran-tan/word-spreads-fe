<template>
  <div id="action-buttons">
    <Button class="p-button-link" label="Share this word" @click="coShare(word)" 
     :disabled="hasShared"
    />
    <Button class="p-button-link" label="Comment" @click="toggleComment"/>
  </div>
</template>

<script>
export default {
    props: {
        word: String,
        sharedUser: Array
    },
    computed: {
        hasShared() {
            this.sharedUser.some(u => u?.username == this.$auth?.user?.username)
        }
    },
    methods: {
        coShare(word) {
            this.$backend.coShare(word)
            this.$bus.emit('word-shared', {word})
        },
        toggleComment() {
            console.log('Comment feature will be added later')
        }
    }

}
</script>

<style>

</style>