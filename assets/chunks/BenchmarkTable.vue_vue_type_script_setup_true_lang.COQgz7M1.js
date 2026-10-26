import { d as defineComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, t as toDisplayString, F as Fragment, B as renderList, a as createTextVNode, e as createCommentVNode, n as normalizeClass, k as unref, h as computed } from "./framework.DiR_5bBd.js";
function formatMetric(value, precision) {
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: precision,
    minimumFractionDigits: precision
  }).format(value);
}
const _hoisted_1 = ["aria-label"];
const _hoisted_2 = { class: "st-bench-table" };
const _hoisted_3 = { scope: "row" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  key: 0,
  class: "st-bench-suffix"
};
const _hoisted_6 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BenchmarkTable",
  props: {
    table: {}
  },
  setup(__props) {
    const props = __props;
    const bestValues = computed(
      () => new Map(
        props.table.columns.map((column) => {
          const values = props.table.rows.map(
            (row) => row.cells[column.key].value
          );
          return [
            column.key,
            column.direction === "lower" ? Math.min(...values) : Math.max(...values)
          ];
        })
      )
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "st-bench-table-wrap",
        tabindex: "0",
        role: "region",
        "aria-label": __props.table.caption
      }, [
        createBaseVNode("table", _hoisted_2, [
          createBaseVNode("caption", null, toDisplayString(__props.table.caption), 1),
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              _cache[0] || (_cache[0] = createBaseVNode("th", { scope: "col" }, "Инструмент", -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.table.columns, (column) => {
                return openBlock(), createElementBlock("th", {
                  key: column.key,
                  scope: "col"
                }, toDisplayString(column.label), 1);
              }), 128))
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.table.rows, (row) => {
              return openBlock(), createElementBlock("tr", {
                key: row.id
              }, [
                createBaseVNode("th", _hoisted_3, [
                  createTextVNode(toDisplayString(row.label) + " ", 1),
                  row.note ? (openBlock(), createElementBlock("small", _hoisted_4, toDisplayString(row.note), 1)) : createCommentVNode("", true)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.table.columns, (column) => {
                  return openBlock(), createElementBlock("td", {
                    key: column.key
                  }, [
                    createBaseVNode("span", {
                      class: normalizeClass({
                        "st-bench-best": row.cells[column.key].value === bestValues.value.get(column.key)
                      })
                    }, toDisplayString(unref(formatMetric)(row.cells[column.key].value, column.precision)), 3),
                    row.cells[column.key].suffix ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(row.cells[column.key].suffix), 1)) : createCommentVNode("", true),
                    row.cells[column.key].note ? (openBlock(), createElementBlock("small", _hoisted_6, toDisplayString(row.cells[column.key].note), 1)) : createCommentVNode("", true)
                  ]);
                }), 128))
              ]);
            }), 128))
          ])
        ])
      ], 8, _hoisted_1);
    };
  }
});
export {
  _sfc_main as _
};
