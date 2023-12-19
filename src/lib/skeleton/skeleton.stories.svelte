<script lang="ts" context="module">
	import '../../app.scss';

	import Skeleton from '$lib/skeleton/skeleton.svelte';

	export const meta = {
		title: 'AURA/Skeleton',
		component: Skeleton,
		tags: ['autodocs'],
		argTypes: {
			width: { control: 'input:number' },
			height: { control: 'input:number' }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Skeleton {...args} />
</Template>

<Story name="Default Skeleton" />
<Story name="Custom Skeleton" args={{ width: '800px', height: '300px' }} />
