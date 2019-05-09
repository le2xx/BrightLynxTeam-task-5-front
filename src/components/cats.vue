<template lang="pug">
  .cats
    header-component
    h2 {{ cats }}
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'Cats',
  components: {
    'header-component': Header
  },
  data () {
    return {
      cats: 'Кошки'
    }
  }
}
</script>

<style lang="stylus">

</style>
