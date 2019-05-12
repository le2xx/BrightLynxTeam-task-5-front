<template lang="pug">
  .users
    header-component
    menu-component
    h2 {{ users }}
    table.users__table
      tr
        th ID
        th Имя
        th e-mail
      tr(v-for="item in data")
        td.users__table-td {{ item.id }}
        td.users__table-td {{ item.name }}
        td.users__table-td {{ item.email }}
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
import axios from 'axios'

export default {
  name: 'users',
  components: {
    'header-component': Header,
    'menu-component': Menu
  },
  data () {
    return {
      users: 'Пользователи',
      data: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('static/users.json').then(response => {
        this.data = response.data.users
      })
    }
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main.styl'

  .users

    &__table
      margin auto
      padding 3px
      width 300px
      border solid 2px $form-color
      border-radius 5px

    &__table-td
      padding 0 5
      text-align center

</style>
