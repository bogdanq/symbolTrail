<script setup lang="ts">
import { computed } from "vue";
import { useData, withBase } from "vitepress";
import {
  scenarioFlows,
  type ScenarioFlow,
  type ScenarioFlowId,
  type ScenarioTool,
} from "./scenario-flows";

const props = defineProps<{ scenario: ScenarioFlowId }>();
const { site } = useData();
const flow = computed<ScenarioFlow>(() => scenarioFlows[props.scenario]);

function toolLink(tool: ScenarioTool): string {
  return withBase(`/tools${site.value.cleanUrls ? "" : ".html"}#${tool}`);
}
</script>

<template>
  <figure class="st-scenario-flow" :aria-label="`Маршрут: ${flow.title}`">
    <figcaption class="st-flow-caption">Пример маршрута агента</figcaption>
    <ol class="st-flow-steps" role="list">
      <li
        v-for="(step, index) in flow.steps"
        :key="step.title"
        class="st-flow-step"
      >
        <span class="st-flow-number" aria-hidden="true">{{ index + 1 }}</span>
        <svg
          v-if="index < flow.steps.length - 1"
          class="st-flow-arrow st-flow-arrow-horizontal"
          viewBox="0 0 100 14"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0 7H98M94 3L98 7L94 11" />
        </svg>
        <svg
          v-if="index < flow.steps.length - 1"
          class="st-flow-arrow st-flow-arrow-vertical"
          viewBox="0 0 14 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M7 0V98M3 94L7 98L11 94" />
        </svg>
        <div class="st-flow-content">
          <span class="st-flow-title">{{ step.title }}</span>
          <span v-if="step.tools?.length" class="st-flow-tools">
            <template v-for="(tool, toolIndex) in step.tools" :key="tool">
              <span v-if="toolIndex > 0" aria-hidden="true">·</span>
              <a :href="toolLink(tool)">{{ tool }}</a>
            </template>
          </span>
          <span v-if="step.context" class="st-flow-context">
            {{ step.context }}
          </span>
        </div>
      </li>
    </ol>
  </figure>
</template>

<style scoped>
.st-scenario-flow {
  container-type: inline-size;
  margin: 24px 0;
}

.st-flow-caption {
  margin-bottom: 12px;
  color: var(--vp-c-text-3);
  font-size: 11px;
  line-height: 18px;
}

.st-flow-steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.st-flow-step {
  position: relative;
  min-width: 0;
  margin: 0;
}

.st-flow-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-bottom: 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  color: var(--vp-c-text-3);
  font-size: 11px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.st-flow-step:last-child .st-flow-number {
  border-color: transparent;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.st-flow-arrow {
  position: absolute;
  fill: none;
  stroke: var(--vp-c-text-3);
  stroke-width: 1;
  opacity: 0.55;
  pointer-events: none;
}

.st-flow-arrow path {
  vector-effect: non-scaling-stroke;
}

.st-flow-arrow-horizontal {
  top: 4px;
  left: 32px;
  width: calc(100% - 24px);
  height: 14px;
}

.st-flow-arrow-vertical {
  display: none;
}

.st-flow-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
}

.st-flow-title {
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.55;
}

.st-flow-tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 5px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  line-height: 1.8;
}

.st-flow-tools a {
  font-weight: 400;
  text-decoration: none;
}

.st-flow-tools a:hover {
  text-decoration: underline;
}

.st-flow-context {
  color: var(--vp-c-text-3);
  font-size: 12px;
  line-height: 1.6;
}

@container (max-width: 520px) {
  .st-flow-steps {
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
  }

  .st-flow-step {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr);
    column-gap: 12px;
    min-height: 42px;
  }

  .st-flow-number {
    margin-bottom: 0;
  }

  .st-flow-arrow-horizontal {
    display: none;
  }

  .st-flow-arrow-vertical {
    display: block;
    top: 28px;
    left: 4px;
    width: 14px;
    height: calc(100% - 10px);
  }
}
</style>
