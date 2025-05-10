<script lang="ts">
  import { toastStore } from './toast.store';

  import Alert from '$lib/alert/alert.svelte';
</script>

<div class='toast-wrapper'>
  {#each $toastStore as toast}
    <Alert severity={toast.severity} autoDismissTime={toast.duration - 300}>
      {toast.message}
    </Alert>
  {/each}
</div>

<style lang="scss">
  .toast-wrapper {
    position: absolute;
    top: 0.714rem;
    right: 0.714rem;
    display: flex;
    flex-direction: column;
    gap: 0.714rem;
    z-index: 10000;
  }
</style>
