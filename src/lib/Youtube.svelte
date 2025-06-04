<script lang="ts">
	let { uid, title }: { uid: string; title: string } = $props();
</script>
<iframe
	src="https://www.youtube.com/embed/{uid}"
	{title}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
></iframe>