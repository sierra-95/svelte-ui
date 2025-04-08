<script>
  export let variant = "contained";
  export let color = "primary";
  export let disabled = false;
  export let isLoading = false;
  export let onClick;
  export let externalClass = "";
  
  const baseClasses = `px-4 py-2 text-lg rounded-[4px] focus:outline-none`;
  
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
    `,
  };
  const disabledClasses = "bg-gray-300 text-gray-600 cursor-not-allowed";
  const loadingClasses = "opacity-60 cursor-wait";
  
  let buttonClasses = `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ''} ${isLoading ? loadingClasses : ''}`;
</script>

<button
  class="{buttonClasses} {externalClass}"
  on:click={onClick}
  disabled={disabled}
>
  {#if isLoading}
    <svg class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
      <path d="M4 12a8 8 0 018-8m0 0a8 8 0 018 8" stroke="currentColor" stroke-width="4" fill="none" opacity="0.75"/>
    </svg>
  {/if}
  <span>{#if !isLoading} <slot></slot> {/if}</span>
</button>

<style>
  button:disabled {
    pointer-events: none;
  }
</style>
