<script>
	import '../app.css';
	
	let { children } = $props();

    import { onMount } from 'svelte';
	import {LinearProgress, isLoading} from '$lib/index.js'
	import {Header,Menu, Layout, Flyout} from '../components/index.js';
	
	/** @type {string | boolean}*/
	let isMenuOpen = $state(false);

	let isMobile = $state(false);
	/**
	 * @type {{ label?: string, path?: string, icon?: string, subitems?: any[] } | null}
	 */
	let hovered = $state(null);

	onMount(() => {
		if (typeof localStorage !== 'undefined') {
			const stored = localStorage.getItem('isMenuOpen');
			if (stored === null) {
				localStorage.setItem('isMenuOpen', 'true');
				isMenuOpen = true;
			} else {
				isMenuOpen = stored === 'true';
			}
		}
	});
	const updateIsMobile = () => {
		isMobile = window.innerWidth < 768;
		if(isMobile) isMenuOpen = false; 
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('isMenuOpen', isMenuOpen.toString());
		}
	};
	onMount(() => {
		updateIsMobile();
		window.addEventListener('resize', updateIsMobile);
		return () => window.removeEventListener('resize', updateIsMobile);
	});
	/**
	 * @param {MouseEvent & { currentTarget: HTMLAnchorElement }} e
	 */
	function handleMobileSelect(e) {
		if (isMobile) isMenuOpen = false;
		if (!isMobile && hovered?.subitems?.length) e.preventDefault();
	}
</script>

<style>
	.menu-transition {
		transition: transform 0.3s ease, width 0.3s ease;
	}
</style>

<Header toggleMenu={toggleMenu}/>
{#if $isLoading}
	<LinearProgress />
{/if}
<!--Menu-->
<div class="flex w-full h-[calc(100vh-70px)] overflow-hidden">
	<div
		class="menu-transition h-full bg-white overflow-hidden border-r-1 border-gray-300"
		class:fixed={isMobile}
		class:left-0={isMobile}
		class:z-50={isMobile}
		style={`width: ${isMenuOpen ? '300px' : isMobile ? '0px' : '70px'}; transform: translateX(${isMobile && !isMenuOpen ? '-100%' : '0'})`}
	>
		<Menu {isMenuOpen} bind:hovered handleMobileSelect={handleMobileSelect}/>
	</div>
	<!-- Content -->
	<div class="relative transition-all duration-300 overflow-y-auto" style={`width: ${isMobile ? '100%' : isMenuOpen ? 'calc(100vw - 300px)' : 'calc(100vw - 70px)'};`}>
		<Flyout {hovered} {isMobile}/>
		<Layout>{@render children()}</Layout>
	</div>
</div>
