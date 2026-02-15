<script lang="ts" context="module">
	import '../../app.scss';

	import Icon from '$lib/icon/icon.svelte';
	import { iconSizes } from '$lib/icon/props.ts';
	import Tooltip from '$lib/tooltip/tooltip.svelte';
	import { registerIcons } from '$lib/icon/icon-registry';
	import { ArrowRight, CircleCheck, Settings, Trash2 } from 'lucide-svelte';

	registerIcons({
		'arrow-right': ArrowRight,
		'circle-check': CircleCheck,
		'lucide-settings': Settings,
		'trash-2': Trash2
	});

	export const meta = {
		title: 'AURA/Icon',
		component: Icon,
		tags: ['autodocs'],
		argTypes: {
			name: { control: 'text' },
			size: { control: 'select', options: iconSizes }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import TextField from '$lib/text-field/text-field.svelte';
	import Dropdown from '$lib/dropdown/dropdown.svelte';

	$: size = 'large';
	$: iconSearch = '';

	let allIcons: Array<string> = [];

	const fetchIconMeta = async () => {
		const response = await fetch('/icons/meta.json');
		const body = await response.json();
		allIcons = Array.from(new Set(body.icons.map((icon) => icon.name)));
	};

	$: iconList = allIcons.filter((iconName) => iconName.includes(iconSearch));

	fetchIconMeta();
</script>

<Template let:args>
	<Icon {...args} />
</Template>

<Story name="All">
	<div style="min-height: 300px;">
		<div style="display: flex; gap: 10px;">
			<TextField
				bind:value={iconSearch}
				on:keyup={(evt) => {
					iconSearch = evt.detail.value;
				}}
				placeholder="Type icon name..."
			/>
			<Dropdown
				style="flex: 1; max-width: 100px;"
				on:change={(evt) => {
					size = evt.detail.value;
				}}
				currentValue={size}
			>
				<aura-option value="small">small</aura-option>
				<aura-option value="medium">medium</aura-option>
				<aura-option value="large">large</aura-option>
			</Dropdown>
		</div>
    <div style="display: flex; gap: 10px; margin-top: 30px; flex-wrap: wrap;">
			{#each iconList as icon}
				<Tooltip placement="top" content={`Icon Name: ${icon}`}>
					<Icon name={icon} {size} />
				</Tooltip>
			{/each}
		</div>
	</div>
</Story>

<Story
	name="Small Icon"
	args={{
		name: 'arrow-circle-left',
		size: 'small'
	}}
/>

<Story
	name="Medium Icon"
	args={{
		name: 'arrow-circle-left',
		size: 'medium'
	}}
/>

<Story
	name="Large Icon"
	args={{
		name: 'arrow-circle-left',
		size: 'large'
	}}
/>

<Story
	name="Small Icon Color"
	args={{
		name: 'microsoft-color',
		size: 'small'
	}}
/>

<Story
	name="Medium Icon Color"
	args={{
		name: 'microsoft-color',
		size: 'medium'
	}}
/>

<Story
	name="Large Icon Color"
	args={{
		name: 'microsoft-color',
		size: 'large'
	}}
/>

<Story name="Lucide Icons">
	<div style="display: flex; gap: 20px; align-items: center;">
		<Tooltip placement="bottom" content="arrow-right (small)">
			<Icon name="arrow-right" size="small" />
		</Tooltip>
		<Tooltip placement="bottom" content="circle-check (medium)">
			<Icon name="circle-check" size="medium" />
		</Tooltip>
		<Tooltip placement="bottom" content="lucide-settings (large)">
			<Icon name="lucide-settings" size="large" />
		</Tooltip>
		<Tooltip placement="bottom" content="trash-2 (medium)">
			<Icon name="trash-2" size="medium" />
		</Tooltip>
	</div>
</Story>

<Story name="Lucide + Built-in Mix">
	<div style="display: flex; gap: 20px; align-items: center;">
		<Tooltip placement="bottom" content="lucide: circle-check">
			<Icon name="circle-check" size="medium" />
		</Tooltip>
		<Tooltip placement="bottom" content="built-in: checkmark">
			<Icon name="checkmark" size="medium" />
		</Tooltip>
		<Tooltip placement="bottom" content="lucide: lucide-settings">
			<Icon name="lucide-settings" size="medium" />
		</Tooltip>
		<Tooltip placement="bottom" content="built-in: settings">
			<Icon name="settings" size="medium" />
		</Tooltip>
	</div>
</Story>
