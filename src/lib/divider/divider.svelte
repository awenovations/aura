<script lang="ts">
	import type * as Props from './props';

	export let direction: Props.DividerDirection = 'horizontal';

	const vertical = direction === 'vertical';
	const horizontal = direction === 'horizontal';
</script>

<div class:vertical class:horizontal class="aura-divider">
  {#if $$slots.default}
    <div class="text">
      <slot />
    </div>
  {/if}
</div>

<style lang="scss">
	.aura-divider {
    --fill: var(--aura-divider-fill);
    --border: 1px solid var(--fill);

    & .text {
      color: var(--fill);
    }

		display: flex;
    flex: 1;

    &:before,
    &:after {
      content: '';
      flex: 1 1;
      margin: auto;
    }

		&.horizontal {
			flex-direction: row;
      height: min-content;

      & .text {
        margin: auto 0.625rem;
        height: min-content;
      }

      &:before,
      &:after {
        border-bottom: var(--border);
        transform: translateY(-0.5px);
      }
		}

		&.vertical {
      height: 100%;
			flex-direction: column;

      & .text {
        margin: 0.625rem 0;
        text-align: center;
      }

      &:before,
      &:after {
        border-right: var(--border);
        transform: translateX(-0.5px);
      }
		}
	}
</style>
