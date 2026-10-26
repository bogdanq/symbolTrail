<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData, withBase } from "vitepress";

const { frontmatter, page } = useData();
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <nav
        v-if="frontmatter.section"
        class="st-breadcrumb"
        aria-label="Путь к странице"
      >
        <a :href="withBase('/')">SymbolTrail</a>
        <span aria-hidden="true">/</span>
        <span>{{ frontmatter.section }}</span>
      </nav>
    </template>
    <template #doc-after>
      <aside v-if="page.relativePath !== 'troubleshooting.md'" class="st-help">
        <div>
          <strong>Нужна помощь?</strong>
          <p>Проверьте типичные причины ошибок и пустых ответов.</p>
        </div>
        <a :href="withBase('/troubleshooting')"
          >Решение проблем <span aria-hidden="true">→</span></a
        >
      </aside>
    </template>
  </DefaultTheme.Layout>
</template>
