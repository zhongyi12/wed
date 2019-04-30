import setting from '../config';
const langText = {
  cn:{
    tecSupport: '技术支持:',
    clickHere: '点击这里:',
    emailContact: '购买咨询:',
    contactPhone: '联系电话:',
    contactAddress: '联系地址:',
    aboutAddress:"广东省深圳市南山区麻雀岭工业区M6栋2楼",
    aboutUs:"关于我们",
    aboutText:{
      1:"深圳市众为创造科技有限公司（UFACTORY），成立于2013年，在美国推出了桌面级开源机械臂——uArm，以商业实践的方式引领机器人开源生态的发展，聚集全球机器人狂热爱好者，打造丰富的生活应用场景。2015年作为企业代表，获得李克强总理的亲自接见，高度赞扬了产品的创新性，现场提出“万众创业，大众创新”的口号。",
      2:"UFACTORY作为消费级机器人系统研发服务商，由一群来自全球的Geek，怀着改变机器人生态的愿景以及对人工智能有极致追求的年轻人共同铸造。致力于将工业技术大众化，通过长期的技术创新与积累，为机器人工业、行业以及消费级客户提供高性价比、优体验的产品和一体化解决方案。至今，产品遍布全球80多个国家和地区，多家国际主流媒体及机构对uArm系列机械臂给予了高度赞誉。",
      3:"我们怀着改变未来的梦想，希望让机器人成为生活中的必需品，创造一种新的生活方式，始终与你同行。",
    },
    aboutHistory:"发展历程",
    aboutPosition:"加入我们",
    aboutContact:"联系我们",
    btnContact:"客服反馈",
    btnEmail:"邮箱",
    btnAddress:"地址",
    btnPhone:"电话",
    feedback:setting.SUPPORT_URL.cn,
    addressURL:"http://j.map.baidu.com/m6629",
    positionWork:"工作职责",
    positionRequire:"职位要求",
    sendEmailText:"请发送简历到",
    positionItems:{
      1:{
        isopen:true,
        positionName:"视觉算法工程师",
        positionWorkItems:{
          1:"负责视觉相关功能算法的研究、验证、实现和优化，有嵌入式开发的相关实践经验",
          2:"配合其他项目成员完成相关的测试工作"
        },
        positionRequireItems:{
          1:"重点高校计算机或自动化专业本科以上学历，理论基础扎实",
          2:"有嵌入式平台算法优化经验优先",
          3:"熟练使用C++/C,熟悉目标跟踪/标测、三维重建、SLAM相关经验",
          4:"工作踏实、认真负责，抗压能力强，沟通能力好"
        }
      },
      2:{
        isopen:false,
        positionName:"机械结构工程师",
        positionWorkItems:{
          1:"负责产品机械方案的设计",
          2:"承担样机的研制、调试和相关技术文挡的拟制",
          3:"产品后续跟踪改善",
          4:"负责处理结构设计问题和技术支持"
        },
        positionRequireItems:{
          1:"机械相关专业，本科及以上学历，重点院校毕业优先考虑",
          2:"4年以上年的机械设计经历，做过智能机器人、精密机构的优先考虑",
          3:"力学理论基础好，懂数据分析仿真，熟悉各种材料特性、加工工艺、注塑工艺",
          4:"具备较强的团队沟通能力、责任心，能够在较大的压力下很好地完成工作"
        }
      },
      3:{
        isopen:false,
        positionName:"控制算法工程师",
        positionWorkItems:{
          1:"参与产品整体方案制定，完成产品软件设计定型",
          2:"熟练使用相应仿真软件，对所需运动控制算法、机器人算法进行仿真验证",
          3:"负责机器人控制软件设计：轨迹规划、加减速控制、正逆运动学等模块设计和实现",
          4:"系统调试和软件测试"
        },
        positionRequireItems:{
          1:"熟悉基本控制理论，数学功底强，具有独立进行数学建模、分析能力",
          2:"有扎实的C/C++, Matlab编程经验，熟悉常用算法及优化，熟悉linux,Windows系统的开发调试环境以及嵌入式系统的开发",
          3:"有轨迹规划、运动插补、机器人运动学、动力学等方面经验者优先",
          4:"有机器人实际开发和调试经验者优先",
          5:"具备良好的沟通协调能力及团队协作、配合能力",
          6:"能承受较大的工作压力；有较强的责任心； 对工作充满热情，工作态度积极"
        }
      },
    }
  },
  en:{
    tecSupport: 'Technical Support:',
    clickHere: 'click here:',
    emailContact: 'Order Inquiries:',
    contactPhone: 'Tel :',
    contactAddress: 'Address:',
    aboutAddress:"2F, Building M-6, Ma Que Ling Industrial Zone,<br>Nanshan District, Shenzhen, Guangdong, P.R. China",//
    aboutUs:"About UFACTORY",
    btnContact:"Feedback",
    btnEmail:"Email",
    btnAddress:"Address",
    btnPhone:"Phone",
    feedback: setting.SUPPORT_URL.en,
    addressURL:"https://goo.gl/maps/ucMXtc37aay",
    aboutText:{
      1:`UFACTORY was founded in 2013 and we released the first desktop open source robotic arm in United States.
             UFACTORY leads the development of the open source robotic ecosystem in a commercial way which has attracted global robot enthusiast to use robotics for many different scenarios. It was huge honor to meet Premier Likeqiang of China in 2015 who complimented us highly on our innovative robot arm, regarding us as representatives of the enterprise in robotic industry.`,
      2:`UFACTORY is specialized in developing and manufacturing consumer robotics systems. Founded by a group of geeks who have experience in artificial intelligence and the will to change the robot ecosystem,
						 UFACTORY is devoted to popularizing the industrial technology and to provide the high cost-performance products and integrated solutions for the industry and consumers through long-term innovation and technological accumulation.`,
      3:`So far, our products are sold in more than 80 countries and regions. Many mainstream media and agencies praised the uArm series highly.
            We are aiming to make people believe that humanity is going to benefit from robots in our daily life, and that they will become a necessary item for everybody in the future.`,
    },
    aboutHistory:"Our story",
    aboutPosition:"Join us",
    aboutContact:"Contact us",
    positionWork:"Job responsibilities",
    positionRequire:"Job requirements",
    sendEmailText:"Send your resume to",
    positionItems:{
      1:{
        isopen:true,
        positionName:"Vision Algorithm Engineer",
        positionWorkItems:{
          1:"Responsible for visual correlation function algorithm research, validation, implementation, and optimization of embedded development related experience",
          2:"Work with other team members to complete the relevant tests"
        },
        positionRequireItems:{
          1:"Universities computer or bachelor degree or above, major in automation, a solid theoretical foundation",
          2:"Embedded platform algorithm optimization experience is a plus",
          3:"Proficient in using C++/C, be familiar with the target tracking/measurement, 3d reconstruction, SLAM related experience",
          4:"The steadfast, serious and responsible work, compression capability is strong, good communication skills"
        }
      },
      2:{
        isopen:false,
        positionName:"Mechanical Engineer",
        positionWorkItems:{
          1:"Responsible for the mechanical design of new product",
          2:"Responsible for the development and debugging of the prototype, and writing technical documentation",
          3:"Focus on product improvement",
          4:"Responsible for processing structural design issues, and provide technical support"
        },
        positionRequireItems:{
          1:"Bachelordegree or above, majoring in Mechanical Engineering /Product Design or relevant",
          2:"More than 4 years working experience with mechanical design",
          3:"Strong communication skills, Responsibility, Work well under pressure"
        }
      },
      3:{
        isopen:false,
        positionName:"Control Engineer",
        positionWorkItems:{
          1:"Participate in the overall plan of product design,capable in product software design",
          2:"Proficient in using simulation software and verification of motion control and robotics algorithm",
          3:"Responsible for the design of robot control software,i.e. Trajectory planning, acceleration and deceleration control, forward and backward kinematics control",
          4:"Test and verification of systems and software"
        },
        positionRequireItems:{
          1:"Familiar with control theory, strong ability in Math and capable in analytic thinking and model construction",
          2:"Solid C/C++, Matlab experiences, familiar with algorithm and optimization, familiar with linux, windows development and embed systems development",
          3:"Experience with trajectory planning, motion interpolation, robotic kinematics is a plus",
          4:"Practical robotics development experience is a plus",
          5:"Good communication skill and teamwork spirit",
          6:"Nice personality, steadfast and responsible for work, strong compression capability; passionate and positive at work"
        }
      },
    }

  }
};

export default langText;
