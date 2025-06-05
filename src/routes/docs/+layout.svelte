<script lang="ts">
  import { onMount } from 'svelte';
  import {LinearProgress, isLoading, SiteUnderMaintenance, Toast, Modal } from '$lib/index.js';
  import Swiper, { Swiper as SwiperClass } from 'swiper';
  import { page } from '$app/stores';
  import Header from '../../components/header.svelte';
  import SideBar from '../../components/side-bar.svelte';
  import SideMenu from '../../components/side-menu.svelte';
  import '../../layout.css';
  let swiper: SwiperClass;

  //Close Menu after navigating on phones
  $: currentPath = $page.url.pathname;
  const isMobile = () => window.innerWidth < 768;

  $: if (swiper && currentPath && isMobile()) {
    swiper.slideTo(1);
  }

  //Initialize Swiper
  onMount(() => {
    const menuButton = document.querySelector('.menu-button');
    const openMenu = () => swiper.slidePrev();

    swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      // allowTouchMove: false,
      on: {
        slideChangeTransitionStart(this: SwiperClass) {
          const slider = this;
          const sidebar = document.getElementById('sidebar');
          const children = document.getElementById('children');
          if (slider.activeIndex === 0) {
            menuButton?.classList.add('cross');
            if (sidebar) sidebar.style.display = 'none';
            if (children) children.style.width = '100%';
            menuButton?.removeEventListener('click', openMenu, true);
          } else {
            menuButton?.classList.remove('cross');
            if (sidebar) sidebar.style.display = '';
            if (children) children.style.width = 'calc(100% - 100px)';
          }
        },
        slideChangeTransitionEnd(this: SwiperClass) {
          const slider = this;
          if (slider.activeIndex === 1) {
            menuButton?.addEventListener('click', openMenu, true);
          }
        },
      },
    });
  });
</script>

<style>
  main{
    height: calc(100vh - 70px);
  }
</style>
<div class="swiper">
  <div class="swiper-wrapper">
    <SideMenu/>
    <div class="swiper-slide">
      <Header />
      <main class="flex">
        <SideBar/>
        <div id="children" class="flex-grow">
          {#if $isLoading}
            <LinearProgress />
          {/if}
          <Toast/>
          <Modal/>
          <slot/>
        </div>
      </main>
    </div>
  </div>
</div>
