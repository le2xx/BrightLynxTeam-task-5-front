<template lang="pug">
  include ../pugs/mixins.pug
  .cats
    header-component
    menu-component
    h2 {{ cats }}
    h3 фото
    each foto in [1, 2, 3]
      img(class="cats__img" src="../assets/images/cat_" + foto + ".jpg")
    h3 видео
    each video in ['nabQPIl8qyI', 'ZjNFGyrUBYc']
      .cats__video
        +video(video)
</template>

<script>
import Header from '@/components/header'
import Menu from '@/components/menu'
export default {
  name: 'Cats',
  components: {
    'header-component': Header,
    'menu-component': Menu
  },
  data () {
    return {
      cats: 'Кошки'
    }
  }
}
</script>

<style lang="stylus">
@import '../stylus/main.styl'

.cats
  &__img
    img()

  &__video
    video()
</style>
