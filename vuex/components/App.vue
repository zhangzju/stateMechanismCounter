<template lang="html">
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import Dsiplay from './Display.vue'
import Increment from './Increment.vue'
import store from '../vuex/store'

export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    Display:Display,
    Increment: Increment
  },
  store:store
};
</script>

<style lang="css">
</style>
