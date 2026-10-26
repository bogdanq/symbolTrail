import { defineConfig } from "vitepress";

const description =
  "SymbolTrail — локальный инструмент индексации и анализа JavaScript/TypeScript-кода. Поиск символов, граф зависимостей, анализ влияния изменений и MCP для AI-агентов.";

export default defineConfig({
  lang: "ru-RU",
  title: "SymbolTrail",
  description,
  cleanUrls: true,
  appearance: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/symboltrail.svg" }],
    ["meta", { name: "theme-color", content: "#f9fafb" }],
    ["meta", { name: "application-name", content: "SymbolTrail" }],
    ["meta", { property: "og:site_name", content: "SymbolTrail" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "ru_RU" }],
    ["meta", { name: "twitter:card", content: "summary" }],
  ],
  transformHead({ pageData }) {
    const pageTitle = pageData.frontmatter.title ?? pageData.title;
    const title = pageTitle ? `${pageTitle} | SymbolTrail` : "SymbolTrail";
    const pageDescription = pageData.description || description;

    return [
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: pageDescription }],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: pageDescription }],
    ];
  },
  themeConfig: {
    logo: { src: "/symboltrail.svg", alt: "" },
    siteTitle: 'Symbol<span class="st-brand-accent">Trail</span>',
    nav: [{ text: "Подключить MCP", link: "/mcp" }],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/example/symboltrail",
        ariaLabel: "GitHub — временная ссылка на репозиторий",
      },
    ],
    sidebar: [
      {
        text: "Начало работы",
        items: [
          { text: "Основы SymbolTrail", link: "/" },
          { text: "Сценарии", link: "/use-cases" },
          { text: "Быстрый старт", link: "/getting-started" },
          { text: "Индексация", link: "/indexing" },
        ],
      },
      {
        text: "Для AI-агентов",
        items: [
          { text: "Подключение MCP", link: "/mcp" },
          { text: "Инструменты", link: "/tools" },
        ],
      },
      {
        text: "Сравнения и замеры",
        items: [
          { text: "Парсеры", link: "/benchmarks/parsers" },
          {
            text: "Исследование кода",
            link: "/benchmarks/investigations",
          },
          {
            text: "Инженерные задачи",
            link: "/benchmarks/engineering-tasks",
          },
        ],
      },
      {
        text: "Локальный интерфейс",
        items: [{ text: "Обзор и запуск", link: "/local-ui" }],
      },
      {
        text: "Помощь",
        items: [{ text: "Решение проблем", link: "/troubleshooting" }],
      },
    ],
    outline: { label: "На этой странице", level: [2, 3] },
    docFooter: { prev: "Предыдущая страница", next: "Следующая страница" },
    sidebarMenuLabel: "Разделы",
    darkModeSwitchLabel: "Оформление",
    darkModeSwitchTitle: "Включить тёмную тему",
    lightModeSwitchTitle: "Включить светлую тему",
    returnToTopLabel: "Наверх",
    skipToContentLabel: "Перейти к содержанию",
    notFound: {
      code: "404",
      title: "Страница не найдена",
      quote: "Продолжите с основ SymbolTrail или найдите статью через поиск.",
      linkLabel: "На главную",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Поиск",
                buttonAriaLabel: "Поиск по документации",
              },
              modal: {
                displayDetails: "Показывать подробности",
                resetButtonTitle: "Сбросить поиск",
                backButtonTitle: "Закрыть поиск",
                noResultsText: "Ничего не найдено по запросу",
                footer: {
                  selectText: "выбрать",
                  navigateText: "перейти",
                  closeText: "закрыть",
                },
              },
            },
          },
        },
      },
    },
    footer: {
      message: "Инструмент навигации по коду для разработчиков и AI-агентов.",
      copyright: "SymbolTrail",
    },
  },
});
