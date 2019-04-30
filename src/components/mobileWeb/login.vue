<template lang="html">
    <div class="app-container">
      <div class="navi-wrapper">
      </div>
      <div class="main-wrapper user-signin">
        <router-view ></router-view>
      </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      loginState: '1',
    };
  },
  mounted() {
  },
  methods: {
  },
  components: {
  },
  computed: {
  },
};

</script>

<style lang="sass" scoped>
.app-container {
    background: white;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    .navi-wrapper{
      width:100%;
      height:10vh;
      display:flex;
      padding:2vw;
      .navi-title{
        margin:auto;
        font-size:1.5vw;
      }
      img{
        cursor:pointer;
        height:100%;
        margin:auto;
      }
    }
    .main-wrapper{
      display:flex;
      width:100%;
      justify-content:center;
      padding: 6vw 0;
    }

}


</style>
