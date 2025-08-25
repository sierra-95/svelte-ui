<script>
    import {UserMenu} from '$lib/index.js'
	import {RenderCode} from '../../../components/index.js';
    let open = $state(true)

    let user = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
</script>

<title>User Menu</title>

<h1 class="font-bold text-2xl">User Menu</h1>
<h2>
  This menu is built to be used in portals as a developer's quick tool.
  For further customization, refer to the
  <a class="text-blue-500"
    target="_blank"
    href="https://github.com/sierra-95/svelte-ui/blob/main/src/lib/components/UserMenu/profile.svelte">GitHub code</a>.
</h2>
<UserMenu bind:open />
{#if open}
    <div class="h-[250px]"></div>
{/if}
<RenderCode
	lang="svelte"
	code={`
	<\script>
        import { goto } from '$app/navigation';
		import { UserMenu } from '@sierra-95/svelte-ui';

        let user = {
            name: 'John Doe',
            email: 'john.doe@example.com'
        };

        function handleLogout(){
          // Handle logout logic here
        }
        function handleProfile(){
          // Handle profile logic here
          goto('/settings/profile')
        }
	<\/script>
    <div class="div w-full flex items-end justify-end">
        <!--By default, UserMenu dropdown is absolute left of the parent
        If you need it on the right, set absolute='right'
        Like the example below-->
        <!--This is usefull if you need usermenu on the right,
        but dropdown on its left-->
	    <UserMenu
            user={user}
            iconBg='#10b981'
            absolute='right' 
            onProfile={handleProfile} 
            onLogout={handleLogout}
        />
    </div>
`}/>
