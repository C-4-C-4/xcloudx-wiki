// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import '@theojs/lumen/theme' //lumen theme 主题导入

// 引用评论组件
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

//分享组件引用
import { ShareButton } from '@theojs/lumen'

//链接组件引用
import { DocBox, DocBoxCube, DocLinks, DocPill } from '@theojs/lumen'

//视频组件引用
import { DocVideoLink } from '@theojs/lumen'

import './style.css'
import "./blur.css";
import confetti from "./Confetti.vue";//引用纸屑组件
import './var.css' //自定义组件 CSS 可以通过覆盖根级别的 CSS 变量来自定义默认主题的 CSS


/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

  //评论组件
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();
    giscusTalk({
      repo: 'C-4-C-4/xcloudx-wiki', //仓库
      repoId: 'R_kgDOOhCrvw', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOOhCrv84Cpk0i', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
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
  enhanceApp(ctx) {
    const { app } = ctx;
    app.component("confetti", confetti);
  },
}
