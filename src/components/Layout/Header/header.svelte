<script>
  export let toggleMenu = () => {};
</script>
<style>
  @import './header.css';
</style>
<header class="w-full flex justify-between h-[100px] border-b-1 border-gray-300">
  <div class="flex items-center">
    <div role="none" class="menu-button" on:click={toggleMenu}>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <a href="/docs"><img src="/logo-black.png" alt="Logo" class="ml-4 w-13"/></a>
  </div>
  <!--Profile maybe-->
</header>