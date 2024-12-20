<script lang="ts">
	import Icon from '$lib/icon/icon.svelte';
	import Float from '$lib/float/float.svelte';
	import { createEventDispatcher } from 'svelte';
	import FormItem from '$lib/form-item/form-item.svelte';
	import clickOutside from '$lib/directives/click-outside';
	import { waitForElm } from '$lib/utilities/wait-for-elm';

	interface Change {
		value: string | undefined;
	}

	const dispatch = createEventDispatcher<{
		change: Change;
	}>();

	export let isOpen = false;
	export let isFocused = false;
	export let showErrors = false;
	export let name: string | undefined;
	export let currentValue: string | undefined;

	let target: HTMLElement;
	let menu: HTMLElement;

	$: minWidth = (isOpen !== undefined && target?.getBoundingClientRect().width) || 0;

	const onClick = () => {
		isOpen = !isOpen;
	};

	const handleBlur = () => {
		isOpen = false;
		isFocused = false;
	};

	const handleFocus = () => {
		isFocused = true;
	};

	$: menuItems = Array.from(
		(menu?.querySelector('.aura-menu slot') as HTMLSlotElement)
			?.assignedElements()
			?.filter((element) => ['AURA-OPTION'].includes(element.tagName)) ??
			menu?.querySelectorAll('.aura-menu > :is(aura-option)') ??
			[]
	) as HTMLElement[];

	$: {
		for (const menuItem of menuItems) {
			menuItem.setAttribute('tabindex', '0');

			if (menuItem.tagName === 'AURA-OPTION') {
				menuItem.setAttribute('role', 'option');

				if (currentValue === getValue(menuItem)) {
					menuItem.setAttribute('aria-selected', '');
				} else menuItem.removeAttribute('aria-selected');
			}
		}
	}

	const getValue = (e: Element) => {
		return e.getAttribute('value') ?? e['value'] ?? e.textContent;
	};

	const selectMenuItem = (e: Event) => {
		const item = menuItems.find((item) => e.composedPath().includes(item));

		if (item.tagName === 'AURA-OPTION') {
			const value = getValue(item);

			if (!$$props.currentValue) {
				currentValue = value;
			}

			dispatch('change', {
				value
			});
		}
	};

	const handleOpenOnArrowKeyPress = async (evt: KeyboardEvent) => {
		isOpen = true;
		await waitForElm('.aura-menu');
		handleSelectMenuKeyboardActions(evt);
	};

	const handleArrowDownKeyPress = (evt: KeyboardEvent) => {
		evt.preventDefault();
		let nextOption = menu.querySelector('aura-option[aria-selected] + aura-option');

		if (!nextOption) {
			nextOption = menu.querySelector('aura-option:first-of-type');
		}

		nextOption.click();
	};

	const handleArrowUpKeyPress = (evt: KeyboardEvent) => {
		evt.preventDefault();
		let nextOption = menu.querySelector('aura-option:has( + aura-option[aria-selected])');

		if (!nextOption) {
			nextOption = menu.querySelector('aura-option:last-of-type');
		}
		nextOption.click();
	};

	const handleSelectMenuKeyboardActions = async (evt: KeyboardEvent) => {
		if (evt.code === 'Escape' || evt.code === 'Tab') {
			handleBlur();
		} else if (!isOpen && (evt.code === 'ArrowDown' || evt.code === 'ArrowUp')) {
			await handleOpenOnArrowKeyPress(evt);
		} else if (evt.code === 'ArrowDown') {
			handleArrowDownKeyPress(evt);
		} else if (evt.code === 'ArrowUp') {
			handleArrowUpKeyPress(evt);
		}
	};

	const handleMenuOptionSelectEvent = (evt: PointerEvent) => {
		selectMenuItem(evt);
		if (evt.pointerId !== -1) handleBlur();
	};
</script>

<div
	{...$$restProps}
	class={`aura-dropdown ${$$restProps.class}`}
	bind:this={target}
	tabindex="-1"
	role="button"
	use:clickOutside={(isOpen || isFocused) && handleBlur}
	on:keydown|stopPropagation={handleSelectMenuKeyboardActions}
	on:click|stopPropagation={onClick}
>
	{#if name?.length > 0}
    <input {name} type="hidden" bind:value={currentValue} />
	{/if}
	<FormItem showFocusOutline={isOpen || isFocused} error={$$slots.errors && showErrors}>
		<button class="trigger" on:focus={handleFocus}>
			{#if currentValue}
				{currentValue}
			{:else}
				<slot name="placeholder">select...</slot>
			{/if}
			<Icon name="caret-down" size="small" />
		</button>
	</FormItem>
	{#if isOpen}
		<Float {target}>
			<div
				bind:this={menu}
				role="menu"
				tabindex="-1"
				class="aura-menu"
				style:--aura-menu-control-width={`${minWidth}px`}
				on:keypress={handleSelectMenuKeyboardActions}
				on:click|stopPropagation={handleMenuOptionSelectEvent}
			>
				<slot />
			</div>
		</Float>
	{/if}
</div>
{#if showErrors}
	<div class="errors-text">
		<slot name="errors" />
	</div>
{/if}

<style lang="scss">
	.aura-dropdown {
		button {
			all: unset;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			:global(.icon) {
				--icon-color: var(--aura-dropdown-open-icon-color);
				margin-top: 2px;
				margin-left: -5px;
			}
		}
	}

	.aura-menu {
		border-radius: var(--aura-menu-border-radius);
		box-shadow: var(--aura-menu-drop-shadow);
		border: 1px solid var(--aura-menu-border-color);
		background-color: var(--aura-menu-background-color);
		min-height: 25px;
		margin-top: var(--aura-menu-margin-top);
		width: var(--aura-menu-control-width);
		display: flex;
		flex-direction: column;
		padding: var(--aura-menu-padding);
		box-sizing: border-box;
		cursor: pointer;
		gap: var(--aura-menu-padding);

		:global(aura-option) {
			width: 100%;
			border-radius: var(--aura-dropdown-option-border-radius);
			padding: var(--aura-dropdown-option-padding);
			box-sizing: border-box;
			user-select: none;
			color: var(--aura-light-font-color);

			&:hover {
				background: var(--aura-dropdown-option-hover-background);
			}
		}

		:global(aura-option:active),
		:global(aura-option[aria-selected]) {
			background: var(--aura-dropdown-option-active-background);
			color: var(--aura-dropdown-option-active-color);
		}
	}

	.errors-text {
		font: var(--aura-button-small);
		color: var(--aura-form-item-error-text-color);
		font-weight: 300;
		margin-top: 3px;
	}
</style>
