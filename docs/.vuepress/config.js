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
        title: "Backlog",
        collapsable: true,
        children: [
          {
            title: "Backlog v1",
            path: "/backlog/backlog_produtov1.md",
          },
          {
            title: "Backlog v2",
            path: "/backlog/backlog_produtov2.md",
          },
        ]
      },
      {
        title: "Termo de Abertura",
        path: "/termo_de_abertura",
      },
      {
        title: "Plano de Gerenciamento de Riscos",
        path: "/gerenciamento_risco",
      },
      {
        title: "Protótipo",
        path: "/prototipo",
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
          "/base/lexicos",
          "/base/metodologia",
          "/base/diagrama_comunicacao",
          "/base/modelagem_BPMN"
        ],
      },
      {
        title: "Modelagem",
        collapsable: true,
        children: [
          {
            title: "Diagramas Dinâmicos",
            collapsable: true,
            children: [
              "/modelagem/diagramas_dinamicos/diagramas_atividade",
              "/modelagem/diagramas_dinamicos/diagrama_sequencia",
              "/modelagem/diagramas_dinamicos/diagramas_estado",
              "/modelagem/diagramas_dinamicos/diagrama_casos_de_uso"
            ]
          },
          {
            title: "Diagramas Estáticos",
            collapsable: true,
            children: [
              "/modelagem/diagramas_estaticos/diagrama_classes",
              "/modelagem/diagramas_estaticos/diagramas_pacote",
            ]
          }
        ],
      },

      {
        title: "Iniciativas extra",
        collapsable: true,
        children: [
          "/iniciativas_extra/branches",
          "/iniciativas_extra/issues",
          "/iniciativas_extra/CODE_OF_CONDUCT",
          "/iniciativas_extra/NFR"
        ],
      },

      {
        title: "Reuniões",
        collapsable: true,
        children: [
          "/reunioes/sprint0",
          "/reunioes/sprint1",
          "/reunioes/sprint2"
        ],
      },
    ],
  },
};
