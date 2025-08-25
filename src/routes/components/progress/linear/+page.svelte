<script lang="ts">
	import {LinearProgress} from '$lib/index.js'
	import {RenderCode} from '../../../../components/index.js';
</script>


<title>Linear Progress</title>
<h1 class="font-bold text-2xl">Linear Progress</h1>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { LinearProgress } from '@sierra-95/svelte-ui';
	<\/script>

	<LinearProgress />
`}/>

<LinearProgress/>
