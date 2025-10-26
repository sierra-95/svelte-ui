<script>
  const {email} = $props();
</script>
<style>        
  #maintenance {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem;
    z-index: 10;
    backdrop-filter: blur(2px);
    color: white;
  }
  #maintenance a{
    text-decoration: underline;
  }
</style>
  
<div id="maintenance">
      <h1>Under Construction</h1>
      <p>This site is still being built and will be available soon. Thanks for your patience.</p>
      <p>
      Need immediate assistance?<br>
      Contact <a href="mailto:{email}">{email}</a>
    </p>
</div>