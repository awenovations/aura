export const iconSizes = ['large', 'medium', 'small'] as const;
export type IconSizes = (typeof iconSizes)[number];
