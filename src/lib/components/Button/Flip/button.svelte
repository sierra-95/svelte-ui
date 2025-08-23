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
    export let link = "#";
    export let back = "back";
    export let front = "front";
    export let bgFront = "#adadaf";
    export let bgBack = "#f4e5d4";
    export let color = "#323237";
</script>