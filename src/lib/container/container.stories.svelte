<script lang="ts" context="module">
	import '../../app.scss';

	import Container from '$lib/container/container.svelte';
	import { containerKinds, containerVariants } from '$lib/container/props.ts';

	export const meta = {
		title: 'AURA/Container',
		component: Container,
		tags: ['autodocs'],
		argTypes: {
			kind: { control: 'select', options: containerKinds },
			variant: { control: 'select', options: containerVariants }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Container {...args}>Aura Container</Container>
</Template>

<Story
	name="Filled Flat"
	args={{
		kind: 'filled',
		variant: 'flat'
	}}
/>

<Story
	name="Filled Elevated"
	args={{
		kind: 'filled',
		variant: 'elevated'
	}}
/>

<Story
	name="Outlined Flat"
	args={{
		kind: 'outlined',
		variant: 'flat'
	}}
/>

<Story
	name="Outlined Elevated"
	args={{
		kind: 'outlined',
		variant: 'elevated'
	}}
/>
