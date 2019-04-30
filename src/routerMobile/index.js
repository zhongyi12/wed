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
    component: require('../components/mobileWeb/common.vue'),
    children: [
      {
        path: '/:lang',
        name: 'app',
        component: require('../components/mobileWeb/home.vue')
      },
      {
        path: 'about/:position',
        name: 'about',
        component: require('../components/mobileWeb/about.vue')
      },
      {
        path: 'support',
        component: require('../components/mobileWeb/supportNav.vue'),
        children: [{
          path: '',
          name: 'download',
          component: require('../components/mobileWeb/support.vue')
        },
        {
          path: 'document',
          name: 'document',
          component: require('../components/mobileWeb/Documents.vue')
        },
        {
          path: ':module',
          name: 'question',
          component: require('../components/mobileWeb/question.vue')
        }]
      },
      {
        path: 'ticket/:type',
        name: 'ticket',
        component: require('../components/mobileWeb/user/ticket.vue')
      },
      {
        path: 'store',
        name: 'store',
        component: require('../components/mobileWeb/store.vue')
      },
      {
        path: 'uarmswift',
        name: 'uarmswift',
        component: require('../components/mobileWeb/uarmswift.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: require('../components/mobileWeb/subcomponents/video.vue')
      },
      // {
      //   path: 'xArm3',
      //   name: 'xArm3',
      //   component: require('../components/mobileWeb/xArm.vue')
      // },
      {
        path: 'xarm',
        name: 'xarm',
        component: require('../components/mobileWeb/xArm.vue')
      },
      // {
      //   path: 'test/test-xArm',
      //   name: 'test-xArm',
      //   component: require('../components/mobileWeb/xArm.vue')
      // },
      {
        path: 'news/:newsPage',
        name: 'news',
        component: require('../components/mobileWeb/news.vue'),
      },
      {
        path: 'newsDetail/:id',
        name: 'newsDetail',
        component: require('../components/mobileWeb/subcomponents/newsDetail.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: require('../components/mobileWeb/profile.vue')
      },
      {
        path: 'login',
        component: require('../components/mobileWeb/login.vue'),
        children: [{
            path: '/',
            name: 'userlogin',
            component: require('../components/mobileWeb/loginChild/userLogin.vue'),
          },
          {
            path: 'resetpassword',
            name: 'resetpassword',
            component: require('../components/mobileWeb/loginChild/resetPassword.vue'),
          },
          {
            path: 'registersuccess',
            name: 'registersuccess',
            component: require('../components/mobileWeb/loginChild/registerSuccess.vue'),
          },
        ],
      },
      {
        path: 'newpassword',
        name: 'newpassword',
        component: require('../components/mobileWeb/setNewPassword.vue'),
      },
      {
        path: 'developer',
        name: 'developer',
        component: require('../components/mobileWeb/developer.vue')
      },
      {
        path: 'retail',
        name: 'retail',
        component: require('../components/mobileWeb/retail.vue')
      },
    ]
  },
  ],
});
