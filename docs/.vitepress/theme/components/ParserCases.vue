<script setup lang="ts">
import BenchmarkTable from "./BenchmarkTable.vue";
import type { ParserCase } from "./benchmark";

defineProps<{ cases: ParserCase[] }>();
</script>

<template>
  <div class="st-bench-cases">
    <section
      v-for="(item, index) in cases"
      :key="item.id"
      class="st-bench-case"
      :aria-labelledby="`parser-case-${item.id}`"
    >
      <h3 :id="`parser-case-${item.id}`">
        {{ index + 1 }}. {{ item.title }} · {{ item.language }}
      </h3>
      <p class="st-bench-kicker">
        {{ item.group }} · Файлов: {{ item.files.length }}
      </p>
      <p v-if="item.group !== 'Базовые примеры'">{{ item.description }}</p>
      <BenchmarkTable :table="item.table" />
      <details class="st-bench-sources">
        <summary>Исходники примера · файлов: {{ item.files.length }}</summary>
        <details
          v-for="file in item.files"
          :key="file.path"
          class="st-bench-source-file"
        >
          <summary>{{ file.path }}</summary>
          <pre><code>{{ file.code }}</code></pre>
        </details>
      </details>
    </section>
  </div>
</template>
