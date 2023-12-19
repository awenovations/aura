<script lang="ts" context="module">
	import '../../app.scss';

	import ErrorState from '$lib/error-state/error-state.svelte';

	export const meta = {
		title: 'AURA/Error State',
		component: ErrorState,
		tags: ['autodocs'],
		argTypes: {}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template>
	<ErrorState>An unexpected error occurred, <u>try again?</u></ErrorState>
</Template>

<Story name="Default Error State" />
