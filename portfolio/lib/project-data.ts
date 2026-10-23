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
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "/project-images/rentapp-card-cover.png",
    roles: ["design", "fullstack"],
    stack: [],
    date: "Agosto 2026",
    website: "",
    designFile: "",
    fullDesc: "",
    objective: "",
    results: "",
    car1: "",
    car2: "",
    car3: "",
    car4: "",
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
    car1: "",
    car2: "",
    car3: "",
    car4: "",
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
    car1: "",
    car2: "",
    car3: "",
    car4: "",
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
    car1: "",
    car2: "",
    car3: "",
    car4: "",
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
    car1: "",
    car2: "",
    car3: "",
    car4: "",
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
    car1: "",
    car2: "",
    car3: "",
    car4: "",
  },
];
