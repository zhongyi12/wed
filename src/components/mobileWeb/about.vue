<template>
<div style="padding-top: 50px;">
<div class="section1 section" id="about">
	<img src="../assets/img/mobile-web/about.jpg">
	<div class="about-block">
		<div class="block-intro">
			<div class="title">{{langData.aboutUs}}</div>
			<div class="content">
				<p>{{langData.aboutText[1]}}</p>
				<p>{{langData.aboutText[2]}}</p>
				<p>{{langData.aboutText[3]}}</p>
			</div>
		</div>
	</div>
</div>
<div class="section">
	<div class="about-block">
		<div class="block-intro">
			<div class="title">{{langData.aboutHistory}}</div>
			<div class="content">
				<timeline :language="$route.params.lang"></timeline>
				<!-- <img v-bind:src="langData.historyImg"> -->
			</div>
		</div>
	</div>
</div>
<div class="section" id="recruit">
	<div class="about-block">
		<div class="block-intro">
			<div class="title">{{langData.aboutPosition}}</div>
			<div class="content">
				<el-collapse v-model="activeName" accordion>
				  <el-collapse-item :title="item.positionName" :name="index" v-for="(item,index) in langData.positionItems" :key="index">
						<div class="subtitle">{{langData.positionWork}}</div>
				    <div class="subcontent">
				    	<ul>
				    		<li v-for="li in item.positionWorkItems">{{li}}</li>
				    	</ul>
				    </div>
				    <div class="subtitle">{{langData.positionRequire}}</div>
				    <div class="subcontent">
				    	<ul>
				    		<li v-for="li in item.positionRequireItems">{{li}}</li>
				    	</ul>
				    </div>
				  </el-collapse-item>
				</el-collapse>
			</div>
			<div>{{langData.sendEmailText}}&nbsp;<a href="mailto:hr@ufactory.cc">hr@ufactory.cc</a></div>
		</div>

	</div>
</div>
<div class="section" id="contact">
	<div class="about-block">
		<div class="block-intro">
			<div class="title">{{langData.aboutContact}}</div>
			<div class="content">
				<div class="content-box">
					<router-link :to="{name: 'question', params:{module:'technology'}}" target="_blank">
						<span><i class="fa fa-commenting fa-1x" aria-hidden="true"></i></span>
						<span>{{langData.btnContact}}</span>
					</router-link>
					<a href="mailto:info@ufactory.cc">
						<span><i class="fa fa-envelope fa-1x" aria-hidden="true"></i></span>
						<span>info@ufactory.cc</span>
					</a>
					<a>
						<span><i class="fa fa-phone fa-1x" aria-hidden="true"></i></span>
						<span><img style="width: 115px;" src="../assets/img/about/phone.svg"></span>
					</a>
					<a :href="langData.addressURL">
						<span><i class="fa fa-map-marker fa-1x" aria-hidden="true"></i></span>
						<span v-html="langData.aboutAddress"></span>
					</a>
				</div>

			</div>
			<div class="content">
				<img src="../assets/img/about/ufmap.png">
			</div>
		</div>

	</div>
</div>
</div>
<!-- {{$route.params.lang}} and {{lang}} -->
</template>

<script>
const Vue = require('vue');
// const VueBlu = require('vue-blu') test
// Vue.use(VueBlu)
// var $ = require('jquery');
const timeline = require('./timeline.vue');
import langText from '../../lang/about';
export default {
  	data : function(){
  		return {
  			langData:{},
  			lang:"",
				activeName: '1',
  		}
  	},
    created : function(){
      if(this.$route.params.lang=='en' || this.$route.params.lang=='cn')
        this.langData=langText[this.$route.params.lang];
      else
        this.langData=langText['cn'];
    },
    mounted : function(){
//    		console.log(this.$route.params.position)
      let target = document.getElementById(this.$route.params.position);
      if (window.scrollTo) {
          window.scrollTo(0,target.offsetTop);
      }
    },
    watch:{
      '$route.params.position':function(){
        let target = document.getElementById(this.$route.params.position);
        if (window.scrollTo) {
            window.scrollTo(0,target.offsetTop);
        }
      }
    },
    components:{
      timeline
    },
    methods:{
    }
  }
</script>
<style  lang="sass" scoped>
  $themeOrange: #E27347;
.ghost-button{
	display: inline-block;
	color:$themeOrange;
	border:1px solid $themeOrange;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
	font-family: 'Helvetica Neue',"微软雅黑";
	transition: all 0.3s ease-out;
	-moz-transition:all 0.3s ease-out;
	-webkit-transition:all 0.3s ease-out;
	-o-transition:all 0.3s ease-out;
}
.ghost-button:hover,.ghost-button:active{
	background-color: $themeOrange;
	color:white;
	border:1px solid white;
}
.section1{
  padding-top:0 !important;
}
.section{
	width: 100%;
	color:#3c3c3c;
	padding-top: 6%;
	img{
		width: 100%;
	}
	.about-block{
		margin: 2%;
		.block-intro{
			width: 100%;
			text-align: center;
			.title{
				font-size:25px;
				border-left: 4px solid $themeOrange;
				border-right: 4px solid $themeOrange;
				padding: 0% 2%;
        display: inline-block;
        margin: 4%;
			}
			.content{
				padding-bottom:5%;
				p{
					margin: 1%;
					font-size: 13px;
					text-align: left;
					color: #848484;
				}
        .content-box{
          display: flex;
          flex-direction: column;
          padding: 0 20px;
          a{
            display: flex;
            align-items: flex-start;
            text-align: left;
            span{
              font-size: 13px;
            }
          }
        }
			}
		}
	}
}
.el-collapse-item{
	text-align: left;
	.panel-heading{
		color: $themeOrange ;
	}
	.subtitle{
		color: $themeOrange;
	}
	.subcontent{
		margin-left: 3%;
	}
	li{
		list-style: disc;
		padding: 1%;
	}
}

</style>
