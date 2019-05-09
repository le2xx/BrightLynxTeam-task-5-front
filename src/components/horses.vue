<template lang="pug">
  include ../pugs/mixins.pug
  .horses
    header-component
    h2 {{ horses }}
    h3 фото
    each foto in [1, 2, 3]
      img(class="horses__img" src="../assets/images/horse_" + foto + ".jpg")
    h3 видео
    each video in ['ICtFT3i_6uQ', 'jcwQ4VifY4E']
      .horses__video
        +video(video)
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'Horses',
  components: {
    'header-component': Header
  },
  data () {
    return {
      horses: 'Лошадки'
    }
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main.styl'

  .horses
    &__img
      img()

    &__video
      video()
</style>
