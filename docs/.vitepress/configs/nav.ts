import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
    { text: "首页", link: "/" },
    {
        text: "指南",
        link: "/01.FPGA/01.简介/02.准备工作",
    },
    {
        text: "PCILeech Wiki",
        link: "/02.Api 示例/01.PCILeechWiki/Home",
    },
    {
        text: "MemProcFS Wiki",
        link: "/02.Api 示例/01.PCILeechWiki/Home",
    },
    {
        text: "1.5.0",
        items: [
            { text: "更新日志", link: "https://github.com/" },
            { text: "参与共享", link: "/HardAndSoftWare" },
        ],
    },
];
