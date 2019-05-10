<template lang="pug">
  .registry
    header-component
    menu-component
    h2 {{ registry }}
    form.registry__form
      label.registry__label Имя
        input(type="text" class="registry__input" name="name" placeholder="введите имя" v-model="formData.name")
      label.registry__label e-mail
        input(type="text" class="registry__input" name="email" placeholder="введите e-mail" v-model="formData.email")
      label.registry__label пароль
        input(type="text" class="registry__input" name="pass" placeholder="введите пароль" v-model="formData.pass")
      div(v-on:click="submitForm" class="registry__btn") ОК
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
import axios from 'axios'

export default {
  name: 'Registry',
  components: {
    'header-component': Header,
    'menu-component': Menu
  },
  data () {
    return {
      registry: 'Регистрация',
      formData: {
        name: null,
        email: null,
        pass: null
      }
    }
  },
  methods: {
    submitForm () {
      axios.post('http://ya.ru', this.FormData)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
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

    &__btn
      width 30px
      height 20px
      border solid 1px $form-color
      border-radius 3px
      text-align center

</style>
