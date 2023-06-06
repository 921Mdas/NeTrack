<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {AppBar, AppShell} from '@skeletonlabs/skeleton'
	import Avatars from '../components/Avatars.svelte';
</script>

<AppShell>
  <svelte:fragment slot='header'>
    <AppBar class='font-bold h5 flex flex-row justify-between'>
      <h1 class="float-left">CS TORONTO</h1>
	  <div>

		  <Avatars />
	  </div>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>


