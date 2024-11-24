import { defineConfig } from "vitepress";
import { nav } from "./configs";
import vitepressProtectPlugin from "vitepress-protect-plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My Awesome Project",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav,

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

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
