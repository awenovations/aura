<script lang="ts" context="module">
	import '../../app.scss';

	import Panel from '$lib/panel/panel.svelte';
	import { panelPlacement } from '$lib/panel/props.ts';

	export const meta = {
		title: 'AURA/Panel',
		component: Panel,
		tags: ['autodocs'],
		argTypes: {
			placement: { control: 'select', options: panelPlacement },
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
  import Button from '$lib/button/button.svelte';

  $: open = true;
</script>

<Template let:args>
  <div style="height: 100%; min-height: 250px; width: 100%;">
  <Button on:click={() => { open = !open}} class={`${args.placement}-button`}>Toggle Panel</Button>
  <Panel {...args} {open}>
		<div class="panel-content">
			{args.placement.charAt(0).toUpperCase() + args.placement.slice(1)} Aura Panel
		</div>
	</Panel>
  </div>
</Template>

<Story
	name="Right Panel"
	args={{
		placement: 'right',
	}}
/>

<Story
	name="Left Panel"
	args={{
		placement: 'left',
	}}
/>

<Story
	name="Top Panel"
	args={{
		placement: 'top',
	}}
/>

<Story
	name="Bottom Panel"
	args={{
		placement: 'bottom',
	}}
/>

<style lang="scss">
	.panel-content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

  :global(.bottom-button) {
    position: absolute;
    top: 30%;
    transform: translate(-50%, -50%);
    left: 50%;
  }

  :global(.top-button) {
    position: absolute;
    bottom: 30%;
    transform: translate(-50%, 50%);
    left: 50%;
  }

  :global(.left-button) {
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    right: 30%;
  }

  :global(.right-button) {
    position: absolute;
    bottom: 50%;
    transform: translate(-50%, 50%);
    left: 30%;
  }
</style>
