### React.js 基本环境安装

#### 1. 直接在页面中使用

我们可以在官网 [http://facebook.github.io/react/](http://facebook.github.io/react/)下载最新版，也可以使用cdn库
，比如[BootCDN](http://www.bootcdn.cn/react/)。

我们需要引入三个库：

+ `react.min.js` - React 的核心库
+ `react-dom.min.js` - 提供与 DOM 相关的功能
+ `babel.min.js` - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平。


``` html 
<script src="//cdn.bootcss.com/react/15.5.4/react.min.js"></script>
<script src="//cdn.bootcss.com/react/15.5.4/react-dom.min.js"></script>
<script src="//cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
```

#### 2. 创建一个单页面应用

我们使用FaceBook官方推出的[`Create-React-App`](https://github.com/facebookincubator/create-react-app)脚手架，零配置搭建基于webpack的React开发环境，它还内置了热更新等功能。

> You’ll need to have Node >= 6 on your machine.

使用 React.js 不管在开发阶段生产阶段都需要一堆工具和库辅助，编译阶段你需要借助 Babel；需要 Redux 等第三方的状态管理工具来组织代码；如果你要写单页面应用那么你需要 React-router。这就是所谓的__“React.js全家桶”__。

为了提高安装速度，我们可以修改npm源为国内的taobao源

``` sql
npm config set registry https://registry.npm.taobao.org

npm install -g create-react-app
create-react-app react-hi
```