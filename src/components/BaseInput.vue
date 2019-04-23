<template>
  <label>
    {{ itemLabel }}
    <input 
      :key="itemID" 
      :placeholder="itemPlaceHolder" 
      @blur="$emit('onBlur',inputVal)" 
      v-model="inputVal">
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    itemID: String,
    itemPlaceHolder: String,
    itemLabel: String
  },
  data () {
    return {
      inputVal: ''
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
