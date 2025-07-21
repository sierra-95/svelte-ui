<script lang="ts">
  import {RenderCode} from '../../components/index.js'; 

</script>

<style>
  p,h2{
    margin: 1.25rem 0;
  }
</style>
<main>
  <title>Getting Started</title>
  <p>
    <strong class="text-[#334155]">@sierra-95/svelte-ui</strong> is a component library built for the Svelte ecosystem.  
    Designed as a solid foundation for developers, it offers expressive, accessible, and flexible components to accelerate your Svelte projects.
  </p>
  <p>
    To get started, install the package via npm:
  </p>
  <RenderCode
    lang="bash"
    code={`
    npm i @sierra-95/svelte-ui    
  `}/>
  <h2 class="text-[#334155]">Usage Example</h2>
  <p>After installation, import any component you want to use. For example, to add a button:</p>
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
</main>

