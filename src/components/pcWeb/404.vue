<template>
<div class="page-wrapper">
	<div class="banner-container">
		<img src="/src/img/banner/banner1.png"/>
	</div>
	<div class="bottom-container">
		<div class="card-container">
			<div class="card-block">
				<div class="card-image">
					<img src="/src/img/center1.png" />
				</div>
				<div class="card-text">
					<div class="title">早餐机器人</div>
					<div class="brief">“捣蛋机器人女王”Simone Giert用uArm造出了一台早餐机器人，倒牛奶、吃燕麦片，它样样在行！</div>
				</div>
			</div>
			<div class="card-block">
				<div class="card-image">
					<img src="/src/img/center2.png" />
				</div>
				<div class="card-text">
					<div class="title">发牌机器人</div>
					<div class="brief">全球最大的开源硬件厂商SparkFun利用uArm Metal，别出心裁地创造出这个发牌机器人（DealerBot）</div>
				</div>
			</div>
			<div class="card-block">
				<div class="card-image">
					<img src="/src/img/center3.png" />
				</div>
				<div class="card-text">
					<div class="title">湾区Maker Faire · 2016年</div>
					<div class="brief">Overwhelmed with Makers from All over the World! UFACTORY Spent an Awesome Time at Maker Faire Bay Area This Weekend!</div>
				</div>
			</div>
		</div>
		
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
</script>
<style lang="sass" scoped>
$textColor : #3C3C3C;
.page-wrapper{
	width:100%;
	.banner-container img{width:100%;}
	.bottom-container .card-container {
			margin: 2% 5%;
			.card-block {
				width:30%;
				height: 350px;
				margin: 1%;
				display: inline-block;
				vertical-align: top;
				border-radius: 2px;
				position: relative;
				box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
				.card-text{
					margin: 3% 5%;
					.title{
						font-size: 18px;
						color: $textColor;
					}
					.brief{
						margin: 3% 0;
						font-size: 14px;
						color:#787878;
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
.main_menu{
	background-color: #ccc !important;
}
</style>  