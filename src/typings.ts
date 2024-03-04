export type StringOrNumber = string | number;

export type GraphNode = {
  id: StringOrNumber;
  name: string;
  symbolSize: number;
  x: number;
  y: number;
  value: StringOrNumber;
  category: number;
};

export type GraphLink = {
  source: StringOrNumber;
  target: StringOrNumber;
};

export type GraphCategory = { name: string };

export type GraphType = {
  categories: GraphCategory[];
  data: GraphNode[];
  links: GraphLink[];
};
