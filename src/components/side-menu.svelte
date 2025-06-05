<script>
    import { page } from '$app/stores';

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
</script>
<style>
	.icon-base {
		display: flex;
		justify-content: center;
        align-items: center;
		padding: 10px 0px;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
	}
	.icon-active {
		background-color: rgb(236, 244, 255);
        border-left: 1px solid rgb(185, 214, 255);
        border-top: 1px solid rgb(185, 214, 255);
        border-bottom: 1px solid rgb(185, 214, 255);
	}
    a:hover{
        text-decoration: underline;
        transition: color 0.2s ease;
    }
    a:active{
        color: red;
    }
</style>
<div class="swiper-slide menu border-r-1 border-gray-300">
    <div class="w-full h-[70px]"></div>
    <div class=" flex flex-col gap-3 pt-5 items-end">
        <!--Dont change pt-5-->
        <div class="w-[95%] icon-base {isActiveExact(routes.introduction) ? 'icon-active' : ''}">
            <i class="fa-solid fa-house text-[2.5rem] text-[#002B67]"></i>
            <a href={routes.introduction} class="ml-2">Introduction</a>
        </div>
        <nav class="w-[95%]">
            <div class="icon-base {isActiveStartsWith(routes.components) ? 'icon-active' : ''}"><i class="fa-solid fa-box text-[2.5rem] text-[#002B67]"></i>
            <a href={routes.components} class="ml-3">Components</a></div>
            <div class="flex justify-end">
                <ul class="flex flex-col gap-2 items-start w-[50%] mt-2">
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