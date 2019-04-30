<template lang="html">
  <div class="retail-wrapper">
   <h2 class="retail-solgan">
    ONLINE RETAILS
   </h2>
   <div class="area-wrapper">
    <div v-for="(item, index) in langData.areaList" :key="index">
        <div class="title-wrapper"><h4 class="area-title">{{item.area}}</h4></div>
        <div  class="country-list">
          <div v-for="(country, index2) in item.country" class="country">
            <h4>{{ country.country }}</h4>
            <div>{{ country.name }}</div>
            <a :href="country.link" class="buy-button" target="_brank">Buy Now</a>

          </div>
        </div>
        
    </div>
    <div style="width: 100%; text-align: center;margin: 50px 0;"><a class="buy-button" :href="langData.cooperationLink" target="_blank">BECOME A DEALER</a></div>
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
  padding-top: 50px;
}
.area-wrapper {
 
}
.retail-solgan {
  text-align: center;
  margin: 30px 0;
  font-weight: 700;
  color: #555;
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
  width: 100%;
  padding-bottom: 30px;
  .country {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      padding: 0;
    }
  }
}
.buy-button {
  padding: 6px 16px;
  background-color: $themeOrange;
  color: #fff;
  display: inline-block;
  border-radius: 6px;
}

</style>
