// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
require('es6-promise').polyfill(); // fix IE Promise undefine
import axios from 'axios';
import routerWeb from './router'
import routeMobile from './routerMobile'
import ElementUI from 'element-ui';
import mainModel from './mainModel/model'
import wcSwiper from 'wc-swiper'

import 'wc-swiper/style.css'

Vue.use(wcSwiper);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;


// import common css
import '../theme/index.css';
import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/element-ui.css';

const router = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? routeMobile : routerWeb;

/* eslint-disable no-new */
window.onload = function () {
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
  });
}
