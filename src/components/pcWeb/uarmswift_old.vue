<template>

<div class="page-wrapper" id="readout">
	<section class="banner banner1" v-if="country=='en' && mainModel.endCountDown">
	  <a :href="langData.submenu.storeLink" target="_blank" style="cursor: pointer;">
			<img src="../assets/img/home/black_friday.jpg"/>
		</a>
	</section>
	<section class="banner banner1" id="banner1">
		<div id="submenu">
			<div class="subtitle" v-on:click="scrollTop()">uArm Swift Pro</div>
			<div class="menu-right">
				<ul>
					<!--<li v-on:click="scrollTop()">{{langData.submenu.overview}}</li>-->
					<li ><a :href="langData.banner9.pdflink" target="_blank">{{langData.submenu.detail}}</a></li>
					<li><router-link :to="{name:'video',params:{lang:country}}">{{langData.submenu.teachVideo}}</router-link></li>
					<!--<li><router-link :to="{name:'question',params:{lang:country}}">{{langData.submenu.question}}</router-link></li>-->
					<li><router-link :to="{name:'download',params:{lang:country, product:'pro'}}">{{langData.submenu.download}}</router-link></li>
					<!--<li ><a :href="langData.submenu.storeLink" class="btn ghost-button" target="_blank">{{langData.submenu.buyText}}</a></li>-->
          <li @click="buyNow()"><a class="btn ghost-button">{{langData.submenu.buyText}}</a></li>
          <!-- Facebook Pixel Code -->
          <noscript>
            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=177555666054859&ev=PageView&noscript=1"/>
          </noscript>
          <!-- End Facebook Pixel Code -->
          <!-- Google Code for Buy Now Button Click Conversion Page -->
          <noscript>
            <div style="display:inline;">
              <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/861800496/?label=5nPcCOXU5H8QsJD4mgM&amp;guid=ON&amp;script=0"/>
            </div>
          </noscript>
          <!--End Google Code for Buy Now Button Click Conversion Page -->

        </ul>
			</div>

		</div>
		<!-- <div class="video-play" @click="showVideo()">
			<img src="/src/img/swift/Button_play.svg" alt="playbutton">
			<span v-html="langData.banner1.text"></span>
		</div> -->
		<img src="../assets/img/swift/banner1.png">
		<div class="text text-anima banner1-text">
			<div class="title1" v-html="langData.banner1.title"></div>
			<div class="content slide-in" v-html="langData.banner1.content"></div>
			<button  @click="showVideo()" class="watch-video">{{ langData.banner1.watchVideo }}</button>
		</div>
	</section>
  <section class="banner10 ">
    <div class="text text-anima">
      <div class="title">{{langData.banner10.title}}</div>
      <div class="content slide-in" v-html="langData.banner10.content"></div>
      <div class="content1 slide-in" v-html="langData.banner10.content1"></div>
    </div>
    <img src="../assets/img/swift/banner9.png">
  </section>
	<section class="banner2">
		<div class="text text-anima">
			<div class="title">{{langData.banner2.title}}</div>
			<div class="content slide-in" v-html="langData.banner2.content"></div>
			<div class="content1 slide-in" v-html="langData.banner2.content1"></div>
		</div>
		<img src="../assets/img/swift/banner2.png">
	</section>
	<section class="banner3">
		<div class="text text-anima">
			<div class="title">{{langData.banner3.title}}</div>
			<div class="content slide-in" v-html="langData.banner3.content"></div>
		</div>
		<!--<div class="button-note">-->
			<!--<div class="play-note text-anima">-->
				<!--<span class="line"></span><span v-text="langData.banner3.playText"></span>-->
			<!--</div>-->
			<!--<div class="pause-note text-anima">-->
				<!--<span class="line"></span><span v-text="langData.banner3.recordText"></span>-->
			<!--</div>-->
		<!--</div>-->
		<img v-if="country == 'cn'" src="../assets/img/swift/banner3_cn.png">
    <img v-else src="../assets/img/swift/banner3_en.png">
	</section>
	<section class="banner4">
		<div class="text text-anima">
			<div class="title" v-html="langData.banner4.title"></div>
			<div class="title1" v-html="langData.banner4.title1"></div>
			<div class="content slide-in" v-html="langData.banner4.content"></div>
		</div>
		<img src="../assets/img/swift/banner4.png">
		<!--<div class="gear-wrapper">-->
			<!--<div class="gear-item" v-for="item in langData.banner4.gearitems">-->
				<!--<img :src="item.image" alt="gear image">-->
				<!--<div class="gear-name" v-text="item.name"></div>-->
			<!--</div>-->
			<!--<div class="gear-note">-->
				<!--<div class="left-line"></div>-->
				<!--<div class="note-text" v-text="langData.banner4.noteText"></div>-->
				<!--<div class="right-line"></div>-->
			<!--</div>-->
		<!--</div>-->
	</section>
	<section class="banner5" >
		<img src="../assets/img/swift/banner5.png">
		<div class="text text-anima">
			<div class="title">{{langData.banner5.title}}</div>
			<div class="content slide-in" v-html="langData.banner5.content"></div>
		</div>
		<!--<div class="left-intro icon-intro">-->
			<!--<div class="title" v-text="langData.banner5.left.title"></div>-->
			<!--<div class="content">-->
				<!--<div class="item" v-for="item in langData.banner5.left.items">-->
					<!--&lt;!&ndash; <object type="image/svg+xml" :data="langData.banner5.left.items[1].icon" class="logo"></object> &ndash;&gt;-->
					<!--<el-tooltip class="item" effect="dark" :content="item.text" placement="bottom">-->
			      <!--<img :src="item.icon" alt="">-->
			    <!--</el-tooltip>-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->
		<!--<div class="right-intro icon-intro">-->
			<!--<div class="title" v-text="langData.banner5.right.title"></div>-->
			<!--<div class="content">-->
				<!--<div class="item" v-for="item in langData.banner5.right.items">-->
					<!--&lt;!&ndash; <object type="image/svg+xml" :data="langData.banner5.left.items[1].icon" class="logo"></object> &ndash;&gt;-->
					<!--<el-tooltip class="item" effect="dark" :content="item.text" placement="bottom">-->
			      <!--<img :src="item.icon" alt="">-->
			    <!--</el-tooltip>-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->
	</section>
	<section class="banner banner6" id="banner6">
		<div class="banner6-title-wrapper">
			<div class="subtitle"><img src="../assets/img/swift/uarm_studio.png"/></div>
			<div class="title">{{langData.banner6.title}}</div>
			<img class="banner6-logo" src="../assets/img/swift/banner6_logo.png" />
		</div>
		<el-carousel indicator-position="outside"  height="48vw" :autoplay="false">
	    <el-carousel-item v-for="(value,index) in langData.banner6.sliders" :key="index">
				<img v-bind:src="value.image">
		    <div class="carousel-caption" v-html="value.content"></div>
	    </el-carousel-item>
	  </el-carousel>
	</section>
	<section class="banner7">
    <div class="text">
      <div class="text-logo">
        <div class="title"><img v-bind:src="langData.banner7.titleimg" alt="uslogo"></div>
        <div class="slogantext">
          <p><img src="../assets/img/swift/uarm_play_name.png"/></p>
          <p v-if="$route.params.lang=='cn'"><img class="mobile-cn" src="../assets/img/swift/mobile_cn.png"/></p>
          <p v-else class="font-black title">{{langData.banner7.content}}</p>
        </div>
      </div>
      <div class="content">
        <div class="left-intro">
          <div class="text-intro">
            <div class="intro-item" v-for="item in langData.banner7.introItem">
              <img :src="item.icon" alt=""><div v-html="item.text"></div>
            </div>
          </div>
          <!--<img v-bind:src="langData.banner7.image1">-->
        </div>
        <!--<div class="right-intro">-->
          <!--<img v-bind:src="langData.banner7.image2">-->
        <!--</div>-->
      </div>
      <img src="../assets/img/swift/banner7.png" />
    </div>
	</section>
	<section class="banner8">
		<div class="text">
			<div class="title">{{langData.banner8.title}}</div>
			<div class="subtitle">{{langData.banner8.subtitle}}</div>
			<div class="content" v-html="langData.banner8.content"></div>
		</div>
		<!--<div class="image-wrapper">-->
			<!--<img v-for="(value,index) in langData.banner8.brandlogos" v-bind:src="value">-->
		<!--</div>-->
		<img src="../assets/img/swift/banner8.png" />
	</section>
	<section class="banner9" id="banner9">
		<div class="title">{{langData.banner9.title}}</div>
		<div class="content">
			<table class="spec-table">
				<tr>
					<th v-for="item in langData.banner9.spec" v-html="item"></th>
				</tr>
				<tr v-for="item in langData.banner9.specItem">
					<td><img :src="item.image" alt="product img"><div class="product-name" ><span v-html="item.name"></span><span class="color-text" v-html="item.pro"></span></div></td>
					<td v-for="value in item.values" v-html="value"></td>
				</tr>
			</table>

		</div>
		<div style="width: 100%;	text-align: center;" @click="buyNow()"><a class="btn ghost-button" style="width: 100px;	text-align: center;">{{langData.submenu.buyText}}</a></div>
		<!--<div class="text-center" >-->
			<!--<a :href="langData.banner9.pdflink" target="_blank">-->
				<!--<div class="" v-text="langData.banner9.download"></div>-->
				<!--<img src="../assets/img/swift/pdf_download.svg" alt="pdf_download">-->
			<!--</a>-->

		<!--</div>-->
	</section>
	<!-- <button type="button" class="btn btn-success" @click="showModal = true">showave</button> -->
	<el-dialog
	  title=""
	  :visible.sync="showModal"
	  size="large">
		<div class="video-wrap" v-if="showModal">
			<!--<embed v-if="country=='cn'" v-bind:src="langData.videoLink" allow-full-screen="true" quality="high" width="480" height="400" align="middle" allow-script-access="always" type="application/x-shockwave-flash"></embed>-->
			<video controls="controls" v-if="country=='cn'">
        <source :src="langData.videoLink" type="video/mp4">
        Your browser does not support HTML5 video. 你的浏览器不支持HTML5视频播放。
      </video>

			<iframe v-else width="560" height="315" v-bind:src="langData.videoLink" frameborder="0" allowfullscreen></iframe>
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
import langText from '../../lang/uArmSwift';
import mainModel from '../../mainModel/model';
export default {
	data : function(){
		return {
			country:'cn',
			langData:{},
			showModal:false,
			bannerbackground:require("../assets/img/swift/background.png"),
			banner8bgd:require("../assets/img/swift/background8.png"),
			slidermove:false,
			setting: setting,
			mainModel: mainModel,
		}
	},
	created : function(){

			window.scrollTo(0, 0);
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
		// console.log("language:"+this.country)
		if(this.$route.params.lang=='en' || this.$route.params.lang=='cn')
				this.langData=langText[this.$route.params.lang];
			else
				this.langData=langText['cn'];

//    console.log('langTextswift', langText);
	},
  mounted : function(){
		this.mainModel.countdownDay();
		window.scrollTo(0, 0);
		window.addEventListener("scroll", this.fixSubMenu, false);

	      // define variables
//	      let items = document.querySelectorAll(".text-anima");
//	      let sliderdiv = document.getElementById("banner6");
//
//	      // check if an element is in viewport
//	      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
//	      function isElementInViewport(el) {
//	        var rect = el.getBoundingClientRect();
//	        return (
//	          rect.top >= 0 &&
//	          rect.left >= 0 &&
//	          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//	          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//	        );
//	      }
//
//	      function callbackFunc() {
//	        for (var i = 0; i < items.length; i++) {
//	          if (isElementInViewport(items[i])) {
//	            items[i].classList.add("in-view");
//	          }
//	        }
//	      }
//		  function sliderShowCallback(){
//			  if(isElementInViewport(sliderdiv))
//			  	self.slidermove= true;
//		  }
//	      // listen for events
//	      window.addEventListener("load", callbackFunc);
//	      window.addEventListener("resize", callbackFunc);
//	      window.addEventListener("scroll", callbackFunc);
//	      window.addEventListener("scroll", sliderShowCallback);

  	},

  	methods:{
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
        // if(this.country === 'cn'){
        //   window.open(setting.STORE_URL.cn);
        // }else{
        //   window.open(setting.STORE_URL.en);
        // }
				window.open(this.langData.submenu.storeLink);
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
$textColor : #3C3C3C;
$themeOrange: #E27347;
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
	color: $textColor;
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
      font-size: 36px;
      font-family: 'uf-bold';
      color: $themeOrange;
      text-transform: uppercase;
      /*font-weight: 600;*/
     letter-spacing: -1px;
    }
		.text{
			visibility: visible;
			position: absolute;
		    text-align: center;
		    color: #555;
        .content{
          font-size: 20px;
          letter-spacing: -1px;
          font-family: 'uf-book';
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
		img {
			transform: scale(1.2);
		}
		.banner1-text {
			position: absolute;
			right: 10vw;
			top: 20vw;
			text-align: left;
			.title1 {
				font-family: 'BankGothic-Regular_DB';
				font-weight: 700;
				font-size: 32px;
			}
			.content {
				font-size: 22px;
				font-weight: 600;
				padding: 1.4vw 0 3vw;
				font-family: 'uf-book';
			}
			button {
				width: 160px;
				height: 50px;
				color: #fff;
				border: none;
				border-radius: 50px;
				padding-right: 40px;
				background: #444 url("../assets/img/swift/btn_play.svg") no-repeat 120px;
			}
		}
	}
	.banner2{
		.text{
			width: 45vw;
      right: 4vw;
      top: 8vw;
		}
		.content {
		  color: #fff;
		  margin: 1vw 0;
		}
    .content1 {
      font-size: 14px;
      font-family: 'uf-light';
      color: #fff;
    }
	}
	.banner3{
		.text{
			width: 40vw;
			left: 56vw;
			top: 12vw;
		}
		.content {
		  padding-top: 1vw;
		}
	}
	.banner4{
		.text{
			width: 39vw;
			right: 2vw;
      top: 6vw;
      text-align: center;
      .title1 {
        font-size: 24px;
        letter-spacing: -1px;
        font-family: 'uf-book';
        color: $themeOrange;
      }
			.content{
				margin: 1vw 0;
			}
		}
		.gear-wrapper{
			position: absolute;
			top: 32vw;
			display: flex;
			width: 100%;
			justify-content: center;
			.gear-item{
    			margin: 2vw 3vw;
				background: rgba(80,80,80,0.7);
				img{
					padding: 0vw 1vw 3vw;
					-webkit-transition: all 1s ease;
				    -moz-transition: all 1s ease;
				    -ms-transition: all 1s ease;
				    -o-transition: all 1s ease;
				    transition: all 1s ease;
					width: 11vw;
					-webkit-transform:scale(0.8);
				    -moz-transform:scale(0.8);
				    -ms-transform:scale(0.8);
				    -o-transform:scale(0.8);
				     transform:scale(0.8);
				}
				.gear-name{
					position: absolute;
					bottom: 2vw;
					width: 11vw;
					text-align: center;
					padding: 1vw 0;
					color: white;
					font-size: 0.9vw;
    			line-height: 0.9vw;
				}
			}
			.gear-item:hover{

				box-shadow: 0 10px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
				img{
					-webkit-transform:scale(0.7);
				    -moz-transform:scale(0.7);
				    -ms-transform:scale(0.7);
				    -o-transform:scale(0.7);
				     transform:scale(0.7);
				}

				.gear-name{
					background: rgba(105, 105, 105, 0.8);
					font-size: 1vw;
    			line-height: 1vw;
				}
			}
			.gear-note{
				position: absolute;
			    width: 17vw;
			    height: 1vw;
			    border-left: 1px solid $themeOrange;
			    border-right: 1px solid $themeOrange;
			    top: 19.8vw;
				color:$themeOrange;
				display: flex;
				left: 57.5vw;
				.left-line{
					width: 3vw;
					border-bottom: 1px solid $themeOrange;
					top: 11vw;
				}
				.note-text{
					width: 12vw;
					padding-top: 0.4vw;
					text-align: center;
					font-size: 0.9vw;
				}
				.right-line{
					width: 3vw;
					border-bottom: 1px solid $themeOrange;
					top: 11vw;
				}
			}
		}
	}
	.banner5{
		color:white;
		.text{
		  position: absolute;
			top: 10vw;
			width: 40vw;
			text-align: center;
			.content{
				margin:1%;
			}
		}
		.icon-intro{
			position: absolute;
			display: flex;
			align-items: center;
			font-size: 1.2vw;
			width: 20vw;
			flex-direction: column;
			.content{
				display: flex;
				    padding: 0.7vw 0;
				.item{
					width: 7vw;
				    padding: 0;
				    display: flex;
				    flex-direction: column;
				    justify-content: center;
				    align-items: center;
				    font-size: 0.7vw;
					img{
						width: 3vw;
						height: 3vw;
						cursor: pointer;
					}
					span{
						padding: 0.7vw;
					}
				}

			}
		}
		.left-intro{
			top: 22vw;
    		left: 7.6vw;
		}
		.right-intro{
			top: 27vw;
			right: 3.5vw;
		}
	}
	.banner6 {
		padding-bottom: 1vw;
		.banner6-title-wrapper{
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			.subtitle{
				width: 10vw;
				margin: auto;
				padding-top: 2vw;
			}
			.banner6-logo {
			  width: 44px;
			  margin: auto;
			}
		}
    .el-carousel {
      width: 90%;
      margin: 0 auto;
    }
		.el-carousel__item{
			img{
				width: 70%;
    		padding-top: 7%;
    		margin-left: 15%;
			}
			.carousel-caption{
				font-size: 14px;
        color: #555;
				bottom: initial;
		    top: 0;
			}
		}
	}
	.banner7 {
		.text-logo{
			text-align: center;
			position: absolute;
      top: 10vw;
      left: 20vw;
      display: flex;
      justify-content: center;
			img{
				width:4vw;
				vertical-align: middle;
			}
			.slogantext{
        margin-left: 2vw;
        img {
          width: 10vw;
        }
        .mobile-cn {
          width: 14vw;
          padding-top: .8vw;
        }
        .font-black {
          color: $themeOrange;
        }
			}
		}
		.content{
			display:flex;
			align-items: center;
    	justify-content: center;
      position: absolute;
      top: 20vw;
      left: 20vw;
			.left-intro{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
				.text-intro{
					padding-bottom: 2vw;
				}
				.intro-item {
					padding: 2vw 0;
    			height: 1.6vw;
					display: flex;
					align-items: center;
					img{
						width: 3.4vw;
						padding-right: 1vw;
					}
				}
			}
			.right-intro{
				width: 22vw;
			}
		}
	}
	.banner8 {
		text-align: center;
		.title{
			padding-top: 10vw;
      position: absolute;
      right: 4vw;
      bottom: 10vw;
      /*font-weight: 600;*/
		}
    .subtitle {
      position: absolute;
      right: 4vw;
      bottom: 14vw;
      color: #555;
    }
		.content{
      position: absolute;
      top: 12vw;
      left: 0;
      color: #555;
      width: 40vw;
		}
		.image-wrapper{
			display: flex;
			justify-content: center;
    	align-items: center;
			padding: 2vw 0 17vw;

			img{
				width: 17vw;
				padding: 3vw;
			}
			img:first-child{
			    transform: scale(.6, .6);
			}
		}
	}
	.banner9{
		padding: 7vw 0;
		.title{
			text-align: center;
			padding: 4%;
		}
		.content{
			font-size: 0.7rem;
			padding: 0 12% 6%;
		    display: flex;
		    flex-direction: row;
		    align-items: center;
		    justify-content: space-between;
		    text-align: left;
		    opacity: 0.8;

			table{
				width: 100%;
				border-collapse: collapse;
				font-size: 18px;
			}
        th {
          padding-bottom: 1vw;
        }
		    td,th{
				vertical-align: middle;
				text-align: center;
		    	img{
					width: 6vw;
					padding: 0.7vw;
				}

		    }
			td + td,th + th{
			    border-left: 1px solid #979797;
			    border-top: none;
			}
			tr + tr{
				border-top: 1px solid #979797;
			}
			.color-text{
				color: $themeOrange ;
			}
		}
		.text-center{
			text-align: center;
			padding-bottom: 6vw;
			font-size: 1vw;
			color: $themeOrange;
			cursor: pointer;
			width: 20vw;
    margin: auto;
    padding: 1vw;
		a{
			color: $themeOrange;
		}
			img{
				width:1.2vw;
			}
		}
			.text-center:hover{
				background-color: rgba(0,0,0,0.1);
			}
	}
	.banner10 {
	  .text{
      width: 45vw;
      right: 4vw;
      top: 16vw;
    }
    .content {
      color: #000;
      font-size: 20px;
      letter-spacing: -1px;
      font-family: 'uf-book';
      margin: 1.4vw 0;
    }
    .content1 {
      color: #000;
      font-size: 14px;
      font-family: 'uf-light';
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
