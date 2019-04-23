<template>
<div class="input-box-wrapper">
  <label>
    {{ itemLabel }}
    <input 
      class="input-box"
      :key="itemID" 
      :placeholder="itemPlaceHolder" 
      @blur="$emit('onBlur',inputVal)" 
      v-model="inputVal">
  </label>
</div>
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
.input-box-wrapper {
  padding: 20px 0;
  font-size: 18px
}
.input-box {
  display: block;
  margin-top: 15px;
  height: 2em;
  min-width: 50%;
}
</style>
