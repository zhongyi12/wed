<template>
<div class="question-page-wrapper">
    <div class="page-wrapper">
        <div class="question-wrap">
        	<div class="question-anwser" v-show="showData == 'purchase'" id="purchase">
        	  <h3 class="title">{{ langData.breadcrumb[2] }}</h3>
            <div class="produce-box">
              <el-collapse>
                <el-collapse-item v-for="(item, index) in langData[1]" :title="item.qtext" :name="index" :key="index">
                  <div v-html="item.atext"></div>
                </el-collapse-item>
              </el-collapse>
            </div>
        	</div>
					<div class="question-anwser" v-show="showData == 'technology'" id="technology">
            <h3 class="title">{{ langData.breadcrumb[3] }}</h3>
            <div class="produce-wrap">
              <div class="produce-pic"  @click="getProduceQus('pro')">
                <span class="produce-text" :class="{'active':showProduce == 'pro'}">{{ tabProduce.pro.text }}
                  <span :class="{'el-icon-caret-bottom':showProduce == 'pro'}"></span>
                </span>
                <img :class="{'scale-img':showProduce == 'pro'}" :src="tabProduce.pro.pic"/>
              </div>
              <div class="produce-box" v-show="showProduce == 'pro'">
                <el-collapse>
                  <el-collapse-item v-for="(item, index) in langData['pro']" :title="item.qtext" :name="index" :key="index">
                    <div v-html="item.atext"></div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
            <div class="produce-wrap">
              <div class="produce-pic"  @click="getProduceQus('swift')">
                <span class="produce-text" :class="{'active':showProduce == 'swift'}">{{ tabProduce.swift.text }}
                  <span :class="{'el-icon-caret-bottom':showProduce == 'swift'}"></span>
                </span>
                <img :class="{'scale-img':showProduce == 'swift'}" :src="tabProduce.swift.pic"/>
              </div>
              <div class="produce-box" v-show="showProduce == 'swift'">
                <el-collapse>
                  <el-collapse-item v-for="(item, index) in langData['swift']" :title="item.qtext" :name="index" :key="index">
                    <div v-html="item.atext"></div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
            <div class="produce-wrap">
              <div class="produce-pic"  @click="getProduceQus('metal')">
                <span class="produce-text" :class="{'active':showProduce == 'metal'}">{{ tabProduce.metal.text }}
                  <span :class="{'el-icon-caret-bottom':showProduce == 'metal'}"></span>
                </span>
                <img :class="{'scale-img':showProduce == 'metal'}" :src="tabProduce.metal.pic"/>
              </div>
              <div class="produce-box" v-show="showProduce == 'metal'">
                <el-collapse>
                  <el-collapse-item v-for="(item, index) in langData['metal']" :title="item.qtext" :name="index" :key="index">
                    <div v-html="item.atext"></div>
                    <div class="anwser-text" v-if="item.btext" v-for="(bitem, bIndex) in item.btext" :key="bIndex">
                      <div v-html="bitem"></div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
        	</div>

          <div class="cooperation-wrap" v-show="showData =='policy'" id="policy">
            <h3 class="title">{{ langData.breadcrumb[5] }}</h3>
            <el-collapse>
              <el-collapse-item v-for="(item, index) in afterSalesPolicies.generalItems" :title="item.title" :name="item.name" :key="index">
                <div v-for="(value, valueIndex) in item.content" :key="valueIndex">
                  <ul class="collapse-list">
                    <li v-for="(content_list, index2) in item.content" :key="index2" v-html="content_list"></li>
                  </ul>
                </div>
              </el-collapse-item>
            </el-collapse>
              <div>
                <h3 style="font-size: 14px;font-weight: 600;padding-bottom: 20px;padding-left: 20px;">{{ afterSalesPolicies.productItemstitle }}</h3>
                <div v-for="(content, index) in afterSalesPolicies.productItems" style="display: flex;text-align: center; font-size: 13px;">
                    <div style="width: 30vw; padding: 10px 0;display: flex;align-items:center;border-bottom: 1px solid gray;justify-content: center;">{{ index }}</div>
                    <ul style="width: 70vw;">
                      <li v-for="(item, index2) in content" style="width: 100%;">
                        <span style="width: 50%;padding: 10px 0; display: inline-block;border-bottom: 1px solid gray;border-left:1px solid gray;border-right:1px solid gray;margin-right: -4px;">{{ index2 }}</span>
                        <span style="width: 50%;padding: 10px 0;display: inline-block;border-bottom: 1px solid gray;">{{ item }}</span>
                      </li>
                    </ul>
                </div>
              </div>

          </div>
          <div class="text-center h1">
            <a @click="goTicketCn()" v-if="$route.params.lang == 'cn'"><button class="btn ghost-button">{{langData.btnContact}}</button></a>
            <a @click="goTicketEn()" v-else><button class="btn ghost-button">{{langData.btnContact}}</button></a>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import setting from '../../config';
import evenBus from './module/eventBus.js';
import langText from '../../lang/question';
import afterSalesPolicies from '../../json/afterSalesPolicies';
export default {
	data(){
		return {
			country:'cn',
      langData: {},
      showData: null,
      showProduce: 'pro',
      showAftersales: '1',
      tabProduce: {
        pro: {
          pic: require('../assets/img/mobile-web/support/mobile_banner_pro.jpg'),
          text: 'uArm Swift Pro'
        },
        swift: {
          pic: require('../assets/img/mobile-web/support/mobile_banner_swift.jpg'),
          text: 'uArm Swift'
        },
        metal: {
          pic: require('../assets/img/mobile-web/support/mobile_banner_metal.jpg'),
          text: 'uArm Metal'
        }
    },
  }
},
mounted(){
  window.scrollTo(0, 0);
  this.showData = this.$route.params.module;
//    this.getParams();
},
// ready : function(){
// 	var _this = this;
//    	console.log(11)
// 	this.handle = setInterval(function(){
// 		_this.count++;
// 	},1e3 );
// },
// destroyed : function(){
// 	clearInterval( this.handle )
// }
created : function(){
if(this.$route.params.lang=='en' || this.$route.params.lang=='cn'){
    this.langData=langText[this.$route.params.lang];
    this.afterSalesPolicies = afterSalesPolicies[this.$route.params.lang];
  }	else {
    this.langData=langText['cn'];
     this.afterSalesPolicies = afterSalesPolicies['cn'];
  }

	},
	methods:{
		getProduceQus : function(qname){
			this.showProduce = qname;
		},
    getQuestion: function(v){
      this.showAftersales = v;
    },
//    getParams() {
//      let routerParams = this.$route.params.module;                 // 取到路由带过来的参数
//      this.showData = routerParams;
//      console.log("监听", this.showData);                               // 将数据放在当前组件的数据内
//    },
    goTicketCn(){
      window.open(`${setting.SUPPORT_URL.cn}${this.getParams}`);
//      this.$router.push({
//        name: 'ticket',
//        params:{
//          lang:this.$route.params.lang,
//          type:this.getParams,
//        }
//      })
    },
    goTicketEn(){
      window.open(`${setting.SUPPORT_URL.en}${this.getParams}`);
    }
	},
	computed:{
    getParams(){
      return this.showData = this.$route.params.module;
    }
	},
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件
    $route: function(val,oldval){
//      console.log("计算监听",this.getParams);
      this.getParams;
    },
    '$route.params.module':function(){
      let target = document.getElementById(this.$route.params.module);
      if (window.scrollTo) {
        window.scrollTo(0,target.offsetTop);
      }
    }
  }
}
</script>
<style lang="sass" scoped>
 $themeOrange: #E27347;
 .question-page-wrapper {
  padding: 50px 0 20px;
 }
.ghost-button{
	display: inline-block;
	color: $themeOrange;
	border: 1px solid $themeOrange;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
	font-family: 'Helvetica Neue',"微软雅黑";
	transition: all 0.3s ease-out;
}
.ghost-button:hover,.ghost-button:active{
	background-color: $themeOrange;
	color: white;
	border: 1px solid white;
}
 .breadcrumb{
   margin-bottom:0;
     >.active {
       color: $themeOrange;
   }
 }
.page-wrapper{
	width: 100%;
	display: inline-block;
  color: #727272;
    .title {
      border-left: 2px solid $themeOrange;
      padding-left: 4px;
      font-size: 18px;
      margin: 20px;
    }
	}
 .question-anwser{
   vertical-align: top;
   width: 100%;
   ul {
     padding-left: 15px;
   }
   li{
     list-style: decimal;
     padding-top: 1%;
     .anwser-text{
       color: $themeOrange;
         li{
           list-style-type: disc;
       }
         a{
           color: $themeOrange;
       }
   }
 }
   li:hover{
     background-color:#fafafa;
 }

 }
.question-anwser {
  .produce-wrap {
    width: 100%;
    .produce-pic {
      text-align: center;
      img {
        width: 40%;
        transition: all 1s ease;
      }
    }
    .produce-text {
      font-size: 18px;
      display: inline-block;
      width: 42%;
    }
    .el-icon-caret-bottom {
      font-size: 14px;
  }
    .active {
      color: $themeOrange;
    }
  }
  .produce-pic:hover .produce-text {
    color: $themeOrange;
  }
}
	.collapse-list {
	  padding-left: 15px;
    li {
      list-style: disc;
    }
	}
</style>
