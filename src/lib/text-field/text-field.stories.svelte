<script lang="ts" context="module">
	import '../../app.scss';

	import TextField from '$lib/text-field/text-field.svelte';

	export const meta = {
		title: 'AURA/Text Field',
		component: TextField,
		tags: ['autodocs'],
		argTypes: {}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <TextField {...args} placeholder="Placeholder..." />
</Template>

<Story name="Default input" />

<Story name="Disabled input">
	<TextField disabled={true} placeholder="Placeholder..." />
</Story>

<Story name="Error'd input">
	<TextField placeholder="Placeholder..." showErrors
		><span slot="errors">Something went wrong here!</span></TextField
	>
</Story>

<Story name="Label">
  <TextField placeholder="Placeholder...">
    <span slot="label">Label</span>
  </TextField>
</Story>

<Story name="Fixed Width">
  <TextField width="100%" placeholder="Placeholder...">
    <span slot="label">Label</span>
  </TextField>
</Story>

<Story name="Full Width">
  <div style="display: flex; gap: 1rem;">
    <TextField fullWidth placeholder="Placeholder...">
      <span slot="label">Full Width</span>
    </TextField>

    <TextField placeholder="Placeholder...">
      <span slot="label">Normal width</span>
    </TextField>
  </div>
</Story>

<Story name="Multi Line">
  <TextField height='100px' value="Test multiline input" type="multi" placeholder="Placeholder...">
    <span slot="label">Label</span>
  </TextField>
</Story>
