<template lang="html">
    <div class="select-wrapper login-form">
      <div class="reset-wrapper" v-if="resetSuccess">
        <div class="font-big">
          {{loginPage.reset}}
        </div>
        <div class="reset-success">
          <div class="emailSent">
            {{loginPage.emailSent}}
          </div>
          <div class="emailSentText">
            {{loginPage.emailSentText}}
          </div>
        </div>
        <div class="action-wrapper">
          <div class="confirm-button" @click="cancelReset">
            <img src="./assets/img/Arrow_enter.svg" alt="">
          </div>
          <div @click="cancelReset" class="cancel-btn">{{loginPage.back}}</div>
        </div>
      </div>
      <div class="reset-wrapper" v-else>
        <div class="font-big">
          {{loginPage.reset}}
        </div>
        <div class="input-wrapper form-group">
          <label>{{ loginPage.enterEmail }}</label>
          <input type="email" v-model="userEmail" hintTextClass="hint-text" />
          <span class="error-color">{{ errorMsg.emailFormat }}</span>
        </div>
        <div class="action-wrapper">
          <div class="confirm-button" @click="startReset">
            <img src="./assets/img/Arrow_enter.svg" alt="">
          </div>
          <div @click="cancelReset" class="cancel-btn">{{loginPage.cancel}}</div>
        </div>
      </div>

    </div>
</template>
<script>
import config from "../../../config";
export default {
  data() {
    return {
      loginState: '1',
      activeTab: 'deviceTab',
      registerBirth: '',
      userEmail: '',
      hosturl: '',
      resetSuccess: false,
      loginPage: {},
      errorMsg:{
        emailFormat:'',
      },
    };
  },
  created() {
    const langText = {
				cn:{
          reset: '重置密码',
          cancel: '取消',
          back:'回到登录界面',
          enterEmail:'请输入邮箱:',
          emailSent: '邮件已发送！',
          emailSentText: '请点击邮件中的链接，设置新密码。',
          validation:{
            emailFormat:'邮箱格式不正确'
          },
				},
				en:{
          reset: 'Reset password',
          cancel: 'Cancel',
          back:'Back to Login Page',
          enterEmail:'Please enter your email:',
          emailSent: 'Email Sent!',
          emailSentText: 'Please click the link in the email to reset password.',
          validation:{
            emailFormat:'Email address format is not correct',
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
    //this.hosturl = 'http://192.168.31.127:9080/';
    self = this;
    this.hosturl = config.hostURL;
    document.onkeydown = function(ev){
      if(ev.keyCode === 13){
        self.startReset();
      }
    }
  },
  methods: {
    isEmail(email) {
      const filter = /\S+@\S+\.\S+/;
      if (filter.test(email)) {
        return true;
      }
      return false;
    },
    checkPassword() {
      if(this.isEmail(this.userEmail)){
        this.errorMsg.emailFormat = '';
        return true;
      }else{
        this.errorMsg.emailFormat = this.loginPage.validation.emailFormat;
        return false;
      }
    },
    cancelReset() {
      this.$router.push({ name: 'userlogin' });
    },
    startReset() {
      if(this.checkPassword()){
        const url = `${this.hosturl}api/1.0/resetpassword`;
        const user = {
          email: this.userEmail,
        };
        this.$http.post(url, user).then(response => {
          console.log(response);
          this.resetSuccess = true;
        }, response => {
          console.log('error', response);
        });
      }
    },
  },
  computed: {
  },
};

</script>

<style lang="sass" scoped>
  $themeOrange:#D95E2E;
  .select-wrapper{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    justify-content: center;
    align-items: center;
    color:$themeOrange;
    font-family:"uf-book";
    .reset-wrapper{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      .reset-success{
        padding:80px 0;
        .emailSent{
          font-weight:700;
        }
        .emailSentText{

        }
        div{
          text-align: center;
          font-size:.9rem;
        }
      }
      .input-wrapper{
        padding: 70px 0 40px;
        max-width:400px;
        width: 100%;
        label{
          font-size:.9rem;
          font-weight:normal;
        }
        input{
          color:#555;
          border:none;
          border-bottom: 2px solid rgba(217, 94, 46, 0.35);
          outline:0;
          display: block;
          width: 100%;
          height: 34px;
          font-size: 14px;
          line-height: 1.42857143;
          text-align:center;
        }
      }
      .font-big{
        font-family:'ufbigfont';
        font-size:24px;
      }
      .action-wrapper{
        .confirm-button{
          position: relative;
          width: 60px;
          height: 60px;
          margin: 0 auto;
          background: #D95E2E;
          border-radius: 50%;
          box-shadow: 0 2px 10px -1px #D95E2E;
          cursor: pointer;
          text-align: center;
          line-height: 60px;
          img{
            width:18px;
          }
        }
        .cancel-btn{
          text-align: center;
          cursor: pointer;
          text-decoration: underline;
          font-size:.9rem;
          margin-top:18px;
        }
      }
    }
    .error-color {
      color: #555;
      font-size: 12px;
    }
  }


</style>
