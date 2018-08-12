<!--
  // Created on Sun Aug 12 2018
  // Copyright © 2017-2018 Mikhail K. (iSm1le)
  // Licensed under the Apache License, Version 2.0
  -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&subset=cyrillic');

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
