import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme, defineUserConfig } from "vuepress";

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
  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: "https://github.com/ResearchHelper/research-helper",
    navbar: [
      "/guide/user/README.md",
      "/guide/developer/introduction.md"
    ],
    sidebar: {
      "/guide/user/": [],
      "/guide/developer/": [
        "introduction",
        "library-page",
        "pdf-reader",
        "note-editor",
        "graph-view",
        "layout-control",
        "interaction"
      ]
    }
  }),

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
