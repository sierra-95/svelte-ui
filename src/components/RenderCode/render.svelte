<script>
  import { createHighlighter } from 'shiki';
  import { onMount } from 'svelte';
  import { tick } from 'svelte';
  import './shiki.css';

  export let code = '';
  export let lang = 'javascript';
  export let theme = 'tokyo-night';

  let html = 'Loading...';
  let copied = false;

  onMount(async () => {
    const highlighter = await createHighlighter({
      themes: [theme],
      langs: [lang]
    });

    html = highlighter.codeToHtml(code, {
      lang,
      theme
    });
  });

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    copied = true;
    await tick();
    setTimeout(() => copied = false, 2000);
  }
</script>
<main class="max-w-xl">
  <div class="bg-[#f8fafc] w-full flex justify-between items-center p-2 rounded-t-xl">
    <span class="text-[#475569]">{lang}</span>
    <button on:click={copyCode} class="cursor-pointer">
      {copied ? 'Copied' : 'Copy'}
    </button>
  </div>
  {@html html}
</main>
