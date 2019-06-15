<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(slide, index) in swiperSlides" :key="index">
				<a :href="slide.imghref"><img :src="slide.swiperimg"></a>
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>

	</div>
</template>

<script>
	import Swiper from 'swiper';
	export default {
		name: "Slider",
		data(){
			return{
				swiperSlides: [
					{
						swiperimg:'https://image.58cm.com/201905/2019052714-3439-93567.jpg',
						imghref:'http://m.58cm.com/activity/old_customers/old_customers.aspx'
					},
					{
						swiperimg:'https://image.58cm.com/201906/2019061410-3322-75832.jpg',
						imghref:'https://m.58cm.com/activity/comeon/comeon.aspx'
					},
				],
				
			}
		},
		mounted() {
			new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				autoplay:true,//自动切换

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				}
				
			})
		}
	}
</script>

<style scoped>
	.swiper-slide img{
		display: block;
		width: 100%;
	}
</style>
