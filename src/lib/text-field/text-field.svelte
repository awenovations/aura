<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import Button from '$lib/button/button.svelte';
	import FormItem, { type Mode, type Size } from '$lib/form-item/form-item.svelte';
	import Icon from '$lib/icon/icon.svelte';
	import { createEventDispatcher } from 'svelte';

	type OverrideProps = 'type' | 'value' | 'size' | 'class' | `on:${string}`;
	type AuraInputTypeAttribute =
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'month'
		| 'number'
		| 'password'
		| 'range'
		| 'search'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	type $$Props = Omit<SvelteHTMLElements['input'], OverrideProps> & {
		type?: AuraInputTypeAttribute;
		value?: string | number | boolean;
		size?: Size;
		showErrors?: boolean;
		mode?: Mode | undefined;
	};

	/**
	 * The type of input to render. The Input component just supports a subset of
	 * those supported by the HTML Input element.
	 */
	export let type: $$Props['type'] = 'text';

	/**
	 * The value of the input control.
	 */
	export let value: $$Props['value'] = '';

	/*
	 * Whether the value is required. In addition to showing a required indicator,
	 * this performs some basic validation (i.e. is value truthy), and if it fails
	 * (and showErrors is true), the component will be rendered in its error
	 * state.
	 */
	export let required = false;

	/**
	 * Whether the component is disabled.
	 */
	export let disabled = false;

	/**
	 * The size of the input.
	 */
	export let size: Size = 'normal';

	/**
	 * Whether any errors the component has should be shown.
	 */
	export let showErrors = false;

	/**
	 * The mode of the input.
	 */
	export let mode: Mode | undefined = undefined;

	/**
	 * The width of the input
	 */
	export let width = undefined;

	/**
	 * The height of the input
	 */
	export let height = undefined;

	type InputEventDetail = {
		innerEvent: Event & { target: HTMLInputElement };
		value: string;
		valueAsNumber: number;
		valueAsDate: number;
	};

	// Unfortunately, e.target isn't typed properly by Svelte's type definitions
	// in web components. This means we need to forward all the events we're
	// interested in manually, inside our own wrapper.
	const dispatch = createEventDispatcher<{
		change: InputEventDetail;
		input: InputEventDetail;
		focus: InputEventDetail;
		blur: InputEventDetail;
		keydown: InputEventDetail;
		keyup: InputEventDetail;
		keypress: InputEventDetail;
		focusin: InputEventDetail;
		focusout: InputEventDetail;
	}>();

	function forwardEvent(e: Event) {
		const event = e as Event & { target: HTMLInputElement };
		dispatch(e.type as any, {
			value,
			valueAsDate: event.target.valueAsDate,
			valueAsNumber: event.target.valueAsNumber,
			innerEvent: event
		});
	}

	const pickerIcons = {
		date: 'calendar',
		time: 'clock'
	};

	let input: HTMLInputElement | undefined = undefined;
	let hasErrorsInternal = false;

	function onInput(e: Event & { currentTarget: HTMLInputElement }) {
		value = e.currentTarget['value'];
		hasErrorsInternal = (required && !value) || !input?.checkValidity();
	}
</script>

<FormItem
	bind:required
	bind:disabled
	{width}
	{height}
	{size}
	{mode}
	error={($$slots.errors || hasErrorsInternal) && showErrors}
>
	<slot name="left-icon" slot="left-icon" />
	<div class="input-container">
		<input
			{...$$restProps}
			class={`aura-input ${$$restProps.class}`}
			{disabled}
			{type}
			{value}
			bind:this={input}
			on:change={forwardEvent}
			on:input={onInput}
			on:input={forwardEvent}
			on:focus={forwardEvent}
			on:blur={forwardEvent}
			on:keydown={forwardEvent}
			on:keypress={forwardEvent}
			on:keyup={forwardEvent}
			on:focusin={forwardEvent}
			on:focusout={forwardEvent}
		/>
		<div class="extra">
			<slot name="extra" />
		</div>
	</div>
	<slot name="right-icon" slot="right-icon">
		{#if pickerIcons[type]}
			<Button kind="plain-faint" on:click={() => input?.showPicker()}>
				<Icon name={pickerIcons[type]} />
			</Button>
		{/if}
	</slot>
	<slot slot="label" />
</FormItem>
{#if showErrors}
	<div class="errors-text">
		<slot name="errors" />
	</div>
{/if}

<style lang="scss">
	.aura-input {
		all: unset;
		width: 100%;
		text-align: initial;
	}

	.aura-input::-webkit-calendar-picker-indicator {
		opacity: 0;
		flex: 1;
	}

	.input-container {
		flex: 1;

		display: flex;
		flex-direction: column;
		justify-content: stretch;

		cursor: text;
	}

	.extra {
		color: var(--aura-color-text-secondary);
	}

	.errors-text {
		font: var(--aura-button-small);
		color: var(--aura-form-item-error-text-color);
		font-weight: 300;
		margin-top: 3px;
	}
</style>
