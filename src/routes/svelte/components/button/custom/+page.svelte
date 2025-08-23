<script>
    import {ButtonFlip, ButtonMarquee, ButtonSwipe} from '$lib/index.js'
    import {RenderCode} from '../../../../../components/index.js';
</script>

<style>
    .wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
<main class='flex flex-col gap-4'>
    <h1 class="font-bold text-2xl">Custom Buttons</h1>
    <h2>These buttons are not built to be as flexible compared to default buttons.
        They are built to be used as-is, with minimal customization options.
    </h2>
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
</main>