type Roles = "frontend" | "fullstack" | "design";

type Project =
  | "rentapp"
  | "aguamia"
  | "artex"
  | "correos"
  | "sadasi"
  | "hemisferios";

type WebsiteData = {
  label: string;
  url: string;
};

type ProjectData = {
  identifier: Project;
  name: string;
  cardDesc: string;
  imageUrl: string;
  stack: string[];
  roles: Roles[];
  date: string;
  website: WebsiteData;
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
    stack: ["React", "Supabase", "PostgreSQL", "Stripe", "Node.js"],
    date: "Agosto 2026",
    website: {
      label: "Ver demo",
      url: "https://rentapp-demo-kevtorres23s-projects.vercel.app/owner/login",
    },
    designFile:
      "https://www.figma.com/design/CuYFUU3aVY4Ks9YrMVIsP4/RentApp?node-id=2238-9269",
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
    cardDesc: "Sistema web integral conformado por una página web y un gestor de citas.",
    imageUrl: "/project-images/hemisferios-card-cover.png",
    roles: ["design", "fullstack"],
    stack: ["React", "Next.js", "MongoDB", "Node.js", "Express"],
    date: "Agosto 2026",
    website: {
      label: "hemisferios-clinica.com",
      url: "https://hemisferios-clinica.com",
    },
    designFile:
      "https://www.figma.com/design/odQ5eXk7ePOTURfikYaQxX/Hemisferios-Web-System?node-id=549-26050&t=6Iw3fjxvCD1MFnj5-1",
    fullDesc:
      "Hemisferios es una clínica de terapia de comunicación y lenguaje enfocada en niños. Este sistema funciona tanto como una página web como un sistema de citas que los administradores del centro pueden utilizar para diversas tareas. La página permite a los usuarios realizar una cita en el centro, mientras que el sistema permite monitorear, además de citas, pacientes, terapeutas y comentarios de contacto.",
    objective:
      "En Hemisferios, buscaban una solución digital que les permitiera tener más presencia en línea y que las personas pudieran así agendar una cita sin necesidad de acudir a las oficinas. Asimismo, el personal administrativo necesitaba un espacio que les permitiera llevar el control de sus procesos y activdades administrativas de una manera rápida y eficaz.",
    results:
      "La fase de diseño UI/UX y la implementación en código de las pantallas fue exitosa. Se siguió la línea de diseño y elementos de marca ya establecidos por Hemisferios, por lo que el resultado está conformado por una página web llamativa y fácil de usar para usuarios y nuevos clientes, y en un sistema web eficiente que les permite al personal de Hemisferios llevar un control operativo de una manera más ágil.",
    car1: "/project-images/hemisferios-car-1.png",
    car2: "/project-images/hemisferios-car-2.png",
    car3: "/project-images/hemisferios-car-3.png",
    car4: "/project-images/hemisferios-car-4.png",
  },
  {
    identifier: "correos",
    name: "Correos de México",
    cardDesc: "Trabajo de diseño UI/UX para la aplicación móvil oficial de Correos de México.",
    imageUrl: "/project-images/correos-card-cover.png",
    roles: ["design"],
    stack: [],
    date: "Agosto 2026",
    website: {label: "", url: "none"},
    designFile:
      "https://www.figma.com/design/q0dZGu8RM46raNQwbibhbg/Correos-de-M%C3%A9xico?node-id=1-2498",
    fullDesc:
      "Tuve la oportunidad de colaborar en el área de diseño UI/UX junto a otros compañeros, para el proyecto de Correos de México el cual consistió en un rediseño tanto visual como funcional de la plataforma oficial del servicio postal mexicano. Mi aportación principal fue en el diseño de los módulos correspondientes a los administradores y vendedores de la plataforma, para los que diseñé páneles web y móviles",
    objective:
      "El objetivo de este proyecto era construir un sistema integral para el personal administrativo y operativo de Correos de México. En el área de diseño UI/UX, se buscaba plataforma y una aplicación móvil que gestionara eficazmente los procesos que el personal de la empresa realiza con frecuencia para optimizar sus actividades lo mejor posible.",
    results:
      "Diseñé interfaces tanto para la aplicación móvil como para el sitio web, siguiendo la línea visual ya establecida en Correos de México. Asimismo, mi enfoque en este trabajo fue mantener una experiencia de usuario fluida e intuitiva, de manera que cualquier persona dentro de la compañía pudiera usarla con total facilidad.",
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
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    date: "Agosto 2026",
    website: {
      label: "aguamia-purificadora.vercel.app",
      url: "https://aguamia-purificadora.vercel.app/",
    },
    designFile:
      "https://www.figma.com/design/OyubYoxIV8FDCeT9zHdhFY/AguaM%C3%ADa-Web?node-id=0-1",
    fullDesc:
      "AguaMía es una planta purificadora de agua establecida en la ciudad de Durango, Durango. Su rápido crecimiento y su afluencia continua fueron los indicadores de que también necesitaban expandirse digitalmente y marcar su presencia en el Internet.",
    objective:
      "Este proyecto busca crear un espacio web en el que las personas puedan conocer más a profundidad a la purificadora, así como también adquirir un plan familiar o realizar un pedido de agua embotellada. Debe funcionar como el puente entre la empresa y el cliente, y poder traer a ambos más cerca el uno del otro.",
    results:
      "El diseño UI/UX del sitio web fue construido con un enfoque en dar a conocer a profundidad lo que hay debajo de AguaMía. Con esta solución, los clientes pueden leer información sobre los tanques, filtros purificadores y procesos internos, esto con el objetivo de brindarles la total confianza de que el agua que se llevan a su casa es de la mejor calidad.",
    car1: "/project-images/aguamia-car-1.png",
    car2: "/project-images/aguamia-car-2.png",
    car3: "/project-images/aguamia-car-3.png",
    car4: "/project-images/aguamia-car-4.png",
  },
  {
    identifier: "artex",
    name: "Artex Bordados",
    cardDesc: "Página web y ecommerce oficial de Artex, una tienda de bordados e impresiones.",
    imageUrl: "/project-images/artex-card-cover.png",
    roles: ["design", "frontend"],
    stack: ["React", "Tailwind CSS", "Flowbite"],
    date: "Agosto 2026",
    website: {
      label: "artex-store.vercel.app",
      url: "https://artex-store.vercel.app/",
    },
    designFile:
      "https://www.figma.com/design/y8WLlL5nPLwmsoicMfOxP3/Artex-Bordados?node-id=0-1",
    fullDesc:
      "Artex Bordados es una empresa dedicada a la personalización de textiles con bordados, impresiones en vinil y sublimación. Este proyecto consistió en el diseño y desarrollo de una página web para este negocio. Fue el primer proyecto real en el que tuve la oportunidad de participar. Gracias a él, obtuve nuevos conocimientos en el área del diseño y desarrollo web.",
    objective:
      "El objetivo de la página web de Artex era aumentar las ventas generales de la tienda al ofrecer a los clientes una nueva manera de adquirir bordados, viniles o impresiones. De esta manera, Artex tendría un mayor flujo de clientes e interesados.",
    results:
      "Diseñé e implementé en código las interfaces con React, asegurando que los puntos principales de la página funcionaran en su totalidad, lo que incluye el carrito de compras, el checkout y la personalización de una prenda. El frontend pudo adaptarse correctamente con el backend y la página web pasó a la fase de despliegue correctamente.",
    car1: "/project-images/artex-car-1.png",
    car2: "/project-images/artex-car-2.png",
    car3: "/project-images/artex-car-3.png",
    car4: "/project-images/artex-car-4.png",
  },
  {
    identifier: "sadasi",
    name: "Sadasi",
    cardDesc: "Sistema de administración para el equipo interno de Grupo Sadasi, una desarrolladora inmobiliaria en México.",
    imageUrl: "/project-images/sadasi-card-cover.png",
    roles: ["design", "frontend"],
    stack: ["React", "Tailwind CSS", "Shadcn/ui"],
    date: "Agosto 2026",
    website: {label: "", url: "none"},
    designFile:
      "https://www.figma.com/design/6JO3OJXgGnX6Tgi01crKPW/Sadasi-Management-System?node-id=93-463",
    fullDesc:
      "Grupo Sadasi es una empresa mexicana especializada en el desarrollo de conjuntos habitacionales con más de 40 años de experiencia. Este proyecto consiste en un sistema web dedicado a facilitar la gestión, búsqueda y actualización de los proyectos mantenidos por la compañía.",
    objective:
      "El objetivo era implementar una solución digital que les permitiera al equipo de Sadasi administrar eficientemente sus conjuntos habitacionales y clientes. El equipo interno debe poder realizar diversas operaciones básicas y fundamentales, como, registrar un conjunto, enlazar y desenlazar contratos y modificar las vistas de los espacios.",
    results:
      "Las interfaces diseñadas fueron correctamente implementadas en código, en conjunto con el resto del equipo del proyecto. Se siguieron las mejores prácticas y pasaron a formar parte del sistema integral utilizado por los miembros y colaboradores de Sadasi.",
    car1: "/project-images/sadasi-car-1.png",
    car2: "/project-images/sadasi-car-2.png",
    car3: "/project-images/sadasi-car-3.png",
    car4: "/project-images/sadasi-car-4.png",
  },
];
