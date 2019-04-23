<template>
<div>
  <base-nav v-bind:item-title="repoName"></base-nav>
  <div class="card">
    <vue-markdown>{{readMeFile}}</vue-markdown>
  </div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'ReadMe',
  components: {
    VueMarkdown
  },
  data () {
    return {
    }
  },
  computed: {
    repoName: function(){
      return this.$store.state.selectedRepo.name;
    },
    readMeFile: function(){
      return this.$store.state.readMe;
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
