module.exports = {
  title: "Gonph's Profile" ,
  description: "龚朋辉的个人简历",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: [
    ['@vuepress/back-to-top', true]
  ],
  markdown: {
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    }
  },
  themeConfig: {
    nav: [
      { text: 'Profile', link: '/' },
      { text: 'Blog', link: 'https://juejin.im/user/57beefb6efa631005a9edd7c' },
      { text: 'Github', link: 'https://github.com/gongph' },
    ]
  }
}
