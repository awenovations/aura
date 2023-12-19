export const containerKinds = ['filled', 'outlined'] as const;
export type ContainerKind = (typeof containerKinds)[number];
export const containerVariants = ['flat', 'elevated'] as const;
export type ContainerVariants = (typeof containerVariants)[number];
