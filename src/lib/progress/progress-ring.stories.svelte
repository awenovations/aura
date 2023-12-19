<script lang="ts" context="module">
	import '../../app.scss';
	import { progressVariants } from '$lib/progress/props.ts';

	import ProgressRing from '$lib/progress/progress-ring.svelte';

	export const meta = {
		title: 'AURA/Progress Ring',
		component: ProgressRing,
		tags: ['autodocs'],
		argTypes: {
			variant: { control: 'select', options: progressVariants }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<ProgressRing {...args} />
</Template>

<Story name="Default Progress Ring" />

<Story name="Primary Progress Ring" args={{ variant: 'primary' }} />

<Story name="Secondary Progress Ring" args={{ variant: 'secondary' }} />

<Story name="Tertiary Progress Ring" args={{ variant: 'tertiary' }} />
