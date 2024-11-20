// .vitepress/config.js
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "web前端面试 - 面试官系列",
  description: "这是一个使用 VitePress 构建的文档网站",
  themeConfig: {
    nav: [
      { text: "指南", link: "/README" },
      {
        text: '面试题',
        link: '/vue/vue',
        activeMatch: '/'
      },
    ],
    sidebar: {
      '/': { base: '/', items: sidebarGuide() },
    },    
    socialLinks: [
      { icon: "github", link: "https://github.com/monon98/web-interview" },
      { icon: "github", link: "https://github.com/febobo/web-interview" },
    ],
    search: {
      provider: "local",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
  base: '/web-interview/',
  cacheDir: "../.cache",
  outDir: "../dist",
  lastUpdated: true,
});

function sidebarGuide() {
  return [
    {
      text: "Vue系列  ( 已完结..)",
      collapsed: true,
      base: '/vue',
      items: [
        { text: "说说你对vue的理解?", link: "/vue" },
        { text: "说说你对SPA（单页应用）的理解?", link: "/spa" },
        { text: "Vue中的v-show和v-if怎么理解？", link: "/show_if" },
        { text: "Vue实例挂载的过程中发生了什么?", link: "/new_vue" },
        { text: "说说你对Vue生命周期的理解?", link: "/lifecycle" },
        { text: "为什么Vue中的v-if和v-for不建议一起用?", link: "/if_for" },
        {
          text: "SPA（单页应用）首屏加载速度慢怎么解决？",
          link: "/first_page_time",
        },
        {
          text: "为什么data属性是一个函数而不是一个对象？",
          link: "/data",
        },
        {
          text: "Vue中给对象添加新属性界面不刷新?",
          link: "/data_object_add_attrs",
        },
        {
          text: "Vue中组件和插件有什么区别？",
          link: "/components_plugin",
        },
        { text: "Vue组件间通信方式都有哪些?", link: "/communication" },
        { text: "说说你对双向绑定的理解?", link: "/bind" },
        { text: "说说你对nexttick的理解?", link: "/nexttick" },
        {
          text: "说说你对vue的mixin的理解，有什么应用场景？",
          link: "/mixin",
        },
        {
          text: "说说你对slot的理解？slot使用场景有哪些？",
          link: "/slot",
        },
        {
          text: "Vue.observable你有了解过吗？说说看",
          link: "/observable",
        },
        {
          text: "你知道vue中key的原理吗？说说你对它的理解？",
          link: "/key",
        },
        {
          text: "怎么缓存当前的组件？缓存后怎么更新？说说你对keep-alive的理解是什么？",
          link: "/keepalive",
        },
        {
          text: "Vue常用的修饰符有哪些？有什么应用场景？",
          link: "/modifier",
        },
        {
          text: "你有写过自定义指令吗？自定义指令的应用场景有哪些？",
          link: "/directive",
        },
        {
          text: "Vue中的过滤器了解吗？过滤器的应用场景有哪些？",
          link: "/filter",
        },
        {
          text: "什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路",
          link: "/vnode",
        },
        { text: "你了解vue的diff算法吗？说说看", link: "/diff" },
        {
          text: "Vue项目中有封装过axios吗？主要是封装哪方面的？",
          link: "/axios",
        },
        {
          text: "你了解axios的原理吗？有看过它的源码吗？",
          link: "/axiosCode",
        },
        {
          text: "SSR解决了什么问题？有做过SSR吗？你是怎么做的？",
          link: "/ssr",
        },
        {
          text: "说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？",
          link: "/structure",
        },
        {
          text: "vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？",
          link: "/permission",
        },
        { text: "Vue项目中你是如何解决跨域的呢？", link: "/cors" },
        {
          text: "vue项目本地开发完成后部署到服务器后报404是什么原因呢？",
          link: "/404",
        },
        { text: "你是怎么处理vue项目中的错误的？", link: "/error" },
        {
          text: "Vue3有了解过吗？能说说跟Vue2的区别吗？",
          link: "/vue3_vue2",
        },
      ],
    },
    {
      text: "Vue3系列  ( 已完结..)",
      collapsed: true,
      base: "/vue3",
      items: [
        { text: "Vue3.0的设计目标是什么？做了哪些优化?", link: "/goal" },
        {
          text: "Vue3.0 性能提升主要是通过哪几方面体现的？",
          link: "/performance",
        },
        {
          text: "Vue3.0里为什么要用 Proxy API 替代 defineProperty API ？",
          link: "/proxy",
        },
        {
          text: "Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？",
          link: "/composition",
        },
        {
          text: "说说Vue 3.0中Treeshaking特性？举例说明一下？",
          link: "/treeshaking",
        },
        {
          text: "用Vue3.0 写过组件吗？如果想实现一个 Modal你会怎么设计？",
          link: "/modal_component",
        },
      ],
    },
    {
      text: "ES6系列  ( 已完结..)",
      collapsed: true,
      base: "/es6",
      items: [
        { text: "说说var、let、const之间的区别", link: "/var_let_const" },
        { text: "ES6中数组新增了哪些扩展?", link: "/array" },
        { text: "ES6中对象新增了哪些扩展?", link: "/object" },
        { text: "ES6中函数新增了哪些扩展?", link: "/function" },
        {
          text: "ES6中新增的Set、Map两种数据结构怎么理解?",
          link: "/set_map",
        },
        {
          text: "你是怎么理解ES6中 Promise的？使用场景？",
          link: "/promise",
        },
        {
          text: "怎么理解ES6中 Generator的？使用场景？",
          link: "/generator",
        },
        { text: "你是怎么理解ES6中Proxy的？使用场景?", link: "/proxy" },
        { text: "你是怎么理解ES6中Module的？使用场景？", link: "/module" },
        {
          text: "你是怎么理解ES6中 Decorator 的？使用场景？",
          link: "/decorator",
        },
      ],
    },
    {
      text: "JavaScript系列  ( 已完结..)",
      collapsed: true,
      base: "/JavaScript",
      items: [
        {
          text: "说说JavaScript中的数据类型？存储上的差别？",
          link: "/data_type",
        },
        { text: "数组的常用方法有哪些？", link: "/array_api" },
        {
          text: "JavaScript字符串的常用方法有哪些？",
          link: "/string_api",
        },
        {
          text: "谈谈 JavaScript 中的类型转换机制",
          link: "/type_conversion",
        },
        {
          text: "== 和 ===区别，分别在什么情况使用",
          link: "/== _===",
        },
        {
          text: "深拷贝浅拷贝的区别？如何实现一个深拷贝？",
          link: "/copy",
        },
        {
          text: "说说你对闭包的理解？闭包使用场景",
          link: "/closure",
        },
        { text: "说说你对作用域链的理解", link: "/scope" },
        {
          text: "JavaScript原型，原型链 ? 有什么特点？",
          link: "/prototype",
        },
        { text: "Javascript如何实现继承？", link: "/inherit" },
        { text: "谈谈this对象的理解", link: "/this" },
        {
          text: "JavaScript中执行上下文和执行栈是什么？",
          link: "/context_stack",
        },
        {
          text: "说说JavaScript中的事件模型",
          link: "/event_Model",
        },
        {
          text: "typeof 与 instanceof 区别",
          link: "/typeof_instanceof",
        },
        {
          text: "解释下什么是事件代理？应用场景？",
          link: "/event_agent",
        },
        { text: "说说new操作符具体干了什么？", link: "/new" },
        { text: "ajax原理是什么？如何实现？", link: "/ajax" },
        {
          text: "bind、call、apply 区别？如何实现一个bind?",
          link: "/bind_call_apply",
        },
        {
          text: "说说你对正则表达式的理解？应用场景？",
          link: "/regexp",
        },
        { text: "说说你对事件循环的理解", link: "/event_loop" },
        { text: "DOM常见的操作有哪些？", link: "/Dom" },
        {
          text: "说说你对BOM的理解，常见的BOM对象你了解哪些？",
          link: "/BOM",
        },
        {
          text: "举例说明你对尾递归的理解，有哪些应用场景",
          link: "/tail_recursion",
        },
        {
          text: "说说 JavaScript 中内存泄漏的几种情况？",
          link: "/memory_leak",
        },
        {
          text: "Javascript本地存储的方式有哪些？区别及应用场景？",
          link: "/cache",
        },
        {
          text: "说说你对函数式编程的理解？优缺点？",
          link: "/functional_programming",
        },
        {
          text: "Javascript中如何实现函数缓存？函数缓存有哪些应用场景？",
          link: "/function_cache",
        },
        {
          text: "说说 Javascript 数字精度丢失的问题，如何解决？",
          link: "/loss_accuracy",
        },
        {
          text: "什么是防抖和节流？有什么区别？如何实现？",
          link: "/debounce_throttle",
        },
        {
          text: "如何判断一个元素是否在可视区域中？",
          link: "/visible",
        },
        {
          text: "大文件上传如何做断点续传？",
          link: "/continue_to_upload",
        },
        {
          text: "如何实现上拉加载，下拉刷新？",
          link: "/pull_up_loading_pull_down_refresh",
        },
        {
          text: "什么是单点登录？如何实现？",
          link: "/single_sign",
        },
        {
          text: "web常见的攻击方式有哪些？如何防御？",
          link: "/security",
        },
      ],
    },
    {
      text: "CSS系列  ( 已完结..)",
      collapsed: true,
      base: "/css",
      items: [
        { text: "说说你对盒子模型的理解?", link: "/box" },
        {
          text: "css选择器有哪些？优先级？哪些属性可以继承？",
          link: "/selector",
        },
        { text: "说说em/px/rem/vh/vw区别?", link: "/em_px_rem_vh_vw" },
        {
          text: "说说设备像素、css像素、设备独立像素、dpr、ppi 之间的区别？",
          link: "/dp_px_dpr_ppi",
        },
        {
          text: "css中，有哪些方式可以隐藏页面元素？区别?",
          link: "/hide_attributes",
        },
        { text: "谈谈你对BFC的理解？", link: "/BFC" },
        {
          text: "元素水平垂直居中的方法有哪些？如果元素不定宽高呢？",
          link: "/center",
        },
        {
          text: "如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？",
          link: "/column_layout",
        },
        {
          text: "说说flexbox（弹性盒布局模型）,以及适用场景？",
          link: "/flexbox",
        },
        { text: "介绍一下grid网格布局", link: "/grid" },
        { text: "CSS3新增了哪些新特性？", link: "3_features" },
        { text: "css3动画有哪些？", link: "/animation" },
        {
          text: "怎么理解回流跟重绘？什么场景下会触发？",
          link: "/layout_painting",
        },
        {
          text: "什么是响应式设计？响应式设计的基本原理是什么？如何做？",
          link: "/responsive_layout",
        },
        {
          text: "如果要做优化，CSS提高性能的方法有哪些？",
          link: "_performance",
        },
        {
          text: "如何实现单行／多行文本溢出的省略样式？",
          link: "/single_multi_line",
        },
        {
          text: "如何使用css完成视差滚动效果?",
          link: "/visual_scrolling",
        },
        { text: "CSS如何画一个三角形？原理是什么？", link: "/triangle" },
        {
          text: "让Chrome支持小于12px 的文字方式有哪些？区别？",
          link: "/less_12px",
        },
        {
          text: "说说对Css预编语言的理解？有哪些区别?",
          link: "/sass_less_stylus",
        },
      ],
    },
    {
      text: "Webpack系列  ( 已完结..)",
      collapsed: true,
      base: "/webpack",
      items: [
        {
          text: "说说你对webpack的理解？解决了什么问题？",
          link: "/webpack",
        },
        { text: "说说webpack的构建流程?", link: "/build_process" },
        {
          text: "说说webpack中常见的Loader？解决了什么问题？",
          link: "/Loader",
        },
        {
          text: "说说webpack中常见的Plugin？解决了什么问题？",
          link: "/Plugin",
        },
        {
          text: "说说Loader和Plugin的区别？编写Loader，Plugin的思路？",
          link: "/Loader_Plugin",
        },
        {
          text: "说说webpack的热更新是如何做到的？原理是什么？",
          link: "/HMR",
        },
        {
          text: "说说webpack proxy工作原理？为什么能解决跨域?",
          link: "/proxy",
        },
        {
          text: "说说如何借助webpack来优化前端性能？",
          link: "/performance",
        },
        {
          text: "如何提高webpack的构建速度？",
          link: "/improve_build",
        },
        {
          text: "与webpack类似的工具还有哪些？区别？",
          link: "/Rollup_Parcel_snowpack_Vite",
        },
      ],
    },
    {
      text: "HTTP系列  ( 已完结..)",
      collapsed: true,
      base: "/http",
      items: [
        {
          text: "什么是HTTP? HTTP 和 HTTPS 的区别?",
          link: "/HTTP_HTTPS",
        },
        {
          text: "为什么说HTTPS比HTTP安全? HTTPS是如何保证安全的？",
          link: "/HTTPS",
        },
        { text: "如何理解UDP 和 TCP? 区别? 应用场景?", link: "/UDP_TCP" },
        { text: "如何理解OSI七层模型?", link: "/OSI" },
        { text: "如何理解TCP/IP协议?", link: "/TCP_IP" },
        { text: "DNS协议 是什么？说说DNS 完整的查询过程?", link: "/DNS" },
        { text: "如何理解CDN？说说实现原理？", link: "/CDN" },
        { text: "说说 HTTP1.0/1.1/2.0 的区别?", link: "/1.0_1.1_2.0" },
        {
          text: "说说 HTTP 常见的状态码有哪些，适用场景？",
          link: "/status",
        },
        { text: "说一下 GET 和 POST 的区别？", link: "/GET_POST" },
        {
          text: "说说 HTTP 常见的请求头有哪些? 作用？",
          link: "/headers",
        },
        {
          text: "说说地址栏输入 URL 敲下回车后发生了什么？",
          link: "/after_url",
        },
        {
          text: "说说TCP为什么需要三次握手和四次挥手？",
          link: "/handshakes_waves",
        },
        { text: "说说对WebSocket的理解？应用场景？", link: "/WebSocket" },
      ],
    },
    {
      text: "NodeJS系列  ( 已完结..)",
      collapsed: true,
      base: "/NodeJS",
      items: [
        {
          text: "说说你对 Node.js 的理解？优缺点？应用场景？",
          link: "/nodejs",
        },
        { text: "说说 Node.js 有哪些全局对象？", link: "/global" },
        {
          text: "说说对 Node 中的 process 的理解？有哪些常用方法？",
          link: "/process",
        },
        {
          text: "说说对 Node 中的 fs模块的理解? 有哪些常用方法",
          link: "/fs",
        },
        {
          text: "说说对 Node 中的 Buffer 的理解？应用场景？",
          link: "/Buffer",
        },
        {
          text: "说说对 Node 中的 Stream 的理解？应用场景？",
          link: "/Stream",
        },
        {
          text: "说说Node中的EventEmitter? 如何实现一个EventEmitter?",
          link: "/EventEmitter",
        },
        {
          text: "说说对 Nodejs 中的事件循环机制理解?",
          link: "/event_loop",
        },
        {
          text: "说说 Node 文件查找的优先级以及 Require 方法的文件查找策略?",
          link: "/require_order",
        },
        {
          text: "说说对中间件概念的理解，如何封装 node 中间件？",
          link: "/middleware",
        },
        { text: "如何实现jwt鉴权机制？说说你的思路", link: "/jwt" },
        {
          text: "如何实现文件上传？说说你的思路",
          link: "/file_upload",
        },
        {
          text: "如果让你来设计一个分页功能, 你会怎么设计? 前后端如何交互?",
          link: "/paging",
        },
        {
          text: "Node性能如何进行监控以及优化？",
          link: "/performance",
        },
      ],
    },
    {
      text: "React系列  ( 已完结..)",
      collapsed: true,
      base: "/React",
      items: [
        { text: "说说对React的理解？有哪些特性？", link: "/React" },
        {
          text: "说说 Real DOM和 Virtual DOM 的区别？优缺点？",
          link: "/Real DOM_Virtual DOM",
        },
        {
          text: "说说 React 生命周期有哪些不同阶段？每个阶段对应的方法是？",
          link: "/life cycle",
        },
        { text: "state 和 props有什么区别？", link: "/state_props" },
        {
          text: "super()和super(props)有什么区别？",
          link: "/super()_super(props)",
        },
        { text: "说说 React中的setState执行机制", link: "/setState" },
        { text: "说说React的事件机制？", link: "/SyntheticEvent" },
        {
          text: "React事件绑定的方式有哪些？区别？",
          link: "/Binding events",
        },
        {
          text: "React构建组件的方式有哪些？区别？",
          link: "/Building components",
        },
        { text: "React中组件之间如何通信？", link: "/communication" },
        { text: "React中的key有什么作用？", link: "/key" },
        {
          text: "说说对React refs 的理解？应用场景？",
          link: "/React refs",
        },
        {
          text: "说说对React中类组件和函数组件的理解？有什么区别？",
          link: "/class_function component",
        },
        {
          text: "说说对受控组件和非受控组件的理解？应用场景？",
          link: "/controlled_Uncontrolled",
        },
        {
          text: "说说对高阶组件的理解？应用场景?",
          link: "/High order components",
        },
        {
          text: "说说对React Hooks的理解？解决了什么问题？",
          link: "/React Hooks",
        },
        {
          text: "说说react中引入css的方式有哪几种？区别？",
          link: "/import css",
        },
        {
          text: "在react中组件间过渡动画如何实现？",
          link: "/animation",
        },
        { text: "说说你对Redux的理解？其工作原理？", link: "/redux" },
        {
          text: "说说对Redux中间件的理解？常用的中间件有哪些？实现原理？",
          link: "/Redux Middleware",
        },
        {
          text: "你在React项目中是如何使用Redux的? 项目结构是如何划分的？",
          link: "/how to use redux",
        },
        {
          text: "说说你对React Router的理解？常用的Router组件有哪些？",
          link: "/React Router",
        },
        {
          text: "说说React Router有几种模式？实现原理？？",
          link: "/React Router model",
        },
        {
          text: "说说你对immutable的理解？如何应用在react项目中？",
          link: "/immutable",
        },
        {
          text: "说说React render方法的原理？在什么时候会被触发？",
          link: "/render",
        },
        {
          text: "说说你是如何提高组件的渲染效率的？在React中如何避免不必要的render？",
          link: "/improve_render",
        },
        { text: "说说React diff的原理是什么？", link: "/diff" },
        {
          text: "说说对Fiber架构的理解？解决了什么问题？",
          link: "/Fiber",
        },
        {
          text: "说说React Jsx转换成真实DOM过程？",
          link: "/JSX to DOM",
        },
        {
          text: "说说 React 性能优化的手段有哪些？",
          link: "/Improve performance",
        },
        {
          text: "说说你在React项目是如何捕获错误的？",
          link: "/capture error",
        },
        {
          text: "说说React服务端渲染怎么做？原理是什么？",
          link: "/server side rendering",
        },
        {
          text: "说说你在使用React 过程中遇到的常见问题？如何解决?",
          link: "/summary",
        },
      ],
    },
    {
      text: "版本控制系列  ( 已完结..)",
      collapsed: true,
      base: "/git",
      items: [
        {
          text: "说说你对版本管理的理解？常用的版本管理工具有哪些？",
          link: "/Version control",
        },
        { text: "说说你对Git的理解？", link: "/Git" },
        {
          text: "说说Git中 fork, clone,branch这三个概念，有什么区别?",
          link: "/fork_clone_branch",
        },
        { text: "说说Git常用的命令有哪些？", link: "/command" },
        {
          text: "说说Git 中 HEAD、工作树和索引之间的区别？",
          link: "/HEAD_tree_index",
        },
        {
          text: "说说对git pull 和 git fetch 的理解？有什么区别？",
          link: "/git pull _git fetch",
        },
        {
          text: "说说你对git stash 的理解？应用场景？",
          link: "/git stash",
        },
        {
          text: "说说你对git rebase 和 git merge的理解？区别？",
          link: "/git rebase_ git merge",
        },
        { text: "说说 git 发生冲突的场景？如何解决？", link: "/conflict" },
        {
          text: "说说你对git reset 和 git revert 的理解？区别？",
          link: "/git reset_ git revert",
        },
      ],
    },
    {
      text: "操作系统系列  ( 已完结..)",
      collapsed: true,
      base: "/linux",
      items: [
        {
          text: "说说你对操作系统的理解？核心概念有哪些？",
          link: "/linux",
        },
        {
          text: "说说什么是进程？什么是线程？区别？",
          link: "/thread_process",
        },
        {
          text: "说说 linux系统下 文件操作常用的命令有哪些？",
          link: "/file",
        },
        {
          text: "说说 linux 系统下 文本编辑常用的命令有哪些？",
          link: "/vim",
        },
        {
          text: "说说你对 linux 用户管理的理解？相关的命令有哪些？",
          link: "/linux users",
        },
        {
          text: "说说你对输入输出重定向和管道的理解？应用场景？",
          link: "/redirect_pipe",
        },
        { text: "说说你对 shell 的理解？常见的命令？", link: "/shell" },
      ],
    },
    {
      text: "TypeScript 系列  ( 已完结..)",
      collapsed: true,
      base: "/typescript",
      items: [
        {
          text: "说说你对 TypeScript 的理解？与 JavaScript 的区别？",
          link: "/typescript_javascript",
        },
        {
          text: "说说 typescript 的数据类型有哪些？",
          link: "/data_type",
        },
        {
          text: "说说你对 TypeScript 中枚举类型的理解？应用场景？",
          link: "/enum",
        },
        {
          text: "说说你对 TypeScript 中接口的理解？应用场景？",
          link: "/interface",
        },
        {
          text: "说说你对 TypeScript 中类的理解？应用场景？",
          link: "/class",
        },
        {
          text: "说说你对 TypeScript 中函数的理解？与 JavaScript 函数的区别？",
          link: "/function",
        },
        {
          text: "说说你对 TypeScript 中泛型的理解？应用场景？",
          link: "/generic",
        },
        {
          text: "说说你对 TypeScript 中高级类型的理解？有哪些？",
          link: "/high type",
        },
        {
          text: "说说你对 TypeScript 装饰器的理解？应用场景？",
          link: "/decorator",
        },
        {
          text: "说说对 TypeScript 中命名空间与模块的理解？区别？",
          link: "/namespace_module",
        },
        {
          text: "说说如何在 React 项目中应用 TypeScript？",
          link: "/react",
        },
        {
          text: "说说如何在Vue项目中应用TypeScript？",
          link: "/vue",
        },
      ],
    },
    {
      text: "算法与数据结构系列  ( 已完结..)",
      collapsed: true,
      base: "/algorithm",
      items: [
        {
          text: "说说你对算法的理解？应用场景？",
          link: "/Algorithm",
        },
        {
          text: "说说你对算法中时间复杂度，空间复杂度的理解？如何计算？",
          link: "/time_space",
        },
        {
          text: "说说你对数据结构的理解？有哪些？区别？",
          link: "/structure",
        },
        {
          text: "说说你对栈、队列的理解？应用场景？",
          link: "/stack_queue",
        },
        {
          text: "说说你对链表的理解？常见的操作有哪些？",
          link: "/Linked List",
        },
        {
          text: "说说你对集合的理解？常见的操作有哪些？",
          link: "/set",
        },
        {
          text: "说说你对树的理解？相关的操作有哪些？",
          link: "/tree",
        },
        {
          text: "说说你对堆的理解？如何实现？应用场景？",
          link: "/Heap",
        },
        {
          text: "说说你对图的理解？相关操作有哪些？",
          link: "/graph",
        },
        { text: "说说常见的排序算法有哪些？区别？", link: "/sort" },
        {
          text: "说说你对冒泡排序的理解？如何实现？应用场景？",
          link: "/bubbleSort",
        },
        {
          text: "说说你对选择排序的理解？如何实现？应用场景？",
          link: "/selectionSort",
        },
        {
          text: "说说你对插入排序的理解？如何实现？应用场景？",
          link: "/insertionSort",
        },
        {
          text: "说说你对归并排序的理解？如何实现？应用场景？",
          link: "/mergeSort",
        },
        {
          text: "说说你对快速排序的理解？如何实现？应用场景？",
          link: "/quickSort",
        },
        {
          text: "说说你对二分查找的理解？如何实现？应用场景？",
          link: "/BinarySearch",
        },
        {
          text: "说说说你对分而治之、动态规划的理解？区别？",
          link: "/design1",
        },
        {
          text: "说说你对贪心算法、回溯算法的理解？应用场景？",
          link: "/design2",
        },
      ],
    },
    {
      text: "小程序系列  ( 已完结..)",
      collapsed: true,
      base: "/applet",
      items: [
        { text: "说说你对微信小程序的理解？优缺点？", link: "/applet" },
        {
          text: "说说微信小程序的生命周期函数有哪些？",
          link: "/lifecycle",
        },
        {
          text: "说说微信小程序中路由跳转的方式有哪些？区别？",
          link: "/navigate",
        },
        {
          text: "说说提高微信小程序的应用速度的手段有哪些？",
          link: "/optimization",
        },
        { text: "说说微信小程序的登录流程？", link: "/login" },
        { text: "说说微信小程序的发布流程？", link: "/publish" },
        { text: "说说微信小程序的支付流程？", link: "/requestPayment" },
        { text: "说说微信小程序的实现原理？", link: "/WebView_jscore" },
      ],
    },
    {
      text: "设计模式系列  ( 进行中..)",
      collapsed: true,
      base: "/design",
      items: [
        {
          link: "/design",
          text: "说说对设计模式的理解？常见的设计模式有哪些？",
        },
        {
          link: "/Singleton Pattern",
          text: "说说你对单例模式的理解？如何实现？",
        },
        {
          link: "/Factory Pattern",
          text: "说说你对工厂模式的理解？应用场景？",
        },
        {
          link: "/Strategy Pattern",
          text: "说说你对策略模式的理解？应用场景？",
        },
        {
          link: "/Proxy Pattern",
          text: "说说你对代理模式的理解？应用场景？",
        },
        {
          link: "/Observer Pattern",
          text: "说说你对发布订阅、观察者模式的理解？区别？",
        },
      ],
    },
  ];
}