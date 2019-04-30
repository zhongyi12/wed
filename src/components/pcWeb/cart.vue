<template>
<div class="page-wrapper">
	<table class="table">
		<tr>
			<th v-for="th in langData.thtext">{{th}}</th>
			<th></th>
		</tr>
		<tr v-for="item in shopping">
			<td><img v-bind:src="item.image">
				{{item.name}}</td>
			<td>{{item.price}}</td>
			<td>
				<div class="quantity">
				<div class="input-group">
					<span class="input-group-btn">
						<button v-on:click="downQuatity(item.id)" class="btn btn-default btn-number"  data-type="minus">
							<span class="glyphicon glyphicon-minus"></span>
						</button>
					</span>
			      	<input type="number" class="form-control input-number" placeholder="1" v-model="item.quantity" number >
			      	<span class="input-group-btn">
						<button v-on:click="upQuatity(item.id)" class="btn btn-default btn-number"  data-type="plus">
							<span class="glyphicon glyphicon-plus"></span>
						</button>
					</span>
			    </div><!-- /input-group -->
				</div>
			</td>
			<td>{{item.price*item.quantity}}</td>
			<td><span class="glyphicon glyphicon-trash" v-on:click="deleteItem(item.id)"></span></td>
		</tr>
	</table>
	<div class="text-right">
		<div class="sumprice">{{langData.summary}}<span id="amount">{{langData.currency}}{{itemsum}}</span></div>
		<div class="cart-btn">
			<button v-link="{name:'store',params:{lang:country}}" class="btn detail-button">{{langData.shopping}}</button>
			<button class="btn ghost-button">{{langData.checkout}}</button>
		</div>
	</div>
</div>

</template>
<script>
// var Jquery = require('jquery');
// Jquery(".info_tittle").hide()
var Vue = require('vue');

module.exports = {
	data : function(){
		return {
			country:'cn',
			langData:{},
			shopping:{}
		}
	},
	computed : {
		itemsum:function(){
			var sum=0;
			for(var key in this.shopping){
				sum=sum+this.shopping[key].price*this.shopping[key].quantity;
			}
			return sum;
		}
	},
	created : function(){
		var shoppingCart={};
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
		for(var i=0, len =localStorage.length;i<len;++i){
			shoppingCart[localStorage.key(i)]=JSON.parse( localStorage.getItem( localStorage.key(i) ) );
		}
		this.shopping = shoppingCart;
		console.log("shopingCart:"+JSON.stringify(this.shopping))
	},
  	ready : function(){
  		var langText = {
				cn:{
					thtext:{
						1:"商品",
						2:"价格",
						3:"数量",
						4:"小计",
					},
					summary:"总价(不包括运费)",
					shopping:"继续购物",
					checkout:"前往结算",
					currency:"￥",
				},
				en:{
					thtext:{
						1:"Product Name",
						2:"Price",
						3:"Quantity",
						4:"Total Price",
					},
					summary:"总价(不包括运费)",
					shopping:"Shopping",
					checkout:"Purchase",
					currency:"$",
				}

			};
			if(this.$route.params.lang=='en' || this.$route.params.lang=='cn')
  				this.langData=langText[this.$route.params.lang];
  			else
  				this.langData=langText['cn'];
  	},
  	// destroyed : function(){
  	// 	clearInterval( this.handle )
  	// }
  	//components:{accordion:require('vue-strap/src/Accordion.vue')},
  	methods:{
  		deleteItem: function(item){
  			//delete this.shopping.item;
  			Vue.delete(this.shopping, item);
  			localStorage.removeItem(item);
  		},
  		upQuatity: function(id){
  			this.shopping[id].quantity=this.shopping[id].quantity+1;
  		},
  		downQuatity:function(id){
  			this.shopping[id].quantity=this.shopping[id].quantity-1;
  		},
  		itemsum:function(){
			var sum=0;
			for(var key in this.shopping){
				sum=sum+key.price*key.quantity;
			}
			return sum;
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
	color:$themeOrange;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
	border: 1px solid;
	font-family: 'Helvetica Neue',"微软雅黑";
}
.detail-button:hover{
	background-color: white;
	color:$themeOrange;
}
.page-wrapper{
	width:100%;
	table {
		td,th{
			vertical-align: middle;
			padding: 1% 2%;
			text-align: center;
			span{
				cursor: pointer;
			}
			span:hover{
				color:$themeOrange;
			}

		}
		th:first-child{text-align: left;}
		td:first-child{width:40%;text-align: left;}
		img{width: 30%;}
		th{background-color: #efefef;}
		.quantity{
			width: 135px;
			margin: auto;
			.input-number{
				text-align: center;
			}
		}
	}
	.text-right{
		.sumprice{
			margin: 2%;
			font-size: 1.2857em;
			#amount{
				color: $themeOrange;
			}
		}
		.cart-btn{
			margin: 2%;
			.detail-button{
				margin-right: 2%;
			}
		}
	}
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
