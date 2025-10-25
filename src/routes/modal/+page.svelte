<script>
    import {modalStore,Button} from '$lib/index.js'
    import {RenderCode} from '../../components/index.js';

    function triggerModal() {
        modalStore.set({
            open: true,
            title: 'Confirm Action',
            content: 'Modal has been triggered',
            confirmText: 'Confirm',
            cancelText: 'No',
            onConfirm: () => alert('Modal confirmed!'),
            onCancel: () => alert('Modal cancelled!'),
        });
    }
</script>

<title>Modal</title>
<h1 class="font-bold text-2xl">Alert Modal</h1>
<Button onclick={triggerModal}>Click here</Button>
<h2>Place this anywhere in your app</h2>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { Modal } from '@sierra-95/svelte-ui';
	<\/script>

	<Modal />

`}/>
<h2>Trigger the Modal. Note that <strong>onCancel()</strong> is optional</h2>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { modalStore, Button } from '@sierra-95/svelte-ui';

        function triggerModal() {
            modalStore.set({
                open: true,
                title: 'Confirm Action',
                content: 'Modal has been triggered',
                confirmText: 'Confirm',
                cancelText: 'No',
                onConfirm: () => alert('Modal confirmed!'),
                onCancel: () => alert('Modal cancelled!'),
            });
        }
	<\/script>

	<Button onclick={triggerModal}>Click here</Button>

`}/>