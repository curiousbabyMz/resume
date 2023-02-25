(self["webpackChunkresume"] = self["webpackChunkresume"] || []).push([[179],{

/***/ 623:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(152);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(572);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(925);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Com/Icon/index.scss
var Icon = __webpack_require__(501);
;// CONCATENATED MODULE: ./src/Com/Icon/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Icon/* default */.Z, options);




       /* harmony default export */ var Com_Icon = (Icon/* default */.Z && Icon/* default.locals */.Z.locals ? Icon/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Com/Icon/index.tsx



var _excluded = ["src", "code", "size", "color"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


// import px2rem from "postcss-plugin-px2rem";
var Icon_Icon = function Icon(_ref) {
  var _ref$src = _ref.src,
    src = _ref$src === void 0 ? "" : _ref$src,
    _ref$code = _ref.code,
    code = _ref$code === void 0 ? "#000000" : _ref$code,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 10 : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "" : _ref$color,
    props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  // size = px2rem({ remUnit: 10 });
  return /*#__PURE__*/react.createElement(react.Fragment, null, src && /*#__PURE__*/react.createElement("img", (0,esm_extends/* default */.Z)({}, props, {
    src: src,
    className: Com_Icon.icon,
    alt: ""
  })), code && /*#__PURE__*/react.createElement("span", {
    className: "iconfont ".concat(code, " ").concat(Com_Icon.icon),
    style: _objectSpread({
      fontSize: "".concat(size, "px"),
      color: color,
      lineHeight: "".concat(size, "px"),
      zIndex: 1,
      position: "relative"
    }, props.style)
  }));
};
/* harmony default export */ var src_Com_Icon = (Icon_Icon);
// EXTERNAL MODULE: ./node_modules/moment/locale/zh-cn.js
var zh_cn = __webpack_require__(839);
;// CONCATENATED MODULE: ./src/myData.tsx




moment_default().locale("zh-cn");
var mobile = "18948180248";
var baseInfo = {
  name: "庄嘉敏",
  photo: __webpack_require__(956),
  mobile: mobile,
  sex: "男",
  hobby: [/*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-youxi",
    size: 20,
    color: "#515151"
  }), /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-dianying",
    size: 35,
    color: "#515151"
  }), /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-lanqiu1",
    size: 30,
    color: "#ea5555"
  }), /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-zhuoqiu1",
    size: 30,
    color: "#515151"
  }), /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-gangqinlaoshi-01",
    size: 30,
    color: "#fd6754"
  })],
  email: "2047756046@qq.com",
  wechat: mobile,
  education: [{
    time: {
      start: +moment_default()("2010.09"),
      end: +moment_default()("2014.07")
    },
    qualification: "本科",
    subject: "生物工程",
    school: "广东石油化工学院"
  }],
  selfAppraisal: ["本人兴趣广泛，对新鲜事物充满好奇，有探索精神，学习能力较好，通过自学熟悉掌握基础 web 前端技术；", "工作中善于协作沟通，总结研发工作的规范流程，习惯对代码做整理，抽象公共提高效益，常以项目需求作为驱动方向，自主研究新技术，并因此熟悉掌握；", "目前涉及到的技术框架主要有微信小程序开发，授权及支付流程，云开发平台及微信开放生态；canvas 帧动画技术、ES6+新特性，React、Vuejs 响应式原理及组件特性，elementUI、Antd UI框架和 Nodejs 应用；可视化框架及技术，3D渲染技术。"]
};
var companys = [{
  name: "安徽省刀锋网络科技有限公司",
  position: "前端开发工程师",
  time: {
    start: +moment_default()("2022.04"),
    end: +moment_default()("2023.2.16")
  },
  job: "主要负责 Web 端、移动端 H5、后台管理系统相关项目开发； 负责新技术及框架的预研与探索应用；负责项目研发流程及代码管理规范的制定和优化；功能基建和公共模块的抽象维护；业务数据结构(多端)规范的讨论、协作完善交互逻辑与设计； 负责项目前端代码的优化维护和迭代升级工作；"
}, {
  name: "清科优能（深圳）科技有限公司",
  position: "前端开发工程师",
  time: {
    start: +moment_default()("2020.03"),
    end: +moment_default()("2022.04")
  },
  job: " 小程序前端开发， PC-web 前端开发，安卓端应用开发，主要负责移动端相关项目开发； 负责新技术探索；参与讨论项目流程与交互逻辑设计； 配合后台完成接口调试； 负责项目前端代码的维护和迭代升级工作；"
}, {
  name: "深圳市医美咖网络科技有限公司",
  position: "前端开发工程师",
  time: {
    start: +moment_default()("2019.02"),
    end: +moment_default()("2020.03")
  },
  job: "对接产品，分析业务需求；设计程序整体结构、工具封装； 根据 UI 设计搭建前端页面； 对接后端接口，数据交换；实现业务逻辑、页面交互；协助管理后台页面开发、接口对接；"
}, {
  name: "深圳市眼界科技有限公司",
  position: "前端开发工程师",
  time: {
    start: +moment_default()("2016.11"),
    end: +moment_default()("2019.02")
  },
  job: "web 前端开发，小程序前端开发，主要负责小程序项目开发； 负责新技术探索；参与讨论项目流程设计与交互逻辑； 与设计师协作完成界面开发工作； 配合后台完成接口调试；负责项目前端代码的维护和迭代升级工作；"
}];
var projects = [{
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Com/DetailTitle/index.scss
var DetailTitle = __webpack_require__(882);
;// CONCATENATED MODULE: ./src/Com/DetailTitle/index.scss

      
      
      
      
      
      
      
      
      

var DetailTitle_options = {};

DetailTitle_options.styleTagTransform = (styleTagTransform_default());
DetailTitle_options.setAttributes = (setAttributesWithoutAttributes_default());

      DetailTitle_options.insert = insertBySelector_default().bind(null, "head");
    
DetailTitle_options.domAPI = (styleDomAPI_default());
DetailTitle_options.insertStyleElement = (insertStyleElement_default());

var DetailTitle_update = injectStylesIntoStyleTag_default()(DetailTitle/* default */.Z, DetailTitle_options);




       /* harmony default export */ var Com_DetailTitle = (DetailTitle/* default */.Z && DetailTitle/* default.locals */.Z.locals ? DetailTitle/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Com/DetailTitle/index.tsx

var DetailTitle_excluded = ["code", "title"];



var DetailTitle_DetailTitle = function DetailTitle(_ref) {
  var code = _ref.code,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    props = (0,objectWithoutProperties/* default */.Z)(_ref, DetailTitle_excluded);
  return /*#__PURE__*/react.createElement("div", {
    className: Com_DetailTitle.detail_title
  }, /*#__PURE__*/react.createElement("div", {
    className: Com_DetailTitle.icon
  }, /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: code,
    size: 30,
    color: "#fff"
  })), /*#__PURE__*/react.createElement("span", {
    className: Com_DetailTitle.title
  }, title));
};
/* harmony default export */ var src_Com_DetailTitle = (DetailTitle_DetailTitle);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Com/Resume/index.scss
var Resume = __webpack_require__(3);
;// CONCATENATED MODULE: ./src/Com/Resume/index.scss

      
      
      
      
      
      
      
      
      

var Resume_options = {};

Resume_options.styleTagTransform = (styleTagTransform_default());
Resume_options.setAttributes = (setAttributesWithoutAttributes_default());

      Resume_options.insert = insertBySelector_default().bind(null, "head");
    
Resume_options.domAPI = (styleDomAPI_default());
Resume_options.insertStyleElement = (insertStyleElement_default());

var Resume_update = injectStylesIntoStyleTag_default()(Resume/* default */.Z, Resume_options);




       /* harmony default export */ var Com_Resume = (Resume/* default */.Z && Resume/* default.locals */.Z.locals ? Resume/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Com/Resume/index.tsx







var Time = function Time(_ref) {
  var _ref$time = _ref.time,
    start = _ref$time.start,
    end = _ref$time.end,
    className = _ref.className;
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, moment_default()(start).format("YYYY.MM"), " -", " ", moment_default()().format("YYYY.MM.DD HH:MM") === moment_default()(end).format("YYYY.MM.DD HH:MM") ? "至今" : moment_default()(end).format("YYYY.MM"));
};
window.moment = (moment_default());
var Resume_Resume = function Resume() {
  var photo = baseInfo.photo,
    hobby = baseInfo.hobby,
    name = baseInfo.name,
    mobile = baseInfo.mobile,
    email = baseInfo.email,
    wechat = baseInfo.wechat,
    sex = baseInfo.sex,
    selfAppraisal = baseInfo.selfAppraisal;
  var _useState = (0,react.useState)(true),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    isPrint = _useState2[0],
    setIsPrint = _useState2[1];
  (0,react.useEffect)(function () {
    // console.log("call \"isPrint(flag:Boolean)\" see more");
    // window["isPrint"] = (flag) => {
    //   setIsPrint(flag);
    // };
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.resume
  }, /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.header
  }, /*#__PURE__*/react.createElement("img", {
    className: Com_Resume.banner,
    src: __webpack_require__(202)
  }), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.title
  }, /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.cn
  }, "个人简历".split("").map(function (each, index) {
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: each
    }, index !== 0 && /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.split
    }), /*#__PURE__*/react.createElement("span", null, each));
  })), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.en
  }, "PERSONAL RESUME"))), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.info
  }, /*#__PURE__*/react.createElement("img", {
    className: Com_Resume.avatar,
    src: photo
  }), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.base_info
  }, /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.name
  }, name), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.base_info_items
  }, /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.base_info_item
  }, /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-nansheng",
    color: "#000000",
    size: 16
  }), ":", /*#__PURE__*/react.createElement("span", {
    className: Com_Resume.content
  }, sex)), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.base_info_item
  }, /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-dianhua",
    color: "#000000",
    size: 24
  }), ":", /*#__PURE__*/react.createElement("span", {
    className: Com_Resume.content
  }, mobile)), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.base_info_item
  }, /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-weixin",
    color: "#000000",
    size: 24
  }), ":", /*#__PURE__*/react.createElement("span", {
    className: Com_Resume.content
  }, wechat)), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.base_info_item
  }, /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-youxiang",
    color: "#000000",
    size: 24
  }), ":", /*#__PURE__*/react.createElement("span", {
    className: Com_Resume.content
  }, email))), /*#__PURE__*/react.createElement("div", {
    className: "".concat(Com_Resume.hobby, " ").concat(Com_Resume.base_info_items)
  }, /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.base_info_item
  }, /*#__PURE__*/react.createElement(src_Com_Icon, {
    code: "icon-aihao",
    color: "#da5353",
    size: 24
  }), "\uFF1A"), hobby.map(function (each, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.base_info_item,
      key: index
    }, each);
  })))), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.detail
  }, /*#__PURE__*/react.createElement(src_Com_DetailTitle, {
    code: "icon-jiaoyubeijing",
    title: "\u6559\u80B2\u7ECF\u5386"
  }), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.edu
  }, baseInfo.education.map(function (_ref2) {
    var time = _ref2.time,
      school = _ref2.school,
      qualification = _ref2.qualification;
    return /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.item,
      key: school
    }, /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.school
    }, school), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.qualification
    }, qualification), /*#__PURE__*/react.createElement(Time, {
      className: Com_Resume.time,
      time: time
    }));
  }))), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.detail
  }, /*#__PURE__*/react.createElement(src_Com_DetailTitle, {
    code: "icon-gongzuojingyan",
    title: "\u5DE5\u4F5C\u7ECF\u5386"
  }), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.companys
  }, companys.map(function (_ref3) {
    var name = _ref3.name,
      job = _ref3.job,
      position = _ref3.position,
      time = _ref3.time;
    return /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.item,
      key: name
    }, /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.top
    }, /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.name
    }, name), /*#__PURE__*/react.createElement(Time, {
      className: Com_Resume.time,
      time: time
    })), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.position
    }, position), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.job
    }, job));
  }))), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.detail
  }, /*#__PURE__*/react.createElement(src_Com_DetailTitle, {
    code: "icon-xiangmujingyan",
    title: "\u9879\u76EE\u7ECF\u5386"
  }), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.projects
  }, projects.map(function (_ref4) {
    var name = _ref4.name,
      job = _ref4.job,
      technology = _ref4.technology,
      description = _ref4.description,
      contribution = _ref4.contribution;
    return /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.item,
      key: name
    }, /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.top
    }, /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.name
    }, name)), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.technology
    }, technology.map(function (each) {
      return /*#__PURE__*/react.createElement("div", {
        className: Com_Resume.item,
        key: each
      }, each);
    })), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.description
    }, /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.label
    }, "\u9879\u76EE\u7B80\u4ECB\uFF1A"), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.content
    }, " ", description)), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.job
    }, /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.label
    }, "\u4E2A\u4EBA\u804C\u8D23\uFF1A"), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.content
    }, " ", job)), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.contribution
    }, /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.label
    }, "\u5DE5\u4F5C\u6210\u679C\uFF1A"), /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.content
    }, contribution.map(function (each) {
      return /*#__PURE__*/react.createElement("div", {
        key: each
      }, each);
    }))));
  }))), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.detail
  }, /*#__PURE__*/react.createElement(src_Com_DetailTitle, {
    code: "icon-aihao",
    title: "\u81EA\u6211\u8BC4\u4EF7"
  }), /*#__PURE__*/react.createElement("div", {
    className: Com_Resume.self_appraisal
  }, selfAppraisal.map(function (each) {
    return /*#__PURE__*/react.createElement("div", {
      className: Com_Resume.item,
      key: each
    }, each);
  }))));
};
/* harmony default export */ var src_Com_Resume = (Resume_Resume);
;// CONCATENATED MODULE: ./src/index.tsx




// module?.["hot"]?.accept();

var container = document.querySelector("#app") || document.body;
var root = (0,client/* createRoot */.s)(container);
root.render( /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(src_Com_Resume, null)));

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".detail_title-c108b64f{display:flex;justify-content:flex-start;align-items:center;display:inline-flex}.icon-b618293b{position:relative;margin:5px}.icon-b618293b::after{width:30px;height:30px;border-radius:3px;transform:rotate(45deg);content:\"\";background:#549eff;position:absolute;left:0;top:0}.icon-b618293b img{position:relative;z-index:1;width:30px}.title-dbb48b67{color:#549eff;font-weight:bold;font-size:18px;background:#e6f5ff;border-radius:0 50px 50px 0;line-height:40px;padding:0 50px 0 30px;margin-left:-20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"detail_title": "detail_title-c108b64f",
	"icon": "icon-b618293b",
	"title": "title-dbb48b67"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".resume-bcf11cb9{padding:0 0 20px;font-size:16px}.header-cd1bdec1{overflow:hidden;position:relative;background:#63a4d3}.header-cd1bdec1 .banner-ce9038dd{position:absolute;right:0;top:0;width:100%;height:100%;object-fit:cover;opacity:.08}.header-cd1bdec1 .title-d9008ddc{position:relative;padding:50px 40px 60px;font-size:25px;color:#fff;text-align:right}.header-cd1bdec1 .title-d9008ddc .cn-eea69131{font-family:Microsoft YaHei;display:flex;justify-content:flex-end;align-items:center;line-height:40px}.header-cd1bdec1 .title-d9008ddc .cn-eea69131 .split-a603eac8{width:1px;content:\"\";height:20px;background:rgba(255,255,255,.274);margin:5px 12px}.header-cd1bdec1 .title-d9008ddc .en-d43b6d99{font-size:10px;color:rgba(255,255,255,.575);letter-spacing:10px;margin:8px -10px 0 0}.info-ff7ca5f7{display:flex;justify-content:flex-start;align-items:flex-start;margin-top:-60px;padding:0 40px 20px;position:relative}.info-ff7ca5f7 .avatar-e83b3c13{width:100px;height:140px;object-fit:cover;border:5px solid #fff;border-radius:5px}.info-ff7ca5f7 .base_info-e5e245b0{margin:0 0 0 30px;flex:1}.info-ff7ca5f7 .base_info-e5e245b0 .name-b2e70db4{color:#fff;font-size:28px;margin:10px 0 30px}.info-ff7ca5f7 .base_info-e5e245b0 .base_info_items-fdc64308{display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;font-size:12px;margin:0 -10px}.info-ff7ca5f7 .base_info-e5e245b0 .base_info_items-fdc64308 .base_info_item-c97a0652{display:flex;justify-content:center;align-items:center;margin:0 10px}.info-ff7ca5f7 .base_info-e5e245b0 .base_info_items-fdc64308 .base_info_item-c97a0652 .content-ff7d2967{text-indent:10px}.info-ff7ca5f7 .base_info-e5e245b0 .hobby-d95233c0{margin-top:20px;justify-content:flex-end}.detail-d5fac9dc{padding:20px 20px 0}.edu-ac1bdadb{padding:0 20px 20px}.edu-ac1bdadb .item-f3aaa162{display:flex;justify-content:flex-start;align-items:center;padding:10px 0;font-size:16px}.edu-ac1bdadb .item-f3aaa162 .school-c9cf4635{margin:0 30px 0 0}.edu-ac1bdadb .item-f3aaa162 .qualification-c6a3f2f9{flex:1;font-size:16px;color:#424242}.companys-bfeca9e3{padding:0 20px 30px}.companys-bfeca9e3 .item-f3aaa162{padding:10px 0}.companys-bfeca9e3 .item-f3aaa162 .top-fab13dac{display:flex;justify-content:space-between;align-items:center;line-height:30px}.companys-bfeca9e3 .item-f3aaa162 .position-f1e7c847{font-size:15px;padding:5px 0}.companys-bfeca9e3 .item-f3aaa162 .job-eeae038e{font-size:14px;color:#747474}.projects-b95c520c{padding:0 20px}.projects-b95c520c .item-f3aaa162{padding:10px 0}.projects-b95c520c .item-f3aaa162 .name-b2e70db4{padding:0 0 5px;font-size:17px}.projects-b95c520c .item-f3aaa162 .job-eeae038e{font-size:15px;color:#444;padding:5px 0}.projects-b95c520c .item-f3aaa162 .technology-b9c4cfbe{display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;padding:5px 0;margin:0 -5px}.projects-b95c520c .item-f3aaa162 .technology-b9c4cfbe .item-f3aaa162{font-size:12px;margin:2px 5px;padding:2px 10px;border-radius:20px;background:#549eff;color:#fff}.projects-b95c520c .item-f3aaa162 .description-b77910f6{font-size:14px;color:#747474}.projects-b95c520c .item-f3aaa162 .description-b77910f6 .content-ff7d2967{text-indent:25px}.projects-b95c520c .item-f3aaa162 .contribution-be26df47{font-size:15px;color:#222}.projects-b95c520c .item-f3aaa162 .contribution-be26df47 .content-ff7d2967{padding:0 0 0 25px}.projects-b95c520c .item-f3aaa162 .job-eeae038e .label-f75c3484,.projects-b95c520c .item-f3aaa162 .job-eeae038e .content-ff7d2967{display:inline}.self_appraisal-a990d80b{padding:10px 20px 20px;color:#5a5a5a}.self_appraisal-a990d80b .item-f3aaa162{padding:3px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"resume": "resume-bcf11cb9",
	"header": "header-cd1bdec1",
	"banner": "banner-ce9038dd",
	"title": "title-d9008ddc",
	"cn": "cn-eea69131",
	"split": "split-a603eac8",
	"en": "en-d43b6d99",
	"info": "info-ff7ca5f7",
	"avatar": "avatar-e83b3c13",
	"base_info": "base_info-e5e245b0",
	"name": "name-b2e70db4",
	"base_info_items": "base_info_items-fdc64308",
	"base_info_item": "base_info_item-c97a0652",
	"content": "content-ff7d2967",
	"hobby": "hobby-d95233c0",
	"detail": "detail-d5fac9dc",
	"edu": "edu-ac1bdadb",
	"item": "item-f3aaa162",
	"school": "school-c9cf4635",
	"qualification": "qualification-c6a3f2f9",
	"companys": "companys-bfeca9e3",
	"top": "top-fab13dac",
	"position": "position-f1e7c847",
	"job": "job-eeae038e",
	"projects": "projects-b95c520c",
	"technology": "technology-b9c4cfbe",
	"description": "description-b77910f6",
	"contribution": "contribution-be26df47",
	"label": "label-f75c3484",
	"self_appraisal": "self_appraisal-a990d80b"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b6090af998fd65e58319351530ce208f.jpg";

/***/ }),

/***/ 202:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac9a41900a530bd963be92690f5b29d2.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [736], function() { return __webpack_exec__(623); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);