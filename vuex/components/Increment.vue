<template lang="html">
  <div class="increment">
    <button @click='increment'>Increase</button>
  </div>
</template>

<script>
import {incrementCounter} from '../vuex/action'

export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {},
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
};
</script>

<style lang="css">
</style>
