<template lang="pug">
  .menu
    -
      const list = [
        { name: 'cats', text: 'Кошки' },
        { name: 'dogs', text: 'Собачки' },
        { name: 'horses', text: 'Лошадки' },
        { name: 'users', text: 'Пользователи'}
      ];
    ul.menu__list
      li.menu__list-item
        router-link(class="menu__link" to="/") главная
      each li in list
        li.menu__list-item
          router-link(class="menu__link" to="/" + li.name)= li.text
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

    &__link
      line-height 20px
      text-transform uppercase
      text-decoration none

</style>
