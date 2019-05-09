<template lang="pug">
  .menu
    ul.menu__list
      each li in ['Кошки', 'Собачки', 'Лошадки']
        li.menu__list-item= li
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="stylus">
  @import '../stylus/main.styl'

  .menu
    margin-top 5px
    padding 0 5px
    height 20px
    border solid 2px $main-color
    border-radius 6px

    &__list
      margin 0
      padding 0
      list-style-type: none

    &__list-item
      margin 0 5px
      display inline
      line-height 20px
      text-transform uppercase

</style>
