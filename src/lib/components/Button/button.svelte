<script lang="ts">
  import { CircularProgress } from '$lib/index.js';
  
  export let variant: 'contained' | 'outlined' = 'contained';
  export let color = 'primary';
  export let disabled = false;
  export let isLoading = false;
  export let onClick = () => {};
  export let externalClass = '';
  export let submit = false;

  $: buttonClasses = (() => {
    let classes = 'base-btn';

    classes += ` btn-${variant}`;

    if (variant === 'contained') {
      classes += ` btn-contained-${color}`;
    } else if (variant === 'outlined') {
      classes += ` btn-outlined-${color}`;
    }

    if (isLoading) classes += ' btn-loading';
    if (disabled) classes += ' btn-disabled';
    if (externalClass) classes += ` ${externalClass}`;

    return classes;
  })();

</script>

<style>
  @import './button.css';
</style>

<button
  class="{buttonClasses}"
  on:click={onClick}
  disabled={disabled}
  type={submit ? 'submit' : 'button'}
>
  {#if isLoading}
    <div class="circular-progress">
      <CircularProgress size={30} thickness={2} />
    </div>
  {/if}
  {#if !isLoading}
    <slot></slot>
  {/if}
</button>
