<script lang="ts">
  import { CircularProgress } from '$lib/index.js';
  
  export let variant: 'contained' | 'outlined' = 'contained';
  export let color = 'primary';
  export let disabled = false;
  export let isLoading = false;
  export let onClick = () => {};
  export let externalClass = '';
  export let submit = false;

  let buttonClasses = 'btn';

  buttonClasses += ` btn-${variant}`;

  if (variant === 'contained') {
    buttonClasses += ` btn-contained-${color}`;
  } else if (variant === 'outlined') {
    buttonClasses += ` btn-outlined-${color}`;
  }

  if (isLoading) buttonClasses += ' btn-loading';
  if (disabled) buttonClasses += ' btn-disabled';
  if (externalClass) buttonClasses += ` ${externalClass}`;
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
