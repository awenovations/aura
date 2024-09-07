export const panelPlacement = ['top', 'bottom', 'right', 'left'] as const;
export type PanelPlacement = (typeof panelPlacement)[number];
