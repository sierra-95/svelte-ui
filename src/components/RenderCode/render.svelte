<script>
  import { createHighlighter } from 'shiki';
  import { onMount } from 'svelte';
  import { tick } from 'svelte';
  import './shiki.css';

  const {
    code = '',
    lang = 'javascript',
    theme = 'tokyo-night'
  } = $props();

  let html = $state('Loading...');
  let copied = $state(false);

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
<main>
  <div class="bg-[#f8fafc] w-full flex justify-between items-center p-2 rounded-t-xl">
    <span class="text-[#475569]">{lang}</span>
    <button onclick={copyCode} class="cursor-pointer">
      {copied ? 'Copied' : 'Copy'}
    </button>
  </div>
  {@html html}
</main>
