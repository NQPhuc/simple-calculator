<template>
  <div id="app">
    <div id="nav">
      <router-link to="/logout" v-if="this.$store.state.loginName">Logout</router-link>
      <router-link to="/login" v-else>Login</router-link> |
      <router-link to="/">Calculate</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <div v-if="this.$store.state.headerMessage">{{this.$store.state.headerMessage}}</div>
    <router-view />
  </div>
</template>

<script>
import * as http from './services';

export default {
  setup () {

  },
  async mounted () {
    const reply = await http.AuthenticateService.verifyToken();
    if (reply !== "Failed") {
      this.$store.commit("setLoginName", reply);
    } else {
      this.$store.commit("setLoginName", null);
    }
  },
};
</script>

<style>
/* eslint-disable max-len */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.common-button {
  @apply bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none;
}
.common-input {
  @apply w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700;
}
.common-input-2{
 @apply focus:outline-none focus:border-green-500;
}
.common-table-row{
  @apply w-full font-light text-gray-700 bg-gray-100 whitespace-nowrap border border-b-0;
}
.common-text-area{
  @apply w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none;
}
</style>
