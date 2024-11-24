import DefaultTheme from "vitepress/theme";
import "./style/index.css";
import DataPanel from "./components/DataPanel.vue";
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // 注册全局组件
        app.component("DataPanel", DataPanel);
    },
    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
    // ...DefaultTheme, //或者这样写也可
};
