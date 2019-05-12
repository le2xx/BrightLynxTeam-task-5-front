<template lang="pug">
  include ../pugs/mixins.pug
  .index
    header-component
    menu-component
    h2.index__msg {{ msg }}
    h3 фото
    each foto in ['dog_1', 'cat_2', 'horse_3']
      img(class="index__img" src="../assets/images/" + foto + ".jpg")
    h3 видео
    each video in ['6FSsrae4b3M', 'ZjNFGyrUBYc']
      .index__video
        +video(video)
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
export default {
  name: 'Index',
  components: {
    'header-component': Header,
    'menu-component': Menu
  },
  data () {
    return {
      msg: 'Добро пожаловать на сайт!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import '../stylus/main.styl'

  .index
    &__msg
      text-align center

    &__img
      img()

    &__video
      video()
</style>
