import setting from '../config';
const section6Image = {
  1: require("../components/assets/img/xarm/section6_1.png"),
  2: require("../components/assets/img/xarm/section6_2.png"),
  3: require("../components/assets/img/xarm/section6_3.png"),
  4: require("../components/assets/img/xarm/section6_4.png"),
  5: require("../components/assets/img/xarm/section6_5.png"),
};
const mobileSection6Image = {
  1: require("../components/assets/img/mobile-web/xarm/mobile_section6_1.jpg"),
  2: require("../components/assets/img/mobile-web/xarm/mobile_section6_2.jpg"),
  3: require("../components/assets/img/mobile-web/xarm/mobile_section6_3.jpg"),
  4: require("../components/assets/img/mobile-web/xarm/mobile_section6_4.jpg"),
  5: require("../components/assets/img/mobile-web/xarm/mobile_section6_5.jpg"),
};
const section5ImageList = {
 'xarm5': require("../components/assets/img/xarm/section5_xarm5.jpg"),
 'xarm6': require("../components/assets/img/xarm/section5_xarm6.jpg"),
 'xarm7': require("../components/assets/img/xarm/section5_xarm7.jpg"),
}
const mobileSection5ImageList = {
  'xarm5': require("../components/assets/img/mobile-web/xarm/mobile_section5_xarm5.jpg"),
  'xarm6': require("../components/assets/img/mobile-web/xarm/mobile_section5_xarm6.jpg"),
  'xarm7': require("../components/assets/img/mobile-web/xarm/mobile_section5_xarm7.jpg"),
 }
const langText = {
  cn:{
    submenu:{
      overview:"产品介绍",
      detail:"技术参数",
      question:"常见问题",
      download:"软件下载",
      storeLink: setting.XARM_STORE.cn,
      buyText:"立即预订",
      teachVideo: "教学视频",
    },
    banner1:{
      imageTitle:require("../components/assets/img/xarm/xarm.png"),
      // video: require("../components/assets/img/xarm/xarm_section1.mp4"),
      title:'xArm',
      content:'高性价比的轻量型机器人',
      watchVideo:'观看视频',
    },
//				videoLink:"https://www.youtube.com/embed/kzEkjx6Lmfg?rel=0&amp;autoplay=1",
    videoLink: "https://www.ufactory.cc/cn/xarm/static/video/xarm_introduce.mp4",
    banner2:{
      title:"xArm——高效生产力工具",
      content: `xArm是一款轻量型可编程机器人，高效部署，简单易用，能帮助您提高生产效率。`,
      paramsList: [
        { name:'有效工作半径', value: '700 mm'},
        { name:'重复定位精度', value: '0.1 mm'},
        { name:'最大末端速度', value: '1 m/s'},
        { name:'占地面积', value: 'Ø 126 mm '},
      ],
    },
    banner3:{
      imageList: {
        1:{
          image: require("../components/assets/img/xarm/section3_xarm5.png"),
          mobileImage: require("../components/assets/img/mobile-web/xarm/mobile_section3_xarm5.jpg"),
          title: 'xArm 5 Lite.',
          content: '简单易用，经济高效'
        },
        2:{
          image: require("../components/assets/img/xarm/section3_xarm6.png"),
          mobileImage: require("../components/assets/img/mobile-web/xarm/mobile_section3_xarm6.jpg"),
          title: 'xArm 6',
          content: '丰富场景，强大应用'
        },
        3:{
          image: require("../components/assets/img/xarm/section3_xarm7.png"),
          mobileImage: require("../components/assets/img/mobile-web/xarm/mobile_section3_xarm7.jpg"),
          title: 'xArm 7',
          content: '随心所欲，操作灵活'
        }
      },
    },
    banner4:{
      title:"快速安装",
      content:`xArm具备通用工具接口，用户可以根据需求安装不同的末端执行器。xArm配备常用的末端执行器——机械爪和吸头，以完成各种不同任务。 `,
      tip: '机械爪和吸头需单独购买。'
    },
    banner5:{
      imageList: [
        {
          title: 'xArm 7',
          content: 'xArm 7 拥有7个自由度，除了能完成常规机器人应用外，xArm7 还适用于服务业、AI研究以及影像行业等。',
          img: section5ImageList['xarm7'],
          mobileImg: mobileSection5ImageList['xarm7'],
        },
        {
          title: 'xArm 6',
          content: 'xArm 6 的5kg负载与±0.1 mm重复定位精度以及6个自由度提供的灵活运动方式，使得xArm 6具备广泛的应用范围。',
          img: section5ImageList['xarm6'],
          mobileImg: section5ImageList['xarm6'],
        },
        {
          title: 'xArm 5 Lite',
          content: 'xArm 5 Lite是一台性价比极高的机器人，非常适合简单重复的动作如抓取、搬运等。',
          img: section5ImageList['xarm5'],
          mobileImg: mobileSection5ImageList['xarm5'],
        },
      ]
    },
    banner6:{
      textList: [
        {
          title: '生产制造',
          content: `xArm简单易用、性能稳定，可在短时间内提升生产制造效率。`,
           section6Image: section6Image[1],
           mobileSection6Image: mobileSection6Image[1],
        },
        {
          title: '机器人研究',
          content: `xArm提供的跨平台SDK，应用开发更加高效。`,
           section6Image: section6Image[2],
           mobileSection6Image: mobileSection6Image[2],
        },
        {
          title: '创客',
          content: `xArm具有多个终端执行器，加速从创意到模型的转化过程。`,
           section6Image: section6Image[3],
           mobileSection6Image: mobileSection6Image[3],
        },
        {
          title: '影视行业',
          content: `xArm与影像设备结合，以前所未有的方式捕捉画面。`,
           section6Image: section6Image[4],
           mobileSection6Image: mobileSection6Image[4],
        },
        {
          title: '新兴行业',
          content: `xArm出色的性能和易用性，在新兴行业同业能大展身手。 `,
           section6Image: section6Image[5],
           mobileSection6Image: mobileSection6Image[5],
        },
      ]

    },
    banner7:{
      content:"xArm旨在为您提高生产力，获得更高投入产出比。 "
    },
    banner8:{
      title:"动力系统",
      content:`xArm使用高性能谐波减速器，配合定制无刷电机和17位多圈编码器，使得xArm具备极高的重复定位精度。`,
      
    },
    banner9:{
      title: "X86 平台",
      content: `xArm使用性能强劲X86芯片，X86通用架构让二次开发如虎添翼。`,
    },
    banner10:{
      title:"xArm Studio——简单易用",
      content:"得益于简单易用的控制软件xArm Studio，你能“手把手”让xArm重复指定动作，实现零门槛交互，可以在 10分钟内完成复杂的轨迹设置。",
      buy: '前往Kickstarter预定',
    },
    banner11:{
      title:"xArm SDK——释放xArm无限潜能",
      content:`xArm SDK是专为xArm定制的快平台软件开发套件，通过xArm SDK，你可以为xArm量身定制APP，发挥出xArm的最大潜力。
      xArm SDK 包含Python/ROS/C++ SDK, 支持Windows, Mac, Linux. `,
    },
    xarmParams: {
      title: {
        xarm: "xArm",
        gripper: "机械爪",
        griptips: "吸头"
      },
      notes: '备注:',
      tips: [
        '*1.	xArm 6/ xArm 7所有关节均使用谐波减速器，xArm 5 Lite同时使用了谐波减速器与低背隙减速器。',
        '*2.	xArm 6/xArm 7具备碰撞检测和力控功能，xArm 5 Lite不具备碰撞检测和力控功能。',
        '*3.	机器人的工作温度是0-50℃，关节连续高速操作时，降低环境温度。'
      ],
      xarms: [
        [`<span style="font-size: 14px;font-weight: 700;padding-bottom:10px;">xArm 5 Lite*</span>`, "2", "700", "5", "±0.2", "0.33", "8.5"],
        [`<span style="font-size: 14px;font-weight: 700;padding-bottom:10px;">xArm 6</span>`, "5", "700", "6", "±0.1", "1", "9.5"],
        [`<span style="font-size: 14px;font-weight: 700;padding-bottom:10px;">xArm 7</span>`, "3.5", "700", "7","±0.1", "1","11"]
      ]
    },
  },
  en:{
    submenu:{
      overview:"Overview",
      detail:"Specifications",
      question:"Question",
      download:"Downloads",
      storeLink: setting.XARM_STORE.en,
      buyText:"Pre Order",
      teachVideo: "Tutorial Videos",
    },
    banner1:{
      imageTitle:require("../components/assets/img/xarm/xarm.png"),
      // video: require("../components/assets/img/xarm/xarm_section1.mp4"),
      title:'xArm',
      content:'THE MOST COST-EFFECTIVE & LIGHT-WEIGHT ROBOTIC ARM',
      watchVideo:'Watch Video',
    },
//				videoLink:"https://www.youtube.com/embed/kzEkjx6Lmfg?rel=0&amp;autoplay=1",
    videoLink: "https://www.ufactory.cc/cn/xarm/static/video/xarm_introduce.mp4",
    banner2:{
      title:"What's xArm?",
      content: `Business owners need to find a cost effective solution to boost productivity
       and product quality. Investing in the xArm is the only solution to gain a competitive advantage and have a great ROI in the future.`,
      paramsList: [
        { name:'Reach', value: '700 mm'},
        { name:'Repeatability', value: '0.1 mm'},
        { name:'Maximum Speed', value: '1 m/s'},
        { name:'Footprint', value: 'Ø 126 mm '},
      ],
    },
    banner3:{
     imageList: [
       {
         image: require("../components/assets/img/xarm/section3_xarm5.png"),
         mobileImage: require("../components/assets/img/mobile-web/xarm/mobile_section3_xarm5.jpg"),
         title: 'xArm 5 Lite.',
         content: 'The Most Affordable Robot Arm'
        },
      {
       image: require("../components/assets/img/xarm/section3_xarm6.png"),
       mobileImage: require("../components/assets/img/mobile-web/xarm/mobile_section3_xarm6.jpg"),
       title: 'xArm 6',
       content: 'A Powerful Multi-tasker'
      },
      {
        image: require("../components/assets/img/xarm/section3_xarm7.png"),
        mobileImage: require("../components/assets/img/mobile-web/xarm/mobile_section3_xarm7.jpg"),
        title: 'xArm 7',
        content: 'A Fully Flexible Robot Arm to Reach Everywhere'
      }
    ],
     title: 'xArm 7',
     content: 'A Fully Flexible Robot Arm to Reach Everywhere'
    },
    banner4:{
      title:"Fast Setup",
      content:`xArm features a universal tool mount port which allows users to install
       different head tools according to their needs. It comes with the most commonly used end-actuators: gripper and vacuum system to help in various tasks.`,
      tip: 'Gripper and Suction cup sold separately.',
    },
    banner5:{
      imageList: [
        {
          title: 'xArm 5 Lite',
          content: 'xArm 5 Lite is affordable and the most cost-effective robotic arm among peers, it can be widely used especially for pick-and-place task.',
          img: section5ImageList['xarm5']
        },
        {
          title: 'xArm 6',
          content: 'xArm 6 has a payload of 5 kg and repeat-ability of ±0.1 mm, it delivers increased dexterity and flexibility, not to mention it is the best deal you can ever get among similar products on the market.',
          img: section5ImageList['xarm6']
        },
        {
          title: 'xArm 7',
          content: 'xArm 7 has human-like flexibility, and it is perfect for emerging industries such as service automation, AI research, and filming etc.',
          img: section5ImageList['xarm7'],
        }
      ]
    },
    banner6:{
      textList: [
        {
          title: ' SEMs Manufacturing',
          content: `A cost-effective robotic arm instantly improves the speed of
           operation with automation technology, the ROI will easily pay off in enhanced productivity.`,
           section6Image: section6Image[1],
           mobileSection6Image: mobileSection6Image[1],
        },
        {
          title: 'Robotics Research ',
          content: `As an open source SDK robotic arm, xArm comes with cross-platform operationality,
           and the ROS components making it the most developer-friendly robotic arm.`,
           section6Image: section6Image[2],
           mobileSection6Image: mobileSection6Image[2],
        },
        {
          title: 'Makers & MakerSpace',
          content: `Features multiple end-actuators, xArm can speed up your prototyping process and realize your
           creative vision. It can be used as a desktop assistant, prototype manufacturer, and anything else you can think of.`,
           section6Image: section6Image[3],
           mobileSection6Image: mobileSection6Image[3],
        },
        {
          title: 'Film Studios',
          content: `Attach the camera and program it to exactly where you want it to go to capture all your difficult angle
           shots. Go from full speed to almost an instantaneous stop and vice versa. `,
           section6Image: section6Image[4],
           mobileSection6Image: mobileSection6Image[4],
        },
        {
          title: ' Other Emerging Industries',
          content: `With the human-like flexibility of xArm, automation in emerging industries is at your fingertips. `,
           section6Image: section6Image[5],
           mobileSection6Image: mobileSection6Image[5],
        },
      ]

    },
    banner7:{
      content:"With xArm, your productivity will up by over 95%, and the investment will pay off in lower costs and increased efficiency. "
    },
    banner8:{
      title:"Powertrain Joint",
      content:`xArm features compact powertrain joint, with customized outer rotor brushless motor combined with the built-in harmonic
       drive with 17bit multi-turn encoders, delivering excellent repeatability when repositioning inertial loads with high gear ratios, plus high torque capability.`,
      
    },
    banner9:{
      title: "Fastest Processor",
      content: `xArm is powered by X86 chip which is powerful enough to handle the complex controlling algorithm. With an optimized the control algorithm, guaranteeing
       high levels of precision for the moving parts.`,
    },
    banner10:{
      title:"Easy To Use With xArm Studio",
      content:"Simply teach xArm to move and it will repeat the path for you. No coding is required. By dragging - dropping the blocks, complex path can be done in 10 mins. ",
      buy: 'Back us on Kickstarter',
    },
    banner11:{
      title:"Support Multiple Platform",
      content:"xArm SDK include Python SDK, ROS SDK and C++ SDK. A fully upgradable software platform that can grow in capabilities to make it a lasting and worthy long-term investment. ",
    },
    xarmParams: {
      title: {
        xarm: "xArm",
        gripper: "Gripper",
        griptips: "Suction Cup"
      },
      notes: 'Notes:',
      tips: [
        '*1. All joints of xArm 6/ xArm 7 use Harmonic Drive, xArm 5 Lite uses Harmonic Drive and low-backlash gearbox.',
        '*2.Collision detection and force control are available on xArm 6/xArm 7, which are not available on xArm 5 Lite.',
        '*3.The ambient temperature of xArm is 0-50 °C, and reduces when the joint continued for high-speed operation.'
      ],
      xarms: [
        [`<span style="font-size: 14px;font-weight: 700;padding-bottom:10px;">xArm 5 Lite*</span>`, "2", "700", "5", "±0.2", "0.33", "8.5"],
        [`<span style="font-size: 14px;font-weight: 700;padding-bottom:10px;">xArm 6</span>`, "5", "700", "6", "±0.1", "1", "9.5"],
        [`<span style="font-size: 14px;font-weight: 700;padding-bottom:10px;">xArm 7</span>`, "3.5", "700", "7","±0.1", "1","11"]
      ]
    }
  }

};

export default langText;
