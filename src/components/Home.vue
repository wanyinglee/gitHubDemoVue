<template>
<div>
  <base-nav item-title="Home"></base-nav>
  <div class="card">
    <base-input :item-label="instructionLabel" v-on:onBlur="updateUsername"></base-input>
    <base-button item-value="CONFIRM" v-on:click.native="submitUsername"></base-button>
  </div>
</div>
</template>

<script>
import APIService from '../services/APIService.js'
import axios from 'axios';
import router from '../router'

export default {
  name: 'Home',
  router,
  data () {
    return {
      instructionLabel: 'Please enter your username: ',
      username: String
    }
  },
  methods: {
    updateUsername: function(username) {
      this.username = username;
    },
    submitUsername: function() {
      const apiService = new APIService();
      apiService.getUserRepositories(this.username).get().then(response => {
        this.$store.commit('setRepos', response.data)
        router.push('/' + this.username);
      }, error => {
        alert("Cannot find user.")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
