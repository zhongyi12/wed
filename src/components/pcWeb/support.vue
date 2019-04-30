<template>
<div class="download-wrapper">
  <div class="download-slogen">
    <p v-show="showProduce == 'products'">{{langData.download}}</p>
    <p v-show="showProduce == 'pro'">{{langData.breadcrumb[3]}}</p>
    <p v-show="showProduce == 'swift'">{{langData.breadcrumb[4]}}</p>
    <p v-show="showProduce == 'metal'">{{langData.breadcrumb[5]}}</p>
  </div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item" ><router-link :to="{name:'app',params:{lang:language}}" style="">{{langData.breadcrumb[1]}}</router-link></li>
      <li class="breadcrumb-item " @click="backProducts()">{{langData.breadcrumb[2]}}</li>
      <li class="breadcrumb-item active" v-show="showProduce == 'pro'">{{langData.breadcrumb[3]}}</li>
      <li class="breadcrumb-item active" v-show="showProduce == 'swift'">{{langData.breadcrumb[4]}}</li>
      <li class="breadcrumb-item active" v-show="showProduce == 'metal'">{{langData.breadcrumb[5]}}</li>
    </ol>
    <!-- <i v-if="osName=='mac'" class="fa fa-apple"></i>
    <i v-else-if="osName=='windows'" class="fa fa-windows"></i>
    <i v-else-if="osName=='linux'" class="fa fa-linux"></i> -->
    <div class="support-wrap">
      <div class="produce-wrap" v-if="showProduce == 'products'">
        <!-- <h1 class="produce-title">{{ langData.selectProduct }}</h1> -->
        <div class="produce-pic" v-for="(item, index) in tabProduce" :key="index" @click="getProduce(item.name,index)">
          <img :src="item.pic"/>
          <div class="produce-text">{{ item.text }}
          </div>
        </div>
      </div>
      <section v-if="showProduce == 'pro' || showProduce == 'swift' || showProduce == 'metal'">
      <div class="panel">
        <div class="panel-heading">{{langData.tabTitle.software}}</div>
        <div class="panel-body software">
         
          <div v-for="(item, index) in remoteData.software"  class="software-wrapper">
            
            <div v-for="(soft, index2) in item[showProduce]" class="wrapper-block">
              <div class="software-name" v-show="index === 'win'">
                <span>{{ index2 }}</span>
              </div>
              <span class="system-name" style="text-transform:Capitalize "> {{ index }}</span>
              <span class="version-time">v{{ soft.version }}</span>|
             <span class="version-time">{{ soft.date }}</span>
             <a class="download" :href="soft.link">{{ langData.download }}</a>
            </div>
          </div>
        </div>


        <div class="software-wrapper" v-show="showProduce !== 'metal'">
          <div class="wrapper-block">
            <div class="software-name"  style="padding-left: 40px;">{{ mobileApp.title[language] }}</div>
            <div style="display: flex;">
              <div class="mobile-ipad">
                <div class="">
                  <div class="mobile-notes">{{ mobileApp.qrcode_ios[language] }}</div>
                  <img src="../assets/img/uarm_play_app.png" alt=""><br>
                  <div class="mobile-notes" style="text-align:center;" v-text="mobileApp.qrcode[language]"></div>
                </div><br>
                <a :href="langData.uArmPlayAndroid" class="item-wrap">
                  <div class="ghost-button"><i class="fa fa-android fa-lg" aria-hidden="true"></i><span>{{langData.download}}</span></div>
                </a>
                <a :href="langData.uArmPlayiOS" class="item-wrap" target="_blank">
                  <div class="ghost-button"><i class="fa fa fa-apple fa-lg" aria-hidden="true"></i><span>{{langData.download}}</span></div>
                </a>
              </div>
              <div class="mobile-ipad">
                <div class="">
                  <div class="mobile-notes">{{ mobileApp.qrcode_ipad[language] }}</div>
                  <img src="../assets/img/uarm_draw.png" alt=""><br>
                  <div class="mobile-notes" style="text-align:center;" v-text="mobileApp.qrcode_draw[language]"></div>
                </div><br>
                <a :href="langData.uArmDrawiPad" class="item-wrap" target="_blank">
                  <div class="ghost-button"><i class="fa fa fa-apple fa-lg" aria-hidden="true"></i><span>{{langData.download}}</span></div>
                </a>
              </div>
            </div>
          </div>
      </div>
      </div>


      <div class="panel">
        <div class="panel-heading" >{{langData.tabTitle.doc}}</div>
        <div class="panel-body">
          <div v-for="(item, index) in remoteData.document[showProduce]"  class="wrapper-block" style="display: inline-block;">
            <span class="system-name"> {{ item.name }}</span>
            <span v-if="item.version">{{ item.version }}<span class="version-time">|</span></span>
            <span >{{ item.date }}</span>
            <a class="download doc-download" :href="item.link">{{ langData.download }}</a>
          </div>
        </div>
      </div>

      <div class="panel" v-if="showProduce == 'pro' ">
        <div class="panel-heading" >{{langData.tabTitle.developer}}</div>
        <div class="panel-body">
          <div v-for="(item, index) in remoteData.developerDoc[showProduce]"  class="wrapper-block" style="display: inline-block;">
            <span class="system-name"> {{ item.title }}</span>
            <span style="width: 77%;display: block;">{{ item.content }}</span>
          
            <a class="download doc-download" :href="item.link">{{ langData.download }}</a>
          </div>
        </div>
      </div>

      </section>
    </div>
</div>
</template>

<script>
const updateData = require('../../json/updates.json');
const supportData = require('../../json/supports.json');
const docData = require('../../json/documents.json');
import langText from '../../lang/support';
import developerDoc from '../../lang/developer';
export default {
	data : function(){
		return {
			language:'cn',
			langData:{},
      showProduce: '',
      showNum: 0,
			remoteData:{
        software:{},
        document:{},
      },
      swiftLink:{},
      activeNames:{
        software: ['1', '2', '3'],
        documents: ['1', '2'],
        softwareTab: 'window',
      },
      mobileApp:{
        title:{
          en: 'uArm Play & uArm Draw',
          cn: 'uArm Play & uArm Draw',
        },
        qrcode_ios: {
          en: 'Android v1.0.3/iOS v1.0.6',
          cn: '安卓 v1.0.3/iOS v1.0.6'
        },
        qrcode_ipad: {
          en: 'iPad v1.0.2',
          cn: 'iPad v1.0.2'
        },
        notes: {
          en: 'Only for uArm Swift & uArm Swift Pro',
          cn: '仅限uArm Swift及uArm Swift Pro',
        },
        qrcode: {
          en: 'uArm Play',
          cn: 'uArm Play',
        },
        qrcode_draw: {
          en: 'uArm Draw',
          cn: 'uArm Draw',
        },
      },

      tabProduce: [
        {
          name: 'pro',
          pic: require('../assets/img/support/banner_pro.png'),
          text: 'uArm Swift Pro'
        },
        {
          name: 'swift',
          pic: require('../assets/img/support/banner_swift.png'),
          text: 'uArm Swift'
        },
        {
          name: 'metal',
          pic: require('../assets/img/support/banner_metal.png'),
          text: 'uArm Metal'
        },
      ],
		}
	},
	created : function(){
		if(navigator.platform.indexOf('Mac')>-1)
			this.activeNames.softwareTab='mac';
		else if(navigator.platform.indexOf('Linux')>-1)
			this.activeNames.softwareTab='linux';
		else
			this.activeNames.softwareTab='win';
//		var langText = {
//				cn:{
//					breadcrumb:{
//						1:"首页",
//						2:"下载",
//						3:"uArm Swift Pro",
//						4:"uArm Swift",
//						5:"uArm Metal",
//					},
//          tabTitle: {
//            software: "软件",
//          },
//          download: "下载",
//          selectProduct: '选择产品',
//        },
//				en:{
//					breadcrumb:{
//						1:"Home",
//						2:"Downloads",
//            3:"uArm Swift Pro",
//            4:"uArm Swift",
//            5:"uArm Metal",
//					},
//          tabTitle: {
//            software: "Software",
//          },
//          download: "Downloads",
//          selectProduct: 'Select a Product',
//				},
//			};
			if(this.$route.params.lang==='en' || this.$route.params.lang==='cn'){
				  this.language = this.$route.params.lang;
  				this.langData=langText[this.language];
  				//this.remoteData=JSON.parse('../json/version-info2.json')[this.$route.params.lang]
			}
  		else {
  				this.langData=langText['cn'];
            //
      }
      this.remoteData.document = docData[this.language].document;
      this.remoteData.developerDoc = developerDoc[this.language].document;
      this.fetchData();
  			//this.langData.software.autoPlatform = this.langData.software.platform[osName];

		// if(this.$route.params.lang!==undefined){}
		// console.log("platform:"+this.langData.software.platform[osName][1])
		// console.log("autoPlatform:"+this.langData.software.autoPlatform[1])
	},
  	mounted : function(){
      let target = document.getElementById("user-guide");
      // console.log(this.$route.params.document);
      if(this.$route.params.document !== undefined && window.scrollTo) {
        window.scrollTo(0, target.offsetTop);
      }
      else{
        window.scrollTo(0, 0);
      }
       this.showProduce = this.$route.params.product;
  	},
  	// destroyed : function(){
  	// 	clearInterval( this.handle )
  	// }
  	//components:{accordion:require('vue-strap/src/Accordion.vue')},
  components: {
  	},
  	methods:{
      fetchData() {
        this.$http.get(`https://update.ufactory.cc/releases/updates.json?v=${new Date().getTime()}`).then(response => {
          const fetchData = response.data; // updateData.software;
          // console.log("ss", fetchData);
          const osArray = ['win', 'mac', 'linux'];
          osArray.forEach((os) => {
            supportData[os].pro['uArmStudio'] = {
              date: fetchData['uArmStudio'].publishDate,
              name: fetchData['uArmStudio'].name,
              version: fetchData['uArmStudio'].version,
              link: fetchData['uArmStudio'].url[os],
              intro: fetchData['uArmStudio'].introduction,
            };
            supportData[os].pro['CuraForuArm'] = {
              date: fetchData['CuraForuArm'].publishDate,
              name: fetchData['CuraForuArm'].name,
              version: fetchData['CuraForuArm'].version,
              link: fetchData['CuraForuArm'].url[os],
              intro: fetchData['CuraForuArm'].introduction,
            };
            supportData[os].swift['CuraForuArm'] = {
              date: fetchData['CuraForuArm'].publishDate,
              name: fetchData['CuraForuArm'].name,
              version: fetchData['CuraForuArm'].version,
              link: fetchData['CuraForuArm'].url[os],
              intro: fetchData['CuraForuArm'].introduction,
            };
          })
          this.$set(this.remoteData, 'software', supportData);
          //this.remoteData.software = supportData;
        }).catch(error => {
          console.log('fetch failed', error);
        });
  		},
      toggleModal:function(){
        this.showModal = !this.showModal;
      },
      getProduce(v,n){
        // this.showProduce = v;
        this.showNum = n;
        this.$router.push({
          name: 'download',
          params: {
            lang: this.language,
            product: v,
            }
        });
         this.showProduce = this.$route.params.product;
      },
      backProducts(){
        // this.showProduce = v;
        this.$router.push({
          name: 'download',
          params: {
            lang: this.language,
            product: 'products',
            }
        });
         this.showProduce = this.$route.params.product;
      },
  	},
    watch: {
      $route() {
        this.showProduce = this.$route.params.product;
      },
    },
  	route:{
  		canReuse: false, 
  	}
}
</script>
<style  lang="sass" scoped>
$themeOrange: #E27347;
.ghost-button{
	/*display: inline-block;*/
	padding: 10px 20px;
	color: $themeOrange;
	border: 1px solid #f1f1f1;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
  margin-bottom: 10px;
  transition: all .4s;
  span {
    padding-left: 6px;
  }
}
.ghost-button:hover,.ghost-button:active{
	background-color: $themeOrange;
	color: #fff;
}
.breadcrumb{
	margin-bottom: 0;
  >.active {
      color: $themeOrange;
  }
}
.download-wrapper{
	/*background-color: #f8f8f8;*/
	width: 100%;
	display: inline-block;
	padding: 60px 0;
  .download-slogen {
    width: 100%;
    height: 400px;
    line-height: 400px;
    font-size: 40px;
    color: #fff;
    text-align: center;
    background-image: url('../assets/img/support/download_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  }
.support-wrap{
	  padding: 60px 0;
    background-color: white;
    width: 1280px;
    margin: 0 auto;
  .produce-wrap {
    text-align: center;
    padding-bottom: 110px;
    .produce-title {
      font-size: 28px;
    }
    .produce-pic {
      cursor: pointer;
      width: 200px;
      margin: 2% 4% 0;
      display: inline-block;
      img {
        width: 100%;
        -webkit-transition: all 1s ease; /* Safari and Chrome */
        -moz-transition: all 1s ease; /* Firefox */
        -ms-transition: all 1s ease; /* IE 9 */
        -o-transition: all 1s ease; /* Opera */
        transition: all 1s ease;
      }
      .scale-img{
        -webkit-transform: scale(1.2); /* Safari and Chrome */
        -moz-transform: scale(1.2); /* Firefox */
        -ms-transform: scale(1.2); /* IE 9 */
        -o-transform: scale(1.2); /* Opera */
        transform: scale(1.2);
      }
    }
    .produce-pic:hover {
      img{
        -webkit-transform: scale(1.2); /* Safari and Chrome */
        -moz-transform: scale(1.2); /* Firefox */
        -ms-transform: scale(1.2); /* IE 9 */
        -o-transform: scale(1.2); /* Opera */
        transform: scale(1.2);
      }
    }
    .produce-text {
      padding-top: 10%;
      font-size: 16px;
    }
    .el-icon-caret-bottom {
      font-size: 14px;
      margin-left: 10px;
    }
    .active {
      color: $themeOrange;
    }
  }
  .produce-pic:hover .produce-text{
    color: $themeOrange;
  }
  .panel-heading{
    font-size: 24px;
    // border-left: 4px solid $themeOrange;
    padding: 10px 20px;
    background: #f1f1f1;
  }
  .panel-body {
    padding: 15px 40px;
  }
  .software-wrapper {
    display: flex;
    width: 100%;
  }
  .wrapper-block {
    width: 50%;
    position: relative;
    .software-name {
      padding: 20px 0;
      font-size: 24px;
    }
    .system-name {
      font-size: 16px;
      padding-top: 20px;
      color:  $themeOrange;
      display: block;
    }
    .version-time {
      padding: 0 4px;
    }
    .download {
      margin-left: 150px;
      border: 1px solid #d5d5d5;
      padding: 6px 10px;
      cursor: pointer;
    }
    .doc-download {
      position: absolute;
      bottom: 8px;
      right: 50px;
    }
  }
  .wrapper-block:nth-child(even) {
    padding-left: 30px;
  }

	.mobile-ipad {
    margin: 10px 40px;
    img {
      width:150px;
    }
    .mobile-notes {
      padding: 6px 0;
    }
  }

}

</style>
