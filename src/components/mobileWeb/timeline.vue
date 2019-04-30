<template lang="html">
  <div class="timeline">
  <ul>
    <li v-for="item in langData">
      <div @click="imagePop(item.imageList)">
        <time>{{item.date}}</time>
        <span v-html="item.story"></span>
        <img class="icon-picture" :src="item.icon"/>
      </div>
    </li>
  </ul>
  <modal v-if="showModal" @close="showModal = false">
    <div slot="header"></div>
	  <div slot="body">
	  	<img v-for="img in imageUrlList" :src="img" alt="our-history-image">
	  </div>
	  <div slot="footer" class="">
	  	<button type="button" class="btn btn-default" @click="showModal = false">{{text[language]}}</button>
	  </div>
	</modal>
</div>
</template>

<script>
const Modal = require('./modal.vue');
import langText from '../../lang/timeLine';
export default {
  props:['language'],
  data : function(){
    return {
      text:{
        cn: "关闭",
        en: "Close"
      },
      langData:{},
      showModal: false,
      imageUrlList: [],
    }
  },
	components:{
		modal:Modal,
	},
  created:function(){
    if(this.language=='en' || this.language=='cn')
      this.langData=langText[this.language];
    else
      this.langData=langText['cn'];
//      console.log('langText', langText);
  },
  mounted:function(){

    (function() {
      'use strict';
      // define variables
      var items = document.querySelectorAll(".timeline li");

      // check if an element is in viewport
      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }
      // listen for events
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    })();
  },
  methods: {
    imagePop(list) {
      if( list!==undefined && list!==null ) {
        this.imageUrlList = list;
        this.showModal = true;
      }
    }
  }
}
</script>

<style lang="sass">
/* TIMELINE  –––––––––––––––––––––––––––––––––––––––––––––––––– */
$themeOrange: #E27347;
$themeOrangeBA: #E27347;
.timeline ul {
  background: white;
  padding: 30px 0;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #ccc;
  cursor: pointer;
}

.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
}

.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: $themeOrange;
  color: white;
}

.timeline ul li div::before {
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}

.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent $themeOrangeBA transparent transparent;
}

.timeline ul li:nth-child(even) div {
  left: -439px;
}

.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent $themeOrangeBA;
}

time {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}
.timeline ul li div .icon-picture {
  position:absolute;
  top:1vh;
  right:1vw;
}

/* EFFECTS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul li::after {
  transition: background .5s ease-in-out;
}

.timeline ul li.in-view::after {
  background: $themeOrange;
}

.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all .5s ease-in-out;
}

.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}
/*.timeline ul li.in-view div:hover {*/
    /*text-shadow: 1px 1px 6px #fff;*/
//}

/* GENERAL MEDIA QUERIES  –––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
  }
  .timeline ul li:nth-child(even) div {
    left: -289px;
    /*250+45-6*/
  }
}

@media screen and (max-width: 600px) {
  .timeline ul li {
    margin-left: 20px;
  }
  .timeline ul li div {
    width: calc(100vw - 91px);
  }
  .timeline ul li:nth-child(even) div {
    left: 45px;
  }
  .timeline ul li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent $themeOrangeBA transparent transparent;
  }
}
.modal-body img{
  width: 100%;
  /*padding: 2%;*/
}
.modal-container {
  width: 80%;
  text-align: center;
}
.modal-footer{
  text-align: center;
}
</style>
