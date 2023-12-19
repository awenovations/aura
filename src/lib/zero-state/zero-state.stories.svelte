<script lang="ts" context="module">
	import '../../app.scss';

	import ZeroState from '$lib/zero-state/zero-state.svelte';

	export const meta = {
		title: 'AURA/Zero State',
		component: ZeroState,
		tags: ['autodocs'],
		argTypes: {}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template>
	<ZeroState />
</Template>

<Story name="Default ZeroState" />
