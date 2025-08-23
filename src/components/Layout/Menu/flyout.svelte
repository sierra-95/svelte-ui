<script>
    /**
	 * @type {{ label?: string, path?: string, icon?: string, subitems?: any[] } | null}
	 */
    export let hovered;
</script>
<div 
    role='list'
    class='absolute left-0 w-50 h-full bg-white border-r-1 border-gray-300
    p-4 flex flex-col underline transition-transform duration-500 transform'
    class:-translate-x-50={!hovered}
    on:mouseleave={() => hovered = null}
>
    {#if hovered?.subitems?.length}
        {#each hovered.subitems as sub}
            <a href={sub.path}>{sub.label}</a>
        {/each}
    {/if}
</div>