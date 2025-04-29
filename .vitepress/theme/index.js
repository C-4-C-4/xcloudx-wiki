// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import '@theojs/lumen/theme' //lumen theme 主题导入

// 引用评论组件
import Layout from "./Layout.vue";

//分享组件引用
import { ShareButton } from '@theojs/lumen'

//链接组件引用
import { DocBox, DocBoxCube, DocLinks, DocPill } from '@theojs/lumen'

//视频组件引用
import { DocVideoLink } from '@theojs/lumen'

import './style.css'
import "./blur.css";
import Confetti from "./Confetti.vue";
import './var.css' //自定义组件 CSS 可以通过覆盖根级别的 CSS 变量来自定义默认主题的 CSS

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  //评论组件
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

  
  enhanceApp({ app, router, siteData }) {
    // ...
  },

  //分享组件
  Layout() { 
    return h(DefaultTheme.Layout, null, { 
      'aside-outline-before': () => h(ShareButton) 
    }) 
  } ,

  //链接组件
  enhanceApp: ({ app }) => { 
    app.component('Box', DocBox) 
    app.component('Pill', DocPill) 
    app.component('Links', DocLinks) 
    app.component('BoxCube', DocBoxCube) 
  } ,

  //视频组件
  enhanceApp: ({ app }) => { 
    app.component('Vid', DocVideoLink) 
  } ,

  //首页背景动画组件
  enhanceApp({ app, router }) {
    app.component("Confetti", Confetti); //注册全局组件
  },
}
