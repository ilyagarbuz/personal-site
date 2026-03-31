export type ProjectLinkType = "github" | "external" | "private";

export interface ProjectLink {
  type: ProjectLinkType;
  href?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string;
  icon: "layout" | "server" | "sparkles";
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Transistor",
    description: `Full-stack development of a B2B platform for LED lighting equipment (transistor.ru). Delivered end-to-end development and maintenance of the website, featuring a catalog with 10,000+ SKUs. Key functionality includes building automated compatibility tools for selecting matching components (profile + LED strip + power supply), helping minimize errors during order assembly. Designed and implemented a multi-functional personal account with customizable UI tailored to client needs, enabling the generation of commercial proposals (export to PDF/Excel) and price list management. Integrated the platform with 1C for real-time synchronization of stock levels (>90% of items in stock) and pricing.`,
    tags: "Web App • E-commerce • Nuxt • Node.js • MongoDB",
    icon: "layout",
    links: [
      { type: "private" },
      { type: "external", href: "https://transistor.ru/" },
    ],
  },
  {
    title: "Arlight",
    description: `Full-stack development of a corporate B2B website for a premium LED lighting manufacturer (arlight.ru). Developed and maintained the flagship corporate website for Arlight, a market leader with over 25 years of history and a product range of 10,000+ SKUs. Implemented key marketing and partnership functionalities, including a loyalty program portal for designers ("My.Arlight") to support wholesale and project-based sales. Built an educational content hub featuring webinars, training videos, and certified programs to support the company’s partner training initiatives. Integrated modules for multi-channel customer support and service management, ensuring seamless access to technical documentation and product information for B2B clients.`,
    tags: "Web App • E-commerce • Nuxt • Node.js • MongoDB",
    icon: "layout",
    links: [
      { type: "private" },
      { type: "external", href: "https://arlight.ru/" },
    ],
  },
  {
    title: "CashControl",
    description: `Full-stack web app for tracking personal expenses: secure multi-user accounts, CRUD for categories and transactions, analytics, and automated MongoDB backups with Telegram notifications—deployed as containerized services.
    Built a REST API with Node.js, Express, and TypeScript using Mongoose on MongoDB: JWT auth, bcrypt password hashing, express-validator, user-scoped data, aggregation for analytics, and health checks.
Implemented a Vue 3 SPA with TypeScript, Vite, Vue Router, Axios, and Element Plus; protected routes, JWT in cookies, tables with sorting/pagination, filters (category, date range), and Chart.js dashboards.
Containerized the stack with Docker Compose (MongoDB, API, static frontend behind Nginx, optional backup service): one-command local/prototype deployment.
Added an automated backup service with scheduled dumps, archiving, and a Telegram bot for on-demand backups and status (extends the product beyond CRUD into ops).
    `,
    tags: "TypeScript · Vue 3 · Element Plus · Node.js · Express · MongoDB · Mongoose · Docker · Nginx · Chart.js ",
    icon: "sparkles",
    links: [
      { type: "private" },
      { type: "external", href: "https://cashcontrol.work.gd/" },
    ],
  },
  {
    title: "DeepSeek Chat Manager — Browser extension",
    description: `Chrome extension (Manifest V3) that lets users organize DeepSeek chats into custom folders via a Vue popup, content-script integration, and background coordination—with persistence and SPA-friendly behavior. Built a Chrome extension with Manifest V3: popup UI (Vue 3 + TypeScript), content script for the DeepSeek site, and service worker for state and coordination.
Implemented folder CRUD, context-menu flow to assign chats to folders, and persistent settings so layouts survive sessions.
Integrated with DeepSeek’s web app: session-aligned auth, API-backed chat discovery, and handling of SPA navigation and async-loaded content so lists stay reliable.
Used Vite for builds and packaging (build, package for store-ready zip), with a TypeScript-first layout (popup, content, background, shared).`,
    tags: "TypeScript · Vue 3 · Vite · Chrome Extensions API (Manifest V3) · Content scripts · Service worker · Browser storage",
    icon: "sparkles",
    links: [
      {
        type: "github",
        href: "https://github.com/ilyagarbuz/deepseek-chat-manager",
      },
      {
        type: "external",
        href: "https://chromewebstore.google.com/detail/ojcbbobkmakkaoclhoiigmgkjnkecggf?utm_source=item-share-cb",
      },
    ],
  },
];
