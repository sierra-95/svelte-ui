<script>
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { isLoading } from '$lib/index.js';

  let anchorEl = null;
  let open = false;
  let user = null;
  
  const handleClick = (/** @type {{ currentTarget: any; }} */ event) => {
    anchorEl = event.currentTarget;
    open = !open;
  };
  
  const handleClose = () => {
    open = false;
  };
  
  const handleLogout = (/** @type {string} */ action) => {
    handleClose();
    isLoading.update(val => !val);
    window.location.href = '/logout';
  };
</script>

<style>
  @import './profile.css';
</style>

<div class="user-menu flex">
  <button aria-label="none" class="my-auto mr-5" on:click={handleClick}>
      <i class="fa-solid fa-user"></i>
  </button>
  
  {#if open}
    <div class="menu-backdrop" role="none" on:click|self={handleClose} transition:fade={{ duration: 150 }}>
      <div class="menu-paper" transition:fly={{ y: -10, duration: 200, easing: quintOut }}>
        <div class="p-4 border-b-1 border-gray-100 text-left">
          {#if $user}
          <h2 class=""></h2>
            <p class="text-[0.9rem] text-[#666]"></p>
          {/if}
        </div>
        
        <ul class="menu-list">
            <a href='/dashboard/settings/profile' class="menu-item" on:click={() => handleClose()}>
              <i class="fa-solid fa-user"></i>
              <span class="ml-4">Profile</span>
            </a>
            <li role="none" class="menu-item" on:click={() => handleLogout()}>
              <i class="fa-solid fa-right-from-bracket"></i>
              <span class="ml-4">Logout</span>
            </li>
        </ul>
      </div>
    </div>
  {/if}
</div>