<template lang="html">
    <div class="select-wrapper">
      <div class="confirm-title">
        {{loginPage.registerSuccess}}
      </div>
      <div class="confirm-text">
        {{loginPage.emailConfrim}}
      </div>
      <div class="register-success" >
        <div class="confirm-button" @click="loginSuccess()">
          <img src="./assets/img/Arrow_enter.svg" alt="">
        </div>
        <!-- <p class="enter-text">  {{loginPage.enterStudio}} </p> -->
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      loginState: '1',
      activeTab: 'deviceTab',
      loginPage: {},
    };
  },
  created() {
    const langText = {
				cn:{
          registerSuccess: '注册成功！',
          emailConfrim: '确认邮件已发送！',
          enterStudio: '进入uArm Studio',
				},
				en:{
          registerSuccess: 'Done!',
          emailConfrim: 'Confirmation email sent!',
          enterStudio: 'Enter uArm Studio',
				},
			};
      if(this.$route.params.lang==='en' || this.$route.params.lang==='cn'){
  			this.loginPage=langText[this.$route.params.lang];
			}
			else
				this.loginPage=langText['cn'];
  },
  mounted() {
  },
  methods: {
    loginSuccess() {
      this.$router.push({ name: 'profile'});
    },
  },
  components: {
  },
  computed: {
  },
};

</script>

<style lang="sass" scoped>
  $themeOrange:#D95E2E;
  .select-wrapper{
    display:flex;
    height:100%;
    width:100%;
    justify-content:center;
    padding: 0 16vw;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:$themeOrange;
    font-family:'uf-book';
    text-align: center;
    .register-success{
      display: flex;
      flex-direction: column;
      cursor:pointer;
      .enter-text{
        font-size:.9rem;
      }
    }
    .confirm-button{
      margin: 1vw auto;
      padding: 1vw 1.3vw;
      background: $themeOrange;
      border-radius: 50%;
      box-shadow:  0 2px 10px -1px $themeOrange;
    }
    .confirm-title{
      font-family: ufbigfont;
      font-size: 24px;
      margin:0 auto;
    }
    .confirm-text{
      padding:5vw 0;
      font-size:.9rem;
      width:100%;
    }
  }


</style>
