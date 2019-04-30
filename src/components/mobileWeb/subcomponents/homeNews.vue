<template>
  <div class="home-mobile-news-wrapper">

    <div class=" home-news">
      <ul>
        <li>
          <div class="card-image">
            <a :href="langData.mobile.accessLink">
              <img src="../../assets/img/mobile-web/home/mobile_home_access.jpg"/>
              <span class="more-wrapper">
                {{langData.mobile.access}}<i class="el-icon-arrow-right"></i>
              </span>
            </a>
            <!--<div class="video-mask"><i class="fa fa-play-circle fa-4x" aria-hidden="true"></i></div>-->
          </div>
          <!--<span class="card-text" v-html="thumbnails.title"></span>-->
        </li>
      </ul>
    </div>
    <div class="home-news">
      <ul id="newsUl">
        <li v-for="(item,index) in newsData" v-if="index<1" @click="showDetail(item)" :key="index">
          <a>
            <!--<span v-html="item.small_cover"></span>-->
            <!--<span v-html="item.title"></span>-->
            <img src="../../assets/img/mobile-web/home/mobile_home-new.jpg"/>
          </a>
          <router-link class="more-wrapper" :to="{name:'news',params:{lang:country,newsPage: 1}}">
            {{langData.mobile.news}}<i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <el-dialog
      title=""
      :visible.sync="show.modal"
      size="large"
      top="10vh">
      <div class="video-wrap" v-if="show.modal">
        <video controls controlsList="nodownload" autoplay>
          <source :src="show.videoSrc" type="video/mp4">
          Your browser does not support HTML5 video. 你的浏览器不支持HTML5视频播放。
        </video>
      </div>
      <!--<span slot="footer" class="dialog-footer"></span>-->
    </el-dialog>
  </div>
</template>
<script>
 import eventBus from '../module/eventBus';
 import langText from '../../../lang/news';
export default {
  props:['newsData'],
	data() {
		return {
			country:'cn',
			langData:{},
      homeBannerNews:[],
      screenWidth: document.documentElement.clientWidth,
      newsLiWidth: '',
      timer: 1,
      displayCount: null,
      nowIndex: 0,
      displayTwo: 2,
      displayThree: 3,
      displayFour: 4,
      bothMargin: 88,
      show: {
//				videoSrc: "static/video/cn1.mp4",
        videoSrc: "http://www.ufactory.cc/cn/support/static/video/cn1.mp4",
        modal: false,
      },
      thumbnails: {},
      imageList: {
        cn: {
          img: require(`../../assets/img/mobile-web/home/mobile_home-video.jpg`),
          link:"https://v.qq.com/iframe/player.html?vid=w0527v18cai&tiny=0&auto=0",
          title:"uArm Swift & Swift Pro产品介绍",
        },
        en: {
          img: require(`../../assets/img/mobile-web/home/mobile_home-video.jpg`),
          link:"https://www.youtube.com/embed/kzEkjx6Lmfg",
          title:"Your desk-top robot arm",
        },
      },
		}
	},
	created : function(){
		const SET_LANG = this.$route.params.lang;
		if(SET_LANG!==undefined){
			this.country = this.$route.params.lang;
		}
    if(SET_LANG==='en' || SET_LANG==='cn') {
      this.langData=langText[SET_LANG];
      this.thumbnails = this.imageList[SET_LANG];
    }
    else {
      this.langData=langText['cn'];
    }
	},
  	mounted : function(){
      const that = this;
      that.getLiWidth();
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          that.screenWidth = window.screenWidth;
//          console.log(that.screenWidth);
          that.getLiWidth();
        })();
      };

  	},
    watch: {
      screenWidth (val) {
        if (!this.timer) {
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
//            console.log(that.screenWidth)
            that.init()
            that.timer = false
          }, 400)
        }
      },
      'newsData': function (n, o) {
        this.homeBannerNews = n;
        this.getLiWidth();
      }
    },
  	methods:{
      navigaitionNews(reduce = false) { // navigate to previous image if(reduce === true)
        let newsUl = document.getElementById('newsUl');
        let newsLi = newsUl.getElementsByTagName('li');
        let moveWidth = this.newsLiWidth;
        if (reduce) { // navigate to previous
          if(this.nowIndex > 0 ){
            this.nowIndex--;
          }else{
            this.nowIndex = 0;
          }
        }
        else { // navigate to next
          if(this.nowIndex < newsLi.length - this.displayCount){
            this.nowIndex++;
          }else{
            this.nowIndex = newsLi.length - this.displayCount;
          }
        }
        newsUl.style.transform = "translateX(-"+(moveWidth * this.nowIndex)+"px)";
      },
      getLiWidth(){
        if(this.screenWidth <= 680){
          this.newsLiWidth = (this.screenWidth-this.bothMargin)/this.displayTwo;
          this.displayCount = this.displayTwo;
        }else if(this.screenWidth < 1200){
          this.newsLiWidth = (this.screenWidth-this.bothMargin)/this.displayThree;
          this.displayCount = this.displayThree;
        }else{
          this.newsLiWidth = (this.screenWidth-this.bothMargin)/this.displayFour;
          this.displayCount = this.displayFour;
        }
      },
      showDetail(){                     //展示新闻详情
//        this.$router.push({
//          path:'news/'+content.objectId,
//          name:'newsDetail',
//          params: {
//            lang:this.country,
//            id: content.objectId,
//          }
//        });
        this.$router.push({
          name:'news',
          params: {
            lang:this.country,
            newsPage: 1
          }
        });
      },
      showModalVideo() {
//				this.show.videoSrc = `static/video/cn${index}.mp4`;
//        this.show.videoSrc = `https://www.ufactory.cc/static/video/${this.country}${index}.mp4`;
        this.show.videoSrc = `https://www.ufactory.cc/static/video/${this.country}/${this.country}-1.mp4`;
        this.show.modal = true;
      },
  	},
  	computed: {

  	}
}
</script>
<style lang="sass" scoped>
$textColor : #3C3C3C;
$themeOrange: #E27347;
$newBgColor: #ECECEC;
.home-mobile-news-wrapper {
  color: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  .home-news {
    overflow: hidden;
    position: relative;
    .more-wrapper {
      display: inline-block;
      height: 30px;
      position: absolute;
      left: 30px;
      bottom: 20px;
      color: #fff;
      .el-icon-d-arrow-right {
        padding-left: 10px;
        font-size: 12px;
        cursor: pointer;
      }
    }
    ul {
      width: 100%;
      padding: 0;
      position: relative;
      display: flex;
      justify-content: center;
      transition: all .5s ease;
      margin-top: 10px;
      li {
        transition: all .6s ease .3s;
        width: 100%;
        /*height: 150px;*/
        overflow: hidden;
        a {
          display: block;
          position: relative;
          line-height: 22px;
          overflow: hidden;
          cursor: pointer;
          border-bottom: 1px solid transparent;
          /*padding-bottom: 30px;*/
          transition: all 1s ease;
          span {
            font-size: .8rem;
            display: inline-block;
            color: #393939;
            position: relative;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border-bottom: 1px solid transparent;
            transition: all .6s ease-out;
            img {
              width: 100%;
              display: block;
              position: relative;
              overflow: hidden;
              transition: all .3s;
            }
          }
          .icon-arrow-right {
            position: absolute;
            bottom: 22px;
            right: 0;
            color: transparent;
            display: block;
            font-size: 16px;
            transform: translateX(100%);
            border-left: 1px solid transparent;
            padding: 0 20px;
            transition: all 1s ease;
          }
        }
      }
    }
  }


  .home-news {
    .card-image {
      position: relative;
      cursor: pointer;
      .video-mask {
        position: absolute;
        width: 100%;
        height: 65%;
        background: rgba(0, 0, 0, 0.3);
        top: 0;
        text-align: center;
        color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        transition: all .6s ease;
      }
      img{
        width: 100%;
      }
    }
    .embed-video {
      height: 20vh;
    }
    .card-text {
      font-size: .8rem;
      padding: 20px 10px;
      display: inline-block;
    }
  }
}
.video-wrap{
  width: 100%;
  video{
    width: 100%;
  }
}
@keyframes ulNewsMove{
0%{
transform: translate(10%);
-moz-transform: translate(10%);
-ms-transform: translate(10%);
-o-transform: translate(10%);
-webkit-transform: translate(10%);
}
100%{
transform: translate(0%);
-moz-transform: translate(0%);
-ms-transform: translate(0%);
-o-transform: translate(0%);
-webkit-transform: translate(0%);
}
}
@-webkit-keyframes ulNewsMove{
  0%{
    transform: translate(10%);
    -moz-transform: translate(10%);
    -ms-transform: translate(10%);
    -o-transform: translate(10%);
    -webkit-transform: translate(10%);
  }
  100%{
    transform: translate(0%);
    -moz-transform: translate(0%);
    -ms-transform: translate(0%);
    -o-transform: translate(0%);
    -webkit-transform: translate(0%);
  }
}
@-moz-keyframes ulNewsMove{
  0%{
    transform: translate(10%);
    -moz-transform: translate(10%);
    -ms-transform: translate(10%);
    -o-transform: translate(10%);
    -webkit-transform: translate(10%);
  }
  100%{
    transform: translate(0%);
    -moz-transform: translate(0%);
    -ms-transform: translate(0%);
    -o-transform: translate(0%);
    -webkit-transform: translate(0%);
  }
}
@-o-keyframes ulNewsMove{
  0%{
    transform: translate(10%);
    -moz-transform: translate(10%);
    -ms-transform: translate(10%);
    -o-transform: translate(10%);
    -webkit-transform: translate(10%);
  }
  100%{
    transform: translate(0%);
    -moz-transform: translate(0%);
    -ms-transform: translate(0%);
    -o-transform: translate(0%);
    -webkit-transform: translate(0%);
  }
}
</style>

<style>
.home-news img{
  color: black;
  width: 100%;
}
</style>
