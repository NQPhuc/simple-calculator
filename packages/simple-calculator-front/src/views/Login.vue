<template>
  <div class="login">
    <h1>This is an login page</h1>
    <p>Username</p>
    <input type="text" name="username" v-model="username"/>
    <p>Password</p>
    <input type="password" name="password" v-model="password"/>
    <br/><br/>
    <button v-on:click="login">Login</button>
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
        if(reply != "Failed"){
          this.$store.commit('setLoginName', reply);
          console.log(reply, this.$store.state.loginName);
          window.location.href = '/'; //dark-art
        }
        else{
          alert("Wrong username or password")
        }
      }
    }
  }

</script>