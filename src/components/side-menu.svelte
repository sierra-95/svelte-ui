<script>
    import { page } from '$app/stores';

    $: currentPath = $page.url.pathname;

	const routes = {
		introduction: '/docs',
		components: '/docs/components',
	};

	const isActiveExact = (/** @type {string} */ path) => currentPath === path;
	const isActiveStartsWith = (/** @type {string} */ path) => currentPath.startsWith(path);
</script>
<style>
	.icon-base {
		display: flex;
		justify-content: center;
        align-items: center;
		width: 95%;
		padding: 10px 0px;
		cursor: pointer;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
	}
	.icon-active {
		background-color: rgb(236, 244, 255);
        border-left: 1px solid rgb(185, 214, 255);
        border-top: 1px solid rgb(185, 214, 255);
        border-bottom: 1px solid rgb(185, 214, 255);
	}
    h2{
        display: flex;
        width: 50%;
        margin-left: 10px;
    }
</style>
<div class="swiper-slide menu border-r-1 border-gray-300">
    <div class="w-full h-[70px]"></div>
    <div class=" flex flex-col gap-3 pt-5 items-end">
        <!--Dont change pt-5-->
        <a href={routes.introduction} aria-label="button" class="icon-base {isActiveExact(routes.introduction) ? 'icon-active' : ''}">
            <i class="fa-solid fa-house text-[2.5rem] text-[#002B67]"></i>
            <h2>Introduction</h2>
        </a>
        <a href={routes.components} aria-label="button" class="icon-base {isActiveStartsWith(routes.components) ? 'icon-active' : ''}">
            <i class="fa-solid fa-box text-[2.5rem] text-[#002B67]"></i>
            <h2>Components</h2>
        </a>
    </div>
</div>