<script lang="ts" context="module">
	import '../../app.scss';

	import Button from '$lib/button/button.svelte';
	import Icon from '$lib/icon/icon.svelte';
	import { buttonKinds, buttonVariants, buttonSizes } from '$lib/button/props.ts';

	export const meta = {
		title: 'AURA/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			kind: { control: 'select', options: buttonKinds },
			variant: { control: 'select', options: buttonVariants },
			size: { control: 'select', options: buttonSizes },
			loading: { control: 'boolean' }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="All">
	<div style="display: flex; flex-direction: column; gap: 20px">
		<div style="display: flex; gap: 10px;">
			<Button variant="primary"></Button>
			<Button variant="primary"><Icon name="arrow-circle-left" slot="icon-before" /></Button>
			<Button variant="primary" kind="outlined"></Button>
			<Button variant="primary" kind="outlined"
				><Icon name="arrow-circle-left" slot="icon-before" /></Button
			>
		</div>
		<div style="display: flex; gap: 10px;">
			<Button size="small" variant="primary"></Button>
			<Button size="small" variant="primary"
				><Icon size="small" name="arrow-circle-left" slot="icon-before" /></Button
			>
			<Button size="small" variant="primary" kind="outlined"></Button>
			<Button size="small" variant="primary" kind="outlined"
				><Icon size="small" name="arrow-circle-left" slot="icon-before" /></Button
			>
		</div>

		<div style="display: flex; gap: 10px;">
			<Button variant="secondary"></Button>
			<Button variant="secondary"><Icon name="arrow-circle-left" slot="icon-before" /></Button>
			<Button variant="secondary" kind="outlined"></Button>
			<Button variant="secondary" kind="outlined"
				><Icon name="arrow-circle-left" slot="icon-before" /></Button
			>
		</div>
		<div style="display: flex; gap: 10px;">
			<Button size="small" variant="secondary"></Button>
			<Button size="small" variant="secondary"
				><Icon size="small" name="arrow-circle-left" slot="icon-before" /></Button
			>
			<Button size="small" variant="secondary" kind="outlined"></Button>
			<Button size="small" variant="secondary" kind="outlined"
				><Icon size="small" name="arrow-circle-left" slot="icon-before" /></Button
			>
		</div>

		<div style="display: flex; gap: 10px;">
			<Button variant="tertiary"></Button>
			<Button variant="tertiary"><Icon name="arrow-circle-left" slot="icon-before" /></Button>
			<Button variant="tertiary" kind="outlined"></Button>
			<Button variant="tertiary" kind="outlined"
				><Icon name="arrow-circle-left" slot="icon-before" /></Button
			>
		</div>
		<div style="display: flex; gap: 10px;">
			<Button size="small" variant="tertiary"></Button>
			<Button size="small" variant="tertiary"
				><Icon size="small" name="arrow-circle-left" slot="icon-before" /></Button
			>
			<Button size="small" variant="tertiary" kind="outlined"></Button>
			<Button size="small" variant="tertiary" kind="outlined"
				><Icon size="small" name="arrow-circle-left" slot="icon-before" /></Button
			>
		</div>
	</div>
</Story>

<Story name="Full Width">
	<div style="display: flex; flex-direction: column; gap: 10px; width: 300px;">
		<Button fullWidth />
		<Button fullWidth variant="secondary" />
		<Button fullWidth variant="tertiary" />
		<Button fullWidth kind="outlined" />
		<Button fullWidth kind="outlined" variant="secondary" />
		<Button fullWidth kind="outlined" variant="tertiary" />
	</div>
</Story>

<Story
	name="Pimary Filled"
	args={{
		kind: 'filled',
		variant: 'primary',
		size: 'default'
	}}
/>

<Story name="Primary Filled Icon">
	<Button
		{...{
			kind: 'filled',
			variant: 'primary',
			size: 'default'
		}}
		><Icon name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Primary Filled Loading">
	<Button
		{...{
			kind: 'filled',
			variant: 'primary',
			size: 'default',
			loading: 'true'
		}}
	/>
</Story>

<Story
	name="Primary Filled Small"
	args={{
		kind: 'filled',
		variant: 'primary',
		size: 'small'
	}}
/>

<Story name="Primary Filled Small Icon">
	<Button
		{...{
			kind: 'filled',
			variant: 'primary',
			size: 'small'
		}}
		><Icon size="small" name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Primary Filled Small Loading">
	<Button
		{...{
			kind: 'filled',
			variant: 'primary',
			size: 'small',
			loading: 'true'
		}}
	/>
</Story>

<Story
	name="Primary Outlined"
	args={{
		kind: 'outlined',
		variant: 'primary',
		size: 'default'
	}}
/>

<Story name="Primary Outlined Icon">
	<Button
		{...{
			kind: 'outlined',
			variant: 'primary',
			size: 'default'
		}}
		><Icon name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Primary Outlined Loading Icon">
	<Button
		{...{
			kind: 'outlined',
			variant: 'primary',
			size: 'default',
			loading: 'true'
		}}
	/>
</Story>

<Story
	name="Primary Outlined Small"
	args={{
		kind: 'outlined',
		variant: 'primary',
		size: 'small'
	}}
/>

<Story name="Primary Outlined Small Icon">
	<Button
		{...{
			kind: 'outlined',
			variant: 'primary',
			size: 'small'
		}}
		><Icon size="small" name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Primary Outlined Small Loading">
	<Button
		{...{
			kind: 'outlined',
			variant: 'primary',
			size: 'small',
			loading: true
		}}
	/>
</Story>

<Story
	name="Secondary Filled"
	args={{
		kind: 'filled',
		variant: 'secondary',
		size: 'default'
	}}
/>

<Story name="Secondary Filled Icon">
	<Button
		{...{
			kind: 'filled',
			variant: 'secondary',
			size: 'default'
		}}
		><Icon name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Secondary Filled Loading">
	<Button
		{...{
			kind: 'filled',
			variant: 'secondary',
			size: 'default',
			loading: true
		}}
	/>
</Story>

<Story
	name="Secondary Filled Small"
	args={{
		kind: 'filled',
		variant: 'secondary',
		size: 'small'
	}}
/>

<Story name="Secondary Filled Small Icon">
	<Button
		{...{
			kind: 'filled',
			variant: 'secondary',
			size: 'small'
		}}
		><Icon size="small" name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Secondary Filled Small Loading">
	<Button
		{...{
			kind: 'filled',
			variant: 'secondary',
			size: 'small',
			loading: true
		}}
	/>
</Story>

<Story
	name="Secondary Outlined"
	args={{
		kind: 'outlined',
		variant: 'secondary',
		size: 'default'
	}}
/>

<Story name="Secondary Outlined Icon">
	<Button
		{...{
			kind: 'outlined',
			variant: 'secondary',
			size: 'default'
		}}
		><Icon name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story
	name="Secondary Outlined Small"
	args={{
		kind: 'outlined',
		variant: 'secondary',
		size: 'small'
	}}
/>

<Story name="Secondary Outlined Small Icon">
	<Button
		{...{
			kind: 'outlined',
			variant: 'secondary',
			size: 'small'
		}}
		><Icon size="small" name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Secondary Outlined Small Loading">
	<Button
		{...{
			kind: 'outlined',
			variant: 'secondary',
			size: 'small',
			loading: true
		}}
	/>
</Story>

<Story
	name="Tertiary Filled"
	args={{
		kind: 'filled',
		variant: 'tertiary',
		size: 'default'
	}}
/>

<Story name="Tertiary Filled Icon">
	<Button
		{...{
			kind: 'filled',
			variant: 'tertiary',
			size: 'default'
		}}
		><Icon name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Tertiary Filled Loading">
	<Button
		{...{
			kind: 'filled',
			variant: 'tertiary',
			size: 'default',
			loading: true
		}}
	/>
</Story>

<Story
	name="Tertiary Filled Small"
	args={{
		kind: 'filled',
		variant: 'tertiary',
		size: 'small'
	}}
/>

<Story name="Tertiary Filled Small Icon">
	<Button
		{...{
			kind: 'filled',
			variant: 'tertiary',
			size: 'small'
		}}
		><Icon size="small" name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Tertiary Filled Small loading">
	<Button
		{...{
			kind: 'filled',
			variant: 'tertiary',
			size: 'small',
			loading: true
		}}
	/>
</Story>

<Story
	name="Tertiary Outlined"
	args={{
		kind: 'outlined',
		variant: 'tertiary',
		size: 'default'
	}}
/>

<Story name="Tertiary Outlined Icon">
	<Button
		{...{
			kind: 'outlined',
			variant: 'tertiary',
			size: 'default'
		}}
		><Icon name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Tertiary Outlined Loading">
	<Button
		{...{
			kind: 'outlined',
			variant: 'tertiary',
			size: 'default',
			loading: true
		}}
	/>
</Story>

<Story
	name="Tertiary Outlined Small"
	args={{
		kind: 'outlined',
		variant: 'tertiary',
		size: 'small'
	}}
/>

<Story name="Tertiary Outlined Small Icon">
	<Button
		{...{
			kind: 'outlined',
			variant: 'tertiary',
			size: 'small'
		}}
		><Icon size="small" name="arrow-circle-left" slot="icon-before" />
	</Button>
</Story>

<Story name="Tertiary Outlined Small Loading">
	<Button
		{...{
			kind: 'outlined',
			variant: 'tertiary',
			size: 'small',
			loading: true
		}}
	/>
</Story>
