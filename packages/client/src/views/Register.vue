<template>
  <div class="register">
    <h1>This is the register page</h1>
    <p>Username</p>
    <input type="text" name="username" class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" v-model="username"/>
    <p>Password</p>
    <input type="password" name="password" class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" v-model="password"/>
    <br/><br/>
    <button v-on:click="register" class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">Register</button>
  </div>
</template>

<script>
import * as http from "../services"; 
export default {
  name: 'Register',
  data(){
    return{
      username: "",
      password: ""
    } 
  },
  methods:{
    async register(){
      const reply = await http.UserService.register(this.username, this.password);
      if (reply) {
        this.$store.commit("setHeaderMessage", reply.message);
      }
      else {
        this.$store.commit("setHeaderMessage", "Failed");
      }
    }
  }
}

</script>