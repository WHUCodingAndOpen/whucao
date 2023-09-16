module.exports = {
  title: 'WHUCodingAndOpen',
  description: 'WHU编程交流和开源社区',
  base: "/whucao/",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" }, 
      { text: "技术教程", link: "/tech" }, 
      { text: "资料整理", link: "/zip" }, 
      { text: "新生指南", link: "/guide" }, 
      { text: "技术工具", link: "/tools" }, 
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/WHUCodingAndOpen" }],
    footer: {
      message: "Released under the GPLV3 License.",
      copyright: "Copyright © 2023",
    }
  },
}