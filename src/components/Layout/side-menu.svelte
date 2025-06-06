<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    $: currentPath = $page.url.pathname;

	const routes = {
		introduction: '/docs',
		components: '/docs/components',
	};
    const componentLinks = [
        { name: 'Button', path: '/docs/components/button' },
        { name: 'Progress', path: '/docs/components/progress' },
    ];


	const isActiveExact = (/** @type {string} */ path) => currentPath === path;
	const isActiveStartsWith = (/** @type {string} */ path) => currentPath.startsWith(path);

    let isComponentMenuOpen = false;

    onMount(() => {
        if (currentPath === routes.components) {
            isComponentMenuOpen = true;
        }
    });
    function toggleComponentMenu() {
        if (!currentPath.startsWith(routes.components)) {
            window.location.href = routes.components;
            return;
        }
        isComponentMenuOpen = !isComponentMenuOpen;
    }
</script>
<style>
    @import './menu.css';
</style>
<div class="swiper-slide menu border-r-1 border-gray-300">
    <div class="w-full h-[70px]"></div>
    <div class=" flex flex-col gap-3 pt-5 items-end">
        <!--Dont change pt-5-->
        <div class="w-[95%] icon-base {isActiveExact(routes.introduction) ? 'icon-active' : ''}">
            <i class="fa-solid fa-house text-[2.5rem] text-[#002B67]"></i>
            <a href={routes.introduction} class="ml-2">Get Started</a>
        </div>
        <nav class="w-[95%]">
            <div class="icon-base {isActiveStartsWith(routes.components) ? 'icon-active' : ''}"><i class="fa-solid fa-box text-[2.5rem] text-[#002B67]"></i>
            <button on:click={toggleComponentMenu} class="ml-3 cursor-pointer hover:underline">
                Components
                <span class="caret {isComponentMenuOpen ? 'rotate' : ''}">›</span>
            </button></div>
            <div class="flex justify-end">
                <ul 
                class="flex flex-col gap-2 items-start w-[50%] mt-2 submenu 
                {isComponentMenuOpen ? 'open' : 'closed'}">
                {#each componentLinks as link}
                    <a
                    href={link.path}
                    class={currentPath === link.path ? 'text-[#002B67] underline' : ''}
                    >
                    {link.name}
                    </a>
                {/each}
                </ul>
            </div>
        </nav>
    </div>
</div>