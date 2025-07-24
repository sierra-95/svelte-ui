<script lang="ts">
  import { CircularProgress } from '$lib/index.js';
  
  export let variant: 'contained' | 'outlined' | '' = '';
  export let color = 'primary';
  export let title = "";
  export let pill = false;
  export let spinner = 20;
  export let thickness = 2;
  export let disabled = false;
  export let isLoading = false;
  export let onClick = () => {};
  export let style = '';
  export let submit = false;
  export let html2canvas_ignore = "false";

  $: buttonClasses = (() => {
    let classes = 'base-btn';
    //Variant
    if(variant) classes += ` btn-${variant}`;
    //Color
    if (variant === 'contained') {
      classes += ` btn-contained-${color}`;
    } else if (variant === 'outlined') {
      classes += ` btn-outlined-${color}`;
    }
    if (style) classes += ` ${style}`;
    return classes;
  })();

</script>

<style>
  @import './button.css';
</style>

<button
  data-html2canvas-ignore={html2canvas_ignore}
  class:pill={pill}
  class:disabled={isLoading || disabled}
  class="{buttonClasses}"
  on:click={onClick}
  disabled={isLoading || disabled}
  type={submit ? 'submit' : 'button'}
  title={title}  
>
  {#if isLoading}
    <div id='btn-loading'><CircularProgress size={spinner} thickness={thickness} /></div>
  {/if}
  {#if !isLoading}
    <slot></slot>
  {/if}
</button>
