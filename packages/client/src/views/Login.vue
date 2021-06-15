<template>
  <div class="login">
    <h1>This is an login page</h1><br/>
    <p>Name</p>
    <input type="text" name="username" class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" v-model="username"/>
    <p>Password</p>
    <input type="password" name="password" class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" v-model="password"/>
    <br/><br/>
    <button v-on:click="login" class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">Login</button>
  </div>
</template>

<script>
import * as http from "../services"; 
export default {
  name: 'Login',
  data(){
    return{
      username: "",
      password: ""
    } 
  },
  methods:{
    async login(){
      const reply = await http.AuthenticateService.login(this.username, this.password);
      if(reply){
        this.$store.commit('setLoginName', reply);
        console.log(reply, this.$store.state.loginName);
        window.location.href = '/'; // dark-art
      }
      else{
        alert("Wrong username or password")
      }
    }
  }
}

</script>