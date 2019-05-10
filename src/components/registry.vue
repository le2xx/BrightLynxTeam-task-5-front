<template lang="pug">
  .registry
    header-component
    menu-component
    h2 {{ registry }}
    form.registry__form
      label.registry__label Имя
        input(type="text" class="registry__input" placeholder="введите имя")
      label.registry__label e-mail
        input(type="text" class="registry__input" placeholder="введите e-mail")
      label.registry__label пароль
        input(type="text" class="registry__input" placeholder="введите пароль")
      button(type="submit") ОК
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'

export default {
  name: 'Registry',
  components: {
    'header-component': Header,
    'menu-component': Menu
  },
  data () {
    return {
      registry: 'Регистрация'
    }
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main.styl'

  .registry
    position relative

    &__form
      position absolute
      left 0
      right 0
      margin auto
      padding 3px
      width 260px
      border solid 2px $form-color
      border-radius 5px

    &__label
      display block
      margin 10px 0

    &__input
      margin 0 10px

</style>
