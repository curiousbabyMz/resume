(self["webpackChunkresume"] = self["webpackChunkresume"] || []).push([[179],{

/***/ 830:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/duration.js
var duration = __webpack_require__(646);
var duration_default = /*#__PURE__*/__webpack_require__.n(duration);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/Com/Icon/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Icon = ({});
;// CONCATENATED MODULE: ./src/Com/Icon/index.tsx



// import px2rem from "postcss-plugin-px2rem";
const Icon_Icon = _ref => {
  let {
    src = "",
    code = "#000000",
    size = 10,
    color = "",
    ...props
  } = _ref;
  // size = px2rem({ remUnit: 10 });
  return /*#__PURE__*/react.createElement(react.Fragment, null, src && /*#__PURE__*/react.createElement("img", _extends({}, props, {
    src: src,
    className: Icon.icon,
    alt: ""
  })), code && /*#__PURE__*/react.createElement("span", {
    className: `iconfont ${code} ${Icon.icon}`,
    style: {
      fontSize: `${size}px`,
      color,
      lineHeight: `${size}px`,
      zIndex: 1,
      position: "relative",
      ...props.style
    }
  }));
};
/* harmony default export */ var Com_Icon = (Icon_Icon);
;// CONCATENATED MODULE: ./src/myData.tsx




// import "dayjs/locale/zh-cn";
// dayjs.locale("zh-cn");

const mobile = "18948180248";
const baseInfo = {
  name: "庄嘉敏",
  photo: __webpack_require__(82),
  mobile,
  birthday: +dayjs_min_default()("1992/02/04"),
  married: false,
  sex: "男",
  hobby: [/*#__PURE__*/react.createElement(Com_Icon, {
    code: "icon-youxi",
    size: 20,
    color: "#515151"
  }), /*#__PURE__*/react.createElement(Com_Icon, {
    code: "icon-dianying",
    size: 35,
    color: "#515151"
  }), /*#__PURE__*/react.createElement(Com_Icon, {
    code: "icon-lanqiu1",
    size: 30,
    color: "#ea5555"
  }), /*#__PURE__*/react.createElement(Com_Icon, {
    code: "icon-zhuoqiu1",
    size: 30,
    color: "#515151"
  }), /*#__PURE__*/react.createElement(Com_Icon, {
    code: "icon-gangqinlaoshi-01",
    size: 30,
    color: "#fd6754"
  })],
  email: "2047756046@qq.com",
  wechat: mobile,
  education: [{
    time: {
      start: +dayjs_min_default()("2010/09"),
      end: +dayjs_min_default()("2014/07")
    },
    qualification: "本科",
    subject: "生物工程",
    school: "广东石油化工学院"
  }],
  advantage: ["工作经验丰富：7年工作经验，熟悉多种行业场景，熟练掌握前端主流技术框架", "掌握多种前端技术生态圈：历任公司的项目场景丰富，应用到了vue及react前端框架，两个框架的使用累积了很多经验；负责过微信小程序、公众号、微信开放平台接入，熟悉微信开放生态；负责过跨端需求，了解Uni-app、taro等框架；手写过canvas可视化类库，项目使用过echarts、Antv-x6等可视化框架，接入高德SDK、threejs实现3D展示以实现可视化需求，实现过可视化编辑模块；负责过对接硬件需求，了解android原生开发、kotlin语言及usb端口通讯协议对接", "业务能力：项目中基本承担核心业务开发、项目主导、公共抽象、性能优化、结构优化等工作。", "学习能力：多次承接公司的新型项目需求，对新技术框架进行预研，评估项目可行性，针对新技术框架协助调整产品实现，推动项目落地，并负责后期优化迭代", "架构能力：擅长业务分析及公共抽象，主张贯彻代码结构分层以及OOP编程原则，周期性复查业务代码，力求代码简洁、功能分明、原子化，使代码更富有可维护性、灵活性、健壮性"],
  technology: ["掌握vue、react两大web前端框架及路由管理、状态管理等相关生态", "熟悉ES6+新特性，async/await、promise等异步编程", "熟悉Typescript及数据模型管理", "熟悉Git代码管理，Git-flow工作流", "熟悉webpack、babel、vite等前端工程化工具", "熟悉ElementUI、Ant-design、Boostrap等UI框架，熟悉flex-box布局", "熟悉echarts、Antv、threejs等可视化相关框架技术", "熟悉微信生态圈，小程序、公众号、微信登录授权及微信支付等", "熟悉高德地图服务、友盟超链服务、阿里云风控服务、数数科技数据统计服务、等第三方服务", "掌握Kotlin语言基础，协程应用，Android原生开发等技术", "深度参与过医美电商系统，订单管理、商家入驻管理、医生登记注册管理、商家端、消费者端等开发工作", "深度参与过IOT云平台，多端展示、大屏展示、实时监测数据可视化等开发工作", "独立负责软硬件通讯工具app开发工作", "深度参与过类discord社交社区平台开发工作，包括群聊、消息、帖子、话题、活动等核心IM功能，相关话题管理、帖子管理、热搜管理、权限管理等后台开发以及裂变活动全流程开发"],
  selfAppraisal: ["本人兴趣广泛，对新鲜事物充满好奇，有探索精神，学习能力较好，通过自学熟悉掌握基础 web 前端技术；", "工作中善于协作沟通，总结研发工作的规范流程，习惯对代码做整理，抽象公共提高效益，常以项目需求作为驱动方向，自主研究新技术，并因此熟悉掌握；", "目前涉及到的技术框架主要有React、Vue框架，elementUI、antd UI组件库，webpack，微信小程序开发，Uni-app框架，微信开放生态、登录授权及支付，IOT云平台开发；canvas 帧动画、threejs3D渲染，Echarts、Antv-x6等可视化框架；Nodejs 应用；Kotlin-android应用。"]
};
const companys = [{
  name: "安徽省刀锋网络科技有限公司（深圳分公司）",
  position: "前端开发工程师",
  time: {
    start: +dayjs_min_default()("2022/04"),
    end: +dayjs_min_default()("2023.2.16")
  },
  job: "主要负责 Web 端、移动端 H5、后台管理系统相关项目开发； 负责新技术及框架的预研与探索应用；负责项目研发流程及代码管理规范的制定和优化；功能基建和公共模块的抽象维护；业务数据结构(多端)规范的讨论、协作完善交互逻辑与设计； 负责项目前端代码的优化维护和迭代升级工作；"
}, {
  name: "清科优能（深圳）科技有限公司",
  position: "前端开发工程师",
  time: {
    start: +dayjs_min_default()("2020/03"),
    end: +dayjs_min_default()("2022/04")
  },
  job: " 小程序前端开发， PC-web 前端开发，安卓端应用开发，主要负责移动端相关项目开发； 负责新技术探索；参与讨论项目流程与交互逻辑设计； 配合后台完成接口调试； 负责项目前端代码的维护和迭代升级工作；"
}, {
  name: "深圳市医美咖网络科技有限公司",
  position: "前端开发工程师",
  time: {
    start: +dayjs_min_default()("2019/02"),
    end: +dayjs_min_default()("2020/03")
  },
  job: "对接产品，分析业务需求；设计程序整体结构、工具封装； 根据 UI 设计搭建前端页面； 对接后端接口，数据交换；实现业务逻辑、页面交互；协助管理后台页面开发、接口对接；"
}, {
  name: "深圳市眼界科技有限公司",
  position: "前端开发工程师",
  time: {
    start: +dayjs_min_default()("2016/11"),
    end: +dayjs_min_default()("2019/02")
  },
  job: "web 前端开发，小程序前端开发，主要负责小程序项目开发； 负责新技术探索；参与讨论项目流程设计与交互逻辑； 与设计师协作完成界面开发工作； 配合后台完成接口调试；负责项目前端代码的维护和迭代升级工作；"
}];
const projects = [{
  name: "晴空号角-web",
  description: "该项目为 PC 端 Web 项目，是一款电竞游戏圈社交综合平台，主要面向各类电竞游戏的用户， 主要功能是一个聊天平台，以电竞圈子划分频道，频道内设有各个主题的房间，能进行群聊、发帖；并围绕游戏、游戏选手和赛事进行话题讨论、身份组和勋章发放、赛事竞猜、抽奖等活动；新版本增加了游戏百科模块， 聚合了目前全球各大游戏赛事、机构、队伍、选手等资料。",
  technology: ["AntV-x6", "Ant-design", "SASS", "TypeScript", "React", "webpack", "git flow"],
  job: "负责项目搭建、功能开发、公共模块抽离、组件封装、协助整个项目的逻辑与交互设计，并负责后期维护，迭代升级工作。",
  contribution: ["完成项目搭建和主要的功能开发；", "对IM本地缓存的数据结构进行优化设计，并协助页面开发完成接入；提升加载速度，提升业务开发效率，减少迭代维护成本；", "封装公共函数对常用逻辑进行抽离，统一管理，减少维护成本；", "封装indexDB工具类；提升业务开发效率；", "封装高阶组件(HOC)，对常用形态的容器组件、UI组件业务逻辑做分层处理；提升业务开发效率；", "完成技术预研，接入Antv-x6，封装组件；实现同步赛程数据展示"]
}, {
  name: "晴空号角-H5",
  description: "该项目为H5项目，集中了所有移动端围绕赛事竞猜、抽奖等活动的页面；包括普通浏览器、微信网页、app内嵌webview等业务场景以及相关的引导页面。",
  technology: ["AntV-x6", "Ant-design", "SASS", "TypeScript", "React", "webpack", "git flow"],
  job: "负责项目搭建、功能开发、公共模块抽离、组件封装、协助整个项目的逻辑与交互设计，并负责后期维护，迭代升级工作。",
  contribution: ["完成项目搭建和主要的功能开发；", "设计Js-Bridge的数据结构和方法暴露，并协助页面开发完成接入；提升业务开发效率，减少迭代维护成本；", "封装公共函数对常用逻辑进行抽离，统一管理，减少维护成本；", "封装高阶组件(HOC)，对常用形态的容器组件、UI组件业务逻辑做分层处理；提升业务开发效率；", "接入微信公众平台SDK，封装组件；实现微信唤起客户端及微信分享功能；", "完成技术预研，接入Antv-x6，封装组件；实现同步赛程数据展示", "完成技术预研，接入友盟U-Link SDK，封装组件；打通整个裂变分享链路；"]
}, {
  name: "晴空号角-web后台",
  description: "晴空号角后台管理系统包含社区频道、聊天房间的权限管理；用户基础信息、身份组、勋章管理；活动、开屏页、搜索关联、热搜词配置；系统消息、互动消息、活动消息推送管理；后台管理权限配置；帖子管理模块；赛事百科模块；赛事晋级图编辑模块；",
  technology: ["AntV-x6", "ElementUI", "SASS", "JavaScript", "Vuejs", "webpack", "git flow"],
  job: "负责晋级图编辑功能的技术预研及开发维护；负责其余模块的前端开发、接口对接，和后期维护升级工作。",
  contribution: ["完成主要的功能开发；", "封装公共函数对常用逻辑进行抽离，统一管理，减少维护成本；", "封装高阶组件(HOC)，对常用形态的容器组件、UI组件业务逻辑做分层处理；提升业务开发效率；", "完成技术预研，接入Antv-x6，研究攻克可视化编辑功能、数据转换清洗及同步问题，对编辑和可视化进行分层封装；实现同步赛程数据的编辑和展示"]
}, {
  name: "智电U-web",
  description: "该项目为 PC 端 Web 项目，是一款包含数据分析及用电管理的数据平台，主要面向工程类企业用户， 主要功能是客户电力系统的物理指标及费用统计概览，含有异常报警记录及推送功能，并根据各项指标计算出客户系统的安全指数，内含对尖峰平谷各个阶段用电量及电费的分析，以及系统的温度等各项指标的历史值， 也包括分析建议和安全知识普及。",
  technology: ["ECharts", "Three.js", "LESS", "JavaScript", "React", "webpack", "git"],
  job: "参与项目前端开发、模块组件封装、对接后端接口，参与讨论整个项目的设计与交互，并负责相关模块的后期维护，迭代升级工作。",
  contribution: ["完成主要功能开发", "封装工具，提高开发效率", "Echart复杂图表实现", "ThreeJS 3D模型实现", "高德SDK接入", "微信登录SDK接入"]
}, {
  name: "智电U-微信小程序",
  description: "该项目为微信小程序项目，是一款包含数据分析及用电管理的数据平台，主要面向工程类企业用户， 主要功能是客户电力系统的物理指标及费用统计概览，含有漏电报警记录及推送功能，并根据各项指标计算出客户系统的安全指数、健康指数、碳排指数和经济指数，内含对尖峰平谷各个阶段用电量及电费的分析，以及系统在过去一段时间的电参数、监控和电能质量等各项指标的历史值，也包括分析建议和安全知识普及。",
  technology: ["微信开发者工具", "ECharts", "HbuilderX", "Uni-app", "Less", "JavaScript", "git"],
  job: "独立负责项目搭建、前端开发、工具封装、对接后端接口，参与讨论整个项目的设计与交互，并负责项目的后期维护，迭代升级工作。",
  contribution: ["独立完成功能开发", "Uni-app框架预研", "原生库迁移并丰富组件库，提高开发效率", "微信无感登录", "Echart复杂图表实现"]
}, {
  name: "ulock-AndroidApp",
  description: "该项目为微信小程序项目，是一款工程现场辅助类工具，主要公司代理及内部工程部门使用，方便工程项目中智能锁的管理，由后台统一管理用户权限，通过手机 APP  进行鉴权和开锁操作，方便应对工程部门一对多的项目管理。",
  technology: ["IntelliJ", "Kotlin", "XML", "端口通讯", "gradle", "git"],
  job: "独立负责项目搭建、界面开发、通讯协议工具封装、对接后端接口，参与讨论整个项目的设计与交互，并负责项目的后期维护，迭代升级工作。",
  contribution: ["独立完成功能开发", "学习Kotlin语言及Android原生相关基础知识", "完成预研，实现原生基础页面功能、端口通讯功能", "完成硬件端口通讯协议对接"]
}, {
  name: "安电U-微信小程序",
  description: "该项目为微信小程序项目，是一款包含数据分析及用电管理的数据平台，主要面向工程类企业用户， 主要功能是客户电力系统的物理指标及费用统计概览，含有漏电报警记录及推送功能，并根据各项指标计算出客户系统的安全指数，内含对尖峰平谷各个阶段用电量及电费的分析，以及系统在过去一段时间的温度等各项指标的历史值，也包括分析建议和安全知识普及。",
  technology: ["微信开发者工具", "ECharts", "WXML", "WXSS", "JavaScript", "git"],
  job: "独立负责项目搭建、前端开发、工具封装、对接后端接口，参与讨论整个项目的设计与交互，并负责项目的后期维护，迭代升级工作。",
  contribution: ["独立完成功能开发", "使用微信小程序原生封装通用组件库，提高开发效率", "微信无感登录", "Echart复杂图表实现"]
}, {
  name: "智维U-Web",
  description: "该项目为 PC 端 Web 项目，是一款公司的内部运维管理平台，主要面向内部运维人员，主要功能是展示运维报警信息，工单创建、处理流转和工单管理，运维数据查询，管理和展示设备详细信息及安装单详细 信息等",
  technology: ["VScode", "ECharts", "LESS", "JavaScript", "React", "webpack", "git"],
  job: "参与项目前端开发、模块组件封装、对接后端接口，参与讨论整个项目的设计与交互，并负责相关模块的后期维护，迭代升级工作",
  contribution: ["完成主要功能开发", "微信登录SDK接入"]
}, {
  name: "优加云",
  description: "该项目为 PC 端 Web 项目，是一款公司的产品门户平台，主要面向所有用户，主要功能是根据客户的购买产品和权限情况展示相关应用产品，并让客户能在一处登录即可无缝跨越所有产品，内含个人的信息展 示和详细信息的设置。",
  technology: ["VScode", "LESS", "JavaScript", "React", "webpack", "git", "单点登录"],
  job: "独立负责项目前端开发、模块组件封装、对接后端接口、对接跳转其他项目产品，参与讨论整个项目的设计与交互，并负责相关模块的后期维护，迭代升级工作",
  contribution: ["独立完成功能开发", "单点登录", "微信登录SDK接入"]
}, {
  name: "医美咖微信小程序",
  description: "该项目为微信小程序项目，是一款医美项目电商平台，主要功能为展示平台合作伙伴的医疗机构信息，机构的师资力量以及对应上架中的项目信息，可在小程序中购买项目、机构地址导航、分享项目及机构/医生、查询个人订单、收藏、联系客服以及使用消费码消费。",
  technology: ["微信开发者工具", "WXML", "WXSS", "JavaScript", "SVN", "canvas", "less"],
  job: "独立负责项目搭建、前端开发、工具封装、对接后端接口，参与讨论整个项目的设计与交互，并负 责项目的后期维护，迭代升级工作。",
  contribution: ["独立完成功能开发", "使用微信小程序原生封装项目组件库，提高开发效率", "微信支付", "微信无感登录", "模块分包加载"]
}];
;// CONCATENATED MODULE: ./src/Com/DetailTitle/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var DetailTitle = ({"detail_title":"detail_title-c108b64f","icon":"icon-b618293b","title":"title-dbb48b67"});
;// CONCATENATED MODULE: ./src/Com/DetailTitle/index.tsx



const DetailTitle_DetailTitle = _ref => {
  let {
    code,
    title = "",
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: DetailTitle.detail_title
  }, /*#__PURE__*/react.createElement("div", {
    className: DetailTitle.icon
  }, /*#__PURE__*/react.createElement(Com_Icon, {
    code: code,
    size: 30,
    color: "#fff"
  })), /*#__PURE__*/react.createElement("span", {
    className: DetailTitle.title
  }, title));
};
/* harmony default export */ var Com_DetailTitle = (DetailTitle_DetailTitle);
;// CONCATENATED MODULE: ./src/Com/Resume/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Resume = ({"resume":"resume-bcf11cb9","header":"header-cd1bdec1","banner":"banner-ce9038dd","title":"title-d9008ddc","cn":"cn-eea69131","split":"split-a603eac8","en":"en-d43b6d99","info":"info-ff7ca5f7","avatar":"avatar-e83b3c13","base_info":"base_info-e5e245b0","name":"name-b2e70db4","base_info_items":"base_info_items-fdc64308","base_info_item":"base_info_item-c97a0652","content":"content-ff7d2967","hobbys":"hobbys-ed9c7225","hobbys_label":"hobbys_label-c83520cd","hobby":"hobby-d95233c0","detail":"detail-d5fac9dc","edu":"edu-ac1bdadb","item":"item-f3aaa162","school":"school-c9cf4635","qualification":"qualification-c6a3f2f9","advantage":"advantage-bbbfebe8","technology":"technology-b9c4cfbe","companys":"companys-bfeca9e3","top":"top-fab13dac","position":"position-f1e7c847","job":"job-eeae038e","projects":"projects-b95c520c","description":"description-b77910f6","contribution":"contribution-be26df47","label":"label-f75c3484","self_appraisal":"self_appraisal-a990d80b"});
;// CONCATENATED MODULE: ./src/Com/Resume/index.tsx







dayjs_min_default().extend((duration_default()));
const Time = _ref => {
  let {
    time: {
      start,
      end
    },
    className
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, dayjs_min_default()(start).format("YYYY.MM"), " -", " ", dayjs_min_default()().format("YYYY.MM.DD HH:MM") === dayjs_min_default()(end).format("YYYY.MM.DD HH:MM") ? "至今" : dayjs_min_default()(end).format("YYYY.MM"));
};
const Resume_Resume = () => {
  const {
    photo,
    hobby,
    name,
    mobile,
    email,
    wechat,
    sex,
    selfAppraisal,
    married,
    birthday
  } = baseInfo;
  const baseInfolist = [{
    icon: "icon-nansheng",
    iconSize: 16,
    content: sex
  }, {
    icon: "icon-nianling",
    iconSize: 16,
    content: `${dayjs_min_default().duration(dayjs_min_default()().diff(dayjs_min_default()(birthday))).years()}岁`
  }, {
    icon: "icon-hunyinjiashi",
    iconSize: 16,
    content: married ? "已婚" : "未婚"
  }, {
    icon: "icon-dianhua",
    iconSize: 24,
    content: mobile
  }, {
    icon: "icon-weixin",
    iconSize: 24,
    content: wechat
  }, {
    icon: "icon-youxiang",
    iconSize: 24,
    content: email
  }];

  // const [isPrint, setIsPrint] = useState(true);
  (0,react.useEffect)(() => {
    // console.log("call \"isPrint(flag:Boolean)\" see more");
    // window["isPrint"] = (flag) => {
    //   setIsPrint(flag);
    // };
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: Resume.resume
  }, /*#__PURE__*/react.createElement("div", {
    className: Resume.header
  }, /*#__PURE__*/react.createElement("img", {
    className: Resume.banner,
    src: __webpack_require__(185)
  }), /*#__PURE__*/react.createElement("div", {
    className: Resume.title
  }, /*#__PURE__*/react.createElement("div", {
    className: Resume.cn
  }, "个人简历".split("").map((each, index) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: each
  }, index !== 0 && /*#__PURE__*/react.createElement("div", {
    className: Resume.split
  }), /*#__PURE__*/react.createElement("span", null, each)))), /*#__PURE__*/react.createElement("div", {
    className: Resume.en
  }, "PERSONAL RESUME"))), /*#__PURE__*/react.createElement("div", {
    className: Resume.info
  }, /*#__PURE__*/react.createElement("img", {
    className: Resume.avatar,
    src: photo
  }), /*#__PURE__*/react.createElement("div", {
    className: Resume.base_info
  }, /*#__PURE__*/react.createElement("div", {
    className: Resume.name
  }, name), /*#__PURE__*/react.createElement("div", {
    className: Resume.base_info_items
  }, baseInfolist.map((_ref2, index) => {
    let {
      icon,
      iconSize,
      content
    } = _ref2;
    return /*#__PURE__*/react.createElement("div", {
      className: Resume.base_info_item,
      key: index
    }, /*#__PURE__*/react.createElement(Com_Icon, {
      code: icon,
      color: "#000000",
      size: iconSize
    }), ":", /*#__PURE__*/react.createElement("span", {
      className: Resume.content
    }, content));
  })), /*#__PURE__*/react.createElement("div", {
    className: `${Resume.hobbys}`
  }, /*#__PURE__*/react.createElement("div", {
    className: Resume.hobbys_label
  }, /*#__PURE__*/react.createElement(Com_Icon, {
    code: "icon-aihao",
    color: "#da5353",
    size: 24
  }), "\uFF1A"), hobby.map((each, index) => /*#__PURE__*/react.createElement("div", {
    className: Resume.hobby,
    key: index
  }, each))))), /*#__PURE__*/react.createElement("div", {
    className: Resume.detail
  }, /*#__PURE__*/react.createElement(Com_DetailTitle, {
    code: "icon-jiaoyubeijing",
    title: "\u6559\u80B2\u7ECF\u5386"
  }), /*#__PURE__*/react.createElement("div", {
    className: Resume.edu
  }, baseInfo.education.map(_ref3 => {
    let {
      time,
      school,
      qualification
    } = _ref3;
    return /*#__PURE__*/react.createElement("div", {
      className: Resume.item,
      key: school
    }, /*#__PURE__*/react.createElement("div", {
      className: Resume.school
    }, school), /*#__PURE__*/react.createElement("div", {
      className: Resume.qualification
    }, qualification), /*#__PURE__*/react.createElement(Time, {
      className: Resume.time,
      time: time
    }));
  }))), /*#__PURE__*/react.createElement("div", {
    className: Resume.detail
  }, /*#__PURE__*/react.createElement(Com_DetailTitle, {
    code: "icon-ruanjianjineng",
    title: "\u4E2A\u4EBA\u6280\u80FD"
  }), /*#__PURE__*/react.createElement("div", {
    className: Resume.technology
  }, baseInfo.technology.map(each => /*#__PURE__*/react.createElement("div", {
    className: Resume.content
  }, each)))), /*#__PURE__*/react.createElement("div", {
    className: Resume.detail
  }, /*#__PURE__*/react.createElement(Com_DetailTitle, {
    code: "icon-jiangli",
    title: "\u4E2A\u4EBA\u4F18\u52BF"
  }), /*#__PURE__*/react.createElement("div", {
    className: Resume.advantage
  }, baseInfo.advantage.map(each => /*#__PURE__*/react.createElement("div", {
    className: Resume.content
  }, each)))), /*#__PURE__*/react.createElement("div", {
    className: Resume.detail
  }, /*#__PURE__*/react.createElement(Com_DetailTitle, {
    code: "icon-gongzuojingyan",
    title: "\u5DE5\u4F5C\u7ECF\u5386"
  }), /*#__PURE__*/react.createElement("div", {
    className: Resume.companys
  }, companys.map(_ref4 => {
    let {
      name,
      job,
      position,
      time
    } = _ref4;
    return /*#__PURE__*/react.createElement("div", {
      className: Resume.item,
      key: name
    }, /*#__PURE__*/react.createElement("div", {
      className: Resume.top
    }, /*#__PURE__*/react.createElement("div", {
      className: Resume.name
    }, name), /*#__PURE__*/react.createElement(Time, {
      className: Resume.time,
      time: time
    })), /*#__PURE__*/react.createElement("div", {
      className: Resume.position
    }, position), /*#__PURE__*/react.createElement("div", {
      className: Resume.job
    }, job));
  }))), /*#__PURE__*/react.createElement("div", {
    className: Resume.detail
  }, /*#__PURE__*/react.createElement(Com_DetailTitle, {
    code: "icon-xiangmujingyan",
    title: "\u9879\u76EE\u7ECF\u5386"
  }), /*#__PURE__*/react.createElement("div", {
    className: Resume.projects
  }, projects.map(_ref5 => {
    let {
      name,
      job,
      technology,
      description,
      contribution
    } = _ref5;
    return /*#__PURE__*/react.createElement("div", {
      className: Resume.item,
      key: name
    }, /*#__PURE__*/react.createElement("div", {
      className: Resume.top
    }, /*#__PURE__*/react.createElement("div", {
      className: Resume.name
    }, name)), /*#__PURE__*/react.createElement("div", {
      className: Resume.technology
    }, technology.map(each => /*#__PURE__*/react.createElement("div", {
      className: Resume.item,
      key: each
    }, each))), /*#__PURE__*/react.createElement("div", {
      className: Resume.description
    }, /*#__PURE__*/react.createElement("div", {
      className: Resume.label
    }, "\u9879\u76EE\u7B80\u4ECB\uFF1A"), /*#__PURE__*/react.createElement("div", {
      className: Resume.content
    }, " ", description)), /*#__PURE__*/react.createElement("div", {
      className: Resume.job
    }, /*#__PURE__*/react.createElement("div", {
      className: Resume.label
    }, "\u4E2A\u4EBA\u804C\u8D23\uFF1A"), /*#__PURE__*/react.createElement("div", {
      className: Resume.content
    }, " ", job)), /*#__PURE__*/react.createElement("div", {
      className: Resume.contribution
    }, /*#__PURE__*/react.createElement("div", {
      className: Resume.label
    }, "\u5DE5\u4F5C\u6210\u679C\uFF1A"), /*#__PURE__*/react.createElement("div", {
      className: Resume.content
    }, contribution.map(each => /*#__PURE__*/react.createElement("div", {
      key: each
    }, each)))));
  }))), /*#__PURE__*/react.createElement("div", {
    className: Resume.detail
  }, /*#__PURE__*/react.createElement(Com_DetailTitle, {
    code: "icon-aihao",
    title: "\u81EA\u6211\u8BC4\u4EF7"
  }), /*#__PURE__*/react.createElement("div", {
    className: Resume.self_appraisal
  }, selfAppraisal.map(each => /*#__PURE__*/react.createElement("div", {
    className: Resume.item,
    key: each
  }, each)))));
};
/* harmony default export */ var Com_Resume = (Resume_Resume);
;// CONCATENATED MODULE: ./src/index.tsx




// module?.["hot"]?.accept();

const container = document.querySelector("#app") || document.body;
const root = (0,client/* createRoot */.s)(container);
root.render( /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Com_Resume, null)));

/***/ }),

/***/ 484:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ 646:
/***/ (function(module) {

!function(t,s){ true?module.exports=s():0}(this,(function(){"use strict";var t,s,n=1e3,i=6e4,e=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,h=2592e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:u,months:h,days:r,hours:e,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof p},f=function(t,s,n){return new p(t,n,s.$l)},m=function(t){return s.p(t)+"s"},l=function(t){return t<0},$=function(t){return l(t)?Math.ceil(t):Math.floor(t)},y=function(t){return Math.abs(t)},g=function(t,s){return t?l(t)?{negative:!0,format:""+y(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},p=function(){function l(t,s,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*d[m(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[m(s)]=t[s]})),this.calMilliseconds(),this;if("string"==typeof t){var e=t.match(a);if(e){var r=e.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var y=l.prototype;return y.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,n){return s+(t.$d[n]||0)*d[n]}),0)},y.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/u),t%=u,this.$d.months=$(t/h),t%=h,this.$d.days=$(t/r),t%=r,this.$d.hours=$(t/e),t%=e,this.$d.minutes=$(t/i),t%=i,this.$d.seconds=$(t/n),t%=n,this.$d.milliseconds=t},y.toISOString=function(){var t=g(this.$d.years,"Y"),s=g(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=g(n,"D"),e=g(this.$d.hours,"H"),r=g(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=g(o,"S"),h=t.negative||s.negative||i.negative||e.negative||r.negative||u.negative,a=e.format||r.format||u.format?"T":"",d=(h?"-":"")+"P"+t.format+s.format+i.format+a+e.format+r.format+u.format;return"P"===d||"-P"===d?"P0D":d},y.toJSON=function(){return this.toISOString()},y.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,s){return s||String(i[t])}))},y.as=function(t){return this.$ms/d[m(t)]},y.get=function(t){var s=this.$ms,n=m(t);return"milliseconds"===n?s%=1e3:s="weeks"===n?$(s/d[n]):this.$d[n],0===s?0:s},y.add=function(t,s,n){var i;return i=s?t*d[m(s)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},y.subtract=function(t,s){return this.add(t,s,!0)},y.locale=function(t){var s=this.clone();return s.$l=t,s},y.clone=function(){return f(this.$ms,this)},y.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},l}();return function(n,i,e){t=e,s=e().$utils(),e.duration=function(t,s){var n=e.locale();return f(t,{$l:n},s)},e.isDuration=c;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return c(t)&&(t=t.asMilliseconds()),r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return c(t)&&(t=t.asMilliseconds()),o.bind(this)(t,s)}}}));

/***/ }),

/***/ 53:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 82:
/***/ (function(module) {

module.exports = "./imgs/avatar-b6090af9.jpg";

/***/ }),

/***/ 185:
/***/ (function(module) {

module.exports = "./imgs/banner-ac9a4190.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [514,33], function() { return __webpack_exec__(830); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);