# SymbolTrail — документация

Самостоятельный сайт на VitePress 1.6.4. Нужны Node.js 20.19+ и npm.

```sh
npm install
npm run docs:dev
```

Проверка типов и сборка:

```sh
npm run check
npm run docs:build
npm run docs:preview
```

Сборка находится в `docs/.vitepress/dist`. Для статического хостинга публикуйте содержимое этого каталога. Текущая база URL — `/`; при размещении в подпапке задайте `base` в `docs/.vitepress/config.ts`.

## GitHub Pages

Сборка для репозитория `bogdanq/symbolTrail`:

```sh
npm run docs:build:pages
npm run docs:preview:pages
```

Предпросмотр: `http://localhost:4173/symbolTrail/`. Сборка находится в `docs/.vitepress/dist`, использует базу `/symbolTrail/` и ссылки с `.html`; файл `.nojekyll` копируется из `docs/public`.

Ветка `gh-pages` содержит готовую статику в корне. Для публикации отправьте её:

```sh
git push origin gh-pages
```

В репозитории откройте **Settings → Pages → Build and deployment**, выберите **Deploy from a branch**, ветку **gh-pages** и папку **/(root)**. После публикации ожидаемый адрес — `https://bogdanq.github.io/symbolTrail/`. Порядок настройки описан в [GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Для следующего выпуска заново выполните `npm run docs:build:pages`, замените содержимое ветки `gh-pages` новой сборкой и создайте коммит. Обычные `docs:dev` и `docs:build` используют базу `/`.

## Содержание

Одиннадцать страниц: основы, сценарии использования, быстрый старт, индексация, подключение MCP, инструменты, три страницы сравнений и замеров, локальный интерфейс и решение проблем. Тексты находятся в `docs/*.md` и `docs/benchmarks/*.md`, меню и SEO — в `docs/.vitepress/config.ts`, оформление — в `docs/.vitepress/theme/`.

Скриншоты UI находятся в `docs/public/images/`, описания и вставки изображений — в `docs/local-ui.md`. Изображения на странице можно открыть в полном размере.

React-пример на главной подключается из `examples/react-counter/App.jsx` и `Counter.jsx`, чтобы код во вкладках совпадал с индексированными файлами. Выдача `callees` и `callers`, по которой сверена схема, сохранена в `examples/react-counter/index-result.txt`.

Сайт документации отделён от исходников самого инструмента. Команды `filegraph`, `setup`, `mcp` и `ui` на страницах относятся к репозиторию инструмента, а не к этому сайту.

## Основания для содержания

Стартовые тексты сверены с `README.md`, `src/code-index/README.md`, `src/code-index/lang/README.md`, `src/mcp-graph/tool-input.ts`, `setup/index.mjs`, `setup/install.mjs` и маршрутизацией UI в `/Users/bogdanshelomanov/nodejs`. При изменении контракта обновляйте соответствующие блоки документации.

Визуальный ориентир — [Graphify basics](https://docs.getgraphify.com/docs/get-started/graphify-basics): светлый фон, боковая навигация, оглавление и короткие смысловые блоки. Пример структуры — `/Users/bogdanshelomanov/frontend/interview-1`. Иллюстрация и знак SymbolTrail созданы для этого сайта; чужие изображения и тексты не копировались.

Фиктивные домен, ссылка на репозиторий и контакты в конфигурацию не добавлены. Заголовок, описание инструмента, favicon, Open Graph и Twitter-метаданные настроены; адрес для canonical и sitemap можно добавить после выбора домена.

## Сравнения и замеры

Раздел `docs/benchmarks/` опирается на два локальных отчёта исходного репозитория:

- `tests/agent-workflows/runs/2026-10-21/three-indexes-20261021/report.html`: 37 примеров для парсеров и 30 запусков агентов на 10 задачах исследования кода.
- `evaluations/engineering-tasks-20261021/report.html`: 15 запусков на пяти инженерных задачах.

Для сайта из JSON внутри отчётов извлечены числовые показатели, названия задач и исходники 217 файлов примеров парсера. Наборы находятся в `docs/.vitepress/theme/data/`, компонент таблиц — `docs/.vitepress/theme/components/BenchmarkTable.vue`. На каждой странице есть одна общая сравнительная таблица и отдельная таблица под каждым примером или заданием. Все показатели видны одновременно. Исходники подключены только к странице парсеров и раскрываются под таблицами примеров. Ответы агентов, патчи и трассы действий на сайт не переносятся.

Таблицы сохраняют исходные значения; проценты и минуты рассчитаны из счётчиков отчёта. Итоговые оценки инженерной серии взяты из её сводки. Перенос не является повторным запуском замеров. Название продукта в сравнениях — SymbolTrail. При обновлении данных сохраняйте даты снимков парсера, методику оценки и ограничения серий.
