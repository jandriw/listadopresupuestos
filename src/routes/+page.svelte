<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="flex justify-center">
	{#if data.session}
		<h1 class="text-white font-bold text-3xl">Welcome! {data.session.user.email}</h1>
	{:else}
		<h1 class="text-white font-bold text-3xl">Please register </h1>
	{/if}
</div>

<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<Auth
			supabaseClient={data.supabase}
			view="magic_link"
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
		/>
	</div>
</div>

<div class="flex justify-center">
	{#if data.session}
		<form action="/logout" method="POST">
			<button type="submit">Logout</button>
		</form>
	{:else}
		<a href="/login" class="mx-3 my-4">Login</a>
		<a href="/register" class="mx-3 my-4">Register</a>
	{/if}
</div>

