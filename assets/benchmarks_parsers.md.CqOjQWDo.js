import{_ as x}from"./chunks/BenchmarkTable.vue_vue_type_script_setup_true_lang.Cf_1jz-U.js";import{d as b,o as r,c as a,F as u,B as f,j as e,t as i,e as m,E as l,a2 as g,k as p,a as o}from"./chunks/framework.BFIoSwgX.js";const y={class:"st-bench-cases"},k=["aria-labelledby"],j=["id"],w={class:"st-bench-kicker"},S={key:0},C={class:"st-bench-sources"},T=b({__name:"ParserCases",props:{cases:{}},setup(c){return(h,t)=>(r(),a("div",y,[(r(!0),a(u,null,f(c.cases,(n,v)=>(r(),a("section",{key:n.id,class:"st-bench-case","aria-labelledby":`parser-case-${n.id}`},[e("h3",{id:`parser-case-${n.id}`},i(v+1)+". "+i(n.title)+" · "+i(n.language),9,j),e("p",w,i(n.group)+" · Файлов: "+i(n.files.length),1),n.group!=="Базовые примеры"?(r(),a("p",S,i(n.description),1)):m("",!0),l(x,{table:n.table},null,8,["table"]),e("details",C,[e("summary",null,"Исходники примера · файлов: "+i(n.files.length),1),(r(!0),a(u,null,f(n.files,s=>(r(),a("details",{key:s.path,class:"st-bench-source-file"},[e("summary",null,i(s.path),1),e("pre",null,[e("code",null,i(s.code),1)])]))),128))])],8,k))),128))]))}}),I={caption:"Общие результаты · 37 примеров",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"Снимок проекта",cells:{declarations:{value:324,suffix:"/ 324",note:"Полнота 100,0%"},dependencies:{value:184,suffix:"/ 184",note:"Лишних 0"},relations:{value:182,suffix:"/ 189",note:"Лишних 0 · пропущено 7"},score:{value:9.81132075471698,suffix:"/ 10",note:""},reachable:{value:188,suffix:"/ 189",note:"В несколько переходов: 6"},context:{value:189,suffix:"/ 189",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"1.6.0",cells:{declarations:{value:310,suffix:"/ 324",note:"Полнота 95,7%"},dependencies:{value:168,suffix:"/ 184",note:"Лишних 8"},relations:{value:157,suffix:"/ 189",note:"Лишних 37 · пропущено 32"},score:{value:8.198433420365536,suffix:"/ 10",note:""},reachable:{value:162,suffix:"/ 189",note:"В несколько переходов: 5"},context:{value:172,suffix:"/ 189",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"0.9.93 · локальный AST",cells:{declarations:{value:317,suffix:"/ 324",note:"Полнота 97,8%"},dependencies:{value:184,suffix:"/ 184",note:"Лишних 10"},relations:{value:147,suffix:"/ 189",note:"Лишних 8 · пропущено 42"},score:{value:8.546511627906977,suffix:"/ 10",note:""},reachable:{value:149,suffix:"/ 189",note:"В несколько переходов: 2"},context:{value:165,suffix:"/ 189",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"scip-typescript 0.4.0",cells:{declarations:{value:324,suffix:"/ 324",note:"Полнота 100,0%"},dependencies:{value:184,suffix:"/ 184",note:"Лишних 0"},relations:{value:179,suffix:"/ 189",note:"Лишних 0 · пропущено 10"},score:{value:9.728260869565217,suffix:"/ 10",note:""},reachable:{value:187,suffix:"/ 189",note:"В несколько переходов: 8"},context:{value:187,suffix:"/ 189",note:"Структура и типы — не доказательство вызова"}}}]},G=[{id:"01-named-alias-js",title:"Именованный импорт с псевдонимом",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"01-named-alias-js/bridge.js",code:`import { leaf as renamed } from "./dep.js";
export function invoke() { return renamed(); }
`},{path:"01-named-alias-js/dep.js",code:`export function leaf() { return "L"; }
`},{path:"01-named-alias-js/entry.js",code:`import { invoke } from "./bridge.js";
export function run() { return invoke(); }
`}],table:{caption:"Именованный импорт с псевдонимом",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"02-barrel-alias-js",title:"Реэкспорт с псевдонимом",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"02-barrel-alias-js/barrel.js",code:`export { leaf as publicName } from "./dep.js";
`},{path:"02-barrel-alias-js/bridge.js",code:`export { publicName as api } from "./barrel.js";
`},{path:"02-barrel-alias-js/dep.js",code:`export function leaf() { return "L"; }
`},{path:"02-barrel-alias-js/entry.js",code:`import { api as local } from "./bridge.js";
export function run() { return local(); }
`}],table:{caption:"Реэкспорт с псевдонимом",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:2,suffix:"/ 2",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:2,suffix:"/ 2",note:"Полнота 100,0%"},dependencies:{value:1,suffix:"/ 3",note:"Лишних 1"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:2,suffix:"/ 2",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 2"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:2,suffix:"/ 2",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"03-namespace-import-js",title:"Импорт пространства имён",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"03-namespace-import-js/bridge.js",code:`import * as ns from "./dep.js";
export function invoke() { return ns.leaf(); }
`},{path:"03-namespace-import-js/dep.js",code:`export function leaf() { return "L"; }
export function spare() { return "S"; }
`},{path:"03-namespace-import-js/entry.js",code:`import { invoke } from "./bridge.js";
export function run() { return invoke(); }
`}],table:{caption:"Импорт пространства имён",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:4,suffix:"/ 4",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:4,suffix:"/ 4",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:4,suffix:"/ 4",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 2",note:"Лишних 0 · пропущено 1"},score:{value:6.666666666666666,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:4,suffix:"/ 4",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"04-receiver-identity-js",title:"Идентичность объекта-получателя",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"04-receiver-identity-js/entry.js",code:`import { Left } from "./left.js";
import { Right } from "./right.js";
export function runLeft() { const v = new Left(); return v.work(); }
export function runRight() { const v = new Right(); return v.work(); }
`},{path:"04-receiver-identity-js/left.js",code:`export class Left { work() { return "L"; } }
`},{path:"04-receiver-identity-js/right.js",code:`export class Right { work() { return "R"; } }
`}],table:{caption:"Идентичность объекта-получателя",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 2",note:"Лишних 1 · пропущено 1"},score:{value:5,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"05-inheritance-super-js",title:"Наследование и super",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"05-inheritance-super-js/base.js",code:`export class Base { work() { return "B"; } }
`},{path:"05-inheritance-super-js/child.js",code:`import { Base } from "./base.js";
export class Child extends Base { work() { return super.work() + "C"; } }
`},{path:"05-inheritance-super-js/entry.js",code:`import { Child } from "./child.js";
export function run() { return new Child().work(); }
`}],table:{caption:"Наследование и super",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:0,suffix:"/ 2",note:"Лишних 2 · пропущено 2"},score:{value:0,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:0,suffix:"/ 2",note:"Лишних 0 · пропущено 2"},score:{value:0,suffix:"/ 10",note:""},reachable:{value:0,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"06-returned-method-js",title:"Возвращаемый метод",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"06-returned-method-js/dep.js",code:`export const obb = { somep: () => "A" };
export const other = { somep: () => "B" };
`},{path:"06-returned-method-js/entry.js",code:`import { Fff } from "./facade.js";
export function run() { const f = new Fff(); return f.indirect().method(); }
`},{path:"06-returned-method-js/facade.js",code:`import { obb } from "./dep.js";
export class Fff {
  direct() { return obb.somep(); }
  indirect() { return { method: obb.somep }; }
}
`}],table:{caption:"Возвращаемый метод",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:4,suffix:"/ 4",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 4",note:"Лишних 0 · пропущено 2"},score:{value:6.666666666666666,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 4",note:""},context:{value:3,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:4,suffix:"/ 6",note:"Полнота 66,7%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 4",note:"Лишних 0 · пропущено 3"},score:{value:4,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 4",note:""},context:{value:1,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:3,suffix:"/ 4",note:"Лишних 0 · пропущено 1"},score:{value:8.571428571428571,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"07-callback-binding-js",title:"Связывание callback",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"07-callback-binding-js/bridge.js",code:`export function invoke(fn) { return fn(); }
`},{path:"07-callback-binding-js/dep.js",code:`export function leaf() { return "L"; }
`},{path:"07-callback-binding-js/entry.js",code:`import { leaf } from "./dep.js";
import { invoke } from "./bridge.js";
export function run() { return invoke(leaf); }
`}],table:{caption:"Связывание callback",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"08-destructure-return-js",title:"Деструктуризация возвращённого объекта",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"08-destructure-return-js/bridge.js",code:`import { leaf } from "./dep.js";
export function create() { return { act: leaf }; }
`},{path:"08-destructure-return-js/dep.js",code:`export function leaf() { return "L"; }
`},{path:"08-destructure-return-js/entry.js",code:`import { create } from "./bridge.js";
export function run() { const { act: alias } = create(); return alias(); }
`}],table:{caption:"Деструктуризация возвращённого объекта",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 3",note:"Лишних 0 · пропущено 1"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 3",note:""},context:{value:3,suffix:"/ 3",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 3",note:"Лишних 0 · пропущено 1"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 3",note:""},context:{value:3,suffix:"/ 3",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 3",note:"Лишних 0 · пропущено 1"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 3",note:""},context:{value:3,suffix:"/ 3",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 3",note:"Лишних 0 · пропущено 1"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 3",note:""},context:{value:3,suffix:"/ 3",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"09-lexical-shadow-js",title:"Затенение имени",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"09-lexical-shadow-js/bridge.js",code:`import { leaf } from "./dep.js";
export function outer() { return leaf(); }
export function inner() { function leaf() { return "INNER"; } return leaf(); }
`},{path:"09-lexical-shadow-js/dep.js",code:`export function leaf() { return "OUTER"; }
`},{path:"09-lexical-shadow-js/entry.js",code:`import { inner, outer } from "./bridge.js";
export function run() { return outer() + inner(); }
`}],table:{caption:"Затенение имени",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:4,suffix:"/ 4",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:3,suffix:"/ 4",note:"Лишних 1 · пропущено 1"},score:{value:7.5,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:4,suffix:"/ 4",note:"Лишних 2 · пропущено 0"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:4,suffix:"/ 4",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"10-reexport-cycle-js",title:"Цикл реэкспортов",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"10-reexport-cycle-js/barrel.js",code:`export { leaf } from "./dep.js";
export * from "./bridge.js";
`},{path:"10-reexport-cycle-js/bridge.js",code:`export * from "./barrel.js";
export function spare() { return "S"; }
`},{path:"10-reexport-cycle-js/dep.js",code:`export function leaf() { return "L"; }
`},{path:"10-reexport-cycle-js/entry.js",code:`import { leaf } from "./bridge.js";
export function run() { return leaf(); }
`}],table:{caption:"Цикл реэкспортов",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:4,suffix:"/ 4",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:1,suffix:"/ 4",note:"Лишних 1"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:4,suffix:"/ 4",note:"Лишних 1"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:4,suffix:"/ 4",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"11-dynamic-import-js",title:"Динамический импорт",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"11-dynamic-import-js/bridge.js",code:`export async function invoke() { const m = await import("./dep.js"); return m.leaf(); }
`},{path:"11-dynamic-import-js/dep.js",code:`export function leaf() { return "L"; }
`},{path:"11-dynamic-import-js/entry.js",code:`import { invoke } from "./bridge.js";
export function run() { return invoke(); }
`}],table:{caption:"Динамический импорт",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:1,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 2",note:"Лишних 0 · пропущено 1"},score:{value:6.666666666666666,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 2",note:"Лишних 0 · пропущено 1"},score:{value:6.666666666666666,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"12-callback-contract-js",title:"Контракт callback",language:"JavaScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"12-callback-contract-js/bridge.js",code:`export function execute(worker) { return worker.work(); }
`},{path:"12-callback-contract-js/dep.js",code:`export class Impl { work() { return "REAL"; } }
export class Decoy { work() { return "DECOY"; } }
`},{path:"12-callback-contract-js/entry.js",code:`import { Impl } from "./dep.js";
import { execute } from "./bridge.js";
export function run() { return execute(new Impl()); }
`}],table:{caption:"Контракт callback",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"13-named-alias-ts",title:"Именованный импорт с псевдонимом",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"13-named-alias-ts/bridge.ts",code:`import { leaf as renamed } from "./dep.ts";
export function invoke() { return renamed(); }
`},{path:"13-named-alias-ts/dep.ts",code:`export function leaf(): string { return "L"; }
`},{path:"13-named-alias-ts/entry.ts",code:`import { invoke } from "./bridge.ts";
export function run() { return invoke(); }
`}],table:{caption:"Именованный импорт с псевдонимом",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"14-barrel-alias-ts",title:"Реэкспорт с псевдонимом",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"14-barrel-alias-ts/barrel.ts",code:`export { leaf as publicName } from "./dep.ts";
`},{path:"14-barrel-alias-ts/bridge.ts",code:`export { publicName as api } from "./barrel.ts";
`},{path:"14-barrel-alias-ts/dep.ts",code:`export function leaf() { return "L"; }
`},{path:"14-barrel-alias-ts/entry.ts",code:`import { api as local } from "./bridge.ts";
export function run() { return local(); }
`}],table:{caption:"Реэкспорт с псевдонимом",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:2,suffix:"/ 2",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:2,suffix:"/ 2",note:"Полнота 100,0%"},dependencies:{value:1,suffix:"/ 3",note:"Лишних 1"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:2,suffix:"/ 2",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 2"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:2,suffix:"/ 2",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"15-namespace-import-ts",title:"Импорт пространства имён",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"15-namespace-import-ts/bridge.ts",code:`import * as ns from "./dep.ts";
export function invoke() { return ns.leaf(); }
`},{path:"15-namespace-import-ts/dep.ts",code:`export function leaf() { return "L"; }
export function spare() { return "S"; }
`},{path:"15-namespace-import-ts/entry.ts",code:`import { invoke } from "./bridge.ts";
export function run() { return invoke(); }
`}],table:{caption:"Импорт пространства имён",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:4,suffix:"/ 4",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:4,suffix:"/ 4",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:4,suffix:"/ 4",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 2",note:"Лишних 0 · пропущено 1"},score:{value:6.666666666666666,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:4,suffix:"/ 4",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"16-receiver-identity-ts",title:"Идентичность объекта-получателя",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"16-receiver-identity-ts/entry.ts",code:`import { Left } from "./left.ts";
import { Right } from "./right.ts";
export function runLeft() { const v = new Left(); return v.work(); }
export function runRight() { const v = new Right(); return v.work(); }
`},{path:"16-receiver-identity-ts/left.ts",code:`export class Left { work() { return "L"; } }
`},{path:"16-receiver-identity-ts/right.ts",code:`export class Right { work() { return "R"; } }
`}],table:{caption:"Идентичность объекта-получателя",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 2",note:"Лишних 1 · пропущено 1"},score:{value:5,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"17-inheritance-super-ts",title:"Наследование и super",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"17-inheritance-super-ts/base.ts",code:`export class Base { work() { return "B"; } }
`},{path:"17-inheritance-super-ts/child.ts",code:`import { Base } from "./base.ts";
export class Child extends Base { work() { return super.work() + "C"; } }
`},{path:"17-inheritance-super-ts/entry.ts",code:`import { Child } from "./child.ts";
export function run() { return new Child().work(); }
`}],table:{caption:"Наследование и super",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:0,suffix:"/ 2",note:"Лишних 2 · пропущено 2"},score:{value:0,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:0,suffix:"/ 2",note:"Лишних 0 · пропущено 2"},score:{value:0,suffix:"/ 10",note:""},reachable:{value:0,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"18-returned-method-ts",title:"Возвращаемый метод",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"18-returned-method-ts/dep.ts",code:`export const obb = { somep: () => "A" };
export const other = { somep: () => "B" };
`},{path:"18-returned-method-ts/entry.ts",code:`import { Fff } from "./facade.ts";
export function run() { const f = new Fff(); return f.indirect().method(); }
`},{path:"18-returned-method-ts/facade.ts",code:`import { obb } from "./dep.ts";
export class Fff {
  direct() { return obb.somep(); }
  indirect() { return { method: obb.somep }; }
}
`}],table:{caption:"Возвращаемый метод",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:4,suffix:"/ 4",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 4",note:"Лишних 0 · пропущено 2"},score:{value:6.666666666666666,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 4",note:""},context:{value:3,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:4,suffix:"/ 6",note:"Полнота 66,7%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 4",note:"Лишних 0 · пропущено 3"},score:{value:4,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 4",note:""},context:{value:1,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:6,suffix:"/ 6",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:3,suffix:"/ 4",note:"Лишних 0 · пропущено 1"},score:{value:8.571428571428571,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"19-callback-binding-ts",title:"Связывание callback",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"19-callback-binding-ts/bridge.ts",code:`export function invoke(fn: () => string) { return fn(); }
`},{path:"19-callback-binding-ts/dep.ts",code:`export function leaf() { return "L"; }
`},{path:"19-callback-binding-ts/entry.ts",code:`import { leaf } from "./dep.ts";
import { invoke } from "./bridge.ts";
export function run() { return invoke(leaf); }
`}],table:{caption:"Связывание callback",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"20-destructure-return-ts",title:"Деструктуризация возвращённого объекта",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"20-destructure-return-ts/bridge.ts",code:`import { leaf } from "./dep.ts";
export function create() { return { act: leaf }; }
`},{path:"20-destructure-return-ts/dep.ts",code:`export function leaf() { return "L"; }
`},{path:"20-destructure-return-ts/entry.ts",code:`import { create } from "./bridge.ts";
export function run() { const { act: alias } = create(); return alias(); }
`}],table:{caption:"Деструктуризация возвращённого объекта",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 3",note:"Лишних 0 · пропущено 1"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 3",note:""},context:{value:3,suffix:"/ 3",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 3",note:"Лишних 0 · пропущено 1"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 3",note:""},context:{value:3,suffix:"/ 3",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 3",note:"Лишних 0 · пропущено 1"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 3",note:""},context:{value:3,suffix:"/ 3",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 3",note:"Лишних 0 · пропущено 1"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 3",note:""},context:{value:3,suffix:"/ 3",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"21-lexical-shadow-ts",title:"Затенение имени",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"21-lexical-shadow-ts/bridge.ts",code:`import { leaf } from "./dep.ts";
export function outer() { return leaf(); }
export function inner() { function leaf() { return "INNER"; } return leaf(); }
`},{path:"21-lexical-shadow-ts/dep.ts",code:`export function leaf() { return "OUTER"; }
`},{path:"21-lexical-shadow-ts/entry.ts",code:`import { inner, outer } from "./bridge.ts";
export function run() { return outer() + inner(); }
`}],table:{caption:"Затенение имени",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:4,suffix:"/ 4",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:3,suffix:"/ 4",note:"Лишних 1 · пропущено 1"},score:{value:7.5,suffix:"/ 10",note:""},reachable:{value:3,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:4,suffix:"/ 4",note:"Лишних 2 · пропущено 0"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:5,suffix:"/ 5",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:4,suffix:"/ 4",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 4",note:""},context:{value:4,suffix:"/ 4",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"22-reexport-cycle-ts",title:"Цикл реэкспортов",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"22-reexport-cycle-ts/barrel.ts",code:`export { leaf } from "./dep.ts";
export * from "./bridge.ts";
`},{path:"22-reexport-cycle-ts/bridge.ts",code:`export * from "./barrel.ts";
export function spare() { return "S"; }
`},{path:"22-reexport-cycle-ts/dep.ts",code:`export function leaf() { return "L"; }
`},{path:"22-reexport-cycle-ts/entry.ts",code:`import { leaf } from "./bridge.ts";
export function run() { return leaf(); }
`}],table:{caption:"Цикл реэкспортов",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:4,suffix:"/ 4",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:1,suffix:"/ 4",note:"Лишних 1"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:4,suffix:"/ 4",note:"Лишних 1"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:4,suffix:"/ 4",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"23-dynamic-import-ts",title:"Динамический импорт",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"23-dynamic-import-ts/bridge.ts",code:`export async function invoke() { const m = await import("./dep.ts"); return m.leaf(); }
`},{path:"23-dynamic-import-ts/dep.ts",code:`export function leaf() { return "L"; }
`},{path:"23-dynamic-import-ts/entry.ts",code:`import { invoke } from "./bridge.ts";
export function run() { return invoke(); }
`}],table:{caption:"Динамический импорт",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:1,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 2",note:"Лишних 0 · пропущено 1"},score:{value:6.666666666666666,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:1,suffix:"/ 2",note:"Лишних 0 · пропущено 1"},score:{value:6.666666666666666,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 2",note:""},context:{value:1,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:3,suffix:"/ 3",note:"Полнота 100,0%"},dependencies:{value:2,suffix:"/ 2",note:"Лишних 0"},relations:{value:2,suffix:"/ 2",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:2,suffix:"/ 2",note:""},context:{value:2,suffix:"/ 2",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"24-callback-contract-ts",title:"Контракт callback",language:"TypeScript",group:"Базовые примеры",description:"Проверка объявлений, конкретных целей call/ref и зависимостей файлов на небольшом независимом примере.",files:[{path:"24-callback-contract-ts/bridge.ts",code:`import type { Worker } from "./dep.ts";
export function execute(worker: Worker) { return worker.work(); }
`},{path:"24-callback-contract-ts/dep.ts",code:`export interface Worker { work(): string; }
export class Impl { work() { return "REAL"; } }
export class Decoy { work() { return "DECOY"; } }
`},{path:"24-callback-contract-ts/entry.ts",code:`import { Impl } from "./dep.ts";
import { execute } from "./bridge.ts";
export function run() { return execute(new Impl()); }
`}],table:{caption:"Контракт callback",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:8,suffix:"/ 8",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:7,suffix:"/ 8",note:"Полнота 87,5%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:8,suffix:"/ 8",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:8,suffix:"/ 8",note:"Полнота 100,0%"},dependencies:{value:3,suffix:"/ 3",note:"Лишних 0"},relations:{value:1,suffix:"/ 1",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:1,suffix:"/ 1",note:""},context:{value:1,suffix:"/ 1",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"01-barrel-depth-js",title:"12 уровней вызовов за двумя реэкспортами",language:"JavaScript",group:"Углублённые примеры",description:"Контроль глубины: run → alias/barrel → hop1…hop12 → persist. Реэкспорт не является runtime-кадром. never не вызывается.",files:[{path:"01-barrel-depth-js/bridge.js",code:`export { hop1 } from "./stage1.js";
`},{path:"01-barrel-depth-js/entry.js",code:`import { start } from "./public.js";

export function run() {
  return start();
}
`},{path:"01-barrel-depth-js/public.js",code:`export { hop1 as start } from "./bridge.js";
`},{path:"01-barrel-depth-js/sink.js",code:`export function persist() {
  return "PERSISTED";
}

export function never() {
  throw new Error("wrong branch");
}
`},{path:"01-barrel-depth-js/stage1.js",code:`import { hop2 as next } from "./stage2.js";

export function hop1() {
  return next();
}
`},{path:"01-barrel-depth-js/stage10.js",code:`import { hop11 as next } from "./stage11.js";

export function hop10() {
  return next();
}
`},{path:"01-barrel-depth-js/stage11.js",code:`import { hop12 as next } from "./stage12.js";

export function hop11() {
  return next();
}
`},{path:"01-barrel-depth-js/stage12.js",code:`import { persist as next } from "./sink.js";

export function hop12() {
  return next();
}
`},{path:"01-barrel-depth-js/stage2.js",code:`import { hop3 as next } from "./stage3.js";

export function hop2() {
  return next();
}
`},{path:"01-barrel-depth-js/stage3.js",code:`import { hop4 as next } from "./stage4.js";

export function hop3() {
  return next();
}
`},{path:"01-barrel-depth-js/stage4.js",code:`import { hop5 as next } from "./stage5.js";

export function hop4() {
  return next();
}
`},{path:"01-barrel-depth-js/stage5.js",code:`import { hop6 as next } from "./stage6.js";

export function hop5() {
  return next();
}
`},{path:"01-barrel-depth-js/stage6.js",code:`import { hop7 as next } from "./stage7.js";

export function hop6() {
  return next();
}
`},{path:"01-barrel-depth-js/stage7.js",code:`import { hop8 as next } from "./stage8.js";

export function hop7() {
  return next();
}
`},{path:"01-barrel-depth-js/stage8.js",code:`import { hop9 as next } from "./stage9.js";

export function hop8() {
  return next();
}
`},{path:"01-barrel-depth-js/stage9.js",code:`import { hop10 as next } from "./stage10.js";

export function hop9() {
  return next();
}
`}],table:{caption:"12 уровней вызовов за двумя реэкспортами",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:15,suffix:"/ 15",note:"Лишних 0"},relations:{value:13,suffix:"/ 13",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:13,suffix:"/ 13",note:""},context:{value:13,suffix:"/ 13",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:14,suffix:"/ 15",note:"Лишних 2"},relations:{value:13,suffix:"/ 13",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:13,suffix:"/ 13",note:""},context:{value:13,suffix:"/ 13",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:15,suffix:"/ 15",note:"Лишних 2"},relations:{value:13,suffix:"/ 13",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:13,suffix:"/ 13",note:""},context:{value:13,suffix:"/ 13",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:15,suffix:"/ 15",note:"Лишних 0"},relations:{value:13,suffix:"/ 13",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:13,suffix:"/ 13",note:""},context:{value:13,suffix:"/ 13",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"02-override-template-js",title:"Наследуемый шаблон и три реализации transform",language:"JavaScript",group:"Углублённые примеры",description:"dispatch принимает Base, объект создан как Retry. Base.execute вызывает override Retry.transform, затем super Cached.transform и Base.transform. Статическая цель this.transform не заменяет контекстный dispatch. Decoy имеет те же имена.",files:[{path:"02-override-template-js/base.js",code:`import { normalize } from "./normalize.js";

export class Base {
  execute() {
    return this.transform();
  }

  transform() {
    return normalize();
  }
}
`},{path:"02-override-template-js/cached.js",code:`import { Base } from "./base.js";

export class Cached extends Base {
  transform() {
    return super.transform();
  }
}
`},{path:"02-override-template-js/decoy.js",code:`export class Decoy {
  execute() {
    return this.transform();
  }

  transform() {
    throw new Error("decoy");
  }
}
`},{path:"02-override-template-js/dispatch.js",code:`export function dispatch(worker) {
  return worker.execute();
}
`},{path:"02-override-template-js/encode.js",code:`import { save } from "./repository.js";

export function encode() {
  return save();
}
`},{path:"02-override-template-js/entry.js",code:`import { make } from "./factory.js";
import { dispatch } from "./dispatch.js";

export function run() {
  return dispatch(make());
}
`},{path:"02-override-template-js/factory.js",code:`import { Retry } from "./retry.js";

export function make() {
  return new Retry();
}
`},{path:"02-override-template-js/normalize.js",code:`import { encode } from "./encode.js";

export function normalize() {
  return encode();
}
`},{path:"02-override-template-js/repository.js",code:`import { flush } from "./sink.js";

export function save() {
  return flush();
}
`},{path:"02-override-template-js/retry.js",code:`import { Cached } from "./cached.js";

export class Retry extends Cached {
  transform() {
    return super.transform();
  }
}
`},{path:"02-override-template-js/sink.js",code:`export function flush() {
  return "FLUSHED";
}
`}],table:{caption:"Наследуемый шаблон и три реализации transform",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:17,suffix:"/ 17",note:"Полнота 100,0%"},dependencies:{value:9,suffix:"/ 9",note:"Лишних 0"},relations:{value:9,suffix:"/ 9",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:17,suffix:"/ 17",note:"Полнота 100,0%"},dependencies:{value:9,suffix:"/ 9",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 4 · пропущено 2"},score:{value:7,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:7,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:17,suffix:"/ 17",note:"Полнота 100,0%"},dependencies:{value:9,suffix:"/ 9",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 0 · пропущено 2"},score:{value:8.75,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:7,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:17,suffix:"/ 17",note:"Полнота 100,0%"},dependencies:{value:9,suffix:"/ 9",note:"Лишних 0"},relations:{value:9,suffix:"/ 9",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"03-returned-bound-js",title:"Цепочка возвращаемых объектов и bind после destructuring",language:"JavaScript",group:"Углублённые примеры",description:"create().open().build() возвращает вложенный api; execute переименован в invoke и связан с Service.perform через bind. Вызовы фабрики и методов — отдельные шаги вычисления, а путь run → perform → … → write проверяется до конца.",files:[{path:"03-returned-bound-js/builder.js",code:`import { Service } from "./service.js";

export class Builder {
  build() {
    const service = new Service();

    return { api: { execute: service.perform.bind(service) } };
  }
}
`},{path:"03-returned-bound-js/codec.js",code:`import { write } from "./sink.js";

export function encode() {
  return write();
}
`},{path:"03-returned-bound-js/decoy.js",code:`export class Decoy {
  perform() {
    throw new Error("decoy");
  }
}
`},{path:"03-returned-bound-js/entry.js",code:`import { create } from "./factory.js";

export function run() {
  const {
    api: { execute: invoke },
  } = create().open().build();

  return invoke();
}
`},{path:"03-returned-bound-js/facade.js",code:`import { Builder } from "./builder.js";

export class Facade {
  open() {
    return new Builder();
  }
}
`},{path:"03-returned-bound-js/factory.js",code:`import { Facade } from "./facade.js";

export function create() {
  return new Facade();
}
`},{path:"03-returned-bound-js/repository.js",code:`import { commit } from "./transaction.js";

export class Repository {
  save() {
    return commit();
  }
}
`},{path:"03-returned-bound-js/service.js",code:`import { Repository } from "./repository.js";

export class Service {
  perform() {
    return new Repository().save();
  }
}
`},{path:"03-returned-bound-js/sink.js",code:`export function write() {
  return "BOUND";
}
`},{path:"03-returned-bound-js/transaction.js",code:`import { encode } from "./codec.js";

export function commit() {
  return encode();
}
`}],table:{caption:"Цепочка возвращаемых объектов и bind после destructuring",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 1 · пропущено 2"},score:{value:8.235294117647058,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:4,suffix:"/ 9",note:"Лишних 0 · пропущено 5"},score:{value:6.153846153846154,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"04-callback-pipeline-js",title:"Возвращённая closure, scheduler и виртуальный callback",language:"JavaScript",group:"Углублённые примеры",description:"job захватывает task, schedule передаёт его в invoke. Только после invoke(task) выполняется task → Impl.handle → super Base.handle. Передача task не является вызовом. Worker — контракт, конкретный Impl известен в run.",files:[{path:"04-callback-pipeline-js/base.js",code:`import { normalize } from "./normalize.js";

export class Base {
  handle() {
    return normalize();
  }
}
`},{path:"04-callback-pipeline-js/contract.js",code:`export const kind = "worker";
`},{path:"04-callback-pipeline-js/decoy.js",code:`export class Decoy {
  handle() {
    throw new Error("decoy");
  }
}
`},{path:"04-callback-pipeline-js/entry.js",code:`import { makePipeline } from "./factory.js";
import { Impl } from "./impl.js";

export function run() {
  const job = makePipeline(new Impl());

  return job();
}
`},{path:"04-callback-pipeline-js/factory.js",code:`import { schedule } from "./scheduler.js";

export function makePipeline(worker) {
  function task() {
    return worker.handle();
  }

  function job() {
    return schedule(task);
  }

  return job;
}
`},{path:"04-callback-pipeline-js/impl.js",code:`import { Base } from "./base.js";

export class Impl extends Base {
  handle() {
    return super.handle();
  }
}
`},{path:"04-callback-pipeline-js/normalize.js",code:`import { write } from "./sink.js";

export function normalize() {
  return write();
}
`},{path:"04-callback-pipeline-js/scheduler.js",code:`export function schedule(task) {
  return invoke(task);
}

export function invoke(task) {
  return task();
}
`},{path:"04-callback-pipeline-js/sink.js",code:`export function write() {
  return "CALLBACK";
}
`}],table:{caption:"Возвращённая closure, scheduler и виртуальный callback",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:14,suffix:"/ 14",note:"Полнота 100,0%"},dependencies:{value:6,suffix:"/ 6",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:14,suffix:"/ 14",note:"Полнота 100,0%"},dependencies:{value:6,suffix:"/ 6",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 2 · пропущено 2"},score:{value:7.777777777777778,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:8,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:14,suffix:"/ 14",note:"Полнота 100,0%"},dependencies:{value:6,suffix:"/ 6",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 1 · пропущено 2"},score:{value:8.235294117647058,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:8,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:14,suffix:"/ 14",note:"Полнота 100,0%"},dependencies:{value:6,suffix:"/ 6",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"05-async-registry-js",title:"await import, registry, составной receiver и computed import",language:"JavaScript",group:"Углублённые примеры",description:'load делает literal dynamic import; resolve возвращает Handler из конструктора. resolve(...).execute() должен вести к Handler.execute и далее к flush. Неисполненный import(resolvePath("./decoy")) не является literal import; вложенная строка не должна становиться статической зависимостью.',files:[{path:"05-async-registry-js/decoy.js",code:`export class Handler {
  execute() {
    throw new Error("decoy");
  }
}
`},{path:"05-async-registry-js/entry.js",code:`import { load } from "./loader.js";

export async function run() {
  const registry = await load();

  return registry.resolve("real").execute();
}
`},{path:"05-async-registry-js/handler.js",code:`import { parse } from "./parse.js";

export class Handler {
  execute() {
    return parse();
  }
}
`},{path:"05-async-registry-js/loader.js",code:`export async function load() {
  const module = await import("./plugin.js");

  return module.create();
}

function resolvePath(name) {
  return name;
}

export function computedOnly() {
  return import(resolvePath("./decoy.js"));
}
`},{path:"05-async-registry-js/parse.js",code:`import { validate } from "./validate.js";

export function parse() {
  return validate();
}
`},{path:"05-async-registry-js/plugin.js",code:`import { Registry } from "./registry.js";
import { Handler } from "./handler.js";

export function create() {
  return new Registry(new Handler());
}
`},{path:"05-async-registry-js/registry.js",code:`export class Registry {
  constructor(handler) {
    this.handler = handler;
  }

  resolve(name) {
    if (name !== "real") throw new Error("unknown");

    return this.handler;
  }
}
`},{path:"05-async-registry-js/repository.js",code:`import { flush } from "./sink.js";

export function persist() {
  return flush();
}
`},{path:"05-async-registry-js/sink.js",code:`export function flush() {
  return "PLUGIN";
}
`},{path:"05-async-registry-js/validate.js",code:`import { persist } from "./repository.js";

export function validate() {
  return persist();
}
`}],table:{caption:"await import, registry, составной receiver и computed import",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:16,suffix:"/ 16",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:8,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:16,suffix:"/ 16",note:"Полнота 100,0%"},dependencies:{value:7,suffix:"/ 8",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 1 · пропущено 2"},score:{value:8.235294117647058,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:7,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:16,suffix:"/ 16",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:6,suffix:"/ 9",note:"Лишних 0 · пропущено 3"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:6,suffix:"/ 9",note:""},context:{value:6,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:16,suffix:"/ 16",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:8,suffix:"/ 9",note:""},context:{value:8,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"06-recursive-diamond-js",title:"Рекурсия двух модулей, две ветки и общий sink",language:"JavaScript",group:"Углублённые примеры",description:"ping ↔ pong образуют цикл импорта и вызовов; после трёх итераций исполняются обе ветки diamond. Проверяем обе полные цепочки, завершение BFS с visited, точную декларацию finish и отсутствие перехода к одноимённому decoy.",files:[{path:"06-recursive-diamond-js/branch.js",code:`import { left } from "./left.js";
import { right } from "./right.js";

export function choose() {
  return left() + ":" + right();
}
`},{path:"06-recursive-diamond-js/decoy.js",code:`export function finish() {
  throw new Error("decoy");
}
`},{path:"06-recursive-diamond-js/encode.js",code:`import { commit } from "./transaction.js";

export function encode() {
  return commit();
}
`},{path:"06-recursive-diamond-js/entry.js",code:`import { ping } from "./ping.js";

export function run() {
  return ping(3);
}
`},{path:"06-recursive-diamond-js/left.js",code:`import { merge } from "./merge.js";

export function left() {
  return merge();
}
`},{path:"06-recursive-diamond-js/merge.js",code:`import { encode } from "./encode.js";

export function merge() {
  return encode();
}
`},{path:"06-recursive-diamond-js/ping.js",code:`import { pong } from "./pong.js";
import { choose } from "./branch.js";

export function ping(n) {
  return n > 0 ? pong(n - 1) : choose();
}
`},{path:"06-recursive-diamond-js/pong.js",code:`import { ping } from "./ping.js";

export function pong(n) {
  return ping(n);
}
`},{path:"06-recursive-diamond-js/right.js",code:`import { merge } from "./merge.js";

export function right() {
  return merge();
}
`},{path:"06-recursive-diamond-js/sink.js",code:`export function finish() {
  return "CYCLE";
}
`},{path:"06-recursive-diamond-js/transaction.js",code:`import { finish } from "./sink.js";

export function commit() {
  return finish();
}
`}],table:{caption:"Рекурсия двух модулей, две ветки и общий sink",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:11,suffix:"/ 11",note:"Полнота 100,0%"},dependencies:{value:11,suffix:"/ 11",note:"Лишних 0"},relations:{value:11,suffix:"/ 11",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:11,suffix:"/ 11",note:""},context:{value:11,suffix:"/ 11",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:11,suffix:"/ 11",note:"Полнота 100,0%"},dependencies:{value:11,suffix:"/ 11",note:"Лишних 0"},relations:{value:11,suffix:"/ 11",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:11,suffix:"/ 11",note:""},context:{value:11,suffix:"/ 11",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:11,suffix:"/ 11",note:"Полнота 100,0%"},dependencies:{value:11,suffix:"/ 11",note:"Лишних 0"},relations:{value:11,suffix:"/ 11",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:11,suffix:"/ 11",note:""},context:{value:11,suffix:"/ 11",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:11,suffix:"/ 11",note:"Полнота 100,0%"},dependencies:{value:11,suffix:"/ 11",note:"Лишних 0"},relations:{value:11,suffix:"/ 11",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:11,suffix:"/ 11",note:""},context:{value:11,suffix:"/ 11",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"07-barrel-depth-ts",title:"12 уровней вызовов за двумя реэкспортами",language:"TypeScript",group:"Углублённые примеры",description:"Контроль глубины: run → alias/barrel → hop1…hop12 → persist. Реэкспорт не является runtime-кадром. never не вызывается.",files:[{path:"07-barrel-depth-ts/bridge.ts",code:`export { hop1 } from "./stage1.ts";
`},{path:"07-barrel-depth-ts/entry.ts",code:`import { start } from "./public.ts";

export function run() {
  return start();
}
`},{path:"07-barrel-depth-ts/public.ts",code:`export { hop1 as start } from "./bridge.ts";
`},{path:"07-barrel-depth-ts/sink.ts",code:`export function persist() {
  return "PERSISTED";
}

export function never() {
  throw new Error("wrong branch");
}
`},{path:"07-barrel-depth-ts/stage1.ts",code:`import { hop2 as next } from "./stage2.ts";

export function hop1() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage10.ts",code:`import { hop11 as next } from "./stage11.ts";

export function hop10() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage11.ts",code:`import { hop12 as next } from "./stage12.ts";

export function hop11() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage12.ts",code:`import { persist as next } from "./sink.ts";

export function hop12() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage2.ts",code:`import { hop3 as next } from "./stage3.ts";

export function hop2() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage3.ts",code:`import { hop4 as next } from "./stage4.ts";

export function hop3() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage4.ts",code:`import { hop5 as next } from "./stage5.ts";

export function hop4() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage5.ts",code:`import { hop6 as next } from "./stage6.ts";

export function hop5() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage6.ts",code:`import { hop7 as next } from "./stage7.ts";

export function hop6() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage7.ts",code:`import { hop8 as next } from "./stage8.ts";

export function hop7() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage8.ts",code:`import { hop9 as next } from "./stage9.ts";

export function hop8() {
  return next();
}
`},{path:"07-barrel-depth-ts/stage9.ts",code:`import { hop10 as next } from "./stage10.ts";

export function hop9() {
  return next();
}
`}],table:{caption:"12 уровней вызовов за двумя реэкспортами",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:15,suffix:"/ 15",note:"Лишних 0"},relations:{value:13,suffix:"/ 13",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:13,suffix:"/ 13",note:""},context:{value:13,suffix:"/ 13",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:14,suffix:"/ 15",note:"Лишних 2"},relations:{value:13,suffix:"/ 13",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:13,suffix:"/ 13",note:""},context:{value:13,suffix:"/ 13",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:15,suffix:"/ 15",note:"Лишних 2"},relations:{value:13,suffix:"/ 13",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:13,suffix:"/ 13",note:""},context:{value:13,suffix:"/ 13",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:15,suffix:"/ 15",note:"Лишних 0"},relations:{value:13,suffix:"/ 13",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:13,suffix:"/ 13",note:""},context:{value:13,suffix:"/ 13",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"08-override-template-ts",title:"Наследуемый шаблон и три реализации transform",language:"TypeScript",group:"Углублённые примеры",description:"dispatch принимает Base, объект создан как Retry. Base.execute вызывает override Retry.transform, затем super Cached.transform и Base.transform. Статическая цель this.transform не заменяет контекстный dispatch. Decoy имеет те же имена.",files:[{path:"08-override-template-ts/base.ts",code:`import { normalize } from "./normalize.ts";

export class Base {
  execute() {
    return this.transform();
  }

  transform() {
    return normalize();
  }
}
`},{path:"08-override-template-ts/cached.ts",code:`import { Base } from "./base.ts";

export class Cached extends Base {
  transform() {
    return super.transform();
  }
}
`},{path:"08-override-template-ts/decoy.ts",code:`export class Decoy {
  execute() {
    return this.transform();
  }

  transform() {
    throw new Error("decoy");
  }
}
`},{path:"08-override-template-ts/dispatch.ts",code:`import { Base } from "./base.ts";

export function dispatch(worker: Base) {
  return worker.execute();
}
`},{path:"08-override-template-ts/encode.ts",code:`import { save } from "./repository.ts";

export function encode() {
  return save();
}
`},{path:"08-override-template-ts/entry.ts",code:`import { make } from "./factory.ts";
import { dispatch } from "./dispatch.ts";

export function run() {
  return dispatch(make());
}
`},{path:"08-override-template-ts/factory.ts",code:`import { Retry } from "./retry.ts";

export function make() {
  return new Retry();
}
`},{path:"08-override-template-ts/normalize.ts",code:`import { encode } from "./encode.ts";

export function normalize() {
  return encode();
}
`},{path:"08-override-template-ts/repository.ts",code:`import { flush } from "./sink.ts";

export function save() {
  return flush();
}
`},{path:"08-override-template-ts/retry.ts",code:`import { Cached } from "./cached.ts";

export class Retry extends Cached {
  transform() {
    return super.transform();
  }
}
`},{path:"08-override-template-ts/sink.ts",code:`export function flush() {
  return "FLUSHED";
}
`}],table:{caption:"Наследуемый шаблон и три реализации transform",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:17,suffix:"/ 17",note:"Полнота 100,0%"},dependencies:{value:10,suffix:"/ 10",note:"Лишних 0"},relations:{value:9,suffix:"/ 9",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:17,suffix:"/ 17",note:"Полнота 100,0%"},dependencies:{value:10,suffix:"/ 10",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 4 · пропущено 2"},score:{value:7,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:7,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:17,suffix:"/ 17",note:"Полнота 100,0%"},dependencies:{value:10,suffix:"/ 10",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 0 · пропущено 2"},score:{value:8.75,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:7,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:17,suffix:"/ 17",note:"Полнота 100,0%"},dependencies:{value:10,suffix:"/ 10",note:"Лишних 0"},relations:{value:9,suffix:"/ 9",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"09-returned-bound-ts",title:"Цепочка возвращаемых объектов и bind после destructuring",language:"TypeScript",group:"Углублённые примеры",description:"create().open().build() возвращает вложенный api; execute переименован в invoke и связан с Service.perform через bind. Вызовы фабрики и методов — отдельные шаги вычисления, а путь run → perform → … → write проверяется до конца.",files:[{path:"09-returned-bound-ts/builder.ts",code:`import { Service } from "./service.ts";

export class Builder {
  build() {
    const service = new Service();

    return { api: { execute: service.perform.bind(service) } };
  }
}
`},{path:"09-returned-bound-ts/codec.ts",code:`import { write } from "./sink.ts";

export function encode() {
  return write();
}
`},{path:"09-returned-bound-ts/decoy.ts",code:`export class Decoy {
  perform() {
    throw new Error("decoy");
  }
}
`},{path:"09-returned-bound-ts/entry.ts",code:`import { create } from "./factory.ts";

export function run() {
  const {
    api: { execute: invoke },
  } = create().open().build();

  return invoke();
}
`},{path:"09-returned-bound-ts/facade.ts",code:`import { Builder } from "./builder.ts";

export class Facade {
  open() {
    return new Builder();
  }
}
`},{path:"09-returned-bound-ts/factory.ts",code:`import { Facade } from "./facade.ts";

export function create() {
  return new Facade();
}
`},{path:"09-returned-bound-ts/repository.ts",code:`import { commit } from "./transaction.ts";

export class Repository {
  save() {
    return commit();
  }
}
`},{path:"09-returned-bound-ts/service.ts",code:`import { Repository } from "./repository.ts";

export class Service {
  perform() {
    return new Repository().save();
  }
}
`},{path:"09-returned-bound-ts/sink.ts",code:`export function write() {
  return "BOUND";
}
`},{path:"09-returned-bound-ts/transaction.ts",code:`import { encode } from "./codec.ts";

export function commit() {
  return encode();
}
`}],table:{caption:"Цепочка возвращаемых объектов и bind после destructuring",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 1 · пропущено 2"},score:{value:8.235294117647058,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:4,suffix:"/ 9",note:"Лишних 0 · пропущено 5"},score:{value:6.153846153846154,suffix:"/ 10",note:""},reachable:{value:4,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:15,suffix:"/ 15",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 8",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"10-callback-pipeline-ts",title:"Возвращённая closure, scheduler и виртуальный callback",language:"TypeScript",group:"Углублённые примеры",description:"job захватывает task, schedule передаёт его в invoke. Только после invoke(task) выполняется task → Impl.handle → super Base.handle. Передача task не является вызовом. Worker — контракт, конкретный Impl известен в run.",files:[{path:"10-callback-pipeline-ts/base.ts",code:`import { normalize } from "./normalize.ts";

export class Base {
  handle() {
    return normalize();
  }
}
`},{path:"10-callback-pipeline-ts/contract.ts",code:`export interface Worker {
  handle(): string;
}

export const kind = "worker";
`},{path:"10-callback-pipeline-ts/decoy.ts",code:`export class Decoy {
  handle() {
    throw new Error("decoy");
  }
}
`},{path:"10-callback-pipeline-ts/entry.ts",code:`import { makePipeline } from "./factory.ts";
import { Impl } from "./impl.ts";

export function run() {
  const job = makePipeline(new Impl());

  return job();
}
`},{path:"10-callback-pipeline-ts/factory.ts",code:`import type { Worker } from "./contract.ts";
import { schedule } from "./scheduler.ts";

export function makePipeline(worker: Worker) {
  function task() {
    return worker.handle();
  }

  function job() {
    return schedule(task);
  }

  return job;
}
`},{path:"10-callback-pipeline-ts/impl.ts",code:`import { Base } from "./base.ts";

export class Impl extends Base {
  handle() {
    return super.handle();
  }
}
`},{path:"10-callback-pipeline-ts/normalize.ts",code:`import { write } from "./sink.ts";

export function normalize() {
  return write();
}
`},{path:"10-callback-pipeline-ts/scheduler.ts",code:`export function schedule(task: () => string) {
  return invoke(task);
}

export function invoke(task: () => string) {
  return task();
}
`},{path:"10-callback-pipeline-ts/sink.ts",code:`export function write() {
  return "CALLBACK";
}
`}],table:{caption:"Возвращённая closure, scheduler и виртуальный callback",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:14,suffix:"/ 14",note:"Полнота 100,0%"},dependencies:{value:7,suffix:"/ 7",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:14,suffix:"/ 14",note:"Полнота 100,0%"},dependencies:{value:7,suffix:"/ 7",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 2 · пропущено 2"},score:{value:7.777777777777778,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:8,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:14,suffix:"/ 14",note:"Полнота 100,0%"},dependencies:{value:7,suffix:"/ 7",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 1 · пропущено 2"},score:{value:8.235294117647058,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:8,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:14,suffix:"/ 14",note:"Полнота 100,0%"},dependencies:{value:7,suffix:"/ 7",note:"Лишних 0"},relations:{value:8,suffix:"/ 9",note:"Лишних 0 · пропущено 1"},score:{value:9.411764705882353,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"11-async-registry-ts",title:"await import, registry, составной receiver и computed import",language:"TypeScript",group:"Углублённые примеры",description:'load делает literal dynamic import; resolve возвращает Handler из конструктора. resolve(...).execute() должен вести к Handler.execute и далее к flush. Неисполненный import(resolvePath("./decoy")) не является literal import; вложенная строка не должна становиться статической зависимостью.',files:[{path:"11-async-registry-ts/decoy.ts",code:`export class Handler {
  execute() {
    throw new Error("decoy");
  }
}
`},{path:"11-async-registry-ts/entry.ts",code:`import { load } from "./loader.ts";

export async function run() {
  const registry = await load();

  return registry.resolve("real").execute();
}
`},{path:"11-async-registry-ts/handler.ts",code:`import { parse } from "./parse.ts";

export class Handler {
  execute() {
    return parse();
  }
}
`},{path:"11-async-registry-ts/loader.ts",code:`export async function load() {
  const module = await import("./plugin.ts");

  return module.create();
}

function resolvePath(name: string) {
  return name;
}

export function computedOnly() {
  return import(resolvePath("./decoy.ts"));
}
`},{path:"11-async-registry-ts/parse.ts",code:`import { validate } from "./validate.ts";

export function parse() {
  return validate();
}
`},{path:"11-async-registry-ts/plugin.ts",code:`import { Registry } from "./registry.ts";
import { Handler } from "./handler.ts";

export function create() {
  return new Registry(new Handler());
}
`},{path:"11-async-registry-ts/registry.ts",code:`import { Handler } from "./handler.ts";

export class Registry {
  handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  resolve(name: string) {
    if (name !== "real") throw new Error("unknown");

    return this.handler;
  }
}
`},{path:"11-async-registry-ts/repository.ts",code:`import { flush } from "./sink.ts";

export function persist() {
  return flush();
}
`},{path:"11-async-registry-ts/sink.ts",code:`export function flush() {
  return "PLUGIN";
}
`},{path:"11-async-registry-ts/validate.ts",code:`import { persist } from "./repository.ts";

export function validate() {
  return persist();
}
`}],table:{caption:"await import, registry, составной receiver и computed import",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:16,suffix:"/ 16",note:"Полнота 100,0%"},dependencies:{value:9,suffix:"/ 9",note:"Лишних 0"},relations:{value:9,suffix:"/ 9",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:16,suffix:"/ 16",note:"Полнота 100,0%"},dependencies:{value:8,suffix:"/ 9",note:"Лишних 0"},relations:{value:7,suffix:"/ 9",note:"Лишних 1 · пропущено 2"},score:{value:8.235294117647058,suffix:"/ 10",note:""},reachable:{value:7,suffix:"/ 9",note:""},context:{value:7,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:16,suffix:"/ 16",note:"Полнота 100,0%"},dependencies:{value:9,suffix:"/ 9",note:"Лишних 0"},relations:{value:6,suffix:"/ 9",note:"Лишних 0 · пропущено 3"},score:{value:8,suffix:"/ 10",note:""},reachable:{value:6,suffix:"/ 9",note:""},context:{value:6,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:16,suffix:"/ 16",note:"Полнота 100,0%"},dependencies:{value:9,suffix:"/ 9",note:"Лишних 0"},relations:{value:9,suffix:"/ 9",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:9,suffix:"/ 9",note:""},context:{value:9,suffix:"/ 9",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"12-recursive-diamond-ts",title:"Рекурсия двух модулей, две ветки и общий sink",language:"TypeScript",group:"Углублённые примеры",description:"ping ↔ pong образуют цикл импорта и вызовов; после трёх итераций исполняются обе ветки diamond. Проверяем обе полные цепочки, завершение BFS с visited, точную декларацию finish и отсутствие перехода к одноимённому decoy.",files:[{path:"12-recursive-diamond-ts/branch.ts",code:`import { left } from "./left.ts";
import { right } from "./right.ts";

export function choose() {
  return left() + ":" + right();
}
`},{path:"12-recursive-diamond-ts/decoy.ts",code:`export function finish() {
  throw new Error("decoy");
}
`},{path:"12-recursive-diamond-ts/encode.ts",code:`import { commit } from "./transaction.ts";

export function encode() {
  return commit();
}
`},{path:"12-recursive-diamond-ts/entry.ts",code:`import { ping } from "./ping.ts";

export function run() {
  return ping(3);
}
`},{path:"12-recursive-diamond-ts/left.ts",code:`import { merge } from "./merge.ts";

export function left() {
  return merge();
}
`},{path:"12-recursive-diamond-ts/merge.ts",code:`import { encode } from "./encode.ts";

export function merge() {
  return encode();
}
`},{path:"12-recursive-diamond-ts/ping.ts",code:`import { pong } from "./pong.ts";
import { choose } from "./branch.ts";

export function ping(n: number) {
  return n > 0 ? pong(n - 1) : choose();
}
`},{path:"12-recursive-diamond-ts/pong.ts",code:`import { ping } from "./ping.ts";

export function pong(n: number) {
  return ping(n);
}
`},{path:"12-recursive-diamond-ts/right.ts",code:`import { merge } from "./merge.ts";

export function right() {
  return merge();
}
`},{path:"12-recursive-diamond-ts/sink.ts",code:`export function finish() {
  return "CYCLE";
}
`},{path:"12-recursive-diamond-ts/transaction.ts",code:`import { finish } from "./sink.ts";

export function commit() {
  return finish();
}
`}],table:{caption:"Рекурсия двух модулей, две ветки и общий sink",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:11,suffix:"/ 11",note:"Полнота 100,0%"},dependencies:{value:11,suffix:"/ 11",note:"Лишних 0"},relations:{value:11,suffix:"/ 11",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:11,suffix:"/ 11",note:""},context:{value:11,suffix:"/ 11",note:"Структура и типы — не доказательство вызова"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:11,suffix:"/ 11",note:"Полнота 100,0%"},dependencies:{value:11,suffix:"/ 11",note:"Лишних 0"},relations:{value:11,suffix:"/ 11",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:11,suffix:"/ 11",note:""},context:{value:11,suffix:"/ 11",note:"Структура и типы — не доказательство вызова"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:11,suffix:"/ 11",note:"Полнота 100,0%"},dependencies:{value:11,suffix:"/ 11",note:"Лишних 0"},relations:{value:11,suffix:"/ 11",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:11,suffix:"/ 11",note:""},context:{value:11,suffix:"/ 11",note:"Структура и типы — не доказательство вызова"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:11,suffix:"/ 11",note:"Полнота 100,0%"},dependencies:{value:11,suffix:"/ 11",note:"Лишних 0"},relations:{value:11,suffix:"/ 11",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:11,suffix:"/ 11",note:""},context:{value:11,suffix:"/ 11",note:"Структура и типы — не доказательство вызова"}}}]}},{id:"37-nested-contracts-ts",title:"Вложенные типы и интерфейсы: контракты и реализации",language:"TypeScript",group:"Типовые контракты",description:"Ромб и несколько уровней наследования, generic, alias/intersection, Pick/Record, вложенные именованные и анонимные типы, optional, callable property, перегрузки и ref. Контрактные цели и конкретные runtime-вызовы оцениваются отдельно.",files:[{path:"37-nested-contracts-ts/derived.ts",code:`import type { Flushable, RootWorker } from "./foundation.ts";

export interface Left<T> extends RootWorker<T> {}

export interface Right<T> extends RootWorker<T> {}

export interface Child<T> extends Left<T>, Right<T>, Flushable {
  audit(value: T): string;
}

export type Finisher<T> = {
  finish(value: T): string;
};

export type Alias<T> = Child<T>;

export type Decorated<T> = Alias<T> & Finisher<T>;

export type PublicWorker<T> = Pick<Decorated<T>, "work" | "finish">;

export type WorkerBag<T> = Record<"primary" | "backup", Decorated<T>>;
`},{path:"37-nested-contracts-ts/entry.ts",code:`import type { Client } from "./nested.ts";
import type { Input } from "./foundation.ts";
import { reset, WorkerImpl } from "./implementation.ts";
import {
  references,
  throughAlias,
  throughInherited,
  throughInline,
  throughMapped,
  throughNested,
  throughOptional,
  throughOverload,
  throughProperty,
  throughRecord,
} from "./probes.ts";

export function run() {
  const worker = new WorkerImpl();
  const input: Input = { value: "V" };

  const client: Client<Input> = {
    nested: { branch: { worker, reset } },
    inline: { deep: { reset } },
    optional: worker,
  };

  return [
    throughInherited(worker, input),
    throughAlias(worker, input),
    throughNested(client, input),
    throughInline(client, input),
    throughMapped(worker, input),
    throughRecord({ primary: worker, backup: worker }, input),
    throughOptional(client, input),
    throughProperty(worker, input),
    throughOverload(worker),
    references(worker),
    worker.work(input),
  ].join("|");
}
`},{path:"37-nested-contracts-ts/foundation.ts",code:`export interface Input {
  value: string;
}

export interface RootWorker<T> {
  work(value: T): string;
  write(value: T): string;
}

export interface Flushable {
  flush(): string;
}

export interface Codec {
  encode(value: number): string;
  encode(value: string): string;
}

export interface Hook<T> {
  onValue: (value: T) => string;
}
`},{path:"37-nested-contracts-ts/implementation.ts",code:`import type { Child, Finisher } from "./derived.ts";
import type { Codec, Hook, Input } from "./foundation.ts";
import { persist } from "./sink.ts";

export class WorkerImpl
  implements Child<Input>, Finisher<Input>, Codec, Hook<Input>
{
  work(value: Input) {
    return this.write(value);
  }

  write(value: Input) {
    return persist(value.value);
  }

  flush() {
    return "F";
  }

  audit(value: Input) {
    return this.work(value);
  }

  finish(value: Input) {
    return this.audit(value);
  }

  onValue(value: Input) {
    return this.work(value);
  }

  encode(value: number | string) {
    return String(value);
  }
}

export function reset(value: Input) {
  return value.value === "V" ? "R" : "bad";
}

export class Decoy {
  work(value: Input) {
    return "DECOY:" + value.value;
  }

  reset(value: Input) {
    return "DECOY:" + value.value;
  }
}
`},{path:"37-nested-contracts-ts/nested.ts",code:`import type { Decorated } from "./derived.ts";

export type Branch<T> = {
  worker: Decorated<T>;
  reset(value: T): string;
};

export interface Client<T> {
  nested: {
    branch: Branch<T>;
  };
  inline: {
    deep: {
      reset(value: T): string;
    };
  };
  optional?: Decorated<T>;
}
`},{path:"37-nested-contracts-ts/probes.ts",code:`import type { Child, Decorated, PublicWorker, WorkerBag } from "./derived.ts";
import type { Codec, Hook, Input } from "./foundation.ts";
import type { Client } from "./nested.ts";

export function throughInherited(worker: Child<Input>, input: Input) {
  return worker.work(input) + worker.write(input) + worker.flush();
}

export function throughAlias(worker: Decorated<Input>, input: Input) {
  return worker.finish(input) + worker.audit(input);
}

export function throughNested(client: Client<Input>, input: Input) {
  return (
    client.nested.branch.worker.work(input) + client.nested.branch.reset(input)
  );
}

export function throughInline(client: Client<Input>, input: Input) {
  return client.inline.deep.reset(input);
}

export function throughMapped(worker: PublicWorker<Input>, input: Input) {
  return worker.work(input) + worker.finish(input);
}

export function throughRecord(workers: WorkerBag<Input>, input: Input) {
  return workers.primary.work(input);
}

export function throughOptional(client: Client<Input>, input: Input) {
  return client.optional?.work(input) ?? "none";
}

export function throughProperty(hook: Hook<Input>, input: Input) {
  return hook.onValue(input);
}

export function throughOverload(codec: Codec) {
  const first = codec.encode(1);
  const second = codec.encode("x");

  return first + second;
}

export function references(worker: Child<Input>) {
  const work = worker.work;
  const write = worker.write;

  return typeof work === typeof write ? "function" : "bad";
}
`},{path:"37-nested-contracts-ts/sink.ts",code:`export function persist(value: string) {
  return value;
}
`}],table:{caption:"Вложенные типы и интерфейсы: контракты и реализации",columns:[{key:"declarations",label:"Объявления",precision:0,direction:"higher"},{key:"dependencies",label:"Зависимости файлов",precision:0,direction:"higher"},{key:"relations",label:"Конкретные call/ref",precision:0,direction:"higher"},{key:"score",label:"Оценка связей / 10",precision:1,direction:"higher"},{key:"reachable",label:"Цель через call/ref",precision:0,direction:"higher"},{key:"context",label:"Цель через любые связи",precision:0,direction:"higher"},{key:"contracts",label:"Типовые цели",precision:0,direction:"higher"},{key:"heritage",label:"Наследование",precision:0,direction:"higher"}],rows:[{id:"graph",label:"SymbolTrail",note:"",cells:{declarations:{value:48,suffix:"/ 48",note:"Полнота 100,0%"},dependencies:{value:12,suffix:"/ 12",note:"Лишних 0"},relations:{value:17,suffix:"/ 17",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:17,suffix:"/ 17",note:""},context:{value:17,suffix:"/ 17",note:"Структура и типы — не доказательство вызова"},contracts:{value:17,suffix:"/ 17",note:"Лишних 0 · пропущено 0"},heritage:{value:5,suffix:"/ 5",note:"Лишних 0 · пропущено 0"}}},{id:"codegraph",label:"CodeGraph",note:"",cells:{declarations:{value:35,suffix:"/ 48",note:"Полнота 72,9%"},dependencies:{value:12,suffix:"/ 12",note:"Лишних 0"},relations:{value:15,suffix:"/ 17",note:"Лишних 15 · пропущено 2"},score:{value:6.382978723404255,suffix:"/ 10",note:""},reachable:{value:16,suffix:"/ 17",note:""},context:{value:16,suffix:"/ 17",note:"Структура и типы — не доказательство вызова"},contracts:{value:0,suffix:"/ 17",note:"Лишних 15 · пропущено 17"},heritage:{value:0,suffix:"/ 5",note:"Лишних 0 · пропущено 5"}}},{id:"graphify",label:"Graphify",note:"",cells:{declarations:{value:45,suffix:"/ 48",note:"Полнота 93,8%"},dependencies:{value:12,suffix:"/ 12",note:"Лишних 0"},relations:{value:17,suffix:"/ 17",note:"Лишних 0 · пропущено 0"},score:{value:10,suffix:"/ 10",note:""},reachable:{value:17,suffix:"/ 17",note:""},context:{value:17,suffix:"/ 17",note:"Структура и типы — не доказательство вызова"},contracts:{value:1,suffix:"/ 17",note:"Лишних 0 · пропущено 16"},heritage:{value:5,suffix:"/ 5",note:"Лишних 0 · пропущено 0"}}},{id:"scip",label:"SCIP",note:"",cells:{declarations:{value:48,suffix:"/ 48",note:"Полнота 100,0%"},dependencies:{value:12,suffix:"/ 12",note:"Лишних 0"},relations:{value:16,suffix:"/ 17",note:"Лишних 0 · пропущено 1"},score:{value:9.696969696969697,suffix:"/ 10",note:""},reachable:{value:16,suffix:"/ 17",note:""},context:{value:16,suffix:"/ 17",note:"Структура и типы — не доказательство вызова"},contracts:{value:17,suffix:"/ 17",note:"Лишних 2 · пропущено 0"},heritage:{value:5,suffix:"/ 5",note:"Лишних 0 · пропущено 0"}}}]}}],d={table:I,cases:G},L=JSON.parse('{"title":"Сравнение точности парсеров","description":"SymbolTrail, CodeGraph, Graphify и SCIP: качество связей и результаты 37 примеров JavaScript/TypeScript с исходниками.","frontmatter":{"title":"Сравнение точности парсеров","description":"SymbolTrail, CodeGraph, Graphify и SCIP: качество связей и результаты 37 примеров JavaScript/TypeScript с исходниками.","section":"Сравнения и замеры","aside":false,"pageClass":"st-bench-page"},"headers":[],"relativePath":"benchmarks/parsers.md","filePath":"benchmarks/parsers.md"}'),P={name:"benchmarks/parsers.md"},_=Object.assign(P,{setup(c){return(h,t)=>(r(),a("div",null,[t[0]||(t[0]=g('<h1 id="сравнение-точности-парсеров" tabindex="-1">Сравнение точности парсеров <a class="header-anchor" href="#сравнение-точности-парсеров" aria-label="Permalink to &quot;Сравнение точности парсеров&quot;">​</a></h1><p class="st-lead">Насколько точно индекс определяет цели вызовов и ссылок в JavaScript и TypeScript.</p><p>Проверены <strong>37 примеров, 217 файлов и 189 конкретных связей call/ref</strong>. Среди случаев: импорты, реэкспорты, наследование, callbacks, возвращаемые методы и типовые контракты.</p><p>В сравнении участвовали SymbolTrail, CodeGraph 1.6.0, Graphify 0.9.93 в режиме локального AST и SCIP через scip-typescript 0.4.0 (sourcegraph).</p><h2 id="общии-результат" tabindex="-1">Общий результат <a class="header-anchor" href="#общии-результат" aria-label="Permalink to &quot;Общий результат&quot;">​</a></h2><p>Оценка качества связей учитывает точность и полноту: верные, лишние и пропущенные связи по всему корпусу. Для расчёта используют суммарные числа связей по корпусу, оценки отдельных примеров не усредняют. Шкала от 0 до 10: чем выше оценка, тем лучше результат.</p>',6)),l(x,{table:p(d).table},null,8,["table"]),t[1]||(t[1]=e("h2",{id:"примеры-и-исходники",tabindex:"-1"},[o("Примеры и исходники "),e("a",{class:"header-anchor",href:"#примеры-и-исходники","aria-label":'Permalink to "Примеры и исходники"'},"​")],-1)),t[2]||(t[2]=e("p",null,[o("У каждого примера есть таблица со всеми показателями. "),e("strong",null,"Верные"),o(" связи совпадают с эталоном, "),e("strong",null,"лишних"),o(" в эталоне нет, а "),e("strong",null,"пропущенные"),o(" ожидались, но отсутствуют в индексе. Исходники можно раскрыть под таблицей.")],-1)),l(T,{cases:p(d).cases},null,8,["cases"]),t[3]||(t[3]=e("p",null,[o("Работу агента с готовым индексом сравнивали в отдельных сериях: "),e("a",{href:"/symbolTrail/benchmarks/investigations.html"},"сквозное исследование кода"),o(" и "),e("a",{href:"/symbolTrail/benchmarks/engineering-tasks.html"},"пять инженерных задач"),o(".")],-1))]))}});export{L as __pageData,_ as default};
