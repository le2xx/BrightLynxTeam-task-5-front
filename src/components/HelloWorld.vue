<template lang="pug">
  .hello
    h1 {{ msg }}
    h2 Essential
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
h1, h2
  font-weight normal
</style>
