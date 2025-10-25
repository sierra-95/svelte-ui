<script lang="ts">
  import {RenderCode} from '../components/index.js'; 
</script>

<style>
</style>
<main>
  <title>Getting Started</title>
  <p>
    <strong class="text-[#334155]">@sierra-95/svelte-ui</strong> is a component library built for the Svelte ecosystem.  
    It offers expressive, accessible, and flexible components to accelerate your Svelte projects.
  </p>
  <p>
    To get started, install the package via npm:
  </p>
  <RenderCode
    lang="bash"
    code={`
    npm i @sierra-95/svelte-ui    
  `}/>
  
  <p>Add this in your <strong>app.html</strong> or <strong>svelte:head</strong></p>
  <RenderCode
      lang="html"
      code={`
      <\script
        src="https://kit.fontawesome.com/b63be7ac2d.js"
        crossorigin="anonymous"
      ></script>
  `}/>
  <h2>Usage Example</h2>
  <p>After installation, import any component you want to use. For example, to add a button:</p>
  <RenderCode
    lang="svelte"
    code={`
    <\script>
      import { Button } from '@sierra-95/svelte-ui';
    <\/script>

    <Button onclick={() => alert('Button clicked!')}>
      Click Me
    </Button>
  `}/>
</main>

