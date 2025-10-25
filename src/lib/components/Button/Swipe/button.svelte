<a 
    class="btn-0" 
    href={link}
    style="--btn-color: {bg}; --text-color: {color}"
>{text}</a>
<style>
    @import url(./button.css);
</style>
<script>
    const {
        link = "#",
        text = "Button",
        bg = "#D8C4A1",
        color = "#4B5563"
    } = $props();
</script>