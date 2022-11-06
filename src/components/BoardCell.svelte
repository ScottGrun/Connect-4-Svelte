<script>
	export let value = 0;
	console.log(value);
</script>

<button
	class="chip"
	class:player-1={value === 1}
	class:placed={value !== 0}
	class:player-2={value === 2}
	on:click
/>

<style>
	.player-1 {
		background-color: var(--player-1) !important;
	}

	.player-2 {
		background-color: var(--player-2) !important;
	}

	.chip {
		will-change: transform;
		cursor: pointer;
		background-color: transparent;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 3px solid var(--black);
		box-shadow: 0px 0px 0px var(--black), inset 0px 3px 0px 1px rgba(0, 0, 0, 0.5);
	}

	/* Animate chip falling into place */
	.placed {
		animation: slidein 200ms ease-in-out;
	}

	@keyframes slidein {
		from {
			transform: translateY(-700px);
		}

		to {
			transform: translateY(0%);
		}
	}
</style>
