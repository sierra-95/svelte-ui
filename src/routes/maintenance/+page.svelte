<script lang="ts">
    import { goto } from '$app/navigation';
	import {Button} from '$lib/index.js'
	import {RenderCode} from '../../components/index.js';
    function navigate(){
        goto('/maintenance/example');
    }
</script>

<title>maintenance</title>
<h1>Site under Maintenance</h1>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { SiteUnderMaintenance} from '@sierra-95/svelte-ui';
	<\/script>

	<SiteUnderMaintenance email="me@michaelmachohi.com"/>

`}/>
<Button onclick={navigate}>Go to Maintenance Page</Button>