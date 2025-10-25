<script lang="ts">
	// @enable runes
	import { CircularProgress } from '$lib/index.js';

  type _variant = 'contained' | 'outlined';
  type _color = 'primary' | 'warning' | 'error';
  type _buttonType = 'button' | 'submit' | 'reset';

	const {
		variant = 'contained' as _variant,
		color = 'primary' as _color,
    	type = 'button' as _buttonType,
		title = '',
		pill = false,
		spinner = 20,
		thickness = 2,
		disabled = false,
		isLoading = false,
		html2canvas_ignore = 'false',
		style = '',
    	children = null,
		...rest
	} = $props();

	const buttonClasses = $derived(() => {
		let classes = 'base-btn';

		if (variant) classes += ` btn-${variant}`;

		if (variant === 'contained') {
			classes += ` btn-contained-${color}`;
		} else if (variant === 'outlined') {
			classes += ` btn-outlined-${color}`;
		}

		if (style) classes += ` ${style}`;

		return classes;
	});
</script>

<style>
	@import './button.css';
</style>

<button
	{...rest}
	data-html2canvas-ignore={html2canvas_ignore}
	class:pill={pill}
	class:disabled={isLoading || disabled}
	class={buttonClasses()}
	disabled={isLoading || disabled}
	type={type}
	title={title}
	onclick={(e: MouseEvent) => {
		rest.onclick?.(e);
	}}
>
	{@render children?.()}
	{#if isLoading}
		<CircularProgress size={spinner} thickness={thickness} />
	{/if}
</button>
