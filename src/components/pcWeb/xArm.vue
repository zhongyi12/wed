<template>

<div class="page-wrapper" id="readout">
	<section class="banner banner1" id="banner1">
		<div id="submenu">
			<div class="subtitle" v-on:click="scrollTop()">xArm</div>
			<div class="menu-right">
				<ul>
					<li ><a @click="goAnchor('#xarmParams')">{{langData.submenu.detail}}</a></li>
					<!-- <li><router-link :to="{name:'video',params:{lang:country}}">{{langData.submenu.teachVideo}}</router-link></li>
					<li><router-link :to="{name:'download',params:{lang:country}}">{{langData.submenu.download}}</router-link></li>-->
          <!-- <li @click="buyNow()"><a class="btn ghost-button">{{langData.submenu.buyText}}</a></li> -->
					 <li><a class="btn ghost-button" :href="langData.submenu.storeLink" target="_brank">{{langData.submenu.buyText}}</a></li>
        </ul>
			</div>

		</div>
		<div style="width:100%;">
			<video controls="controls" autoplay="autoplay" loop="loop" style="width: 100%;">
				<source src="https://www.ufactory.cc/cn/xarm/static/video/cn1.mp4" type="video/mp4"  autoplay="autoplay" />
			Your browser does not support the video tag.
			</video>
			<div class="secton1-cover"></div>
		</div>
		<div class="banner1-text">
			<div class="title1"><img style="width: 16vw" :src="langData.banner1.imageTitle"/></div>
			<div class="content slide-in" v-html="langData.banner1.content"></div>
			<button  @click="showVideo()" class="watch-video">{{ langData.banner1.watchVideo }}</button>
		</div>
	</section>
	<section class="banner2">
		<div class="text text-anima">
			<div class="title">{{langData.banner2.title}}</div>
			<div class="content slide-in" v-html="langData.banner2.content"></div>
			<div>
				<ul style="display: flex;justify-content: space-between;">
					<li v-for="(items, index) in langData.banner2.paramsList" :key="index" style="display: flex;flex-direction: column;
    justify-content: space-between;;padding-right: 30px;">
							<span>{{ items.name }}</span>
							<span style="font-weight: 600;font-size: 22px;">{{ items.value }}</span>
					</li>
				</ul>
			</div>
		</div>
		<img src="../assets/img/xarm/section2.jpg">
	</section>
	<!-- <section class="banner3">
		<el-carousel arrow="nerver" height="40vw" ref="carousel"  id="carousel">
			<el-carousel-item v-for="item in langData.banner3.imageList" :key="item">
				<div style="display: flex;height: 100%;align-items: center;">
					<div style="width: 50%;height:100%;text-align:center;background-color: #b1b8c2;position:relative;">
						<img :src="item.image" style="width: 26%;position:absolute;bottom: 10px;left:0;margin:auto;right:0;"/>
					</div>
					<div class="banner3-text" style="width:50%;height: 100%;background-color: #2f2d2e;align-items: center;padding-bottom:6%;display: flex;flex-direction: column;justify-content: center;">
						<h2 class="title">{{ item.title }}</h2>
						<span class="content">{{ item.content }}</span>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</section> -->
	<section class="banner5" >
		<div tyle="position: relative">
			<el-carousel indicator-position="outside" height="47vw">
				<el-carousel-item v-for="(item, index) in langData.banner5.imageList" :key="index">
					<!-- <div :style="{backgroundImage:'url(' + item + ')',backgroundSize: 'cover',height: '100%'}"></div> -->
					<img :src="item.img"/>
					<div class="section5-text" :class="{'section5-text-xarm7':index === 0,'section5-text-xarm6':index === 1,'section5-text-xarm5':index === 2}">
						<h2 class="title">{{ item.title }}</h2>
						<div class="content">{{ item.content }}</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
	</section>
	<section class="banner4">
		<div class="text text-anima">
			<div class="title" v-html="langData.banner4.title"></div>
			<div class="content slide-in" v-html="langData.banner4.content"></div>
		</div>
		<div class="tip">
			{{langData.banner4.tip}}
		</div>

		<img src="../assets/img/xarm/section4.jpg">
		<transition name="fade">
			<div>
				<div style="" :class="[this.accessiors ? 'transition-show' : 'transition-hidden']">
					<img style="width: 9.8vw;" :src="this.accessiorsImage.gripper">
				</div>
				<div style="" :class="[this.accessiors ? 'transition-hidden' : 'transition-show']" >
						<img style="width: 9.8vw;" :src="this.accessiorsImage.xitou">
				</div>
			</div>
		</transition>
	
	</section>

	<section class="banner banner6" id="banner6">
		<el-carousel indicator-position="outside"  height="42vw" :autoplay="false" type="card">
	    <el-carousel-item v-for="(item,index) in langData.banner6.textList" :key="index">
				<div style="text-align: center;">
					<div class="show-text hide-text">
					
						<h2>{{ item.title }}</h2>
						<div v-html="item.content"></div>
					</div>
					<img v-bind:src="item.section6Image">
				</div>
	    </el-carousel-item>
	  </el-carousel>
	</section>
	<section class="banner7">
    <div class="text text-anima">
      <div class="content">{{ langData.banner7.content }}</div>
    </div>
		<img v-if="country === 'en'" src="../assets/img/xarm/section7_en.jpg"/>
		<img v-else src="../assets/img/xarm/section7_cn.jpg"/>
	</section>
	<section class="banner8">
		<div class="text text-anima">
			<div class="title">{{langData.banner8.title}}</div>
			<div class="content" v-html="langData.banner8.content"></div>
		</div>
		<div class="section8-cover"></div>
		<img src="../assets/img/xarm/section8.jpg" />
	</section>
	<section class="banner9 ">
		<div class="text text-anima">
			<div class="title">{{langData.banner9.title}}</div>
			<div class="content" v-html="langData.banner9.content"></div>
		</div>
		<img src="../assets/img/xarm/section9.jpg" />
	</section>
	<section class="banner10">
		<div class="text text-anima">
			<div class="title">{{langData.banner10.title}}</div>
			<div class="content" v-html="langData.banner10.content"></div>
		</div>
		<img style="width: 60vw;text-align: center;margin: 25vh 0 5vh;" src="../assets/img/xarm/section10.png" />
	</section>
	<section class="banner11">
		<div class="text text-anima">
			<div class="title">{{langData.banner11.title}}</div>
			<div class="content" v-html="langData.banner11.content"></div>
		</div>
		<img src="../assets/img/xarm/section11.jpg" />
	</section>
	<section class="section-params" id="xarmParams">
		<div class="com-inner-wrapper">
			<h2 class="com-title">{{ langData.xarmParams.title.xarm }}</h2>
			<div class="block-wrapper">
				<div v-for='(item1, index1) in xarmTable.xArm' class="block">
					<div v-html='index1' class="title"></div>
					<div v-for='(item2, index2) in item1' class="content-value ">
						<span v-html='index2' class="name"></span>
						<span v-html='item2' class="value"></span>
					</div>
				</div>
				<div  style="display:flex;width: 80%;position: absolute;bottom: 9px;left: 250px;">
					<div v-for="(item, index) in langData.xarmParams.xarms" style="display:flex;width: 100%;flex-direction: column;">
						<div v-for="(item1, index1) in item" style="">
							<span v-html="item1" style="padding: 8px 0;"></span>
						</div>
					</div>
				</div>
			</div>

			<h2 class="com-title">{{ langData.xarmParams.title.gripper }}</h2>
			<div class="block-wrapper">
				<div v-for='(item1, index1) in xarmTable.gripper' class="block">
					<div v-html='index1' class="title"></div>
					<div v-for='(item2, index2) in item1' class="content-value ">
						<span v-html='index2' class="name"></span>
						<span v-html='item2' class="value"></span>
					</div>
				</div>
			</div>

			<h2 class="com-title">{{ langData.xarmParams.title.griptips }}</h2>
			<div class="block-wrapper">
				<div v-for='(item1, index1) in xarmTable.griptips' class="block">
					<div v-html='index1' class="title"></div>
					<div v-for='(item2, index2) in item1' class="content-value ">
						<span v-html='index2' class="name"></span>
						<span v-html='item2' class="value"></span>
					</div>
				</div>
			</div>



			<div>
				<h4 style="padding-top: 20px; font-weight: 600;">{{ langData.xarmParams.notes }}</h4>
				<p class="note-text" v-for="item in langData.xarmParams.tips">
					{{ item }}
				</p>
				<!-- <p class="note-text">{{langData.xarmParams.tip1}}</p>
				<p class="note-text">{{langData.xarmParams.tip2}}</p> -->
			</div>
		</div>
	</section>

		<div style="padding: 30px;margin: 0 auto;text-align:center;">
			<a class="btn ghost-button" :href="langData.submenu.storeLink" target="_brank">{{langData.submenu.buyText}}</a>
		</div>

	<el-dialog
	  title=""
	  :visible.sync="showModal"
	  size="large">
		<div class="video-wrap" v-if="showModal">
			<!--<embed v-if="country=='cn'" v-bind:src="langData.videoLink" allow-full-screen="true" quality="high" width="480" height="400" align="middle" allow-script-access="always" type="application/x-shockwave-flash"></embed>-->
			<!-- <video controls="controls">
        <source :src="langData.videoLink" type="video/mp4">
        Your browser does not support HTML5 video. 你的浏览器不支持HTML5视频播放。
      </video> -->

		<iframe width="560" height="315" v-bind:src="langData.videoLink" frameborder="0" allowfullscreen></iframe>
		</div>
	  <span slot="footer" class="dialog-footer"></span>
	</el-dialog>
</div>

</template>
<script>
// var Jquery = require('jquery');
// Jquery(".info_tittle").hide()
import setting from '../../config';
import eventBus from './module/eventBus';
const bannerPath = '../assets/img/swift/'; //local path is: /src/img/swift/ http://cdn.ufactory.cc/img/banner/
import langText from '../../lang/xarm';
import xarmTable from '../../json/xarmParam';
export default {
	data : function(){
		return {
			country:'cn',
			langData:{},
			xarmTable: xarmTable,
			showModal:false,
			slidermove:false,//
			accessiors: true,
			accessiorsImage: {
				'gripper': require('../assets/img/xarm/section4_gripper.png'),
				'xitou': require('../assets/img/xarm/section4_xitou.png'),
			},
			setting: setting,
      countdownTime: null,
      countdownImage: null,
      endCountDown: false,
		}
	},
	created : function(){

			window.scrollTo(0, 0);
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
		// console.log("language:"+this.country)
		if(this.$route.params.lang=='en' || this.$route.params.lang=='cn'){
			this.langData=langText[this.$route.params.lang];
			this.xarmTable = xarmTable[this.$route.params.lang];
		}else {
			this.langData=langText['cn'];//
				this.xarmTable = xarmTable['cn'];
				// console.log(this.xarmTable);
		}
				

//    console.log('langTextswift', langText);
	},
  mounted : function(){
		window.scrollTo(0, 0);
		window.addEventListener("scroll", this.fixSubMenu, false);

	      // define variables
	      let items = document.querySelectorAll(".text-anima");
	      let sliderdiv = document.getElementById("banner6");

	      // check if an element is in viewport
	      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	      function isElementInViewport(el) {
	        var rect = el.getBoundingClientRect();
	        return (
	          rect.top >= 0 &&
	          rect.left >= 0 &&
	          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	        );
	      }

	      function callbackFunc() {
	        for (var i = 0; i < items.length; i++) {
	          if (isElementInViewport(items[i])) {
	            items[i].classList.add("in-view");
	          }
	        }
	      }
		  function sliderShowCallback(){
			  if(isElementInViewport(sliderdiv))
					self.slidermove= true;
		  }
	      // listen for events
	      window.addEventListener("load", callbackFunc);
	      window.addEventListener("resize", callbackFunc);
	      window.addEventListener("scroll", callbackFunc);
				window.addEventListener("scroll", sliderShowCallback);
				this.changeGripper();

  	},

  	methods:{
			// changeCarousel() {
			// 	if(document.documentElement.scrollTop - document.documentElement.clientHeight > 20) {
			// 		setTimeout(this.$refs.carousel.next(), 2000);
			// 	}
				
			// },
			goAnchor(selector) {
				this.$el.querySelector(selector).scrollIntoView()
			},
			changeGripper() {
				const change = setInterval(() => {
					this.accessiors = !this.accessiors;
				}, 2000);
			},
			getDistance() {
      var banner1 = document.getElementById("banner1");
			if(banner1 === undefined || banner1 === null || banner1 === ''){
				return false;
			}else{
				return banner1.clientHeight;
			}
		},
		fixSubMenu(){
      var h = document.getElementById("submenu");
			if(h === undefined || h === null || h === ''){
				return false;
			}else{
				var distance = window.pageYOffset - this.getDistance();
				if (distance > 0) {
					eventBus.$emit('productPageScroll', true);
					h.style.position = 'fixed';
					h.style.top = '0px';
				} else {
					eventBus.$emit('productPageScroll', false);
					h.style.position = 'absolute';
					h.style.top = '-100px';
				}
			}
		},
  		scrollBottom: function(){
				var target = document.getElementById("banner9");
			  window.scrollTo(0,target.offsetTop);
      },
      scrollTop:function(){
          window.scrollTo(0,0); 
      },
      showVideo:function(){
        this.showModal=true;
      },
      buyNow() {
        /*Facebook Pixel Code*/
        !function(f,b,e,v,n,t,s){
          if(f.fbq)return;
          n=f.fbq=function(){
            n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)
          };
          if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;
          n.version='2.0';
          n.queue=[];t=b.createElement(e);
          t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)
        }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '177555666054859');
        fbq('track', 'BuyNowButtonClick');
        /* End Facebook Pixel Code*/
        /* Google Code for Buy Now Button Click Conversion Page*/
        var google_conversion_id = 861800496;
        var google_conversion_label = "5nPcCOXU5H8QsJD4mgM";
        var google_remarketing_only = false;
        if(this.country === 'cn'){
          window.open(setting.STORE_URL.cn);
        }else{
          window.open(setting.STORE_URL.en);
        }
      }
  	},
		destroyed() {
			this.getDistance;
      eventBus.$emit('productPageScroll', false);
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
$textBlackColor : #595757;
$textWhiteColor : #fff;
$themeOrange: #E27347;
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  transition: opacity 1s;
}
video::-webkit-media-controls {
 display:none !important;
}
.page-wrapper {
  padding-top: 60px;
}
.ghost-button{
	display: inline-block;
	color: white;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: $themeOrange;
	cursor: pointer;
	font-family: 'Helvetica Neue',"微软雅黑";
	transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-webkit-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
}
.ghost-button:hover,.ghost-button:active{
	background-color: white;
	color: $themeOrange;
	border:1px solid $themeOrange;
}
.detail-button{
	display: inline-block;
	color: $textBlackColor;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
	border: none;
	font-family: 'Helvetica Neue',"微软雅黑";
}
.detail-button:hover{
	background-color: white;
	color: $themeOrange;
}


#submenu{
	position: absolute;
	height: 55px;
	/*left: 0;*/
	top: -100px;
	display: flex;
	width: 100%;
  z-index: 9;
	background: rgba(25,25,25,0.7);
	justify-content: space-between;
	line-height: 55px;
	color: white;
  padding: 0 8%;
	.subtitle{
		/*width: 19%;*/
		display: inline-block;
		cursor: pointer;
	}
	.menu-right{
		width: 80%;
		/*display: inline-block;*/
		ul{
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
		li{
			margin: 0 3%;
			cursor: pointer;
			/*width: 30%;*/
			/*display: inline-table;*/
			a{
				color: white;
			}
		}
			li:hover{
				color: $themeOrange;
				a{
					color: $themeOrange;
				}
			}
	}
}
.page-wrapper{
	section{
		position: relative;
		background-size: 100% 100%;
		overflow: hidden;
		img{
			width: 100%;
		}
    .title{
      font-size: 1.8vw;
      font-family: 'uf-regular';
    }
		.content {
			margin: 1vw 0;
			font-size: 1.2vw;
			font-family: 'uf-light';
		}
		.text{
			visibility: hidden;
			position: absolute;
			text-align: center;
		}
		.text.in-view{

			visibility: visible;
			/* Apply animation to this element */
			-moz-animation: fadeAndScale 1s ease-in;
			-webkit-animation: fadeAndScale 1s ease-in;
			animation: fadeAndScale 1s ease-in;
		}
		.play-note.in-view{
			visibility: visible;
			/* Apply animation to this element */
			-moz-animation: slidein 1s ease-out;
			-webkit-animation: slidein 1s ease-out;
			animation: slidein 1s ease-out;
		}
		.pause-note.in-view{
			visibility: visible;
			/* Apply animation to this element */
			-moz-animation: slidein 2s ease-out;
			-webkit-animation: slidein 2s ease-out;
			animation: slidein 2s ease-out;
		}
		/* Move it (define the animation) */
		@-moz-keyframes slidein {
			0%   { -moz-transform: translateX(-200%); }
			100% { -moz-transform: translateX(0%); }
		}
		@-webkit-keyframes slidein {
			0%   { -webkit-transform: translateX(-200%); }
			100% { -webkit-transform: translateX(0%); }
		}
		@keyframes slidein {
			0%   {
			-moz-transform: translateX(-200%); /* Firefox bug fix */
			-webkit-transform: translateX(-200%); /* Firefox bug fix */
			transform: translateX(-200%);
			}
			100% {
			-moz-transform: translateX(0%); /* Firefox bug fix */
			-webkit-transform: translateX(0%); /* Firefox bug fix */
			transform: translateX(0%);
			}
		}
		@keyframes fadeAndScale {
		    from {
		        opacity: 0.7;
		        transform:translateY(30%);
		    }
		    to {
		         opacity: 1;
		        transform:translateX(0%);
		    }
		}
		.video-play{
			position: absolute;
			top: 36vw;
		    font-size: 1.6vw;
		    color: white;
		    cursor: pointer;
			display: flex;
		    flex-direction: column;
		    justify-content: initial;
			width: 100%;
		    align-items: center;
		    height: 10vw;
			img{
				width: 14%;
				padding: 2%;
			}
		}
	}
	.banner1 {
		// img {
		// 	transform: scale(1.2);
		// }
		.secton1-cover {
			position:absolute;
			top: -4px;
			width: 100%;
			height: 100%;
			background:  url("../assets/img/xarm/section1_cover.png") no-repeat center;
			background-size: cover;
		}
		.banner1-text {
			color: $textWhiteColor;
			position: absolute;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 30%;
			flex-direction: column;
			margin: auto;
			width: 100%;
			.content {
				font-size: 22px;
				padding: 30px 0 50px;
				font-size: 1.5vw;
				text-transform: uppercase;
			}
			.watch-video {
				width: 160px;
				height: 50px;
				border: none;
				padding-left: 20px;
				font-family: 'uf-light';
				text-decoration: underline;
				background:  url("../assets/img/swift/btn_play.svg") no-repeat 10px;
				background-size: 20px;
				font-size: 16px;
			}
		}
	}
	.banner2{
		.text{
      left: 40%;
      top: 36%;
			color: $textBlackColor;
			text-align: justify;
		}
		.content {
			width: 40vw;
			padding-bottom: 10px;
		}
	}
	.banner3{
		.banner3-text{
			// width: 39vw;
			// right: 2vw;
      // top: 40%;
      text-align: center;
      .title {
       color: $themeOrange;
      }
			.content{
				color: $textWhiteColor;
			}
		}
	}
	.banner4{
		.text{
			width: 30vw;
			left: 8%;
      top: 34%;
			text-align: left;
			color: $textBlackColor;
      .title {
      }
		}
		.tip{
				position:absolute;
				bottom: 10px;
				right: 20px;
			}
		.transition-hidden {
			position: absolute;
			top: 30%;
			left: 46.4%;
			// visibility: hidden;
			opacity: 0;
			// animation: fadeAndScale 1s ease-out;
			transition: all 1s;
		}
		.transition-show {
			animation: fadeAndScale 1s ease-out;
			position: absolute;
			top: 30%;
			left: 46.3%;
			opacity: 1;
		}
	}
	.banner5{
		.section5-text{
		
		  position: absolute;
			text-align: left;
			width: 25vw;
		}
		.section5-text-xarm5 {
			bottom: 50%;
			right: 6%;
			color: $textWhiteColor;
		}
		.section5-text-xarm6 {
			bottom: 40%;
			right: 10%;
			color: $textWhiteColor;
		}
		.section5-text-xarm7 {
			top: 10%;
			right: 15%;
			color: $textWhiteColor;
		}
	}
	.banner6 {
		padding: 2vw 0;
		.el-carousel__item--card.is-active .show-text {
			display: block !important;
			flex-direction: colunm; 
			text-align: center;
		}
		.hide-text {
			display: none;
		}
    .el-carousel {
      width: 90%;
      margin: 0 auto;
    }
		.el-carousel__item{
			img{
    		padding-top: 30%;
				width: 70%;
				margin: 0 auto;
			}
			.carousel-caption{
				font-size: 14px;
        color: #555;
				bottom: initial;
		    top: 0;
			}
		}
		.el-carousel__item--card.is-active  img {
			padding-top: 10%;
			// transform: scale(1.4);
			width: 88%;
		}
	}
	.banner7 {
		.text {
			width: 40vw;
			top: 20%;
			left: 16%;
			text-align: left;
			.content{
			}
		}
		
	}
	.banner8 {
		.section8-cover {
			width: 100%;
			height: 100%;
			position: absolute;
    	top: 0;
			background: url("../assets/img/xarm/section8_cover.png") no-repeat center;
			background-size: cover;
		}
	}
	.banner9, .banner8{
		.text {
			top: 20%;
			left: 30%;
			color: $textWhiteColor;
			z-index: 99;
			text-align:cener;
			.title{
			}
			.content{
				width: 40vw;
			}
		}
	}
	.banner10{
		text-align: center;
		.text {
			top: 5%;
			left: 30%;
			color: $textBlackColor;
			z-index: 99;
			.title{
			}
			.content{
				width: 40vw;
			}
		}
	}
	.banner11{
		text-align: center;
		.text {
			top: 4%;
			left: 33%;
			margin: auto;
			color: $textBlackColor;
			z-index: 99;
			.title{
			}
			.content{
				width: 40vw;
			}
		}
		.buy {
			margin-top: 4vh;
			a {
				color: $textWhiteColor;
				// line-height: 60px;
				background: $themeOrange;
				transition: all .6s;
				padding: 20px 70px;
				border-radius: 10px;
				display: inline-block;
			}
			a:hover {
				// color: #337ab7;
				transform: scale(1.1);
			}
		}
	}
	.section-params {
    padding-top: 50px;
		.com-inner-wrapper {
			margin: 20px auto;
			position: relative;
			width: 960px;
			.com-title {
				text-align:center;
				padding: 20px 10px;
				letter-spacing: -1px;
				font-size: 30px;
				// font-family: 'uf-bold';
				text-align: center;
				font-family: 'ufbigfont';
			}
		}
    .block-wrapper {
      // display: inline-table;
      position: relative;
      .block{
        width: 50%;
        display: inline-block;
        padding: 10px 0;
      }
      .block:nth-child(even) {
       padding-left: 10%;;
      }
      span {
        width: 50%;
        display: inline-block;
        font-size: 13px;
      }
      .title {
        text-align: left;
        font-size: 20px;
        // padding: 6px 0;
        text-transform: uppercase;
        font-weight: 600;
        color: #555;
        margin: 30px 0;
      }
      .content-value {
        text-align: left;
        padding: 8px 0;
        position: relative;
        font-size: 15px;
        display: flex;

        .name {
          color: rgb(230, 113, 69);
          //  width: 42%;
       }
        .value {
					color: #555;
					width: 56%;
					// padding-left: 20px;
        }
      }
    }
    .note-text {
      font-size: 14px;
      line-height: 30px;
      padding-left: 20px;
    }
  }
}
.main_menu{
	background-color: #ccc !important;
}
.svg-fill{
	cursor: pointer;
}
.svg-fill  path{
    fill: red;
    stroke: green;
}
.svg-fill:hover path{
    fill: red;
    stroke: red;
}
.video-wrap{
  height: 50vw;
  video {
    width: 100%;
    height: 100%;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
}


@media only screen
  and (max-width : 1000px){
  .page-wrapper section .title {
    font-size: 20px;
  }
  .page-wrapper section .title1 {
    font-size: 16px !important;
  }
  .page-wrapper section .text .content {
    font-size: 14px;

  }
  .page-wrapper .banner9 .content table {
    font-size: 14px;
  }

}
@media only screen
  and (max-width : 480px){
  .bottom-container .card-container .card-block {
    width:90%;
  }
}



</style>
