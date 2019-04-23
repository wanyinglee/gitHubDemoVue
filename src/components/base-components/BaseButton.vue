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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block-button {
  margin-top: 20px;
}
button {
  padding: 15px 20px;
  min-width: 50%;
  font-size: 18px;
  border-style: solid 3px;
}
</style>
