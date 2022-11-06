<script>
	import logoSrc from '../assets/logo.svg';
</script>

<nav>
	<button class="heading-xs">Menu</button>
	<img src={logoSrc} alt="" />
	<button class="heading-xs">Restart</button>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button {
		width: 108px;
		height: 39px;
		border-radius: 20px;
		cursor: pointer;
		color: var(--white);
		background-color: var(--primary);
		transition: background-color 200ms ease;
	}

	img {
		width: 40px;
	}

	button:hover {
		background-color: var(--player-1);
	}
</style>
