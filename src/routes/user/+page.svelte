<script>
    import {UserMenu} from '$lib/index.js'
	import {RenderCode, UserMenuTable} from '../../components/index.js';
    let open = $state(true)

    let user = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
</script>

<title>User Menu</title>

<h1>User Menu</h1>
<UserMenu bind:open user={user} />
{#if open}
    <div class="h-[250px]"></div>
{/if}
<RenderCode
	lang="svelte"
	code={`
	<\script>
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
        }
	<\/script>
    <div class="w-full flex items-end justify-end">
        <!--By default, UserMenu dropdown is absolute left of the parent
        If you need it on the right, set absolute='right'
        Like the example below-->
        <!--This is usefull if you need usermenu on the right,
        but dropdown on its left-->
	    <UserMenu
            user={user}
            iconBg='#10b981'
            parentIconSize='30px'
            childIconSize='20px'
            absolute='right' 
            onProfile={handleProfile} 
            onLogout={handleLogout}
        />
    </div>
    
`}/>
<UserMenuTable />
