<script lang="ts" context="module">
	import '../../app.scss';

	import Input from '$lib/input/input.svelte';

	export const meta = {
		title: 'AURA/Input',
		component: Input,
		tags: ['autodocs'],
		argTypes: {}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Input {...args} placeholder="Placeholder..." />
</Template>

<Story name="Default input" />

<Story name="Disabled input">
	<Input disabled={true} placeholder="Placeholder..." />
</Story>

<Story name="Error'd input">
	<Input placeholder="Placeholder..." showErrors
		><span slot="errors">Something went wrong here!</span></Input
	>
</Story>
