<script lang="ts">
	export let variant: 'player-1' | 'player-2' | 'white';
	export let fitContent: boolean = false;
	export let rounded: boolean = false;
	export let asLink: boolean = false;
	export let href: string | null = null;
	let class_name = '';
	export { class_name as class };
</script>

{#if asLink}
	<a {href} class="pushable {class_name}" class:fitContent class:rounded>
		<span class="shadow" class:rounded />
		<span class="edge" class:rounded />
		<span class="front heading-m {variant}" class:rounded>
			<slot />
		</span>
	</a>
{:else}
	<button class="pushable {class_name}" class:fitContent class:rounded>
		<span class="shadow" class:rounded />
		<span class="edge" class:rounded />
		<span class="front heading-m {class_name} {variant}" class:rounded>
			<slot />
		</span>
	</button>
{/if}

<style>
	/* Backgorund Color Variants */
	.player-1 {
		background-color: var(--player-1);
	}

	.player-2 {
		background-color: var(--player-2);
	}

	.white {
		background-color: var(--white);
	}

	.fitContent {
		width: fit-content;
	}

	.rounded {
		border-radius: 99% !important;
	}

	.pushable {
		position: relative;
		border: none;
		background: transparent;
		padding: 0;
		cursor: pointer;
		outline-offset: 4px;
		transition: filter 250ms;
		width: 100%;
	}
	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 20px;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}
	.edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 20px;
		background: linear-gradient(
			to left,
			hsl(340deg 100% 0%) 0%,
			hsl(340deg 100% 0%) 8%,
			hsl(340deg 100% 0%) 92%,
			hsl(340deg 100% 0%) 100%
		);
	}
	.front {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 16px;
		height: 72px;
		border-radius: 20px;
		font-size: 1.25rem;
		color: var(--black);
		will-change: transform;
		transform: translateY(-9px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
		border: solid 4px var(--black);
	}

	.pushable:active .front {
		transform: translateY(-2px);
		transition: transform 170ms;
	}
	.pushable:hover .shadow {
		transform: translateY(4px);
		transition: transform 200ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .shadow {
		transform: translateY(1px);
		transition: transform 134ms;
	}
	.pushable:focus:not(:focus-visible) {
		outline: none;
	}
</style>
