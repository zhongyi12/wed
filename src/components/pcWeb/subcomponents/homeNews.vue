<template>
  <div class="home-news-wrapper">
    <div class="home-news">
      <h3 class="title">{{ langData.newsTitle }}<router-link class="more-wrapper" :to="{name:'news',params:{lang:country,newsPage: 1}}">
          <i class="more">{{langData.more}}</i><img src="../../assets/img/home/icon_more.svg"/></router-link>
      </h3>
      <ul id="newsUl">
        <li v-for="(item,index) in newsData" v-if="index<6" @click="showDetail(item)" :key="index" :style="{ width: newsLiWidth + 'px' }">
          <a>
            <font v-html="item.small_cover">
            </font>
            <span v-html="item.title"></span>
            <i class="el-icon-arrow-right icon-arrow-right"></i>
          </a>
        </li>
      </ul>
      <div class="btn-wrapper" v-show="newsData.length > displayCount">
        <div class="ctrl-box ctrl-left" @click="navigaitionNews(true)"><i class="el-icon-arrow-left"></i></div>
        <div class="ctrl-box ctrl-right"  @click="navigaitionNews()"><i class="el-icon-arrow-right"></i></div>
      </div>
    </div>
    <div class=" home-news home-video">
      <h3 class="title">{{ langData.videoTitle }}<router-link class="more-wrapper" :to="{name:'video',params:{lang:country}}"><i class="more">{{langData.more}}</i><img src="../../assets/img/home/icon_more.svg"/></router-link></h3>
      <ul>
        <li  v-for="(card,index) in langData.cardText" :style="{ width: newsLiWidth + 'px' }">
          <div class="card-image"  @click="showModalVideo(index)">
            <img :src="thumbnails[index]" alt="" >
            <div class="video-mask"><i class="fa fa-play-circle fa-4x" aria-hidden="true"></i></div>
          </div>
          <span class="card-text" v-html="card.title"></span>
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
      <span slot="footer" class="dialog-footer"></span>
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
          1: require(`../../assets/img/video/1.png`),
          2: require(`../../assets/img/video/2.png`),
          3: require(`../../assets/img/video/3.png`),
          4: require(`../../assets/img/video/4.png`),
        },
        en: {
          1: require(`../../assets/img/video/1.png`),
          2: require(`../../assets/img/video/en_2.png`),
          3: require(`../../assets/img/video/3.png`),
          4: require(`../../assets/img/video/4.png`),
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
      showDetail(content){                     //展示新闻详情
//        eventBus.$emit('home-news', true);
        this.$router.push({
          path:'news/'+content.objectId,
          name:'newsDetail',
          params: {
            lang:this.country,
            id: content.objectId,
          }
        });
      },
      showModalVideo(index) {
//				this.show.videoSrc = `static/video/cn${index}.mp4`;
//        this.show.videoSrc = `https://www.ufactory.cc/static/video/${this.country}${index}.mp4`;
        this.show.videoSrc = `https://www.ufactory.cc/static/video/${this.country}/${this.country}-${index}.mp4`;
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
.home-news-wrapper {
  color: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /*height: 100%;*/
  width: 100%;
  padding-top: 60px;
  .home-news {
    overflow: hidden;
    margin: 0 44px;
    padding-bottom: 6vw;
    position: relative;
    .title {
      padding-bottom: 30px;
      margin: 0;
      font-weight: 400;
      font-size: 22px;
      color: #555;
      overflow: hidden;
    }
    .more-wrapper {
      float: right;
      display: inline-block;
      width: 80px;
      height: 30px;
      img {
        width: 36%;
      }
      .more {
        height: 30px;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        padding-right: 4px;
        /*background: url("../../assets/img/home/icon_more.svg") no-repeat center center;*/
      .el-icon-d-arrow-right {
        padding-left: 10px;
        font-size: 12px;
        cursor: pointer;
        }
      }
    }
    .more-wrapper:hover {
      .more {
        color: $themeOrange;
      }
      .el-icon-d-arrow-right {
        color: $themeOrange;
      }
    }
    ul {
      width: 1000%;
      padding:0;
      position: relative;
      /*transform: scale(1,1);*/
      transition: all .5s ease;
      -webkit-transition: all .5s ease;
      -moz-transition: all .5s ease;
      -ms-transition: all .5s ease;
      -o-transition: all .5s ease;
      /*animation-name: ulNewsMove;*/
      /*animation: ulNewsMove 1.5s alternate;*/
      /*-webkit-animation: ulNewsMove 1.5s alternate ;*/
      /*-moz-animation: ulNewsMove 1.5s alternate ;*/
      li {
        padding: 0 16px;
        transition: all .6s ease .3s;
        -webkit-transition: all .6s ease .3s;
        -moz-transition: all .6s ease .3s;
        -ms-transition: all .6s ease .3s;
        -o-transition: all .6s ease .3s;
        float:left;
        a {
          display: block;
          position: relative;
          /*padding: 16px 0 16px 30px;*/
          /*padding: 16px;*/
          line-height: 22px;
          overflow: hidden;
          cursor: pointer;
          border-bottom: 1px solid transparent;
          /*padding-bottom: 30px;*/
          transition: all 1s ease;
          -moz-transition: all 1s ease;
          -ms-transition: all 1s ease;
          -o-transition: all 1s ease;
          -webkit-transition: all 1s ease;
          font {
            display: block;
            position: relative;
            overflow: hidden;
            img {
              width:100%;
              display: block;
              position: relative;
              overflow: hidden;
              transition: all .3s;
              -webkit-transition: all .3s;
              -moz-transition: all .3s;
              -ms-transition: all .3s;
              -o-transition: all .3s;
            }
          }
          span {
            font-size: .8rem;
            padding: 20px 0;
            display: inline-block;
            color: #393939;
            position: relative;
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border-bottom: 1px solid transparent;
            transition: all .6s ease-out;
            -moz-transition: all .6s ease-out;
            -ms-transition: all .6s ease-out;
            -o-transition: all .6s ease-out;
            -webkit-transition: all .6s ease-out;
          }
          .icon-arrow-right {
            position: absolute;
            bottom: 22px;
            right: 0;
            color: transparent;
            display: block;
            font-size: 16px;
            transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
            -webkit-transform: translateX(100%);
            border-left: 1px solid transparent;
            padding: 0 20px;
            transition: all 1s ease;
            -moz-transition: all 1s ease;
            -ms-transition: all 1s ease;
            -o-transition: all 1s ease;
            -webkit-transition: all 1s ease;
          }
        }
        a:hover font img {
          transform: scale(1.1);
          -moz-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -o-transform: scale(1.1);
          -webkit-transform: scale(1.1);
        }
        a:hover .icon-arrow-right {
          color: #ddd;
          border-left: 1px solid rgba(231,231,231,0.65);
          right: 54px;
        }
        a:hover {
          border-bottom: 1px solid rgba(231,231,231,0.65);
          box-shadow: 0 1px 4px rgba(231,231,231,0.25);
          color: #393939;
        }
      }
    }
  }

  .btn-wrapper {
    .ctrl-box {
      color: #fff;
      cursor: pointer;
      text-align: center;
      width: 60px;;
      heihgt: 60px;
      line-height: 60px;
      border-radius: 50%;
      background-color: rgba(31, 45, 61, 0.11);
    }
    .ctrl-left {
      position: absolute;
      left: 0;
      top: 31%;
    }
    .ctrl-right {
      position: absolute;
      right: 0;
      top: 31%;
    }
    .ctrl-box:hover {
      background-color: rgba(31, 45, 61, 0.4);
    }
  }

  .home-news {
    .card-image {
      position: relative;
      cursor: pointer;
      .video-mask {
        position: absolute;
        font-size: .76vw;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        top: 0;
        text-align: center;
        color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        -webkit-transition: all .6s ease; /* Safari and Chrome */
        -moz-transition: all .6s ease; /* Firefox */
        -ms-transition: all .6s ease; /* IE 9 */
        -o-transition: all .6s ease; /* Opera */
        transition: all .6s ease;
      }
      img{
        width: 100%;
      }
    }
    .card-image:hover{
      .video-mask{
        background: rgba(0, 0, 0, 0.1);
      }
    }
    .embed-video {
      height: 20vh;
    }
    .card-text {
      font-size: .8rem;
      padding: 20px 0;
      display: inline-block;
    }
  }
}
.video-wrap{
  width: 96%;
  margin: 0 auto;
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
