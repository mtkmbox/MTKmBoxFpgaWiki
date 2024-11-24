import DefaultTheme from 'vitepress/theme'
import './style/index.css';
import DataPanel from "./components/DataPanel.vue";


export default {
  extends: DefaultTheme,
  enhanceApp({app}) { 
    // 注册全局组件
    app.component('DataPanel' , DataPanel)
  }
  // ...DefaultTheme, //或者这样写也可
}