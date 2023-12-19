<script lang="ts" context="module">
	import '../../app.scss';

	import Alert from '$lib/alert/alert.svelte';
	import { alertSeverity } from '$lib/alert/props.ts';

	export const meta = {
		title: 'AURA/Alert',
		component: Alert,
		tags: ['autodocs'],
		argTypes: {
			severity: { control: 'select', options: alertSeverity }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Alert {...args}
		>{args.severity ? args.severity[0].toUpperCase() + args.severity.substring(1) : 'Default'} alert</Alert
	>
</Template>

<Story name="Default" />
<Story name="Success" args={{ severity: 'success' }} />
<Story name="Informational" args={{ severity: 'informational' }} />
<Story name="Error" args={{ severity: 'error' }} />
<Story name="Warning" args={{ severity: 'warning' }} />
