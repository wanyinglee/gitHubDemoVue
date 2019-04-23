<template>
  <div class="block-button">
    <button>{{ itemValue }}</button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    itemValue: String
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.block-button {
  margin-top: 20px;
}
button {
  padding: 5px 20px;
  min-width: 50%;
}
</style>
