<script setup lang="ts">
const solidEdges = [
  "M742 16 864 100 1060 64 1182 176 1388 132 1480 248",
  "M864 100 920 250 1084 310 1182 176 1284 350 1464 402",
  "M1060 64 1084 310 982 476 1148 550 1284 350 1394 566",
  "M920 250 746 340 802 504 982 476 1034 690 1210 734 1394 566 1484 786",
  "M1148 550 1210 734 1118 912 1306 1008 1460 924",
  "M1034 690 886 832 944 1034 1118 912",
  "M-52 208 122 292 74 470 260 538 338 374 496 458",
  "M122 292 338 374 396 204 568 280 746 340",
  "M74 470-30 664 162 732 260 538 430 686 496 458",
  "M162 732 96 924 302 1002 398 852 430 686 614 762",
  "M260 538 398 852 614 762 700 982 944 1034",
  "M302 1002 452 1150 700 982 778 1212",
].map((d, index) => ({
  d,
  animationStyle: {
    animationDelay: `${-index * 1.17}s`,
    animationDuration: `${8 + (index % 5) * 0.8}s`,
  },
}));

const edgeSignals = solidEdges.slice(0, 10);

const nodes = [
  [864, 100, 5],
  [1060, 64, 4],
  [1182, 176, 8],
  [1388, 132, 4],
  [920, 250, 6],
  [1084, 310, 11],
  [1284, 350, 5],
  [746, 340, 4],
  [802, 504, 5],
  [982, 476, 6],
  [1148, 550, 5],
  [1394, 566, 8],
  [1034, 690, 9],
  [1210, 734, 5],
  [886, 832, 5],
  [1118, 912, 7],
  [944, 1034, 5],
  [1306, 1008, 4],
  [122, 292, 5],
  [74, 470, 5],
  [338, 374, 7],
  [396, 204, 4],
  [568, 280, 4],
  [496, 458, 5],
  [260, 538, 11],
  [162, 732, 6],
  [430, 686, 5],
  [398, 852, 8],
  [614, 762, 5],
  [96, 924, 4],
  [302, 1002, 5],
  [700, 982, 6],
  [452, 1150, 4],
  [520, 80, 3],
].map(([cx, cy, r], index) => ({
  cx,
  cy,
  r,
  animationStyle: {
    animationDelay: `${-(index % 11) * 0.53}s`,
    animationDuration: `${5.4 + (index % 4) * 0.2}s`,
  },
}));
</script>

<template>
  <div class="st-doc-graph" aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="1200"
      viewBox="0 0 1440 1200"
      fill="none"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="st-doc-graph-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity=".85" />
          <stop offset=".55" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <mask id="st-doc-graph-fade">
          <rect width="1440" height="1200" fill="url(#st-doc-graph-gradient)" />
        </mask>
      </defs>
      <g
        mask="url(#st-doc-graph-fade)"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g class="st-graph-base">
          <g stroke-width="1.8" opacity=".65">
            <path v-for="edge in solidEdges" :key="edge.d" :d="edge.d" />
          </g>
          <g stroke-width="1.2" stroke-dasharray="4 8" opacity=".5">
            <path d="M568 280 802 504 614 762 886 832 982 476" />
            <path d="M396 204 520 80 742 16" />
            <path d="M430 686 802 504" />
            <path d="M1182 176 1394 566" />
            <path d="M1210 734 1306 1008 1194 1170 944 1034" />
            <path d="M96 924-22 1102 302 1002" />
          </g>
          <g stroke-width="1.8">
            <circle
              v-for="node in nodes"
              :key="`base-${node.cx}-${node.cy}`"
              :cx="node.cx"
              :cy="node.cy"
              :r="node.r"
            />
          </g>
          <g stroke-width="1.2" opacity=".5">
            <circle cx="1084" cy="310" r="24" />
            <circle cx="260" cy="538" r="24" />
            <circle cx="1034" cy="690" r="19" />
            <circle cx="398" cy="852" r="17" />
          </g>
          <g fill="currentColor" stroke="none">
            <circle cx="1084" cy="310" r="3" />
            <circle cx="260" cy="538" r="3" />
            <circle cx="1034" cy="690" r="2.5" />
            <circle cx="1182" cy="176" r="2" />
            <circle cx="398" cy="852" r="2" />
            <circle cx="1394" cy="566" r="2" />
          </g>
        </g>
        <g class="st-graph-signals">
          <g stroke-width="2.6">
            <path
              v-for="edge in edgeSignals"
              :key="`signal-${edge.d}`"
              class="st-graph-edge-signal"
              :d="edge.d"
              :style="edge.animationStyle"
              pathLength="1000"
              stroke-dasharray="40 960"
            />
          </g>
          <g stroke-width="1.8">
            <circle
              v-for="node in nodes"
              :key="`halo-${node.cx}-${node.cy}`"
              class="st-graph-halo"
              :cx="node.cx"
              :cy="node.cy"
              :r="node.r + 3"
              :style="node.animationStyle"
              vector-effect="non-scaling-stroke"
            />
          </g>
          <g stroke-width="2.6">
            <circle
              v-for="node in nodes"
              :key="`node-${node.cx}-${node.cy}`"
              class="st-graph-node-signal"
              :cx="node.cx"
              :cy="node.cy"
              :r="node.r"
              :style="node.animationStyle"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.st-doc-graph > svg {
  position: absolute;
  top: 0;
  left: 50%;
  width: max(100%, var(--st-doc-graph-width, 1440px));
  height: auto;
  max-width: none;
  transform: translateX(-50%);
}

.st-graph-base {
  opacity: calc(var(--st-doc-graph-opacity) * var(--st-doc-graph-intensity, 1));
}

.st-graph-signals {
  opacity: calc(var(--st-doc-graph-pulse-opacity) * var(--st-doc-graph-intensity, 1));
}

.st-graph-node-signal {
  opacity: 0;
  animation: st-graph-node-pulse 5.8s ease-in-out infinite;
}

.st-graph-edge-signal {
  opacity: 0;
  animation: st-graph-edge-flow 10s linear infinite;
}

.st-graph-halo {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  animation: st-graph-halo-pulse 5.8s ease-out infinite;
}

@keyframes st-graph-node-pulse {
  0%,
  65%,
  100% {
    opacity: 0;
  }

  18% {
    opacity: 1;
  }
}

@keyframes st-graph-halo-pulse {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  18% {
    opacity: 0.9;
    transform: scale(1);
  }

  65%,
  100% {
    opacity: 0;
    transform: scale(2.4);
  }
}

@keyframes st-graph-edge-flow {
  0% {
    opacity: 0;
    stroke-dashoffset: 1000;
  }

  10%,
  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .st-graph-signals {
    display: none;
  }

  .st-graph-node-signal,
  .st-graph-halo,
  .st-graph-edge-signal {
    animation: none;
  }
}
</style>
