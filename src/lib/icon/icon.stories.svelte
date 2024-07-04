<script lang="ts" context="module">
	import '../../app.scss';

	import Icon from '$lib/icon/icon.svelte';
	import { iconSizes } from '$lib/icon/props.ts';

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

	import Input from '$lib/input/input.svelte';
	import Dropdown from '$lib/dropdown/dropdown.svelte';

	$: size = 'large';
	$: iconSearch = '';

	$: console.log(iconSearch);

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
			<Input
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
		<div style="display: flex; gap: 10px; margin-top: 30px;">
			{#each iconList as icon}
				<Icon name={icon} {size} />
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
