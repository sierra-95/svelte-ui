<script lang="ts">
  import { onMount } from 'svelte';
  import './button.css';

  const {
    text = "Hover me",
    link = "#",
    bg = "#D8C4A1",
    color = "#4B5563"
  } = $props();

  let scrolling = $state(false);

  let container: HTMLDivElement;
  let marquee: HTMLAnchorElement;

  let containerWidth = 0;
  let textWidth = 0;

  onMount(() => {
    if (container && marquee) {
      // width of one sentence
      textWidth = marquee.offsetWidth / 3; // because we repeat text 3x
      containerWidth = textWidth - 10;
      container.style.width = containerWidth + "px";
      const containerHeight = container.offsetHeight;
      container.style.borderRadius = containerHeight / 2 + "px";
    }
  });
</script>

<div
  role='none'
  bind:this={container}
  class="marquee-container"
  onmouseenter={() => scrolling = true}
  onmouseleave={() => scrolling = false}
  style="--border-color: {bg}; --text-color: {color}"
>
  <a href={link} class="marquee {scrolling ? 'scrolling' : ''}" bind:this={marquee}>
    <span>{text}</span>
    <span>{text}</span>
    <span>{text}</span>
  </a>
</div>
