<script>
    import { onMount, onDestroy } from 'svelte';
    import {setDispatchMessage,clearDispatchMessage} from '$lib/index.js'
    import {RenderCode} from '../../components/index.js';
    onMount(() => {
        setDispatchMessage('success', 'Dispatch Triggered', 6000, true);
    });
    onDestroy(() => {
        clearDispatchMessage();
    });
</script>

<title>Dispatch</title>
<h1>Dispatch</h1>
<h3>Place this anywhere in your app</h3>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { Dispatch } from '@sierra-95/svelte-ui';
	<\/script>

	<Dispatch />

`}/>
<h2>Timed message dispatch</h2>
<h3>Default timeout is <strong>6 seconds</strong></h3>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import {setDispatchMessage, Button} from '$lib/index.js'

        function triggerDispatch(){
            setDispatchMessage('success', 'Dispatch Triggered');
        }
	<\/script>

	<Button onclick={triggerDispatch}>Click here</Button>

`}/>

<h2>Persistent message dispatch</h2>
<RenderCode
	lang="svelte"
	code={`
	<\script>
        import { onMount, onDestroy } from 'svelte';
		import {setDispatchMessage,clearDispatchMessage} from '$lib/index.js'

        onMount(() => {
            setDispatchMessage('success', 'Dispatch Triggered', 6000, true);
        });
        onDestroy(() => {
            clearDispatchMessage();
        });
	<\/script>

`}/>