<script lang="ts">
  import { getContext } from 'svelte';


   const story = getContext('story')

   //$: console.log(_)

</script>

<div data-theme={'light'}>
	<slot />
</div>
