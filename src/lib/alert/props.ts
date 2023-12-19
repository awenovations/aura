export const alertSeverity = ['informational', 'success', 'error', 'warning'] as const;
export type AlertSeverity = (typeof alertSeverity)[number];
