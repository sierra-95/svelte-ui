<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    export let handleMobileSelect = () => {};

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

    $: {
        const path = $page.url.pathname;
        if (path.startsWith(routes.components)) {
            isComponentMenuOpen = true;
        } else {
            isComponentMenuOpen = false;
        }
    }

    function toggleComponentMenu() {
        if (!currentPath.startsWith(routes.components)) {
            goto(routes.components);
            return;
        }
        isComponentMenuOpen = !isComponentMenuOpen;
    }
</script>
<style>
    @import './menu.css';
</style>
<div class=" flex flex-col gap-3 items-end pt-5">
    <!--Dont change pt-5-->
    <div class="w-[95%] icon-base {isActiveExact(routes.introduction) ? 'icon-active' : ''}">
        <i class="fa-solid fa-house text-[2.5rem] text-[#002B67]"></i>
        <a 
        on:click={handleMobileSelect}
        href={routes.introduction} 
        class="ml-2 w-[50%]">Get Started</a>
    </div>
    <nav class="w-[95%]">
        <div class="icon-base {isActiveStartsWith(routes.components) ? 'icon-active' : ''}"><i class="fa-solid fa-box text-[2.5rem] text-[#002B67]"></i>
        <button on:click={toggleComponentMenu} class="ml-2 cursor-pointer hover:underline w-[50%]">
            Components
            <span class="caret {isComponentMenuOpen ? 'rotate' : ''}">›</span>
        </button></div>
        <div class="flex justify-end">
            <ul 
            class="flex flex-col gap-2 items-start w-[50%] mt-2 submenu 
            {isComponentMenuOpen ? 'open' : 'closed'}">
            {#each componentLinks as link}
                <a
                on:click={handleMobileSelect}
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
