import { defineConfig } from 'vitepress'

//图片描述组件引用
import { figure } from '@mdit/plugin-figure'


// https://vitepress.dev/reference/site-config
export default defineConfig({
//  base: '/xcloudx-wiki/',
  lang: 'zh-CN',
  title: "XCloudX Wiki",
  description: "优秀的Wiki站点",
//  appearance:'dark',  //默认深色模式

  //使用 iconify-icon 组件 
   vue: { 
    template: { 
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' } 
    } 
  } ,

  // 图片描述组件
  markdown: { 
    config: (md) => { 
      md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true }) 
    } 
  } ,

  //网站标签栏图标
  head: [
    ['link', { rel: 'icon', href: '/wiki-logo.webp' }]
  ],

 //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
  //  en: {
  //   label: 'English',
  //    lang: 'en',
  //    link: '/en/',
  //  }
  },

  //左上角logo
  themeConfig: {
    logo: '/wiki-logo.webp',
    search: {
      provider: 'local'
    },

    //上下页标题
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    //编辑本页
    editLink: {
      pattern: 'https://github.com/C-4-C-4/xcloudx-wiki/tree/master/:path',
      text: '在GitHub上编辑此页'
    },

    //最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    //顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '攻略', link: '/Strategy' },
      { text: '关于', link: '/index/其它/关于.md' },
    ],

    //侧边栏
    sidebar: [
      {
        text: '基础信息',
        collapsed: false,
        items:[
          { text: '⚠️须知' , link: '/Strategy' },
          { text: '👁服务器规定必看' , link: '/index/基础信息/服务器规定(必看).md' },
          { text: '🧭新手指南' , link: '/index/基础信息/新手指南.md' },
          { text: '👑头衔称号' , link: '/index/基础信息/头衔称号.md' },
          { text: '🏆服务器活动＆宝箱抽奖' , link: '/index/基础信息/服务器活动＆宝箱抽奖.md' },
        ],
      },
      {
        text: '拓展玩法',
        collapsed: false,
        items:[
          { text: '🧛世界Boss', link: '/index/拓展玩法/世界Boss.md' },
          { text: '📖拓展附魔书系统', link: '/index/拓展玩法/拓展附魔书系统.md' },
          { text: '👨‍🌾星露谷农作物系统', link: '/index/拓展玩法/星露谷农作物系统.md' },
          { text: '💼职业系统', link: '/index/拓展玩法/职业系统.md' },
          { text: '🎣钓鱼系统', link: '/index/拓展玩法/钓鱼系统.md' },
          { text: '🐈宠物系统', link: '/index/拓展玩法/宠物系统.md' },
          { text: '🟧更多建筑方块', link: '/index/拓展玩法/更多建筑方块.md' },
          { text: '🗡更多武器&道具', link: '/index/拓展玩法/更多武器＆道具.md' },
        ],
      },
      {
        text: '玩家社区',
        collapsed: false,
        items:[
          { text: '🏙小镇&城市', link: '/index/玩家社区/小镇&城市.md' },
          { text: '🏪商店&商会', link: '/index/玩家社区/商店&商会.md' },
          { text: '🏛优秀建筑&奇观', link: '/index/玩家社区/优秀建筑&奇观.md' },
          { text: '💟公益', link: '/index/玩家社区/公益.md' },
        ],
      },
      {
        text: '其它',
        collapsed: false,
        items:[
          { text: '⛔封神榜', link: '/index/其它/封神榜.md' },
          { text: '🎖贡献榜', link: '/index/其它/贡献榜.md' },
          { text: '🔔关于', link: '/index/其它/关于.md' },
        ],
      },
    ],
    

    //侧边栏大纲
    outline: { 
      level: [1,6], // 显示2-4级标题
    //level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/C-4-C-4/xcloudx-wiki' }
    ],
    footer: {
      message: '<a href="https://icp.govs.xin/id.php?keyword=20252025" target="_blank">信ICP备20252025号</a>',
      copyright: '<a href="https://www.govs.cc/id.php?keyword=20252025" target="_blank">嘣ICP备20252025号</a>',
    }
  }
})
