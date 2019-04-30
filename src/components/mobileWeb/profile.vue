<template lang="html">
<div class="profile-container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item" ><router-link :to="{name:'app',params:{lang:language}}">{{ langData.home }}</router-link></li>
    <li class="breadcrumb-item active">{{ langData.profile }}</li>
  </ol>
  <div class="page-wrapper">
      <div class="profile-wrap">
        <!--<div class="side-nav">-->
          <!--<ul class="nav-list">-->
            <!--<li v-on:click="showTabIndex('1')" v-bind:class="{active:tabActive['1']}">{{ langData.navaside.summary }}</li>-->
            <!--<li v-on:click="showTabIndex('2')" v-bind:class="{active:tabActive['2']}">{{ langData.navaside.notifications }}</li>-->
            <!--<li v-on:click="showTabIndex('3')" v-bind:class="{active:tabActive['3']}">{{ langData.navaside.myinfo }}</li>-->
            <!--<li v-on:click="showTabIndex('4')" v-bind:class="{active:tabActive['4']}">{{ langData.navaside.support }}</li>-->
            <!--<li v-on:click="showTabIndex('5')" v-bind:class="{active:tabActive['5']}">{{ langData.navaside.change }}</br>{{ langData.navaside.password }}</li>-->
          <!--</ul>-->
        <!--</div>-->

        <!--<div class="question-anwser" v-show="tabActive['1']">-->
          <!--<div class="summary-wrap">-->
            <!--<div class="header-profile">-->
              <!--<img class="pic" v-if="this.avatar !== ''"  :src="this.avatar" alt="" >-->
              <!--<img class="pic" src="../assets/img/profile/img_default.png" alt="" v-else>-->
              <!--<div class="info">-->
                <!--<p class="name">{{ userName }}</p>-->
                <!--<P >-->
                  <!--{{ langData.email }}:<span class="email">{{ email }}</span>-->
                <!--</P>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="message-wrap">-->
              <!--<h2><span class="empty-circle"></span>{{ langData.inbox }}<span class="badge">{{ unreadNum }}</span></h2>-->
              <!--<ul v-if="langData.notifications.length>0">-->
                <!--<li>-->
                  <!--<p class="date">{{ langData.notifications[0].data }}</P>-->
                  <!--&lt;!&ndash; <span class="active" v-show="value.unread"></span> &ndash;&gt;-->
                  <!--&lt;!&ndash; <h3 class="title">{{ value.title }}</h3> &ndash;&gt;-->
                  <!--<div class="news-text" v-html="langData.notifications[0].text"></div>-->
                   <!--<a v-on:click="showTabIndex('2')" v-bind:class="{'active':tabActive['2']}">{{ langData.toggle.show }}</a>-->
               <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
            <!--<div class="divide-line hide"></div>-->
            <!--<div class="mydevice-wrap hide">-->
              <!--<h2>MY DEVICE</h2>-->
              <!--<div class="device-wrap">-->
                <!--<img src="../assets/img/profile/img_product.svg" alt="" title=""/>-->
                <!--<div class="device-detail">-->
                  <!--<h3>uArm Swift Pro</h3>-->
                  <!--<div class="Warranty">-->
                    <!--<span>(uArm-1234567890)</span>-->
                    <!--<span>Warranty: 12 months</span>-->
                  <!--</div>-->
                  <!--<div class="link">-->
                    <!--<a href="#">Watch Tutorials</a>-->
                    <!--<a href="#">Watch Showcase</a>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div class="question-anwser" v-show="tabActive['2']">-->
          <!--<div class="notification-wrap">-->
            <!--<h2>INBOX <span class="badge"  > {{ unreadNum }} </span></h2>-->
            <!--<ul>-->
                <!--<li v-for="(value,index) in langData.notifications" v-show=" index < counter ">-->
                  <!--<span class="date">{{ value.date }}</span>-->
                  <!--<span class="unread"  v-show="value.unread" ></span>-->
                  <!--&lt;!&ndash; <h3 class="title">{{ value.title }}</h3> &ndash;&gt;-->
                  <!--<div class="text" v-bind:class="{'brief-text': !value.status}" v-html="value.text"></div>-->
                  <!--<a class="toggle" v-if="value.status" @click="openNotification(index)">{{ langData.toggle.open }} <span class="glyphicon glyphicon-chevron-down"></span></a>-->
                  <!--<a class="toggle" v-else @click="closeNotification(index)">{{ langData.toggle.close }} <span class="glyphicon glyphicon-chevron-up"></span></a>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<span class="nomore">{{ nomore }}</span>-->
            <!--<a class="view-more" @click="viewMore()" v-show="counter>3">{{ langData.toggle.viewmore }}<span class="glyphicon glyphicon-chevron-down"></span></a>-->
          <!--</div>-->
        <!--</div>-->

        <div class="question-anwser" >
          <div class="info-wrap">
            <div class="form-wrap">
              <form role="form" enctype="multipart/form-data">
                <div class="profile-header">
                  <h2>{{langData.profile}}</h2>
                  <img class="pic" v-if="this.avatar !== ''"  :src="this.avatar" alt="" >
                  <img class="pic" src="../assets/img/profile/img_default.png" alt="" v-else>
                  <div class="select-file" v-show="!buttonShow">
                    <p>{{langData.chooseFile}}</p>
                    <a class="file"><input type="file" :disabled="editDisable" id="form" name="file" accept="image/*" @change="avatarPreview()" />...</a>
                    <span class="tip">{{langData.limit}}</span>
                  </div>
                </div>
                <div class="form-group col-lg-4 ">
                  <label>{{langData.email}}</label>
                  <input  class ="form-control" type="email" placeholder="" v-model="email"  disabled/>
                  {{errorMsg.email}}
                </div>
                <div class="form-group col-lg-4 ">
                  <label>{{langData.username}}</label><span>*</span>
                  <input  class ="form-control" type="text" placeholder="" @blur="checkName()" :disabled="editDisable" v-model="userName"/>
                  {{errorMsg.userFormat}}
                </div>
                <div class="clearfix"></div>
                <div class="form-group col-lg-4 ">
                  <label>{{langData.birthday}}</label><span>*</span>
                  <input  class ="form-control" type="date" placeholder="" v-model="birthday" @blur="checkBirthday()" :disabled="editDisable"/>
                  {{errorMsg.birthEmpty}}
                </div>
                <div class="form-group col-lg-4 ">
                  <label>{{langData.gender.gender}}</label>
                  <select class="select-list"   v-model="gender" :disabled="editDisable">
                    <option value="0" >{{langData.select}}</option>
                    <option value="1" >{{langData.gender.male}}</option>
                    <option value="2" >{{langData.gender.female}}</option>
                    <option value="3" >{{langData.gender.unspecified}}</option>
                  </select>
                  {{errorMsg.gender}}
                </div>
                <div class="clearfix"></div>
                <div class="inline-wrap">
                  <div class="form-group group">
                    <label>{{langData.country}}<span>*</span></label>
                    <select class="select-list country-list"   v-model="country" :disabled="editDisable" >
                      <option value="0" >{{langData.select}}</option>
                      <option :value="country.Code" v-for="country in countryList" >{{country.Name}}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>{{langData.city}}</label>
                    <input class ="form-control" type="text" :disabled="editDisable" v-model="city"/>
                  </div>
                  <div class="form-group">
                    <label>{{langData.occupation}}</label>
                    <input class ="form-control" type="text" :disabled="editDisable" v-model="profession"/>
                  </div>
                </div>
                <div class="clearfix"></div>
                <!--<div class="form-group checkbox-wrap">-->
                  <!--<el-checkbox :disabled="editDisable" @change="checkpromotion()" v-model="promotion">{{langData.promotion}}</el-checkbox>-->
                <!--</div>-->
                <div class="form-group last-btn" v-if="buttonShow" >
                  <div class="btn btn-edit " @click="startEdit()" >{{langData.edit}}</div>
                </div>
                <div class="form-group last-btn" v-else>
                  <div class="btn btn-edit " @click="saveUserInfo()">{{langData.save}}</div>
                  <div class="btn btn-edit " @click="fnCancel()">{{langData.cancel}}</div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!--<div class="question-anwser" v-show="tabActive['4']">-->
          <!--<div class="support-wrap">-->
            <!--<div class="small-wrap">-->
              <!--<h3>{{ langData.supportLink.resources }}</h3>-->
              <!--<div class="box-wrap">-->
                <!--<a href="#"  class="bg1 hide">{{ langData.supportLink.resources1 }}</a>-->
                <!--<router-link :to="{name:'download',params:{lang:language, document:true}}" class="bg2">{{langData.supportLink.doc}}</router-link>-->
                <!--&lt;!&ndash; <a href="http://www.ufactory.cc/#/en/support/" target="_blank" class="bg2" v-else>{{ langData.supportLink.doc }}</a> &ndash;&gt;-->
                <!--<a href=" https://github.com/uArm-Developer" target="_blank" class="bg3">{{ langData.supportLink.github }}</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="small-wrap">-->
              <!--<h3>{{ langData.supportLink.community }}</h3>-->
              <!--<div class="box-wrap">-->
                <!--<a href="https://forum.ufactory.cc/" target="_blank" class="bg4">{{ langData.supportLink.forum }}</a>-->
                <!--<a class="bg5_c" v-if="this.language == 'cn'" @click="showWechat">{{ langData.supportLink.facebookgroup }}</a>-->
                <!--<a href="https://www.facebook.com/groups/1653721141585397/" target="_blank" class="bg5" v-else>{{ langData.supportLink.facebookgroup }}</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="small-wrap">-->
              <!--<h3>{{ langData.supportLink.contactUs }}</h3>-->
              <!--<div class="box-wrap">-->
                <!--<a :href="langData.supportURL" target="_blank" class="bg6">{{ langData.supportLink.customerservice }}</a>-->
                <!--<a href="mailto:support@ufactory.cc" class="bg7">{{ langData.supportLink.email }}</a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div class="question-anwser" v-show="tabActive['5']">-->
          <!--<div class="change-password">-->
            <!--<form role="form" class="form-vertical">-->
              <!--<div class="form-group">-->
                <!--<label>{{ langData.currentP }}</label>-->
                <!--<input class="form-control" type="password"  v-model="currentPassword" @blur="checkCurrentPassword()"/>{{errorMsg.currentPassword}}-->
              <!--</div>-->
              <!--<div class="form-group ">-->
                <!--<label>{{ langData.newP }}</label>-->
                <!--<input class="form-control" type="password" v-model="newPassword" @blur="checkNewPassword()" />{{errorMsg.newPassword}}-->
              <!--</div>-->
              <!--<div class="form-group">-->
                <!--<label>{{ langData.confirmNP }}</label>-->
                <!--<input class="form-control" type="password" v-model="confirmPassword" @blur="checkConfirmPassword()"/>{{errorMsg.confirmPassword}}-->
                <!--{{ resetPasswordSuccess }}-->
              <!--</div>-->
              <!--<div>-->
                <!--<div class="btn" @click="changePassword()">{{ langData.save }}</div>-->
              <!--</div>-->
            <!--</form>-->
          <!--</div>-->
        <!--</div>-->
        
      </div>
  </div>
</div>
</template>

<script>
const countries = require('./loginChild/assets/json/countries.json');
const News = require('./module/newsfeed');
const eventBus = require('./module/eventBus');
import config from "../../config";
import langText from '../../lang/profile';
export default {
    data: function(){
        return {
          language:'cn',
          hosturl:'',
          tabActive:{
  					1:true,
  					2:false,
  					3:false,
  					4:false,
  					5:false
  				},
          langData:{},
          buttonShow:true,
          email:sessionStorage.email,
          userName:sessionStorage.nickname,
          birthday:'',
          gender:'',
          country: '',
          city:'',
          avatar:'',
          profession:'',
          // savedUserInfo: {
          //   avatar:sessionStorage.avatar,
          //   email:sessionStorage.email,
          //   userName:sessionStorage.nickname,
          //   birthday:sessionStorage.birthday,
          //   gender:sessionStorage.gender,
          //   country: sessionStorage.country,
          //   city: sessionStorage.city,
          //   profession: sessionStorage.profession ,
          // },
          countryList: [],
          promotion: '',
          errorMsg:{
            email:'',
            userName:'',
            birthday:'',
            gender:'',
            country:'',
            currentPassword:'',
            newPassword:'',
            confirmPassword:'',
            passwordMatch:'',
          },
          resetPasswordSuccess:'',
          editDisable: true,
          currentPassword:'',
          newPassword:'',
          confirmPassword:'',
          isRead:true,
          isShow:false,
          counter:3,
          unreadNum:0,
          feedInterval: null,
          nomore:'',
        }
    },


    created() {
          if(this.$route.params.lang==='en' || this.$route.params.lang==='cn'){
      			this.langData=langText[this.$route.params.lang];
            this.language = this.$route.params.lang;
    			}
    			else {
    				this.langData=langText['cn'];
            this.language = 'cn';
          }
      },
    mounted() {

      this.countryList = countries;
      this.hosturl = config.hostURL;
      this.checkOnline();

      if(this.$route.params.tabname !== undefined && this.$route.params.tabname==='news') {
        this.showTabIndex('2');
      }
      //this.user.email = sessionStorage.getItem('email');
    },
    methods:{
      checkpromotion: function(){
        console.log('changepromotion',this.promotion);
      },
      showWechat: function(){
        eventBus.$emit('wechatqr');
      },
      checkOnline: function(){
  			if( localStorage.getItem('loginToken') !==null){
          sessionStorage.loginToken = localStorage.getItem('loginToken');
          this.online = true;
          sessionStorage.online = true;
          this.getUserInfo();
          this.readNotifications();
          this.feedInterval = setInterval(this.readNotifications, 3000);
  			}
        else if(sessionStorage.loginToken !== 'null' && sessionStorage.loginToken !== undefined){
          this.online = true;
          sessionStorage.online = true;
          this.getUserInfo();
          this.readNotifications();
          this.feedInterval = setInterval(this.readNotifications, 3000);
        }
        else{
  				this.$router.push({ name:'userlogin'});
  			}
  		},
      saveUserInfo :function() {
        this.updateUserInfo();
        this.upLoadAvatar();
      },
      showTabIndex : function(qname){
        for(var i=1; i<6;i++){this.tabActive[i.toString()]=false;}
        //this.tabActive[1]=false;
        this.tabActive[qname]=true;
      },
      avatarPreview: function(){
        let self = this;
//        console.log("进入图片预览方法");
        let file = document.getElementById("form").files[0];
        if( file.size < 1024*1024*2 && (file.type == "image/png" || file.type == "image/jpeg" || file.type == "image/BMP")){
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){
            self.avatar = e.target.result;
//            console.log("avatar",self.avatar);
          }
        }else{
//          console.log("图片格式不正确");
        }
      },
      upLoadAvatar :function(){     //上传头像
        let formdata = new FormData();
        formdata.append("file", document.getElementById("form").files[0]);
//        console.log(formdata);
        const url = `${this.hosturl}api/1.0/uploadavatar`;
        const options = {
          headers: {
            'X-LC-Session': sessionStorage.loginToken,
            'Content-Type': 'multipart/form-data'
          },
        };
        const imagedata = {
          data: formdata
        };
        this.$http.post(url,formdata,options).then(response => {
          const returnBack = response.data === undefined ? response : response.data;
          if( returnBack.code === 0 ){
            this.avatar = returnBack.data.avatar;
            sessionStorage.avatar = returnBack.data.avatar;
//            console.log('avatar',response);
            eventBus.$emit('stateChange', true);
          }else{
          }
        },response =>{
        });
      },
      getUserInfo :function(){
        const url = `${this.hosturl}api/1.0/getuserinfo`;
        const options = {
          headers: {
            'X-LC-Session': sessionStorage.loginToken,
          },
        };
        this.$http.get(url, options).then(response => {
          const returnBack = response.data === undefined ? response : response.data;
          if( returnBack.code === 0){
            this.email = returnBack.info.email;
            this.userName = returnBack.info.nickname;
            this.gender = returnBack.info.gender;
            this.birthday = returnBack.info.birthday;
            this.country = returnBack.info.country;
            this.city = returnBack.info.city;
            this.profession = returnBack.info.profession;
            this.promotion = returnBack.info.promotion;
            sessionStorage.avatar = returnBack.info.avatar;
            this.avatar = returnBack.info.avatar;
            // console.log('promotion',returnBack.info.promotion);
            // console.log('getuserinfo request success',response);
          }
        }, response => {
        });
      },
      updateUserInfo: function(){
        const url = `${this.hosturl}api/1.0/updateuserinfo`;
        const userProfile = {
          avatar:this.avatar,
          //email: this.email,
          nickname: this.userName,
          gender: this.gender,
          birthday: this.birthday,
          country: this.country,
          city: this.city,
          profession: this.profession,
          promotion: this.promotion,
        };
        const options = {
          headers: {
            'X-LC-Session': sessionStorage.loginToken,
          },
        };
        this.$http.post(url,userProfile,options).then(response => {
           const returnBack = response.data === undefined ? response : response.data;
           if (returnBack.code === 0) { // login success
             this.editDisable = true;
             this.buttonShow = true;
          }
          else { // login fail
          }
        }, response => {
        });
        //this.getUserInfo();
      },
      startEdit: function(){
        if(this.buttonShow === true){
            this.buttonShow = false;
          }else{
            this.buttonShow = true;
          }
          this.editDisable = false;
      },
      fnCancel: function(){
          this.getUserInfo();
          this.editDisable = true;
          this.buttonShow = true;
      },
      isEmail(email) {    //检查是否为正确的邮箱
        const filter = /\S+@\S+\.\S+/;
        if (filter.test(email)) {
          return true;
        }
        return false;
      },
      checkExistEmail() {
        if(this.isEmail(this.email)){
          this.errorMsg.email='';
          return this.email;
        }
        else{
          this.errorMsg.email = this.langData.validation.emailFormat;
        }
      },
      checkName: function(){
        if (this.userName) {
          this.errorMsg.userName = '';
        }
        else {
          this.errorMsg.userName = this.langData.validation.userFormat;
        }
      },
      checkBirthday: function(){
        if (this.birthday === '') {
          this.errorMsg.birthday = this.langData.validation.birthEmpty;
        }
        else {
          this.errorMsg.birthday = '';
        }
      },
      checkGender: function(){
        if (this.gender === '0') {
          this.errorMsg.gender = this.langData.validation.genderEmpty;
        }
        else {
          this.errorMsg.gender = '';
        }
      },
      checkCountry: function(){
        if (this.country === '0') {
          this.errorMsg.country = this.langData.validation.countryEmpty;
        }
        else {
          this.errorMsg.country = '';
        }
      },
      checkCurrentPassword: function(){
        if (this.currentPassword.length > 5 && this.currentPassword != '' ) {
          this.errorMsg.currentPassword = '';
        }
        else {
          this.errorMsg.currentPassword = this.langData.validation.passwordFormat;
        }
      },
      checkNewPassword: function(){
        if (this.newPassword.length>5 && this.newPassword != '' ) {
          this.errorMsg.newPassword = '';
        }
        else {
          this.errorMsg.newPassword = this.langData.validation.passwordFormat;
        }
      },
      checkConfirmPassword: function(){
        if (this.confirmPassword === this.newPassword ) {
          this.errorMsg.confirmPassword = '';
        }
        else {
          this.errorMsg.confirmPassword = this.langData.validation.passwordMatch;
        }
      },
      checkRePassword: function(){
        if (this.newPassword === this.confirmPassword) {
          this.errorMsg.passwordMatch = '';
        }
        else {
          this.errorMsg.passwordMatch = this.langData.validation.passwordMatch;
          alert(this.errorMsg.passwordMatch);
        }
      },
      changePassword: function(){
        if (this.currentPassword == '' || this.newPassword == '' || this.confirmPassword == '') {
          this.checkCurrentPassword();
          this.checkNewPassword();
          this.checkConfirmPassword();
        } else if(this.newPassword !== this.confirmPassword) {
          this.checkRePassword();
        }else {
          const url = `${this.hosturl}api/1.0/changepassword`;
          const password = {
            email: this.email,
            old_password: this.currentPassword,
            new_password: this.newPassword
          };
          const options = {
            headers: {
              'X-LC-Session': sessionStorage.loginToken,
            },
          };
          this.$http.post(url, password, options).then(response =>{
            const returnBack = response.data === undefined ? response : response.data;
            if (returnBack.code === 0) { // login success
              this.resetPasswordSuccess = this.langData.resetPasswordSuccess;
              this.currentPassword = '';
              this.newPassword = '';
              this.confirmPassword = '';
              sessionStorage.avatar = null;
        			sessionStorage.loginToken = null;
        			localStorage.removeItem('loginToken');
        			this.online = false;
        			sessionStorage.online = this.online;
        			eventBus.$emit('stateChange', false);
        			this.$router.push({ name: 'userlogin' });
          }
          else { // login fail
              this.errorMsg.currentPassword = this.langData.validation.passwordError;
          }},response =>{
//            console.log('changepassword error',response);
          });

        }
      },
      showAll: function(index){
        this.langData.message[index].unread = false;
        this.showTabIndex('2');
        // if(this.langData.message[index].status==true){
        //     this.langData.message[index].status=false;
        //   }else{
        //     this.langData.message[index].status=true;
        //   }
      },
      closeNotification: function(index) {
//        console.log(index);
        this.langData.notifications[index].status = true;
      },
      openNotification: function(index) {
        this.langData.notifications[index].status = false;
        this.langData.notifications[index].unread = false;
        News.set_msg_read(index);
      },
      viewMore: function(){
        this.counter+=3;
        const length = this.langData.notifications.length;
        if( this.counter > length ){
          this.nomore = this.langData.nomore;
        }
      },

      readNotifications: function(){
        const existingEntries = JSON.parse(localStorage.getItem('newsFeed'));
        if (existingEntries !== null) {
          const tempList = [];
          let unreadCount = 0;
          existingEntries.forEach((item) => {
            item.content.forEach((value) => {
              const pushData = {
                date: item.time,
                text: value.alert,
                status: true,
                unread: item.unread,
              };
              if(item.unread) {
                unreadCount++;
              }
              tempList.push(pushData);
            });
          });
          this.unreadNum = unreadCount;
          eventBus.$emit('msgCountChange', unreadCount);
          const newsCount = tempList.length - this.langData.notifications.length;
          for(let i=newsCount-1; i>=0; i--) {
            this.langData.notifications.unshift(tempList[i]);
          }
        }


      }
    },
    beforeDestroy() {
      clearInterval(this.feedInterval);
    },
}
</script>

<style lang="sass" scoped>
  $themeOrange: #E27347;
  .profile-container{
    padding-top: 50px;
    font-family:"uf-book";
  .ghost-button{
    display: inline-block;
    color:$themeOrange;
    border:1px solid $themeOrange;
    text-align: center;
    outline: none;
    text-decoration: none;
    background-color: white;
    cursor: pointer;
    font-family: 'Helvetica Neue',"微软雅黑";
    transition: all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
  }
  .ghost-button:hover,.ghost-button:active{
    background-color: $themeOrange;
    color:white;
    border:1px solid white;
  }

  .page-wrapper{
    width: 100%;
    text-decoration: left;
    display: inline-block;
   }
  .profile-wrap{
    color: $themeOrange;
    font-size: .9rem;
    display: flex;
    .side-nav{
      display: block;
      width: 30vw;
      border-radius: 16px;
      background-color: $themeOrange;
      //box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
      .nav-list{
        margin: 128px 0;
        li{
          line-height: 77px;
          cursor: pointer;
          position: relative;
          text-align: center;
          margin-bottom:14px;
          color: #9B2B00;
          font-size: 1rem;
          transition: background-color .4s ease-in-out;
          -webkit-transition:background-color .4s ease-in-out;
          -moz-transition:background-color .4s ease-in-out;
          -o-transition:background-color .4s ease-in-out;
          height: 77px;
        }
        li:last-child{
          line-height: 28px;
          padding-top:10px;
      }
        li:hover,li:focus,li.active{
          font-family:"ufbigfont";
          background-color:#FFBFA7;
          color:$themeOrange;
          font-size:0.9rem;
          border-right:6px solid #9C5148;
        }
      }
    }
    .question-anwser{
      padding: 3vw;
      vertical-align: top;
      background-color: #fff;
      width: 100%;
      li{
        padding: 2%;
        .anwser-text{
          color:$themeOrange;
          li{
            list-style-type:disc;
          }
          .linktext{
            display: inline !important;
            color: $themeOrange;
            text-decoration: underline;
          }
          a{
              color:$themeOrange;
          }
        }
      }
      li:hover{
        background-color:#fafafa;
      }
      .summary-wrap{
        width:100%;
        .header-profile{
          &>img{
            width:60px;
            height:60px;
            vertical-align:top;
            border-radius:50%;
          }
          .info{
            padding-left:26px;
            display:inline-block;
            &>p:first-child{
              font-weight: bold;
            }
            .email{
              padding-left:10px;
            }
          }
        }
        .message-wrap{
          width:100%;
          &>h2{
            font-family:"ufbigfont";
            list-style:circle;
            font-size:24px;
            padding:50px 0;
            margin:0;
            .empty-circle{
              border: 4px solid #D95E2E;
              border-radius: 50%;
              width: 15px;
              height: 15px;
              background: #fff;
              display: inline-block;
              margin-right:10px;
            }
            .badge{
              background-color: #D95E2E;
              padding: 0 0.8rem;
              line-height: 1rem;
              margin-left: 1rem;
              text-align: center;
              vertical-align: bottom;
              font-size: 12px;
              font-family: "uf-book";
              font-weight: normal;
            }
          }

            ul{
              li{
                padding-left:14px;
                list-style:none;
                color:#555;
                padding:8px 0;
                margin-left:3px;
                position:relative;
                margin-bottom:30px;
                .date{
                  padding-left:18px;
                  font-size: 14px;
                  color: #555;
                  font-weight: 600;
                }
                .active{
                  display:inline-block;
                  width:6px;
                  height:6px;
                  background-color:$themeOrange;
                  border-radius:50%;
                  position:absolute;
                  top:56px;
                }
                .title{
                  margin-bottom:10px;
                  font-size:1rem;
                  padding-left: 17px;
                }
                .news-text{
                  padding-left: 17px;
                  margin-top: 17px;
                  margin-bottom: 6px;
                  width:80%;
                  height:1.5rem;
                  overflow:hidden;
                  font-size:.9rem;
                }
                  .show-all{
                    padding-left: 17px;
                    margin-top: 17px;
                    margin-bottom: 6px;
                    width:80%;
                    height:auto ;
                    overflow:visiable ;
                  }

                a{
                  padding-left:16px;
                  font-size: 16px;
                  color:$themeOrange;
                  text-decoration:underline;
                  cursor:pointer;
                }
                a:hover{
                  font-weight:700;
                }
              }
            }

        }
        .divide-line{
          border-top:1px solid $themeOrange;
          width:100%;
          padding:0;
          margin-top: 80px;
          margin-bottom: 30px;
          margin-left: -40px;
        }
        .mydevice-wrap{
          h2{
            font-family:"ufbigfont";
            font-size: 24px;
            color: $themeOrange;
            letter-spacing: -0.5px;
            padding:30px 0;
            margin: 0;
          }
          .device-wrap{
            padding-left:12px;
            display:flex;
            display:-webkit-flex;
            display:-moz-flex;
            img{
              width:100%;
              height:100%;
              max-width: 160px;
              vertical-align:top;
            }
            .device-detail{
              padding-left:5%;
              h3{
                font-weight:900;
                font-size: 18px;
                margin:0;
                padding:0;
              }
              .Warranty{
                padding:36px 0;
                span{
                  color:#555;
                  padding-right:2vw;
                }
              }
              .link{
                a{
                  padding: 5px 30px 0 5px;
                  margin-right: 30px;
                  color: #D95E2E;
                  background: url(../assets/img/profile/icon_play.svg) no-repeat right bottom;
                  text-decoration: underline;
                  transition:.5s;
                  -webkit-transition:.5s;
                  -moz-transition:.5s;
                  -o-transition:.5s;
                }
                  a:hover{
                  font-weight:700;
                }
              }
            }
          }
        }
      }
      .notification-wrap{
        width:80%;
        h2{
          margin:0;
          padding-top:30px;
          font-family:"ufbigfont";
          font-size:18px;
          .badge{
            background-color: #D95E2E;
            padding: 0 0.8rem;
            line-height: 1rem;
            margin-left: 1rem;
            text-align: center;
            vertical-align: bottom;
            font-size: 12px;
            font-family: "uf-book";
            font-weight: normal;
          }
        }
        ul{
          max-width:798px;
          padding-left:16px;
          li:first-child{
          margin-top:0;
        }
          li{
            padding:38px 0;
            border-top:1px dotted $themeOrange;
            position:relative;
            .date{
              color: #555;
              font-size: 0.9rem;
              padding-bottom: 8px;
              display: block;
              font-weight: 600;
            }
            .unread{
              display: inline-block;
              width: 6px;
              height: 6px;
              background-color: #D95E2E;
              border-radius: 50%;
              margin-right: 10px;
              position:absolute;
              top: 82px;
              left: -16px;
            }
            .title{
              font-size:1rem;
              font-color:#555;
              margin-bottom:10px;
            }
            .text{
              color:#555;
              font-size:.9rem;
              height:1.1rem;
              overflow:hidden;
            }
            .brief-text{
              overflow:visible;
              height:auto;
            }
            .toggle{
              color:$themeOrange;
              font-size:14px;
              padding-top: 12px;
              display: block;
              cursor:pointer;
              transition:.5s;
              -webkit-transition:.5s;
              -moz-transition:.5s;
              -o-transition:.5s;
              .glyphicon{
                font-style:normal;
                font-size:12px;
                line-height:0;
              }
            }
          }

          li:first-child{
          border-top:none;
          }
        }
        .nomore{
          text-align:center;
          padding:10px 0;
          font-size:14px;
          color:#555;
          display:block;
          margin:0 auto;
        }
        .toggle:hover,.view-more:hover{
          text-decoration:underline;
        }
        .view-more{
          width:210px;
          text-align:center;
          font-size:16px;
          background: rgba(217,94,46,0.09);
          padding: 10px 0;
          margin: 0 auto;
          display: block;
          color:$themeOrange;
          border-radius:25px;
          cursor:pointer;
          span{
            font-size:14px;
            font-weight:normal;
            margin-left:10px;
          }
        }
      }
      .info-wrap{
        width:100%;
        .profile-header{
          padding-bottom:20px;
          h2{
            font-family:"ufbigfont";
            font-size:18px;
            margin:0;
            padding-bottom:40px;
          }
          img{
            width: 60px;
            height: 60px;
            vertical-align: top;
            border-radius:50%;
          }
            .select-file{
              position:relative;
              display:inline-block;
              padding-left:26px;
              color:#555;
              width: 210px;
              p{
                padding-bottom: 10px;
              }
              .file{
                position: absolute;
                top: 0;
                right: 29px;
                width: 36px;
                height: 20px;
                text-align: center;
                display: inline-block;
                border: 2px solid rgba(85, 85, 85, 0.5);
                background: white;
                border-radius: 2px;
                line-height: 4px;
                font-size: 20px;
                cursor: pointer;
                input{
                  opacity: 0;
                  width: inherit;
                  height: inherit;
                  position: absolute;
                  top: 0;
                  right: 0;
                  cursor: pointer;
                }
              }
              .tip{
                font-size:10px;
              }
            }
        }
        .editting{
          display: none;
        }
        .form-group{
          padding-bottom: 20px;
          input{
            color: rgba(217,94,46,0.88);
            font-family: "uf-book";
          }
          label{
            color:#555;
            font-weight:normal;
          }
            .select-list{
              width: 100%;
              overflow: hidden;
              text-align: right;
              height: 33px;
              border: 1px solid #ccc;
              font-size:16px;
              color: $themeOrange;
              outline: 0;
              border-radius: 4px;
              &>option{
                width:inherit;
                overflow:hidden;
                font-size:14px;
                background-color:#2D2D2D;
                color:#fff;
              }
            }
          .btn{
            width: 134px;
            padding: 10px 0;
            text-align: center;
            border: 1px solid transparent;
            box-size: border-content;
            font-size: 16px;
            border-radius: 0;
          }
          .btn-save,.btn-edit{
            color: #fff;
            background: rgba(217,94,46,0.84);
            transition: .5s;
          }
            .btn-save:hover,.btn-edit:hover{
            background:$themeOrange;
          }
          .btn-cancel{
            color:#555;
            background:white;
            border-color:rgba(85,85,85,0.5);
            transition:.5s;
            -webkit-transition:.5s;
            -moz-transition:.5s;
            -o-transition:.5s;
          }
            .btn-cancel:hover{
            background:rgba(85,85,85,0.84);
          }
        }
        .last-btn{
          padding-bottom:0;
          text-align: center;
        }
        .checkbox-wrap{
          color:#555;
          font-size:.9rem;
        }
        .inline-wrap{
          width:100%;
          padding-left:15px;
          .form-group{
            input{
              display: block;
            }
            label{
              text-align:left;
              display:block;
              font-weight:normal;
              span{
                color:$themeOrange;
              }
            }
          }
        }
      }
      .support-wrap{
        width:100%;
        h3{
          margin:0;
          margin-bottom:32px;
          font-family:"ufbigfont";
          font-size:18px;
        }
        h3:first-letter{
          padding-bottom:6px;
          border-bottom:2px solid $themeOrange;
        }
        .small-wrap{
            padding-bottom:54px;
            .box-wrap{
              display:flex;
              display:-webkit-flex;
              display:-moz-flex;
              a{
                display: block;
                text-align: center;
                cursor: pointer;
                width: 30%;
                padding: 70px 0 10px;
                margin-bottom: 26px;
                background: url(../assets/img/profile/icon_Video.svg) no-repeat center top;
                color:#555;
                transition: .5s;
                -webkit-transition:.5s;
                -moz-transition:.5s;
                -o-transition:.5s;
              }
                a:hover{
                color:$themeOrange;
              }
                .bg1{
                  background-image: url(../assets/img/profile/icon_Video.svg);
                }
                .bg2{
                  background-image: url(../assets/img/profile/icon_documents.svg);
                }
                .bg3{
                  background-image: url(../assets/img/profile/icon_developers.svg);
                }
                .bg4{
                  background-image: url(../assets/img/profile/icon_Forum.svg);
                }
                .bg5{
                  background-image: url(../assets/img/profile/icon_fb.svg);
                }
                .bg5_c{
                  background-image: url(../assets/img/profile/icon_wechat.svg);
                }
                .bg6{
                  background-image: url(../assets/img/profile/icon_questions.svg);
                }
                .bg7{
                  background-image: url(../assets/img/profile/icon_message.svg);
                }
            }
        }

      }
      .change-password{
        color:#555;
        font-size:14px;
        .form-group{
          padding-bottom:20px;
          label{
            display:block;
            font-size:18px;
            font-weight:normal;
          }
          input{
            width:100%;
            max-width:300px;
          }
          input[type="password"]{
            letter-spacing:0.4rem;
            color:$themeOrange;
            font-size:18px;
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            display: none;
          }
        }
        .btn{
          width:134px;
          font-size:18px;
          padding:11px 0;
          text-align:center;
          color:#fff;
          background:rgba(217,94,46,0.84);
          max-width:170px;
          border-radius: 0;
          transition:.5s;
          -webkit-transition:.5s;
          -moz-transition:.5s;
          -o-transition:.5s;
        }
          .btn:hover{
          background:$themeOrange;
        }
      }
    }
  }
}
</style>
