<template>
<div class="news-wrapper">
  <section class="met-news">
    <h3>{{ langData.newsTitle }}</h3>
    <transition name="newsList" mode="in-out">
      <div class="col-md-9">
        <div class="news-content ">
          <div>
            <ul class="news-list">
              <li v-for="(item,index) in newsPage">
                <div class="media media-lg" @click="showDetail(item)">
                  <div class="media-left" v-html="item.small_cover">
                  </div>
                  <div class="media-body">
                    <h4 class="media-title">{{ item.title }}</h4>
                    <!--<p class="media-text" v-html="item.summary"></p>-->
                    <p class="media-info">
                      <span class="media-time">{{ item.show_time }}</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="paging-wrapper" v-show="newsList.length > pageSize">
              <ul class="pagination">
                <li><a @click="page('last')" v-show='curPage>1'>{{ langData.lastPage }}</a></li>
                <li v-for="index in pageNum" @click="eachPageNews(index+1)">
                  <a :class="{'active-page':index+1 == curPage?curPageActive = true:curPageActive = false}">{{index+1}}</a>
                </li>
                <li><a @click="page('!last')" v-show="curPage<pageCount">{{ langData.nextPage }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!--<uf-news-search :newsList="newsList"></uf-news-search>-->
  </section>
</div>
</template>
<script>
  import ufNewsSearch from './subcomponents/newsSearch.vue';
  import langText from '../../lang/news';
export default {
  props:['newsData'],
  components: {
    ufNewsSearch
  },
  data() {
		return {
			country:'cn',
			langData:{},
      newsList: [],
      newsPage:[],
      curPage:null,
      pageSize: 10,
      pageCount:'',
      pageNum:'',
      curPageActive: false,
		}
	},
	created : function(){
    window.scrollTo(0,0);
	  this.newsList = this.newsData;
    this.showNewsList();
		const SET_LANG = this.$route.params.lang;
		if(SET_LANG!==undefined){
			this.country = this.$route.params.lang;
		}
			if(SET_LANG==='en' || SET_LANG==='cn') {
				this.langData=langText[SET_LANG];
//				console.log("language",langText[SET_LANG])
			}
			else {
				this.langData=langText['cn'];
			}
	},
  	mounted : function(){
  	},
    watch: {
      'newsData': function (n, o) {
        this.newsList = n;
//        this.fanye();
        this.showNewsList();
      }
    },
  	methods:{
      showDetail(content){                //展示新闻详情
        this.$router.push({
          path:'news/'+content.objectId,
          name:'newsDetail',
          params: {
            lang:this.country,
            id: content.objectId,
          }
        });
      },
      page:function(el){                       //点击上下翻页
        el=='last'?this.curPage--:this.curPage++;
        this.$router.push({
          path:'news/'+this.curPage,
          name:'news',
          params: {
            lang:this.country,
            newsPage: this.curPage,
          }
        });
//        let curtotal=this.curPage*this.pageSize;
//        let tiaoshu=this.curPage*this.pageSize+this.pageSize;
//        this.newsPage=this.newsList.slice(curtotal,tiaoshu);
//        document.body.scrollTop = 0;
      },
//      page2:function(el){                       //点击页数翻页
////        el=='last'?this.curPage--:this.curPage++;
//        let curtotal=el*this.pageSize;
//        let tiaoshu=el*this.pageSize+this.pageSize;
//        this.newsPage=this.newsList.slice(curtotal,tiaoshu);
//        this.curPage = el;
//        document.body.scrollTop = 0;
//      },
//      fanye:function() {                               //分页处理
//        var _this = this;
//        var num=[];
//        _this.pageCount = Math.ceil(_this.newsList.length / _this.pageSize);
//        for (var i = 0; i < _this.pageSize; i++) {
//          if (_this.newsList[i]) {
//            _this.newsPage.push(_this.newsList[i]);
//          }
//        }
//        for(let j=0;j<_this.pageCount;j++){
//          num.push(j);
//          _this.pageNum = num;
//        }
//      },

      eachPageNews(page){
        this.$router.push({
          path:'news/'+page,
          name:'news',
          params: {
            lang:this.country,
            newsPage: page,
          }
        });
      },

      showNewsList(){
        const page = this.$route.params.newsPage;
        var _this = this;
        var num=[];
        _this.pageCount = Math.ceil(_this.newsList.length / _this.pageSize);
        let curtotal=(page-1)*this.pageSize;
        let tiaoshu=(page-1)*this.pageSize+this.pageSize;
        this.newsPage=this.newsList.slice(curtotal,tiaoshu);
        this.curPage = page;
        if(_this.pageCount <= 10){
          for(let j=0;j<_this.pageCount;j++){
            num.push(j);
            _this.pageNum = num;
          }
//          console.log("还不到10张");
        }else {
//          console.log("超过10张");
        }

      }
  	},
  	computed: {
  	}
}
</script>
<style lang="sass" scoped>
$textColor : #3C3C3C;
$themeOrange: #E27347;
$newBgColor: #ECECEC;
.news-wrapper {
  padding-top: 50px;
  h3 {
    padding-left: 15px;
    font-family: 'uf-book';
    font-weight: 500;
    padding-bottom: 10px;
  }
  .news-content {
    .news-banner {
      width: 100%;
      .news-banner-img {
        cursor: pointer;
        p img{
          width: 100% !important;
        }
      }
      .news-banner-title {
        width: 100%;
        height: 3rem;
        background-color: rgba(51, 51, 51, 0.29);
        color: #fff;
        text-align: center;
        line-height: 3rem;
        font-size: 1rem;
        position: absolute;
        bottom: 10%;
      }
      img {
        width: 100%;
        cursor: pointer;
      }
    }
    .news-list {
      padding: 0;
      list-style: none;
      li {
        border-bottom: 1px solid #f0f2f5;
        padding-bottom: 30px;
        margin-bottom: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .media {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .media:first-child {
          margin-top: 0;
        }
        .media, .media-body {
          overflow: hidden;
          zoom: 1;
          width: auto !important;
        }
        .media-body, .media-left, .media-right {
          display: table-cell;
          vertical-align: top;
        }
        .media-left {
          padding: 0;
          vertical-align: middle;
        }
        .media-body {
          overflow: hidden;
          h4 {
            margin-bottom: 10px;
            font-size: 1rem;
          }
          p.media-text {
            color: #76838f;
            font-size: .72rem;
            font-weight: 300;
            margin-bottom: 10px;
            height: 3.1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word;
          }
          p.media-info {
            color: #a3afb7;
            font-size: .6rem;
            font-weight: 300;
          }
        }
      }
    }
    .paging-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      .pagination>li {
        /*float: left;*/
        margin: 0 5px;
        display: inline-block;
        >a{
          font-size: 14px;
          color: #969696!important;
          /*border: 1px solid #dcdcdc;*/
          border-radius: 20px;
          margin: 0;
          cursor: pointer;
        }
      }
      .active-page {
        border: none;
      }
    }

  }

}

.newsList-enter-active, .newsList-leave-active{
  transition: all 1s;
}
  .newsList-enter, .newsList-leave-active {
    opacity: 0
}

@media only screen and (max-width: 992px){
  .met-news {
    display: block;
    /*padding: 90px 0 30px;*/
  }
  .news-bar {
    margin-left: 0 !important;
    margin-top: 30px;
    padding: 30px !important;
  }
  .search-wrapper {
    padding: 0 !important;
  }
}

</style>
<style lang="sass">

   .news-banner .el-carousel__container {
     height: 26vw;
   }
   .news-banner-img img{
      width: 100%;
   }
   @media only screen and (max-width : 992px) {
     .news-banner .el-carousel__container {
       height: 48vw;
     }
   }
     @media only screen and (max-width : 580px) {
     .news-banner .el-carousel__container {
       height: 38vw;
   }
   }
</style>
