<script>
  import { sections } from "./sections.js";
  const {label} = $props();
  
  const menu = sections
    .find(s => s.label === 'Components')
    ?.items.find(item => item.label === `${label}`);
</script>

{#if menu?.subitems}
  <ol class="flex gap-4 flex-col p-4 list-disc">
    {#each menu.subitems as sub}
        <li><a
          href={sub.path}
          class="px-4 py-2 rounded-xl text-sm underline"
        >
          {sub.label}
        </a></li>
    {/each}
  </ol>
{/if}
