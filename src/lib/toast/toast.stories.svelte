<script lang="ts" context="module">
	import '../../app.scss';

	import { showToast } from '$lib/toast/toast.store';
	import { alertSeverity } from '$lib/alert/props';

	import Toast from '$lib/toast/toast.svelte';
	import Button from '$lib/button/button.svelte';
	import TextField from '$lib/text-field/text-field.svelte';

	export const meta = {
		title: 'AURA/Toast',
		component: Toast,
		tags: ['autodocs'],
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let message = "Test Notification Message";
</script>

<Template let:args>
  <div class='wrapper'>
    <TextField bind:value={message} style="width: 250px;" />

    <div>
      <Button
        size='small'
        fullWidth
        on:click={() => {
          showToast({
            severity: alertSeverity[Math.floor(Math.random() * 4)],
            message,
            duration: 6000
          });
        }}
       >
        Send
      </Button>
    </div>
  </div>

	<Toast />
</Template>

<Story name="Default Toasts" />

<style lang="scss">
  .wrapper {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 10px; 
  }
</style>
