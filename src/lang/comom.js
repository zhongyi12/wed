import setting from '../config';
const langText = {
  cn:{
    navAbout:"关于",
    navProduct:"产品",
    navEducational: "教育产品",
    navProfessional: "行业产品",
    navNews: "新闻",
    navAccessory:"配件",
    navStore:"商城",
    nav: {
      document: '文档指南',
      navTechnology: '技术支持',
      navPurchase: '购买咨询',
      navCooperation: '合作咨询',
      cooperationLink: `${setting.SUPPORT_URL.cn}cooperation`
    },
    navSupport:"支持",
    navDownload:"下载",
//					navQuestion:"常见问题",
    navDevelop:"Github",
    navHelp:"售后服务",
    navCommunity:"社区",
    navDeveloper: "开发者",
    navBlog:"微信群",
    navForum:"论坛",
    navAboutUs:"关于我们",
    navAboutUf:"关于我们",
    navJoinUs:"加入我们",
    navContactUs:"联系我们",
    subscribeFeed:"获取我们的最新资讯",
    promoPopText:"获取我们的最新资讯",
    promoLink:"http://eepurl.com/cYSm45",
    subscribeLink:"//ufactory.us10.list-manage.com/subscribe/post?u=c644188ef0ea557ffc19e17fb&amp;id=f3cbe4f2d0",
    emailPlaceholder:"输入你的邮箱",
    btnSubscribe:"订阅",
    copyright:"粤ICP备16053329号",
    storeLink: setting.STORE_URL.cn,
    storeBtn:"订阅",
    promoText:{
      countDown:"uArm Swift正在Indiegogo众筹！",
      day:"天",
      hour:"小时",
      minute:"分",
      second:"秒",
      leftcn:"剩余",
      leften:""
    },
    i18nText:"English",
    nextLang:"en",
    signin:'登录',
    register:'注册',
    notifications:'通知',
    myAccount:'我的账户',
    signOut:'退出登录',
    homeBanner: {
      xarmSlogan: '高性价比的轻量型机器人',
      knowMore: '了解详情'
    },
    module: [
      {
        name: "官方商城",
        link: `${setting.STORE_URL.cn}`,
        pic: require("../components/assets/img/home/home_access.jpg"),
      },
      {
        name: "新闻",
        link: `${setting.NEW_BLOG.cn}`,
        pic: require("../components/assets/img/home/home_blog.jpg")
      },
      {
        name: "下载",
        link: `${setting.DOWNLOAD_LINK.cn}`,
        pic: require("../components/assets/img/home/home_down.jpg")
      }
    ],
  },
  en:{
    navAbout:"About",
    navProduct:"Product",
    navEducational: "Educational",
    navProfessional: "Professional",
    navNews: "Blog",
    navAccessory:"Accessory",
    navStore:"Store",
    nav: {
      document: 'Documents',
      navTechnology: 'Technical Support',
      navPurchase: 'Purchase and Payment',
      navCooperation: 'Cooperation',
      cooperationLink: `${setting.SUPPORT_URL.en}cooperation`
    },
    navSupport:"Support",
    navDownload:"Downloads",
    navQuestion:"Questions",
    navDevelop:"Github",
    navHelp:"Help",
    navCommunity:"Community",
    navDeveloper: "Developer",
    navBlog:"Facebook",
    navForum:"Forum",
    navAboutUs:"About us",
    navAboutUf:"About UFACTORY",
    navJoinUs:"Join us",
    navContactUs:"Contact us",
    subscribeFeed:"Sign Up<br>for our Newsletter",
    promoPopText:"Buy Now<br>for $89 or more OFF!",
    promoLink: setting.STORE_URL.en,
    subscribeLink:"//ufactory.us10.list-manage.com/subscribe/post?u=c644188ef0ea557ffc19e17fb&amp;id=3a0c123c99",
    emailPlaceholder:"Your email",
    btnSubscribe:"Sign Up",
    copyright:"",
    storeLink: setting.STORE_URL.en,
    storeBtn:"Buy Now",
    promoText:{
      countDown:"uArm Swift is now on Indiegogo! ",
      day:"days",
      hour:"hours",
      minute:"minutes",
      second:"seconds",
      leftcn:"",
      leften:"left"
    },
    i18nText:"简体中文",
    nextLang:'cn',
    signin:'SIGN IN',
    register:'REGISTER',
    notifications:'Notifications',
    myAccount:'My Account',
    signOut:'Sign Out',
    homeBanner: {
      xarmSlogan: `THE MOST COST-EFFECTIVE & </br> LIGHT-WEIGHT ROBOTIC ARM `,
      knowMore: 'Learn more'
    },
    module: [
      {
        name: "Store",
        link: `${setting.UARM_ACCESS.en}`,
        pic: require("../components/assets/img/home/home_access_en.jpg"),
      },
      {
        name: "Blog",
        link: `${setting.NEW_BLOG.en}`,
        pic: require("../components/assets/img/home/home_blog.jpg")
      },
      {
        name: "Download",
        link: `${setting.DOWNLOAD_LINK.en}`,
        pic: require("../components/assets/img/home/home_down.jpg")
      }
    ],
  }
};

export default langText;
