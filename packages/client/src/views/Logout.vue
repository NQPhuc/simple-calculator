<template>
  <div class="logout">
    <div v-if="this.$store.state.loginName">
        <h1>Log in as: {{this.$store.state.loginName}}</h1>
        <br/><br/>
        <button v-on:click="logout" class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">Logout</button>
    </div>
    <div v-else>
        <h1 >Not log in</h1>
    </div>
  </div>
</template>

<script>
import * as http from "../services"; 
export default{
  name: "Logout",
  methods:{
    async logout(){
      await http.AuthenticateService.logout();
      this.$store.commit("setLoginName", null);
      window.location.href = '/'; // dark-art
    }
  }
}
</script>