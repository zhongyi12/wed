import setting from '../config';
const flashToolLink = 'https://github.com/altjz/flashtool/releases';
const firmwareLink = 'https://github.com/uArm-Developer/SwiftProForArduino/releases'
const langText = {
  cn:{
    breadcrumb:{
      1:"首页",
      2:"购买咨询",
      3: "技术支持",
      4: "合作咨询",
      5: "售后服务",
    },
    selectProduct: '选择产品',
    btnContact:"更多问题",
    feedback: `${setting.SUPPORT_URL.cn}${this.getParams}`,
    tabText:{
      1:"购买支付和订单",
      2:"售后及维修服务",
      3:"uArm Metal使用指南",
      4:"uArm Metal常见问题",
      5:"合作咨询",
    },
    aftersales: {
      1: {
        name: '2',
        title: '换货',
        content: [
          {
            html: [
              '客户收到货物15个自然日内，产品发生非人为性能故障，经售后技术确认后，顾客可以选择换货或免费维修，往返运费由UFACTORY承担。',
              '<br>以下情况我们有权拒绝客户的换货要求：',
            ],
            list: [
              '自收货之日起超过15个自然日后提出换货要求的；',
              '换货品不全、或外观人为原因导致受损；',
              '换货时无法提供合法的购买凭证或单据，或对单据进行伪造、涂改；',
              '发生非产品质量问题导致的碰撞、烧毁，以及人为的私自改装、进异物（水、油等）、不正确安装、未按说明书指引使用和操作所造成的商品质量问题。',
            ],
          },
        ],
      },
      2: {
        name: '3',
        title: '维修服务政策',
        content: [
          {
            html: [
              '<h4>1.保修范围</h4>',
              '以下各部件质保期限为12个月：',
              '机械臂主体、充电器、气泵套件、电动夹子、通用夹具、激光雕刻套件、3D打印套件、Open MV摄像头。',
              '<br>注意：Micro USB 线， 3D打印耗材等易损耗产品，不属于保修范围。',
              '<br><h4>2. 维修服务</h4>',
              '<h5>2.1 免费维修</h5>',
              '保修期内，非人为性能故障问题时需要联系技术支持，经技术人员测试后：',
            ],
            list: [
              '如果更换配件可以解决，我们将免费寄送配件供客户更换;',
              '如果产品需要进行维修，经技术支持判定后，我们将联系客户将需要维修的产品寄回，收到产品后我们会尽快安排售后人员进行维修，维修费用/物料费用/往返运费均由UFACTORY承担。',
            ],
          },
          {
            html: [
              '<br><h5>2.2 售后维修流程</h5>',
              '售后人员已经与您协商确定将产品寄回厂家维修（未经协商寄回的机械臂我们将拒收）； 在收到您的产品之后，售后技术部门会进行返修产品检测，评估维修费用；售后人员反馈检测到的问题，给您发送当次维修的费用清单，在收到维修清单后，请您将维修款项汇入至指定银行账户，如有异议请在2个工作日内提出。产品完成维修后，售后人员再次与您确认收货地址等信息，维修款项默认不开发票，如需发票请说明。',
              '<br>实行免费保修服务必须同时符合以下条件:',
            ],
            list: [
              '自购买产品在规定的产品保修期限内正常使用，出现非人为的性能故障的产品;',
              '无擅自拆机、改装及其它人为引起的故障等;',
              '提供有效的购买证明、单据及单号。',
            ],
          },
          {
            html: ['<br><strong>以下情况不属于免费产品保修服务的情形:</strong>'],
            list: [
              '擅自改装、拆解等行为而造成的损坏;',
              '未按官方说明书要求进行的不正确安装、使用及操作所造成的损坏;',
              '客户自行维修装配件导致的损坏;',
              '因未按官方说明书要求进行的电路改造、充电器的匹配使用不当导致的损坏;',
              '与非本公司认证的第三方部件同时使用时发生可靠性及兼容性问题导致的损坏;',
            ],
          },
          {
            html: [
              '<br><h5>2.3 有偿维修</h5>',
              '产品故障需要进行寄回本公司维修的情况下，如不满足免费维修条件，客户需承担维修费用/物料费用/往返运费，本公司将在收到产品并定损检测收告知客户维修费用；若客户接受报价，待客户支付相关费用后，我们将维修并测试好之后将产品寄回。',
            ],
            list: [],
          }
        ],
      },
      3: {
        name: '4',
        title: '铂金客户',
        content: [
          {
            html: [
              '铂金客户收到货物6个月内，产品发生非人为故障，经技术支持确认后，客户可以选择换货或免费维修，往返运费由UFACTORY承担。',
              '铂金客户收到货物12个月内，产品发生非人为故障，经技术支持确认后，客户可以选择免费维修，维修费用/物料费用/往返运费均由UFACTORY承担。',
              '<br>以下情况我们有权拒绝铂金客户的换货或免费维修要求：',
            ],
            list: [
              '自收货之日起超过6个月后提出换货要求的或超过12个月后提出免费维修要求的；',
              '换货/维修时无法提供合法的购买凭证或单据，或对单据进行伪造、涂改；',
              '换货品不全、或外观人为原因导致受损；',
              '发生非产品质量问题引起的碰撞、烧毁，以及人为的私自改装、进异物（水、油等）、不正确安装、未按说明书指引使用和操作所造成的产品质量问题。',
            ],
          }
        ]
      },
      4: {
        name: '5',
        title: '服务与支持',
        content: [
          {
            html: [
              '请点击本页下方“更多问题”获取技术支持',
              '我们在收到您的请求后，会在5个工作日内与您联系。'
            ]
          }
        ]
      },
      5: {
        name: '6',
        title: '其他',
        content: [
          {
            list: [
              '不同国家购买产品，鉴于产品差异，保修期间退换货和保修服务将有所不同。',
              '将产品寄往UFACTORY时您需先行承担邮寄费用。',
              '若经过检测产品不符合免费维修条件，客户可选择付费维修或原机寄回。',
              '产品维修可能会导致数据丢失，请您先行备份您的数据。',
//            '本政策适用范围限于2017年10月16日之后购买的产品。',
              `如您对售后服务政策有任何疑问或建议，请点击本页下方“更多问题”联系我们。`,
            ],
          }
        ]
      },
    },
    1:{
      1:{
        qtext:"有哪些购买渠道？",
        atext:`<ul ><li >通过<a href='${setting.STORE_URL.cn}' target='_blank' class="linktext">官网商城</a>购买。</li><li >关注官方公众号：UFACTORY，通过微店购买。</li><li >通过info@ufactory.cc与我们联系，通过银行账户转账购买。</li></ul>`
      },
      2:{
        qtext:"物流配送政策？",
        atext:"单笔订单购买超过1000元默认顺丰快递包邮（偏远地区除外），未满1000元的订单需自付邮费。如需发票请备注发票抬头或者联系客服。如需更换快递公司请联系客服。"
      },
      3:{
        qtext:"配件可以单独购买吗？",
        atext:"已购买机械臂的用户方可单独购买配件，我们还将审核您单独购买配件的用途，具体请在订单中备注购买配件的用途。"
      },
      4:{
        qtext:"提供哪种类型的发票？",
        atext:"提供增值税普通发票或增值税专用发票, 视客户要求而定。"
      },
      5:{
        qtext:"如何支付订单？",
        atext:"<ul><li>如在商城中购买，请根据商城的购买流程支付订单。</li><li>如联系我们客服走合同订购的客户，可以接受企业公对公银行转账。</li></ul>"
      },


    },
    'pro':{
      1:{
        qtext:"新手如何快速上手uArm?",
        atext:`以下连接帮你快速了解uArm：<a class='linktext' target="_blank" href='${setting.VIDEO_LINK.cn}'>教学视频</a> <a class='linktext' target="_blank" href='${setting.DOWNLOAD_LINK.cn}'>软件下载</a>
                 <a class='linktext' target="_blank" href='${setting.DOWNLOAD_LINK.cn}'> 文档指南</a>`,
      },
      2:{
        qtext:"uArm Swift Pro与uArm Studio无法连接时如何排查",
        atext:`<ul><li>（1）请<a class='linktext' target="_blank" href='${setting.DOWNLOAD_LINK.cn}'>下载</a>或者更新至最新版本uArm Studio</li>
                  <li>（2）点击Studio界面“设备未连接”旁边的问号按钮</li><li>（3）点击“故障排查”——“建议”。</li>
                  <li>（4）如果软件显示的建议无法解决问题，请点击本页下方“更多问题”获取技术支持。</li></ul>`
      },
      3:{
        qtext:"什么是固件？如何升级固件？",
        atext:`<ul><li>（1）固件是uArm的大脑，使你能通过uArm Studio控制uArm，或者向uArm 发送指令。</li><li>（2）请点击“设置” 或者“检查更新”来查看最新的固件版本、发布记录，或者升级固件。</li></ul>`,
      },
      4:{
        qtext:"固件升级到一半的时候中断或者刷入了错误的固件要怎么办？",
        atext:`<ul><li>（1）下载<a class='linktext' target="_blank" href="${flashToolLink}">"Flash Tool"</a>, 下载<a class='linktext' target="_blank" href='${firmwareLink}'>最新固件</a></li><li>（2）通过USB连接电脑和uArm Swift Pro（注意，使用Flash Tool时不要运行uArm Studio）</li>
                  <li>（3）打开Flash Tool，将.hex固件拖入到Flash Tool界面，刷入固件。</li><li>（4）关掉Flash Tool，打开uArm Studio查看固件是否更新成功。</li></ul>`,
      },
      5:{
        qtext:"uArm出现校准问题、运动异常时，应该怎么排查？",
        atext:`<ul><li>（1）请检查机械臂点击排线是否连接正常，如点击排线松脱，可以在关机状态下重插排线。</li><li>（2）打开Blockly，拍摄机械臂运行以下指令的视频发给我们。
                  <br>&nbsp;&nbsp;移动到 X 180 Y180 Z30<br>&nbsp;&nbsp;移动到 X 180 Y-180 Z30<br>&nbsp;&nbsp;移动到X 250 Y0 Z150<br>&nbsp;&nbsp;移动到 X 150 Y0 Z30</li>
                  <li>（3）重新校准机械臂（不建议频繁校准）校准指南</li></ul>`,
      },
      6:{
        qtext:"uArm开发者资源",
        atext:`<a class="linktext" target="_blank" href='${setting.DOWNLOAD_LINK.cn}'>开发者指南<a/> <a class="linktext" target="_blank" href="https://github.com/uArm-Developer">UFACTORY Github</a>`,
      },
      7:{
        qtext:"怎么购买额外的配件？",
        atext:`购买配件请点击<a class="linktext" target="_blank" href='${setting.STORE_URL.cn}'>这里</a>`,
      }
    },
    'swift':{
      1:{
        qtext:"uArm Swift精度是多少？是否支持激光雕刻、3D打印？",
        atext:`uArm Swift重复定位精度是5mm，不支持激光雕刻、3D打印。`,
      },
      2:{
        qtext:"uArm Swift是否支持手势控制？ ",
        atext:`uArm Swift支持通过Leapmotion进行手势控制。`
      },
      3:{
        qtext:"uArm Swift与uArm Studio无法连接时如何排查",
        atext:`<ul><li>（1）请<a class='linktext' target="_blank" href='${setting.DOWNLOAD_LINK.cn}'> 下载</a>或者更新至最新版本uArm Studio</li><li>（2）点击Studio界面“设备未连接”旁边的问号按钮</li>
                  <li>（3）点击“故障排查”——“建议”。</li><li>（4）如果软件显示的建议无法解决问题，请点击本页下方“更多问题”获取技术支持。</li></ul>`,
      },
      4:{
        qtext:"什么是固件？如何升级固件？",
        atext:`<ul><li>（1）固件是uArm的大脑，使你能通过uArm Studio控制uArm，或者向uArm 发送指令。</li><li>（2）请点击“设置” 或者“检查更新”来查看最新的固件版本、发布记录，或者升级固件。</li>
                </ul>`,
      },
      5:{
        qtext:"怎么购买额外的配件？",
        atext:`购买配件请点击<a class="linktext" target="_blank" href='${setting.STORE_URL.cn}'>这里</a>`,
      }
    },
    'metal':{
      1:{
        qtext:"一套标准的uArm Metal机械臂套装包含哪些部件？",
        atext:"机械臂主体*1，支撑脚架*4，脚架螺丝*8，气泵*1，气泵螺丝*2，AC电源盒*1，电源线*1，传输数据USB线*1，吸头*1，底部吸盘*4，螺丝刀*1。"
      },
      2:{
        qtext:"使用机械臂需要的基本软件环境？",
        atext:"<ul ><li>下载安装uArm助手，集成了底层驱动安装、固件更新及校正程序。</li><li >下载安装uClient客户端，自动安装Java底层环境。</li></ul>"
      },
      3:{
        qtext:"怎样用控制机械臂？",
        atext:"<ul><li>通过uClient客户端控制；</li><li>通过Python编程控制；</li><li>通过Arduino编程控制；</li><li>通过ROS平台控制；</li></ul>"
      },
      4:{
        qtext:"机械臂如何维护和保养？",
        atext:"机械臂主板为易损坏部件，请定期清理机械臂主板上的粉尘及污渍；机械臂舵机提供有限的扭力，请在有机械臂有效负载范围内使用机械臂（有效负载500g）；请确保机械臂有充足的运动范围（机械臂的活动范围请参考——机械臂活动范围）；请使用官方标配的电源设备，否则容易导致主板或舵机烧毁。"
      },
      5:{
        qtext:"与机械臂相关的软件下载链接（针对机械臂二次开发）",
        btext:[
          `arduino IDE<br><a target='_blank' class='linktext' href='https://www.arduino.cc/en/Main/Software'>https://www.arduino.cc/en/Main/Software</a>`,
          `arduino API<br><a target='_blank' class='linktext' href='http://uarm-developer.github.io/UArmForArduino/index.html'>http://uarm-developer.github.io/UArmForArduino/index.html</a> `,
          `Python API<br><a target='_blank' class='linktext' href='http://pyuarm.readthedocs.io/en/latest/'>http://pyuarm.readthedocs.io/en/latest/</a> `,
          `Pyuarmdevelopment kit<br><a target='_blank' class='linktext' href='https://pypi.python.org/pypi/pyuarm'>https://pypi.python.org/pypi/pyuarm</a>`,
          `Communication protocol<br><a target='_blank' class='linktext' href='http://download.ufactory.cc/docs/en/uarm_gcode_communication_protocol_v1.0_en.pdf'>http://download.ufactory.cc/docs/en/uarm_gcode_communication_protocol_v1.0_en.pdf</a> `,
          `leap motion<br><a target='_blank' class='linktext' href='https://www.leapmotion.com/setup'>https://www.leapmotion.com/setup</a>`,
          `Arduino UNO introduction<br><a target='_blank' class='linktext' href='https://www.arduino.cc/en/Main/ArduinoBoardUno?setlang=cn'>https://www.arduino.cc/en/Main/ArduinoBoardUno?setlang=cn</a> `,
        ],
      },
      6:{
        qtext:"uArm Metal机械臂3D结构图或者CAD图纸",
        btext:["请参考以下链接：<a class='linktext' href='https://grabcad.com/library/uarm-metal-1' target='_blank'>https://grabcad.com/library/uarm-metal-1</a>"]
      },
      7:{
        qtext:"如何校正机械臂？",
        btext:["打开uArm助手，选择对应端口，点击重新校正。（2016年4月份之后购买机械臂的用户严禁自行校正，否则可能产生严重后果。）"]
      },
      8:{
        qtext:"蓝牙连接模式下无法将framware刷入机械臂",
        btext:["蓝牙连接模式下，PC与机械臂只可以实时数据传输，PC端无法将framware固件刷入机械臂，如需要刷固件，请使用USB连接线；注：蓝牙连接下手机无法通过蓝牙控制机械臂，官方目前不支持移动端软件控制机械臂。"]
      },
      9:{
        qtext:"机械臂是2016年以前购买的，应不应该刷入最新的framware固件？",
        btext:["由于最新的固件和16年之前的校正程序有不兼容的部分，用户在刷入最新固件后可能会导致不能正常控制机械臂的情况，请参考（第4点：用户自行校正机械臂的教程）自行完成机械臂的校正，完成之后即可正常使用。"]
      }
    },
  },
  en:{
    breadcrumb:{
      1:"Home",
      2:"Purchase and Payment",
      3: "Technical Support",
      4: "Cooperation",
      5: "After-sales Policies",
    },
    selectProduct: 'Select a Product',
    btnContact:"Ask Questions",
    feedback: `${setting.SUPPORT_URL.en}${this.getParams}`,
    tabText:{
      1:"Purchase & Payment",
      2:"After-sales & Maintenance Services",
      3:"uArm Metal Basics",
      4:"For uArm Metal Developers",
      5:"Cooperative Consultation",
    },
    aftersales: {
      1: {
        name: '1',
        title: 'Replacement',
        content: [
          {
            html: [
              'Customer can request Replacement Service:',
              'Within 15 calendar days of receiving the product if the product suffers performance failure. UFACTORY will cover the shipping cost.',
              '<br>Replacement Service will not be provided where:',
            ],
            list: [
              'Service is requested more than 15 calendars days after receiving a product.',
              'A product sent to UFACTORY for replacement does not include all original accessories, attachments and packaging, or contains items damaged by user error.',
              'Legal proof-of-purchase, receipts, or invoices are not provided, or are reasonably believed to have been forged or tampered with.',
              'Any fault or damage of the product is caused by unauthorized use or modification of the product, including exposure to moisture, entry of foreign bodies (water, oil, etc.) or improper installation or operation.',
            ],
          }
        ],

      },
      2: {
        name: '2',
        title: 'Warranty Repair Service',
        content: [
          {
            html: [
              'The following various parts warranty period is 12 Months: robot arm、charger、suction cup、gripper, universal holder、laser、3D printing kit and Open MV Camera.',
              '<br>Note: The following items do not included in warranty service: Micro USB cable、3D printing-filament and other wear-and-tear parts.',
              '<br>Our goods come with guarantees that UFACTORY agrees to repair or replace a product during the warranty period according to the warranty policies.',
            ],
            list: [
              'If problems can be solved by replaced accessories, we will send corresponding components as your replacement for free. ',
              'If the product need to be repaired, please contact UFACOTRY technical support and initiate repair service. UFACTORY will cover the repair and shipping cost for warranty repair.',
            ],
          },
          {
            html: ['<br><strong>You can request Warranty Repair Service where:</strong>'],
            list: [
              'The product must not have been subjected to abnormal or unauthorized used, as intended by the manufacturer during the warranty period. ',
              'No unauthorized disassembling, modification or installation has been performed on the product or a component. ',
              'You provide a valid proof-of-purchase, receipt or order number.',
            ],
          },
          {
            html: ['<br><strong>Warranty Repair Service will not be provided where:</strong>'],
            list: [
              'Damage caused by unauthorized modification, disassembly, or shell opening not in accordance with the official instructions or manuals. ',
              'Damage caused by improper installation, incorrect use or operation not in accordance with the official instructions or manuals. ',
              'Damage caused by unauthorized repair.',
              'Damage caused by unauthorized circuit modification and mismatch or misuse of the charger. ',
              'Damage caused by reliability or compatibility issues when using unauthenticated third-party parts.',
            ],
          }
        ],
      },
      3: {
        name: '3',
        title: 'Customer Paid Repair Service',
        content: [
          {
            html: ['If product need to be repaired and not qualified to be a warranty repair case, customer should cover the cost of repair and shipping. Quotation will be sent to customer after we receive the product and finish the damage assessment. If customer agree with the quotation, we will repair the product and sent it back to customer.'],
            list: [],
          }
        ],
      },
      4: {
        name: '4',
        title: 'Platinum Membership',
        content: [
          {
            html: [
              'Within 6 Months of receiving the product if the product suffers performance failure, we provide Platinum Membership replacement and free repair. UFACTORY will cover the shipping cost.',
              'Within 12 Months of receiving the product if the product suffers performance failure, we provide Platinum Membership free repair. UFACTORY will cover the cost of repair and shipping.',
              '<br>6 months replacement and 12 months warranty repair service will not be provided to Platinum Membership where:',
            ],
            list: [
              'Replacement requested more than 6 Months or repair requested more than 12 Months after receiving a product.',
              'A product sent to UFACTORY for replacement does not include all original accessories, attachments and packaging, or contains items damaged by user error.',
              'Legal proof-of-purchase, receipts, or invoices are not provided, or are reasonably believed to have been forged or tampered with.',
              'Any fault or damage of the product is caused by unauthorized use or modification of the product, including exposure to moisture, entry of foreign bodies (water, oil, etc.) or improper installation or operation.',
            ],
          }
        ]
      },
      5: {
        name: '5',
        title: 'Technical support',
        content: [
          {
            html: ['Please click the "Ask Questions" button on the buttom of this page for technical support.', ''],
          }
        ]
      },
      6: {
        name: '6',
        title: 'Essential Information',
        content: [
          {
            list: [
              'The warranty period for Return & Refund Service, Replacement Service and Warranty Repair Service may vary with respect to your product, the part experiencing issues, or the country of purchase.',
              'You are responsible for shipping costs and custom duty when sending product for return, repair or replacement. ',
              'If UFACTORY determines that the issue in question is not covered by UFACTORY After-Sales Policy, you will have to apply for Customer Paid Repair Service. UFACTORY will not start repair until you agree to the cost for repair quoted by UFACTORY. If you disagree with the cost for repair, UFACTORY will return the product with you burdening the cost of shipping.',
              'Please be aware that where a product is capable of retaining user-generated data, such data may be lost during the repair process. We therefore recommend that you back up your data prior to any repair.',
//            'The policies are valid for products purchased after Oct 16th, 2017',
            ],
          }
        ]
      },
    },
    1:{
      1:{
        qtext:"How could I purchase uArm?",
        atext:`Please visit our <a class='linktext' href='${setting.STORE_URL.en}'>online store</a>`,
      },
      2:{
        qtext:"What's the logistics and distribution policy?",
        atext:"Shipping Time: Items will be shipped within 5 working days of order confirmation (if the item is out of stock, we will make a notice at the product page.) Delivery Company and fees: For uArm we usually use DHL by default. For the accessories (shield, gripper, universal holder, etc) we usually use Global Postal."
      },
      3:{
        qtext:"Can I purchase the accessories separately?",
        atext:"You can purchase accessories separately, please note the use of accessories in the order ."
      },
      4:{
        qtext:"Do you provide invoices?",
        atext:"If necessary, proforma invoice is available, please note this in the order."
      },
      5:{
        qtext:"How can I pay for the order?",
        atext:"Please pay through Paypal. For any other payment method, please contact info@ufactory.cc"
      },
      6:{
        qtext:"How can I modify and cancel the order?",
        atext:"Please modify or cancel the order in purchase channel."
      },

    },
    'pro':{
      1:{
        qtext:"As a beginner, what should I do when I first get my uArm?",
        atext:`Here are resources for beginners: <a class='linktext' target="_blank" href='${setting.VIDEO_LINK.en}'>Video Tutorials</a> <a class='linktext' target="_blank" href='${setting.DOWNLOAD_LINK.en}'>Download Software</a>
                 <a class='linktext' target="_blank" href='${setting.DOWNLOAD_LINK.en}'> Documents</a>`,
      },
      2:{
        qtext:"What should I do if uArm Studio failed to connect with uArm Swift Pro?",
        atext:`<ul><li>（1）Please<a class='linktext' target="_blank" href='${setting.DOWNLOAD_LINK.en}'> download </a>or update to the latest uArm Studio </li>
                  <li>（2）Click the question mark beside "Disconnected" </li><li>（3）Click “Troubleshooting”—“Suggestion” to check the suggestions</li>
                  <li>（4）If the suggestions don't help, click the "Ask Questions" button on the buttom of this page to report your problem.</li></ul>`
      },
      3:{
        qtext:"What is “firmware”? How to update firmware?",
        atext:`<ul><li>（1）Firmware is the "brain" of the uArm, which enables uArm to understand your commands when you control it via software or codes.</li><li>（2）Please enter "Setting" or "Check for Updates' to check the latest firmware version, release notes, and update firmware.</li></ul>`,
      },
      4:{
        qtext:"What should I do if firmware update failed halfway, or I flashed the wrong firmware?",
        atext:`<ul><li>Here are the steps to flash firmware manually:</li><br>（1）Download <a class='linktext' target="_blank" href="${flashToolLink}">"FlashTool"</a> and <a class='linktext' target="_blank" href="${firmwareLink}">Firmware .hex file</a><br>（2） Connect uArm Swift Pro to computer via USB. 
                    Note: Close uArm Studio while using the FlashTool<br>（3）Open FlashTool, and then drag the .hex file to the FlashTool. Once it’s done,
                    you could terminal the Flashtool and open uArm Studio to check if the firmware is the latest.</ul>`,
      },
      5:{
        qtext:"What should I do if uArm has a calibration problem/moves abnormally/skips steps?",
        atext:`<ul><li>（1）Please check the cable of the stepper and the motor, if it’s loose, replug it while the uArm is power off.</li>
                    <li>（2）Send the position below to uArm via Blockly, shoot a video while it’s moving and send to us via google driver or dropbox.
                    <br>&nbsp;&nbsp;Move to Position X 180 Y180 Z30<br>&nbsp;&nbsp;Move to Position X 180 Y-180 Z30<br>&nbsp;&nbsp;Move to Position X 250 Y0 Z150<br>&nbsp;&nbsp;Move to Position X 150 Y0 Z30</li>
                    <li>（3）Re-calibrate manually （We don't recommend frequent calibrations）Guide for re-calibration</li></ul>`,
      },
      6:{
        qtext:"As a developer, where can I find the resources?",
        atext:`<a class="linktext" target="_blank" href='${setting.DOWNLOAD_LINK.en}'>Developer Guide<a/> <a class="linktext" target="_blank" href="https://github.com/uArm-Developer">UFACTORY Github</a>`,
      },
      7:{
        qtext:"How to order extra accessories?",
        atext:`Please order accessories on our <a class="linktext" target="_blank" href='${setting.STORE_URL.en}'>online store</a>`,
      }
    },
    'swift':{
      1:{
        qtext:"What’s the precision of the uArm Swift? Dose it support laser engraving and 3D printing?",
        atext:`The precision of uArm Swift is 5mm, it does not support laser engraving or 3D printing.`,
      },
      2:{
        qtext:"Dose uArm Swift support gesture control? ",
        atext:`Yes, uArm Swift support gesture control via Leapmotion.`
      },
      3:{
        qtext:"What should I do if uArm Studio failed to connect with uArm Swift?",
        atext:`<ul><li>（1）Please <a class='linktext' target="_blank" href='${setting.DOWNLOAD_LINK.en}'>download</a> or update to the latest uArm Studio</li><li>（2）Click the question mark beside "Disconnected" </li>
                  <li>（3）Click “Troubleshooting”—“Suggestion” to check the suggestions</li><li>（4） If the suggestions don't help, click the "Ask Questions" button on the buttom of this page to report your problem.</li></ul>`,
      },
      4:{
        qtext:"What is “firmware”? How to update firmware?",
        atext:`<ul><li>（1）Firmware is the "brain" of the uArm, which enables uArm to understand your commands when you control it via software or codes.</li><li>（2）Please enter "Setting" or "Check for Updates' to check the latest firmware version, release notes, and update firmware.</li>
                </ul>`,
      },
      5:{
        qtext:"How to order extra accessories?",
        atext:`Please order accessories on our <a class="linktext" target="_blank" href='${setting.STORE_URL.en}'>online store</a>`,
      }
    },
    'metal':{
      1:{
        qtext:"What are the components of a standard uArm Metal package?",
        atext:"uArm Metal main body *1, uArm Metal Holders *4 (+ Screw *8), Pump *1 (+ Screw *2), AC power box *1, Power line *1, USB line *1, Suction head *1, Bottom chuck *4, Screwdriver *1"
      },
      2:{
        qtext:"What is the basic software environment needed for manipulating uArm Metal?",
        atext:"<ul><li>Download and install the uArm-assistant, the integration of the driver installation, firmware update and re-calibration.</li><li>Download and install the uClient client, automatic installatDion of the underlying environment Java.</li></ul>"
      },
      3:{
        qtext:"How to use uClient to control the uArm Metal?",
        atext:"<ul><li>through the uClient client control;</li><li>through the Python programming control;</li><li>through the Arduino programming control;</li><li>through the ROS platform control;</li></ul>"
      },
      4:{
        qtext:"How to maintain and protect the uArm Metal?",
        atext:"Please regularly clean up the dust on the main board; Please don’t let uArm pick up things that are heavier than its payload (500g); Please leave enough space for uArm to move; Please use the charger provided to power on your uArm. "
      },
      5:{
        qtext:"How to upgrade firmware?",
        atext:"Open uArm-assistant, select the corresponding port, click on the upgrade firmware."
      },
      6:{
        qtext:"Related software download links for further development of uArm:",
        btext:[
          `arduino IDE<br><a target='_blank' class='linktext' href='https://www.arduino.cc/en/Main/Software'>https://www.arduino.cc/en/Main/Software</a>`,
          `arduino API<br><a target='_blank' class='linktext' href='http://uarm-developer.github.io/UArmForArduino/index.html'>http://uarm-developer.github.io/UArmForArduino/index.html</a> `,
          `Python API<br><a target='_blank' class='linktext' href='http://pyuarm.readthedocs.io/en/latest/'>http://pyuarm.readthedocs.io/en/latest/</a> `,
          `Pyuarmdevelopment kit<br><a target='_blank' class='linktext' href='https://pypi.python.org/pypi/pyuarm'>https://pypi.python.org/pypi/pyuarm</a>`,
          `Communication protocol<br><a target='_blank' class='linktext' href='http://download.ufactory.cc/docs/en/uarm_gcode_communication_protocol_v1.0_en.pdf'>http://download.ufactory.cc/docs/en/uarm_gcode_communication_protocol_v1.0_en.pdf</a> `,
          `leap motion<br><a target='_blank' class='linktext' href='https://www.leapmotion.com/setup'>https://www.leapmotion.com/setup</a>`,
          `Arduino UNO introduction<br><a target='_blank' class='linktext' href='https://www.arduino.cc/en/Main/ArduinoBoardUno?setlang=cn'>https://www.arduino.cc/en/Main/ArduinoBoardUno?setlang=cn</a> `,
        ],
      },
      7:{
        qtext:"uArm Metal 3D structure or CAD drawings",
        btext:["<a target='_blank' class='linktext' href='https://grabcad.com/library/uarm-metal-1'>https://grabcad.com/library/uarm-metal-1</a>"]
      },
      8:{
        qtext:"How to use the uArm Metal Bluetooth module?",
        btext:["Please ensure that the firmware is upgraded to the latest version. Please connect Bluetooth module to the correct port of uArm board (according to the board specifications above 5th). While connected, the bluetooth module will flicker with blue lights. Please connect another Bluetooth module to your PC. If the two Bluetooth modules match successfully，the blue light is always on. Now you can start uClient to connect the uArm. Currently, the uArm Metal cannot be controlled via mobile phone with Bluetooth module. "]
      },
      9:{
        qtext:"How to calibrate uArm Metal？（I purchase the uArm after April 2016）",
        btext:[
          "If you purchase the uArm after April 2016, please DONNOT calibrate the uArm by yourself if not necessary. Frequent calibration may cause damage to uArm.",
          "If you have to calibrate, please follow the following steps: Open uArm-assistant, select the corresponding port, click on the re-calibration.",
        ],
      },
      10:{
        qtext:"The uArm Metal is purchased before 2016, Could be Upgraded into the latest framware?",
        btext:[
          "The latest firmware is not compatible with the previous uArm Metal, the user may not normally control the uArm after upgrade the latest firmware, If you have done，please refer to (9th: 'How to calibrate uArm Metal？'') to complete the calibration.",
          `If still with trouble, please click the "Ask Questions" button on the buttom of this page to report your problem.`,
        ]
      }
    }
  }
};

export default langText;
