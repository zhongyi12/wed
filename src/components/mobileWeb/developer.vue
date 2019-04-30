<template lang="html">
  <div class="developer-wrapper">
    <h2 class="title">uArm Swift Pro</h2>
    <ul class="download-wrapper">
      <li v-for="(item, index) in langData.document.pro" :key="index">
        <div class="content">
          <h4>{{ item.title }}</h4>
          <span v-html="item.content"></span>
        </div>
        <a class="icon-download" :href="item.link"><img src="../assets/img/developer/icon_download.svg" /></a>
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
//      console.log('langText', langText);//
  },
  mounted:function(){
    window.scrollTo(0,0);
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
  padding-top: 100px;
  .title {
    width: 300px;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
    background: $themeOrange;
    color: #fff;
    text-align: center;
  }
  .download-wrapper {
    padding: 4vh 0 10vh;
    text-align: center;
    /*width: 80%;*/
    /*margin: 0 auto;*/
    li {
      display: flex;
      width: 100%;
      text-align: left;
      align-items: center;
      justify-content: center;
      padding: 3vh 0;
      .content {
        width: 80%;
        span {
          color: #7b7878;
        }
      }
      .icon-download {
        width: 6%;
        margin-left: 10px;
        img {
          width: 100%;
        }
      }
    }
  }
}

</style>
