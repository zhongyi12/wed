<template>
  <transition>
    <div class="footer-page-wrap">
      <div class="footer-content">
        <!--<div class="pic-content" v-if="$route.name == 'app'">-->
          <!--{{ langData.moreInformation }}-->
        <!--</div>-->
        <div class="footer-link-wrap">
        <div class="bottom-container">
          <div class="bottom-menu">
            <div id="mc_embed_signup" class="bottom-subscribe">
              <form action="https://ufactory.us10.list-manage.com/subscribe/post?u=c644188ef0ea557ffc19e17fb&id=209c754b15" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" validate>
                <div id="mc_embed_signup_scroll">
                  <label for="mce-EMAIL" class="subcribe-head" v-html="langData.subscribeFeed"></label>
                  <input v-if="country === 'cn'" type="email" value="" name="EMAIL" class="form-input" id="mce-EMAIL" :placeholder="langData.email" required oninvalid="setCustomValidity('请输入正确的邮箱格式')">
                  <input v-else type="email" value="" name="EMAIL" class="form-input" id="mce-EMAIL" :placeholder="langData.email" required oninvalid="setCustomValidity('Please enter the correct email format')">
                  <input type="text" value="" name="MMERGE4" class="location-visiable" id="mce-MMERGE4" v-model="localtion">
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <input type="submit" :value="langData.subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn">
                  <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_c644188ef0ea557ffc19e17fb_209c754b15" tabindex="-1" value="">
                  </div>
                </div>
              </form>
            </div>
            <table>
              <tr v-bind:class="{bolder:bolderhead}">
                <th>{{langData.navEducational}}</th>
                <th>{{langData.navProfessional}}</th>
                <th v-if="country === 'en'">{{langData.where}}</th>
                <th>{{langData.navSupport}}</th>
                <th>{{langData.navCommunity}}</th>
                <th>{{langData.navAboutUs}}</th>
              </tr>
              <tr>
                <td><router-link :to="{name:'uarmswift',params:{lang:country}}">{{ langData.swift }}</router-link></td>
                <td><router-link :to="{name:'xarm',params:{lang:country}}">{{ langData.xarm }}</router-link></td>
                <td v-if="country === 'en'"> <a :href="config.STORE_URL.en" target="_blank">Online Store</a></td>
                <td><router-link :to="{name:'download',params:{lang:country, product: 'products'}}">{{langData.navDownload}}</router-link></td>
                 <td><a href="https://github.com/uArm-Developer" target="_blank">{{langData.navDevelop}}</a></td>
                <td><router-link :to="{name:'about',params:{lang:country,position:'about'}}">{{langData.navAboutUf}}</router-link></td>
              </tr>
              <tr>
                <td><a v-if="country === 'en'" :href="config.UARM_KITS.en" target="_blank">{{ langData.uarmKits }}</a></td>
                <td><a v-if="country === 'en'" :href="config.XARM_ACCESS.en" target="_blank">{{ langData.xarmAccess }}</a></td>
                <td v-if="country === 'en'"><a href="https://www.amazon.com/uarm" target="_blank">Amazon Store</a></td>
                <td><router-link :to="{name:'question',params:{lang:country,module: 'technology'}}">{{langData.navTechnology}}</router-link></td>
                <td><a href="https://forum.ufactory.cc/" target="_blank">{{langData.navForum}}</a></td>
                <td><router-link :to="{name:'about',params:{lang:country,position:'recruit'}}">{{langData.navJoinUs}}</router-link></td>
              </tr>
              <tr>
                <td><a v-if="country === 'en'" :href="config.UARM_ACCESS.en" target="_blank">{{ langData.uarmAccess }}</a></td>
                <td></td>
                <td v-if="country === 'en'"><router-link  :to="{name:'retail',params:{lang:country}}">Online Retailers</router-link></td>
                <td><router-link :to="{name:'question',params:{lang:country,module: 'purchase'}}">{{langData.navPurchase}}</router-link></td>
                <td>
                  <a v-if="country==='en'" href="https://www.facebook.com/groups/1653721141585397/" target="_blank">{{langData.navBlog}}</a>
                  <a v-else @click="showModal = true">{{langData.navBlog}}</a>
                </td>
                <td><router-link :to="{name:'about',params:{lang:country,position:'contact'}}">{{langData.navContactUs}}</router-link></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td v-if="country === 'en'"></td>
                <td><a :href="langData.cooperationLink" target="_blank">{{ langData.navCooperation }}</a></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td v-if="country === 'en'"></td>
                <td><router-link :to="{name:'question',params:{lang:country,module: 'policy'}}">{{langData.navAfter}}</router-link></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <!--<div class="bottom-subscribe">-->
            <!--<div class="subcribe-head" v-html="langData.subscribeFeed"></div>-->
            <!--<div class="text-center btn-wrapper">-->
              <!--<a class="btn action-button" href="http://eepuyarl.com/cYSm45" target="_blank" v-html="langData.btnSubscribe"></a>-->
            <!--</div>-->
          <!--</div>-->

        </div>
        <div class="social-language">
          <!--<div class="select-language">-->
            <!--<button class="btn btn-default" @click="languageChange()">-->

              <!--<i class="fa fa-globe" aria-hidden="true"></i>-->
              <!--<span >{{this.langData.i18nText}}</span>-->

            <!--</button>-->
          <!--</div>-->
          <div class="social">
            <ul v-if="country=='cn'">
              <li><a target="_Blank" class="uf-icon-youku" href="http://i.youku.com/i/UMzY4Njk1NTQ2OA=="></a></li>
              <li><a class="uf-icon-weixin" @click="showModal = true"></a></li>
              <li><a target="_Blank" class="uf-icon-weibo" href="http://weibo.com/u/3925641670"></a></li>
              <li><a target="_Blank" class="uf-icon-txviedo" href="http://v.qq.com/vplus/6c4792a45937ca8ef893016a79843b0d"></a></li>
            </ul>
            <ul v-if="country=='en'">
              <li><a target="_Blank" class="uf-icon-facebook" href="https://www.facebook.com/Ufactory2013/"></a></li>
              <li><a target="_Blank" class="uf-icon-google" href="https://plus.google.com/u/0/116428596770785280177"></a></li>
              <li><a target="_Blank" class="uf-icon-twitter" href="https://twitter.com/UFACTORY_UF"></a></li>
              <li><a target="_Blank" class="uf-icon-ins" href="https://www.instagram.com/ufactoryofficial/"></a></li>
              <li><a target="_Blank" class="uf-icon-youtube" href="https://www.youtube.com/channel/UCyy5ekYtq35jFtPpY3O_tVA"></a></li>
              <li><a target="_Blank" class="uf-icon-reddit" href="https://www.reddit.com/r/uArm"></a></li>
              <li><a target="_Blank" class="uf-icon-instructable" href="http://www.instructables.com/member/Ufactory/"></a></li>
            </ul>
          </div>
          <div class="copyright">
            &copy;&nbsp;2019 UFACTORY All Rights Reserved&nbsp;{{langData.copyright}}
          </div>
        </div>
        </div>
      </div>

      <!--<div class="subscribe-ad" v-show="showAd" transition="expand">-->
        <!--<div class="ad-menu">-->
          <!--<i class="fa fa-times" aria-hidden="true" @click="adCloseClick()"></i>-->
        <!--</div>-->
        <!--<div class="ad-content">-->
          <!--<div class="ad-text text-center" v-html="langData.promoPopText">-->
          <!--</div>-->
          <!--<div class="text-center">-->
            <!--<a class="btn action-button" :href="langData.promoLink" target="_blank" v-html="langData.storeBtn"></a>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <modal v-if="showModal" @close="showModal = false" class="qr-modal">
        <div slot="header">请扫描二维码关注公众号</div>
        <div slot="body">
          <img src="../../assets/img/uarm_weixin_qr.png" alt="wechat-qr-code">
        </div>
        <div slot="footer" class="">
          <button type="button" class="btn btn-default" @click="showModal = false">关闭</button>
        </div>
      </modal>
    </div>
  </transition>
</template>
<script>
const Modal = require('../modal.vue');
import langText from '../../../lang/footer';
import config from '../../../config';
export default {
  data : function(){
    return {
      showModal:false,
      showAd:false,
//      country:this.$route.params.lang,
      nextCountry:'en',
      langData:{},
      bolderhead:false,
      menuActive: '1',
      homePage: false,      //判断是否在首页的页脚展示
      localtion: '',
      config: config
    }
  },
  created : function(){
    if(this.$route.params.lang=='en' || this.$route.params.lang=='cn')
      this.langData=langText[this.$route.params.lang];
    else
      this.langData=langText['cn'];
    let self = this;
    if (typeof(Storage) !== "undefined") {
      // Store
      if( localStorage.getItem("showSubcribeAd")===null )
        setTimeout(function(){ self.showAd=true; }, 3000);
    }
  },
  mounted : function(){
    // this.getLocaltion();
  },
  methods:{
    getLocaltion(){           //获取访问页面的国家
      const url = `https://freegeoip.net/json/`;
      this.$http.get(url).then(response =>{
        const returnBack = response.data === undefined ? response : response.data;
        this.localtion = returnBack.country_name;
      })
    },
  },
  components:{
    modal:Modal,
  },
  computed: {
    country() {
//      console.log('this.$route.params.lang', this.$route.params.lang, 'mainmodel.setlang', mainModel.setLang);
      return this.$route.params.lang;
    }
  },
  watch:{
    country: function(){
      if(this.country == 'en')
        this.bolderhead = true;
      else
        this.bolderhead = false;
    },
  }
}
</script>

<style lang="sass" scoped>
  $maxWidth: 960px;
  $themeOrange: #E27347;
  .footer-page-wrap {
    width: 100%;
    position: relative;
    height: 100%;
  }
  .footer-content{
    /*background: #313131;*/
    height: 100%;
    width: 100%;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: space-around;*/
    -webkit-transition: all 2s ease-out 1s;
      -moz-transition: all 2s ease-out 1s;
      -o-transition: all 2s ease-out 1s;
      transition: all 2s ease-out 1s;
  }
  .pic-content {
    /*background-image: url("../../assets/img/home/uf_map2.png");*/
    /*display: block;*/
    /*background-size: cover;*/
    /*-webkit-background-size: cover;*/
    /*-moz-background-size: cover;*/
    /*-o-background-size: cover;*/
    /*background-attachment: fixed;*/
    /*background-position: center center;*/
    /*background-repeat: no-repeat;*/
    /*height: 64%;*/
    /*margin-top: 60px;*/
    background-color: #fff;
    width: 100%;
    text-align: center;
    font-size: 60px;
    color: #555;
    font-weight: 700;
    position: absolute;
    top: 24%;
    /*letter-spacing: 4px;*/
    img {
      width: 40%;
    }
  }
  .home-footer {
    position: absolute;
    bottom: 0;
    .footer-link-wrap {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
  .bottom-container{
    font-size: 14px;
    width: 100%;
    padding-top: 30px;
    background: #313131;
    .bottom-subscribe{
      height: 140px !important;
      text-align: center;
      .subcribe-head{
        text-transform: none;
        padding: 30px 0 20px;
        color: #fff;
        display: block;
        font-weight: normal;
      }
      .location-visiable {
        visibility: hidden;
        position: absolute;
        left: -5000px;
      }
      .form-input {
        display: inline-block;
        border: none;
        border-bottom: 1px solid #d5d5d5;
        box-shadow: none;
        border-radius: 4px;
        outline: none;
        padding: 6px 12px;
        font-size: .7rem;
        color: #333;
      }
      .red-error {
        color: red;
        font-size: 12px;
      }
      .btn{
        color: white;
        background-color: $themeOrange;
        border-color: $themeOrange;
        outline: none;
      }
      .text-center.btn-wrapper{
        width: 100%;
      }
    }
    .bottom-menu{
      width: 82%;
      max-width: 1300px;
      margin: 0 auto;
      table{
        width: 100%;
        th{
          padding: 10px 0 10px 10px;
          font-weight: normal;
          /*text-transform: uppercase;*/
          color: $themeOrange;
          width: 17%;
        }
        td{
          padding: 10px 0 10px 10px;
          font-size: 13px;
          color: #fff;
          width: 17%;
          font-family: uf-light;
          a{
            color: #fff;
            cursor: pointer;
            transition: all .4s;
          }
          a:hover{
            color: $themeOrange;
            cursor: pointer;
          }
        }
      }
    }

  }

  .social-language{
    padding: 30px 0 16px;
    background: #313131;
    /*position: absolute;*/
    /*bottom: 0;*/
  .select-language{
    text-align: center;
    display: inline-block;
  }
  .copyright{
    text-align: center;
    font-size: .68rem;
    color: #888;
    width: 100%;
  }
  .social{
    text-align: center;
    ul{
      li{
        display: inline-block;
        cursor: pointer;
        opacity: 0.6;
    }
      li:hover{
        opacity: 1;
    }
  }

  }
  }
  .modal-body img{
    width:100%;
  }
  .modal-container {
    width:40%;text-align: center;
  }
  .modal-footer{
    text-align:center;
  }
  .subscribe-ad{
    position: fixed;
      bottom: 3px;
      right: 3px;
      width: 300px;
      height: 140px;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 0;
      z-index: 19;
      color: $themeOrange;
    .ad-menu{
      text-align:right;
      i{
        cursor:pointer;
        padding: 3px;
        color:#555;
    }
  }
    .ad-content{
      .ad-text{
        padding-bottom:5%;
      }
      a.btn.action-button {
      width: 42%;
      color: #fff;
      background-color: #D95E2E;
      }
    }
  }
  /* always present */
  .expand-transition {
    transition: all .3s ease;
    padding: 2px;
    overflow: hidden;
  }
  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }

  .footer-enter-active, .footer-leave-active{
  transition: all 1.4s;
  }
  .footer-enter, .footer-leave-active {
    opacity: 0
  }

  #mc_embed_signup{
    height:14px;
  }
  @media (max-width: 700px) {
  header{
    .nav-transparent{
  background: white;
  }
  li{
    width: 50%;
  }
  }
  }
  .countdown{
    background: #333;
      line-height: 35px;
      color: white;
    a{
      color:white;
  }
    a:hover{
      color:$themeOrange;
      text-decoration:none;
  }
  }
</style>
