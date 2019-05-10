<template lang="pug">
  include ../pugs/mixins.pug
  .dogs
    header-component
    menu-component
    h2 {{ dogs }}
    h3 фото
    each foto in [1, 2, 3]
      img(class="dogs__img" src="../assets/images/dog_" + foto + ".jpg")
    h3 видео
    each video in ['6FSsrae4b3M', 'u8k94Fskimc']
      .dogs__video
        +video(video)
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
export default {
  name: 'Dogs',
  components: {
    'header-component': Header,
    'menu-component': Menu
  },
  data () {
    return {
      dogs: 'Собачки'
    }
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main.styl'

  .dogs
    &__img
      img()

    &__video
      video()
</style>
