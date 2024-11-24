import { defineConfig } from "vitepress";
import { nav } from "./configs";
import vitepressProtectPlugin from "vitepress-protect-plugin";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MTKMBOX",
    description: "MTKMBOX-FPGA开发板使用指南",
    lang: "zh-CN",

    locales: {
        root: {
            label: "简体中文",
            lang: "Zh_CN",
        },
        en: {
            label: "English",
            lang: "en",
            link: "/en/",
        },
    },

    appearance: "dark",

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav,

        //本地搜索
        search: {
            provider: "local",
        },

        //页脚
        footer: {
            message: "Released under the MIT License.",
            // 自动更新时间
            copyright: `Copyright © 2023-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京号</a>`,
        },
        //侧边栏文字更改(移动端)
        sidebarMenuLabel: "目录", // 默认值是 'Menu'
        //返回顶部文字修改
        returnToTopLabel: "返回顶部",

        //显示大纲
        outline: {
            level: [2, 4], // 显示2-4级标题
            // level: 'deep', // 显示2-6级标题
            label: "当前页大纲", // 文字显示
            // outline:false, // 关闭标题显示
            // outlineTitle:'当前页大纲', //老方式设置标题
        },

        //自定义上下页名
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        sidebar: generateSidebar({
            /*
             * For detailed instructions, see the links below:
             * https://vitepress-sidebar.jooy2.com/guide/api
             */
            documentRootPath: "/docs", //文档根目录
            // scanStartPath: null,
            // resolvePath: null,
            // useTitleFromFileHeading: true,
            // useTitleFromFrontmatter: true,
            // frontmatterTitleFieldName: 'title',
            // useFolderTitleFromIndexFile: false, //是否使用层级首页文件名做分级标题
            // useFolderLinkFromIndexFile: false, //是否链接至层级首页文件
            // hyphenToSpace: true,
            // underscoreToSpace: true,
            // capitalizeFirst: false,
            // capitalizeEachWords: false,
            collapsed: false, //折叠组关闭
            // collapseDepth: 2, //折叠组2级菜单
            // sortMenusByName: false,
            // sortMenusByFrontmatterOrder: false,
            // sortMenusByFrontmatterDate: false,
            // sortMenusOrderByDescending: false,
            // sortMenusOrderNumericallyFromTitle: false,
            // sortMenusOrderNumericallyFromLink: false,
            // frontmatterOrderDefaultValue: 0,
            manualSortFileNameByPriority: ["01", "02", "03"],
            removePrefixAfterOrdering: true,
            prefixSeparator: ".",
            // excludeFiles: ['first.md', 'secret.md'],
            // excludeFilesByFrontmatterFieldName: 'exclude',
            // excludeFolders: ['secret-folder'],
            // includeDotFiles: false,
            // includeRootIndexFile: false,
            // includeFolderIndexFile: false, //是否包含层级主页
            // includeEmptyFolder: false,
            // rootGroupText: 'Contents',
            // rootGroupLink: 'https://github.com/jooy2',
            // rootGroupCollapsed: false,
            // convertSameNameSubFileToGroupIndexPage: false,
            // folderLinkNotIncludesFileName: false,
            // keepMarkdownSyntaxFromTitle: false,
            // debugPrint: false,
        }),

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
    //禁用F12
    vite: {
        plugins: [
            vitepressProtectPlugin({
                disableF12: true, // 禁用F12开发者模式
                disableCopy: true, // 禁用文本复制
                disableSelect: true, // 禁用文本选择
            }),
        ],
    },
});
