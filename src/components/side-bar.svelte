<script>
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
	
	const routes = {
		introduction: '/docs',
		components: '/docs/components',
	};

	const isActiveExact = (/** @type {string} */ path) => currentPath === path;
	const isActiveStartsWith = (/** @type {string} */ path) => currentPath.startsWith(path);

	function toggleComponentMenu() {
		if (!currentPath.startsWith(routes.components)) {
			window.location.href = routes.components;
		}
    }
</script>

<style>
	.icon-base {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 10px 0px;
		cursor: pointer;
	}
	.icon-active {
		background-color: rgb(236, 244, 255);
		border-top: 1px solid rgb(185, 214, 255);
        border-bottom: 1px solid rgb(185, 214, 255);
	}
	@media (max-width: 768px) {
		#sidebar{
			display: none;
		}
	}
</style>

<div id="sidebar" class="w-[70px] flex flex-col gap-3 items-center pt-5 border-r-1 border-gray-300">
	<!--Dont change pt-5-->
	<a href={routes.introduction} aria-label="button" class="icon-base {isActiveExact(routes.introduction) ? 'icon-active' : ''}">
		<i class="fa-solid fa-house text-[2.5rem] text-[#002B67]"></i>
	</a>
	<button aria-label="none" on:click={toggleComponentMenu} class="icon-base {isActiveStartsWith(routes.components) ? 'icon-active' : ''}">
		<i class="fa-solid fa-box text-[2.5rem] text-[#002B67]"></i>
	</button>
</div>
