<script lang="ts" context="module">
	import '../../app.scss';
	import Link from '$lib/link/link.svelte';

	export const meta = {
		title: 'AURA/Link',
		component: Link,
		tags: ['autodocs'],
		argTypes: {
			href: { control: 'input:string' },
		}
	};

</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Link href="#">Example Link</Link>
</Template>

<Story name="Default Link" />
