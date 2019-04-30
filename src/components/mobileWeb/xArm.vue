<template>

<div class="page-wrapper" id="readout">
	<section class="banner banner1" id="banner1">
		<div id="submenu">
			<!--<div class="subtitle" v-on:click="scrollTop()">uArm Swift Pro</div>-->
			<div class="menu-right">
			  <span>xArm</span>
			  <span class="el-icon-arrow-up" v-if="showDetail" @click="showDetail = false"></span>
        <span class="el-icon-arrow-down" v-else @click="showDetail = true"></span>
			  <span class="btn ghost-button"><a :href="langData.submenu.storeLink" target="_brank"></a>{{langData.submenu.buyText}}
        </span>
			</div>
      <ul v-if="showDetail">
        <li ><a  @click="goAnchor('#xarmParams')">{{langData.submenu.detail}}</a></li>
        <!-- <li><router-link :to="{name:'video',params:{lang:country}}">{{langData.submenu.teachVideo}}</router-link></li>
        <li><router-link :to="{name:'download',params:{lang:country}}">{{langData.submenu.download}}</router-link></li>
        <li><router-link :to="{name:'question',params:{lang:country,module:'technology'}}">{{langData.submenu.question}}</router-link></li> -->
      </ul>
		</div>
		<div>
			<div class="banner1-text">
				<div class="title">{{ langData.banner1.title }}</div>
				<div class="content slide-in" v-html="langData.banner1.content"></div>
			</div>
			<img src="../assets/img/mobile-web/xarm/mobile_section1.gif">
			<!-- <video controls="controls" autoplay="autoplay" loop="loop" style="width: 100%;">
				<source src="https://www.ufactory.cc/cn/xarm/static/video/cn1.mp4" type="video/mp4"  autoplay="autoplay" />
			Your browser does not support the video tag.
			</video> -->
		</div>
		<button  @click="showVideo()" class="watch-video">{{ langData.banner1.watchVideo }}</button>
	</section>
	<section class="banner2">
		<div class="text text-anima">
			<div class="title">{{langData.banner2.title}}</div>
			<div class="content slide-in" v-html="langData.banner2.content"></div>
			<div>
				<ul style="width: 100%;">
					<li v-for="(items, index) in langData.banner2.paramsList" :key="index" style="display: inline-block;width: 50%;padding-bottom:20px;">
							<span>{{ items.name }}</span>
							<span style="font-weight: 600;font-size: 16px;display: block;">{{ items.value }}</span>
					</li>
				</ul>
			</div>
		</div>
		<img src="../assets/img/mobile-web/xarm/mobile_section2.jpg">
	</section>
	<section class="banner5">
		<div v-for="(item, index) in langData.banner5.imageList">
			<h2 class="title">{{ item.title }}</h2>
			<img :src="item.mobileImg" />
			<div class="content">{{ item.content }}</div>
		</div>
	</section>
	<section class="banner4">
		<div class="text text-anima">
			<div class="title" v-html="langData.banner4.title"></div>
			<div class="content slide-in" v-html="langData.banner4.content"></div>
			<div class="content" style="font-size: 12px;" v-html="langData.banner4.tip"></div>
		</div>
		<img src="../assets/img/mobile-web/xarm/mobile_section4.jpg">
	</section>
	<section class="banner6">
		<div v-for="(item,index) in langData.banner6.textList">
			<div class="title">{{ item.title }}</div>
			<img :src="item.mobileSection6Image"/>
			<div class="content">{{ item.content }}</div>
		</div>
	</section>
	<section class="banner7">
    <div class="text text-anima">
      <div class="content">{{ langData.banner7.content }}</div>
    </div>
		<img v-if="country === 'en'" src="../assets/img/mobile-web/xarm/mobile_section7_en.jpg"/>
		<img v-else src="../assets/img/mobile-web/xarm/mobile_section7_cn.jpg"/>
	</section>
	<section class="banner8">
		<div class="title">{{langData.banner8.title}}</div>
		<img src="../assets/img/mobile-web/xarm/mobile_section8.jpg"/>
		<div class="content" v-html="langData.banner8.content"></div>
	</section>
	<section class="banner9 ">
		<div class="text text-anima">
			<div class="title">{{langData.banner9.title}}</div>
			<div class="content" v-html="langData.banner9.content"></div>
		</div>
		<img src="../assets/img/mobile-web/xarm/mobile_section9.jpg"/>
	</section>
	<section class="banner10">
		<div class="text text-anima">
			<div class="title">{{langData.banner10.title}}</div>
			<div class="content" v-html="langData.banner10.content"></div>
		</div>
			<img src="../assets/img/mobile-web/xarm/mobile_section10.jpg"/>
	</section>
	<section class="banner11">
		<div class="text text-anima">
			<div class="title">{{langData.banner11.title}}</div>
			<div class="content" v-html="langData.banner11.content"></div>
		</div>
		<img src="../assets/img/mobile-web/xarm/mobile_section11.jpg"/>
	</section>
	<section class="xarm-params" id="xarmParams">
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
			<div  style="display:flex; width: 87%;position: absolute; bottom: -2px;left: 98px;font-size: 12px;">
				<div v-for="(item, index) in langData.xarmParams.xarms" style="display:flex;width: 33%;flex-direction: column;">
					<div v-for="(item1, index1) in item" style="padding: 5px 0;text-align: center;">
						<span v-html="item1"></span>
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
			<h4 style="padding: 20px 20px 0 10px; font-weight: 600;text-align: left;">{{ langData.xarmParams.notes }}</h4>
			<p class="note-text" v-for="item in langData.xarmParams.tips">
				{{ item }}
			</p>
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
import xarmTable from '../../json/xarmParam.json';
export default {
	data : function(){
		return {
			country:'cn',
			langData:{},
			showModal:false,
			slidermove:false,//
			xarmTable: xarmTable,
			setting: setting,
			showDetail:false,
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
			this.xarmTable=xarmTable[this.$route.params.lang];
		}
		else{
			this.langData=langText['cn'];
			this.xarmTable=xarmTable['cn'];
		}
				

//    console.log('langTextswift', langText);
	},
  mounted : function(){
		window.scrollTo(0, 0);
		// window.addEventListener("scroll", this.fixSubMenu, false);

	  //     // define variables
	  //     let items = document.querySelectorAll(".text-anima");
	  //     let sliderdiv = document.getElementById("banner6");

	  //     // check if an element is in viewport
	  //     // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	  //     function isElementInViewport(el) {
	  //       var rect = el.getBoundingClientRect();
	  //       return (
	  //         rect.top >= 0 &&
	  //         rect.left >= 0 &&
	  //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	  //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  //       );
	  //     }

	  //     function callbackFunc() {
	  //       for (var i = 0; i < items.length; i++) {
	  //         if (isElementInViewport(items[i])) {
	  //           items[i].classList.add("in-view");
	  //         }
	  //       }
	  //     }
		//   function sliderShowCallback(){
		// 	  if(isElementInViewport(sliderdiv))
		// 	  	self.slidermove= true;
		//   }
	  //     // listen for events
	  //     window.addEventListener("load", callbackFunc);
	  //     window.addEventListener("resize", callbackFunc);
	  //     window.addEventListener("scroll", callbackFunc);
	  //     window.addEventListener("scroll", sliderShowCallback);

  	},

  	methods:{
			goAnchor(selector){
				this.$el.querySelector(selector).scrollIntoView();
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
	position: fixed;
	top: 50px;
	width: 100%;
  z-index: 9;
	background: rgba(25,25,25,0.8);
	line-height: 55px;
	color: white;
	.subtitle{
		display: inline-block;
		cursor: pointer;
	}
	.menu-right{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
	}
  ul{
    display: flex;
    justify-content: center;
    flex-direction: column;
		text-align: left;
  }
    li{
      cursor: pointer;
      margin: 0 4vw;
      a{
        color: white;
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
      font-size: 24px;
      font-family: 'uf-regular';
    }
		.text{
			// visibility: hidden;
			position: absolute;
			font-size: 14px;
			font-family: 'uf-normal';
			.content {
				margin: 1vw 0;
			}
		}
		.text.in-view{

			visibility: visible;
			/* Apply animation to this element */
			-moz-animation: fadeAndScale 3s ease-out;
			-webkit-animation: fadeAndScale 3s ease-out;
			animation: fadeAndScale 3s ease-out;
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
		        opacity: 0;
		        transform: scale(.9, .9);
		    }
		    to {
		        opacity: 1;
		        transform: scale(1, 1);
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
		text-align:center;
		background-color: #f4f2f3;
		.banner1-text {
			color: $textBlackColor;
			.title {
				font-weight: 700;
			}
			.content {
				padding: 15px 0 20px;
			}
		}
		.watch-video {
			width: 160px;
			height: 50px;
			border: none;
			padding-left: 20px;
			font-family: 'uf-normal';
			text-decoration: underline;
			background: url("../assets/img/mobile-web/xarm/section1_play.png") no-repeat 10px;
			background-size: 20px;
		}
	}
	.banner2{
		.text{
      left: 32%;
      top: 32%;
			color: $textBlackColor;
			text-align: justify;
			padding: 0 10px;
		}
		.content {
			padding-bottom: 10px;
		}
	}
	.banner3{
		text-align: center;
		.title {
			color: $themeOrange;
		}
		.content{
			color: $textBlackColor;
		}
	}
	.banner4{
		.text{
			left: 5%;
      top: 6%;
			text-align: left;
      .title {
      }
			.content{
			}
		}
	}
	.banner5{
		background-color: #f4f2f3;
		color: $textBlackColor;
		text-align:center;
	}

	.banner7{
		.text {
			width: 80%;
			top: 6%;
			padding:10px;
			text-align: left;
			.content{
			}
		}
		
	}
	.banner8, .banner6 ,.banner5 {
		position: relative;
		text-align:center;
		background-color: #f4f2f3;
		.title{
			padding: 20px 0;
			}
			.content{
				padding: 20px 10px;
			}
	}
	.banner9{
		text-align: center;
		.text {
			top: 30%;
			color: $textWhiteColor;
			padding: 10px;
			.title{
				text-align:cener;
			}
			.content{
				text-align:justify;
			}
		}
	}
	.banner10{
		text-align: center;
		.text {
			top: 15%;
			color: $textBlackColor;
			padding: 10px;
			.title{
			}
			.content{
				text-align: left;
			}
		}
	}
	.banner11{
		text-align: center;
		.text {
			top: 2%;
			color: $textBlackColor;
			padding: 10px;
			.title{
			}
			.content{
				text-align: left;
			}
		}
		.buy {
			margin-top: 4vh;
			a {
				color: $textWhiteColor;
				// line-height: 60px;
				background: $themeOrange;
				transition: all .6s;
				padding: 16px 30px;
				border-radius: 10px;
				display: inline-block;
			}
			a:hover {
				// color: #337ab7;
				transform: scale(1.1);
			}
		}
	}
	.xarm-params {
    padding: 10px;
		.com-inner-wrapper {
			margin: 20px auto;
			position: relative;
			.com-title {
				text-align:center;
				padding: 40px 10px 20px;
				letter-spacing: -1px;
				font-size: 23px;
				font-family: 'uf-bold';
			}
		}
    .block-wrapper {
      position: relative;
      text-align: left;
      .block{
        width: 100%;
        display: inline-block;
      }
      .title {
        text-align: left;
        font-size: 18px;
        padding: 6px 0;
        text-transform: uppercase;
        font-family: 'ufbigfont';
        font-weight: 500;
        color: #555;
        margin: 28px 0;
      }
      .content-value  {
        text-align: left;
        padding: 4px 0;
        position: relative;
        font-size: 15px;
        display: flex;
        width: 100%;
        font-size: 13px;
        .name {
          color: rgb(230, 113, 69);
          width: 40%;
        }
        .value {
          color: #555;
          padding-left: 10px;
        }
      }
      
      
    }
    .note-text {
      font-size: 13px;
      line-height: 30px;
      padding-left: 20px;
      text-align: left;
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
