<template>
<div class="download-wrapper">
    <div class="support-wrap">

      <div class="panel">
        <div class="panel-heading" >{{remoteData.document.title}}</div>
        <div class="panel-body userguide">
          <el-collapse v-model="activeNames.documents">
            <el-collapse-item title="uArm Swift Pro" >
              <a class="item-wrap" v-for="item in remoteData.document.pro" :href="item.link" target="_blank">
                <el-tooltip class="item" effect="dark" placement="bottom" :disabled="item.intro===undefined">
                  <div slot="content" v-html="item.intro"></div>
                  <div ><i class="fa fa-book" aria-hidden="true"></i>{{item.name}}</div>
                </el-tooltip>
                <div>
                  <el-tag type="gray" v-text="item.version"></el-tag>
                  <el-tag v-text="item.date"></el-tag>
                </div>
              </a>
            </el-collapse-item>
            <el-collapse-item title="uArm Swift">
              <a class="item-wrap" v-for="item in remoteData.document.swift" :href="item.link" target="_blank">
                <el-tooltip class="item" effect="dark" placement="bottom" :disabled="item.intro===undefined">
                  <div slot="content" v-html="item.intro"></div>
                  <div ><i class="fa fa-book" aria-hidden="true"></i>{{item.name}}</div>
                </el-tooltip>
                <div>
                  <el-tag type="gray" v-text="item.version"></el-tag>
                  <el-tag v-text="item.date"></el-tag>
                </div>
              </a>
            </el-collapse-item>
            <el-collapse-item title="uArm Metal">
              <a class="item-wrap" v-for="item in remoteData.document.metal" :href="item.link" target="_blank">
                <el-tooltip class="item" effect="dark" placement="bottom" :disabled="item.intro===undefined">
                  <div slot="content" v-html="item.intro"></div>
                  <div><i class="fa fa-book" aria-hidden="true"></i>{{item.name}}</div>
                </el-tooltip>
                <div>
                  <el-tag type="gray" v-show="item.version" v-text="item.version"></el-tag>
                  <el-tag v-text="item.date"></el-tag>
                </div>
              </a>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>

      <div class="panel">
        <div class="panel-heading">{{mobileApp.title[language]}}</div>
        <div class="mobile-notes" v-text="mobileApp.notes[language]"></div>
        <div class="panel-body mobile-app">
          <div class="mobile-ipad">
            <span v-text="mobileApp.qrcode[language]"></span>
            <div>
              <a :href="langData.uArmPlayAndroid" class="item-wrap" target="_blank">
                <div class="ghost-button"><i class="fa fa-android fa-lg" aria-hidden="true"></i><span>{{langData.download}}</span></div>
              </a>
              <a :href="langData.uArmPlayiOS" class="item-wrap" target="_blank">
                <div class="ghost-button"><i class="fa fa fa-apple fa-lg" aria-hidden="true"></i><span>{{langData.download}}</span></div>
              </a>
            </div>
          </div>
          <div class="mobile-ipad">
            <span v-text="mobileApp.qrcode_draw[language]"></span>
            <div>
              <a :href="langData.uArmDrawiPad" class="item-wrap" target="_blank">
                <div class="ghost-button"><i class="fa fa fa-apple fa-lg" aria-hidden="true"></i><span>{{langData.download}}</span></div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
</div>
</template>

<script>
const updateData = require('../../json/updates.json');
const supportData = require('../../json/supports.json');
const docData = require('../../json/documents.json');
import langText from '../../lang/support';
export default {
	data : function(){
		return {
			language:'cn',
			langData:{},
      showProduce: 'pro',
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
        notes: {
          en: 'Only for uArm Swift & uArm Swift Pro',
          cn: '仅限uArm Swift及uArm Swift Pro',
        },
        qrcode: {
          en: 'Download uArm Play(iOS/Android)',
          cn: 'uArm Play下载（iOS/安卓）',
        },
        qrcode_draw: {
          en: 'Download uArm Draw(iPad)',
          cn: 'uArm Draw下载（iPad）',
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
  	},
  	// destroyed : function(){
  	// 	clearInterval( this.handle )
  	// }
  	//components:{accordion:require('vue-strap/src/Accordion.vue')},
  components: {
  	},
  	methods:{
  		fetchData:function(){
        this.$http.get(`https://update.ufactory.cc/releases/updates.json?v=${new Date().getTime()}`).then(response => {
          const fetchData = response.data; // updateData.software;
          const osArray = ['Win', 'Mac', 'Linux'];
          osArray.forEach((os) => {
            supportData[os].swift['uArmStudio'] = {
              date: fetchData['uArmStudio'].publishDate,
              name: fetchData['uArmStudio'].name,
              version: fetchData['uArmStudio'].version,
              link: fetchData['uArmStudio'].url[os],
              intro: fetchData['uArmStudio'].introduction,
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
        this.showProduce = v;
        this.showNum = n;
      },
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
<style  lang="sass" scoped>
$themeOrange: #E27347;
.ghost-button{
	display: inline-block;
	padding: 5px;
	color: $themeOrange;
	border: 1px solid $themeOrange;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
}
.download-wrapper{
	width: 100%;
	display: inline-block;
	padding-top: 70px;
  }
.support-wrap{
	background-color: white;
  .panel-heading{
    font-size: 25px;
    border-left: 4px solid $themeOrange;
    padding: 0 2%;
  }
	.el-collapse-item__header{
		font-size: 25px;
		border-left: 4px solid $themeOrange;
		padding: 0 2%;
	}
	.el-collapse-item__content{
		padding: 5%;
    display: flex;
    flex-direction: inherit;
    align-items: inherit;
    flex-wrap: wrap;
    .el-collapse {
      width: 100%;
    }
    .item-wrap{
			width: 100%;
    	padding: 0;
    	font-size: 14px;
			text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $themeOrange;
		}

	}
  .userguide{
    .item-wrap{
      text-align: left;
      width: 100%;
      padding: 20px 0;
      border-bottom: 1px solid #eee;
      i{
        padding-right: 2%;
      }
      .el-tooltip.item {
        width: 50%;
      }
    }
  }
  .mobile-notes{
    text-align: left;
    font-size: 90%;
    padding-top: 10px;
    padding-left: 5%;
  }
  .mobile-app{
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .mobile-ipad {
      border: 1px solid #e4e4e4;
      box-shadow: 1px 2px 3px #e4e4e3;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 20px 0;
      img{
        width: 140px;
        padding: 20px;
      }
    }
    a {
      margin: 10px;
      display: inline-block;
      div{
        padding: 10px 20px;
      }
      span {
        padding-left: 10px;
      }
    }
  }
}

</style>
