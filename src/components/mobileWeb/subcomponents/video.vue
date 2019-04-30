<template>
<div class="mobile-bottom-container">
	<div class="card-container">
	  <h3 class="title">{{langData.title}}</h3>
		<div class="card-block" v-for="(card,index) in langData.cardText">
			<div class="card-image" @click="showModalVideo(index)">
				<img :src="thumbnails[index]" alt="" >
        <div class="card-line"></div>
			</div>
			<div class="card-text">
				<div class="title" v-html="card.title"></div>
			</div>
		</div>
	</div>
	<el-dialog
	  :visible.sync="show.modal"
	  size="large"
    top="10vh">
		<div class="video-wrap" v-if="show.modal">
			<video controls controlsList="nodownload" autoplay>
				<source :src="show.videoSrc" type="video/mp4">
				Your browser does not support HTML5 video. 你的浏览器不支持HTML5视频播放。
			</video>
		</div>
	</el-dialog>
</div>
</template>
<script>
const IMAGE_PATH = '../../assets/img/video/';
import langText from '../../../lang/video';
export default {
	data() {
		return {
			country:'cn',
			langData:{},
			show: {
//				videoSrc: "static/video/cn1.mp4",
        videoSrc: "http://www.ufactory.cc/cn/support/static/video/cn1.mp4",
				modal: false,
			},
			thumbnails: {},
			imageList: {
				cn: {
					1: require(`../../assets/img/mobile-web/video/mobile_video_001.png`),
					2: require(`../../assets/img/mobile-web/video/mobile_video_002.png`),
					3: require(`../../assets/img/mobile-web/video/mobile_video_003.png`),
					4: require(`../../assets/img/mobile-web/video/mobile_video_004.png`),
					5: require(`../../assets/img/mobile-web/video/mobile_video_005.png`),
					6: require(`../../assets/img/mobile-web/video/mobile_video_006.png`),
				},
				en: {
          1: require(`../../assets/img/mobile-web/video/mobile_video_001.png`),
          2: require(`../../assets/img/mobile-web/video/mobile_video_002.png`),
          3: require(`../../assets/img/mobile-web/video/mobile_video_003.png`),
          4: require(`../../assets/img/mobile-web/video/mobile_video_004.png`),
          5: require(`../../assets/img/mobile-web/video/mobile_video_005.png`),
          6: require(`../../assets/img/mobile-web/video/mobile_video_006.png`),
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
      this.langData = langText[SET_LANG];
      this.thumbnails = this.imageList[SET_LANG];
    }
    else {
      this.langData = langText['cn'];
    }
    window.scrollTo(0,0);
	},
  	mounted : function(){
  	},
  	methods:{
      showModalVideo(index) {
//				this.show.videoSrc = `static/video/cn${index}.mp4`;
        this.show.videoSrc = `https://www.ufactory.cc/static/video/${this.country}/${this.country}-${index}.mp4`;
        this.show.modal = true;
      }
  	},
  	route:{
  		canReuse: false, // force to reload data
    	//activate(transition) {},//load data
    	// load your data
  		// data: function (transition) {
       //      transition.next(DataObjectForCurrentRoute);
       //  }
  	}
}
</script>
<style lang="sass" scoped>
$textColor : #3C3C3C;
$themeOrange: #E27347;
$newBgColor: #ECECEC;
.mobile-bottom-container .card-container {
  padding: 50px 20px;
  text-align: center;
  height: inherit;
  color: #595757;
  background: #efeff1;
  h3 {
    text-align: left;
    font-size: 16px;
    margin: 0;
    padding-top: 8%;
    font-family: 'uf-book';
    font-weight: 500;
  }
  .card-block {
    margin: 5% 0;
    display: inline-block;
    vertical-align: top;
    border-radius: 2px;
    position: relative;
    /*box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);*/
    .card-text{
      white-space: pre-line;
      overflow: hidden;
      .title{
        color: $textColor;
        text-align: center;
        font-size: 14px;
      }
    }
  }
		.card-image{
			cursor: pointer;
			overflow: hidden;
			position: relative;
      /*box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.36);*/
      .card-line {
        width: 78px;
        height: 1px;
        background: rgba(89, 87, 87, 0.6);
        margin: 14px 6px;
      }
			iframe, object, embed {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			video{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
		img{
			width: 100%;
			transition: all 1s ease;
		}
  }
  .video-wrap{
    width: 96%;
    margin: 0 auto;
    video{
      width: 100%;
    }
  }
@media only screen and (max-width : 992px){
  .bottom-container .card-container .card-block {
    width: 36%;
  }
}
@media only screen and (max-width : 480px){
  .bottom-container .card-container .card-block {
    width: 90%;
  }
}

</style>

