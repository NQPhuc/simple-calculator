<template>
  <div class="login">
    <h1>This is an login page</h1><br/>
    <p>Name</p>
    <input type="text" name="username" class="common-input common-input-2" v-model="username"/>
    <p>Password</p>
    <input type="password" name="password" class="common-input common-input-2" v-model="password"/>
    <br/><br/>
    <button v-on:click="login" class="common-button">Login</button>
  </div>
</template>

<script>
import router from '@/router';
import * as http from "../services";

export default {
  name: 'Login',
  data () {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login () {
      const reply = await http.AuthenticateService.login(this.username, this.password);
      if (reply) {
        this.$store.commit('setLoginName', reply);
        this.$store.commit("setHeaderMessage", "Login successfully");
        router.push('/');
      } else {
        this.$store.commit("setHeaderMessage", "Wrong username or password");
      }
    }
  }
};

</script>
