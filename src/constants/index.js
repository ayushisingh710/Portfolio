export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "BlogSpace - A Blog Writing Platform",
    desc: "BlogSpace is a dynamic and user-friendly blogging platform that allows users to create, manage, and share blog posts. The website features an intuitive interface where users can register, log in, and start writing immediately. It supports markdown formatting, allowing for rich text content creation.",
    subdesc:
      "Built as a unique blog app with Next.js 14, Tailwind CSS, TypeScript, BlogSpace is designed for optimal performance and scalability.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project1.mp4",

    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "CareVista - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CareVista integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project2.mp4",

    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "CaseBurst - An Ecommerce Website",
    desc: "CaseBurst is a fully-functional eCommerce website designed for selling customizable phone cases. It provides users with a seamless online shopping experience, including browsing products, adding items to the cart, and completing purchases through an integrated payment gateway. The platform is highly scalable, ensuring efficient performance even with a large number of products and users.",
    subdesc:
      "Built as an ecommerce website with Next.js 14, Tailwind CSS, TypeScript, Stripe, CaseBurst is designed for optimal performance and scalability.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project3.mp4",

    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },

  {
    title: "Portfolio",
    desc: "The personal portfolio website is a sleek and modern platform that showcases your web development projects, skills, and experience. It serves as a professional online presence where potential employers and collaborators can learn more about you and your work. The site is designed with a clean and responsive layout, ensuring that it looks great on all devices.",
    subdesc:
      "Built with Next.js 14, Tailwind CSS, Three Js, to showcase my work and skills.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",

    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Ideathon - Event Website",
    desc: "Ideathon is a dynamic event website built to manage and promote a competitive ideation event. It allows participants to register, view event schedules, and access important resources. The website serves as a central hub for event details, including judges, rules, FAQs, and submission guidelines. The website is optimized for ease of use, ensuring participants can quickly find the information they need.",
    subdesc:
      "Built using HTML, CSS, JavaScript to streamline the process of managing and promoting ideation competitions.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",

    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/js.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "i-Diary IT Solutions Pvt. Ltd.",
    pos: "Frontend Developer",
    duration: "07/2023 – 08/2023",
    title:
      "Worked as a Frontend Developer intern, and successfully managed two websites using HTML, CSS, JavaScript, and Bootstrap. These languages enabled seamless user access and interaction.",
    icon: "/assets/i-diary.png",
    href: "/docs/certificate2.pdf",
  },
  {
    id: 2,
    name: "Google Developer Student's Club(GDSC)",
    pos: "Core Team Member",
    duration: "2022 - 2023",
    title:
      "Successfully organized and executed six or more events, demonstrating strong organizational and leadership skills",
    icon: "/assets/gdsc.png",
    href: "/docs/certificate1.pdf",
  },
];
