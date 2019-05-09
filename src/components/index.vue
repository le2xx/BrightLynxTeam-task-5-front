<template lang="pug">
  .index
    header-component
    h2.index__msg {{ msg }}
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'Index',
  components: {
    'header-component': Header
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
.index
  &__msg
    text-align center
</style>
