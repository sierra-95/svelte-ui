<script>
    import { onMount } from 'svelte';
	import {Header,Menu, Layout} from '../../components/index.js';
	
	/** @type {string | boolean}*/
	let isMenuOpen;
	let isMobile = false;

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
	function handleMobileSelect() {
		if (isMobile) isMenuOpen = false;
	}
</script>

<style>
	.menu-transition {
		transition: transform 0.3s ease, width 0.3s ease;
	}
</style>

<Header toggleMenu={toggleMenu}/>
<!--Menu-->
<div class="flex w-full h-[calc(100vh-70px)] overflow-hidden">
	<div
		class="menu-transition h-full bg-white overflow-hidden border-r-1 border-gray-300"
		class:fixed={isMobile}
		class:left-0={isMobile}
		class:z-50={isMobile}
		style={`width: ${isMenuOpen ? '300px' : isMobile ? '0px' : '70px'}; transform: translateX(${isMobile && !isMenuOpen ? '-100%' : '0'})`}
	>
		<div class="transition-opacity duration-300 ease-in-out">
			<Menu handleMobileSelect={handleMobileSelect} isMenuOpen={isMenuOpen}/>
		</div>
	</div>
	<!-- Content -->
	<div class="transition-all duration-300 overflow-y-auto p-4" style={`width: ${isMobile ? '100%' : isMenuOpen ? 'calc(100vw - 300px)' : 'calc(100vw - 70px)'};`}>
		<Layout><slot/></Layout>
	</div>
</div>
