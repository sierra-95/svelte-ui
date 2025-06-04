<script lang="ts">
  import { CircularProgress } from '$lib/index.js';
  
  export let variant: 'contained' | 'outlined' = 'contained';
  export let color = 'primary';
  export let disabled = false;
  export let isLoading = false;
  export let onClick = () => {};
  export let externalClass = '';
  export let submit = false;

  const baseClasses = `px-4 py-2 text-lg rounded-[4px] focus:outline-none cursor-pointer`;

  const variantClasses = {
    contained: `
      ${color === 'primary' ? 'bg-[#0F52BA] hover:bg-[#0C4C8C]' : ''} 
      ${color === 'secondary' ? 'bg-[#FFA500] hover:bg-[#FF7F32]' : ''} 
      ${color === 'error' ? 'bg-[#FF5733] hover:bg-[#FF2A1D]' : ''} 
      text-white
      transition-all duration-300 ease-in-out
    `,
    outlined: `
      border-2
      ${color === 'primary' ? 'border-[#0F52BA] text-[#0F52BA]' : ''} 
      ${color === 'secondary' ? 'border-[#FFA500] text-[#FFA500]' : ''} 
      ${color === 'error' ? 'border-[#FF5733] text-[#FF5733]' : ''} 
    `
  };

  const disabledClasses = 'bg-[#ccc]';
  const loadingClasses = 'opacity-60 cursor-wait pointer-events-none min-w-[200px]';

  let buttonClasses = `${baseClasses} ${variantClasses[variant]} ${isLoading ? loadingClasses : ''}`;
</script>

<button
  class="{buttonClasses} {disabled ? disabledClasses : externalClass}"
  on:click={onClick}
  disabled={disabled}
  type={submit ? 'submit' : 'button'}
>
  {#if isLoading}
    <div class="flex justify-center">
      <CircularProgress size={30} thickness={2} />
    </div>
  {/if}
  {#if !isLoading}
    <slot></slot>
  {/if}
</button>

<style>
  button:disabled {
    pointer-events: none;
  }
</style>
