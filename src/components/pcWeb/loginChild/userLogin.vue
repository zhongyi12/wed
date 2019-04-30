<template lang="html">
    <div class="select-wrapper">
      <div class="signin-wrapper" id="login">
        <div class="signin-form login-form left" v-show="startSignin">
          <div class="font-big">{{loginPage.signin}}</div>
          <div class="input-wrapper">
            <div class="form-wrapper">
              <label>{{loginPage.email}}</label>
              <input v-model="loginEmail" @blur="checkLoginEmail()" autofocus/>
              {{errorMsg.loginEmail}}
            </div>
            <div class="form-wrapper">
              <label>{{loginPage.password}}</label>
              <input type="password" v-model="loginPassword"  @blur="checkLoginPassword()"/>
              {{errorMsg.loginPassword}}
              <div class="forget-password" @click="goToReset()">
                {{loginPage.forget}}
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="checkbox-wrapper">
            <el-checkbox class="login-checkbox" v-model="loginRemember" @change="rememberChange" >{{loginPage.remember}}</el-checkbox>
          </div>
          <div class="confirm-button" @click="checkLogin()">
           <img src="./assets/img/Arrow_enter.svg" alt="">
          </div>
          <!--<input type="button" class="confirm-button" @click="checkLogin()" @keyup.enter="checkLogin()"/>-->
        </div>
        <div class="sigin-switch login-switch" v-show="startSignin">
          <span class="switch-subtxt" v-html="loginPage.switchRegister" @click="loginState = '3'"></span>
        </div>
      </div>
      <div class="register-wrapper" id="register">
        <div class="register-form login-form" v-show="startRegister">
          <div class="font-big">{{loginPage.register}}</div>
          <div class="input-wrapper">
            <div class="form-wrapper">
              <label>{{loginPage.email}}</label>
              <input v-model="registerEmail" @blur="checkRegisterEmail()" autofocus/>
              {{errorMsg.registerEmail}}
            </div>
            <div class="form-wrapper">
              <label>{{loginPage.birth}}</label>
              <input  class="datepick date-style" type="date" v-model="registerBirth" value="2017-01-01" max="2017-09-01" min="1900-09-01" @blur="checkRegisterBirth()"/>
              {{errorMsg.registerBirth}}
            </div>
            <div class="sub-wrapper">
              <div class="form-wrapper country-wrapper">
                <label>{{loginPage.country}}</label>
                <select class="select-list"   v-model="registerCountry" >
                  <option value="0" >{{loginPage.select}}</option>
                  <option :value="country.Code" v-for="country in countryList" >{{country.Name}}</option>
                </select>
                {{errorMsg.registerCountry}}
              </div>
              <span id="blank-block"></span>
              <div class="form-wrapper gender-wrapper">
                <label>{{loginPage.gender.gender}}</label>
                <select class="select-list"  v-model="registerGender">
                  <option value="0" >{{loginPage.select}}</option>
                  <option value="1" >{{loginPage.gender.male}}</option>
                  <option value="2" >{{loginPage.gender.female}}</option>
                  <option value="3" >{{loginPage.gender.unspecified}}</option>
                </select>
                {{errorMsg.registerGender}}
              </div>
            </div>
            <div class="form-wrapper">
              <label>{{loginPage.password}}</label>
              <input :label="loginPage.password" labelFloat type="password" v-model="registerPassword"  :errorText="errorMsg.registerPassword"  @blur="checkRegisterPassword()"/>
              {{ errorMsg.registerPassword }}
            </div>
            <div class="form-wrapper">
              <label>{{loginPage.repassword}}</label>
              <input :label="loginPage.repassword" labelFloat type="password" v-model="registerRePassword"  :errorText="errorMsg.registerRePassword"  @blur="checkRegisterRePassword()"/>
              {{ errorMsg.registerRePassword }}
            </div>
          </div>
          <div class="checkbox-wrapper">
            <el-checkbox class="login-checkbox" v-model="registerPromotion">{{loginPage.promotion}}</el-checkbox>
          </div>
          <div class="confirm-button" @click="sendRegister" >
            <img src="./assets/img/Arrow_enter.svg" alt="">
          </div>
        </div>
        <div class="register-switch login-switch" v-show="startRegister">
          <span class="switch-subtxt" v-html="loginPage.switchLogin" @click="loginState = '2'"></span>
        </div>
      </div>
    </div>
</template>
<script>
const countries = require('./assets/json/countries.json');
const eventBus = require('../module/eventBus');
import config from "../../../config";
export default {
  data() {
    return {
      hosturl: '',
      loginState: '2',
      loginEmail: '',
      loginPassword: '',
      loginRemember: false,
      registerEmail: '',
      registerPassword: '',
      registerRePassword: '',
      registerCountry: '0',
      registerGender: '0',
      registerBirth: 'YY-MM-DD',
      registerPromotion: false,
      errorMsg: {
        loginEmail: '',
        loginPassword: '',
        registerEmail: '',
        registerPassword: '',
        registerRePassword: '',
        registerCountry: '',
        registerGender: '',
        registerBirth: '',
      },
      countryList: [],
      show: {
        loginDark: true,
        registerDark: true,
      },
      loginPage: {},
    };
  },
  created() {
    const langText = {
				cn:{
          signin: '登录',
          register: '注册',
          email: '邮箱',
          emailHint: '请输入邮箱地址',
          password: '密码',
          repassword: '确认密码',
          remember: '自动登录',
          forget: '忘记密码？',
          switchRegister: '新用户？<strong> 点击注册</strong>',
          switchLogin: '老用户？<strong> 点击登录</strong>',
          birth: '出生日期',
          country: '国家',
          gender:{
            gender: '性别',
            male:'男',
            female:'女',
            unspecified:'无法界定',
          },
          select: '选择',
          promotion: '接收最新的uArm资讯（产品更新、折扣信息等）。',
          validation: {
            emailFormat: '无效邮箱地址',
            emailRegisted: '该邮箱已注册。',
            passwordFormat: '请至少输入6个字符',
            passwordMatch: '密码不匹配',
            loginFail: '邮箱或密码不正确',
            countryEmpty: '请选择您所在的国家',
            genderEmpty: '请选择你的性别',
            birthEmpty: '请输入您的生日',
          },
          reset: '重置密码',
          cancel: '取消',
          emailSent: '邮件已发送！',
          emailSentText: '请点击邮件中的链接，设置新密码。',
          registerSuccess: '注册成功！',
          emailConfrim: '确认邮件已发送！',
          enterStudio: '进入uArm Studio',
          genderList: {
            1: '男',
            2: '女',
            3: '无法界定',
          },
				},
				en:{
          signin: 'SIGN IN',
          register: 'REGISTER',
          email: 'Email',
          emailHint: 'Please enter your email',
          password: 'Password',
          repassword: 'Confirm Password',
          remember: 'Keep me logged in',
          forget: 'Forget your password?',
          switchRegister: 'New here?<strong> REGISTER</strong>',
          switchLogin: 'Have an Account?<strong> SIGN IN</strong>',
          birth: 'Date of Birth',
          country: 'Country',
          gender:{
            gender: 'Gender',
            male:'Male',
            female:'Female',
            unspecified:'Unspecified',
          },
          select: 'Select',
          promotion: 'Keep me updated with the latest news(products, discount, etc)',
          validation: {
            emailFormat: 'Invalid Email address',
            emailRegisted: 'This email is already registered.',
            passwordFormat: 'Please enter 6 characters at least.',
            passwordMatch: 'Password is not match',
            loginFail: 'Email or password is incorrect',
            countryEmpty: 'Please select your country',
            genderEmpty: 'Please select your gender',
            birthEmpty: 'Please fill your birthday',
          },
          reset: 'Reset password',
          cancel: 'Cancel',
          emailSent: 'Email Sent!',
          emailSentText: 'Please click the link in the email to reset password.',
          registerSuccess: 'Done!',
          emailConfrim: 'Confirmation email sent!',
          enterStudio: 'Enter uArm Studio',
          genderList: {
            1: 'Male',
            2: 'Female',
            3: 'Unspecified',
          },
				},
			};
      if(this.$route.params.lang==='en' || this.$route.params.lang==='cn'){
  			this.loginPage=langText[this.$route.params.lang];
			}
			else
				this.loginPage=langText['cn'];

  },
  mounted() {
    //this.hosturl = 'http://192.168.31.127:9080';
    self = this;
    this.hosturl = config.hostURL;
    this.countryList = countries;
    if (this.$route.params.page!==undefined) {
      this.loginState = this.$route.params.page;
    }
    eventBus.$on('loginSelect', (page) => {
      this.loginState = page;
    });
    document.onkeydown = function(ev){                        //点击enter登录
      if(ev.keyCode === 13 && self.startSignin){
        self.checkLogin();
      }else if(ev.keyCode === 13 && self.startRegister){
        self.sendRegister();
      }
    };
    // console.log('log', this.loginState);
  },
  methods: {
    goToReset() {
      this.$router.push({ name: 'resetpassword' });
    },
    sendRegister() {
      sessionStorage.avatar = '';
			sessionStorage.loginToken = null;
			localStorage.removeItem('loginToken');
			this.online = false;
			sessionStorage.online = this.online;
	    // console.log('logout success');
      if (this.registerEmail === '' || this.registerPassword === ''
          || this.registerCountry === '0' || this.registerGender === '0') {
        this.checkRegisterEmail();
        this.checkRegisterPassword();
        this.checkRegisterRePassword();
        this.checkRegisterCountry();
        this.checkRegisterGender();
      }
      else if (this.form2Validate) {
        const url = `${this.hosturl}api/1.0/signup`;
        const nickname = this.registerEmail.split('@')[0];
        const newUser = {
          email: this.registerEmail,
          password: this.registerPassword,
          nickname,
          gender: this.registerGender,
          birthday: this.registerBirth,
          country: this.registerCountry,
          promotion: this.registerPromotion,
        };
        this.$http.post(url, newUser).then(response => {
          const returnBack = response.data === undefined ? response : response.data;
          sessionStorage.loginToken = returnBack.data.sessionToken;
          sessionStorage.email = this.registerEmail;
          sessionStorage.online = true;
          this.setCookie('usertoken', returnBack.data.sessionToken, 1);
          eventBus.$emit('stateChange', true);
          // const muteData = {
          //   name: nickname,
          //   email: this.registerEmail,
          //   token: response.data.data.sessionToken,
          // };
          //this.$store.commit('SET_USER_PROFILE', muteData);
          this.handleRedirect('registersuccess');
        }, response => {
//          console.log('error', response);
        });
      }
    },
    checkLogin() {
      if (this.loginEmail === '' || this.loginPassword === '') {
        this.checkLoginEmail();
        this.checkLoginPassword();
      }
      else if (this.form1Validate) {
        const url = `${this.hosturl}api/1.0/signin`;
        const user = {
          email: this.loginEmail,
          password: this.loginPassword,
        };
        this.$http.post(url, user).then(response => {

          //  console.log('success', response);
          const returnBack = response.data === undefined ? response : response.data;
          if (returnBack.code === 0) { // login success
            sessionStorage.loginToken = returnBack.data.sessionToken;
            sessionStorage.email = returnBack.data.email;
            sessionStorage.avatar = returnBack.data.avatar;
            // const muteData = {
            //   name: response.data.data.nickname,
            //   email: this.loginEmail,
            //   token: response.data.data.sessionToken,
            //   emailVerified: response.data.data.emailVerified,
            //   avatar: response.data.data.avatar,
            // };
            // this.$store.commit('SET_USER_PROFILE', muteData);
            sessionStorage.online = true;
            eventBus.$emit('stateChange', true);
            this.keepLogin(returnBack.data.sessionToken);
            this.handleRedirect('profile');
          }
          else { // login fail
            this.errorMsg.loginEmail = this.loginPage.validation.loginFail;
          }

        }, response => {
//          console.log('error', response);
        });
      }
    },
    handleRedirect(name) {
      if (this.$route.params.from) {
//        cosnole.log(this.$route.params.from,this.$route.params.lang, this.$route.params.type)
        this.$router.push({ name: this.$route.params.from,params:{lang:this.$route.params.lang, type: this.$route.params.type} });
      }
      else {
        this.$router.push({ name });
      }
    },
    keepLogin(mytoken){
      if( this.loginRemember){
        // localStorage.setItem('loginToken',mytoken);
        this.setCookie('usertoken', mytoken, 1);
      }
    },
    rememberChange() {
      console.log(this.loginRemember);
    },
    setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      const expires = `expires=${d.toUTCString()}`;
      document.cookie = `${cname}=${cvalue}; ${expires}`;
    },
    isEmail(email) {
      const filter = /\S+@\S+\.\S+/;
      if (filter.test(email)) {
        return true;
      }
      return false;
    },
    checkLoginEmail() {
      if (this.isEmail(this.loginEmail)) {
        this.errorMsg.loginEmail = '';
      }
      else {
        this.errorMsg.loginEmail = this.loginPage.validation.emailFormat;
      }
    },
    checkLoginPassword() {
      if (this.loginPassword.length > 5) {
        this.errorMsg.loginPassword = '';
      }
      else {
        this.errorMsg.loginPassword = this.loginPage.validation.passwordFormat;
      }
      this.checkLoginEmail();
    },
    checkRegisterEmail() {
      if (this.isEmail(this.registerEmail)) {
        const url = `${this.hosturl}api/1.0/checkemailvalidate`;
        const checkemail = {
          email: this.registerEmail,
        };
        this.$http.post(url, checkemail).then(response => {
          // console.log(response);
          if (response.data.code === 0) {
            this.errorMsg.registerEmail = '';
          }
          else {
            this.errorMsg.registerEmail = this.loginPage.validation.emailRegisted;
          }
        }, response => {
//          console.log('error', response);
          this.errorMsg.registerEmail = 'Server is unavaliable';
        });
      }
      else {
        this.errorMsg.registerEmail = this.loginPage.validation.emailFormat;
      }
    },
    checkRegisterBirth() {
      if (this.registerBirth === '') {
        this.errorMsg.registerBirth = this.loginPage.validation.birthEmpty;
      }
      else {
        this.errorMsg.registerBirth = '';
      }
    },
    checkRegisterPassword() {
      if (this.registerPassword.length > 5) {
        this.errorMsg.registerPassword = '';
      }
      else {
        this.errorMsg.registerPassword = this.loginPage.validation.passwordFormat;
      }
    },
    checkRegisterRePassword() {
      if (this.registerRePassword === this.registerPassword) {
        this.errorMsg.registerRePassword = '';
      }
      else {
        this.errorMsg.registerRePassword = this.loginPage.validation.passwordMatch;
      }
    },
    checkRegisterCountry() {
      if (this.registerCountry === '0') {
        this.errorMsg.registerCountry = this.loginPage.validation.countryEmpty;
      }
      else {
        this.errorMsg.registerCountry = '';
      }
    },
    checkRegisterGender() {
      if (this.registerGender === '0') {
        this.errorMsg.registerGender = this.loginPage.validation.genderEmpty;
      }
      else {
        this.errorMsg.registerGender = '';
      }
    },
  },
  watch: {
    '$route.params.page': function() {
      this.loginState = this.$route.params.page;
      // console.log('watch', this.$route.params.page);
    }
  },
  computed: {
    selectLogin() {
      return this.loginState === '1';
    },
    startSignin() {
      return this.loginState === '2';
    },
    startRegister() {
      return this.loginState === '3';
    },
    form1Validate() {
      if (this.errorMsg.loginEmail === '' && this.errorMsg.loginPassword === '') {
        return true;
      }
      return false;
    },
    form2Validate() {
      if (this.errorMsg.registerEmail === '' && this.errorMsg.registerPassword === ''
          && this.errorMsg.registerRePassword === '' && this.errorMsg.registerCountry === ''
          && this.errorMsg.registerGender === '' && this.errorMsg.registerBirth === '') {
        return true;
      }
      return false;
    },
  },
};

</script>

<style lang="sass" scoped>
  $themeOrange:#D95E2E;
  .font-big{
    font-family: ufbigfont;
    color: $themeOrange;
    font-size: 24px;
  }
    .select-wrapper{
      display: flex;
      height: 100%;
      justify-content: center;
      & > div{
        display: flex;
        flex-direction: column;
        height: 100%;
      /*  & > div{
          height: 100%;
        }
      */
        .login-select{
          width: 30vw;
          display: flex;
          justify-content: center;
          background-color: #d2d2d2;
          z-index: 1;
          cursor: pointer;
          .font-big{
            top: 24.5vw;
          }
        }
        .login-select:hover{
          background-color: #444;
          border-left: none;
          z-index: 3;
        }
        .login-select.right:hover{
          // box-shadow: -10px 0 20px 0 rgba(66,66,66,0.5);
        }
        .login-select.left:hover{
          // box-shadow: 10px 0 20px 0 rgba(66,66,66,0.5);
        }
        .login-form{
          font-family:'uf-book';
          background-color: white;
          width: 60vw;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          position: relative;
          .font-big{
            width: 100%;
            text-align: center;
            left: 0;
            padding-bottom: 6px;
          }
          .input-wrapper{
            margin:0 auto;
            text-align:center;
            width: 100%;
            max-width: 600px;
            padding-top:18px;
            .form-wrapper{
              position:relative;
              margin-top:40px;
              .date-style{
                padding-left:36px;
              }
              &>label{
                margin:0;
                display:block;
                font-size:20px;
                color:$themeOrange;
                font-weight:normal;
              }
              &>input{
                width:100%;
                padding:6px 0 3px;
                border:none;
                border-bottom:2px solid $themeOrange;
                border-bottom-color:rgba(219,94,46,0.3);
                text-align: center;
                font-size:16px;
                color:#555;
                outline: 0;
              }
              .forget-password{
                position:absolute;
                right:-94px;
                bottom:0;
                width:98px;
                color:$themeOrange;
                font-size:14px;
                font-weight:normal;
                cursor:pointer;
              }
            }
            .sub-wrapper{
              display: flex;
              width:100%;
              .form-wrapper{
                width:80%;
                .select-list{
                  //appearance:none;
                  //-moz-appearance:none;
                  //-webkit-appearance:none;
                  width:100%;
                  overflow:hidden;
                  border:none;
                  border-bottom:2px solid $themeOrange;
                  border-bottom-color:rgba(219,94,46,0.3);
                  padding-bottom: 14px;
                  padding-top: 18px;
                  text-align:right;
                  font-size:16px;
                  color:$themeOrange;
                  outline: 0;
                  &>option{
                    width:inherit;
                    overflow:hidden;
                    font-size:14px;
                    background-color:#2D2D2D;
                    color:#fff;
                  }
                }
              }
              #blank-block{
                display:block;
                width: 20%;
                margin:0 auto;
              }
            }
            .datepick{
              padding-left: 4vw;
            }
          }
          .checkbox-wrapper{
            padding-top:16px;
            margin:0 auto;
            color:$themeOrange;
            font-size: 16px;
            label{
              margin:0;
              padding:0;
              font-weight:normal;
            }
          }
          .confirm-button{
            position:relative;
            width:60px;
            height:60px;
            margin: 0 auto;
            margin-top:58px;
            background:$themeOrange ;
            border-radius: 50%;
            box-shadow: 0 2px 10px -1px $themeOrange;
            cursor:pointer;
            text-align:center;
            line-height:60px;
            &>img{
              width:18px;
              height:18px;
            }
          }

        }
      .login-form.left{
        //  box-shadow: 10px 0 20px 0 rgba(66,66,66,0.5);
        }
        .login-switch{
          padding-top:58px;
          display:inline-block;
          margin:0 auto;
          justify-content:center;
          flex-direction:column;
          align-items:center;
          .switch-subtxt{
            cursor:pointer;
            color:$themeOrange;
            font-size:16px;
            text-align: center;
            font-family: 'uf-book';
          }
          img{
            width: 5vm;
            height: 5vm;
          }
        }
        .register-button{
          border-left:1px solid #ddd;
        }
        .signin-form{
          .font-big{
            top:9vw;
          }
        }
        .register-form{
          .font-big{
            top:7vw;
          }
          .form-wrapper > input[type="date"]::-webkit-calendar-picker-indicator {
            display: none;
          }
          .form-wrapper > input[type="password"]{
             letter-spacing:0.6rem;
             color:$themeOrange;
             font-size:20px;
            }
        }
      }

    }




</style>
