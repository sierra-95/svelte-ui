<script lang="ts">

    let copied = false;
    const installCmd = 'npm i @sierra-95/svelte-ui';

    function copyToClipboard() {
    navigator.clipboard.writeText(installCmd).then(() => {
        copied = true;
        setTimeout(() => (copied = false), 4000);
    });
    }
    const code = `
        &lt;script&gt;
            import { Button } from '@sierra-95/svelte-ui';
        &lt;/script&gt;

        &lt;Button&gt;Click me!&lt;/Button&gt;
    `;
</script>

<style>
  main {
    max-width: 720px;
    margin: 2rem auto;
    font-family: 'Inter', system-ui, sans-serif;
    color: #222;
    line-height: 1.6;
    padding: 0 1rem;
  }

  h1 {
    font-size: 2.25rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: #1e293b;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #334155;
  }

  p {
    margin-bottom: 1.25rem;
    font-size: 1.1rem;
  }
</style>

<main>
  <h1>Get Started with <code>@sierra-95/svelte-ui</code></h1>

  <p>Welcome to the official Svelte UI component library! To start using it in your project, simply install the package via npm:</p>

  <pre class="flex items-center justify-around p-4 bg-[#1e1e1e] text-[#d4d4d4] rounded" aria-label="Installation command">
    <span>{installCmd}</span>
    <button on:click={copyToClipboard} class="ml-3 text-[#4caf50] transition-colors duration-200 hover:text-[#81c784]" 
    >{#if copied}Copied!{:else}Copy{/if}</button>
  </pre>

  <h2>Usage Example</h2>

  <p>After installation, import any component you want to use. For example, to add a button:</p>

  <pre class="bg-[#1e1e1e] text-[#d4d4d4] text-left rounded" aria-label="Usage example" style="white-space: pre-wrap;">
    <code>{@html code}
    </code>
  </pre>

  <p>Enjoy building with <code>@sierra-95/svelte-ui</code>!</p>
</main>
