<script lang="ts">
	let class_name = '';
	export { class_name as class };

	export let player: string = 'Player 1';
	const timeLeft = 15;
</script>

<div class="time-card {class_name}">
	<h3 class="heading-xs">{player}'s Turn</h3>
	<span class="heading-l">{timeLeft}s</span>
</div>

<style>
	.time-card {
		width: 191px;
		height: 162px;
		padding: 41px 31px 16px 31px;
		text-align: center;
		text-transform: uppercase;
		color: white;
		background-image: url('../assets/time-card-bg.svg');
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>
