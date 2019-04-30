import setting from '../config';
const langText = {
  cn:{
    breadcrumb:{
      1:"首页",
      2:"新闻",
    },
    lastNews: '上一篇',
    nextNews: '下一篇',
    lastPage: '上一页',
    nextPage: '下一页',
    allnews: '所有新闻',
    recommand: '推荐',
    newsTitle: '新闻',
    videoTitle: '视频',
    more: '更多',
    cardText:{
      1:{
        link:"https://v.qq.com/iframe/player.html?vid=w0527v18cai&tiny=0&auto=0",
        title:"uArm Swift & Swift Pro产品介绍",
        //content:"“捣蛋机器人女王”Simone Giert用uArm造出了一台早餐机器人，倒牛奶、吃燕麦片，它样样在行！"
      },
      2:{
        link:"https://v.qq.com/iframe/player.html?vid=v0527pkz77z&tiny=0&auto=0",
        title:"uArm Swift & Swift Pro产品功能详情",
        //content:"全球最大的开源硬件厂商SparkFun利用uArm Metal，别出心裁地创造出这个发牌机器人（DealerBot）"
      },
      3:{
        link:"https://v.qq.com/iframe/player.html?vid=w0527v18cai&tiny=0&auto=0",
        title:"uArm Studio安装及Blockly编程",
        //content:"Overwhelmed with Makers from All over the World! UFACTORY Spent an Awesome Time at Maker Faire Bay Area This Weekend!"
      },
      4:{
        link:"https://v.qq.com/iframe/player.html?vid=w0527v18cai&tiny=0&auto=0",
        title:"Swift Pro学习模式&激光雕刻&3D打印",
      },
    },
    mobile: {
      news: '企业新闻',
      access: '商城',
      accessLink: setting.STORE_URL.en
    },
  },
  en:{
    breadcrumb:{
      1:"Home",
      2:"News",
    },
    lastNews: 'Last News',
    nextNews: 'Next News',
    lastPage: 'Previous Page',
    nextPage: 'Next Page',
    allnews: 'All News',
    recommand: 'Recommend',
    newsTitle: 'News',
    videoTitle: 'Video',
    more: 'More',
    cardText:{
      1:{
        link:"https://www.youtube.com/embed/kzEkjx6Lmfg",
        title:"Your desk-top robot arm",
        //content:"“捣蛋机器人女王”Simone Giert用uArm造出了一台早餐机器人，倒牛奶、吃燕麦片，它样样在行！"
      },
      2:{
        link:"https://www.youtube.com/embed/f7LBhdqbUJE",
        title:"The Best solution to robotics Education",
        //content:"全球最大的开源硬件厂商SparkFun利用uArm Metal，别出心裁地创造出这个发牌机器人（DealerBot）"
      },
      3:{
        link:"https://www.youtube.com/embed/XNDxqM3OGKQ",
        title:"uArmStudio & blockly Visual Programming",
        //content:"Overwhelmed with Makers from All over the World! UFACTORY Spent an Awesome Time at Maker Faire Bay Area This Weekend!"
      },
      4:{
        link:"https://www.youtube.com/embed/vZXBv5DPgjw",
        title:"Learning Mode, Laser Engraving & 3D Printing",
        //content:"“捣蛋机器人女王”Simone Giert用uArm造出了一台早餐机器人，倒牛奶、吃燕麦片，它样样在行！"
      },
    },
    mobile: {
      news: 'Company News',
      access: 'Accessories',
      accessLink: setting.UARM_ACCESS.en
    },
  }

};

export default langText;
