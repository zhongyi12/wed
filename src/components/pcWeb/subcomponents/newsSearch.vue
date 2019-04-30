<template>
  <div class=" col-md-3">
  <transition name="newsSearch">
    <div class="search-wrapper">
      <div class="news-bar">
        <!--<div class="form-group">-->
          <!--<div class="input-search">-->
            <!--<input type="text" class="form-control" name="searchword" placeholder="Search"/>-->
            <!--<button type="submit" class="input-seatch-btn">-->
              <!--<i class="el-icon-search"></i>-->
            <!--</button>-->
          <!--</div>-->
        <!--</div>-->
        <div class="recommand news-list-md">
          <h3>{{ langData.recommand }}</h3>
          <ul class="list-group">
            <li v-for="(item, index) in newsRecommand" v-if="index<10" @click="showDetail(item)">
              <a>{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="all-news" @click="backNewList()"> {{ langData.allnews }} </div>
      </div>
    </div>
  </transition>
  </div>
</template>
<script>
import langText from '../../../lang/news';
export default {
  props:['newsList'],
	data() {
		return {
			country:'cn',
			langData:{},
      newsRecommand:'',
		}
	},
	created : function(){
	  this.newsRecommand = this.newList;
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
	},
  	mounted : function(){
  	},
    watch: {
      'newsList': function (n, o) {
        this.newsRecommand = n;
      }
    },
  	methods:{
      backNewList() {
        this.showNewsDetail = false;
        this.$router.push({
          path: 'news',
          name: 'news',
//          lang: this.country
          params: {
            lang:this.country,
            newsPage: 1,
          }
        })
      },
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
  	},
  	computed: {

  	}
}
</script>
<style lang="sass" scoped>
$textColor : #3C3C3C;
$themeOrange: #E27347;
$newBgColor: #ECECEC;
.search-wrapper {
  .news-bar {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    .form-group {
      margin-bottom: 20px;
      .input-search {
        position: relative;
        .form-control {
          border-radius: 50px;
      }
        button.input-seatch-btn {
          background: none;
          border: none;
          position: absolute;
          right: 0;
          top: 18%;
          padding-right: 10px;
      }
    }
  }
    .recommand {
      /*margin: 20px 0;*/
      padding-bottom: 20px;
      /*border-top: 1px solid #f0f2f5;*/
      /*border-bottom: 1px solid #f0f2f5;*/
      h3 {
        font-size: 18px;
        margin: 0;
        font-weight: 500;
    }
      .list-group {
        margin-top: 10px;
        margin-bottom: 0;
        padding-left: 0;
        li {
          position: relative;
          display: block;
          padding: 10px 15px;
          background-color: #fff;
          border-bottom: 1px solid rgba(215,215,215,0.3);
          word-wrap: break-word;
          a {
            cursor: pointer;
            width: 100%;
            display: block;
        }
      }
    }
  }
    .all-news {
      cursor: pointer;
      font-size: .8rem;
      font-weight: 500;
  }
    .all-news:hover {
      color: #62a8ea;
  }
}
}

.newsSearch-enter-active, .newsSearch-leave-active{
  transition: all 1s;
}
.newsSearch-enter, .newsSearch-leave-active {
  opacity: 0
}
</style>
