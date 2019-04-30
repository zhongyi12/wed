import setting from '../config';
const langText = {
  cn:{
    submenu:{
      overview:"产品介绍",
      detail:"技术参数",
      question:"常见问题",
      download:"软件下载",
      storeLink: setting.UARN_STORE.cn,
      buyText:"立即购买",
      teachVideo: "教学视频",
      pdflink:'http://download.ufactory.cc/docs/en/uArm-Swift-Specifications-en.pdf',
    },
    banner1:{
      image:require("../components/assets/img/swift/banner1_cn.png"),
      text:"uArm Swift & uArm Swift Pro介绍视频",
      title:'<span>UARM</span>&nbsp<span>SWIFT</span>&nbsp<span>PRO</span>',
      content:'STEM教育▪创客之选',
      watchVideo:'视频介绍',
    },
//				videoLink:"static/video/swift_introduce.mp4",
    videoLink: "https://www.ufactory.cc/static/video/swift_introduce.mp4",
    // banner2:{
    //   title:"更高精度，更多功能",
    //   content:"uArm Swift Pro的重复定位精度达到0.2mm，可实现画画、激光雕刻、3D打印等功能。",
    //   content1:"*uArm Swfit Pro内部集成步进电机和12比特编码器",
    // },
    // banner3:{
    //   title:"手持示教，开箱即用",
    //   content:"无需电脑，按下底座按钮，'手把手'让uArm重复指定动作，零门槛交互，简单直接。",
    //   playText:"播放",
    //   recordText:"录制"
    // },
    // banner4:{
    //   gearitems:[
    //     {name:"Swift Universal Holder",image:require("../components/assets/img/swift/unselected_Universal holder.png")},
    //     {name:"Swift Gripper",image:require("../components/assets/img/swift/unselected_gripper@2x.png")},
    //     {name:"Swift 3D Printer",image:require("../components/assets/img/swift/unselected_3D Print Extruder.png")},
    //     {name:"Swift Laser",image:require("../components/assets/img/swift/unselected_laser.png")}
    //   ],
    //   title:"多种末端，随心切换",
    //   content:"可选择吸头、笔夹、夹子等多种官方配件，标准化接口，切换末端更便捷。",
    //   noteText:"仅限uArm Swift Pro",
    // },
    // banner5:{
    //   title:"丰富配件，自由组合",
    //   content:"搭配Seeed Grove的传感器/执行器配件，<br>让uArm的功能更丰富、“感官”更敏锐。",
    //   // left:{
    //   //   title:"底座Grove配件:",
    //   //   items:{
    //   //     1:{
    //   //       icon:require("../components/assets/img/swift/icon_lcd.svg"),
    //   //       text:"LCD屏幕"
    //   //     },2:{
    //   //       icon:require("../components/assets/img/swift/icon_color sensor.svg"),
    //   //       text:"颜色传感器"
    //   //     },3:{
    //   //       icon:require("../components/assets/img/swift/icon_temperature.svg"),
    //   //       text:"温湿度传感器"
    //   //     },
    //   //   }
    //   // },
    //   // right:{
    //   //   title:"末端Grove配件:",
    //   //   items:{
    //   //     1:{
    //   //       icon:require("../components/assets/img/swift/icon_magnet.svg"),
    //   //       text:"电磁铁"
    //   //     },2:{
    //   //       icon:require("../components/assets/img/swift/icon_PIR.svg"),
    //   //       text:"动作传感器"
    //   //     },3:{
    //   //       icon:require("../components/assets/img/swift/icon_minifan.svg"),
    //   //       text:"小风扇"
    //   //     },
    //   //   }
    //   // }
    // },
    // banner6:{
    //   title:"简单易用，轻松上手",
    //   sliders:{
    //     1:{
    //       image:require("../components/assets/img/swift/slider1.png"),
    //       content:"一个PC客户端，集合多种操作方式，<br>选择最适合你的方式，在uArm上实现你的创意。"
    //     },2:{
    //       image:require("../components/assets/img/swift/slider2.png"),
    //       content:"专为uArm设计的Blockly图形化编程界面，<br>拖拽、拼接，即可定制你的第一个机器人项目。"
    //     },3:{
    //       image:require("../components/assets/img/swift/slider3.png"),
    //       content:"同时使用鼠标和键盘快捷键，<br>实时控制uArm的动作。"
    //     },4:{
    //       image:require("../components/assets/img/swift/slider4.png"),
    //       content:"PC端手持示教，随时回放录制过的uArm动作，<br>亦可在Blockly图形化编程中使用已录制的轨迹。 "
    //     },5:{
    //       image:require("../components/assets/img/swift/slider5.png"),
    //       content:"体感控制,<br>让uArm实时跟随你的手部运动(只限uArm Swift)。"
    //     },6:{
    //       image:require("../components/assets/img/swift/slider6.png"),
    //       content:"插入文字、图案或图片，<br>让uArm帮你画/雕刻出来(仅限uArm Swift Pro)。"
    //     }
    //   }
    // },
    // banner7:{
    //   introItem:[
    //     {
    //       icon:require("../components/assets/img/swift/real-time_remote.png"),
    //       text:"实时远程操控"
    //     },
    //     {
    //       icon:require("../components/assets/img/swift/icon_download.png"),
    //       text:"将你的Blockly图形化编程项目下载到手机，随时随地运行。"
    //     }
    //   ],
    //   image1:require("../components/assets/img/swift/iphone_Horion.png"),
    //   image2:require("../components/assets/img/swift/iphone_vertical.png"),
    //   titleimg:require("../components/assets/img/swift/logo_uarm_play.png"),
    //   name: 'UARM PLAY',
    //   content:"手机里的uArm遥控器"
    // },
    // banner8:{
    //   content:"uArm Swift和uArm Swift Pro都是开源的硬件平台，欢迎开发者和我们一起创造更多可能。",
    //   title:"服务于开发者",
    //   subtitle: "开源平台",
    //   brandlogos:{
    //     1:require("../components/assets/img/swift/Arduino_Logo.png"),
    //     2:require("../components/assets/img/swift/python_logo.png"),
    //     3:require("../components/assets/img/swift/ros-logo.png"),
    //     4:require("../components/assets/img/swift/gc-logo.png"),
    //     5:require("../components/assets/img/swift/opencv-logo.png"),
    //   }
    // },
    // banner9:{
    //   title:"技术参数",
    //   spec:["","体积","重量","自由度", "重复定位精度","负载","活动半径"],
    //   specItem:[
    //     {
    //       name:"uArm Swift",
    //       pro:"",
    //       image:require("../components/assets/img/swift/swift.png"),
    //       values:["150*132*281mm","1.2kg","4","5mm","500g","50mm - 320mm"]
    //     },{
    //       name:"uArm Swift ",
    //       pro:"Pro",
    //       image:require("../components/assets/img/swift/pro.png"),
    //       values:["150*140*281mm","2.2kg","4","0.2mm","500g","50mm - 320mm"]
    //     }
    //   ],
    //   download: "下载参数表",
    //   pdflink:"http://download.ufactory.cc/docs/cn/uArm-Swift-Specifications-cn.pdf",
    //   mobileSpecItem:[
    //     {
    //       name:"",
    //       pro:" ",
    //       image:" ",},
    //     {
    //       name:"uArm Swift",
    //       pro:"",
    //       image:require("../components/assets/img/swift/swift.png"),
    //     },{
    //       name:"uArm Swift ",
    //       pro:"Pro",
    //       image:require("../components/assets/img/swift/pro.png"),
    //     }
    //   ],
    //   mobileTr: [
    //     ["体积", "150*132*281mm", "150*140*281mm"],
    //     ["重量", "1.2kg", "2.2kg"],
    //     ["自由度", "4", "4"],
    //     ["重复定位精度", "5mm", "0.2mm"],
    //     ["负载", "500g", "500g"],
    //     ["活动半径", "50mm - 320mm", "50mm - 320mm"]
    //   ],
    // },
    // banner10:{
    //   title:"视觉套件，开源易用",
    //   content:"从颜色分拣到人脸识别，轻松编程无限拓展，让uArm创造更多可能",
    //   content1:"*视觉套件基于开源Open MV(M7) ",
    // },
    banner_3:{
      text1: `高精度减速机`,
      text2: `Arduino Mega</br>  2560主板`,
      text3: `500g负载</br> 0.2mm重复定位精度`,
      content3 : "50-320mm工作范围",
      freedom: "4自由度",
      speed: "最大末端速度：500mm/s",
      bluetooth: "蓝牙4.0",
      encoder: "12bit绝对磁编码器"
    },
    banner_5: {
      title: "",
      pic_text: [
        {
          title: "精准拾取",
          content: `uArm Swift Pro采用12bit高精度绝对磁编码器，具有0.2mm的重复定位精度，
          是目前重复定位精度最高的桌面级机器人之一，是创客项目以及轻型自动化应用的理想选择。 `,
          pic: require("../components/assets/img/swift/banner4_1.jpg"),
          mobilePic:  require("../components/assets/img/mobile-web/swift/mobile_banner5_1.jpg"),
        },
        {
          title: "机器人研究",
          content: `uArm是世界上第一个开源桌面级机械臂,具备完善的开放的软硬件开发资源，您可以根据自己的需求扩展开发uArm功能。
          搭配uArm视觉模块（注：配件需另行购买）的uArm Swift Pro能够进行度图像识别，非常适合用于AI机器人研究。`,
          pic: require("../components/assets/img/swift/banner4_2.jpg"),
          mobilePic:  require("../components/assets/img/mobile-web/swift/mobile_banner5_2.jpg"),
        },
        {
          title: "手持示教",
          content: `uArm的手持示教功能大大降低了uArm的使用难度，通过uArm的手持示教功能，您可以在一分钟内让uArm执行预设动作。
          uArm Swift Pro集成Blockly模块化编程功能，无需编程经验即可以为uArm Swift Pro设计复杂的程序任务。  `,
          pic: require("../components/assets/img/swift/banner4_3.jpg"),
          mobilePic:  require("../components/assets/img/mobile-web/swift/mobile_banner5_3.jpg"),
        },
        {
          title: "丰富末端",
          content: `uArm Swift Pro具备多种可更换末端，可以用来画画，激光雕刻，3D打印等。`,
          pic: require("../components/assets/img/swift/banner4_4.jpg"),
          mobilePic:  require("../components/assets/img/mobile-web/swift/mobile_banner5_4.jpg"),
        }
      ]
    },
    banner_6:{
      title: "软件与SDK",
      content: `uArm Studio是专门为uArm Swift Pro开发的控制软件，
      可用于Windows、Mac OS和Linux系统。uArm Swift Pro支持Arduino、Python、ROS开发者套件，
      可以根据实际需求扩展uArm Swift Pro的使用功能。`
    },
    banner_7: {
      title: "User Cases",
      pic_text:[
        {
          name: "激光雕刻",
          pic: require("../components/assets/img/swift/laserPic.png"),
          gif: require("../components/assets/img/swift/laser.gif"),
          active: false,
          active: false,
        },
        {
          name: "机器视觉",
          pic: require("../components/assets/img/swift/visionPic.png"),
          gif: require("../components/assets/img/swift/vision.gif"),
          active: false,
          active: false,
        },
        {
          name: "五子棋 ",
          pic: require("../components/assets/img/swift/goBangPic.png"),
          gif: require("../components/assets/img/swift/goBang.gif"),
          active: false,
          active: false,
        },
        {
          name: "手持示教  ",
          pic: require("../components/assets/img/swift/teachPic.png"),
          gif: require("../components/assets/img/swift/teach.gif"),
          active: false,
          active: false,
        },
      ],
    },
  },
  en:{
    submenu:{
      overview:"Overview",
      detail:"Specifications",
      question:"Question",
      download:"Downloads",
      storeLink: setting.UARN_STORE.en,
      buyText:"Buy Now",
      teachVideo: "Tutorial Videos",
      pdflink:'http://download.ufactory.cc/docs/en/uArm-Swift-Specifications-en.pdf',
    },
    banner1:{
      image:require("../components/assets/img/swift/banner1_en.png"),
      text:"Introducing uArm Swift &amp; uArm Swift Pro",
      title:'<span>UARM</span>&nbsp<span>SWIFT</span>&nbsp<span>PRO</span>',
      content:'DESIGN FOR STEM & MAKER',
      watchVideo:'Watch Video',
    },
//				videoLink:"https://www.youtube.com/embed/kzEkjx6Lmfg?rel=0&amp;autoplay=1",
    videoLink: "https://www.ufactory.cc/static/video/en/en-1.mp4",
    // banner2:{
    //   title:"HIGH PRECISION",
    //   content:"uArm Swift Pro owns a position repeatability of 0.2mm, which is ready for delicate tasks like drawing, laser engraving, and more.",
    //   content1:"*uArm Swift Pro is equipped with stepper motor and 12-bits encoder",
    // },
    // banner3:{
    //   title:"Offline Learning Mode",
    //   content:"Teach uArm by hand, and make uArm repeat what it 'learns', simply by pressing the buttons on the base.",
    //   playText:"PLAY",
    //   recordText:"RECORD"
    // },
    // banner4:{
    //   gearitems:[
    //     {name:"Swift Universal Holder",image:require("../components/assets/img/swift/unselected_Universal holder.png")},
    //     {name:"Swift Gripper",image:require("../components/assets/img/swift/unselected_gripper@2x.png")},
    //     {name:"Swift 3D Printer",image:require("../components/assets/img/swift/unselected_3D Print Extruder.png")},
    //     {name:"Swift Laser",image:require("../components/assets/img/swift/unselected_laser.png")}
    //   ],
    //   title:"END-EFFECTORS",
    //   title1: "CHOOSE FREELY,SWITCH QUICKLY",
    //   content:"Suction cup, Universal Holder and Gripper to choose from.<br>Built-in standardised plug-in allows you to switch tools quickly.",
    //   noteText:"Only for uArm Swift Pro",
    // },
    // banner5:{
    //   title:"SENSE THE WORLD",
    //   content:"Built with Seeed Grove sockets,<br>uArm Swift & uArm Swift Pro can react <br>to motion, temperature, and more.",
    //   // left:{
    //   //   title:"Base Seeed Grove Extension:",
    //   //   items:{
    //   //     1:{
    //   //       icon:require("../components/assets/img/swift/icon_lcd.svg"),
    //   //       text:"LCD RGB Backlight"
    //   //     },2:{
    //   //       icon:require("../components/assets/img/swift/icon_color sensor.svg"),
    //   //       text:"Color Sensor"
    //   //     },3:{
    //   //       icon:require("../components/assets/img/swift/icon_temperature.svg"),
    //   //       text:"Temperature & Humidity Sensor"
    //   //     },
    //   //   }
    //   // },
    //   // right:{
    //   //   title:"Front Seeed Grove Extension:",
    //   //   items:{
    //   //     1:{
    //   //       icon:require("../components/assets/img/swift/icon_magnet.svg"),
    //   //       text:"Electromagnet"
    //   //     },2:{
    //   //       icon:require("../components/assets/img/swift/icon_PIR.svg"),
    //   //       text:"PIR Motion Sensor"
    //   //     },3:{
    //   //       icon:require("../components/assets/img/swift/icon_minifan.svg"),
    //   //       text:"Mini Fan v1.1"
    //   //     },
    //   //   }
    //   // }
    // },
    // banner6:{
    //   title:"EASY TO CONTROL",
    //   sliders:{
    //     1:{
    //       image:require("../components/assets/img/swift/slider1.png"),
    //       content:"Simple & All-in-one<br>Control or programme uArm in the way you like."
    //     },2:{
    //       image:require("../components/assets/img/swift/slider2.png"),
    //       content:"Graphical programming interface designed for uArm<br>Customise your robotic project in an intuitive way."
    //     },3:{
    //       image:require("../components/assets/img/swift/slider3.png"),
    //       content:"Control uArm with mouse and keyboard shortcuts<br>at the same time."
    //     },4:{
    //       image:require("../components/assets/img/swift/slider4.png"),
    //       content:"Teach uArm with your hand. Replay the recorded movement anytime.<br>Or apply the recorded movements in your Blockly projects. "
    //     },5:{
    //       image:require("../components/assets/img/swift/slider5.png"),
    //       content:"Gesture control<br>Let uArm follow your hand motion."
    //     },6:{
    //       image:require("../components/assets/img/swift/slider6.png"),
    //       content:"Insert shapes, texts or images, <br>let uArm draw/engrave the pattern for you(Only for uArm Swift Pro)."
    //     }
    //   }
    // },
    // banner7:{
    //   introItem:[
    //     {
    //       icon:require("../components/assets/img/swift/real-time_remote.png"),
    //       text:"Real-time remote control"
    //     },
    //     {
    //       icon:require("../components/assets/img/swift/icon_download.png"),
    //       text:"Download your Blockly projects to<br>your phone and replay it anytime"
    //     }
    //   ],
    //   image1:require("../components/assets/img/swift/iphone_Horion.png"),
    //   image2:require("../components/assets/img/swift/iphone_vertical.png"),
    //   titleimg:require("../components/assets/img/swift/logo_uarm_play.png"),
    //   name: 'UARM PLAY',
    //   content:"Go Mobile"
    // },
    // banner8:{
    //   content:"Both hardware and software are open to you.<br>We welcome more possibilities, as always.",
    //   title:"FOR DEVELOPERS",
    //   subtitle: "Opensource",
    //   brandlogos:{
    //     1:require("../components/assets/img/swift/Arduino_Logo.png"),
    //     2:require("../components/assets/img/swift/python_logo.png"),
    //     3:require("../components/assets/img/swift/ros-logo.png"),
    //     4:require("../components/assets/img/swift/gc-logo.png"),
    //     5:require("../components/assets/img/swift/opencv-logo.png"),
    //   }
    // },
    // banner9:{
    //   title:"Specifications",
    //   spec:["","Size","Weight","Degrees of<br> Freedom", "Repeatability","Payload","Working Range"],
    //   specItem:[
    //     {
    //       name:"uArm Swift",
    //       pro:"",
    //       image:require("../components/assets/img/swift/swift.png"),
    //       values:["150*132*281mm","1.2kg","4","5mm","500g","50mm - 320mm"]
    //     },{
    //       name:"uArm Swift ",
    //       pro:"Pro",
    //       image:require("../components/assets/img/swift/pro.png"),
    //       values:["150*140*281mm","2.2kg","4","0.2mm","500g","50mm - 320mm"]
    //     },
    //   ],
    //   download: "Download Datasheet",
    //   pdflink:'http://download.ufactory.cc/docs/en/uArm-Swift-Specifications-en.pdf',
    //   mobileSpecItem:[
    //     {
    //       name:"",
    //       pro:" ",
    //       image:" ",},
    //     {
    //       name:"uArm Swift",
    //       pro:"",
    //       image:require("../components/assets/img/swift/swift.png"),
    //     },{
    //       name:"uArm Swift ",
    //       pro:"Pro",
    //       image:require("../components/assets/img/swift/pro.png"),
    //     }
    //   ],
    //   mobileTr: [
    //     ["Size", "150*132*281mm", "150*140*281mm"],
    //     ["Weight", "1.2kg", "2.2kg"],
    //     ["Degrees of Freedom", "4", "4"],
    //     ["Repeatability", "5mm", "0.2mm"],
    //     ["Payload", "500g", "500g"],
    //     ["Working Range", "50mm - 320mm", "50mm - 320mm"]
    //   ],
    // },
    // banner10:{
    //   title:"VISION CAMERA KIT",
    //   content:"Equipped with Open MV, the Vision Camera Kit allows you to do everything from color sorting to face recognition, and ease your burden in visual programming. ",
    //   content1:"*The Vision Camera Kit is based on Open MV(M7)</br> Cam, which is an open source camera on board.  ",
    // },
    banner_3:{
      text1: `Customized Gearbox </br> & Stepper Motors`,
      text2: `Arduino Mega </br> 2567 Motherboard`,
      text3: `500g Payload </br> 0.2mm Repeatability`,
      content3 : "50mm-320mm Working Range",
      freedom: "4 Degrees of Freedom",
      speed: "Max Speed: 100mm/s",
      bluetooth: "Bluetooth 4.0",
      encoder: "12bit Encoder Position Feedback"
    },
    banner_5: {
      title: "What Can uArm Do？",
      pic_text: [
        {
          title: "Pick - Place",
          content: `With its 0.2mm repeatability, the uArm is capable of picking and placing objects up to 500g.
           It is one of the highest tuned consumer grade robotic platforms on the market. The metallic gripper enhances the uArm with 4
           DOF, so you can use the uArm in any open source projects or even in standard light-industrial applications.  `,
          pic: require("../components/assets/img/swift/banner4_1.jpg"),
          mobilePic:  require("../components/assets/img/mobile-web/swift/mobile_banner5_1.jpg"),
        },
        {
          title: "Advanced Robotics Research ",
          content: `The uArm is the world’s first open-source robotic platform. You will have full access to our Github library and hardware.
           With the vision camera kit, the uArm can track objects with different shapes or colors for you to conduct A.I. projects.  `,
          pic: require("../components/assets/img/swift/banner4_2.jpg"),
          mobilePic:  require("../components/assets/img/mobile-web/swift/mobile_banner5_2.jpg"),
        },
        {
          title: "Entry-Level Robotics Learning",
          content: `The “teach-learn” mode lets everyone set the uArm off to work in under a min.For beginner robotic learners,
           the GUI programming helps you understand the programming logic with robots. `,
          pic: require("../components/assets/img/swift/banner4_3.jpg"),
          mobilePic:  require("../components/assets/img/mobile-web/swift/mobile_banner5_3.jpg"),
        },
        {
          title: "Creative New Media Exploration",
          content: `With different end-actuators, the uArm can be transformed to perform any task. The uArm can be
           a painter if you insert a pen in its universal
           holder, engrave patterns with its laser head, or even produce any prototypes with its 3D printing kit.`,
          pic: require("../components/assets/img/swift/banner4_4.jpg"),
          mobilePic:  require("../components/assets/img/mobile-web/swift/mobile_banner5_4.jpg"),
        }
      ]
    },
    banner_6:{
      title: "Softwares",
      content: `The uArm Studio is a clean and intuitive user interface with guided instructions, settings and, 
      diagnosis building for Windows, Mac OS, and Linux. As for smartphones, the uArm Play on mobile phone is available for easy access.
      The uArm also supports Arduino, Python, GRABCAD, and ROS programming to provide plenty of options for users of all levels.`
    },
    banner_7: {
      title: "User Cases",
      pic_text:[
        {
          name: "Laser Engraving",
          pic: require("../components/assets/img/swift/laserPic.png"),
          gif: require("../components/assets/img/swift/laser.gif"),
          active: false,
        },
        {
          name: "Computer Vision",
          pic: require("../components/assets/img/swift/visionPic.png"),
          gif: require("../components/assets/img/swift/vision.gif"),
          active: false,
        },
        {
          name: "Go Bang",
          pic: require("../components/assets/img/swift/goBangPic.png"),
          gif: require("../components/assets/img/swift/goBang.gif"),
          active: false,
        },
        {
          name: "Teach & Learn Mode",
          pic: require("../components/assets/img/swift/teachPic.png"),
          gif: require("../components/assets/img/swift/teach.gif"),
          active: false,
        },
      ],
    },
  },
};

export default langText;
