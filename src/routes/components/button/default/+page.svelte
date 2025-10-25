<script lang="ts">
	import {Button} from '$lib/index.js'
	import {RenderCode, ButtonDefaultTable} from '../../../../components/index.js';
	const contained_buttons = [
		{ color: 'primary', title: 'Primary contained' },
		{ color: 'warning', title: 'Warning contained' },
		{ color: 'error', title: 'Error contained' }
	] as const;
	const outlined_buttons = [
		{ color: 'primary', title: 'Primary outlined' },
		{ color: 'warning', title: 'Warning outlined' },
		{ color: 'error', title: 'Error outlined' }
	] as const;
</script>

<title>Default Buttons</title>
<h1 class="font-bold text-2xl">Default Buttons</h1>
<RenderCode
	lang="svelte"
	code={`
	<\script>
		import { Button } from '@sierra-95/svelte-ui';
	<\/script>

	<Button onClick={() => alert('Button clicked!')}>
		Click Me
	</Button>
`}/>
<div class="flex gap-4">
{#each contained_buttons as { color, title }}
	<Button variant="contained" color={color} title={title}>Button</Button>
{/each}
</div>
<div class="flex gap-4">
{#each outlined_buttons as { color, title }}
	<Button variant="outlined" color={color} title={title}>Button</Button>
{/each}
</div>
<div class="flex gap-4">
	<Button variant="contained"  isLoading title="Loading">Button</Button>
	<Button variant='contained' disabled title="Disabled">Button</Button>
	<Button pill variant='outlined' title="Pill"><i class="fa fa-chevron-right"></i></Button>
</div>
<div class='flex flex-col gap-2'>
	<h2 class='mt-4 text-xl'>You may also customize it using Tailwind via the <strong>style</strong> prop.</h2>
	<RenderCode
		lang="svelte"
		code={`
		<Button isLoading spinner={40} thickness={5} style="w-[100px]">Button</Button>
	`}/>
</div>
<div class='overflow-x-auto'><ButtonDefaultTable/></div>
