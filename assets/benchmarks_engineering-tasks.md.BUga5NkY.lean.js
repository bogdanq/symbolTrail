import { _ as _sfc_main$1 } from "./chunks/BenchmarkTable.vue_vue_type_script_setup_true_lang.COQgz7M1.js";
import { o as openBlock, c as createElementBlock, a2 as createStaticVNode, E as createVNode, k as unref, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.DiR_5bBd.js";
const table = {
  caption: "Общие результаты · 5 задач на инструмент",
  columns: [
    {
      key: "score",
      label: "Оценка / 100",
      precision: 2,
      direction: "higher"
    },
    {
      key: "input",
      label: "Входные токены",
      precision: 0,
      direction: "lower"
    },
    {
      key: "output",
      label: "Выходные токены",
      precision: 0,
      direction: "lower"
    },
    {
      key: "actions",
      label: "Действия",
      precision: 0,
      direction: "lower"
    },
    {
      key: "minutes",
      label: "Время, мин",
      precision: 2,
      direction: "lower"
    },
    {
      key: "cost",
      label: "Стоимость API, USD",
      precision: 2,
      direction: "lower"
    }
  ],
  rows: [
    {
      id: "graph",
      label: "SymbolTrail",
      note: "",
      cells: {
        score: {
          value: 97.666,
          suffix: "/ 100",
          note: ""
        },
        input: {
          value: 10201924,
          suffix: "",
          note: "Из них кэш: 9 573 760"
        },
        output: {
          value: 80899,
          suffix: "",
          note: ""
        },
        actions: {
          value: 252,
          suffix: "",
          note: "shell: 222 · MCP: 9 · patch: 21"
        },
        minutes: {
          value: 35.60458333333333,
          suffix: "",
          note: ""
        },
        cost: {
          value: 3.022694,
          suffix: "",
          note: "≈ 75,57 расчётных кредитов"
        }
      }
    },
    {
      id: "codegraph",
      label: "CodeGraph",
      note: "",
      cells: {
        score: {
          value: 97.666,
          suffix: "/ 100",
          note: ""
        },
        input: {
          value: 8254685,
          suffix: "",
          note: "Из них кэш: 7 734 144"
        },
        output: {
          value: 72501,
          suffix: "",
          note: ""
        },
        actions: {
          value: 204,
          suffix: "",
          note: "shell: 163 · MCP: 19 · patch: 22"
        },
        minutes: {
          value: 32.26481666666667,
          suffix: "",
          note: ""
        },
        cost: {
          value: 2.5395064,
          suffix: "",
          note: "≈ 63,49 расчётных кредитов"
        }
      }
    },
    {
      id: "graphify",
      label: "Graphify",
      note: "",
      cells: {
        score: {
          value: 100,
          suffix: "/ 100",
          note: ""
        },
        input: {
          value: 12201993,
          suffix: "",
          note: "Из них кэш: 11 470 080"
        },
        output: {
          value: 83510,
          suffix: "",
          note: ""
        },
        actions: {
          value: 226,
          suffix: "",
          note: "shell: 203 · MCP: 4 · patch: 19"
        },
        minutes: {
          value: 37.18033333333333,
          suffix: "",
          note: ""
        },
        cost: {
          value: 3.4459340000000003,
          suffix: "",
          note: "≈ 86,15 расчётных кредитов"
        }
      }
    }
  ]
};
const tasks = [
  {
    id: "01",
    title: "Скрытие тестовых файлов в поиске",
    table: {
      caption: "Задача 01 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 100",
          precision: 2,
          direction: "higher"
        },
        {
          key: "input",
          label: "Входные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "output",
          label: "Выходные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "actions",
          label: "Действия",
          precision: 0,
          direction: "lower"
        },
        {
          key: "minutes",
          label: "Время, мин",
          precision: 2,
          direction: "lower"
        },
        {
          key: "cost",
          label: "Стоимость API, USD",
          precision: 2,
          direction: "lower"
        }
      ],
      rows: [
        {
          id: "graph",
          label: "SymbolTrail",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 2721874,
              suffix: "",
              note: "Из них кэш: 2 616 064"
            },
            output: {
              value: 18896,
              suffix: "",
              note: ""
            },
            actions: {
              value: 69,
              suffix: "",
              note: "shell: 57 · MCP: 2 · patch: 10"
            },
            minutes: {
              value: 7.436016666666666,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.6621864000000001,
              suffix: "",
              note: "≈ 16,55 расчётных кредитов"
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 1833138,
              suffix: "",
              note: "Из них кэш: 1 715 584"
            },
            output: {
              value: 15988,
              suffix: "",
              note: ""
            },
            actions: {
              value: 51,
              suffix: "",
              note: "shell: 40 · MCP: 2 · patch: 9"
            },
            minutes: {
              value: 6.785833333333334,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.5665464,
              suffix: "",
              note: "≈ 14,16 расчётных кредитов"
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 3835396,
              suffix: "",
              note: "Из них кэш: 3 618 432"
            },
            output: {
              value: 20577,
              suffix: "",
              note: ""
            },
            actions: {
              value: 65,
              suffix: "",
              note: "shell: 54 · MCP: 1 · patch: 10"
            },
            minutes: {
              value: 8.93225,
              suffix: "",
              note: ""
            },
            cost: {
              value: 1.0015412,
              suffix: "",
              note: "≈ 25,04 расчётных кредитов"
            }
          }
        }
      ]
    }
  },
  {
    id: "02",
    title: "Потеря области unused=prod",
    table: {
      caption: "Задача 02 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 100",
          precision: 2,
          direction: "higher"
        },
        {
          key: "input",
          label: "Входные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "output",
          label: "Выходные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "actions",
          label: "Действия",
          precision: 0,
          direction: "lower"
        },
        {
          key: "minutes",
          label: "Время, мин",
          precision: 2,
          direction: "lower"
        },
        {
          key: "cost",
          label: "Стоимость API, USD",
          precision: 2,
          direction: "lower"
        }
      ],
      rows: [
        {
          id: "graph",
          label: "SymbolTrail",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 908028,
              suffix: "",
              note: "Из них кэш: 818 944"
            },
            output: {
              value: 12832,
              suffix: "",
              note: ""
            },
            actions: {
              value: 40,
              suffix: "",
              note: "shell: 33 · MCP: 2 · patch: 5"
            },
            minutes: {
              value: 5.446166666666667,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.3883824,
              suffix: "",
              note: "≈ 9,71 расчётных кредитов"
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 1033941,
              suffix: "",
              note: "Из них кэш: 949 376"
            },
            output: {
              value: 12492,
              suffix: "",
              note: ""
            },
            actions: {
              value: 35,
              suffix: "",
              note: "shell: 26 · MCP: 4 · patch: 5"
            },
            minutes: {
              value: 5.4188,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.3889876,
              suffix: "",
              note: "≈ 9,72 расчётных кредитов"
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 1078133,
              suffix: "",
              note: "Из них кэш: 981 760"
            },
            output: {
              value: 12287,
              suffix: "",
              note: ""
            },
            actions: {
              value: 31,
              suffix: "",
              note: "shell: 28 · MCP: 0 · patch: 3"
            },
            minutes: {
              value: 5.287633333333333,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.413792,
              suffix: "",
              note: "≈ 10,34 расчётных кредитов"
            }
          }
        }
      ]
    }
  },
  {
    id: "03",
    title: "Ревью пакетных запросов MCP и CLI",
    table: {
      caption: "Задача 03 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 100",
          precision: 2,
          direction: "higher"
        },
        {
          key: "input",
          label: "Входные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "output",
          label: "Выходные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "actions",
          label: "Действия",
          precision: 0,
          direction: "lower"
        },
        {
          key: "minutes",
          label: "Время, мин",
          precision: 2,
          direction: "lower"
        },
        {
          key: "cost",
          label: "Стоимость API, USD",
          precision: 2,
          direction: "lower"
        }
      ],
      rows: [
        {
          id: "graph",
          label: "SymbolTrail",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 2063213,
              suffix: "",
              note: "Из них кэш: 1 849 472"
            },
            output: {
              value: 9211,
              suffix: "",
              note: ""
            },
            actions: {
              value: 37,
              suffix: "",
              note: "shell: 36 · MCP: 1 · patch: 0"
            },
            minutes: {
              value: 5.601366666666666,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.7045391999999999,
              suffix: "",
              note: "≈ 17,61 расчётных кредитов"
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 1334734,
              suffix: "",
              note: "Из них кэш: 1 235 712"
            },
            output: {
              value: 8846,
              suffix: "",
              note: ""
            },
            actions: {
              value: 32,
              suffix: "",
              note: "shell: 28 · MCP: 4 · patch: 0"
            },
            minutes: {
              value: 4.1524,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.41007520000000003,
              suffix: "",
              note: "≈ 10,25 расчётных кредитов"
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 2159038,
              suffix: "",
              note: "Из них кэш: 1 991 424"
            },
            output: {
              value: 15532,
              suffix: "",
              note: ""
            },
            actions: {
              value: 39,
              suffix: "",
              note: "shell: 36 · MCP: 3 · patch: 0"
            },
            minutes: {
              value: 7.37635,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.6896904,
              suffix: "",
              note: "≈ 17,24 расчётных кредитов"
            }
          }
        }
      ]
    }
  },
  {
    id: "04",
    title: "Типизированная маршрутизация HTTP-срезов",
    table: {
      caption: "Задача 04 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 100",
          precision: 2,
          direction: "higher"
        },
        {
          key: "input",
          label: "Входные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "output",
          label: "Выходные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "actions",
          label: "Действия",
          precision: 0,
          direction: "lower"
        },
        {
          key: "minutes",
          label: "Время, мин",
          precision: 2,
          direction: "lower"
        },
        {
          key: "cost",
          label: "Стоимость API, USD",
          precision: 2,
          direction: "lower"
        }
      ],
      rows: [
        {
          id: "graph",
          label: "SymbolTrail",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 2308866,
              suffix: "",
              note: "Из них кэш: 2 193 408"
            },
            output: {
              value: 19543,
              suffix: "",
              note: ""
            },
            actions: {
              value: 58,
              suffix: "",
              note: "shell: 50 · MCP: 2 · patch: 6"
            },
            minutes: {
              value: 8.168533333333333,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.6456868,
              suffix: "",
              note: "≈ 16,14 расчётных кредитов"
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 1441938,
              suffix: "",
              note: "Из них кэш: 1 333 888"
            },
            output: {
              value: 13520,
              suffix: "",
              note: ""
            },
            actions: {
              value: 36,
              suffix: "",
              note: "shell: 31 · MCP: 4 · patch: 1"
            },
            minutes: {
              value: 5.7678666666666665,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.48468880000000003,
              suffix: "",
              note: "≈ 12,12 расчётных кредитов"
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 2208858,
              suffix: "",
              note: "Из них кэш: 2 085 248"
            },
            output: {
              value: 15237,
              suffix: "",
              note: ""
            },
            actions: {
              value: 37,
              suffix: "",
              note: "shell: 37 · MCP: 0 · patch: 0"
            },
            minutes: {
              value: 6.603783333333333,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.6081148000000001,
              suffix: "",
              note: "≈ 15,20 расчётных кредитов"
            }
          }
        }
      ]
    }
  },
  {
    id: "05",
    title: "Сбой записи индекса и восстановление сервиса",
    table: {
      caption: "Задача 05 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 100",
          precision: 2,
          direction: "higher"
        },
        {
          key: "input",
          label: "Входные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "output",
          label: "Выходные токены",
          precision: 0,
          direction: "lower"
        },
        {
          key: "actions",
          label: "Действия",
          precision: 0,
          direction: "lower"
        },
        {
          key: "minutes",
          label: "Время, мин",
          precision: 2,
          direction: "lower"
        },
        {
          key: "cost",
          label: "Стоимость API, USD",
          precision: 2,
          direction: "lower"
        }
      ],
      rows: [
        {
          id: "graph",
          label: "SymbolTrail",
          note: "",
          cells: {
            score: {
              value: 88.33,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 2199943,
              suffix: "",
              note: "Из них кэш: 2 095 872"
            },
            output: {
              value: 20417,
              suffix: "",
              note: ""
            },
            actions: {
              value: 48,
              suffix: "",
              note: "shell: 46 · MCP: 2 · patch: 0"
            },
            minutes: {
              value: 8.9525,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.6218992,
              suffix: "",
              note: "≈ 15,55 расчётных кредитов"
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 88.33,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 2610934,
              suffix: "",
              note: "Из них кэш: 2 499 584"
            },
            output: {
              value: 21655,
              suffix: "",
              note: ""
            },
            actions: {
              value: 50,
              suffix: "",
              note: "shell: 38 · MCP: 5 · patch: 7"
            },
            minutes: {
              value: 10.139916666666666,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.6892084,
              suffix: "",
              note: "≈ 17,23 расчётных кредитов"
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 100,
              suffix: "/ 100",
              note: ""
            },
            input: {
              value: 2920568,
              suffix: "",
              note: "Из них кэш: 2 793 216"
            },
            output: {
              value: 19877,
              suffix: "",
              note: ""
            },
            actions: {
              value: 54,
              suffix: "",
              note: "shell: 48 · MCP: 0 · patch: 6"
            },
            minutes: {
              value: 8.980316666666667,
              suffix: "",
              note: ""
            },
            cost: {
              value: 0.7327956000000001,
              suffix: "",
              note: "≈ 18,32 расчётных кредитов"
            }
          }
        }
      ]
    }
  }
];
const data = {
  table,
  tasks
};
const __pageData = JSON.parse('{"title":"Пять инженерных задач","description":"Сравнение SymbolTrail, CodeGraph и Graphify на пяти реальных задачах разработки: качество решений, проверки, токены, действия, время и расчётная стоимость.","frontmatter":{"title":"Пять инженерных задач","description":"Сравнение SymbolTrail, CodeGraph и Graphify на пяти реальных задачах разработки: качество решений, проверки, токены, действия, время и расчётная стоимость.","section":"Сравнения и замеры","aside":false,"pageClass":"st-bench-page"},"headers":[],"relativePath":"benchmarks/engineering-tasks.md","filePath":"benchmarks/engineering-tasks.md"}');
const __default__ = { name: "benchmarks/engineering-tasks.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createStaticVNode("", 6)),
        createVNode(_sfc_main$1, {
          table: unref(data).table
        }, null, 8, ["table"]),
        _cache[1] || (_cache[1] = createStaticVNode("", 5)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[0].table
        }, null, 8, ["table"]),
        _cache[2] || (_cache[2] = createBaseVNode("h3", {
          id: "_02-область-поиска-unused-prod",
          tabindex: "-1"
        }, [
          createTextVNode("02. Область поиска unused=prod "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_02-область-поиска-unused-prod",
            "aria-label": 'Permalink to "02. Область поиска unused=prod"'
          }, "​")
        ], -1)),
        _cache[3] || (_cache[3] = createBaseVNode("p", null, "Воспроизвести и исправить зависимость выдачи от порядка выбранных репозиториев и потерю ограничения по файлу. Проверить объединение однотипных фильтров по OR и пересечение разных фильтров по AND через публичный HTTP-вход.", -1)),
        _cache[4] || (_cache[4] = createBaseVNode("p", null, [
          createTextVNode("Все три решения получили "),
          createBaseVNode("strong", null, "100 / 100"),
          createTextVNode(" и прошли "),
          createBaseVNode("strong", null, "8 из 8 независимых проверок"),
          createTextVNode(", включая перестановку фильтров, пагинацию и одинаковые имена объявлений в разных областях.")
        ], -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[1].table
        }, null, 8, ["table"]),
        _cache[5] || (_cache[5] = createBaseVNode("h3", {
          id: "_03-ревью-пакетных-запросов-mcp-и-cli",
          tabindex: "-1"
        }, [
          createTextVNode("03. Ревью пакетных запросов MCP и CLI "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_03-ревью-пакетных-запросов-mcp-и-cli",
            "aria-label": 'Permalink to "03. Ревью пакетных запросов MCP и CLI"'
          }, "​")
        ], -1)),
        _cache[6] || (_cache[6] = createBaseVNode("p", null, "Проверить переход на массив queries: схемы, диспетчеризацию, порядок ответов, ошибки, продолжения и потребителей CLI. Задача требовала подтверждённых замечаний без исправления реализации.", -1)),
        _cache[7] || (_cache[7] = createBaseVNode("p", null, [
          createTextVNode("Graphify обнаружил "),
          createBaseVNode("strong", null, "P2-дефект кода завершения CLI"),
          createTextVNode(", который SymbolTrail и CodeGraph пропустили. Оценка — "),
          createBaseVNode("strong", null, "100 / 100 для всех трёх решений"),
          createTextVNode(".")
        ], -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[2].table
        }, null, 8, ["table"]),
        _cache[8] || (_cache[8] = createBaseVNode("h3", {
          id: "_04-типизированная-маршрутизация-http",
          tabindex: "-1"
        }, [
          createTextVNode("04. Типизированная маршрутизация HTTP "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_04-типизированная-маршрутизация-http",
            "aria-label": 'Permalink to "04. Типизированная маршрутизация HTTP"'
          }, "​")
        ], -1)),
        _cache[9] || (_cache[9] = createBaseVNode("p", null, "Убрать необходимость синхронно поддерживать несколько перечней видов срезов и обработчиков. Сохранить адреса, параметры, значения по умолчанию, ответы и HTTP-статусы, проверив сервер и потребителей интерфейса.", -1)),
        _cache[10] || (_cache[10] = createBaseVNode("p", null, [
          createTextVNode("Все три решения получили "),
          createBaseVNode("strong", null, "100 / 100"),
          createTextVNode(" и прошли "),
          createBaseVNode("strong", null, "171 из 171 независимой проверки"),
          createTextVNode(" публичного поведения.")
        ], -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[3].table
        }, null, 8, ["table"]),
        _cache[11] || (_cache[11] = createBaseVNode("h3", {
          id: "_05-восстановление-после-ошибки-записи-индекса",
          tabindex: "-1"
        }, [
          createTextVNode("05. Восстановление после ошибки записи индекса "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_05-восстановление-после-ошибки-записи-индекса",
            "aria-label": 'Permalink to "05. Восстановление после ошибки записи индекса"'
          }, "​")
        ], -1)),
        _cache[12] || (_cache[12] = createBaseVNode("p", null, "Проверить откат неудачной транзакции и следующее успешное обновление без перезапуска MCP. Отдельно проверить очередь watch: изменения, поступившие во время неудачной сборки, должны попасть в следующую обработку.", -1)),
        _cache[13] || (_cache[13] = createBaseVNode("p", null, [
          createTextVNode("Все три решения выдержали "),
          createBaseVNode("strong", null, "три повторения"),
          createTextVNode(" и проверки отката и публикации. Только новый тест Graphify обнаруживал потерю события для файла, изменённого во время сбоя; в двух других решениях повторная постановка исходного пути маскировала этот дефект. Оценки — "),
          createBaseVNode("strong", null, "88,33 / 88,33 / 100"),
          createTextVNode(". Очередь проверялась управляемыми событиями; реальные уведомления ОС не подтверждены из-за ограничения fs.watch / EMFILE в среде запуска.")
        ], -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[4].table
        }, null, 8, ["table"]),
        _cache[14] || (_cache[14] = createStaticVNode("", 7))
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
