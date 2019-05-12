<template lang="pug">
  .signin
    header-component
    menu-component
    h2 {{ signIn }}
    form.signin__form
      label.signin__label Имя
        input(type="text" class="signin__input" name="name" placeholder="введите имя" v-model="formData.name")
      label.signin__label пароль
        input(type="text" class="signin__input" name="pass" placeholder="введите пароль" v-model="formData.pass")
      div(v-on:click="submitForm" class="registry__btn") ОК
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
import axios from 'axios'

export default {
  name: 'signIn',
  components: {
    'header-component': Header,
    'menu-component': Menu
  },
  data () {
    return {
      signIn: 'Вход',
      formData: {
        name: null,
        pass: null
      }
    }
  },
  methods: {
    submitForm () {
      // тут форма отправляется в REST API, и выходит сообщение об успешности или ошибке входа.  Без API это сделать сложно :(
      axios.post('http://api.local/signin', this.FormData)
        .then((response) => {
          alert('Вы вошли на сайт' + response)
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main.styl'

  .signin
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
