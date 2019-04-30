<template lang="html">
  <div class="retail-wrapper">
   <div class="retail-solgan">
    ONLINE RETAILS
   </div>
   <div class="area-wrapper">
    <div v-for="(item, index) in langData.areaList" :key="index">
        <div class="title-wrapper"><h3 class="area-title">{{item.area}}</h3></div>
        <div  class="country-list">
          <div v-for="(country, index2) in item.country" class="country">
            <h4 style="padding-bottom: 10px;">{{ country.country }}</h4>
            <div>{{ country.name }}</div>
            <a :href="country.link" class="buy-button" target="_brank">Buy Now</a>

          </div>
        </div>
        
    </div>
    <div style="width: 100%; text-align: center;margin-top: 100px;"><a class="buy-button" :href="langData.cooperationLink" target="_blank">BECOME A DEALER</a></div>
   </div>
   
  </div>
</template>

<script>
import langText from '../../lang/retail';
export default {
  data : function(){
    return {
      langData:{},
    }
  },
	components:{
	},
  created:function(){
    // if(this.$route.params.lang==='en' || this.$route.params.lang==='cn')
    //   this.langData=langText[this.$route.params.lang];
    // else
    //   this.langData=langText['en'];
      // console.log('langText', langText);//

       this.langData=langText['en'];
  },
  mounted:function(){
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>

$themeOrange: #E27347;
$themeOrangeBA: #E27347;
.retail-wrapper {
  padding-top: 60px;
}
.area-wrapper {
  width: 1000px;
  margin: 90px auto;
}
.retail-solgan {
  // width: 100%;
  height: 400px;
  line-height: 400px;
  font-size: 40px;
  color: #fff;
  text-align: center;
  background-image: url('../assets/img/support/retail_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.title-wrapper {
  border-bottom: 1px solid #eae8e8;
  padding-bottom: 10px;
}
.area-title {
  border-left: 3px solid $themeOrange;
  margin-left: 20px;
  padding-left: 6px;
}
.country-list {
  // display: flex;
  width: 100%;
  padding: 30px 40px;
  .country {
    padding: 20px;
    width:33%;
    display: inline-block;
  }
}
.buy-button {
  padding: 6px 16px;
  background-color: $themeOrange;
  color: #fff;
  margin-top: 10px;
  display: inline-block;
  border-radius: 6px;
}

</style>
