export const dividerDirection = ['vertical', 'horizontal'] as const;
export type DividerDirection = (typeof dividerDirection)[number];
