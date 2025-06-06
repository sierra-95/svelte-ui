<script>
    import { onMount } from 'svelte';
	import {Toast, Header, SideBar, SideMenu} from '../../components/index.js';

	let isMenuOpen = true;
	let isMobile = false;

	const updateIsMobile = () => {
		isMobile = window.innerWidth < 768;
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
	onMount(() => {
		updateIsMobile();
		window.addEventListener('resize', updateIsMobile);
		return () => window.removeEventListener('resize', updateIsMobile);
	});

	// auto close menu after mobile selection
	function handleMobileSelect() {
		if (isMobile) isMenuOpen = false;
	}
</script>

<style>
	.menu-transition {
		transition: transform 0.3s ease, width 0.3s ease;
	}
</style>

<!-- Header -->
<div class="w-full h-[100px] bg-gray-800 text-white flex items-center justify-between px-4">
	<h1 class="text-xl">Header</h1>
	<button on:click={toggleMenu} class="bg-gray-700 px-3 py-1 rounded">Toggle Menu</button>
</div>

<!--Menu-->
<div class="flex w-full h-[calc(100vh-100px)] overflow-hidden">

	<!-- Side Menu -->
	<div
		class="menu-transition h-full bg-white overflow-hidden border-r-1 border-gray-300"
		class:fixed={isMobile}
		class:top-[100px]={isMobile}
		class:left-0={isMobile}
		class:z-50={isMobile}
		style={`width: ${isMobile ? '300px' : isMenuOpen ? '300px' : '0px'}; transform: translateX(${isMobile && !isMenuOpen ? '-100%' : '0'})`}
	><div
		class="transition-opacity duration-300 ease-in-out"
		style={`opacity: ${isMenuOpen || isMobile ? '1' : '0'}; pointer-events: ${isMenuOpen || isMobile ? 'auto' : 'none'};`}
		>
		<SideMenu/>
	</div></div>
	
	{#if !isMobile && !isMenuOpen}
		<SideBar/>
	{/if}

	<!-- Content -->
	<div class="transition-all duration-300"
		style={`width: ${isMobile ? '100%' : isMenuOpen ? 'calc(100vw - 300px)' : 'calc(100vw - 100px)'};`}
	>
		<slot/>
	</div>
</div>
