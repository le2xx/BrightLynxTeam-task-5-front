<template lang="pug">
  .dogs
    header-component
    h2 {{ dogs }}
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'Dogs',
  components: {
    'header-component': Header
  },
  data () {
    return {
      dogs: 'Собачки'
    }
  }
}
</script>

<style lang="stylus">

</style>
