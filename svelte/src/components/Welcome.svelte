<script>
	import { isLoading } from '../store';
</script>

<body>
	<div class="flex fixed justify-center items-center h-screen w-full">
		<div class="w-full max-w-lg p-3">
			<div class="text-center">
				<h1 class="text-4xl font-bold">CSTO Weekly Net</h1>
				<button
					type="button"
					class="btn rounded-sm bg-blue-700 w-1/4 mt-4"
					on:click={() => {
						isLoading.update((prev) => {
							prev = false;
						});
					}}
				>
					Start
				</button>
			</div>
		</div>
	</div>
</body>
