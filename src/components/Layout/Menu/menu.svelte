<script>
    import { page } from '$app/stores';
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    import { isLoading } from '$lib/index.js';
    import {sections} from './sections.js';

	export let mobileMenuSelect;
	export let isMenuOpen;

	let size = 30;
	
	beforeNavigate(() => isLoading.set(true));
	afterNavigate(() => isLoading.set(false));
</script>
<style>
    @import './menu.css';
</style>
<div id="menu" class="flex flex-col gap-3 items-end pt-5">
	{#each sections as section, i}
		{#if section.label}
			<div class="w-5/6">
				<h3 class:hidden={!isMenuOpen} class="text-dk-blue text-sm">{section.label}</h3>
				<hr class="text-[#D1D5DB]"/>
			</div>
		{/if}

		{#each section.items as item}
			<a  title={item.label}
				href={item.path}
				on:click={mobileMenuSelect}
				class="icon-base"
				class:icon-base_radius_override={!isMenuOpen}
				class:icon-active={$page.url.pathname === item.path}

			>
				<i class={item.icon} style="font-size: 20px; color: rgb(0, 43, 103)"></i>
				<h3 class:hidden={!isMenuOpen}>{item.label}</h3>
			</a>
		{/each}
	{/each}
</div>
