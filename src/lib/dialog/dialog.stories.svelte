<script lang="ts" context="module">
	import '../../app.scss';
	import Dialog from '$lib/dialog/dialog.svelte';

	export const meta = {
		title: 'AURA/Dialog',
		component: Dialog,
		tags: ['autodocs'],
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>


<Template>
  <Dialog />
</Template>

<Story name="Default Dialog" />
