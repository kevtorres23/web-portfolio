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
    cardDesc: "A comprehensive rental management system for landlords and tenants.",
    imageUrl: "/project-images/rentapp-card-cover.png",
    roles: ["design", "fullstack"],
    stack: ["React", "Supabase", "PostgreSQL", "Stripe", "Node.js"],
    date: "October, 2026",
    website: {
      label: "View demo",
      url: "https://rentapp-demo-kevtorres23s-projects.vercel.app/owner/login",
    },
    designFile:
      "https://www.figma.com/design/CuYFUU3aVY4Ks9YrMVIsP4/RentApp?node-id=2238-9269",
    fullDesc:
      "RentApp is a comprehensive rental management system that brings tenants and landlords together in one place. Tenants can easily pay their rent and access important information about their lease. Landlords can create leases, track rent payments, and update important rental details.",
    objective:
      "RentApp aims to provide an easy-to-use, intuitive, dynamic, and adaptable experience. Since the project includes both a web system and a mobile app, it also required a design system that could adapt effectively to both platforms.",
    results:
      "The UI/UX design was completed on schedule, and a comprehensive design system was delivered to maintain visual consistency across the platform. The RentApp web version is nearing public release. The mobile app is in development and is planned for release on the Play Store and App Store.",
    car1: "/project-images/rentapp-car-1.png",
    car2: "/project-images/rentapp-car-2.png",
    car3: "/project-images/rentapp-car-3.png",
    car4: "/project-images/rentapp-car-4.png",
  },
  {
    identifier: "hemisferios",
    name: "Hemisferios",
    cardDesc: "A complete web system featuring a website and appointment manager.",
    imageUrl: "/project-images/hemisferios-card-cover.png",
    roles: ["design", "fullstack"],
    stack: ["React", "Next.js", "MongoDB", "Node.js", "Express"],
    date: "April 2026",
    website: {
      label: "hemisferios-clinica.com",
      url: "https://hemisferios-clinica.com",
    },
    designFile:
      "https://www.figma.com/design/odQ5eXk7ePOTURfikYaQxX/Hemisferios-Web-System?node-id=549-26050&t=6Iw3fjxvCD1MFnj5-1",
    fullDesc:
      "Hemisferios is a speech and language therapy clinic for children. This system includes both a website and an appointment platform that administrators can use for a range of tasks. Visitors can book appointments through the website, while staff can manage appointments, patients, therapists, and contact inquiries.",
    objective:
      "Hemisferios needed a digital solution to strengthen its online presence and let people book appointments without visiting the clinic. Administrative staff also needed a platform to manage their processes and daily tasks quickly and efficiently.",
    results:
      "The UI/UX design and implementation of the screens were completed successfully. Following Hemisferios' established visual identity, the result includes an engaging, easy-to-use website for visitors and prospective clients, along with an efficient web system that helps staff manage operations more effectively.",
    car1: "/project-images/hemisferios-car-1.png",
    car2: "/project-images/hemisferios-car-2.png",
    car3: "/project-images/hemisferios-car-3.png",
    car4: "/project-images/hemisferios-car-4.png",
  },
  {
    identifier: "correos",
    name: "Correos de México",
    cardDesc: "UI/UX design work for the official Correos de México mobile app.",
    imageUrl: "/project-images/correos-card-cover.png",
    roles: ["design"],
    stack: [],
    date: "September, 2025",
    website: {label: "", url: "none"},
    designFile:
      "https://www.figma.com/design/q0dZGu8RM46raNQwbibhbg/Correos-de-M%C3%A9xico?node-id=1-2498",
    fullDesc:
      "I had the opportunity to collaborate with a team on the UI/UX design for Correos de México, redesigning both the look and functionality of Mexico's official postal service platform. My primary contribution was designing the platform's administrator and vendor modules, including web and mobile dashboards.",
    objective:
      "The goal was to build a comprehensive system for Correos de México's administrative and operations staff. The UI/UX work focused on a web platform and mobile app that could efficiently manage the team's day-to-day processes and help streamline their work.",
    results:
      "I designed interfaces for both the mobile app and website, following Correos de México's established visual identity. I focused on creating a smooth, intuitive user experience that anyone at the company could use with ease.",
    car1: "/project-images/correos-car-1.png",
    car2: "/project-images/correos-car-2.png",
    car3: "/project-images/correos-car-3.png",
    car4: "/project-images/correos-car-4.png",
  },
  {
    identifier: "aguamia",
    name: "AguaMía",
    cardDesc: "Official website for a water purification plant.",
    imageUrl: "/project-images/aguamia-card-cover.png",
    roles: ["design", "fullstack"],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    date: "August, 2026",
    website: {
      label: "aguamia-purificadora.vercel.app",
      url: "https://aguamia-purificadora.vercel.app/",
    },
    designFile:
      "https://www.figma.com/design/OyubYoxIV8FDCeT9zHdhFY/AguaM%C3%ADa-Web?node-id=0-1",
    fullDesc:
      "AguaMía is a water purification plant based in Durango, Mexico. Its rapid growth and steady stream of customers made it clear that the business needed to expand digitally and establish an online presence.",
    objective:
      "The project set out to create a website where people could learn more about the purification plant, sign up for a family plan, or order bottled water. The site needed to bridge the gap between the business and its customers.",
    results:
      "The website's UI/UX design focuses on showing customers what goes into AguaMía's operations. Visitors can learn about the tanks, purification filters, and internal processes, giving them confidence that the water they take home is of the highest quality.",
    car1: "/project-images/aguamia-car-1.png",
    car2: "/project-images/aguamia-car-2.png",
    car3: "/project-images/aguamia-car-3.png",
    car4: "/project-images/aguamia-car-4.png",
  },
  {
    identifier: "artex",
    name: "Artex Bordados",
    cardDesc: "Official website and online store for Artex, an embroidery and printing shop.",
    imageUrl: "/project-images/artex-card-cover.png",
    roles: ["design", "frontend"],
    stack: ["React", "Tailwind CSS", "Flowbite"],
    date: "September, 2024",
    website: {
      label: "artex-store.vercel.app",
      url: "https://artex-store.vercel.app/",
    },
    designFile:
      "https://www.figma.com/design/y8WLlL5nPLwmsoicMfOxP3/Artex-Bordados?node-id=0-1",
    fullDesc:
      "Artex Bordados specializes in customizing textiles with embroidery, vinyl printing, and sublimation. This project involved designing and developing a website for the business. It was the first real-world project I had the opportunity to work on, and it helped me build my skills in web design and development.",
    objective:
      "The goal of the Artex website was to increase overall sales by giving customers a new way to order embroidered, vinyl, and printed products, helping the business reach more customers and prospective buyers.",
    results:
      "I designed and implemented the interfaces in React, ensuring the site's core features worked end to end, including the shopping cart, checkout, and garment customization. The frontend integrated successfully with the backend, and the website moved into deployment.",
    car1: "/project-images/artex-car-1.png",
    car2: "/project-images/artex-car-2.png",
    car3: "/project-images/artex-car-3.png",
    car4: "/project-images/artex-car-4.png",
  },
  {
    identifier: "sadasi",
    name: "Sadasi",
    cardDesc: "Management system for the internal team at Grupo Sadasi, a Mexican real estate developer.",
    imageUrl: "/project-images/sadasi-card-cover.png",
    roles: ["design", "frontend"],
    stack: ["React", "Tailwind CSS", "Shadcn/ui"],
    date: "April 2025",
    website: {label: "", url: "none"},
    designFile:
      "https://www.figma.com/design/6JO3OJXgGnX6Tgi01crKPW/Sadasi-Management-System?node-id=93-463",
    fullDesc:
      "Grupo Sadasi is a Mexican company specializing in residential development, with more than 40 years of experience. This project is a web system designed to make it easier to manage, search, and update the company's developments.",
    objective:
      "The goal was to implement a digital solution that would help the Sadasi team efficiently manage residential developments and clients. The internal team needed to perform essential tasks such as registering developments, linking and unlinking contracts, and editing space views.",
    results:
      "The designed interfaces were successfully implemented alongside the rest of the project team. Following best practices, they became part of the comprehensive system used by Sadasi employees and collaborators.",
    car1: "/project-images/sadasi-car-1.png",
    car2: "/project-images/sadasi-car-2.png",
    car3: "/project-images/sadasi-car-3.png",
    car4: "/project-images/sadasi-car-4.png",
  },
];
