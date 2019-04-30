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
            <img src="./loginChild/assets/img/Arrow_enter.svg" alt="">
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
          <input  type="password" v-model="newPassword" hintTextClass="hint-text" @blur="checkPassword()"/>
          {{ errorMsg.Password }}
        </div>
        <div class="input-wrapper form-group">
          <label>{{ loginPage.reEnterEmail }}</label>
          <input  type="password" v-model="newRePassword" hintTextClass="hint-text"  @blur="checkRePassword()"/>
          {{ errorMsg.RePassword }}
        </div>
        <div class="action-wrapper">
          <div class="confirm-button" @click="startReset">
            <img src="./loginChild/assets/img/Arrow_enter.svg" alt="">
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import config from "../../config";
import langText from '../../lang/setNewPassword';
export default {
  data() {
    return {
      loginState: '1',
      activeTab: 'deviceTab',
      registerBirth: '',
      newPassword: '',
      newRePassword: '',
      hosturl: '',
      resetSuccess: false,
      loginPage: {},
      errorMsg:{
        Password:'',
        RePassword:'',
      },
      token: null,
    };
  },
  created() {
      if(this.$route.params.lang==='en' || this.$route.params.lang==='cn'){
  			this.loginPage=langText[this.$route.params.lang];
			}
			else
				this.loginPage=langText['cn'];
  },
  mounted() {
    //this.hosturl = 'http://192.168.31.127:9080/';
    this.hosturl = config.hostURL;
    this.token = window.location.href.match(/token=(\w*)/);
    if (this.token && this.token[1]) {
      this.token = this.token[1];
      console.log('token', this.token);
    }
  },
  methods: {
    checkPassword() {
      if (this.newPassword.length > 5) {
        this.errorMsg.Password = '';
      }
      else {
        this.errorMsg.Password = this.loginPage.validation.passwordFormat;
      }
    },
    checkRePassword() {
      if (this.newRePassword === this.newPassword) {
        this.errorMsg.RePassword = '';
      }
      else {
        this.errorMsg.RePassword = this.loginPage.validation.passwordMatch;
      }
    },
    startReset() {
      if (this.newPassword === '' || this.newRePassword === '') {
        this.checkPassword();
        this.checkRePassword();
      }
      else if (this.form1Validate) {
        const url = `https://us.leancloud.cn/1/resetPassword/${this.token}`;
        const data = {
          'password': this.newPassword,
          'headers': {'Access-Control-Allow-Origin': '*'},
        };
        this.$http.post(url, data).then(response => {
          console.log(response);
          this.resetSuccess = true;
        }, response => {
          console.log('error', response);
        });
      }
    },
  },
  computed: {
    form1Validate() {
      if (this.errorMsg.RePassword === '' && this.errorMsg.Password === '') {
        return true;
      }
      return false;
    },
  },
};

</script>

<style lang="sass" scoped>
  $themeOrange: #E27347;
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
  }


</style>
