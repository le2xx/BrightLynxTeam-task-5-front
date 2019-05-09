<template lang="pug">
  .header
    h1.header__title {{ title }}
    span.header__right-block
      button Вход
      button Регистрация
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Забавные животные'
    }
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main.styl'
  .header
    padding 10px
    height 100px
    border solid 2px $main-color
    border-radius 6px

    &__title
      display inline
      vertical-align middle
      line-height 100px

    &__right-block
      display inline-block
      vertical-align middle
      text-align right
</style>
