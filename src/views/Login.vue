<template>
    
    <div id="login" class="columns">

      <div class="column">

        <b-field label="Email">
            <b-input v-model="email"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password" v-model="password"></b-input>
        </b-field>

        <b-button @click="onLogin" size="is-medium" icon-left="login-variant">
            Login
        </b-button>      

      </div>

    </div>  

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin() {
      this.$router.push({ name: 'new-report'})
    }
  }
}
</script>

<style>

#login {
  padding: 30px;
}

</style>