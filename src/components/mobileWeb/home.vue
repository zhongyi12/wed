<template>
<div class="page-mobile-wrapper">
  <div class="mobile-banner-container">
    <wc-swiper  v-if="country==='en'" :duration="600">
      <wc-slide>
          <a :href="config.UARN_STORE.slider">
           <img src="../assets/img/mobile-web/home/mobile_home_pro.jpg"/>
         </a>
       </wc-slide>
      <wc-slide v-for="(slide, index) in bannerImageEn" :key="index">
         <router-link :to="{name: index,params:{lang: country}}">
          <img :src="slide"/>
        </router-link>
      </wc-slide>
    </wc-swiper>
    <wc-swiper  v-else :duration="600">
      <wc-slide v-for="(slide, index) in bannerImageCn" :key="index">
         <router-link :to="{name: index,params:{lang: country}}">
          <img :src="slide"/>
        </router-link>
      </wc-slide>
    </wc-swiper>
  </div>
  <uf-new :newsData="newsData"></uf-new>
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
export default {
	props :['newsData'],
	data() {
		return {
			country:'cn',
			langData:{},
			bannerImageEn:{
        xarm: require('../assets/img/mobile-web/home/mobile_xarm_en.jpg'),
        uarmswift: require('../assets/img/mobile-web/home/mobile_swift_en.jpg'),
			},
      bannerImageCn:{
        xarm: require('../assets/img/mobile-web/home/mobile_xarm_cn.jpg'),
        uarmswift: require('../assets/img/mobile-web/home/mobile_swift_cn.jpg'),
      },
      config: config,
      mainModel: mainModel,
		}
	},
	created : function(){
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
//			if(this.$route.params.lang==='en' || this.$route.params.lang==='cn')
//  				this.langData=langText[this.$route.params.lang];
//  			else
//  				this.langData=langText['cn'];
	},
  	mounted : function(){
      this.vueTouch();
      // this.mainModel.countdownDay();
      // console.log('endCountDown', this.endCountDown);//
  	},
  	methods:{
  	  vueTouch() {
  	    const carousel = document.getElementById('carouselEn') ? document.getElementById('carouselEn') : document.getElementById('carouselCn');
  	    const _this = this;
  	    let startPageX = {star: 0, end: 0};
        carousel.addEventListener('touchstart', function(ev){
          startPageX.start = ev.changedTouches[0].pageX;
  	    });
        carousel.addEventListener('touchend', function(ev){
          startPageX.end = ev.changedTouches[0].pageX;
          if(startPageX.start - startPageX.end >20) {
            _this.$refs.carousel.next();
          }else if(startPageX.start - startPageX.end < -20){
            _this.$refs.carousel.prev();
          }else {
            return;
          }
        });
      },
  	},
		components: {
			ufVideo,
      ufNew,
      ufFooter,//
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
.page-mobile-wrapper{
  padding-top: 50px;
  .mobile-banner-container {
    width: 100%;
  }
  img {
    width: 100%;
    margin: 0 auto;
  }
}

</style>
<style lang="sass">
  $vm_base: 414;
  $vh_base: 510;
  @function vw($px) {
    @return ($px / $vm_base) * 100vw;
  }
  @function vh($px) {
    @return ($px / $vh_base) * 100vh;
  }

 //orientation: portrait | landscape
// 横/坚屏
// 肖像（坚屏）模式
@media only screen and (orientation: portrait) {
  .page-mobile-wrapper .el-carousel .el-carousel__container {
    height: vh(400);
  }
}

// 全景（横屏）模式
@media screen and (orientation: landscape) {
  .page-mobile-wrapper .el-carousel .el-carousel__container {
    height: vw(520);
  }
}
</style>
