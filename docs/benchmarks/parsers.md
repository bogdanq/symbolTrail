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

Проверены **37 примеров, 217 файлов и 189 конкретных связей call/ref**. Среди случаев: импорты, реэкспорты, наследование, callbacks, возвращаемые методы и типовые контракты.

В сравнении участвовали SymbolTrail, CodeGraph 1.6.0, Graphify 0.9.93 в режиме локального AST и SCIP через scip-typescript 0.4.0 (sourcegraph).

## Общий результат

Оценка качества связей учитывает точность и полноту: верные, лишние и пропущенные связи по всему корпусу. Для расчёта используют суммарные числа связей по корпусу, оценки отдельных примеров не усредняют. Шкала от 0 до 10: чем выше оценка, тем лучше результат.

<BenchmarkTable :table="data.table" />

## Примеры и исходники

У каждого примера есть таблица со всеми показателями. **Верные** связи совпадают с эталоном, **лишних** в эталоне нет, а **пропущенные** ожидались, но отсутствуют в индексе. Исходники можно раскрыть под таблицей.

<ParserCases :cases="data.cases" />

Работу агента с готовым индексом сравнивали в отдельных сериях: [сквозное исследование кода](/benchmarks/investigations) и [пять инженерных задач](/benchmarks/engineering-tasks).
