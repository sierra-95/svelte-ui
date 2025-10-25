<script>
	import './dispatch.css';
    import {dispatchCarrier, clearDispatchMessage} from '$lib/index.js';

    const statusClass = {
		success: '#0F52BA',
		error: '#dc2626',
		warning: '#facc15'
	};
	$: retval = statusClass[$dispatchCarrier.status]
</script>
{#if $dispatchCarrier.message}
	<div id="dispatch" style="--retval: {retval};">
		<div>
			<div>
				{#if $dispatchCarrier.status === 'success'}
					<i class="fa-solid fa-circle-check"></i>
				{:else if $dispatchCarrier.status === 'error'}
					<i class="fa-solid fa-circle-xmark"></i>
				{:else if $dispatchCarrier.status === 'warning'}
					<i class="fa-solid fa-triangle-exclamation"></i>
				{/if}
				<p>{$dispatchCarrier.status}</p>
			</div>
			<i on:click={clearDispatchMessage} role="none" class="fa-solid fa-times"></i>
		</div>
		<div>{ $dispatchCarrier.message }</div>
	</div>
{/if}
