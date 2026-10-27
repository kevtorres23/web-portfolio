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
      "RentApp es un sistema integral de rentas que une a inquilinos y a propietarios en un solo lugar. Le permite a los usuarios inquilinos pagar su renta con facilidad y acceder a información valiosa de su contrato. Por el otro lado, les permite a los usuarios arrendadores generar contratos, llevar un control de sus pagos de renta y actualizar cualquier información importante de sus arrendamientos.",
    objective:
      "El objetivo de RentApp es proporcionar un espacio fácil de utilizar, intuitivo, dinámico y adaptable. Dado que el proyecto consiste tanto en un sistema web como en su versión de aplicación móvil, se buscaba también crear un sistema de diseño que fuera capaz de adaptarse de la mejor manera a estas dos presentaciones o versiones.",
    results:
      "El diseño UI/UX pudo completarse en tiempo y forma, y se entregó un sistema de diseño completo que mantuviera la consistencia visual en toda la plataforma. La versión web de RentApp está próxima a publicarse para que cualquier persona pueda utilizarla. La versión móvil está en desarrollo, y se planea desplegarse en la Play Store y en la App Store.",
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
    stack: ["React", "Next.js", "MongoDB", "Node.js", "Express"],
    date: "Agosto 2026",
    website: "",
    designFile: "",
    fullDesc:
      "Hemisferios es una clínica de terapia de comunicación y lenguaje enfocada en niños. Este sistema funciona tanto como una página web como un sistema de citas que los administradores del centro pueden utilizar para diversas tareas. La página permite a los usuarios realizar una cita en el centro, mientras que el sistema permite monitorear, además de citas, pacientes, terapeutas y comentarios de contacto.",
    objective:
      "En Hemisferios, buscaban una solución digital que les permitiera tener más presencia en línea y que las personas pudieran así agendar una cita sin necesidad de acudir a las oficinas. Asimismo, el personal administrativo necesitaba un espacio que les permitiera llevar el control de sus procesos y activdades administrativas de una manera rápida y eficaz.",
    results: "La fase de diseño UI/UX y la implementación en código de las pantallas fue exitosa. Se siguió la línea de diseño y elementos de marca ya establecidos por Hemisferios, por lo que el resultado está conformado por una página web llamativa y fácil de usar para usuarios y nuevos clientes, y en un sistema web eficiente que les permite al personal de Hemisferios llevar un control operativo de una manera más ágil.",
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
