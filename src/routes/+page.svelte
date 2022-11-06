<script>
	import Button from '../components/Button.svelte';
	import logoSrc from '../assets/logo.svg';
	import playerVsPLayerLogo from '../assets/player-vs-player.svg';
</script>

<div class="container">
	<img src={logoSrc} alt="" class="logo" />
	<div class="btns-container">
		<Button variant="player-2">
			PLAY VS PLAYER
			<img src={playerVsPLayerLogo} alt="" class="pvp-logo" />
		</Button>
		<Button asLink={true} href="/game-rules" variant="white">GAME RULES</Button>
	</div>
</div>

<style :global>
	.container {
		width: 100%;
	}

	.logo {
		display: block;
		width: 52px;
		margin: 0 auto;
		margin-bottom: 79px;
	}

	.pvp-logo {
		width: 82px;
		margin-left: auto;
	}

	.btns-container {
		display: flex;
		flex-flow: column;
		gap: 24px;
	}
</style>
