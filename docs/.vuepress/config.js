module.exports = {
  base: "/2020.1_G10_QRodizio/",

  title: "QRodízio",

  themeConfig: {
    logo: "/qr_code_icon.png",
    nav: [
      { text: "Documentação", link: "/documentacao" },
      {
        text: "Github",
        link: "https://github.com/UnBArqDsw/2020.1_G10_QRodizio",
      },
    ],

    /*
    sidebar: {
      "/Base/":["5W2H", "mapa_mental.md", "rich_picture.md"],
    },
    */
    sidebar: [
      {
        title: "Termo de Abertura",
        path: "/termo_de_abertura",
      },

      {
        title: "Base", // required
        // path: "/base/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          "/base/5W2H",
          "/base/mapa_mental",
          "/base/rich_picture",
          "/base/diagrama_ishikawa",
        ],
      },

      {
        title: "Elicitação",
        collapsable: true,
        children: [
          "/elicitacao/tecnica1",
          "/elicitacao/tecnica2",
          "/elicitacao/tecnica3",
        ],
      },
    ],
  },
};
