<template>

<div class="page-wrapper" id="readout">
		<!--<section class="banner banner1" v-if="country=='en' && mainModel.endCountDown">
	  <a :href="langData.submenu.storeLink" target="_blank" style="cursor: pointer;">
			<img src="../assets/img/home/black_friday.jpg"/>
		</a>-->
	</section>
	<section class="banner banner1" id="banner1">
		<div id="submenu">
			<div class="subtitle" v-on:click="scrollTop()">uArm Swift Pro</div>
			<div class="menu-right">
				<ul>
					<!--<li v-on:click="scrollTop()">{{langData.submenu.overview}}</li>-->
					<li ><a :href="langData.submenu.pdflink" target="_blank">{{langData.submenu.detail}}</a></li>
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
	<section class="banner" id="banner2">
		<el-carousel indicator-position="outside" height="45vw"  :autoplay="true">
	    <el-carousel-item v-for="value in slidersImg" :key="value">
				<img v-bind:src="value">
	    </el-carousel-item>
	  </el-carousel>
	</section>
	<section class="banner banner3">
		<img src="../assets/img/swift/banner3.jpg"/>
		<div class="text text1">
			<div class="text-content">
				<span v-html="langData.banner_3.text1"></span>
			</div>
			<div class="point"></div>
			<div class="line-anima"></div>
		</div>
		<div class="text text2">
			<div class="text-content">
			<span v-html="langData.banner_3.text2"></span>
			</div>
			<div class="point"></div>
			<div class="line-anima"></div>
		</div>
		<div class="text text3">
			<div class="line-anima"></div>
			<div class="point"></div>
			<div class="text-content">
				<span v-html="langData.banner_3.text3"></span>
				<span style="display: block; margin-top: 40px;" v-html="langData.banner_3.content3"></span>
			</div>
		</div>
	</section>
	<section class="banner banner4">
		<div class="icon-wrapper">
			<div class="com-icon-bg bg1">{{ langData.banner_3.freedom }}</div>
			<div class="com-icon-bg bg2">{{ langData.banner_3.speed }}</div>
			<div class="com-icon-bg bg3">{{ langData.banner_3.bluetooth }}</div>
			<div class="com-icon-bg bg4">{{ langData.banner_3.encoder }}</div>
		</div>
	</section>
	<section class="banner banner5">
		<h2 class="title">{{ langData.banner_5.title }}</h2>
		<div class="pic-tex-wrapper" v-for="item in langData.banner_5.pic_text">
			<img :src="item.pic"/>
			<div class="content-wrapper">
				<span class="content-title">{{ item.title }}</span>
				<span class="content">{{ item.content }}</span>
			</div>
		</div>
	</section>

	<section class="banner banner6">
		<h2 class="title">{{ langData.banner_6.title }}</h2>
		<div class="content">{{langData.banner_6.content}}</div>
		<div class="img-wrapper">
			<img src="../assets/img/swift/banner_6.gif"/>
			<img src="../assets/img/swift/banner_6.jpg"/>
		</div>
	</section>


	<section class="banner banner7">
		<h2 class="title">{{ langData.banner_7.title }}</h2>
		<div class="pic-text-wrapper">
			<div class="pic-text" v-for="item in langData.banner_7.pic_text" @mouseenter="item.active = 'true'" @mouseleave="item.active = 'false'">
				<img v-if="item.active" :src="item.gif"/>
				<img v-else :src="item.pic"/>
				<span class="content">{{ item.name }}</span>
			</div>
		</div>
	</section>

	<section class="banner9" id="banner9">
		<!-- <div class="title">{{langData.banner9.title}}</div>
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

		</div>-->
		<div style="width: 100%;	text-align: center;" @click="buyNow()"><a class="btn ghost-button" style="width: 100px;	text-align: center;">{{langData.submenu.buyText}}</a></div>
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
			slidermove:false,
			setting: setting,
			mainModel: mainModel,
			slidersImg: [
				require('../assets/img/swift/carousel1.jpg'),
				require('../assets/img/swift/carousel2.jpg'),
				require('../assets/img/swift/carousel3.jpg'),
			]
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
	      let items = document.querySelectorAll(".text-content");
	      let sliderLine = document.querySelectorAll(".line-anima");

	      // check if an element is in viewport
	      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	      function isElementInViewport(el) {
	        var rect = el.getBoundingClientRect(); //
	        return (
	          rect.top >= 0 &&
	          rect.left >= 0 &&
	          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	        );
	      }

	      function callbackFunc() {
					setTimeout(() => {
    				for (var i = 0; i < items.length; i++) {
							if (isElementInViewport(items[i])) {
								items[i].classList.add("text-content-in-view");
							}
						}
   				}, 2000);

	        // for (var i = 0; i < items.length; i++) {
	        //   if (isElementInViewport(items[i])) {
	        //     items[i].classList.add("text-content-in-view");
	        //   }
	        // }
					for (var i = 0; i < sliderLine.length; i++) {
	          if (isElementInViewport(sliderLine[i])) {
	            sliderLine[i].classList.add("line-in-view");
	          }
	        }
	      }
		  // function sliderShowCallback(){
			//   if(isElementInViewport(sliderdiv))
			//   	self.slidermove= true;
		  // }
	      // listen for events
	      window.addEventListener("load", callbackFunc);
	      window.addEventListener("resize", callbackFunc);
	      window.addEventListener("scroll", callbackFunc);
	      // window.addEventListener("scroll", sliderShowCallback);

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
            n.callMethod.apply(n,arguments):n.queue.push(arguments) //
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
      text-transform: uppercase;
      /*font-weight: 600;*/
      letter-spacing: -1px;
		  text-align: center;
			color: #555;
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
			right: 17%;
			top: 30%;
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

	.banner3 {
		position: relative;
		.text {
			position: absolute;
			display: flex;
			.line-in-view {
				height: 2px;
				background: $themeOrange;
				animation: moveOnLine 1s forwards;;
			}
			.point {
				width: 6px;
				height: 6px;
				border-radius: 50%;
				margin-left: -2px;
				margin-top: -2px;
				background: $themeOrange;
			}
			.text-content {
				// visibility: hidden;
				position: absolute;
				opacity: 0 ;
				width: 238px;
				top: -20px;
				font-size: 22px;
				color: black;
			}
			.text-content-in-view {
				// visibility: visible !important;
				animation: moveOnText 1s;
				opacity: 1 !important;
			}
		}
		@keyframes moveOnLine {
			0%   {
				width: 1px;
			}
			100% {
				width: 150px;
			}
		}
		@keyframes moveOnText {
			0%   {  opacity: 0; }
			50%   {  opacity: 0.4; }
			100% { opacity: 1!important; }
		}
		.text1 {
			bottom: 45%;
    	right: 62%;
			.text-content {
				right: 156px;
			}
		}
		.text2 {
			bottom: 20%;
    	right: 62%;
			.text-content {
				right: 156px;
			}
		}
		.text3 {
			bottom: 43%;
			left: 64%;
			.text-content {
				left: 156px;
			}
		}
	}
	.banner4 {
		.icon-wrapper {
		
			margin: 60px auto;
			display: flex;
			justify-content: center;
			psoition: relative;
			.com-icon-bg {
				background-image: url("../assets/img/swift/icon_bg.jpg");
				background-repeat: no-repeat;
				padding: 200px 0px 0;
				font-size: 16px;
				color: $themeOrange;
				width: 280px;
				text-align: center;
				background-size: cover;
			}
			.bg1 {
				background-position: -134px 29px;
			}
			.bg2 {
				background-position: -402px 29px;
			}
			.bg3 {
			  background-position: -680px 29px;
			}
			.bg4 {
				background-position: -944px 29px;
			}
		}
	}
	.banner5 {
		background: #f4f4f4;
		padding-bottom: 65px;
		.title {
			padding-top: 50px;
		}
		.pic-tex-wrapper {
			display: flex;
			padding-top: 65px;
			justify-content: center;
			width:1200px;
			margin: 0 auto;
			img {
				width: 100%;
			}
			.content-wrapper {
				display: flex;
				justify-content: center;
				flex-direction: column;
				padding: 50px;
				background: #fff;
				.content-title {
					font-size: 22px;
					color: $themeOrange;
					padding-bottom: 20px;
				}
				.content {
					font-size: 18px;
				}
			}
		}
		.pic-tex-wrapper:nth-child(odd) {
			  flex-direction: row-reverse;
		}
	}

	.banner6 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align:center;
    width: 1200px;
		margin: 30px auto;
		.content {
			width: 900px;
			font-size: 16px;
			padding: 30px 0;
		}
		.img-wrapper {
		 display: flex;
		 justify-content: center;
		}
	}

	.banner7 {
		background:#f4f4f4;
		padding: 30px 0;
		.title {
			margin: 0;
			padding: 30px 0;
		}
		.pic-text-wrapper {
			width: 1200px;
			margin: 0 auto;
			text-align: center;
			.pic-text {
				width: 50%;
				padding: 20px;
				display: inline-block;
				.content {
					font-size: 16px;
					padding-top: 20px;
					display: block;
				}
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
