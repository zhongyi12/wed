<template>
	<transition mode="out-in">
<div id="app-container" >
	<header v-if="!productPageScroll">
		<div class="mobile-main">
			<div class="mobile-main-menu">
			  <div class="menu" @click="showMenu()"><img src="../assets/img/mobile-web/home/menu.svg"/></div>
			  <!--<div v-else @click="hide()"><i class="el-icon-close"></i></div>-->
				<div class="logo">
					<router-link :to="{name:'app',params:{lang:$route.params.lang}}">
						<img src="../assets/img/mobile-web/home/logo.png" />
					</router-link>
				</div>
				<div class="shop" @click="buyNow()"><img src="../assets/img/mobile-web/home/shop.svg"/>
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
        </div>
			</div>
      <ul class="product-content"  v-if="showProduct" @click="hide()">
        <li @click="routeXarm()">
          <a>xArm</a>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li @click="routeSwift()">
          <a>uArm Swift Pro</a>
          <i class="el-icon-arrow-right"></i>
        </li>
      </ul>
		</div>
	</header>
	<div class="main-content">
		<router-view :key="$route.params.lang" :countdown="countDown.show" :newsData="newsData"></router-view>
	</div>

	 <uf-Footer :key="$route.params.lang" v-if="$route.name !== 'app'"></uf-Footer>

	</div>
</transition>
</template>
<script>
import eventBus from './module/eventBus';
import News from './module/newsfeed';
import setting from '../../config';
import ufFooter from './subcomponents/footer.vue';
import mainModel from '../../mainModel/model';
import langText from '../../lang/comom';
//const load = require('load-script');
export default {
	data : function(){
		return {
			online:false,
			unread:false,
			avatar: sessionStorage.avatar,
			showAd:false,
			langData:{},
			countDown:{
				day:0,
				hour:0,
				minute:0,
				second:0,
				show:false,
			},
			userEmail:"",
			bolderhead:false,
			menuActive: '1',
      newsData: '',
      tempData: '',
      newsTime: '',
      productPageScroll: false,
      showProduct: false,
		}
	},
	created : function(){
		if(this.$route.params.lang == 'en' || this.$route.params.lang == 'cn'){
			this.langData = this.getLangText(this.$route.params.lang);
		}
		else {
			this.langData=this.getLangText('cn');
		}
		let self = this;
		if (typeof(Storage) !== "undefined") {
		    // Store
			if( localStorage.getItem("showSubcribeAd")===null )
				setTimeout(function(){ self.showAd=true; }, 3000);
		}
    this.fetchNewsData();    //获取新闻数据
//    window.KF5SupportBoxAPI.init();  //逸创云客服弹窗初始化弹窗
//    window.KF5SupportBoxAPI.ready(function()   //停留10秒后弹出逸创云客服弹窗
//    {
//      setTimeout("window.KF5SupportBoxAPI.open(function(){})", 20000 );
//    });
    this.kfLang();      //逸创云客服语言

	},
	mounted : function(){
		this.online = (sessionStorage.online==="true");
		this.checkRemember();
		eventBus.$on('stateChange', (state) => {
			this.online = state;
			this.avatar = sessionStorage.avatar;
			// console.log('eventBus online change', this.online) ;
		});
		eventBus.$on('msgCountChange', (count) => {
			this.unread = count>0?true : false;
			// console.log('eventBus msgCountChange', this.unread) ;
		});
    eventBus.$on('productPageScroll', (state) => {
      this.productPageScroll = state;
    });
				let userToken = sessionStorage.loginToken;
			if( userToken!==undefined && userToken!==null && userToken!=='null') {
				this.startNotifications(userToken);
			}
			// transfers sessionStorage from one tab to another
			var sessionStorage_transfer = function(event) {
			  if(!event) { event = window.event; } // ie suq
			  if(!event.newValue) return;          // do nothing if no value to work with
			  if (event.key == 'getSessionStorage') {
			    // another tab asked for the sessionStorage -> send it
			    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
			    // the other tab should now have it, so we're done with it.
			    localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
			  } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
			    // another tab sent data <- get it
			    var data = JSON.parse(event.newValue);
			    for (var key in data) {
			      sessionStorage.setItem(key, data[key]);
			    }
			  }
			};

			// listen for changes to localStorage
			if(window.addEventListener) {
			  window.addEventListener("storage", sessionStorage_transfer, false);
			} else {
			  window.attachEvent("onstorage", sessionStorage_transfer);
			};


			// Ask other tabs for session storage (this is ONLY to trigger event)
			if (!sessionStorage.length) {
			  localStorage.setItem('getSessionStorage', 'foobar');
			  localStorage.removeItem('getSessionStorage', 'foobar');
			};
	},
	// destroyed : function(){
	// 	clearInterval( this.handle )
	// }
	//components:{accordion:require('vue-strap/src/Accordion.vue')},
  methods:{
    kfLang() {
//      var script = document.createElement("script");
//      script.type = "text/javascript";
//      script.onreadystatechange = function(){
//        if (script.readyState == "loaded" || script.readyState == "complete"){
//          script.onreadystatechange = null;
//          console.log("Script loaded.");
//        }
//      };
//      script.src = "\/\/assets-cdn.kf5.com\/supportbox\/main.js?' + (new Date).getDay() + '";
//      script.id="kf5-provide-supportBox";
//      script.setAttribute('kf5-domain', 'ufactory.kf5.com');
//      script.charset = 'utf-8';
//      document.getElementsByTagName("body")[0].appendChild(script);
//      console.log('script-body', document.getElementsByTagName("body")[0].appendChild(script));
//      console.log("Script loaded.", script.readyState);
			if (window.KF5SupportBoxAPI === undefined) {
				return false;
			}
      if(this.country === 'cn'){
        window.KF5SupportBoxAPI.useLang('zh_CN');
      }else{
        window.KF5SupportBoxAPI.useLang('en');
      }

//      load("\/\/assets-cdn.kf5.com\/supportbox\/main.js?' + (new Date).getDay() + '", function (err, script) {
//        if (err) {
//          // print useful message
//          console.log(err);
//        }
//        else {
//          console.log('script.src', script.src);// Prints 'foo'.js'
//          // use script
//          // note that in IE8 and below loading error wouldn't be reported
//          script.id="kf5-provide-supportBox";
//          script.setAttribute('kf5-domain', 'ufactory.kf5.com');
//          document.getElementsByTagName("head")[0].appendChild(script);
//          console.log('script--', script);
//        }
//      })
    },

		logOut() {
			//this.online = false;
			//sessionStorage.online=false;	sessionStorage.loginToken = null;
			// sessionStorage.email = null;
			// sessionStorage.nickname = null;
			// sessionStorage.birthday = null;
			// sessionStorage.gender = null;
			// sessionStorage.country = null;
			// sessionStorage.city = null;
			// sessionStorage.profession = null;
			sessionStorage.removeItem('avatar');
			sessionStorage.removeItem('loginToken');
			localStorage.removeItem('loginToken');
			this.online = false;
			sessionStorage.online = this.online;
			eventBus.$emit('stateChange', false);
			this.$router.push({ name: 'userlogin' });
			document.cookie = 'usertoken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // delete the cookie
//	    console.log('logout success');
		},
		adCloseClick:function(){
			this.showAd=false;
			localStorage.setItem("showSubcribeAd", "1");
		},
		languageChange:function(){
//			let tempLang = this.country;
//			this.langData = this.getLangText(this.nextCountry);
//			this.country = this.nextCountry;
//			this.$router.push({ name:this.$route.name, params:{lang:this.nextCountry} });
////      console.log("name",this.$route.name);
//			// console.log(tempLang )
//			this.nextCountry = tempLang;
//
      /**开始kf5客服**/
      this.kfLang();
      /**结束kf5客服**/
      mainModel.changeLang();
      this.langData = this.getLangText(mainModel.setLang);
      this.$router.push({ name:this.$route.name, params:{lang:mainModel.setLang} });
		},
		getLangText :function(lang){
			return langText[lang];
		},
		startNotifications: function(token){
			const url = `${setting.hostURL}api/1.0/message/getwebsocketserver`;
			const options = {
				headers: {
					'X-LC-Session': token,
				},
			};
			this.$http.get(url, options).then((response) => {
				// console.log('ws', response.data);
				// this.log = response.data.route.server;// JSON.stringify(response.data);
				News.init_socket({
					host: response.data.route.server,
					appid: response.data.appid,
					objectid: response.data.installationId,
				});
			}, (response) => {
				// console.log('eeeeee');
//				console.log('get notifications fail, error msg:', response);
			});
		},
		getCookie(name) {
			let value = "; " + document.cookie;
			let parts = value.split("; " + name + "=");
			if (parts.length == 2)
				return parts.pop().split(";").shift();
			return null;
		},
		checkRemember() {
			let remember = this.getCookie('usertoken');
			if (remember) {
				this.getUserInfo(remember);
			}
		},
		getUserInfo(token){
      const url = `${setting.hostURL}api/1.0/getuserinfo`;
      const options = {
        headers: {
          'X-LC-Session': token,
        },
      };
      this.$http.get(url, options).then(response => {
				const returnBack = response.data === undefined ? response : response.data;
        if( returnBack.code === 0){
					sessionStorage.loginToken = token;
					sessionStorage.email = returnBack.info.email;
					sessionStorage.avatar = returnBack.info.avatar;
					sessionStorage.online = true;
					eventBus.$emit('stateChange', true);
          // console.log('user info return:', returnBack.info);
				}
				else {
//					console.log('cookies invalid');
					document.cookie = 'usertoken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // delete the cookie
				}
      }, response => {
      });
    },
    fetchNewsData(){          //获取新闻数据
      const url = `${setting.hostURL}api/1.0/news/getallnews`;
      // const url = `${setting.hostURLtest}api/1.0/news/getallnews`;
      this.$http.get(url).then(response => {
        const returnBack = response.data === undefined ? response : response.data;
        if( returnBack.code === 0){
          this.tempData = returnBack.data;
          this.compareTime();
        }
      }, response => {
      });
    },
    compareTime(){                        //对获取的新闻数据时间排序
      let dateTime = new Date();
      var arr=[];
      for(var i=0;i<this.tempData.length;i++){
        if(dateTime > new Date(this.tempData[i].show_time.replace(/-/g,"/")) && this.tempData[i].language === this.$route.params.lang){
          arr.push(this.tempData[i]);
        }
      }
      this.newsData = arr.sort(function(a,b){
        return Date.parse(b.show_time) - Date.parse(a.show_time);         //时间正序
      });
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
      if(this.$route.params.lang === 'cn'){
        window.open(setting.STORE_URL.cn);
      }else{
        window.open(setting.STORE_URL.en);
      }
    },
    showMenu() {
      if(this.showProduct === true){
        this.showProduct = false;
      }else {
        this.showProduct = true;
      }
    },
    hide() {
      this.showProduct = false;
    },
    routeXarm() {
      this.$router.push({name:'xarm', lang: mainModel.setLang});
      this.showProduct = false;
    },
    routeSwift() {
      this.$router.push({name:'uarmswift', lang: mainModel.setLang});
      this.showProduct = false;
    }
	},
	components:{
    ufFooter,
	},
	watch:{
	  '$route'() {
	    this.fetchNewsData();
	  },
		country: function(){
			if(this.country == 'en')
				this.bolderhead = true;
			else
				this.bolderhead = false;
		},
		'$route.name'(){
			// this.menuActive.index1 = '0';
			const routeIndexMap = {
        xArm: '1-1',
        uarmswift: '1-2',
				download: '2-1',
				document: '2-2',
        question: '2-3',
        news: '7',
			};
//			console.log(this.$route.name, this.menuActive);
			if (routeIndexMap[this.$route.name] !== undefined) {
				this.menuActive = routeIndexMap[this.$route.name];
			}
			else {
				this.menuActive = '';
			}
		},
	},
  computed: {
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
$vm_base: 414;
@function vw($px) {
  @return ($px / $vm_base) * 100vw;
}
$maxWidth: 960px;
$themeOrange: #E27347;
.mobile-main-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 vw(10);
  .shop, .menu,{
    width: 24px;
  }
  .logo {
    width: 100px;
  }
  img {
    width: 100%;
  }
}
.product-content {
  text-align: left;
  height: 100vh;
  /*background: rgba(88, 93, 92, 0.98);*/
  background: #fff;
  position: absolute;
  width: 100%;
  top: 50px;
  li {
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border-top: 1px solid rgba(228,228,228,0.5);
    display: flex;
    justify-content: space-between;
    a {
      color: #555;
    }
    .el-icon-arrow-right {
      color: rgba(85,85,85,0.5);
      line-height: 40px;
    }
  }
}
</style>
