<script>
  import { modalStore, Button} from '$lib/index.js';
  import { onMount } from 'svelte';

  let modal;

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
  <div class="fixed inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.3)] p-2">
    <div class="bg-white p-6 rounded-sm w-full max-w-lg shadow-lg">
      <h2 class="text-xl font-semibold mb-1 text-left">{modalData.title}</h2>
      <div class="mb-6 text-left">{modalData.content}</div>
      <div class="flex justify-start gap-10">
        <Button onClick={() => { modalData.onConfirm?.(); close();}}>
        {modalData.confirmText}
        </Button>
        {#if modalData.cancelText}
            <button on:click={() => {modalData.onCancel?.();close();}} class='cursor-pointer'
            >{modalData.cancelText}
            </button>
        {/if}
      </div>
    </div>
  </div>
{/if}
