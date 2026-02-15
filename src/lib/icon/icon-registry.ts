import type { SvelteComponent } from 'svelte';

type IconComponent = typeof SvelteComponent;

const registry = new Map<string, IconComponent>();

export function registerIcon(name: string, component: IconComponent): void {
	registry.set(name, component);
}

export function registerIcons(icons: Record<string, IconComponent>): void {
	for (const [name, component] of Object.entries(icons)) {
		registry.set(name, component);
	}
}

export function getIcon(name: string): IconComponent | undefined {
	return registry.get(name);
}
