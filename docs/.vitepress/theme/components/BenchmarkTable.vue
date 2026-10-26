<script setup lang="ts">
import { computed } from "vue";
import { formatMetric } from "./benchmark";
import type { ComparisonTable } from "./benchmark";
import "./benchmarks.css";

const props = defineProps<{ table: ComparisonTable }>();

const bestValues = computed(
  () =>
    new Map(
      props.table.columns.map((column) => {
        const values = props.table.rows.map(
          (row) => row.cells[column.key].value,
        );

        return [
          column.key,
          column.direction === "lower"
            ? Math.min(...values)
            : Math.max(...values),
        ] as const;
      }),
    ),
);
</script>

<template>
  <div
    class="st-bench-table-wrap"
    tabindex="0"
    role="region"
    :aria-label="table.caption"
  >
    <table class="st-bench-table">
      <caption>
        {{
          table.caption
        }}
      </caption>
      <thead>
        <tr>
          <th scope="col">Инструмент</th>
          <th v-for="column in table.columns" :key="column.key" scope="col">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.rows" :key="row.id">
          <th scope="row">
            {{ row.label }}
            <small v-if="row.note">{{ row.note }}</small>
          </th>
          <td v-for="column in table.columns" :key="column.key">
            <span
              :class="{
                'st-bench-best':
                  row.cells[column.key].value === bestValues.get(column.key),
              }"
              >{{
                formatMetric(row.cells[column.key].value, column.precision)
              }}</span
            >
            <span v-if="row.cells[column.key].suffix" class="st-bench-suffix">
              {{ row.cells[column.key].suffix }}
            </span>
            <small v-if="row.cells[column.key].note">{{
              row.cells[column.key].note
            }}</small>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
