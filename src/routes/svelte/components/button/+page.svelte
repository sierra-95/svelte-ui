<script lang="ts">
	import {Button} from '$lib/index.js'
	import {RenderCode, ButtonTable} from '../../../../components/index.js';
</script>

<main class='flex flex-col gap-4'>
	<h1 class="font-bold text-2xl">Button Component</h1>
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
		<Button variant='contained' title="Primary contained">Button</Button>
		<Button variant='contained' color='secondary' title="Secondary contained">Button</Button>
		<Button variant='contained' color='error' title="Error contained">Button</Button>
	</div>
	<div class="flex gap-4">
		<Button variant='outlined' title="Primary outlined">Button</Button>
		<Button variant='outlined' color='secondary' title="Secondary outlined">Button</Button>
		<Button variant='outlined' color='error' title="Error outlined">Button</Button>
	</div>
	<div class="flex gap-4">
		<Button variant='contained' isLoading title="Loading"></Button>
		<Button variant='contained' disabled title="Disabled">Button</Button>
		<Button pill variant='outlined' title="Pill"><i class="fa fa-chevron-right"></i></Button>
	</div>
	<div class='flex flex-col gap-2'>
		<h2 class='mt-4 text-xl'>This is a custom button. You can customize using Tailwind css using the <strong>style</strong> prop.</h2>
		<Button title="Custom Button" style="w-[200px] h-[100px] bg-purple-500">Button</Button>
		<Button title="Custom Button" style="w-[100px] bg-black" isLoading spinner={50} thickness={10}>Button</Button>
		<RenderCode
			lang="svelte"
			code={`
			<Button isLoading spinner={50} thickness={10} style="w-[100px] bg-black">Button</Button>
		`}/>
	</div>
	<div class='overflow-x-auto'><ButtonTable/></div>
</main>