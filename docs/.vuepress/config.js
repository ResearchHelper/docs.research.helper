import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/docs.research.helper/",
  locales: {
    "/": {
      lang: "English",
      title: "Research Helper",
      description: "Documentation for Research Helper",
    },
    "/zh_CN/": {
      lang: "简体中文",
      title: "研究小助手",
      description: "研究小助手开发文档",
    },
  },

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh_CN": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
