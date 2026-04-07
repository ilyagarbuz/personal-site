import type { Project } from "./projects";

export const projectsRu: Project[] = [
  {
    title: "Transistor",
    description: `Full-stack разработка B2B-платформы для LED-оборудования: каталог с 10 000+ SKU, автоматический подбор совместимых компонентов (профиль + лента + блок питания) для снижения ошибок при комплектации. Многофункциональный личный кабинет с настраиваемым UI: коммерческие предложения (экспорт PDF/Excel), управление прайсами. Интеграция с 1С: синхронизация остатков (>90% позиций в наличии) и цен в реальном времени.`,
    tags: "Web App • E-commerce • Nuxt • Node.js • MongoDB",
    icon: "layout",
    links: [
      { type: "private" },
      { type: "external", href: "https://transistor.ru/" },
    ],
  },
  {
    title: "Arlight",
    description: `Full-stack разработка корпоративного B2C-сайта для производителя премиальной LED-продукции. Флагманский сайт Arlight (25+ лет на рынке): маркетинг и партнёрские сценарии, портал лояльности для дизайнеров («Мой Arlight»), оптовые и проектные продажи. Образовательный хаб: вебинары, видео, сертификация партнёров. Модули мультиканальной поддержки и сервиса, доступ к техдокументации и каталогам для B2B.`,
    tags: "Web App • E-commerce • Nuxt • Node.js • MongoDB",
    icon: "store",
    links: [
      { type: "private" },
      { type: "external", href: "https://arlight.ru/" },
    ],
  },
  {
    title: "CashControl",
    description: `Full-stack приложение для учёта личных расходов: многопользовательские аккаунты, CRUD категорий и операций, аналитика, автоматические бэкапы MongoDB с уведомлениями в Telegram — в контейнерах.
Изоляция данных по пользователю, агрегации для аналитики, health checks.
SPA на Vue 3, TypeScript, Vite; защищённые маршруты, JWT в cookie, таблицы с сортировкой и пагинацией, фильтры, дашборды Chart.js.
Docker Compose (MongoDB, API, фронт за Nginx, опционально сервис бэкапов): развёртывание одной командой.
Сервис бэкапов: расписание, архивы, Telegram-бот для запуска и статуса.`,
    tags: "TypeScript · Vue 3 · Element Plus · Node.js · Express · MongoDB · Mongoose · Docker · Nginx · Chart.js ",
    icon: "wallet",
    links: [
      { type: "private" },
      { type: "external", href: "https://cashcontrol.work.gd/" },
    ],
  },
  {
    title: "DeepSeek Chat Manager — расширение для браузера",
    description: `Расширение Chrome (Manifest V3): папки для чатов DeepSeek.
CRUD папок, контекстное меню для привязки чатов, сохранение состояния между сессиями.
Интеграция с веб-приложением DeepSeek: сессия, получение списка чатов, навигация SPA и асинхронная подгрузка контента.
Сборка Vite, TypeScript (popup, content, background, shared), упаковка для Chrome Web Store.`,
    tags: "TypeScript · Vue 3 · Vite · Chrome Extensions API (Manifest V3) · Content scripts · Service worker · Browser storage",
    icon: "sparkles",
    links: [
      {
        type: "github",
        href: "https://github.com/ilyagarbuz/deepseek-chat-manager",
      },
      {
        type: "external",
        href: "https://chromewebstore.google.com/detail/ojcbbobkmakkaoclhoiigmgkjnkecggf",
      },
    ],
  },
];
