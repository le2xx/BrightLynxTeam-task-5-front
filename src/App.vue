<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import 'stylus/main.styl'

#app
  margin-top 50px
  font(14, $text-color, false, false, 300)
  font-family Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background $ground-color
</style>
