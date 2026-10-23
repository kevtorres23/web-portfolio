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
    identifier: "aguamia",
    name: "AguaMía",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "",
    roles: [],
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
    identifier: "rentapp",
    name: "AguaMía",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "",
    roles: [],
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
    name: "AguaMía",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "",
    roles: [],
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
    name: "AguaMía",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "",
    roles: [],
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
    name: "AguaMía",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "",
    roles: [],
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
    name: "AguaMía",
    cardDesc: "Página web oficial para una planta purificadora de agua.",
    imageUrl: "",
    roles: [],
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
