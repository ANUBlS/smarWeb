/** Parsed Delphi form (DFM) node, as produced by tools/dfm2json.py. */
export interface DfmNode {
  name: string;
  class: string;
  kind: 'object' | 'inherited' | 'inline';
  props: Record<string, any>;
  children: DfmNode[];
}

/** Merge an inherited DFM onto its ancestor's layout (component-name based). */
export function mergeInherited(base: DfmNode, derived: DfmNode): DfmNode {
  const out: DfmNode = { ...base, name: derived.name, class: derived.class, kind: 'object',
    props: { ...base.props, ...derived.props }, children: [] };
  const byName = new Map(derived.children.map((c) => [c.name.toLowerCase(), c]));
  for (const bc of base.children) {
    const d = byName.get(bc.name.toLowerCase());
    if (d) {
      out.children.push(d.kind === 'inherited' ? mergeInherited(bc, d) : d);
      byName.delete(bc.name.toLowerCase());
    } else out.children.push(bc);
  }
  for (const d of byName.values()) out.children.push(d);
  return out;
}
