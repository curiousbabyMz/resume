import dayjs from "dayjs";

// import "dayjs/locale/zh-cn";
// dayjs.locale("zh-cn");

export interface TimeRange {
  start: number;
  end: number;
}
export interface IconProps {
  code: string;
  size: number;
  color: string;
}
interface BaseInfo {
  name: string;
  photo: any;
  mobile: string;
  hobby: IconProps[];
  birthday: number;
  married: boolean;
  sex: string;
  email: string;
  wechat: string;
  education: Education[];
  selfAppraisal: string[];
  advantage: string[];
  technology: string[];
}
interface Education {
  time: TimeRange;
  qualification: string;
  subject: string;
  school: string;
}
interface Company {
  name: string;
  position: string;
  time: TimeRange;
  job: string;
}
interface Porject {
  name: string;
  description: string;
  technology: string[];
  job: string;
  contribution: string[];
}

const mobile = "18948180248";
export const baseInfo: BaseInfo = {
  name: "庄嘉敏",
  photo: require("./assets/pictures/avatar.jpg"),
  mobile,
  birthday: +dayjs("1992/02/04"),
  married: false,
  sex: "男",
  hobby: [
    { code: "icon-youxi", size: 20, color: "#515151" },
    { code: "icon-dianying", size: 35, color: "#515151" },
    { code: "icon-lanqiu1", size: 30, color: "#ea5555" },
    { code: "icon-zhuoqiu1", size: 30, color: "#515151" },
    { code: "icon-gangqinlaoshi-01", size: 30, color: "#fd6754" },
  ],
  email: "2047756046@qq.com",
  wechat: mobile,
  education: [
    {
      time: { start: +dayjs("2010/09"), end: +dayjs("2014/07") },
      qualification: "本科",
      subject: "生物工程",
      school: "广东石油化工学院",
    },
  ],
  advantage: [
    "工作经验丰富：7年工作经验，熟悉多种行业场景，熟练掌握前端主流技术框架",
    "掌握多种前端技术生态圈：历任公司的项目场景丰富，应用到了vue及react前端框架，两个框架的使用累积了很多经验；负责过微信小程序、公众号、微信开放平台接入，熟悉微信开放生态；负责过跨端需求，了解Uni-app、taro等框架；手写过canvas可视化类库，项目使用过echarts、Antv-x6等可视化框架，接入高德SDK、threejs实现3D展示以实现可视化需求，实现过可视化编辑模块；负责过对接硬件需求，了解android原生开发、kotlin语言及usb端口通讯协议对接",
    "业务能力：项目中基本承担核心业务开发、项目主导、公共抽象、性能优化、结构优化等工作。",
    "学习能力：多次承接公司的新型项目需求，对新技术框架进行预研，评估项目可行性，针对新技术框架协助调整产品实现，推动项目落地，并负责后期优化迭代",
    "架构能力：擅长业务分析及公共抽象，主张贯彻代码结构分层以及OOP编程原则，周期性复查业务代码，力求代码简洁、功能分明、原子化，使代码更富有可维护性、灵活性、健壮性",
  ],
  technology: [
    "掌握Vue、React两大web前端框架及相关生态,Vue+Vue-Router+Vuex,React+React-Router+Redux",
    "熟悉ES6+新特性，async/await、promise等异步编程",
    "熟悉Typescript及数据模型管理",
    "熟悉Git代码管理，Git-flow工作流",
    "熟悉webpack、babel、vite等前端工程化工具",
    "熟悉ElementUI、Ant-design、Boostrap等UI框架，熟悉flex-box布局",
    "熟悉echarts、Antv、threejs等可视化相关框架技术",
    "熟悉微信生态圈，小程序、公众号、微信登录授权及微信支付等",
    "熟悉高德地图服务、友盟超链服务、阿里云风控服务、数数科技数据统计服务、等第三方服务",
    "掌握Kotlin语言基础，协程应用，Android原生开发等技术",
    "深度参与过医美电商系统，订单管理、商家入驻管理、医生登记注册管理、商家端、消费者端等开发工作",
    "深度参与过IOT云平台，多端展示、大屏展示、实时监测数据可视化等开发工作",
    "独立负责软硬件通讯工具app开发工作",
    "深度参与过类discord社交社区平台开发工作，包括群聊、消息、帖子、话题、活动等核心IM功能，相关话题管理、帖子管理、热搜管理、权限管理等后台开发以及裂变活动全流程开发",
  ],
  selfAppraisal: [
    "本人兴趣广泛，对新鲜事物充满好奇，有探索精神，学习能力较好，通过自学熟悉掌握基础 web 前端技术；",
    "工作中善于协作沟通，总结研发工作的规范流程，习惯对代码做整理，抽象公共提高效益，常以项目需求作为驱动方向，自主研究新技术，并因此熟悉掌握；",
    "目前涉及到的技术框架主要有React、Vue框架，elementUI、antd UI组件库，webpack，微信小程序开发，Uni-app框架，微信开放生态、登录授权及支付，IOT云平台开发；canvas 帧动画、threejs3D渲染，Echarts、Antv-x6等可视化框架；Nodejs 应用；Kotlin-android应用。",
  ],
};

export const companys: Company[] = [
  {
    name: "安徽省刀锋网络科技有限公司（深圳分公司）",
    position: "前端开发工程师",
    time: { start: +dayjs("2022/04"), end: +dayjs("2023.2.16") },
    job: "主要负责 Web 端、移动端 H5、后台管理系统相关项目开发； 负责新技术及框架的预研与探索应用；负责项目研发流程及代码管理规范的制定和优化；功能基建和公共模块的抽象维护；业务数据结构(多端)规范的讨论、协作完善交互逻辑与设计； 负责项目前端代码的优化维护和迭代升级工作；",
  },
  {
    name: "清科优能（深圳）科技有限公司",
    position: "前端开发工程师",
    time: { start: +dayjs("2020/03"), end: +dayjs("2022/04") },
    job: " 小程序前端开发， PC-web 前端开发，安卓端应用开发，主要负责移动端相关项目开发； 负责新技术探索；参与讨论项目流程与交互逻辑设计； 配合后台完成接口调试； 负责项目前端代码的维护和迭代升级工作；",
  },
  {
    name: "深圳市医美咖网络科技有限公司",
    position: "前端开发工程师",
    time: { start: +dayjs("2019/02"), end: +dayjs("2020/03") },
    job: "对接产品，分析业务需求；设计程序整体结构、工具封装； 根据 UI 设计搭建前端页面； 对接后端接口，数据交换；实现业务逻辑、页面交互；协助管理后台页面开发、接口对接；",
  },
  {
    name: "深圳市眼界科技有限公司",
    position: "前端开发工程师",
    time: { start: +dayjs("2016/11"), end: +dayjs("2019/02") },
    job: "web 前端开发，小程序前端开发，主要负责小程序项目开发； 负责新技术探索；参与讨论项目流程设计与交互逻辑； 与设计师协作完成界面开发工作； 配合后台完成接口调试；负责项目前端代码的维护和迭代升级工作；",
  },
];

export const projects: Porject[] = [
  {
    name: "晴空号角-web",
    description:
      "该项目为 PC 端 Web 项目，是一款电竞游戏圈社交综合平台，主要面向各类电竞游戏的用户， 主要功能是一个聊天平台，以电竞圈子划分频道，频道内设有各个主题的房间，能进行群聊、发帖；并围绕游戏、游戏选手和赛事进行话题讨论、身份组和勋章发放、赛事竞猜、抽奖等活动；新版本增加了游戏百科模块， 聚合了目前全球各大游戏赛事、机构、队伍、选手等资料。",
    technology: [
      "AntV-x6",
      "Ant-design",
      "SASS",
      "TypeScript",
      "React",
      "webpack",
      "git flow",
    ],
    job: "负责项目搭建、功能开发、公共模块抽离、组件封装、协助整个项目的逻辑与交互设计，并负责后期维护，迭代升级工作。",
    contribution: [
      "完成项目搭建和主要的功能开发；",
      "对IM本地缓存的数据结构进行优化设计，并协助页面开发完成接入；提升加载速度，提升业务开发效率，减少迭代维护成本；",
      "封装公共函数对常用逻辑进行抽离，统一管理，减少维护成本；",
      "封装indexDB工具类；提升业务开发效率；",
      "封装高阶组件(HOC)，对常用形态的容器组件、UI组件业务逻辑做分层处理；提升业务开发效率；",
      "完成技术预研，接入Antv-x6，封装组件；实现同步赛程数据展示",
    ],
  },
  {
    name: "晴空号角-H5",
    description:
      "该项目为H5项目，集中了所有移动端围绕赛事竞猜、抽奖等活动的页面；包括普通浏览器、微信网页、app内嵌webview等业务场景以及相关的引导页面。",
    technology: [
      "AntV-x6",
      "Ant-design",
      "SASS",
      "TypeScript",
      "React",
      "webpack",
      "git flow",
    ],
    job: "负责项目搭建、功能开发、公共模块抽离、组件封装、协助整个项目的逻辑与交互设计，并负责后期维护，迭代升级工作。",
    contribution: [
      "完成项目搭建和主要的功能开发；",
      "设计Js-Bridge的数据结构和方法暴露，并协助页面开发完成接入；提升业务开发效率，减少迭代维护成本；",
      "封装公共函数对常用逻辑进行抽离，统一管理，减少维护成本；",
      "封装高阶组件(HOC)，对常用形态的容器组件、UI组件业务逻辑做分层处理；提升业务开发效率；",
      "接入微信公众平台SDK，封装组件；实现微信唤起客户端及微信分享功能；",
      "完成技术预研，接入Antv-x6，封装组件；实现同步赛程数据展示",
      "完成技术预研，接入友盟U-Link SDK，封装组件；打通整个裂变分享链路；",
    ],
  },

  {
    name: "晴空号角-web后台",
    description:
      "晴空号角后台管理系统包含社区频道、聊天房间的权限管理；用户基础信息、身份组、勋章管理；活动、开屏页、搜索关联、热搜词配置；系统消息、互动消息、活动消息推送管理；后台管理权限配置；帖子管理模块；赛事百科模块；赛事晋级图编辑模块；",
    technology: [
      "AntV-x6",
      "ElementUI",
      "SASS",
      "JavaScript",
      "Vuejs",
      "webpack",
      "git flow",
    ],
    job: "负责晋级图编辑功能的技术预研及开发维护；负责其余模块的前端开发、接口对接，和后期维护升级工作。",
    contribution: [
      "完成主要的功能开发；",
      "封装公共函数对常用逻辑进行抽离，统一管理，减少维护成本；",
      "封装高阶组件(HOC)，对常用形态的容器组件、UI组件业务逻辑做分层处理；提升业务开发效率；",
      "完成技术预研，接入Antv-x6，研究攻克可视化编辑功能、数据转换清洗及同步问题，对编辑和可视化进行分层封装；实现同步赛程数据的编辑和展示",
    ],
  },
  {
    name: "智电U-web",
    description:
      "该项目为 PC 端 Web 项目，是一款包含数据分析及用电管理的数据平台，主要面向工程类企业用户， 主要功能是客户电力系统的物理指标及费用统计概览，含有异常报警记录及推送功能，并根据各项指标计算出客户系统的安全指数，内含对尖峰平谷各个阶段用电量及电费的分析，以及系统的温度等各项指标的历史值， 也包括分析建议和安全知识普及。",
    technology: [
      "ECharts",
      "Three.js",
      "LESS",
      "JavaScript",
      "React",
      "webpack",
      "git",
    ],
    job: "参与项目前端开发、模块组件封装、对接后端接口，参与讨论整个项目的设计与交互，并负责相关模块的后期维护，迭代升级工作。",
    contribution: [
      "完成主要功能开发",
      "封装工具，提高开发效率",
      "Echart复杂图表实现",
      "ThreeJS 3D模型实现",
      "高德SDK接入",
      "微信登录SDK接入",
    ],
  },
  {
    name: "智电U-微信小程序",
    description:
      "该项目为微信小程序项目，是一款包含数据分析及用电管理的数据平台，主要面向工程类企业用户， 主要功能是客户电力系统的物理指标及费用统计概览，含有漏电报警记录及推送功能，并根据各项指标计算出客户系统的安全指数、健康指数、碳排指数和经济指数，内含对尖峰平谷各个阶段用电量及电费的分析，以及系统在过去一段时间的电参数、监控和电能质量等各项指标的历史值，也包括分析建议和安全知识普及。",
    technology: [
      "微信开发者工具",
      "ECharts",
      "HbuilderX",
      "Uni-app",
      "Less",
      "JavaScript",
      "git",
    ],
    job: "独立负责项目搭建、前端开发、工具封装、对接后端接口，参与讨论整个项目的设计与交互，并负责项目的后期维护，迭代升级工作。",
    contribution: [
      "独立完成功能开发",
      "Uni-app框架预研",
      "原生库迁移并丰富组件库，提高开发效率",
      "微信无感登录",
      "Echart复杂图表实现",
    ],
  },
  {
    name: "ulock-AndroidApp",
    description:
      "该项目为微信小程序项目，是一款工程现场辅助类工具，主要公司代理及内部工程部门使用，方便工程项目中智能锁的管理，由后台统一管理用户权限，通过手机 APP  进行鉴权和开锁操作，方便应对工程部门一对多的项目管理。",
    technology: ["IntelliJ", "Kotlin", "XML", "端口通讯", "gradle", "git"],
    job: "独立负责项目搭建、界面开发、通讯协议工具封装、对接后端接口，参与讨论整个项目的设计与交互，并负责项目的后期维护，迭代升级工作。",
    contribution: [
      "独立完成功能开发",
      "学习Kotlin语言及Android原生相关基础知识",
      "完成预研，实现原生基础页面功能、端口通讯功能",
      "完成硬件端口通讯协议对接",
    ],
  },
  {
    name: "安电U-微信小程序",
    description:
      "该项目为微信小程序项目，是一款包含数据分析及用电管理的数据平台，主要面向工程类企业用户， 主要功能是客户电力系统的物理指标及费用统计概览，含有漏电报警记录及推送功能，并根据各项指标计算出客户系统的安全指数，内含对尖峰平谷各个阶段用电量及电费的分析，以及系统在过去一段时间的温度等各项指标的历史值，也包括分析建议和安全知识普及。",
    technology: [
      "微信开发者工具",
      "ECharts",
      "WXML",
      "WXSS",
      "JavaScript",
      "git",
    ],
    job: "独立负责项目搭建、前端开发、工具封装、对接后端接口，参与讨论整个项目的设计与交互，并负责项目的后期维护，迭代升级工作。",
    contribution: [
      "独立完成功能开发",
      "使用微信小程序原生封装通用组件库，提高开发效率",
      "微信无感登录",
      "Echart复杂图表实现",
    ],
  },
  {
    name: "智维U-Web",
    description:
      "该项目为 PC 端 Web 项目，是一款公司的内部运维管理平台，主要面向内部运维人员，主要功能是展示运维报警信息，工单创建、处理流转和工单管理，运维数据查询，管理和展示设备详细信息及安装单详细 信息等",
    technology: [
      "VScode",
      "ECharts",
      "LESS",
      "JavaScript",
      "React",
      "webpack",
      "git",
    ],
    job: "参与项目前端开发、模块组件封装、对接后端接口，参与讨论整个项目的设计与交互，并负责相关模块的后期维护，迭代升级工作",
    contribution: ["完成主要功能开发", "微信登录SDK接入"],
  },
  {
    name: "优加云",
    description:
      "该项目为 PC 端 Web 项目，是一款公司的产品门户平台，主要面向所有用户，主要功能是根据客户的购买产品和权限情况展示相关应用产品，并让客户能在一处登录即可无缝跨越所有产品，内含个人的信息展 示和详细信息的设置。",
    technology: [
      "VScode",
      "LESS",
      "JavaScript",
      "React",
      "webpack",
      "git",
      "单点登录",
    ],
    job: "独立负责项目前端开发、模块组件封装、对接后端接口、对接跳转其他项目产品，参与讨论整个项目的设计与交互，并负责相关模块的后期维护，迭代升级工作",
    contribution: ["独立完成功能开发", "单点登录", "微信登录SDK接入"],
  },
  {
    name: "医美咖微信小程序",
    description:
      "该项目为微信小程序项目，是一款医美项目电商平台，主要功能为展示平台合作伙伴的医疗机构信息，机构的师资力量以及对应上架中的项目信息，可在小程序中购买项目、机构地址导航、分享项目及机构/医生、查询个人订单、收藏、联系客服以及使用消费码消费。",
    technology: [
      "微信开发者工具",
      "WXML",
      "WXSS",
      "JavaScript",
      "SVN",
      "canvas",
      "less",
    ],
    job: "独立负责项目搭建、前端开发、工具封装、对接后端接口，参与讨论整个项目的设计与交互，并负 责项目的后期维护，迭代升级工作。",
    contribution: [
      "独立完成功能开发",
      "使用微信小程序原生封装项目组件库，提高开发效率",
      "微信支付",
      "微信无感登录",
      "模块分包加载",
    ],
  },
];
