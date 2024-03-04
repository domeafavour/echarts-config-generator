import { GraphCategory, GraphLink, GraphNode, GraphType } from './typings';

function parseRow(t: string): string[] {
  return t
    .trim()
    .split(/\s+/)
    .map((x) => x.trim());
}

export function parseGraph(graphText: string): GraphType {
  const [head, ...rows] = graphText.trim().split('\n');
  const categories: GraphCategory[] = parseRow(head).map((name) => ({ name }));

  const data: GraphNode[] = [];
  const links: GraphLink[] = [];
  const nodesMap: Record<string, GraphNode> = {};

  rows.forEach((row) => {
    const cells = parseRow(row);
    cells.forEach((nodeId, categoryIndex) => {
      if (!nodesMap[nodeId]) {
        nodesMap[nodeId] = {
          id: nodeId,
          name: nodeId,
          symbolSize: 24,
          x: Math.random() * 100,
          y: Math.random() * 100,
          value: nodeId,
          category: categoryIndex,
        };
        data.push(nodesMap[nodeId]);
      }
    });
    cells.forEach((cell, categoryIndex) => {
      if (categoryIndex === 0) {
        return;
      }
      const parentId = cells[categoryIndex - 1];
      if (!links.some((l) => l.target === parentId && l.source === cell)) {
        links.push({
          source: cell,
          target: parentId,
        });
      }
    });
  });

  return { categories, data, links };
}
