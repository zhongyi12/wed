<template>
<div >
    <ol class="breadcrumb">
      <li class="breadcrumb-item" ><router-link :to="{name:'app',params:{lang:language}}">{{langData.breadcrumb[1]}}</router-link></li>
      <li class="breadcrumb-item active">{{langData.breadcrumb[2]}}</li>
    </ol>
    <!-- <i v-if="osName=='mac'" class="fa fa-apple"></i>
    <i v-else-if="osName=='windows'" class="fa fa-windows"></i>
    <i v-else-if="osName=='linux'" class="fa fa-linux"></i> -->
    <div class="page-wrapper">
      <div class="support-wrap panel">
        <div class="panel-heading" id="user-guide">{{remoteData.document.title}}</div>
        <div class="panel-body userguide">
          <el-collapse v-model="activeNames.documents">
            <el-collapse-item title="uArm Swift & uArm Swift Pro" name="1">
              <a class="item-wrap" v-for="item in remoteData.document.swiftlist" :href="item.link" target="_blank">
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
            <el-collapse-item title="uArm Metal" name="2">
              <a class="item-wrap" v-for="item in remoteData.document.metallist" :href="item.link" target="_blank">
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
    </div>
</div>
</template>

<script>
const docData = require('../../json/documents.json');
import langText from '../../lang/document';
export default {
	data : function(){
		return {
			language:'cn',
			langData:{},
			remoteData:{
        software:{},
      },
      swiftLink:{},
      activeNames:{
        software: ['1', '2', '3'],
        documents: ['1', '2'],
        softwareTab: 'window',
      },
		}
	},
	created : function(){
		if(navigator.platform.indexOf('Mac')>-1)
			this.activeNames.softwareTab='mac';
		else if(navigator.platform.indexOf('Win')>-1)
			this.activeNames.softwareTab='win';
		else if(navigator.platform.indexOf('Linux')>-1)
			this.activeNames.softwareTab='linux';
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
  methods:{
    toggleModal:function(){
      this.showModal = !this.showModal;
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
<style  lang="sass" scoped>
  $themeOrange: #E27347;
.breadcrumb{
	margin-bottom:0;
}
.page-wrapper{
	background-color: #f8f8f8;
	width: 100%;
	display: inline-block;
  }
.support-wrap{
	margin: 1% 7%;
	padding: 5%;
	background-color: white;
  .panel-heading{
    font-size: 25px;
    border-left: 4px solid #D95E2E;
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
    	padding: 2%;
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
      margin: 0;
      padding: 2%;
      border-bottom: 1px solid #eee;
      i{
        padding-right: 2%;
      }
      .el-tooltip.item {
        width: 50%;
      }
    }
    .item-wrap:hover, .item-wrap:active{
      background-color: $themeOrange;
      color:#fff;
      border: none;
    }
  }
}
</style>
