<script>
    import {ButtonFlip, ButtonMarquee, ButtonSwipe} from '$lib/index.js'
    import {RenderCode, ButtonCustomTable} from '../../../../components/index.js';
</script>

<style>
    .wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<title>Custom Buttons</title>
<h1 class="font-bold text-2xl">Custom Buttons</h1>
<h2>These buttons are not built to be as flexible compared to default buttons.</h2>
<ol class="list-decimal pl-5">
    <li>They don’t support <code>on:click()</code> or aliases, since they are built with <code>&lt;a&gt;</code> tags.</li>
    <li>They are designed to be used as-is, with minimal customization options.</li>
    <li>All have fixed dimensions (w × h), with <span class="text-blue-500">Flip</span> as the exception. Flip automatically adjusts its width based on text length.</li>
</ol>
<RenderCode
    lang="svelte"
    code={`
    <\script>
        import { ButtonMarquee } from '@sierra-95/svelte-ui';
    <\/script>

    <ButtonMarquee text='Sign In' link='/auth' bg='red' color = 'blue'  />
`}/>
<div class="wrap">
    <h2>1. Swipe Button</h2>
    <ButtonSwipe />
</div>
<div class="wrap">
    <h2>2. Marquee Button</h2>
    <ButtonMarquee/>
</div>
<div class="wrap">
    <h2>3. Flip Button</h2>
    <ButtonFlip />
</div>
<ButtonCustomTable/>
