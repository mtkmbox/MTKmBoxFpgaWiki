import { defineConfig } from 'vitepress'
import { nav } from './configs/index.mts'
import { generateSidebar } from 'vitepress-sidebar';



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MTKMBOX",
  description: "MTKMBOX-FPGA开发板使用指南",
  lang: 'zh-CN',
  base:'/docs/',
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
  },
  //fav图标
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  //启用深色模式
  appearance: 'dark',
  //主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //左上角logo
    logo: '../src/img/Logo.png',

    //搜索
    //本地搜索
    search: {
      provider: 'local'
    },

    //页脚
    footer: {
      message: 'Released under the MIT License.',
      // 自动更新时间
      copyright: `Copyright © 2023-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>`,
    },
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录', // 默认值是 'Menu'
    //返回顶部文字修改
    returnToTopLabel: '返回顶部',

    //显示大纲
    outline: {
      level: [2, 4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
      // outline:false, // 关闭标题显示
      // outlineTitle:'当前页大纲', //老方式设置标题
    },

    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    //导航栏
    nav,

    //侧边栏
    sidebar: generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://vitepress-sidebar.jooy2.com/guide/api
       */
      documentRootPath: '/docs', //文档根目录
      // scanStartPath: null,
      // resolvePath: null,
      // useTitleFromFileHeading: true,
      // useTitleFromFrontmatter: true,
      // frontmatterTitleFieldName: 'title',
      // useFolderTitleFromIndexFile: false,
      // useFolderLinkFromIndexFile: false,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      // capitalizeFirst: false,
      // capitalizeEachWords: false,
      collapsed: false,
      // collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusByFrontmatterDate: false,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: false,
      // sortMenusOrderNumericallyFromLink: false,
      // frontmatterOrderDefaultValue: 0,
      manualSortFileNameByPriority: ['01', '02', '03'],
      removePrefixAfterOrdering: true,
      prefixSeparator: '.',
      // excludeFiles: ['first.md', 'secret.md'],
      // excludeFilesByFrontmatterFieldName: 'exclude',
      // excludeFolders: ['secret-folder'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: false,
    }),
    //最后更新时间
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  // 站点地图
  // sitemap: {
  //   hostname: 'https://你的网址.com',
  // },
})
