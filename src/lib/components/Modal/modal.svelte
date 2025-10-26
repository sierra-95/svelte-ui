<script>
  import './modal.css';
  import { modalStore, Button} from '$lib/index.js';
  import { onMount } from 'svelte';
  $: modalData = $modalStore;

  function close() {
    modalStore.update(m => ({ ...m, open: false }));
  }
  /**
	 * @param {{ key: string; }} e
	 */
  function handleKeydown(e) {
    if (e.key === 'Escape') close();
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>
{#if modalData.open}
  <div id="modal" role="none" on:click={() => close()}>
    <div class="modal-container">
      <h2>{modalData.title}</h2>
      <h3>{modalData.content}</h3>
      <div>
        <Button onclick={() => { modalData.onConfirm?.(); close();}}>
        {modalData.confirmText}
        </Button>
        {#if modalData.cancelText}
            <button on:click={() => {modalData.onCancel?.();close();}}
            >{modalData.cancelText}
            </button>
        {/if}
      </div>
    </div>
  </div>
{/if}
