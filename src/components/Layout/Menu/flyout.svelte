<script>
    import {isMobile} from '$lib/index.js';
    let { 
        hovered,
    } = $props();
</script>
{#if !$isMobile}
    <div 
        role='list'
        class='z-50 absolute left-0 w-50 h-full bg-white border-r-1 border-gray-300
        p-4 flex flex-col gap-2 underline transition-transform duration-500 transform'
        class:-translate-x-50={!hovered}
        onmouseleave={() => hovered = null}
    >
        {#if hovered?.subitems?.length}
            {#each hovered.subitems as sub}
                <a href={sub.path}>{sub.label}</a>
            {/each}
        {/if}
    </div>
{/if}