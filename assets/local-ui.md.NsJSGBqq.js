import { o as openBlock, c as createElementBlock, a2 as createStaticVNode, j as createBaseVNode, k as unref, g as withBase, a as createTextVNode } from "./chunks/framework.DiR_5bBd.js";
const _imports_0 = "/symbolTrail/images/index.png";
const _imports_1 = "/symbolTrail/images/repo-list.png";
const _imports_2 = "/symbolTrail/images/current-repo.png";
const _imports_3 = "/symbolTrail/images/current-file.png";
const _imports_4 = "/symbolTrail/images/current-symbol.png";
const _imports_5 = "/symbolTrail/images/search.png";
const _imports_6 = "/symbolTrail/images/index-search.png";
const _hoisted_1 = { class: "st-figure" };
const _hoisted_2 = ["href"];
const _hoisted_3 = { class: "st-figure" };
const _hoisted_4 = ["href"];
const _hoisted_5 = { class: "st-figure" };
const _hoisted_6 = ["href"];
const _hoisted_7 = { class: "st-figure" };
const _hoisted_8 = ["href"];
const _hoisted_9 = { class: "st-figure" };
const _hoisted_10 = ["href"];
const _hoisted_11 = { class: "st-figure" };
const _hoisted_12 = ["href"];
const _hoisted_13 = { class: "st-figure" };
const _hoisted_14 = ["href"];
const __pageData = JSON.parse('{"title":"Локальный интерфейс","description":"Откройте UI SymbolTrail в браузере: выбор индекса и репозитория, поиск кода, просмотр файлов, символов и связей. Команды установки и запуска.","frontmatter":{"title":"Локальный интерфейс","description":"Откройте UI SymbolTrail в браузере: выбор индекса и репозитория, поиск кода, просмотр файлов, символов и связей. Команды установки и запуска.","section":"Локальный интерфейс"},"headers":[],"relativePath":"local-ui.md","filePath":"local-ui.md"}');
const __default__ = { name: "local-ui.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[7] || (_cache[7] = createStaticVNode('<h1 id="локальныи-интерфеис" tabindex="-1">Локальный интерфейс <a class="header-anchor" href="#локальныи-интерфеис" aria-label="Permalink to &quot;Локальный интерфейс&quot;">​</a></h1><p class="st-lead">Исследуйте код и его связи прямо в браузере.</p><p>У SymbolTrail есть локальный веб-интерфейс. Он работает с тем же индексом, что CLI и MCP, и позволяет изучать проект без подключения AI-агента.</p><h2 id="что-есть-в-ui" tabindex="-1">Что есть в UI <a class="header-anchor" href="#что-есть-в-ui" aria-label="Permalink to &quot;Что есть в UI&quot;">​</a></h2><ul><li><strong>Индексы и репозитории</strong> — каталог индексов с путём к базе, размером и датой. Внутри выбранного индекса можно посмотреть его репозитории и связи между ними.</li><li><strong>Поиск с подсказками</strong> — поиск символов с фильтрами по индексу, репозиторию и файлу. Результаты сгруппированы по файлам.</li><li><strong>Карты и анализ зависимостей</strong> — обзор на уровне репозиториев, файлов и вершин, просмотр циклов между файлами и репозиториями. В отдельном репозитории также доступны теплокарта, фильтр по пути и скрытие тестовых файлов.</li><li><strong>Просмотр файлов</strong> — исходный код с подсветкой, граф импортов и списки «Кто импортирует» и «Кого импортирует».</li><li><strong>Карточки символов</strong> — исходник, граф связей, места использования и количество входящих, исходящих и тестовых вызовов.</li><li><strong>Коммиты и похожий код</strong> — связанные с символом Git-коммиты и похожие по смыслу символы. Коммиты показываются при наличии Git-данных, а поиск похожего требует собранных векторов.</li></ul><h2 id="как-запустить" tabindex="-1">Как запустить <a class="header-anchor" href="#как-запустить" aria-label="Permalink to &quot;Как запустить&quot;">​</a></h2><p>Команды выполняются из <strong>исходного репозитория инструмента</strong>, где находятся <code>src</code> и <code>web/ui</code>. Подставьте путь к нему вместо <code>/path/to/symboltrail-source</code>, а исследуемый проект — вместо <code>/path/to/project</code>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/symboltrail-source</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> web/ui</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filegraph</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui</span></span></code></pre></div><p>Откройте локальный адрес, который Vite напечатает в терминале, и выберите нужный индекс. Для остановки сервера нажмите <code>Ctrl+C</code>.</p><div class="tip custom-block"><p class="custom-block-title">Если индекс уже собран</p><p>Повторять установку зависимостей и сборку при каждом открытии UI не нужно. Достаточно выполнить <code>npm run ui</code>.</p></div><h2 id="обновление-после-правок" tabindex="-1">Обновление после правок <a class="header-anchor" href="#обновление-после-правок" aria-label="Permalink to &quot;Обновление после правок&quot;">​</a></h2><p>UI читает подготовленный индекс. Чтобы связи обновлялись после сохранения исходников, откройте второй терминал в том же репозитории и запустите:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filegraph:watch</span></span></code></pre></div><p>Подробнее о выборе индекса и режиме наблюдения — на странице <a href="/symbolTrail/indexing.html">«Индексация»</a>.</p><h2 id="обзор-интерфеиса" tabindex="-1">Обзор интерфейса <a class="header-anchor" href="#обзор-интерфеиса" aria-label="Permalink to &quot;Обзор интерфейса&quot;">​</a></h2><p>Нажмите на скриншот, чтобы открыть его в полном размере.</p><h3 id="индексы" tabindex="-1">Индексы <a class="header-anchor" href="#индексы" aria-label="Permalink to &quot;Индексы&quot;">​</a></h3><p>На стартовом экране собраны независимые индексы. В карточке видны путь к базе, её размер и дата обновления; если база ещё не собрана, интерфейс покажет сообщение.</p>', 18)),
        createBaseVNode("figure", _hoisted_1, [
          createBaseVNode("a", {
            href: unref(withBase)("/images/index.png"),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Открыть скриншот «Индексы» в полном размере"
          }, [..._cache[0] || (_cache[0] = [
            createBaseVNode("img", {
              src: _imports_0,
              alt: "Каталог индексов SymbolTrail с путями к базам, размерами и датами обновления.",
              width: "3360",
              height: "1860",
              loading: "lazy",
              decoding: "async"
            }, null, -1)
          ])], 8, _hoisted_2)
        ]),
        _cache[8] || (_cache[8] = createBaseVNode("h3", {
          id: "репозитории-и-межрепозиторные-связи",
          tabindex: "-1"
        }, [
          createTextVNode("Репозитории и межрепозиторные связи "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#репозитории-и-межрепозиторные-связи",
            "aria-label": 'Permalink to "Репозитории и межрепозиторные связи"'
          }, "​")
        ], -1)),
        _cache[9] || (_cache[9] = createBaseVNode("p", null, "Внутри индекса можно перейти к репозиториям, файлам, вершинам и циклам зависимостей. Здесь показаны циклы между репозиториями и таблица с данными каждого участника индекса.", -1)),
        createBaseVNode("figure", _hoisted_3, [
          createBaseVNode("a", {
            href: unref(withBase)("/images/repo-list.png"),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Открыть скриншот «Репозитории и межрепозиторные связи» в полном размере"
          }, [..._cache[1] || (_cache[1] = [
            createBaseVNode("img", {
              src: _imports_1,
              alt: "Граф циклов между репозиториями и таблица репозиториев выбранного индекса.",
              width: "3354",
              height: "1844",
              loading: "lazy",
              decoding: "async"
            }, null, -1)
          ])], 8, _hoisted_4)
        ]),
        _cache[10] || (_cache[10] = createBaseVNode("h3", {
          id: "репозитории",
          tabindex: "-1"
        }, [
          createTextVNode("Репозиторий "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#репозитории",
            "aria-label": 'Permalink to "Репозиторий"'
          }, "​")
        ], -1)),
        _cache[11] || (_cache[11] = createBaseVNode("p", null, "Карта помогает изучить структуру выбранного репозитория. Ниже расположен список файлов с показателями связей и переходами к подробностям; сверху доступны теплокарта, циклы и скрытие тестовых файлов.", -1)),
        createBaseVNode("figure", _hoisted_5, [
          createBaseVNode("a", {
            href: unref(withBase)("/images/current-repo.png"),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Открыть скриншот «Репозиторий» в полном размере"
          }, [..._cache[2] || (_cache[2] = [
            createBaseVNode("img", {
              src: _imports_2,
              alt: "Карта выбранного репозитория, переключатели режимов и таблица файлов со связями.",
              width: "3360",
              height: "1858",
              loading: "lazy",
              decoding: "async"
            }, null, -1)
          ])], 8, _hoisted_6)
        ]),
        _cache[12] || (_cache[12] = createBaseVNode("h3", {
          id: "фаил",
          tabindex: "-1"
        }, [
          createTextVNode("Файл "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#фаил",
            "aria-label": 'Permalink to "Файл"'
          }, "​")
        ], -1)),
        _cache[13] || (_cache[13] = createBaseVNode("p", null, "Граф импортов дополняется исходным кодом и двумя списками: кто импортирует выбранный файл и какие модули импортирует он сам. Из этих списков можно продолжить навигацию по зависимостям.", -1)),
        createBaseVNode("figure", _hoisted_7, [
          createBaseVNode("a", {
            href: unref(withBase)("/images/current-file.png"),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Открыть скриншот «Файл» в полном размере"
          }, [..._cache[3] || (_cache[3] = [
            createBaseVNode("img", {
              src: _imports_3,
              alt: "Страница файла с графом импортов, исходным кодом и входящими и исходящими зависимостями.",
              width: "3360",
              height: "1854",
              loading: "lazy",
              decoding: "async"
            }, null, -1)
          ])], 8, _hoisted_8)
        ]),
        _cache[14] || (_cache[14] = createBaseVNode("h3", {
          id: "символ",
          tabindex: "-1"
        }, [
          createTextVNode("Символ "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#символ",
            "aria-label": 'Permalink to "Символ"'
          }, "​")
        ], -1)),
        _cache[15] || (_cache[15] = createBaseVNode("p", null, "Карточка символа объединяет граф связей, исходник и показатели вызовов. Ниже можно изучить места использования, связанные коммиты и похожий по смыслу код.", -1)),
        createBaseVNode("figure", _hoisted_9, [
          createBaseVNode("a", {
            href: unref(withBase)("/images/current-symbol.png"),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Открыть скриншот «Символ» в полном размере"
          }, [..._cache[4] || (_cache[4] = [
            createBaseVNode("img", {
              src: _imports_4,
              alt: "Карточка функции с графом, исходником, показателями вызовов и местами использования.",
              width: "3360",
              height: "1860",
              loading: "lazy",
              decoding: "async"
            }, null, -1)
          ])], 8, _hoisted_10)
        ]),
        _cache[16] || (_cache[16] = createBaseVNode("h3", {
          id: "поиск-и-каталог-репозиториев",
          tabindex: "-1"
        }, [
          createTextVNode("Поиск и каталог репозиториев "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#поиск-и-каталог-репозиториев",
            "aria-label": 'Permalink to "Поиск и каталог репозиториев"'
          }, "​")
        ], -1)),
        _cache[17] || (_cache[17] = createBaseVNode("p", null, [
          createTextVNode("Область поиска задаётся тегами "),
          createBaseVNode("code", null, "индекс:"),
          createTextVNode(", "),
          createBaseVNode("code", null, "репо:"),
          createTextVNode(" и "),
          createBaseVNode("code", null, "файл:"),
          createTextVNode(". Пока запрос не введён, страница показывает доступные индексы и входящие в них репозитории.")
        ], -1)),
        createBaseVNode("figure", _hoisted_11, [
          createBaseVNode("a", {
            href: unref(withBase)("/images/search.png"),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Открыть скриншот «Поиск и каталог репозиториев» в полном размере"
          }, [..._cache[5] || (_cache[5] = [
            createBaseVNode("img", {
              src: _imports_5,
              alt: "Страница поиска с полем запроса и каталогом репозиториев, сгруппированных по индексам.",
              width: "3360",
              height: "1854",
              loading: "lazy",
              decoding: "async"
            }, null, -1)
          ])], 8, _hoisted_12)
        ]),
        _cache[18] || (_cache[18] = createBaseVNode("h3", {
          id: "результаты-поиска-и-места-использования",
          tabindex: "-1"
        }, [
          createTextVNode("Результаты поиска и места использования "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#результаты-поиска-и-места-использования",
            "aria-label": 'Permalink to "Результаты поиска и места использования"'
          }, "​")
        ], -1)),
        _cache[19] || (_cache[19] = createBaseVNode("p", null, "Результаты сгруппированы по файлам и содержат исходники и экспорты. Для выбранного экспорта можно посмотреть места использования, а конкретное место открыть в боковой панели с подсвеченной строкой.", -1)),
        createBaseVNode("figure", _hoisted_13, [
          createBaseVNode("a", {
            href: unref(withBase)("/images/index-search.png"),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Открыть скриншот «Результаты поиска и места использования» в полном размере"
          }, [..._cache[6] || (_cache[6] = [
            createBaseVNode("img", {
              src: _imports_6,
              alt: "Результаты поиска по файлам, экспорты, места использования и боковая панель с фрагментом кода.",
              width: "3358",
              height: "1856",
              loading: "lazy",
              decoding: "async"
            }, null, -1)
          ])], 8, _hoisted_14)
        ])
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
