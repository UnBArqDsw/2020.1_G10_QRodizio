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
      "/Base/":["5W2H", "Mapa_Mental.md", "Rich_Picture.md"],
    },
    */
    sidebar: [
      {
        title: "Termo de Abertura",
        path: "/Termo_de_Abertura",
      },

      {
        title: "Base", // required
        // path: "/base/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          "/base/5W2H",
          "/base/Mapa_Mental",
          "/base/Rich_Picture",
          "/base/Diagrama_Ishikawa",
        ],
      },

      {
        title: "Elicitação",
        collapsable: true,
        children: [
          "/Elicitacao/tecnica1",
          "/Elicitacao/tecnica2",
          "/Elicitacao/tecnica3",
        ],
      },
    ],
  },
};
