<template>
<!-- <ol class="breadcrumb">
  <li class="breadcrumb-item" v-link="{name:'home',params:{lang:country}}">{{langData.breadcrumb[1]}}</li>
  <li class="breadcrumb-item active">{{langData.breadcrumb[2]}}</li>
</ol>
<div class="page-wrapper">
	<div class="top-banner">
		<div class="banner-container">
			<div class="banner-left">
				<img src="/src/img/banner/uarm intro.png"/>
				<div class="banner-html">
					<button class="btn ghost-button">{{langData.shopBtn}}</button>
					<button class="btn detail-button" v-link="{name:'uarm1',params:{lang:country}}">{{langData.detail}}>></button>
				</div>
			</div>
			<div class="banner-right"><img src="/src/img/banner/uarm metal.png"/></div>
		</div>

	</div>
	<div class="bottom-container">
		<div class="title-container">{{langData.accessory}}</div>
		<div class="card-container">
			<div v-for="item in langData.productData" class="card-block" v-link="{name:'product',params:{id:item.id}}">
				<div class="card-image">
					<img v-bind:src="item.image" />
				</div>
				<div class="card-text">
					<div class="title">{{item.name}}</div>
					<div class="brief">{{item.price}}</div>
				</div>
			</div>
		</div>

	</div> -->
	<div>
	</div>
</div>

</template>
<script>
const bannerPath="/src/img/banner/";
module.exports = {
	data : function(){
		return {
			country:'cn',
			langData:{}
		}
	},
	created : function(){
		// if(this.$route.params.lang!==undefined){
		// 	this.country = this.$route.params.lang;
		// }
		// console.log("language:"+this.country)
		// var langText = {
		// 		cn:{
		// 			breadcrumb:{
		// 				1:"首页",
		// 				2:"商城",
		// 			},
		// 			shopBtn:"立即购买",
		// 			detail:"了解详情",
		// 			accessory:"配件",
		// 			productData:{
		// 				1:{
		// 					id:3,
		// 					name:"uArm Shield拓展板",
		// 					price:"￥60.00",
		// 					image:bannerPath+"extensionBoard.png"
		// 				},
		// 				2:{
		// 					id:4,
		// 					name:"电动夹子",
		// 					price:"￥335.00",
		// 					image:bannerPath+"eClincher.png"
		// 				},
		// 				3:{
		// 					id:5,
		// 					name:"通用夹具",
		// 					price:"￥118.00",
		// 					image:bannerPath+"generalKit.png"
		// 				},
		// 				4:{
		// 					id:6,
		// 					name:"舵机DM1500A",
		// 					price:"￥155.00",
		// 					image:bannerPath+"helmKit.png"
		// 				},
		// 			}
		// 		},
		// 		en:{
		// 			breadcrumb:{
		// 				1:"Home",
		// 				2:"Store",
		// 			},
		// 			shopBtn:"Buy it",
		// 			detail:"Learn more",
		// 			accessory:"Accessory",
		// 			productData:{
		// 				1:{
		// 					id:3,
		// 					name:"uArm Shield",
		// 					price:"$60.00",
		// 					image:bannerPath+"extensionBoard.png"
		// 				},
		// 				2:{
		// 					id:4,
		// 					name:"uArm Metallic Gripper",
		// 					price:"$335.00",
		// 					image:bannerPath+"eClincher.png"
		// 				},
		// 				3:{
		// 					id:5,
		// 					name:"uArm Universal Holder",
		// 					price:"$118.00",
		// 					image:bannerPath+"generalKit.png"
		// 				},
		// 				4:{
		// 					id:6,
		// 					name:"Servo DM1500A",
		// 					price:"$155.00",
		// 					image:bannerPath+"helmKit.png"
		// 				},
		// 			},
		// 		}
    //
		// 	};
			if (this.$route.params.lang === 'en') {
  			// this.langData=langText[this.$route.params.lang];
        window.location.href = "http://bit.ly/ufactory-store";
      }
      else if (this.$route.params.lang === 'cn') {
        window.location.href = "https://shop346325081.taobao.com/";
      }
  		else {
        console.log(this.$route.params.lang);
  			//this.langData=langText['cn'];
      }
	},
  	// destroyed : function(){
  	// 	clearInterval( this.handle )
  	// }
  	//components:{accordion:require('vue-strap/src/Accordion.vue')},
  	methods:{

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
.ghost-button{
	display: inline-block;
	color:white;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: $themeOrange;
	cursor: pointer;
	font-family: 'Helvetica Neue',"微软雅黑";
	transition: all 0.3s ease-out;
	-moz-transition:all 0.3s ease-out;
	-webkit-transition:all 0.3s ease-out;
	-o-transition:all 0.3s ease-out;
}
.ghost-button:hover,.ghost-button:active{
	background-color: white;
	color:$themeOrange;
	border:1px solid $themeOrange;
}
.detail-button{
	display: inline-block;
	color:$textColor;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
	border:none;
	font-family: 'Helvetica Neue',"微软雅黑";
}
.detail-button:hover{
	background-color: white;
	color:$themeOrange;
}
.page-wrapper{
	width:100%;
	.top-banner{
		width: 100%;
		background-color: white;
		.banner-container{
			margin: 0 15%;
			img{
				width: 100%;
			}
			.banner-left{
				display: inline-block;
				width: 39%;
				padding: 14% 1%;
				button{
					width: 49%;
				}
				.banner-html{
					margin: 20% 0%;
				}
			}
			.banner-right{
				display: inline-block;
				width: 60%;
				vertical-align: top;
			}
		}
	}
	.banner-container img{width:100%;}
	.bottom-container {
		background-color: #f8f8f8;
		padding: 8% 5%;
    	text-align: center;
    	.title-container{
    		text-align: left;
    		margin: 1% 7%;
    		border-left: 3px solid $themeOrange;
    		padding-left: 4px;
    	}
		.card-container {
			.card-block {
				width:20%;
				margin: 1%;
				display: inline-block;
				vertical-align: top;
				border-radius: 2px;
				position: relative;
				box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
				background-color: white;
				cursor: pointer;
				.card-text{
					margin: 5% 5%;
					white-space: nowrap;
				    overflow-x: hidden;
					.title{
						font-size: 18px;
						color: $textColor;
						font-family: "PingFang SC","Helvetica Neue","helvetica","冬青黑体简体中文 W3","Microsoft YaHei","arial","sans-serif";
						text-align: center;
					}
					.brief{
						margin: 3% 0;
						font-size: 18px;
						color:$themeOrange;
						text-align: center;
						font-family: "Helvetica Neue","helvetica","冬青黑体简体中文 W3","Microsoft YaHei","arial","sans-serif";
					}
				}
			}
			.card-block:hover{
				box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
			}
			img{
				width:100%;
			}
		}
	}


}
.main_menu{
	background-color: #ccc !important;
}
</style>
