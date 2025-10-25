<script>
	// enable runes for this component (if not global)
	// @enable runes

	const { size = 50, thickness = 4, color = '#3b82f6' } = $props();

	const radius = $derived((size - thickness) / 2);
	const circumference = $derived(2 * Math.PI * radius);
</script>

<svg
	width={size}
	height={size}
	viewBox={`0 0 ${size} ${size}`}
	class="spinner"
>
	<circle
		cx={size / 2}
		cy={size / 2}
		r={radius}
		fill="none"
		stroke="#e5e7eb"
		stroke-width={thickness}
	/>
	<circle
		cx={size / 2}
		cy={size / 2}
		r={radius}
		fill="none"
		stroke={color}
		stroke-width={thickness}
		stroke-linecap="round"
		stroke-dasharray={circumference}
		stroke-dashoffset={circumference * 0.25}
	/>
</svg>

<style>
	.spinner {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	svg {
		display: block;
	}

	circle {
		transform-origin: center;
	}
</style>
