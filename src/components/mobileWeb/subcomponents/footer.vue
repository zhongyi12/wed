<template>
  <transition>
    <div class="footer-page-wrap">
      <div class="bottom-menu">
        <div @click="backTop()" style="text-align: center;padding-top: 20px;">{{ langData.backTop }}<i class="el-icon-arrow-up" style="padding-left: 10px;"></i></div>
        <ul>
           <li>
            <div @click="showList('showUarm')"><span>{{ langData.navEducational }}</span><i class="el-icon-plus"></i></div>
            <div v-if="show.showUarm" class="list-content">
              <span><router-link :to="{name:'uarmswift',params:{lang:country}}">{{ langData.swift }}</router-link></span>
              <span v-if="country==='en'"><a :href="config.UARM_KITS.en">{{ langData.uarmKits }}</a></span>
              <span v-if="country==='en'"><a :href="config.UARM_ACCESS.en">{{ langData.uarmAccess }}</a></span>
            </div>
          </li>
           <li>
            <div @click="showList('showXarm')"><span>{{langData.navProfessional}}</span><i class="el-icon-plus"></i></div>
            <div v-if="show.showXarm" class="list-content">
              <span><router-link :to="{name:'xarm',params:{lang:country}}">{{ langData.xarm }}</router-link></span>
              <span v-if="country==='en'"><a :href="config.XARM_ACCESS.en"></a>{{ langData.xarmAccess }}</span>
             
            </div>
          </li>
          <li v-if="country==='en'">
            <div @click="showList('showStore')"><span>{{langData.where}}</span><i class="el-icon-plus"></i></div>
            <div v-if="show.showStore" class="list-content">
              <span><a :href="config.STORE_URL.en">{{langData.online}}</a></span>
              <span><a :href="langData.amazonLink">{{langData.amazon}}</a></span>
              <span><router-link :to="{name:'retail',params:{lang:country}}">{{langData.retail}}</router-link></span>
            </div>
          </li>
          <li>
            <div @click="showList('showAbout')"><span>{{langData.navAboutUs}}</span><i class="el-icon-plus"></i></div>
            <div v-if="show.showAbout" class="list-content">
              <span><router-link :to="{name:'about',params:{lang:country,position:'about'}}">{{langData.navAboutUf}}</router-link></span>
              <span><router-link :to="{name:'about',params:{lang:country,position:'recruit'}}">{{langData.navJoinUs}}</router-link></span>
              <span><router-link :to="{name:'about',params:{lang:country,position:'contact'}}">{{langData.navContactUs}}</router-link></span>
            </div>
          </li>
          <li>
            <div @click="showList('showSupport')"><span>{{langData.navSupport}}</span><i class="el-icon-plus"></i></div>
            <div v-if="show.showSupport" class="list-content">
              <span><router-link :to="{name:'download',params:{lang:country}}">{{langData.navDownload}}</router-link></span>
              <span><router-link :to="{name:'question',params:{lang:country,module: 'technology'}}">{{langData.navTechnology}}</router-link></span>
              <span><router-link :to="{name:'question',params:{lang:country,module: 'purchase'}}">{{langData.navPurchase}}</router-link></span>
              <span><a :href="langData.cooperationLink" target="_blank">{{ langData.navCooperation }}</a></span>
              <span><router-link :to="{name:'question',params:{lang:country,module: 'policy'}}">{{langData.navAfter}}</router-link></span>
            </div>
          </li>
          <li>
            <div @click="showList('showCom')"><span>{{langData.navCommunity}}</span><i class="el-icon-plus"></i></div>
            <div v-if="show.showCom" class="list-content">
              <span><router-link :to="{name:'developer',params:{lang:country}}">{{langData.navDeveloper}}</router-link></span>
              <span>
                <a v-if="country==='en'" href="https://www.facebook.com/groups/1653721141585397/" target="_blank">{{langData.navBlog}}</a>
                <a v-else @click="showModal = true">{{langData.navBlog}}</a>
              </span>
              <span><a href="https://github.com/uArm-Developer" target="_blank">{{langData.navDevelop}}</a></span>
              <span><a href="https://forum.ufactory.cc/" target="_blank">{{langData.navForum}}</a></span>
            </div>
          </li>
          <li @click="changeLanguage()">
            <div><span>简体中文/English</span><i class="el-icon-plus"></i></div>
          </li>
        </ul>
        <div id="mc_embed_signup" class="bottom-subscribe">
          <form action="https://ufactory.us10.list-manage.com/subscribe/post?u=c644188ef0ea557ffc19e17fb&id=209c754b15" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" validate>
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL" class="subcribe-head" v-html="langData.subscribeFeed"></label>
              <input type="text" value="" name="MMERGE4" class="location-visiable" id="mce-MMERGE4" v-model="localtion">
              <span class="btn-wrapper">
                <input v-if="country === 'cn'" type="email" value="" name="EMAIL" class="email form-input" id="mce-EMAIL" :placeholder="langData.email" required oninvalid="setCustomValidity('请输入正确的邮箱格式')">
                <input v-else type="email" value="" name="EMAIL" class="form-input" id="mce-EMAIL" :placeholder="langData.email" required oninvalid="setCustomValidity('Please enter the correct email format')">
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <input type="submit" :value="langData.subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn">
              </span>
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_c644188ef0ea557ffc19e17fb_209c754b15" tabindex="-1" value="">
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="social-language">
        <ul v-if="country=='cn'" class="social">
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
        <div class="copyright">
          <span>2018 UFACTORY All Rights Reserved</span><br>
          <span>{{langData.copyright}}</span>
        </div>
      </div>
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
import mainModel from '../../../mainModel/model';
import setting from '../../../config';
export default {
  data : function(){
    return {
      showModal:false,
      showAd:false,
      country: this.$route.params.lang,
      nextCountry:'en',
      langData:{},
      localtion: '',
      show: {
        showAbout: false,
        showSupport: false,
        showCom: false,
        showStore: false,
        showUarm: false,
        showXarm: false,
      },
      config: setting
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
    showList(name) {
      for(const item in this.show){
        if(item !== name ) {
          this.show[item] = false;
        }else{
         this.show[item] = !this.show[item];
        }
      }
    },
    changeLanguage() {
      mainModel.changeLang();
      this.langData = this.getLangText(mainModel.setLang);
      this.$router.push({ name:this.$route.name, params:{lang:mainModel.setLang} });
    },
    getLangText :function(lang){
      return langText[lang];
    },
    backTop() {
      window.scrollTo(0,0);
    }
  },
  components:{
    modal:Modal,
  },
  watch:{
//    country: function(){
//      if(this.country == 'en')
//        this.bolderhead = true;
//      else
//        this.bolderhead = false;
//    },
  }
}
</script>

<style lang="sass" scoped>
  $maxWidth: 960px;
  $themeOrange: #E27347;
  $vm_base: 414;
  @function vw($px) {
    @return ($px / $vm_base) * 100vw;
  }
  .footer-page-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    background: #272727;
    .bottom-subscribe{
      height: 140px !important;
      padding: 0 4vw;
      .subcribe-head{
        text-transform: none;
        padding: 30px 0 10px;
        color: #fff;
        display: block;
        font-weight: normal;
       }
      .location-visiable {
        visibility: hidden;
        position: absolute;
        left: -5000px;
      }
      .btn-wrapper {
        color: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .form-input {
          width: vw(240);
          display: inline-block;
          box-shadow: none;
          outline: none;
          padding: 8px 12px;
          background: #272727;
          border: 1px solid rgba(102, 102, 102, 0.45);
          border-right: none;
          border-radius: 0;
        }
        .btn{
          background-color: #747474;
          border-color: #747474;
          outline: none;
          border-radius: 0;
          padding: 8px 12px;
          width: vw(100);
        }
      }
      .red-error {
        color: red;
        font-size: 12px;
      }
      .text-center.btn-wrapper{
        width: 100%;
      }
    }
    .bottom-menu{
      color: #fff;
      ul {
        li {
          border-bottom: 1px solid rgba(228,228,228,0.3);
          font-size: 13px;
          span {
            padding: 18px 0;
          }
          .el-icon-plus {
            line-height: 50px;
          }
          >div:first-child {
            display: flex;
            justify-content: space-between;
            padding: 0 4vw;
          }
          .list-content {
            display: flex;
            flex-direction: column;
            background: rgba(228,228,228,0.3);
            transition: .8s;
            span {
              padding: 12px 6vw;
              /*border-bottom: 1px solid rgba(228,228,228,0.3);*/
              a {
                color: #e4e4e4;
                font-size: 12px;
                width: 100%;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
  .social-language{
    padding: 0 4vw 30px;
    ul {
      display: flex;
    }
    .social{
      display: flex;
    }
    .copyright{
      font-size: .68rem;
      color: #888;
      width: 100%;
    }
  }

</style>
