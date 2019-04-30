const iconPicture = require("../components/assets/img/about/icon_picture.svg");
const images ={
  1: require("../components/assets/img/about/Intel_July_2017.jpg"),
  2: require("../components/assets/img/about/likeqiangseeuarm.jpg"),
  3: require("../components/assets/img/about/tencent_AI_LAB.jpg")
};
const langText = {
  cn: {
    1:{
      date:"2013年5月",
      story:"UFACTORY在深圳成立"
    },
    2:{
      date:"2013年12月",
      story:"uArm在Kickstarter成功众筹25万美金"
    },
    3:{
      date:"2014年5月",
      story:"第一台uArm Acrylic发货"
    },
    4:{
      date:"2014年10月",
      story:"uArm Metal首发"
    },
    5:{
      date:"2015年1月",
      story:"李克强总理参观UFACTORY并体验产品",
      imageList: [images[2]],
      icon: iconPicture
    },
    6:{
      date:"2015年11月",
      story:"UFACTROY入驻位于南山区的新办公室"
    },
    7:{
      date:"2017年3月",
      story:"uArm Swift在Indiegogo众筹超过1百万美金"
    },
    8:{
      date:"2017年4月",
      story:"UFACTORY荣获中国日报“最有前景创业公司奖”<br>UFACTORY荣获环球资源Startup Launchpad“最佳科技奖”<br>UFACTORY旗舰产品uArm Swift Pro荣获中国日报“最具前景电子产品奖”"
    },
    9:{
      date:"2017年7月",
      story:"UFACTORY成为Intel中国的明星合作伙伴<br>UFACTORY成为腾讯AI实验室的战略合作伙伴",
      imageList: [images[1], images[3]],
      icon: iconPicture
    }
  },
  en: {
    1:{
      date:"May 2013",
      story:"UFACTORY founded in ShenZhen"
    },
    2:{
      date:"Dec 2013",
      story:"uArm project successfully raised $250,000 on kickstarter"
    },
    3:{
      date:"May 2014",
      story:"First uArm Acrylic shipped"
    },
    4:{
      date:"Oct 2014",
      story:"uArm Metal released"
    },
    5:{
      date:"Jan 2015",
      story:"Premier Li Keqiang met uArm and our team",
      imageList: [images[2]],
      icon: iconPicture
    },
    6:{
      date:"Nov 2015",
      story:"UFACTORY moved to the new office in Nanshan district"
    },
    7:{
      date:"Mar 2017",
      story:"uArm Swift Funded on Indiegogo with 1M+ USD"
    },
    8:{
      date:"Apr 2017",
      story:"Awarded BEST TECHNOLOGY by Global Sources Startup Launchpad<br>Won MOST PROMISING STARTUPS by China Daily<br>uArm Swift Pro is Awarded MOST PROMISING ELECTRONIC GADGETS by China Daily"
    },
    9:{
      date:"July 2017",
      story:"Intel China's Best Partners of the Year<br>Strategic Partner of Tencent AI Lab",
      imageList: [images[1], images[3]],
      icon: iconPicture
    }
  }
};

export default langText;
