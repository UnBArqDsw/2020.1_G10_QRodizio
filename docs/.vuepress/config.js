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
        title: "Plano de Gerenciamento de Riscos",
        path: "/gerenciamento_risco",
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
          "/base/brainstorming",
          "/base/design_sprint",
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

      {
        title: "1.2 Módulo Processos/Metodologias/Abordagens(Apresentação)",
        collapsable: true,
        children: [
          "/metodologia/metodologia_apresentacao",

        ],
      },

      {
        title: "1.3 Módulo Processos/Metodologias/Abordagens(Modelagem BPMN)",
        collapsable: true,
        children: [
          "/modelagem/BPMN1",
          "/modelagem/BPMN2",
          "/modelagem/BPMN3",
        ],
      },
    ],
  },
};
