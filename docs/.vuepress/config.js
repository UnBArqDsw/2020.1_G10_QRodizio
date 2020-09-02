module.exports = {
  base: "/2020.1_G10_QRodizio/",

  title: "QRodízio",

  themeConfig: {
    logo: "/qr_code_icon.png",
    nav: [{ text: "Documentação", link: "/documentacao" }],

    /*
    sidebar: {
      "/Base/":["5W2H", "Mapa_Mental.md", "Rich_Picture.md"],
    },
    */
    sidebar: [
      {
        title: "Base", // required
        // path: "/base/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          "/base/5W2H", "/base/Mapa_Mental", "/base/Rich_Picture"
        ],
      },

      {
        title: "Elicitação",
        collapsable: true,
        children: [
          "/Elicitacao/tecnica1", "/Elicitacao/tecnica2", "/Elicitacao/tecnica3"
        ],
      }
    ],
  },
};
