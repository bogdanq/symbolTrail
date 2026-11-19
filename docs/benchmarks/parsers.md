---
title: Сравнение точности парсеров
description: "SymbolTrail, CodeGraph, Graphify, SCIP и GitNexus: свежие результаты 44 примера JavaScript/TypeScript, включая цепочки реэкспортов и глубокие вызовы одноимённых методов."
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

<p class="st-lead">Сравнение прямых и транзитивных связей в JavaScript и TypeScript.</p>

## Методология тестирования

Эталон новых примеров задан по исходному коду до запуска индексаторов. Объявления сравниваются по файлу, имени и строке. В примере с полями объектов также учитываются ссылки на обычные свойства и поля именованных `type` / `interface`.

### Участники сравнения

В бенчмарке приняли участие пять инструментов:

1.  **SymbolTrail**
2.  **CodeGraph** (v1.6.0)
3.  **Graphify** (v0.9.93, режим локального AST)
4.  **SCIP** (через `scip-typescript` v0.4.0 от Sourcegraph)
5.  **GitNexus** (v1.6.12, локальный режим `analyze --index-only --skip-fts`)

## Общий результат

Оценка качества связей базируется на двух ключевых метриках: **точности** (precision) и **полноте** (recall). Система анализирует:

- ✅ **Верные связи:** прямые рёбра, совпавшие с эталоном по источнику, цели и виду `call` / `ref`.
- ❌ **Лишние связи:** прямые рёбра выбранной области оценки, которых нет в эталоне.
- ⚠️ **Пропущенные связи:** эталонные рёбра, которым не соответствует прямое ребро индекса.

**Шкала:** от **0** до **10**.
Чем выше балл, тем больше совпадений прямых рёбер с выбранным эталоном. Балл не измеряет весь поддерживаемый синтаксис или поведение программы во время выполнения.

<BenchmarkTable :table="data.table" />

## Примеры и исходники

<ParserCases :cases="data.cases" />
