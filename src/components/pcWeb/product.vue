<template>
<ol class="breadcrumb">
  <li class="breadcrumb-item" v-link="{name:'home',params:{lang:country}}">{{langData.breadcrumb[1]}}</li>
  <li class="breadcrumb-item" v-link="{name:'store',params:{lang:country}}">{{langData.breadcrumb[2]}}</li>
  <li class="breadcrumb-item active">{{langData.productData.name}}</li>
</ol>
<div class="page-wrapper">

	<div class="top-banner">
		<div class="banner-container">
			<div class="banner-left">
				<img v-bind:src="langData.productData.preview"/>
				<div class="thumb-wrapper">
					<div v-for="item in langData.productData.image" v-bind:class="['thumb-img', item==langData.productData.preview?'active':'']" v-on:click="showPreview(item)">
						<img v-bind:src="item">
					</div>
				</div>
			</div>
			<div class="banner-right">
				<div class="product-name">{{langData.productData.name}}</div>
				<div class="product-brief">{{langData.productData.brief}}</div>
				<div class="product-price">{{langData.currency}}{{langData.productData.price}}</div>
				<div class="quantity">
					<div class="quantity-text">{{langData.quantity}}</div>
					<div class="input-group">
				      <span class="input-group-addon glyphicon glyphicon-minus" v-on:click="downQuatity()" aria-hidden="true"></span>
				      <input type="number" class="form-control" placeholder="1" v-model="count" number >
				      <span class="input-group-addon glyphicon glyphicon-plus" v-on:click="upQuatity()" aria-hidden="true"></span>
				    </div><!-- /input-group -->
				</div>
				<div class="payment-price">
					<div class="order-price-text">{{langData.sumPrice}}</div>
					<div class="order-price">{{langData.currency}}{{langData.productData.price*count}}</div>
				</div>
				<div class="button-wrapper">
					<button class="btn ghost-button" v-on:click="addToCart()">{{langData.addToCart}}</button>
					<button class="btn buy-button">{{langData.shopBtn}}</button>
				</div>
			</div>
		</div>

	</div>
	<div class="bottom-container">
		<tabs>
		  <tab v-bind:header="langData.productIntro">
		  	<div class="intro-text">{{langData.productData.intro.text}}</div>
		  	<div class="intro-img" v-for="img in langData.productData.intro.picture">
		  		<img v-bind:src="img">
		  	</div>
		  </tab>
		  <tab v-bind:header="langData.productDetail">
		  	<table class="table intro-text">
		  		<tr v-for="item in langData.productData.detail">
		  			<td>{{item.specName}}</td>
		  			<td>{{item.specVal}}</td>
		  		</tr>
		  	</table>
		  </tab>
		  <tab v-bind:header="langData.productGuide" >
		  	<div class="intro-text">{{langData.productData.guide}}</div>
		  </tab>
		</tabs>
	</div>
	<div>
	<!-- <p>当前路径: {{$route.path}}</p>
	<p>当前路由参数: {{$route.params | json}}</p> -->
	</div>
</div>

</template>
<script>
// var Jquery = require('jquery');
// Jquery(".info_tittle").hide()
var productImagePath = "/src/img/product/";
var productImageIntroPath = "/src/img/productintro/";
var tabset = require('vue-strap').tabset;
var tabGroup = require('vue-strap').tabGroup;
var tab = require('vue-strap').tab;
//var jsonProduct = require("/src/json/product.json");
module.exports = {
	data : function(){
		return {
			country:'cn',
			productID: 1,
			langData:{},
			count:1
		}
	},
	created : function(){
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
		if(this.$route.params.id!==undefined){
			this.productID = this.$route.params.id;
		}
		//console.log("language:"+this.country)
		var productList = {
				cn:{
					3:{
						name:"uArm Shield拓展板",
						price:"60.00",
						brief:"标准的Arduino主板设计，通过uArm扩展板Shield控制机械臂可以完成更多有趣的场景",
						preview:productImagePath+"扩展板1.jpg",
						image:{
							1:productImagePath+"扩展板1.jpg",
							2:productImagePath+"扩展板2.jpg",
							3:productImagePath+"扩展板3.jpg"
						},
						intro:{
							text:"uArm Shield 扩展板为标准的Arduino主板设计，扩展后可以完美的配合uArm机械臂的伺服电机uArm Servo，电动夹子uArm Metallic Gripper以及真空吸泵uArm Vacuum Gripper System，通过uArm扩展板Shield控制机械臂可以完成更多有趣的场景。",
							picture:{
								1:productImageIntroPath+"shield1.png"
							}
						},
						detail:{
							1:{
								specName:"重量",
								specVal:"25g"
							},
							2:{
								specName:"电压",
								specVal:"5v-10v"
							}
						},
						guide:"物流单笔订单满1000元即包邮,默认快递邮费20元,顺丰30元(如需，请备注)。另该配件为uArm定制配件，两者完全兼容。本配件不建议用户单独购买，以免出现不兼容",

					},
					4:{
						name:"电动夹子",
						price:"335.00",
						brief:"电动夹子uArm Metallic Gripper采用电平信号electrical level controlled，可以与uArm Metal标准版机械臂无缝对接",
						preview:productImagePath+"电动夹子1.JPG",
						image:{
							1:productImagePath+"电动夹子1.JPG",
							2:productImagePath+"电动夹子2.JPG",
							3:productImagePath+"电动夹子3.JPG",
							4:productImagePath+"电动夹子4.JPG"
						},
						intro:{
							text:"电动夹子uArm Metallic Gripper采用电平信号electrical level controlled，可以与uArm Metal标准版机械臂无缝对接。",
							picture:{
								1:productImageIntroPath+"gripper1.png",
								2:productImageIntroPath+"gripper2.png",
								3:productImageIntroPath+"gripper3.png",
							}
						},
						detail:{
							0:{specName:"尺寸",specVal:"92*50*18 mm"},
							1:{specName:"重量",specVal:"58g"},
							2:{specName:"电压范围",specVal:"5V-7V"},
							3:{specName:"材质",specVal:"铝合金"},
							4:{specName:"伸展范围",specVal:"0mm-25mm"},
							5:{specName:"工作电流",specVal:"430mA"},
							6:{specName:"静态电流",specVal:"10mA"},
							7:{specName:"功能",specVal:"电流检测，温度检测"}
						},
						guide:"物流单笔订单满1000元即包邮,默认快递邮费20元,顺丰30元(如需，请备注)。另该配件为uArm定制配件，两者完全兼容。本配件不建议用户单独购买，以免出现不兼容",

					},
					5:{
						name:"通用夹具",
						price:"118.00",
						brief:"通用金属夹具uArm Metallic Universal Holder非常易于上手使用，结构紧凑精致，不仅仅是笔夹，也能与uArm Metal机械臂无缝对接，可成为视觉支架，3D打印，激光切割，PCB电焊各种项目的得力助手",
						preview:productImagePath+"通用夹具1.jpg",
						image:{
							1:productImagePath+"通用夹具1.jpg",
							2:productImagePath+"通用夹具2.jpg",
							3:productImagePath+"通用夹具3.jpg",
							4:productImagePath+"通用夹具4.jpg",
						},
						intro:{
							text:"通用金属夹具uArm Metallic Universal Holder非常易于上手使用，结构紧凑精致，不仅仅是笔夹，也能与uArm Metal机械臂无缝对接，可成为视觉支架，3D打印，激光切割，PCB电焊各种项目的得力助手。",
							picture:{
								1:productImageIntroPath+"holder1.png",
								2:productImageIntroPath+"holder2.png",
							}
						},
						detail:{
							1:{
								specName:"重量",
								specVal:"36g"
							},
							2:{
								specName:"尺寸",
								specVal:"62*25*15mm"
							}
						},
						guide:"物流单笔订单满1000元即包邮,默认快递邮费20元,顺丰30元(如需，请备注)。另该配件为uArm定制配件，两者完全兼容。本配件不建议用户单独购买，以免出现不兼容",

					},
					6:{
						name:"舵机DM1500A",
						price:"115.00",
						brief:"DM1500A 是一款由UFACTORY团队经过数次迭代，甄选出的高性价比，高力矩舵机。本款舵机经过内部结构改进而大幅提升寿命及力量，使用范围大大增加。特殊定制的4pin导线，相比传统舵机多出了一条位置反馈线，用以传输电机位置；内嵌的温度与过流保护设计，使得舵机在大部分使用情况下都不会烧坏",
						preview:productImagePath+"舵机1.JPG",
						image:{
							1:productImagePath+"舵机1.jpg",
							2:productImagePath+"舵机2.jpg",
							3:productImagePath+"舵机3.jpg"
						},
						intro:{
							text:"DM1500A 是一款由UFACTORY团队经过数次迭代，甄选出的高性价比，高力矩舵机。本款舵机经过内部结构改进而大幅提升寿命及力量，使用范围大大增加。特殊定制的4pin导线，相比传统舵机多出了一条位置反馈线，用以传输电机位置；内嵌的温度与过流保护设计，使得舵机在大部分使用情况下都不会烧坏。精度高达±0.5°，12kg.cm高力矩，内置温度传感器实时保护电机，如若电流达到峰值，过流保护装置将会自动启动断电，启动保护功能，设计4pin导线，可以获知舵机当前所在位置。",
							picture:{
								1:productImageIntroPath+"actuator1.png",
							}
						},
						detail:{
							0:{specName:"尺寸",specVal:"40*20*38 mm"},
							1:{specName:"重量",specVal:"56g"},
							8:{specName:"轴承",specVal:"2BB"},
							9:{specName:"出力轴",specVal:"25T"},
							10:{specName:"摆臂",specVal:"POM"},
							11:{specName:"外壳",specVal:"Engineering plastics Polyamide"},
							12:{specName:"舵机线",specVal:"300mm±5mm"},
							13:{specName:"马达",specVal:"DC motor"},
							2:{specName:"工作电压",specVal:"4.8V"},
							3:{specName:"静态电流",specVal:"5mA"},
							4:{specName:"空载转速",specVal:"0.27sec/60°"},
							5:{specName:"空载电流",specVal:"500mA"},
							6:{specName:"堵转扭矩",specVal:"12kg.cm"},
							7:{specName:"堵转电流",specVal:"1500Ma"}
						},
						guide:"物流单笔订单满1000元即包邮,默认快递邮费20元,顺丰30元(如需，请备注)。另该配件为uArm定制配件，两者完全兼容。本配件不建议用户单独购买，以免出现不兼容",

					},
				},
				en:{
					3:{
						name:"uArm Shield拓展板",
						price:"60.00",
						brief:"标准的Arduino主板设计，通过uArm扩展板Shield控制机械臂可以完成更多有趣的场景",
						preview:productImagePath+"扩展板1.jpg",
						image:{
							1:productImagePath+"扩展板1.jpg",
							2:productImagePath+"扩展板2.jpg",
							3:productImagePath+"扩展板3.jpg"
						},
						intro:{
							text:"uArm Shield 扩展板为标准的Arduino主板设计，扩展后可以完美的配合uArm机械臂的伺服电机uArm Servo，电动夹子uArm Metallic Gripper以及真空吸泵uArm Vacuum Gripper System，通过uArm扩展板Shield控制机械臂可以完成更多有趣的场景。",
							picture:{
								1:productImageIntroPath+"shield1.png"
							}
						},
						detail:{
							1:{
								specName:"重量",
								specVal:"25g"
							},
							2:{
								specName:"电压",
								specVal:"5v-10v"
							}
						},
						guide:"物流单笔订单满1000元即包邮,默认快递邮费20元,顺丰30元(如需，请备注)。另该配件为uArm定制配件，两者完全兼容。本配件不建议用户单独购买，以免出现不兼容",

					},
					4:{
						name:"电动夹子",
						price:"335.00",
						brief:"电动夹子uArm Metallic Gripper采用电平信号electrical level controlled，可以与uArm Metal标准版机械臂无缝对接",
						preview:productImagePath+"电动夹子1.JPG",
						image:{
							1:productImagePath+"电动夹子1.JPG",
							2:productImagePath+"电动夹子2.JPG",
							3:productImagePath+"电动夹子3.JPG",
							4:productImagePath+"电动夹子4.JPG"
						},
						intro:{
							text:"电动夹子uArm Metallic Gripper采用电平信号electrical level controlled，可以与uArm Metal标准版机械臂无缝对接。",
							picture:{
								1:productImageIntroPath+"gripper1.png",
								2:productImageIntroPath+"gripper2.png",
								3:productImageIntroPath+"gripper3.png",
							}
						},
						detail:{
							0:{specName:"尺寸",specVal:"92*50*18 mm"},
							1:{specName:"重量",specVal:"58g"},
							2:{specName:"电压范围",specVal:"5V-7V"},
							3:{specName:"材质",specVal:"铝合金"},
							4:{specName:"伸展范围",specVal:"0mm-25mm"},
							5:{specName:"工作电流",specVal:"430mA"},
							6:{specName:"静态电流",specVal:"10mA"},
							7:{specName:"功能",specVal:"电流检测，温度检测"}
						},
						guide:"物流单笔订单满1000元即包邮,默认快递邮费20元,顺丰30元(如需，请备注)。另该配件为uArm定制配件，两者完全兼容。本配件不建议用户单独购买，以免出现不兼容",

					},
					5:{
						name:"通用夹具",
						price:"118.00",
						brief:"通用金属夹具uArm Metallic Universal Holder非常易于上手使用，结构紧凑精致，不仅仅是笔夹，也能与uArm Metal机械臂无缝对接，可成为视觉支架，3D打印，激光切割，PCB电焊各种项目的得力助手",
						preview:productImagePath+"通用夹具1.jpg",
						image:{
							1:productImagePath+"通用夹具1.jpg",
							2:productImagePath+"通用夹具2.jpg",
							3:productImagePath+"通用夹具3.jpg",
							4:productImagePath+"通用夹具4.jpg",
						},
						intro:{
							text:"通用金属夹具uArm Metallic Universal Holder非常易于上手使用，结构紧凑精致，不仅仅是笔夹，也能与uArm Metal机械臂无缝对接，可成为视觉支架，3D打印，激光切割，PCB电焊各种项目的得力助手。",
							picture:{
								1:productImageIntroPath+"holder1.png",
								2:productImageIntroPath+"holder2.png",
							}
						},
						detail:{
							1:{
								specName:"重量",
								specVal:"36g"
							},
							2:{
								specName:"尺寸",
								specVal:"62*25*15mm"
							}
						},
						guide:"物流单笔订单满1000元即包邮,默认快递邮费20元,顺丰30元(如需，请备注)。另该配件为uArm定制配件，两者完全兼容。本配件不建议用户单独购买，以免出现不兼容",

					},
					6:{
						name:"舵机DM1500A",
						price:"115.00",
						brief:"DM1500A 是一款由UFACTORY团队经过数次迭代，甄选出的高性价比，高力矩舵机。本款舵机经过内部结构改进而大幅提升寿命及力量，使用范围大大增加。特殊定制的4pin导线，相比传统舵机多出了一条位置反馈线，用以传输电机位置；内嵌的温度与过流保护设计，使得舵机在大部分使用情况下都不会烧坏",
						preview:productImagePath+"舵机1.JPG",
						image:{
							1:productImagePath+"舵机1.jpg",
							2:productImagePath+"舵机2.jpg",
							3:productImagePath+"舵机3.jpg"
						},
						intro:{
							text:"DM1500A 是一款由UFACTORY团队经过数次迭代，甄选出的高性价比，高力矩舵机。本款舵机经过内部结构改进而大幅提升寿命及力量，使用范围大大增加。特殊定制的4pin导线，相比传统舵机多出了一条位置反馈线，用以传输电机位置；内嵌的温度与过流保护设计，使得舵机在大部分使用情况下都不会烧坏。精度高达±0.5°，12kg.cm高力矩，内置温度传感器实时保护电机，如若电流达到峰值，过流保护装置将会自动启动断电，启动保护功能，设计4pin导线，可以获知舵机当前所在位置。",
							picture:{
								1:productImageIntroPath+"actuator1.png",
							}
						},
						detail:{
							0:{specName:"尺寸",specVal:"40*20*38 mm"},
							1:{specName:"重量",specVal:"56g"},
							8:{specName:"轴承",specVal:"2BB"},
							9:{specName:"出力轴",specVal:"25T"},
							10:{specName:"摆臂",specVal:"POM"},
							11:{specName:"外壳",specVal:"Engineering plastics Polyamide"},
							12:{specName:"舵机线",specVal:"300mm±5mm"},
							13:{specName:"马达",specVal:"DC motor"},
							2:{specName:"工作电压",specVal:"4.8V"},
							3:{specName:"静态电流",specVal:"5mA"},
							4:{specName:"空载转速",specVal:"0.27sec/60°"},
							5:{specName:"空载电流",specVal:"500mA"},
							6:{specName:"堵转扭矩",specVal:"12kg.cm"},
							7:{specName:"堵转电流",specVal:"1500Ma"}
						},
						guide:"物流单笔订单满1000元即包邮,默认快递邮费20元,顺丰30元(如需，请备注)。另该配件为uArm定制配件，两者完全兼容。本配件不建议用户单独购买，以免出现不兼容",

					},
				}
		}
		var langText = {
				cn:{
					breadcrumb:{
						1:"首页",
						2:"商城",
					},
					shopBtn:"立即购买",
					addToCart:"加入购物车",
					accessory:"配件",
					quantity:"数量",
					sumPrice:"总价",
					currency:"￥",
					productIntro:"产品详情",
					productDetail:"技术参数",
					productGuide:"购买须知",
					productData:{
						name:"uArm Shield拓展板",
						price:"60.00",
						brief:"无法获取信息",
						preview:productImagePath+"extensionBoard.png",
						image:{
							1:productImagePath+"extensionBoard.png",
							2:productImagePath+"extensionBoard.png",
							3:productImagePath+"extensionBoard.png"
						}
					}
				},
				en:{
					breadcrumb:{
						1:"Home",
						2:"Store",
					},
					shopBtn:"Buy it",
					detail:"Learn more",
					accessory:"Accessory",
					quantity:"数量",
					sumPrice:"总价",
					currency:"$",
					productIntro:"产品详情",
					productDetail:"技术参数",
					productGuide:"购买须知",
					productData:{
						name:"uArm Shield拓展板",
						price:"60.00",
						brief:"无法获取信息",
						preview:productImagePath+"extensionBoard.png",
						image:{
							1:productImagePath+"extensionBoard.png",
							2:productImagePath+"extensionBoard.png",
							3:productImagePath+"extensionBoard.png"
						}
					}
				}

			};
			if(this.$route.params.lang=='en' || this.$route.params.lang=='cn'){
				this.langData=langText[this.$route.params.lang];
				if(this.$route.params.id!==undefined && productList[this.$route.params.lang].hasOwnProperty(this.$route.params.id))
					this.langData.productData=productList[this.$route.params.lang][this.$route.params.id];
			}
  			else
  				this.langData=langText['cn'];
	},
  	ready : function(){

  	},
  	// destroyed : function(){
  	// 	clearInterval( this.handle )
  	// }
  	//components:{accordion:require('vue-strap/src/Accordion.vue')},
  	methods:{
  		upQuatity: function(){
  			this.count++;
  		},
  		downQuatity:function(){
  			if(this.count>1)
  				this.count--;
  		},
  		showPreview:function(image){
  			//console.log(image);
  			this.langData.productData.preview = image;
  		},
  		addToCart:function(){
  			var jsonstr = {
  				"quantity" : this.count,
  				"price" : this.langData.productData.price,
  				"name" : this.langData.productData.name,
  				"image" : this.langData.productData.image[1],
  				"id": this.productID
  			};
  			localStorage.setItem(this.productID,JSON.stringify(jsonstr));
  		}
  	},
  	components:{
  		tabs: tabset,
	    tabGroup: tabGroup,
	    tab: tab
  	},
  	route:{
  		canReuse: false, // force to reload data
    	//activate(transition) {},//load data
    	// load your data
  		// data: function (transition) {
        //      transition.next(DataObjectForCurrentRoute);
        // }
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
.buy-button{
	display: inline-block;
	color:$themeOrange;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
	border: 1px $themeOrange solid;
	font-family: 'Helvetica Neue',"微软雅黑";
}
.page-wrapper{
	width:100%;
	.top-banner{
		width: 100%;
		background-color: white;
		.banner-container{
			margin: 9%;
			display: flex;
			flex-direction:row;
			img{
				width: 100%;
			}
			.banner-left{
				width: 45%;
				padding: 0;
				.thumb-wrapper{
					width: 100%;
					display: flex;
					flex-direction:row;
    				align-items: center;
    				margin: 5% 0;
					.thumb-img{
						width: 24%;
    					margin: 2px;
    					cursor: pointer;
    					opacity: 0.5;
    					max-height: 100px;
    					filter: alpha(opacity=50);
    					overflow: hidden;
					}
					.thumb-img.active{
						width: 24%;
    					margin: 2px;
    					cursor: pointer;
    					opacity: 1;
    					filter: alpha(opacity=100);
					}
				}
			}
			.banner-right{
				width: 50%;
    			margin-left: 4%;
				vertical-align: top;
				.product-name{
					margin: 1% 0;
					font-size: 30px;
					color: #555555;
				}
				.product-brief{
					font-size: 15px;
					color: #646464;
					margin: 1% 0;
				}
				.product-price{
					font-size: 20px;
					color: $themeOrange;
					margin: 1% 0;
				}
				.quantity{
					display: inline-flex;
				    justify-content: center;
				    align-items: center;
				    .input-group{
				    	display: flex;
				    	.input-group-addon{
							background-color: white;
							width: 18%;
							cursor: pointer;
							margin-top: -1px;
    						margin-bottom: 1px;
    						color: #969696;
						}
						.input-group-addon:hover{
							color: $themeOrange;
						}
						.form-control{
							width: 25%;
							text-align: center;
						}
				    }

					.quantity-text{
						margin-right: 4%;
						display: table;
					}
				}
				.payment-price{
					    display: flex;
					    margin: 5% 0;
					    font-size: 20px;
					    justify-content: flex-start;
    					align-items: center;
				    	.order-price{
				    		margin: 0 5%;
						    color: $themeOrange;
						    font-size: 30px;
				    	}
				}
				button{
					width: 49%;
				}
				.button-wrapper{
					margin: 5% 0%;
				}
			}
		}
	}
	.banner-container img{width:100%;}
	.bottom-container {
		padding: 0 5%;
    	text-align: center;
    	min-height: 300px;
    	.nav-tabs a{
    		font-size: 20px !important;
    	}
    	.nav-tabs>li>a:active,.nav-tabs>li>a:hover{
    		color:$themeOrange;
    		font-size: 20px !important;
    	}
    	.nav-tabs li.active{
    		color: $themeOrange;
    		font-size: 20px !important;
    	}
    	.nav-tabs a{
    		font-size: 20px !important;
    	}
    	table{

    	}
    	.intro-text{
    		margin: 5% 0;
    		font-size: 18px;
    		color:#3c3c3c;text-align: left;
    	}
    	.intro-img{
    		margin: 2% 0;
    		img{width:50%;}
    	}
	}


}
.main_menu{
	background-color: #ccc !important;
}
</style>
