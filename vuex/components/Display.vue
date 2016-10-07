<template lang="html">
  <div class="display">
    <p>
      Count is {{ counterValue}}
    </p>
  </div>
</template>

<script>
import {getCount} from '../vuex/getter'

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
  vuex:{
    getters:{
      countValue: getCount
    }
  }
};
</script>

<style lang="css">
</style>
