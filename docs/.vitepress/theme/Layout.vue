<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData, withBase } from "vitepress";
import { computed } from "vue";
import GraphBackground from "./components/GraphBackground.vue";

const { frontmatter, page, site } = useData();

const helpLink = computed(() =>
  withBase(`/troubleshooting${site.value.cleanUrls ? "" : ".html"}`),
);
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-top>
      <GraphBackground />
    </template>
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
        <a :href="helpLink"
          >Решение проблем <span aria-hidden="true">→</span></a
        >
      </aside>
    </template>
  </DefaultTheme.Layout>
</template>
