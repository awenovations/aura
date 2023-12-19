export const buttonKinds = ['filled', 'outlined'] as const;
export type ButtonKind = (typeof buttonKinds)[number];

export const buttonVariants = ['primary', 'secondary', 'tertiary'] as const;
export type ButtonVariants = (typeof buttonVariants)[number];

export const buttonSizes = ['default', 'small'] as const;
export type ButtonSizes = (typeof buttonSizes)[number];
