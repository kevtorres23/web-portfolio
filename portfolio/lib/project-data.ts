import rentapp from "../../public/project-images/rentapp-card-cover.png";

type Roles = "frontend" | "fullstack" | "design";

type Project =
  | "rentapp"
  | "aguamia"
  | "artex"
  | "correos"
  | "sadasi"
  | "hemisferios";

type ProjectData = {
  identifier: Project;
  name: string;
  cardDesc: string;
  imageUrl: string;
  stack: string[];
  roles: Roles[];
  date: string;
  website: string;
  designFile: string;
  fullDesc: string;
  objective: string;
  results: string;
  car1: string;
  car2: string;
  car3: string;
  car4: string;
};

export const projectData: ProjectData[] = [
  {
    identifier: "rentapp",
    name: "RentApp",
    cardDesc: "Sistema integral de rentas para propietarios e inquilinos.",
    imageUrl: "/project-images/rentapp-card-cover.png",
    roles: ["design", "fullstack"],
    stack: ["React"],
    date: "Agosto 2026",
    website: "",
    designFile: "",
    fullDesc:
      "Sistema integral de rentas para propietarios e inquilinos. Proyecto conformado por una versión web y su aplicación móvil.",
    objective: "",
    results: "",
    car1: "/project-images/rentapp-car-1.png",
    car2: "/project-images/rentapp-car-2.png",
    car3: "/project-images/rentapp-car-3.png",
    car4: "/project-images/rentapp-car-4.png",
  },
  {
    identifier: "hemisferios",
    name: "Hemisferios",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "/project-images/hemisferios-card-cover.png",
    roles: ["design", "fullstack"],
    stack: [],
    date: "Agosto 2026",
    website: "",
    designFile: "",
    fullDesc: "",
    objective: "",
    results: "",
    car1: "/project-images/hemisferios-car-1.png",
    car2: "/project-images/hemisferios-car-2.png",
    car3: "/project-images/hemisferios-car-3.png",
    car4: "/project-images/hemisferios-car-4.png",
  },
  {
    identifier: "correos",
    name: "Correos de México",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "/project-images/correos-card-cover.png",
    roles: ["design"],
    stack: [],
    date: "Agosto 2026",
    website: "",
    designFile: "",
    fullDesc: "",
    objective: "",
    results: "",
    car1: "/project-images/correos-car-1.png",
    car2: "/project-images/correos-car-2.png",
    car3: "/project-images/correos-car-3.png",
    car4: "/project-images/correos-car-4.png",
  },
  {
    identifier: "aguamia",
    name: "AguaMía",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "/project-images/aguamia-card-cover.png",
    roles: ["design", "fullstack"],
    stack: [],
    date: "Agosto 2026",
    website: "",
    designFile: "",
    fullDesc: "",
    objective: "",
    results: "",
    car1: "/project-images/aguamia-car-1.png",
    car2: "/project-images/aguamia-car-2.png",
    car3: "/project-images/aguamia-car-3.png",
    car4: "/project-images/aguamia-car-4.png",
  },
  {
    identifier: "artex",
    name: "Artex Bordados",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "/project-images/artex-card-cover.png",
    roles: ["design", "frontend"],
    stack: [],
    date: "Agosto 2026",
    website: "",
    designFile: "",
    fullDesc: "",
    objective: "",
    results: "",
    car1: "/project-images/artex-car-1.png",
    car2: "/project-images/artex-car-2.png",
    car3: "/project-images/artex-car-3.png",
    car4: "/project-images/artex-car-4.png",
  },
  {
    identifier: "sadasi",
    name: "Sadasi",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "/project-images/sadasi-card-cover.png",
    roles: ["design", "frontend"],
    stack: [],
    date: "Agosto 2026",
    website: "",
    designFile: "",
    fullDesc: "",
    objective: "",
    results: "",
    car1: "/project-images/sadasi-car-1.png",
    car2: "/project-images/sadasi-car-2.png",
    car3: "/project-images/sadasi-car-3.png",
    car4: "/project-images/sadasi-car-4.png",
  },
];
