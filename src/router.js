/*
 * @File:          router.js
 * @Project:       xaked-error-page
 * @File Created:  Sunday, 12th August 2018 4:05:47 pm
 * @Author:        Mikhail K. (iSm1le) <ism1le@xaked.com>
 * -----
 * @Last Modified: Thursday, 15th November 2018 4:44:55 pm
 * @Modified By:   Mikhail K. (iSm1le) <ism1le@xaked.com>
 * -----
 * Copyright 2018 Mikhail K. (iSm1le)
 * Licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '*', name: 'all pages handler', component: Home }
  ]
});
