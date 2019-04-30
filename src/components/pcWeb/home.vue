<template>
<div class="page-wrapper">
  <div class="banner-container">
    <el-carousel v-if="country==='en'" arrow="always" :interval='5000'>
       <el-carousel-item>
         <a :href="config.UARN_STORE.slider" target="_blank" class="banner-com en-banner3">
         </a>
       </el-carousel-item>
      <el-carousel-item >
        <router-link :to="{name:'xarm',params:{lang:country}}">
         <!--  <div class=" banner-com">
            <div class="banner-text">
              <img class="banner-picture" src="../assets/img/home/xarm_.png"/>
              <div>
                <h3 class="title">xArm</h3>
                <p class="slogan" v-html="langData.homeBanner.xarmSlogan"></p>
                <el-button class="button"><span class="button-text ">{{ langData.homeBanner.knowMore }}</span><i class="el-icon-arrow-right" style="padding-left: 10px;"></i></el-button>
              </div>
            </div>
          </div>-->
          <a class="banner-com en-banner1"></a>
        </router-link>
      </el-carousel-item>
      <el-carousel-item >
        <router-link :to="{name:'uarmswift',params:{lang:country}}">
          <a class="banner-com en-banner2"></a>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <el-carousel v-else  arrow="always" :interval='5000'>
      <el-carousel-item >
        <router-link :to="{name:'xarm',params:{lang:country}}">
          <!-- <div class=" banner-com">
            <div class="banner-text">
              <img class="banner-picture" src="../assets/img/home/xarm_.png"/>
              <div>
                <h3 class="title">xArm</h3>
                <p class="slogan" v-html="langData.homeBanner.xarmSlogan"></p>
                <el-button class="button"><span class="button-text ">{{ langData.homeBanner.knowMore }}</span><i class="el-icon-arrow-right" style="padding-left: 10px;"></i></el-button>
              </div>
            </div>
          </div>-->
          <a class="banner-com cn-banner1"></a>
        </router-link>
      </el-carousel-item>
      <el-carousel-item >
        <router-link :to="{name:'uarmswift',params:{lang:country}}">
          <a class="banner-com cn-banner2"></a>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="module-wrapper">
    <div v-for="(item, index) in langData.module" class="pic-wrapper">
      <a :href="item.link" target="_blank" style="position: relative;display: inline-block;">
        <img :src="item.pic"/>
        <span class="module-name">{{ item.name }}</span>
        <div  class="cover-mask"></div>
      </a>
    </div>
  </div>
  <!--<uf-new :newsData="newsData"></uf-new>-->
  <uf-footer></uf-footer>




  <div>
  <!-- <p>当前路径: {{$route.path}}</p>
    <p>当前路由参数: {{$route.params | json}}</p> -->
  </div>
</div>

</template>
<script>
import ufVideo from './subcomponents/video';
import ufNew from './subcomponents/homeNews';
import ufFooter from './subcomponents/footer';
import langText from '../../lang/comom';
import config from '../../config';
import mainModel from '../../mainModel/model';
// require('velocity-animate');
const imagePath = '../assets/img';
export default {
	props :['countdown','newsData'],
	data() {
		return {
			country:'cn',
			langData:{},
			gameStart:false,
			subscribeClass:"subscribe-new-container",
      countdownNotEnd:false,
      mainModel: mainModel,   //定时撤销图片
      config: config,
      options: {
        // Your custom options here
        animationType: 'slideY',
        duration: 1000,
        easing: [1, 0, 0, 1],
        loopBottom: false,
        overlay: false,
        dotNavEnabled: true,
        dotNavPosition: 'right',
        dotNavColor: '#848484',
      },
		}
	},
	created : function(){
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
			if(this.$route.params.lang==='en' || this.$route.params.lang==='cn')
  				this.langData=langText[this.$route.params.lang];
  			else
  				this.langData=langText['cn'];
	},
  	mounted : function(){
      // console.log('endCountDown', this.endCountDown);//
      // console.log('this.countdownDay()', this.countdownDay());
      // this.mainModel.countdownDay();
  	},
  	methods:{
      // xarm 发布倒计时
      // countdownDay() {
      //   const timer = setInterval(() => {
      //     const last = new Date("2018-12-1 12:00:00");
      //     let date = new Date();
      //     if (date > last) {
      //       window.clearInterval(timer);
      //        this.endCountDown = false;
      //     }
      //   },1000)
      // },
  	},
		components: {
			ufVideo,
      ufNew,
      ufFooter,
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
$newBgColor: #ECECEC;

.page-wrapper{
	width: 100%;
	padding-top: 60px;
	.banner-container {
	  height: 54vw;
	  .banner-com{
      height: 100%;
      /*float: left;*/
      display: block;
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      /*background-attachment: fixed;*/
      background-position: center center;
      background-repeat: no-repeat;
      background-color: #fff;
      cursor: pointer;
	  }
     .banner-picture {
       width: 30%;
       margin-right: 30px; 
      }
    .banner-text {
      // position: absolute;
      // right: 20%;
      // top: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 10%;
      .title {
        font-size: 70px;
        color: $themeOrange;
        font-weight: 600;
      }
      .slogan {
        font-size: 30px;
        padding: 30px 0;
        font-weight: 700;
         color: #555;
      }
      .button {
        border: none;
        color: $themeOrange;
        borer-radius: none;
        .button-text {
          padding-bottom: 3px;
          font-size: 16px;
          border-bottom: 2px solid  $themeOrange;
        }
      }
    }
    .banner-com {
      position: relative;
    }
	  .cn-banner1 {
      background-image: url("../assets/img/home/xarm_cn.jpg");
	  }
    .cn-banner2 {
      background-image: url("../assets/img/home/swift_cn.png");
    }
    .en-banner1 {
      background-image: url("../assets/img/home/xarm_en.jpg");
    }
    .en-banner2 {
      background-image: url("../assets/img/home/swift_en.png");
    }
    .en-banner3 {
       background-image: url("../assets/img/home/home_pro.jpg");
    }
    .el-carousel {
      height:100%;
    }
	}
}
.main_menu{
	background-color: #ccc !important;
}


.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.module-wrapper {
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  .pic-wrapper {
    padding: 0 20px;
    position: relative;
    img {
      width: 100%;
      transition: 0.4s linear;
    }
    .module-name {
      display: block;
      position: absolute;
      left: 50%;
      top: 57%;
      margin-left: -76px;
      margin-top: -35px;
      color: #fff;
      font-size: 20px;
      border-top: 2px solid #fff;
      border-bottom: 2px solid #fff;
      width: 160px;
      line-height:50px;
      text-align: center;
    }
    .cover-mask {
      position: absolute;
      width: 100%;
      height:100%;
      top: 0;
      transition: 0.4s linear;
      background: rgba(19, 18, 18, 0.20);
    }
    a:hover {
      .cover-mask {
         background: rgba(19, 18, 18, 0);
         transform: scale(1.1);
      }
      img {
        transform: scale(1.1);
      }
    }
  }
  

}

</style>
<style lang="sass">
  .page-wrapper {
    .el-carousel__container {
      height:100%;
    }
    .el-carousel__arrow--right {
      right: 50px;
    }
    .el-carousel__arrow--left {
     left: 50px;
     }
  }

</style>
