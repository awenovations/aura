export const progressVariants = ['primary', 'secondary', 'tertiary'] as const;
export type ProgressVariants = (typeof progressVariants)[number];
