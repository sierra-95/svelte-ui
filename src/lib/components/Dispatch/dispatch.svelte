<script>
    import {dispatchCarrier} from '$lib/index.js';

    const statusClass = {
		success: 'bg-[#0F52BA] text-white',
		error: 'bg-[#dc2626] text-white',
		warning: 'bg-[#facc15] text-black'
	};
</script>
{#if $dispatchCarrier.message}
	<div 
		class={`h-[40px] p-2 w-full text-center truncate overflow-hidden whitespace-nowrap
 		${statusClass[$dispatchCarrier.status]}`}
	>{ $dispatchCarrier.message }
	</div>
{/if}
