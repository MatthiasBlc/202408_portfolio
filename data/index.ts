export const navItems = [
  { name: "Présentation", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const listLogos = ["/logo_js.svg", "/logo_react.svg", "/logo_nextjs.svg", "/logo_Typescript.svg", "/logo_Ruby.svg", "/logo_Ruby_On_Rails.svg", "/logo_node.svg", "/logo_express.svg", "/logo_git.svg", "/logo_docker.svg", "/logo_Postgresql_elephant.svg", "/Logo_C_sharp.svg"];


export const gridItems = [
  {
    id: 1,
    title: "Mes technologies ",
    description: "Passionné et autodidacte, je me forme en permanence pour améliorer et compléter mon environnement technique.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "flex flex-col-reverse ",
    img: "",
    spareImg: "",
    listLogos: ["/logo_js.svg", "/logo_react.svg", "/logo_nextjs.svg", "/logo_Typescript.svg", "/logo_Ruby.svg", "/logo_Ruby_On_Rails.svg", "/logo_node.svg", "/logo_express.svg", "/logo_git.svg", "/logo_docker.svg", "/logo_Postgresql_elephant.svg", "/Logo_C_sharp.svg"],
  },
  {
    id: 2,
    title: "Ouvert au présentiel et au télétravail, partout en France.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "flex flex-col justify-start",
    img: "",
    spareImg: "",
    listLogos: "",
  },
  {
    id: 3,
    title: "Commençons un projet ensemble !",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "flex flex-col justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    listLogos: "",
  },

];



export const projects = [
  {
    category: "Jeu vidéo",
    title: "Kitchen Chaos",
    subtitle: "Prototype de jeu inspiré d'Overcooked",
    src: "/KitchenChaosMenu.gif",
    iconLists: ["/Logo_C_sharp.svg", "/mini_unity.svg"],
    content: "Ce projet a pour but de formation autodidacte au C# et à Unity.",
    extLink: "https://github.com/MatthiasBlc/Kitchen_Chaos_Game",
    extLinkText: "En savoir plus !",
    image: "/KitchenChaosMenu.gif",
    image2: "/KitchenChaosFastGameplay.gif",
  },
  {
    category: "Application web",
    title: "Epidaure",
    subtitle: "Application de gestion de cabinet paramédical",
    src: "/Epidaure.png",
    iconLists: ["/mini_react.svg", "/mini_tailwind.svg", "/logo_Ruby.svg", "/logo_Ruby_On_Rails.svg", "/logo_Postgresql_elephant.svg"],
    content: "Application de gestion de cabinet paramédical : prise de rendez-vous, gestion de salles et de planning.",
    extLink: "https://github.com/MatthiasBlc/Epidaure_Front",
    extLinkText: "En savoir plus !",
    image: "/Epidaure.png",
    image2: "/Epidaure_3.png",
  },
  {
    category: "Application web ",
    title: "Zorya",
    subtitle: "Learning Management System (LMS) pour la cybersécurité",
    src: "/Zorya.png",
    iconLists: ["/logo_Ruby.svg", "/logo_Ruby_On_Rails.svg", "/logo_Postgresql_elephant.svg", "/logo_webhook.svg", "/mini_slack.svg"],
    content: "Learning Management System (LMS) pour les entreprises spécialisées dans la cybersécurité.",
    extLink: "https://github.com/MatthiasBlc/Zorya_THP_Projet_Final",
    extLinkText: "En savoir plus !",
    image: "/Zorya.png",

  },

  // {
  //   category: "Application web",
  //   title: "PixelCat",
  //   subtitle: "Marketplace spécialisée de vente d'images de chats",
  //   src: "/b5.svg",
  //   iconLists: ["/logo_Ruby.svg", "/logo_Ruby_On_Rails.svg", "/logo_Postgresql_elephant.svg"],
  //   content: "Création d'une marketplace spécialisée, destinée à l'achat/vente d'images de chats",
  //   extLink: "https://github.com/MatthiasBlc/PixelCat",
  //   extLinkText: "En savoir plus !",
  //   image: "/Zorya.png",

  // },
];



export const socialMedia = [
  {
    id: 1,
    img: "/mini_github.svg",
    url: "https://www.linkedin.com/in/matthias-bouloc-345067a5/",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/matthias-bouloc-345067a5/",
  },
  // {
  //   id: 3,
  //   img: "/twit.svg",
  //   url: "",
  // },
];