<script lang="ts">
	import {CircularProgress} from '$lib/index.js'
	import {RenderCode} from '../../../../components/index.js';
</script>

<title>Circular Progress</title>
<h1 class="font-bold text-2xl">Circular Progress</h1>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { CircularProgress } from '@sierra-95/svelte-ui';
	<\/script>

	<CircularProgress />
`}/>
<CircularProgress/>
