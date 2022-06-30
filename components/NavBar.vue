<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <div v-if="loggedIn">
      <label>Welcome {{ $auth.user.username }}</label>
      <Button class="p-button-link" @click="$auth.logout()" label="Logout" />
    </div>
    <div v-else>
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn: function() {
      return this.$auth.loggedIn;
    },
  },
};
</script>

<style>
</style>