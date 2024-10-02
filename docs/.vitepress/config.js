module.exports = {
  title: 'WHUCodingAndOpen',
  description: 'WHU编程交流和开源社区',
  base: "/whucao/",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" }, 
      { text: "技术教程", link: "/tech/index.md" }, 
      { text: "资料整理", link: "/zip/index.md" }, 
      { text: "新生指南", link: "/guide/index.md" }, 
      { text: "技术工具", link: "/tools/index.md" }, 
      { text: "专项计划", link: "/solo/index.md" }, 
      { text: "保研经验", link: "/master/index.md" }, 
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/WHUCodingAndOpen" }],
    footer: {
      message: "Released under the GPLV3 License.",
      copyright: "Copyright © 2022-2023",
    }
  },
}