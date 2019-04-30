<template>
<div class="bottom-container">
	<div class="card-container">
		<div class="card-block" v-for="(card,index) in langData.cardText">
			<div class="card-image" @click="showModalVideo(index)">
				<img :src="thumbnails[index]" alt="" >
				<div class="video-mask">
				<i class="fa fa-play-circle fa-4x" aria-hidden="true"></i>
				<!--<img src="../../assets/img/video/btn_playvideo.png"/>-->
				</div>
			</div>
			<!--<div class="card-image embed-video" v-else>-->
				<!--&lt;!&ndash; <video controls controlsList="nodownload" v-if="country=='cn'">-->
					<!--<source :src="card.src" type="video/mp4">-->
					<!--Your browser does not support HTML5 video. 你的浏览器不支持HTML5视频播放。-->
				<!--</video> &ndash;&gt;-->
				<!--<iframe width="560" height="315" v-bind:src="card.link" frameborder="0"  allowfullscreen></iframe>-->
				<!--&lt;!&ndash; <a target="_blank" :href="langData.cardText[1].link"><img v-bind:src="langData.cardText[1].image" /></a> &ndash;&gt;-->
			<!--</div>-->
			<div class="card-text">
				<div class="title" v-html="card.title"></div>
				<!-- <div class="brief" >{{card.content}}</div> -->
			</div>
		</div>
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
					1: require(`../../assets/img/video/1.png`),
					2: require(`../../assets/img/video/2.png`),
					3: require(`../../assets/img/video/3.png`),
					4: require(`../../assets/img/video/4.png`),
					5: require(`../../assets/img/video/5.png`),
					6: require(`../../assets/img/video/6.png`),
				},
				en: {
          1: require(`../../assets/img/video/1.png`),
          2: require(`../../assets/img/video/en_2.png`),
          3: require(`../../assets/img/video/3.png`),
          4: require(`../../assets/img/video/4.png`),
          5: require(`../../assets/img/video/5.png`),
          6: require(`../../assets/img/video/6.png`),
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
.bottom-container .card-container {
		margin-top: 90px;
		text-align: center;
    height: inherit;
  .card-block {
      width: 26%;
      margin: 2%;
			display: inline-block;
			vertical-align: top;
			border-radius: 2px;
			position: relative;
			box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			overflow: hidden;
			.card-text{
				padding: 5%;
				white-space: pre-line;
				overflow: hidden;
				.title{
					color: $textColor;
					text-align: center;
					height: 3.24em;
          font-size: .76rem;
				}
				.brief{
					margin: 3% 0;
					font-size: 14px;
					color:#787878;
				}
			}
		}
		.card-block:hover{
			box-shadow: 0 10px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
		}
		.embed-video{
			padding-bottom: 56.25%;
		}
		.card-image{
			cursor:pointer;
			overflow: hidden;
			position: relative;
				margin-left: -1px;
				margin-right: -1px;
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

			.video-mask{
				position: absolute;
				width:100%;
				height: 100%;
				background: rgba(0,0,0,0.1);
				top:0;
				text-align: center;
				padding-top: 26%;
				color: white;
			}
			.play-icon{
			  width: 48px;
			  height: 48px;
			  background: url("../../assets/img/video/btn_playvideo.png") no-repeat center center;
			  display: block;
			}
		}
		img{
			width:100%;
			-webkit-transition: all 1s ease; /* Safari and Chrome */
			-moz-transition: all 1s ease; /* Firefox */
			-ms-transition: all 1s ease; /* IE 9 */
			-o-transition: all 1s ease; /* Opera */
			transition: all 1s ease;
		}
		.card-image:hover{
			img{
			-webkit-transform:scale(1.1); /* Safari and Chrome */
			-moz-transform:scale(1.1); /* Firefox */
			-ms-transform:scale(1.1); /* IE 9 */
			-o-transform:scale(1.1); /* Opera */
				transform:scale(1.1);

			}
		}
}
.video-wrap{
  width: 96%;
  margin: 0 auto;
	video{
		width:100%;
	}
}
@media only screen
	and (max-width : 992px){
		.bottom-container .card-container .card-block {
			width:36%;
		}
}
@media only screen
	and (max-width : 480px){
		.bottom-container .card-container .card-block {
			width:90%;
		}
}
</style>
