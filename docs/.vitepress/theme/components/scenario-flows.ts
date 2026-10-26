export type ScenarioTool =
  | "map"
  | "find"
  | "callers"
  | "callees"
  | "review"
  | "shape"
  | "dead"
  | "cycles";

export type ScenarioStep = {
  title: string;
  tools?: readonly ScenarioTool[];
  context?: string;
};

export type ScenarioFlow = {
  title: string;
  steps: readonly ScenarioStep[];
};

export const scenarioFlows = {
  onboarding: {
    title: "Онбординг",
    steps: [
      { title: "Найти основные области", tools: ["map"] },
      { title: "Проследить сценарий", tools: ["find", "callees"] },
      { title: "Проверить поведение", context: "Чтение исходников" },
      { title: "Предложить порядок чтения", context: "Вывод агента" },
    ],
  },
  explain: {
    title: "Объяснить код",
    steps: [
      { title: "Найти объявление", tools: ["find"] },
      { title: "Собрать связи", tools: ["callers", "callees"] },
      { title: "Разобрать логику и ошибки", context: "Чтение исходников" },
      { title: "Объяснить со ссылками", context: "Вывод агента" },
    ],
  },
  history: {
    title: "Кто менял код",
    steps: [
      { title: "Найти код и коммиты", tools: ["find", "callers"] },
      { title: "Уточнить историю", context: "Git, если нужен полный контекст" },
      { title: "Сопоставить изменения", context: "Чтение исходников и диффов" },
      { title: "Объяснить контекст", context: "Вывод агента" },
    ],
  },
  review: {
    title: "Ревью",
    steps: [
      { title: "Сопоставить дифф и связи", tools: ["review"] },
      { title: "Уточнить потребителей", tools: ["callers", "callees"] },
      { title: "Проверить последствия", context: "Чтение исходников" },
      { title: "Обосновать замечания", context: "Вывод агента" },
    ],
  },
  impact: {
    title: "Импакт-анализ и blast radius",
    steps: [
      { title: "Найти контракт и область", tools: ["find", "map"] },
      { title: "Обойти цепочки потребителей", tools: ["callers"] },
      { title: "Оценить каждую зависимость", context: "Чтение исходников" },
      { title: "Выделить правки и проверки", context: "Вывод агента" },
    ],
  },
  debug: {
    title: "Диагностика ошибки",
    steps: [
      { title: "Найти проблемное место", tools: ["find"] },
      { title: "Восстановить путь данных", tools: ["callers", "callees"] },
      { title: "Проверить гипотезу", context: "Исходники и воспроизведение" },
      { title: "Предложить регрессию", context: "Вывод агента" },
    ],
  },
  task: {
    title: "Написать техническую задачу",
    steps: [
      { title: "Найти текущую реализацию", tools: ["map", "find"] },
      { title: "Собрать потребителей", tools: ["callers"] },
      { title: "Уточнить требования", context: "Исходники и вопросы" },
      { title: "Составить задачу", context: "Критерии приёмки и проверки" },
    ],
  },
  spec: {
    title: "Написать спецификацию",
    steps: [
      {
        title: "Найти контракт и связи",
        tools: ["find", "callers", "callees"],
      },
      { title: "Изучить формы вызовов", tools: ["shape"] },
      { title: "Проверить аргументы и ошибки", context: "Чтение исходников" },
      { title: "Описать новый контракт", context: "Спецификация агента" },
    ],
  },
  openspec: {
    title: "Работать по SDD с OpenSpec",
    steps: [
      { title: "Описать цель изменения", context: "proposal · без MCP" },
      {
        title: "Исследовать код и связи",
        tools: ["find", "callers", "callees"],
        context: "impact.md · чтение исходников",
      },
      { title: "Обогатить спеку", context: "specs · контракт и привязки" },
      { title: "Подготовить реализацию", context: "design → tasks · проверки" },
    ],
  },
  tests: {
    title: "Подобрать и написать тесты",
    steps: [
      { title: "Найти тестовые места", tools: ["callers", "find"] },
      { title: "Выбрать уровень и случаи", context: "Чтение исходников" },
      { title: "Добавить регрессию", context: "Агент пишет тест" },
      { title: "Запустить и показать итог", context: "Команды проекта" },
    ],
  },
  refactor: {
    title: "Подготовить рефакторинг и найти повторное использование",
    steps: [
      { title: "Найти границы области", tools: ["map", "find"] },
      {
        title: "Изучить зависимости и API",
        tools: ["callers", "callees", "shape"],
      },
      {
        title: "Проверить похожие решения",
        tools: ["find"],
        context: "По фразе · чтение исходников",
      },
      { title: "Подготовить план", context: "Порядок правок и проверок" },
    ],
  },
  dead: {
    title: "Найти неиспользуемый код",
    steps: [
      { title: "Собрать кандидатов", tools: ["dead"] },
      { title: "Проверить найденные связи", tools: ["callers"] },
      { title: "Проверить входы и динамику", context: "Чтение исходников" },
      { title: "Обосновать кандидатов", context: "Вывод агента" },
    ],
  },
  cycles: {
    title: "Разобрать зависимости и циклы",
    steps: [
      { title: "Очертить зависимости", tools: ["map"] },
      { title: "Найти цепочки циклов", tools: ["cycles"] },
      { title: "Разобрать причины", context: "Чтение исходников" },
      { title: "Предложить разделение", context: "Вывод агента" },
    ],
  },
} satisfies Record<string, ScenarioFlow>;

export type ScenarioFlowId = keyof typeof scenarioFlows;
