<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import FormItem from '$lib/form-item/form-item.svelte';

	type OverrideProps = 'id' | 'type' | 'value' | 'size' | 'class' | `on:${string}`;
	type AuraTextFieldTypeAttribute =
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
		| 'week'
		| 'multi';

	type $$Props = Omit<SvelteHTMLElements['input'], OverrideProps> & {
		type?: AuraTextFieldTypeAttribute;
		value?: string | number | boolean;
		showErrors?: boolean;
	};

	export let type: $$Props['type'] = 'text';
	export let value: $$Props['value'] = '';
	export let required = false;
	export let disabled = false;
	export let showErrors = false;
	export let width = undefined;
	export let height = undefined;
	export let id = uuidv4();

	type TextFieldEventDetail = {
		innerEvent: Event & { target: HTMLInputElement };
		value: string;
		valueAsNumber: number;
		valueAsDate: number;
	};

	const dispatch = createEventDispatcher<{
		change: TextFieldEventDetail;
		input: TextFieldEventDetail;
		focus: TextFieldEventDetail;
		blur: TextFieldEventDetail;
		keydown: TextFieldEventDetail;
		keyup: TextFieldEventDetail;
		keypress: TextFieldEventDetail;
		focusin: TextFieldEventDetail;
		focusout: TextFieldEventDetail;
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

	let input: HTMLInputElement | undefined = undefined;
	let hasErrorsInternal = false;

	function onInput(e: Event & { currentTarget: HTMLInputElement }) {
		value = e.currentTarget['value'];
		hasErrorsInternal = (required && !value) || !input?.checkValidity();
	}
</script>

<div class="aura-text-field-wrapper">
	{#if $$slots.label}
		<label for={id} class="label">
			<slot name="label" />
		</label>
	{/if}
	<FormItem
		bind:required
		bind:disabled
		{width}
		{height}
		error={($$slots.errors || hasErrorsInternal) && showErrors}
	>
		<slot name="left-icon" slot="left-icon" />
		<div class={classNames('text-field-container', { multi: type === 'multi' })}>
			{#if type === 'multi'}
				<textarea
					{...$$restProps}
					class={classNames('aura-text-field', $$restProps.class)}
					{disabled}
					{id}
					style="height: 100%;"
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
					on:focusout={forwardEvent}>{value}</textarea
				>
			{:else}
				<input
					{...$$restProps}
					class={classNames('aura-text-field', $$restProps.class)}
					{disabled}
					{type}
					{value}
					{id}
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
			{/if}
			<div class="extra">
				<slot name="extra" />
			</div>
		</div>
	</FormItem>
	{#if showErrors}
		<div class="errors-text">
			<slot name="errors" />
		</div>
	{/if}
</div>

<style lang="scss">
	.multi {
		height: 100%;
	}

	.aura-text-field {
		all: unset;
		width: 100%;
		text-align: initial;
	}

	.aura-text-field::-webkit-calendar-picker-indicator {
		opacity: 0;
		flex: 1;
	}

	.aura-text-field-wrapper {
		display: flex;
		flex-direction: column;

		label {
			text-align: left;
		}
	}

	.text-field-container {
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
