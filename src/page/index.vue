<template>
	<div class="index">
		<swiper></swiper>
		<entrance></entrance>
		<preferen></preferen>
		<happyThrow></happyThrow>
		<product></product>
	</div>
	
</template>
<script>
	import swiper from '../components/swiper';
	import entrance from '../components/entrance';
	import preferen from '../components/preferen';
	import happyThrow from '../components/happyThrow';
	import product from '../components/product';

	export default {
		name: "Slider",
		components: {
			swiper,
			entrance,
			preferen,
			happyThrow,
			product
		},

	}
</script>

<style scoped>
.index{
	background: #ebebeb;
	padding-bottom: 61px;
}
</style>
