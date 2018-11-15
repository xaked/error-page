<!--
@File:          App.vue
@Project:       xaked-error-page
@File Created:  Sunday, 12th August 2018 2:47:36 pm
@Author:        Mikhail K. (iSm1le) <ism1le@xaked.com>
-----
@Last Modified: Thursday, 15th November 2018 4:44:24 pm
@Modified By:   Mikhail K. (iSm1le) <ism1le@xaked.com>
-----
Copyright 2018 Mikhail K. (iSm1le)
Licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&subset=cyrillic');

@media only screen and (max-width: 500px) {
  html {
    font-size: 12px;
  }
}
@media only screen and (max-width: 900px) {
  html {
    font-size: 16px;
  }
}
@media only screen and (min-width: 901px) {
  html {
    font-size: 18px;
  }
}

html, body {
  width: 100%;
  height: 100%;
  background: #e2e2e2;
}

#app {
  width: 100%;
  height: 100%;
}

img {
  max-width: 100%;
}

* {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
