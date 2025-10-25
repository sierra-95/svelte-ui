<script>
	import '../app.css';
    import { onMount } from 'svelte';
	import {LinearProgress, isLoading, isMobile, Modal} from '$lib/index.js'
	import {Header,Menu, Layout} from '../components/index.js';
	
	let { children } = $props();
	let isMenuOpen = $state(false);
	
	$effect(() => {
		if ($isMobile) isMenuOpen = false;
	});

	onMount(() => {
		if($isMobile) return;
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
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		if($isMobile) return;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('isMenuOpen', isMenuOpen.toString());
		}
	};
	const mobileMenuSelect = () => {
		if ($isMobile) isMenuOpen = false;
	};
</script>

<Modal />
<Header toggleMenu={toggleMenu}/>
{#if $isLoading}<LinearProgress />{/if}
<div class="flex w-full h-[calc(100vh-70px)]">
	<div
		class="h-full bg-white  border-r-1 border-gray-300"
		class:fixed={$isMobile}
		class:left-0={$isMobile}
		class:z-5={$isMobile}
		style={
			$isMobile
			? `width:300px;transform: translateX(${isMenuOpen ? '0%' : '-100%'}); transition: transform 0.3s ease;`
			: `width: ${isMenuOpen ? '300px' : '70px'}; transition: width 0.3s ease;`
		}
	><Menu {isMenuOpen} mobileMenuSelect={mobileMenuSelect} />
	</div>
	<div class="overflow-y-auto w-full">
		<Layout>{@render children()}</Layout>
	</div>
</div>