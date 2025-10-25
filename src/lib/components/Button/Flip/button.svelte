<a href={link} 
    aria-label="button" 
    class="btn-flip" 
    data-back={back} 
    data-front={front}
    style="--bg-front: {bgFront}; --bg-back: {bgBack}; --text-color: {color}"
></a>
<style>
    @import url(./button.css);
</style>
<script>
    const {
        link = "#",
        back = "back",
        front = "front",
        bgFront = "#adadaf",
        bgBack = "#f4e5d4",
        color = "#323237",
    } = $props();
</script>