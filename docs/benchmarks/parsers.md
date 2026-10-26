---
title: Сравнение точности парсеров
description: "SymbolTrail, CodeGraph, Graphify и SCIP: качество связей и результаты 37 примеров JavaScript/TypeScript с исходниками."
section: Сравнения и замеры
aside: false
pageClass: st-bench-page
---

<script setup>
import BenchmarkTable from "../.vitepress/theme/components/BenchmarkTable.vue";
import ParserCases from "../.vitepress/theme/components/ParserCases.vue";
import data from "../.vitepress/theme/data/parsers.json";
</script>

# Сравнение точности парсеров

<p class="st-lead">Насколько точно индекс определяет цели вызовов и ссылок в JavaScript и TypeScript.</p>

**37 примеров, 217 файлов и 189 конкретных связей call/ref**: импорты, реэкспорты, наследование, callbacks, возвращаемые методы и типовые контракты.

Сравниваются SymbolTrail, CodeGraph 1.6.0, Graphify 0.9.93 в режиме локального AST и SCIP через scip-typescript 0.4.0 (sourcegraph).

## Общий результат

**Качество связей** объединяет точность и полноту: учитывает верные, лишние и пропущенные связи по всему корпусу. Показатель считается по суммарным числам связей, а не как средняя оценка примеров. Оценка показана по шкале от 0 до 10: чем выше, тем лучше результат.

<BenchmarkTable :table="data.table" />

## Примеры и исходники

Для каждого примера приведена отдельная таблица со всеми показателями. **Верные** — связи, совпавшие с эталоном; **лишние** — связи вне эталона; **пропущенные** — ожидаемые связи, которых нет в индексе. Исходники можно раскрыть под таблицей.

<ParserCases :cases="data.cases" />

Работу агента с готовым индексом сравниваем отдельно: [сквозное исследование кода](/benchmarks/investigations) и [пять инженерных задач](/benchmarks/engineering-tasks).
