<script>
    import { page } from '$app/stores';
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    import { isLoading } from '$lib/index.js';
    import {sections} from './sections.js';

    export let handleMobileSelect = () => {};
    export let isMenuOpen;

    beforeNavigate(() => isLoading.set(true));
	afterNavigate(() => isLoading.set(false));

	export let hovered;
	const handleMouseEnter = (/** @type {{ path: string; label: string; icon: string; subitems: { path: string; label: string; }[]; } | { path: string; label: string; icon: string; subitems?: undefined; }} */ item) => {
        if (item.subitems) hovered = item;
    };
    const handleMouseLeave = () => {
        hovered = null;
    };
</script>
<style>
    @import './menu.css';
</style>
<div class="flex flex-col gap-3 items-end pt-5">
	{#each sections as section, i}
		{#if section.label}
			<div class="w-5/6">
				<h2 class:hidden={!isMenuOpen} class="text-dk-blue text-sm">{section.label}</h2>
				<hr class="text-[#D1D5DB]"/>
			</div>
		{/if}

		{#each section.items as item}
			<a  title={item.label}
				href={item.path}
				on:mouseenter={() => handleMouseEnter(item)}
				on:mouseleave={handleMouseLeave}
				on:click={handleMobileSelect}
				class="icon-base"
				class:icon-base_radius_override={!isMenuOpen}
				class:icon-active={$page.url.pathname === item.path}
			>
				<i class={item.icon} style="font-size: 20px; color: rgb(0, 43, 103)"></i>
				<h2 class:hidden={!isMenuOpen}>{item.label}</h2>
			</a>
		{/each}
	{/each}
</div>
