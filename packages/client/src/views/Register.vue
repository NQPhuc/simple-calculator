<template>
  <div class="register">
    <h1>This is the register page</h1>
    <p>Username</p>
    <input type="text" name="username" v-model="username"/>
    <p>Password</p>
    <input type="password" name="password" v-model="password"/>
    <br/><br/>
    <button v-on:click="register">Register</button>
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
        console.log(reply);
        alert(reply);
      }
    }
  }

</script>