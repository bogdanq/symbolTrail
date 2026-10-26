export interface ComparisonColumn {
  key: string;
  label: string;
  precision: number;
  direction: string;
}

export interface ComparisonCell {
  value: number;
  suffix: string;
  note: string;
}

export interface ComparisonRow {
  id: string;
  label: string;
  note: string;
  cells: Record<string, ComparisonCell>;
}

export interface ComparisonTable {
  caption: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}

export interface ParserCase {
  id: string;
  title: string;
  language: string;
  group: string;
  description: string;
  table: ComparisonTable;
  files: { path: string; code: string }[];
}

export function formatMetric(value: number, precision: number): string {
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
  }).format(value);
}
