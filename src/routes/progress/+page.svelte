<script lang="ts">
	import {CircularProgress, LinearProgress} from '$lib/index.js'
	import {RenderCode} from '../../components/index.js';
</script>

<title>Progress</title>
<h1 class="font-bold text-2xl">Circular Progress</h1>
<CircularProgress/>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { CircularProgress } from '@sierra-95/svelte-ui';
	<\/script>

	<CircularProgress />
`}/>
<h1 class="font-bold text-2xl">Linear Progress</h1>
<LinearProgress/>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { LinearProgress } from '@sierra-95/svelte-ui';
	<\/script>

	<LinearProgress />
`}/>
