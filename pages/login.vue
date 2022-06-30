<template>
  <div class="flex justify-content-center">
    <h5 class="text-center">Login</h5>
    <form @submit.prevent="handleSubmit({ username, password })">
      <div>
        <InputText id="name" v-model="username" />
        <label for="name">Name*</label>
      </div>
      <!-- <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small> -->
      <div>
        <Password id="password" v-model="password" toggleMask>
          <template #header>
            <h6>Password strength</h6>
          </template>
          <template #footer="sp">
            {{ sp.level }}
            <Divider />
            <p class="mt-2">Suggestions</p>
            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
            </ul>
          </template>
        </Password>
        <label for="password">Password*</label>
        <!-- <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small> -->
      </div>
      <Button type="submit" label="Submit" class="mt-2" />
    </form>
    <Toast position="bottom-right" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(account) {
      this.$auth
        .loginWith("local", { data: new URLSearchParams(account) })
        .then(() => {
          console.log("Logged in!");
          this.$auth.refreshTokens()
          this.$showToast("Logged in.");
        })
        .catch((err) => {
          console.log("Login failed!", err);
          this.$showToast("Login failed! " + err.message, "error");
        });
    },
  },
};
</script>

<style>
</style>