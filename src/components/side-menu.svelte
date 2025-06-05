<script>
    import { page } from '$app/stores';

    $: currentPath = $page.url.pathname;

	const routes = {
		home: '/docs',
		map: '/dashboard/maps',
		settings: '/dashboard/settings'
	};

	const isActive = (/** @type {string} */ path) => currentPath.startsWith(path);
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
        <a href={routes.home} aria-label="button" class="icon-base {isActive(routes.home) ? 'icon-active' : ''}">
            <i class="fa-solid fa-house text-[2.5rem] text-[#002B67]"></i>
            <h2>Home</h2>
        </a>
    </div>
</div>