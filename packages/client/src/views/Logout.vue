<template>
  <div class="logout">
    <div v-if="this.$store.state.loginName">
        <h1>Log in as: {{this.$store.state.loginName}}</h1>
        <br/><br/>
        <button
          v-on:click="logout"
          class="common-button">Logout</button>
    </div>
    <div v-else>
        <h1 >Not log in</h1>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import * as http from "../services";

export default {
  name: "Logout",
  methods: {
    async logout () {
      await http.AuthenticateService.logout();
      this.$store.commit("setLoginName", null);
      router.push('/');
    },
  },
};
</script>
