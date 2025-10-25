<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let onProfile: () => void = () => {};
  export let onLogout: () => void = () => {};
  export let iconBg: string = '#3b82f6';
  export let absolute: string = 'left';
  export let parentIconSize: string = '30px';
  export let childIconSize: string = '20px';
  export let user: Record<string, any> = {};


  let anchorEl: HTMLElement | null = null;
  export let open: boolean = false; // Just for display purposes (export)

  const handleClick = (event: { currentTarget: HTMLElement }) => {
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

<div id="user-menu">
  <button aria-label="none" on:click={handleClick}>
      <i style="--iconBg: {iconBg}; font-size: {parentIconSize}" class="fa-solid fa-user"></i>
  </button>
  
  {#if open}
    <div class="menu-backdrop" role="none" on:click|self={handleClose} transition:fade={{ duration: 150 }}>
      <div class="menu-paper {absolute==='right'? 'right-0':'left-0'}"
        style={absolute === 'right' ? 'right:0;' : 'left:0;'}
        transition:fly={{ y: -10, duration: 200, easing: quintOut }}>
        <div style="padding:10px; border-bottom:1px solid #eee;">
          {#if Object.keys(user).length > 0}
            {#each Object.entries(user) as [key, value], i}
              <p style="color: {i === 0 ? 'inherit' : '#555555'}">{value}</p>
            {/each}
          {:else}
            <p>No user info</p>
          {/if}
        </div>        
        <ul class="menu-list">
            <li role="none" class="menu-item" on:click={() => {handleClose(); onProfile()}}>
              <i style="--iconBg: {iconBg}; font-size: {childIconSize}" class="fa-solid fa-user"></i>
              <span class="ml-4">Profile</span>
            </li>
            <li role="none" class="menu-item" on:click={() => onLogout()}>
              <i style="--iconBg: {iconBg}; font-size: {childIconSize}" class="fa-solid fa-right-from-bracket"></i>
              <span class="ml-4">Logout</span>
            </li>
        </ul>
      </div>
    </div>
  {/if}
</div>