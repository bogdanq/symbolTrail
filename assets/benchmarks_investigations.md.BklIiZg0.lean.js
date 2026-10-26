import { _ as _sfc_main$1 } from "./chunks/BenchmarkTable.vue_vue_type_script_setup_true_lang.COQgz7M1.js";
import { o as openBlock, c as createElementBlock, a2 as createStaticVNode, E as createVNode, k as unref, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.DiR_5bBd.js";
const table = {
  caption: "Общие результаты · 10 задач на инструмент",
  columns: [
    {
      key: "score",
      label: "Оценка / 10",
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
      key: "usefulness",
      label: "Полезность графа / 10",
      precision: 1,
      direction: "higher"
    },
    {
      key: "minutes",
      label: "Время, мин",
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
          value: 9.416666666666666,
          suffix: "/ 10",
          note: ""
        },
        input: {
          value: 4915369,
          suffix: "",
          note: "Из них кэш: 4 225 792"
        },
        output: {
          value: 63120,
          suffix: "",
          note: ""
        },
        actions: {
          value: 590,
          suffix: "",
          note: "Индекс: 68 · исходники: 522"
        },
        usefulness: {
          value: 6.2,
          suffix: "/ 10",
          note: ""
        },
        minutes: {
          value: 29.12575,
          suffix: "",
          note: ""
        }
      }
    },
    {
      id: "codegraph",
      label: "CodeGraph",
      note: "",
      cells: {
        score: {
          value: 9.333333333333334,
          suffix: "/ 10",
          note: ""
        },
        input: {
          value: 5816291,
          suffix: "",
          note: "Из них кэш: 5 078 656"
        },
        output: {
          value: 57809,
          suffix: "",
          note: ""
        },
        actions: {
          value: 528,
          suffix: "",
          note: "Индекс: 26 · исходники: 502"
        },
        usefulness: {
          value: 6,
          suffix: "/ 10",
          note: ""
        },
        minutes: {
          value: 26.872066666666665,
          suffix: "",
          note: ""
        }
      }
    },
    {
      id: "graphify",
      label: "Graphify",
      note: "",
      cells: {
        score: {
          value: 9.333333333333334,
          suffix: "/ 10",
          note: ""
        },
        input: {
          value: 5132784,
          suffix: "",
          note: "Из них кэш: 4 407 680"
        },
        output: {
          value: 60610,
          suffix: "",
          note: ""
        },
        actions: {
          value: 661,
          suffix: "",
          note: "Индекс: 142 · исходники: 519"
        },
        usefulness: {
          value: 6,
          suffix: "/ 10",
          note: ""
        },
        minutes: {
          value: 26.491866666666667,
          suffix: "",
          note: ""
        }
      }
    }
  ]
};
const tasks = [
  {
    id: "01",
    title: "Подсказки поиска: отмена, debounce и поздний ответ",
    table: {
      caption: "Задача 01 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 330612,
              suffix: "",
              note: ""
            },
            output: {
              value: 4900,
              suffix: "",
              note: ""
            },
            actions: {
              value: 37,
              suffix: "",
              note: "Индекс: 7 · исходники: 30"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.606133333333333,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 325049,
              suffix: "",
              note: ""
            },
            output: {
              value: 5348,
              suffix: "",
              note: ""
            },
            actions: {
              value: 37,
              suffix: "",
              note: "Индекс: 3 · исходники: 34"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.3658333333333332,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 323530,
              suffix: "",
              note: ""
            },
            output: {
              value: 4639,
              suffix: "",
              note: ""
            },
            actions: {
              value: 43,
              suffix: "",
              note: "Индекс: 14 · исходники: 29"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.2367,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "02",
    title: "Две страницы связей и вложенный курсор имён",
    table: {
      caption: "Задача 02 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 9.166666666666666,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 457999,
              suffix: "",
              note: ""
            },
            output: {
              value: 6647,
              suffix: "",
              note: ""
            },
            actions: {
              value: 58,
              suffix: "",
              note: "Индекс: 7 · исходники: 51"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.19755,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 455830,
              suffix: "",
              note: ""
            },
            output: {
              value: 5006,
              suffix: "",
              note: ""
            },
            actions: {
              value: 52,
              suffix: "",
              note: "Индекс: 2 · исходники: 50"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.354616666666667,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 9.166666666666666,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 473167,
              suffix: "",
              note: ""
            },
            output: {
              value: 6425,
              suffix: "",
              note: ""
            },
            actions: {
              value: 61,
              suffix: "",
              note: "Индекс: 13 · исходники: 48"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.772666666666667,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "03",
    title: "Вкладки символа и отложенные запросы через callbacks",
    table: {
      caption: "Задача 03 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 281798,
              suffix: "",
              note: ""
            },
            output: {
              value: 5880,
              suffix: "",
              note: ""
            },
            actions: {
              value: 49,
              suffix: "",
              note: "Индекс: 7 · исходники: 42"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.577,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 9.166666666666666,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 235118,
              suffix: "",
              note: ""
            },
            output: {
              value: 5258,
              suffix: "",
              note: ""
            },
            actions: {
              value: 37,
              suffix: "",
              note: "Индекс: 2 · исходники: 35"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.5395666666666665,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 9.166666666666666,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 349655,
              suffix: "",
              note: ""
            },
            output: {
              value: 5431,
              suffix: "",
              note: ""
            },
            actions: {
              value: 59,
              suffix: "",
              note: "Индекс: 11 · исходники: 48"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 1.35455,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "04",
    title: "Текстовый поиск, unused и согласованность старой выдачи",
    table: {
      caption: "Задача 04 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 8.333333333333334,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 389628,
              suffix: "",
              note: ""
            },
            output: {
              value: 5505,
              suffix: "",
              note: ""
            },
            actions: {
              value: 48,
              suffix: "",
              note: "Индекс: 6 · исходники: 42"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.4715333333333334,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 8.333333333333334,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 582866,
              suffix: "",
              note: ""
            },
            output: {
              value: 6612,
              suffix: "",
              note: ""
            },
            actions: {
              value: 44,
              suffix: "",
              note: "Индекс: 3 · исходники: 41"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.0515,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 8.333333333333334,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 369396,
              suffix: "",
              note: ""
            },
            output: {
              value: 5556,
              suffix: "",
              note: ""
            },
            actions: {
              value: 50,
              suffix: "",
              note: "Индекс: 12 · исходники: 38"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.45555,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "05",
    title: "Места экспорта через реэкспорты и соседний репозиторий",
    table: {
      caption: "Задача 05 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 472820,
              suffix: "",
              note: ""
            },
            output: {
              value: 5467,
              suffix: "",
              note: ""
            },
            actions: {
              value: 58,
              suffix: "",
              note: "Индекс: 9 · исходники: 49"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.67685,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 619765,
              suffix: "",
              note: ""
            },
            output: {
              value: 5274,
              suffix: "",
              note: ""
            },
            actions: {
              value: 57,
              suffix: "",
              note: "Индекс: 3 · исходники: 54"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.44335,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 364812,
              suffix: "",
              note: ""
            },
            output: {
              value: 6386,
              suffix: "",
              note: ""
            },
            actions: {
              value: 57,
              suffix: "",
              note: "Индекс: 14 · исходники: 43"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.9505166666666667,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "06",
    title: "Живой исходник и частичные ошибки batch-чтения",
    table: {
      caption: "Задача 06 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 9.166666666666666,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 498782,
              suffix: "",
              note: ""
            },
            output: {
              value: 6637,
              suffix: "",
              note: ""
            },
            actions: {
              value: 59,
              suffix: "",
              note: "Индекс: 5 · исходники: 54"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.2335166666666666,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 9.166666666666666,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 453296,
              suffix: "",
              note: ""
            },
            output: {
              value: 5464,
              suffix: "",
              note: ""
            },
            actions: {
              value: 48,
              suffix: "",
              note: "Индекс: 3 · исходники: 45"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.5764,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 9.166666666666666,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 353649,
              suffix: "",
              note: ""
            },
            output: {
              value: 4937,
              suffix: "",
              note: ""
            },
            actions: {
              value: 61,
              suffix: "",
              note: "Индекс: 16 · исходники: 45"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 1.8488666666666667,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "07",
    title: "Один AST-проход и импортные ловушки",
    table: {
      caption: "Задача 07 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 7.5,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 360164,
              suffix: "",
              note: ""
            },
            output: {
              value: 5608,
              suffix: "",
              note: ""
            },
            actions: {
              value: 50,
              suffix: "",
              note: "Индекс: 5 · исходники: 45"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.3560666666666665,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 7.5,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 391536,
              suffix: "",
              note: ""
            },
            output: {
              value: 5166,
              suffix: "",
              note: ""
            },
            actions: {
              value: 51,
              suffix: "",
              note: "Индекс: 2 · исходники: 49"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.4797,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 7.5,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 523742,
              suffix: "",
              note: ""
            },
            output: {
              value: 5372,
              suffix: "",
              note: ""
            },
            actions: {
              value: 63,
              suffix: "",
              note: "Индекс: 11 · исходники: 52"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.6039666666666665,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "08",
    title: "Реэкспортный цикл и identity исходной декларации",
    table: {
      caption: "Задача 08 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 577941,
              suffix: "",
              note: ""
            },
            output: {
              value: 7971,
              suffix: "",
              note: ""
            },
            actions: {
              value: 68,
              suffix: "",
              note: "Индекс: 6 · исходники: 62"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.0522833333333335,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 732104,
              suffix: "",
              note: ""
            },
            output: {
              value: 5702,
              suffix: "",
              note: ""
            },
            actions: {
              value: 58,
              suffix: "",
              note: "Индекс: 3 · исходники: 55"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.667666666666667,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 690125,
              suffix: "",
              note: ""
            },
            output: {
              value: 6218,
              suffix: "",
              note: ""
            },
            actions: {
              value: 76,
              suffix: "",
              note: "Индекс: 12 · исходники: 64"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.04315,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "09",
    title: "Объектная функция, класс и возвращаемый method",
    table: {
      caption: "Задача 09 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 753910,
              suffix: "",
              note: ""
            },
            output: {
              value: 6933,
              suffix: "",
              note: ""
            },
            actions: {
              value: 70,
              suffix: "",
              note: "Индекс: 8 · исходники: 62"
            },
            usefulness: {
              value: 8,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.2447,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 784507,
              suffix: "",
              note: ""
            },
            output: {
              value: 5702,
              suffix: "",
              note: ""
            },
            actions: {
              value: 61,
              suffix: "",
              note: "Индекс: 2 · исходники: 59"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.7539833333333332,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 817773,
              suffix: "",
              note: ""
            },
            output: {
              value: 7622,
              suffix: "",
              note: ""
            },
            actions: {
              value: 87,
              suffix: "",
              note: "Индекс: 15 · исходники: 72"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.57915,
              suffix: "",
              note: ""
            }
          }
        }
      ]
    }
  },
  {
    id: "10",
    title: "Контракт, callback, реализация и отображение связи",
    table: {
      caption: "Задача 10 · результаты",
      columns: [
        {
          key: "score",
          label: "Оценка / 10",
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
          key: "usefulness",
          label: "Полезность графа / 10",
          precision: 1,
          direction: "higher"
        },
        {
          key: "minutes",
          label: "Время, мин",
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
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 791715,
              suffix: "",
              note: ""
            },
            output: {
              value: 7572,
              suffix: "",
              note: ""
            },
            actions: {
              value: 93,
              suffix: "",
              note: "Индекс: 8 · исходники: 85"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 2.7101166666666665,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "codegraph",
          label: "CodeGraph",
          note: "",
          cells: {
            score: {
              value: 9.166666666666666,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 1236220,
              suffix: "",
              note: ""
            },
            output: {
              value: 8277,
              suffix: "",
              note: ""
            },
            actions: {
              value: 83,
              suffix: "",
              note: "Индекс: 3 · исходники: 80"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.63945,
              suffix: "",
              note: ""
            }
          }
        },
        {
          id: "graphify",
          label: "Graphify",
          note: "",
          cells: {
            score: {
              value: 10,
              suffix: "/ 10",
              note: ""
            },
            input: {
              value: 866935,
              suffix: "",
              note: ""
            },
            output: {
              value: 8024,
              suffix: "",
              note: ""
            },
            actions: {
              value: 104,
              suffix: "",
              note: "Индекс: 24 · исходники: 80"
            },
            usefulness: {
              value: 6,
              suffix: "/ 10",
              note: ""
            },
            minutes: {
              value: 3.64675,
              suffix: "",
              note: ""
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
const __pageData = JSON.parse('{"title":"Сквозное исследование кода","description":"30 запусков AI-агентов на 10 сквозных задачах: качество ответов, токены, действия и время с SymbolTrail, CodeGraph и Graphify.","frontmatter":{"title":"Сквозное исследование кода","description":"30 запусков AI-агентов на 10 сквозных задачах: качество ответов, токены, действия и время с SymbolTrail, CodeGraph и Graphify.","section":"Сравнения и замеры","aside":false,"pageClass":"st-bench-page"},"headers":[],"relativePath":"benchmarks/investigations.md","filePath":"benchmarks/investigations.md"}');
const __default__ = { name: "benchmarks/investigations.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createStaticVNode("", 7)),
        createVNode(_sfc_main$1, {
          table: unref(data).table
        }, null, 8, ["table"]),
        _cache[1] || (_cache[1] = createBaseVNode("h2", {
          id: "что-исследовали-агенты",
          tabindex: "-1"
        }, [
          createTextVNode("Что исследовали агенты "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#что-исследовали-агенты",
            "aria-label": 'Permalink to "Что исследовали агенты"'
          }, "​")
        ], -1)),
        _cache[2] || (_cache[2] = createBaseVNode("h3", {
          id: "_01-подсказки-поиска",
          tabindex: "-1"
        }, [
          createTextVNode("01. Подсказки поиска "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_01-подсказки-поиска",
            "aria-label": 'Permalink to "01. Подсказки поиска"'
          }, "​")
        ], -1)),
        _cache[3] || (_cache[3] = createBaseVNode("p", null, "Проследить запрос от поля ввода и хуков до HTTP и SQL. Объяснить debounce, отмену, поздние ответы, повторную загрузку и различие между обновлением кэша и изменением видимой выдачи.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[0].table
        }, null, 8, ["table"]),
        _cache[4] || (_cache[4] = createBaseVNode("h3", {
          id: "_02-пагинация-связеи-фаила",
          tabindex: "-1"
        }, [
          createTextVNode("02. Пагинация связей файла "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_02-пагинация-связеи-фаила",
            "aria-label": 'Permalink to "02. Пагинация связей файла"'
          }, "​")
        ], -1)),
        _cache[5] || (_cache[5] = createBaseVNode("p", null, "Разобрать входящие и исходящие зависимости с вложенным курсором имён и переходом между репозиториями. Проверить поведение старых страниц, ошибок и повторных запросов с сохранением URL.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[1].table
        }, null, 8, ["table"]),
        _cache[6] || (_cache[6] = createBaseVNode("h3", {
          id: "_03-вкладки-символа",
          tabindex: "-1"
        }, [
          createTextVNode("03. Вкладки символа "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_03-вкладки-символа",
            "aria-label": 'Permalink to "03. Вкладки символа"'
          }, "​")
        ], -1)),
        _cache[7] || (_cache[7] = createBaseVNode("p", null, "Объяснить переключение между местами использования, коммитами и похожим кодом: когда монтируется вкладка, когда запускается отложенный запрос и как разделяются кэш и частичные ошибки.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[2].table
        }, null, 8, ["table"]),
        _cache[8] || (_cache[8] = createBaseVNode("h3", {
          id: "_04-текстовыи-поиск-и-unused",
          tabindex: "-1"
        }, [
          createTextVNode("04. Текстовый поиск и unused "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_04-текстовыи-поиск-и-unused",
            "aria-label": 'Permalink to "04. Текстовый поиск и unused"'
          }, "​")
        ], -1)),
        _cache[9] || (_cache[9] = createBaseVNode("p", null, "Оценить последствия перехода многословного поиска к условию AND: от ввода и URL до SQL и отображения. Разобрать старую выдачу во время запроса, пагинацию и область поиска unused=prod.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[3].table
        }, null, 8, ["table"]),
        _cache[10] || (_cache[10] = createBaseVNode("h3", {
          id: "_05-места-использования-экспорта",
          tabindex: "-1"
        }, [
          createTextVNode("05. Места использования экспорта "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_05-места-использования-экспорта",
            "aria-label": 'Permalink to "05. Места использования экспорта"'
          }, "​")
        ], -1)),
        _cache[11] || (_cache[11] = createBaseVNode("p", null, "Проследить экспорт через псевдонимы, wildcard-реэкспорты, циклы и соседний репозиторий. Объяснить идентичность исходного объявления, роли связей, удаление дублей и порядок результатов.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[4].table
        }, null, 8, ["table"]),
        _cache[12] || (_cache[12] = createBaseVNode("h3", {
          id: "_06-чтение-живого-исходника",
          tabindex: "-1"
        }, [
          createTextVNode("06. Чтение живого исходника "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_06-чтение-живого-исходника",
            "aria-label": 'Permalink to "06. Чтение живого исходника"'
          }, "​")
        ], -1)),
        _cache[13] || (_cache[13] = createBaseVNode("p", null, "Проверить чтение изменённого после индексации файла и пакет с одним удалённым файлом. Различить свежий текст, прежние связи индекса, границы фрагментов, кэш и частичные ошибки чтения.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[5].table
        }, null, 8, ["table"]),
        _cache[14] || (_cache[14] = createBaseVNode("h3", {
          id: "_07-ast-проход-и-импорты",
          tabindex: "-1"
        }, [
          createTextVNode("07. AST-проход и импорты "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_07-ast-проход-и-импорты",
            "aria-label": 'Permalink to "07. AST-проход и импорты"'
          }, "​")
        ], -1)),
        _cache[15] || (_cache[15] = createBaseVNode("p", null, "Проследить обработку файла через парсер, worker, кэш и построение графа. Различить статический и вычисляемый import, псевдоним require и строку, которая только похожа на импорт.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[6].table
        }, null, 8, ["table"]),
        _cache[16] || (_cache[16] = createBaseVNode("h3", {
          id: "_08-цикл-реэкспортов",
          tabindex: "-1"
        }, [
          createTextVNode("08. Цикл реэкспортов "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_08-цикл-реэкспортов",
            "aria-label": 'Permalink to "08. Цикл реэкспортов"'
          }, "​")
        ], -1)),
        _cache[17] || (_cache[17] = createBaseVNode("p", null, "Восстановить исходную декларацию через псевдонимы, star/default-экспорты и цикл модулей. Объяснить разрешение конфликтов и сохранение identity при записи в SQLite.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[7].table
        }, null, 8, ["table"]),
        _cache[18] || (_cache[18] = createBaseVNode("h3", {
          id: "_09-возвращаемыи-метод",
          tabindex: "-1"
        }, [
          createTextVNode("09. Возвращаемый метод "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_09-возвращаемыи-метод",
            "aria-label": 'Permalink to "09. Возвращаемый метод"'
          }, "​")
        ], -1)),
        _cache[19] || (_cache[19] = createBaseVNode("p", null, "Проследить фабрику, возвращаемую функцию и вызов метода через несколько файлов. Разделить call, ref и binding, не связав цепочку с посторонним объектом с таким же именем метода.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[8].table
        }, null, 8, ["table"]),
        _cache[20] || (_cache[20] = createBaseVNode("h3", {
          id: "_10-контракт-и-callback",
          tabindex: "-1"
        }, [
          createTextVNode("10. Контракт и callback "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#_10-контракт-и-callback",
            "aria-label": 'Permalink to "10. Контракт и callback"'
          }, "​")
        ], -1)),
        _cache[21] || (_cache[21] = createBaseVNode("p", null, "Восстановить путь от фабрики через параметр-интерфейс и closure до точки входа. Отделить типовой контракт от конкретной реализации и объяснить границы статического вывода.", -1)),
        createVNode(_sfc_main$1, {
          table: unref(data).tasks[9].table
        }, null, 8, ["table"]),
        _cache[22] || (_cache[22] = createStaticVNode("", 6))
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
