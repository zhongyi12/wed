<template lang="html">
  <div class="developer-wrapper">
    <h2 class="title">uArm Swift Pro</h2>
    <ul class="download-wrapper">
      <li v-for="(item, index) in langData.document" :key="index">
        <div class="icon"><img :src="item.icon"/></div>
        <div class="content">
          <h4>{{ item.title }}</h4>
          <span v-html="item.content"></span>
        </div>
        <a class="icon-download" :href="item.link" target="_brank"><img src="../assets/img/developer/icon_download.svg" /></a>
      </li>
    </ul>

  </div>
</template>

<script>
import langText from '../../lang/developer';
export default {
  data : function(){
    return {
      langData:{},
    }
  },
	components:{
	},
  created:function(){
    if(this.$route.params.lang==='en' || this.$route.params.lang==='cn')
      this.langData=langText[this.$route.params.lang];
    else
      this.langData=langText['cn'];
      // console.log('langText', langText);//
  },
  mounted:function(){
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
/* TIMELINE  –––––––––––––––––––––––––––––––––––––––––––––––––– */
$themeOrange: #E27347;
$themeOrangeBA: #E27347;
.developer-wrapper {
  .title {
    height: 400px;
    line-height: 400px;
    margin: 0 auto;
    background: $themeOrange;
    color: #fff;
    text-align: center;
    background-image: url('../assets/img/support/download_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .download-wrapper {
    padding: 4vh 0 10vh;
    // text-align: center;
    width: 1200px;
    margin: 0 auto;
    li {
      display: inline-flex;
      width: 490px;
      text-align: left;
      align-items: center;
      justify-content: center;
      padding: 1vh 0;
      margin: 0 50px;
      .icon {
        width: 50px;
        margin-right: 48px;
      }
      .content {
        width: 400px;
        span {
          color: #7b7878;
        }
      }
      .icon-download {
        display: inherit;
        width: 30px;
        img {
          width: 100%;
        }
      }
    }
  }
}
@media only screen and (max-width : 1024px) {
.developer-wrapper .download-wrapper li {
    width: 80%;
    margin: 0;
  }
}
</style>
