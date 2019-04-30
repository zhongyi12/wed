<template>
  <section class="met-news">
  <transition>
  <div class="detail-wrapper col-md-9" v-if="newsList.length>0">
    <div class="news-detail-wrapper">
      <div class="met-shownews-header">
        <h1>{{ newsItem.title }}</h1>
        <div class="media-info">
          <span class="media-time">{{ newsItem.show_time }}</span>
        </div>
      </div>
      <div class="article" v-html="newsItem.content"></div>
      <div class="news-footer">
        <ul class="pager">
          <li class="previous">
            <a @click="showDetail(newsList[newsCurrentIndex-1])" :class="{'unclick':lastClick}">上一篇 : <span>{{ lastNews }}</span></a>
          </li>
          <li class="news">
            <a @click="showDetail(newsList[newsCurrentIndex+1])" :class="{'unclick':nextClick}">下一篇 : <span>{{ nextNews }}</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </transition>
    <uf-news-search :newsList="newsList"></uf-news-search>
 </section>
</template>
<script>
 import ufNewsSearch from './newsSearch.vue';
 import langText from '../../../lang/news';
export default {
  props:['newsData'],
  components: {
    ufNewsSearch,
  },
	data() {
		return {
			country:'cn',
			langData:{},
      newsDetail:{},
      nextNews:'',
      lastNews:'',
      newsItem: {},
      newsCurrentIndex: null,
      newsList: [],
      lastClick: false,
      nextClick: false,
		}
	},
	created : function(){
    window.scrollTo(0,0);
    this.newsList = this.newsData;
    this.getNewsData();
    this.autoPage();
		const SET_LANG = this.$route.params.lang;
		if(SET_LANG!==undefined){
			this.country = this.$route.params.lang;
		}
			if(SET_LANG==='en' || SET_LANG==='cn') {
				this.langData=langText[SET_LANG];
			}
			else {
				this.langData=langText['cn'];
			}

//    const newsIndex = this.newsList.findIndex((item) => {
//      return item.objectId === this.$route.params.id;
//    });
//    if (newsIndex > -1) {
//      this.newsItem = this.newsList[newsIndex];
//    }

	},
  	mounted : function(){

  	},
    watch: {
      'newsData': function (n, o) {
        this.newsList = n;
        this.getNewsData();
        this.autoPage();
      }
    },
  	methods:{
      showDetail(content){                     //展示新闻详情
        this.$router.push({
          path:'news/'+content.objectId,
          name:'newsDetail',
          params: {
            lang:this.country,
            id: content.objectId,
          }
        });
      },
      getNewsData(){
        const newsIndex = this.newsList.findIndex((item) => {
          return item.objectId === this.$route.params.id;
        });
        if (newsIndex > -1) {
          this.newsItem = this.newsList[newsIndex];
          this.newsCurrentIndex = this.newsList.indexOf(this.newsList[newsIndex]);
        }
      },

      autoPage(){
        window.scrollTo(0,0);
        if(this.newsCurrentIndex === 0){
          this.lastNews = "没有了";
          this.lastClick=true;
          if(this.newsCurrentIndex === this.newsList.length-1){
            this.nextNews = "没有了";
            this.nextClick=true;
          }else{
            this.nextNews = this.newsList[this.newsCurrentIndex+1].title;
            this.nextClick=false;
          }
        }else if (this.newsCurrentIndex === this.newsList.length-1){
          this.nextNews = "没有了";
          this.nextClick=true;
          this.lastNews = this.newsList[this.newsCurrentIndex-1].title;
          this.lastClick=false;
        }else{
          this.nextClick=false;
          this.lastClick=false;
          this.lastNews = this.newsList[this.newsCurrentIndex-1].title;
          this.nextNews = this.newsList[this.newsCurrentIndex+1].title;
        }
      },
      changePage(reduce = false){
        this.autoPage();
        if (reduce) { // navigate to previous
          if(this.newsCurrentIndex > 0 ){
            this.newsCurrentIndex--;
            this.lastNews = this.newsList[this.newsCurrentIndex-1].title;
            this.nextNews = this.newsList[this.newsCurrentIndex+1].title;
          }else{
            this.newsCurrentIndex = 0;
            this.lastNews = "没有了"
          }
        }
        else { // navigate to next
          if(this.newsCurrentIndex < this.newsList.length-1){
            this.newsCurrentIndex++;
            this.lastNews = this.newsList[this.newsCurrentIndex-1].title;
            this.nextNews = this.newsList[this.newsCurrentIndex+1].title;
          }else{
            this.newsCurrentIndex = this.newsList.length-1;
            this.nextNews = "没有了"
          }
        }
      },

  	},
  	computed: {
//      newsItem() {
//       const newsIndex = this.newsList.findIndex((item) => {
//         return item.objectId === this.$route.params.id;
//       });
//       if (newsIndex > -1) {
//         return this.newsList[newsIndex];
//       }
//       return null;
//      }
  	},


}
</script>
<style lang="sass" scoped>
$textColor : #3C3C3C;
$themeOrange: #E27347;
$newBgColor: #ECECEC;

.met-news {
  padding: 90px 10% 30px;
  background: #f2f2f2;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.detail-wrapper {
  max-width: 1300px;
}
.news-detail-wrapper {
  background: #fff;
  padding: 3vw;
  width: 100%;
  overflow-x: hidden;
  h1 {
    margin: 0;
    font-size: 1rem;
    margin-bottom: 5px;
}
  .media-info {
    color: #a3afb7;
    font-size: .8rem;
    font-weight: 300;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f2f5;
    .media-time {
      padding-right: 10px;
      font-size: .6rem;
  }
}
  .article {
    background: #fff;
    padding: 30px 0;
    line-height: 1.8;
    font-size: .8rem;
    /*text-indent: 1.6rem;*/
    width: 100%;
    overflow-x: hidden;
    font-weight: 300;
    color: #222;
  }
  .news-footer {
    background: #fff;
    padding: 30px 30px 0 30px;
    .pager {
      padding-left: 0;
      padding-top: 30px;
      border-top: 1px solid #f0f2f5;
      text-align: center;
      list-style: none;
      display: flex;
      justify-content: space-around;
      li {
        display: inline-block;
        a {
          border: 1px solid #e4eaec;
          padding: 10px 20px;
          color: #76838f;
          border-radius: 50px;
          cursor: pointer;
      }
      a.unclick {
        background-color: #e4eaec;
        pointer-events: none;
       }
    }
  }
}
}
.newsDetail-enter-active, .newsDetail-leave-active{
  transition: all 1s;
}
.newsDetail-enter, .newsDetail-leave-active {
  opacity: 0
}
@media only screen and (max-width: 992px){
  .met-news {
    display: block;
    padding: 90px 0 30px;
  }
}
</style>
