<template lang="pug">
  .horses
    header-component
    h2 {{ horses }}
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

</style>
