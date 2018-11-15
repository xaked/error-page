<!--
@File:          Home.vue
@Project:       xaked-error-page
@File Created:  Sunday, 12th August 2018 4:08:01 pm
@Author:        Mikhail K. (iSm1le) <ism1le@xaked.com>
-----
@Last Modified: Thursday, 15th November 2018 4:41:42 pm
@Modified By:   Mikhail K. (iSm1le) <ism1le@xaked.com>
-----
Copyright 2018 Mikhail K. (iSm1le)
Licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
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
    let ref = decodeURIComponent(this.$route.query.ref);
    if (this.$route.query.ref) {
      if (ref.substring(0, 4) !== 'http') {
        ref = `http://${ref}`;
      }
    } else {
      ref = window.location.href;
    }
    this.errorNumber = this.$route.query.error >= 1 ? Number(this.$route.query.error) : 0;
    const a = document.createElement('a');
    a.href = ref;
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
