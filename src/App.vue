<template>
  <div id="app">
    <div class="app-text" v-if="$route.params.lang === 'en'">
      UFACTORY was founded in 2013 and we released the world's first desktop open source robotic arm in United States.
      UFACTORY leads the development of the open source robotic ecosystem in a commercial way which has attracted global
       robot enthusiast to use robotics for many different scenarios. It was huge honor to meet Premier Likeqiang of China
        in 2015 who complimented us highly on our innovative robot arm, regarding us as representatives of the enterprise in robotic industry.
    </div>
    <div v-else class="app-text">
      深圳市众为创造科技有限公司（UFACTORY），成立于2013年，在美国推出了世界上第一台桌面级开源机械臂——uArm，以商业实践的方式引领机器人开源生态的发展，
      聚集全球机器人狂热爱好者，打造丰富的生活应用场景。2015年作为企业代表，获得李克强总理的亲自接见，高度赞扬了产品的创新性，现场提出“万众创业，大众创新”的口号。
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  .app-text {font-size: 4px;overflow: hidden;opacity: 0.1;position: fixed;color: #fff; top: -100px;}
</style>
