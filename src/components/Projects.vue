<template>
<div>
  <base-nav v-bind:item-title="username"></base-nav>
  <div class="card">
    <div class="repo-name-button" :key="repo.id" v-for="repo in reposArray">
      <base-button v-bind:item-value="repo.name" v-on:click.native="retrieveReadMe(repo)"></base-button>
    </div>
  </div>
</div>
</template>

<script>
import router from '../router'
import APIService from '../services/APIService.js'
import axios from 'axios';

export default {
  name: 'Projects',
  router,
  data () {
    return {
    }
  },
  computed: {
    username: function() {
      return this.$route.params.username;
    },
    reposArray: function() {
      return this.$store.state.repos;
    }
  },
  methods: {
    retrieveReadMe: function(repo) {
      const apiService = new APIService();
      this.$store.commit('setSelectedRepo', repo);
      apiService.getRepositoryReadMe(repo).get().then(response => {
        this.$store.commit('setReadMe', response.data)
        router.push('/' + repo.full_name);
      }, error => {
        alert("Cannot find README for this repository.")
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
