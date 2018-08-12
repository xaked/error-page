<!--
  // Created on Sun Aug 12 2018
  // Copyright © 2017-2018 Mikhail K. (iSm1le)
  // Licensed under the Apache License, Version 2.0
  -->
<template>
  <div class="home">
    <MainC
      :error="errorNumber"
      :host="host"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainC from '@/components/MainC.vue';

export default {
  name: 'Home',
  components: {
    MainC
  },
  data() {
    return {
      errorNumber: null,
      host: null
    };
  },
  created() {
    this.errorNumber = this.$route.query.error >= 1 ? Number(this.$route.query.error) : 0;
    const a = document.createElement('a');
    a.href = this.$route.query.ref || window.location.href;
    this.host = a.hostname;
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background: #e2e2e2;
}
.hidden {
  display: none;
}
</style>
