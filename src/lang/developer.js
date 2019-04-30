const iconPicture = require("../components/assets/img/about/icon_picture.svg");
const images ={
  1: require("../components/assets/img/developer/icon_frimware.svg"),
  2: require("../components/assets/img/developer/icon_guide.svg"),
  3: require("../components/assets/img/developer/icon_ros.svg"),
  4: require("../components/assets/img/developer/icon_sch.svg"),
  5: require("../components/assets/img/developer/icon_sdk.svg"),
  6: require("../components/assets/img/developer/icon_3d.svg")
};
const firmware = {
  1: 'http://download.ufactory.cc/developer/swift/uArm_Swift-Pro_Frimware_3.2.0_20180724.zip',
  2: 'http://download.ufactory.cc/developer/swift/SwiftProForArduino-Version_V4.0_20181022.zip',
  3: 'http://download.ufactory.cc/developer/swift/uArm_Swift_Pro_2nd_uart_Firmware_20180724.zip',
}
const langText = {
  cn: {
    document: {
      pro: {
        1:{
          title: "uArm Swift Pro 固件 3.2.0",
          content: "uArm Swift Pro 基于Arduino Mega 2560 的固件源代码。",
          link: firmware[1],
          icon: images[1],
        },
       3:{
          title: "uArm Swift Pro 固件 4.2",
          content: "uArm Swift Pro V4.0固件源代码。",
          link: firmware[2],
          icon: images[1],
        },
        5:{
          title: "uArm Swift Pro 2nd uart 固件",
          content: "uArm Swift Pro 2nd uart 固件的hex文件及固件上传工具。",
          link: firmware[3],
          icon: images[1],
        },
        // 7:{
        //   title: "uArm-固件指引",
        //   content: "",
        //   link: "http://download.ufactory.cc/docs/cn/uArm-%E5%9B%BA%E4%BB%B6%E6%8C%87%E5%BC%95_20181204.pdf",
        //   icon: images[1],
        // },
        // 2:{
        //   title: "uArm Swift Pro 开发者手册",
        //   content: "uArm Swift Pro 开发者手册，提供基于uArm Swift<br> Pro 进行二次开发所需的文件指引。",
        //   link: "http://download.ufactory.cc/docs/cn/uArm%20Swift%20Pro%E5%BC%80%E5%8F%91%E8%80%85%E6%89%8B%E5%86%8Cv1.0.6.pdf",
        //   icon: images[2],
        // },
        4:{
          title: "uArm ROS",
          content: "支持Moveit!, RViz 以及串口通信。适用于uArm Swift Pro及uArm Swift.",
          link: "http://download.ufactory.cc/developer/swift/RosForSwiftAndSwiftPro-master_20180620.zip",
          icon: images[3],
        },
        6:{
          title: "uArm Swift Pro 电路图",
          content: "uArm Swift Pro 主板（Arduimo Mega 2560）电路图。",
          link: "http://download.ufactory.cc/developer/swift/uArm_Swift_Pro_SCH_20180723.pdf",
          icon: images[4],
        },
        8:{
          title: "uArm Python SDK",
          content: "支持Moveit!, RViz 以及串口通信。适用于uArm Swift Pro及uArm Swift.",
          link: "http://download.ufactory.cc/developer/swift/uArm-Python-SDK-2.0_20180620.zip",
          icon: images[5],
        },
        9:{
          title: "uArm Swift Pro 3D图",
          content: "uArm Swift Pro 3D机身3D图。",
          link: "http://download.ufactory.cc/developer/swift/uArm_Swift_Pro_3D_20180620.STEP",
          icon: images[6],
        },
      }

    }
  },
  en: {
    document: {
      pro: {
        1:{
          title: "uArm Swift Pro Firmware 3.2.0",
          content: "Source code of uArm Swift Pro Firmware 3.2.0.",
          link: firmware[1],
          icon: images[1]
        },
        3:{
          title: "uArm Swift Pro Firmware 4.2",
          content: "Source code of uArm Swift Pro Firmware 4.0.",
          link: firmware[2],
          icon: images[1]
        },
        5:{
          title: "uArm Swift Pro 2nd uart Firmware",
          content: "Firmware flash tool and hex file of uArm Swift Pro 2nd uart Firmware.",
          link: firmware[3],
          icon: images[1]
        },
        // 7:{
        //   title: "uArm-Firmware Guidance",
        //   content: "",
        //   link: "http://download.ufactory.cc/docs/en/uArm-Firmware%20Guidance_20181204.pdf",
        //   icon: images[1],
        // },
        // 2:{
        //   title: "uArm Swift Pro Developer Guide",
        //   content: "uArm Swift Pro Developer Guide provide <br> instructions for uArm Swift Pro based development.",
        //   link: "http://download.ufactory.cc/docs/en/uArm%20Swift%20Pro_Developer%20Guide%20v1.0.6.pdf",
        //   icon: images[2],
        // },
        4:{
          title: "uArm ROS",
          content: "uArm ROS packages support Moveit!, RViz and serial communication.Support uArm Swift Pro and uArm Swift.",
          link: "http://download.ufactory.cc/developer/swift/RosForSwiftAndSwiftPro-master_20180620.zip",
          icon: images[3],
        },
        6:{
          title: "uArm Swift Pro SCH",
          content: "Schematic of uArm Swift Pro mainboard（Arduimo Mega 2560）.",
          link: "http://download.ufactory.cc/developer/swift/uArm_Swift_Pro_SCH_20180723.pdf",
          icon: images[4],
        },
        8:{
          title: "uArm Python SDK",
          content: "uArm Python SDK provide APIs to control your uArm.Support uArm Swift Pro and uArm Swift.",
          link: "http://download.ufactory.cc/developer/swift/uArm-Python-SDK-2.0_20180620.zip",
          icon: images[5],
        },
        9:{
          title: "uArm Swift Pro 3D Models",
          content: "3D Models uArm Swift Pro mainbody.",
          link: "http://download.ufactory.cc/developer/swift/uArm_Swift_Pro_3D_20180620.STEP",
          icon: images[6],
        },
      }
    }
  },
};

export default langText;
