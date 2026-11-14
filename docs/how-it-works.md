---
title: Как это работает
description: "Как SymbolTrail строит граф кода, хранит его в SQLite, обновляет по изменениям и передаёт агенту контекст без повторов."
section: Помощь
aside: false
pageClass: st-how-page
---

<script setup>
import ScenarioFlow from "./.vitepress/theme/components/ScenarioFlow.vue";
import "./.vitepress/theme/components/how-it-works.css";
</script>

# Как это работает

<p class="st-lead">SymbolTrail строит граф кода, обновляет его после изменений и передаёт ИИ-агенту нужные связи и фрагменты исходников.</p>

<nav class="st-how-nav" aria-label="Разделы устройства SymbolTrail">

[Сборка индекса](#pipeline) · [Обновление графа](#incremental) · [Контекст агента](#cards)

</nav>

## Из исходников в базу {#pipeline}

Индексатор проходит по JavaScript- и TypeScript-файлам выбранных репозиториев. Сначала он собирает структуру кода, затем разрешает цели связей и записывает результат в SQLite.

<figure class="st-how-diagram" aria-label="Пять стадий: сканирование, разбор AST, необязательный Git blame, разрешение связей, запись SQLite">
  <ol class="st-how-flow" role="list">
    <li class="st-how-step">
      <span class="st-how-number" aria-hidden="true">1</span>
      <strong>Сканирование</strong>
      <p>Корни, список файлов и изменения с прошлой сборки.</p>
    </li>
    <li class="st-how-step">
      <span class="st-how-number" aria-hidden="true">2</span>
      <strong>Разбор AST</strong>
      <p>Импорты, экспорты, объявления и места использования.</p>
    </li>
    <li class="st-how-step">
      <span class="st-how-number" aria-hidden="true">3</span>
      <strong>История Git</strong>
      <p>Авторы и коммиты строк, если включён <code>--blame</code>.</p>
    </li>
    <li class="st-how-step">
      <span class="st-how-number" aria-hidden="true">4</span>
      <strong>Разрешение связей</strong>
      <p>Цели вызовов и использований с учётом TypeScript.</p>
    </li>
    <li class="st-how-step st-how-step-accent">
      <span class="st-how-number" aria-hidden="true">5</span>
      <strong>Запись SQLite</strong>
      <p>Готовые данные для MCP, CLI и веб-интерфейса.</p>
    </li>
  </ol>
  <figcaption>Стадии идут последовательно. Внутри разбора и разрешения связей работают параллельные исполнители.</figcaption>
</figure>

Tree-sitter разбирает файл в синтаксическое дерево. Из этого дерева индексатор извлекает импорты, объявления, места использования и черновик экспортов. Затем он связывает файлы и объявления, включая зависимости между репозиториями. Вычислительные стадии завершаются до публикации новых данных в базе.

## Одна база для связанных репозиториев

Несколько репозиториев могут входить в один индекс. Имя репозитория, файл и позиция объявления позволяют различать одноимённые символы. Межрепозиторные связи доступны между участниками этого индекса.

<figure class="st-how-diagram st-how-panel" aria-label="Репозитории объединяются в SQLite; MCP, CLI и веб-интерфейс читают этот индекс">
  <div class="st-how-store">
    <div class="st-how-stack">
      <div class="st-how-node"><strong>Приложение</strong><code>a.js · foo</code></div>
      <div class="st-how-node"><strong>Общая библиотека</strong><code>b.js · bar</code></div>
      <div class="st-how-node"><strong>Другой репозиторий</strong><span>Свой код и зависимости</span></div>
    </div>
    <span class="st-how-arrow" aria-hidden="true">→</span>
    <div class="st-how-database">
      <svg viewBox="0 0 64 58" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false">
        <ellipse cx="32" cy="11" rx="25" ry="8" />
        <path d="M7 11v35c0 4.4 11.2 8 25 8s25-3.6 25-8V11M7 28c0 4.4 11.2 8 25 8s25-3.6 25-8" />
      </svg>
      <strong>SQLite</strong>
      <span>Локальная база индекса</span>
      <div class="st-how-tags"><span>Файлы</span><span>Объявления</span><span>Связи</span><span>Результаты разбора</span><span>Хеши</span></div>
    </div>
    <span class="st-how-arrow" aria-hidden="true">→</span>
    <div class="st-how-stack">
      <div class="st-how-node"><strong>MCP</strong><span>Карточки для ИИ-агента</span></div>
      <div class="st-how-node"><strong>CLI</strong><span>Запросы из терминала</span></div>
      <div class="st-how-node"><strong>Веб-интерфейс</strong><span>Граф для исследования вручную</span></div>
    </div>
  </div>
  <figcaption>База сохраняется между запусками. MCP читает нужные SQL-срезы, не загружая весь граф в память.</figcaption>
</figure>

Для каждого репозитория изменения записываются транзакцией. Запросы используют уже опубликованные данные; следующий запуск индексатора продолжает работу с той же базой.

## Инкремент: пересчитать затронутую часть {#incremental}

При повторной сборке индексатор проверяет изменения по Git, сохранённым метаданным файлов и хешам содержимого. Изменившийся код разбирается заново. Результаты разбора остальных файлов, включая факты и импорты, можно взять из базы для нового разрешения связей.

<figure class="st-how-diagram st-how-panel" aria-label="Изменённый a.js разбирается заново, синтаксис его неизменённого потребителя b.js берётся из кэша; связи обоих файлов пересчитываются">
  <div class="st-how-branch">
    <div class="st-how-stack">
      <div class="st-how-file-row"><code>a.js</code><span>Код изменился</span><strong>Новый разбор</strong></div>
      <div class="st-how-file-row"><code>b.js</code><span>Использует код из a.js</span><strong>Синтаксис из кэша</strong></div>
    </div>
    <span class="st-how-arrow" aria-hidden="true">→</span>
    <div class="st-how-result">
      <strong>Обновлённые связи</strong>
      <p>Перерасчёт затронутых файлов и их потребителей.</p>
      <span class="st-how-result-tail">Публикация в SQLite</span>
    </div>
  </div>
  <figcaption>Текст b.js остался прежним, но изменение его зависимости может потребовать нового разрешения связей.</figcaption>
</figure>

Так повторная сборка переиспользует уже выполненную работу. Если данные индекса не изменились, вычислительные пулы можно вовсе не запускать.

## Watch: граф обновляется после сохранения

Режим watch сначала строит индекс, затем следит за исходниками и настройками разрешения путей. Серия сохранений объединяется в очередь, из которой запускаются последовательные обновления.

<figure class="st-how-diagram" aria-label="Цикл watch: сохранить файл, объединить события, выполнить инкрементальную сборку, опубликовать изменения">
  <ol class="st-how-flow st-how-flow-four" role="list">
    <li class="st-how-step"><span class="st-how-number" aria-hidden="true">1</span><strong>Сохранение файла</strong><p>Watch получает событие об изменении.</p></li>
    <li class="st-how-step"><span class="st-how-number" aria-hidden="true">2</span><strong>Очередь событий</strong><p>Близкие сохранения объединяются в один запуск.</p></li>
    <li class="st-how-step"><span class="st-how-number" aria-hidden="true">3</span><strong>Инкремент</strong><p>Индексатор обрабатывает накопленные изменения.</p></li>
    <li class="st-how-step st-how-step-accent"><span class="st-how-number" aria-hidden="true">4</span><strong>Новая публикация</strong><p>MCP подхватывает данные без перезапуска.</p></li>
  </ol>
  <div class="st-how-loop"><span aria-hidden="true">↻</span> Новые события во время сборки переходят в следующий проход.</div>
</figure>

Пока идёт обновление, MCP читает опубликованную версию связей. Если сборка завершается с ошибкой, её события возвращаются в очередь для повторной обработки.

## Карточки: связи и код по задаче {#cards}

MCP возвращает компактные текстовые карточки. Они объединяют адреса объявлений, роли использований и доступные фрагменты исходников. Например, <code>callers</code> показывает потребителей объявления, а <code>callees</code> раскрывает его исходящие вызовы.

<figure class="st-how-diagram st-how-pair" aria-label="Схема карточки: выбранное объявление, цель вызова и фрагмент исходника; преимущества: точные адреса, роли и продолжения">
  <div class="st-how-card-preview">
    <div class="st-how-card-title"><code>callees</code><span>Схема содержимого карточки</span></div>
    <div class="st-how-card-body">
      <div class="st-how-card-line"><span>Объявление</span><code>foo · a.js</code></div>
      <div class="st-how-card-line"><span>Вызывает</span><code>bar · b.js</code></div>
      <div class="st-how-code"><code>3 function foo() {<br />4 &nbsp; return bar();<br />5 }</code></div>
      <div class="st-how-card-line"><span>Ещё данные</span><code>more</code></div>
    </div>
  </div>
  <div class="st-how-stack">
    <div class="st-how-benefit"><strong>Точные адреса</strong><p>Переход к объявлению и месту использования с учётом файла и репозитория.</p></div>
    <div class="st-how-benefit"><strong>Роли связей</strong><p>Вызов, чтение и типовой контракт сохраняют свой смысл.</p></div>
    <div class="st-how-benefit"><strong>Продолжения</strong><p>Большую выборку и длинный исходник можно получить частями через <code>more</code>.</p></div>
  </div>
</figure>

Связи относятся к опубликованному индексу, а фрагменты исходников читаются из текущих файлов. Watch помогает поддерживать связи актуальными. Чтобы понять условия выполнения и обработку ошибок, агент разбирает сам код.

## Кэш запросов и дедупликация контекста

Кэш сокращает повторные вычисления. Дедупликация сокращает повторную передачу исходников. Они работают независимо, поэтому вытеснение модели из кэша не стирает сведения о коде, который агент уже получил.

<div class="st-how-pair st-how-diagram">
  <section class="st-how-panel st-how-cache" aria-labelledby="how-cache-title">
    <h3 id="how-cache-title">Переиспользовать модель ответа</h3>
    <div class="st-how-mini-flow"><span>Тот же запрос</span><span aria-hidden="true">→</span><strong>Кэш модели</strong><span aria-hidden="true">→</span><span>Карточка</span></div>
    <p>По имени инструмента и параметрам кэш возвращает подготовленную модель. Переход по страницам может использовать ту же выборку.</p>
    <p>У записей есть срок жизни и общий бюджет памяти. Новая версия индекса делает прежние модели неактуальными.</p>
  </section>
  <section class="st-how-panel st-how-dedup" aria-labelledby="how-dedup-title">
    <h3 id="how-dedup-title">Передать только новый код</h3>
    <div class="st-how-coverage-row"><span>Уже получено</span><code>a.js:1–12</code></div>
    <div class="st-how-coverage-row"><span>Новый запрос</span><code>a.js:8–18</code></div>
    <div class="st-how-coverage-row st-how-coverage-new"><span>Добавить в контекст</span><code>a.js:13–18</code></div>
    <p>Реестр в экземпляре MCP учитывает переданные строки и хеш файла. Изменённый исходник снова доступен для передачи.</p>
  </section>
</div>

При пересечении запросов карточка сохраняет сведения о связях, а уже доставленные строки исходника заменяются отметкой о переданном контексте. Агент получает новые участки кода, не накапливая одинаковые фрагменты с каждым обращением.

## Оркестратор: маршрут исследования

Навык <code>graph-orchestrator</code> помогает агенту выбирать следующий шаг. Агент определяет, какого факта не хватает для ответа, запрашивает подходящую карточку и проверяет важные переходы по исходникам.

<ScenarioFlow scenario="explain" />

Если часть цепочки остаётся неясной, агент уточняет её следующим запросом или читает нужный участок файла. Граф даёт адреса и записанные связи, а объяснение поведения агент строит после проверки кода. Уже полученный контекст используется в следующих шагах.

Начните с [настройки индекса](/indexing) и [подключения MCP](/mcp). Примеры задач и маршрутов собраны в [сценариях использования](/use-cases).
