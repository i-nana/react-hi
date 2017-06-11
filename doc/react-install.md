http://www.bootcdn.cn/react/

react.min.js - React 的核心库
react-dom.min.js - 提供与 DOM 相关的功能
babel.min.js - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平。

```
npm config set registry https://registry.npm.taobao.org
```

> You’ll need to have Node >= 6 on your machine. 

```
npm install -g create-react-app
create-react-app hello-react
```