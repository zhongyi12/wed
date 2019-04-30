import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import mainModel from '../mainModel/model';

Vue.use(Router);
const userLang = navigator.language || navigator.userLanguage;
const setLang = userLang.substring(0, 2) === 'zh' ? 'cn' : 'en';

// console.log('langlanglang', mainModel.setLang);

export default new Router({
  // mode: 'history',
  routes: [{
    path: '*',
    redirect: {
      name: 'app',
      params: {
        lang: mainModel.setLang,
      },
    },
  },
  {
    path: '/:lang',
    component: require('../components/pcWeb/common.vue'),
    children: [
      {
        path: '',
        name: 'app',
        component: require('../components/pcWeb/home.vue')
      },
      {
        path: 'about/:position',
        name: 'about',
        component: require('../components/pcWeb/about.vue')
      },
      {
        path: 'support',
        component: require('../components/pcWeb/supportNav.vue'),
        children: [{
          path: '',
          name: 'support',
          component: require('../components/pcWeb/support.vue')
        },
        {
          path: 'download/:product',
          name: 'download',
          component: require('../components/pcWeb/support.vue')
        },
        {
          path: 'document',
          name: 'document',
          component: require('../components/pcWeb/Documents.vue')
        },
        {
          path: ':module',
          name: 'question',
          component: require('../components/pcWeb/question.vue')
        }]
      },
      {
        path: 'ticket/:type',
        name: 'ticket',
        component: require('../components/pcWeb/user/ticket.vue')
      },
      {
        path: 'store',
        name: 'store',
        component: require('../components/pcWeb/store.vue')
      },
      // {
      //   path: 'community',
      //   name: 'community',
      //   component: require('../components/pcWeb/store.vue')
      // },
      // {
      //   path: 'product/:id',
      //   name: 'product',
      //   component: require('../components/pcWeb/product.vue')
      // },
      {
        path: 'uarmswift',
        name: 'uarmswift',
        component: require('../components/pcWeb/uarmswift.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: require('../components/pcWeb/subcomponents/video.vue')
      },
      // {
      //   path: 'xArm3',
      //   name: 'xArm3',
      //   component: require('../components/pcWeb/xArm.vue')
      // },
      {
        path: 'xarm',
        name: 'xarm',
        component: require('../components/pcWeb/xArm.vue')
      },
      // {
      //   path: 'test/test-xArm',
      //   name: 'test-xArm',
      //   component: require('../components/pcWeb/xArm.vue')
      // },
      {
        path: 'news/:newsPage',
        name: 'news',
        component: require('../components/pcWeb/news.vue'),
      },
      {
        path: 'newsDetail/:id',
        name: 'newsDetail',
        component: require('../components/pcWeb/subcomponents/newsDetail.vue')
      },
      // {
      //   path: 'cart',
      //   name: 'cart',
      //   component: require('../components/cart.vue')
      // },
      {
        path: 'profile',
        name: 'profile',
        component: require('../components/pcWeb/profile.vue')
      },
      {
        path: 'login',
        component: require('../components/pcWeb/login.vue'),
        children: [{
            path: '/',
            name: 'userlogin',
            component: require('../components/pcWeb/loginChild/userLogin.vue'),
          },
          {
            path: 'resetpassword',
            name: 'resetpassword',
            component: require('../components/pcWeb/loginChild/resetPassword.vue'),
          },
          {
            path: 'registersuccess',
            name: 'registersuccess',
            component: require('../components/pcWeb/loginChild/registerSuccess.vue'),
          },
        ],
      },
      {
        path: 'newpassword',
        name: 'newpassword',
        component: require('../components/pcWeb/setNewPassword.vue'),
      },
      {
        path: 'developer',
        name: 'developer',
        component: require('../components/pcWeb/developer.vue')
      },
      {
        path: 'retail',
        name: 'retail',
        component: require('../components/pcWeb/retail.vue')
      },
    ]
  },
  // {
  //   path: '/hello',
  //   name: 'Hello',
  //   component: Hello,
  // },
  ],
});
