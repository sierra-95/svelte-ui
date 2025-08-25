<script>
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let onProfile = () => {};
  export let onLogout = () => {};
  export let iconBg = '#3b82f6';
  /**
   * @type {{ name?: string; email?: string } | null}
  */
  export let user = null;

  let anchorEl = null;
  let open = false;
  
  const handleClick = (/** @type {{ currentTarget: any; }} */ event) => {
    anchorEl = event.currentTarget;
    open = !open;
  };
  
  const handleClose = () => {
    open = false;
  };
</script>

<style>
  @import './profile.css';
</style>

<div class="user-menu">
  <button aria-label="none" class="my-auto mr-5" on:click={handleClick}>
      <i style="--iconBg: {iconBg}" class="fa-solid fa-user text-[2rem]"></i>
  </button>
  
  {#if open}
    <div class="menu-backdrop" role="none" on:click|self={handleClose} transition:fade={{ duration: 150 }}>
      <div class="menu-paper" transition:fly={{ y: -10, duration: 200, easing: quintOut }}>
        <div class="p-4 border-b-1 border-gray-100 text-left">
          <h2>{user?.name ?? 'User\'s Name'}</h2>
          <p class="text-[0.9rem] text-[#666]">{user?.email ?? 'Email'}</p>
        </div>
        
        <ul class="menu-list">
            <a href='/dashboard/settings/profile' class="menu-item" on:click={() => {handleClose(); onProfile()}}>
              <i style="--iconBg: {iconBg}" class="fa-solid fa-user"></i>
              <span class="ml-4">Profile</span>
            </a>
            <li role="none" class="menu-item" on:click={() => onLogout()}>
              <i style="--iconBg: {iconBg}" class="fa-solid fa-right-from-bracket"></i>
              <span class="ml-4">Logout</span>
            </li>
        </ul>
      </div>
    </div>
  {/if}
</div>