/*
 * @File:          main.js
 * @Project:       xaked-error-page
 * @File Created:  Sunday, 12th August 2018 2:47:36 pm
 * @Author:        Mikhail K. (iSm1le) <ism1le@xaked.com>
 * -----
 * @Last Modified: Thursday, 15th November 2018 4:44:44 pm
 * @Modified By:   Mikhail K. (iSm1le) <ism1le@xaked.com>
 * -----
 * Copyright 2018 Mikhail K. (iSm1le)
 * Licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
