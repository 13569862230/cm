<template>
	<div class="productbox">
		
		<ul class="productlist">
			<li>
				<a class="protit" href="/ProjectSet/2">
					<b class="name">快乐投1号</b>
				</a>
				<div class="profit">
					<div class="rate">
						<b>8</b>
						<span>.50%<br>
							<em>目标收益</em></span>
					</div>
					<div class="term">
						<p>期限<span class="org">3</span>个月</p>
						<p><span class="org">1000</span>元起投</p>
					</div>
				</div>
				<a href="/lc/InvestConfig.aspx?pcode=2&amp;pcont=1&amp;set=1" class="cmd cmd_org cmd_full">快乐投资</a>
			</li>

		</ul>

	</div>


</template>

<script>
	import Swiper from 'swiper';
	export default {
		name: "Slider",
		data() {
			return {
				swiperSlides: [{
						swiperimg: 'https://image.58cm.com/201905/2019052714-3439-93567.jpg',
						imghref: 'http://m.58cm.com/activity/old_customers/old_customers.aspx'
					},
					{
						swiperimg: 'https://image.58cm.com/201906/2019061410-3322-75832.jpg',
						imghref: 'https://m.58cm.com/activity/comeon/comeon.aspx'
					},
				],

			}
		},
		mounted() {
			new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				autoplay: true, //自动切换

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				}

			})
		}
	}
</script>

<style scoped>
	.tit_bt {
		padding: 0 10px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tit_bt b {
		font-size: 15px;
		color: gray;
		padding-left: 10px;
		border-left: 3px solid #ff7500;
	}

	.tit_bt span {
		font-size: 14px;
		color: gray;
	}
	
	.productlist{
		margin-bottom: 10px;
	}

	.productlist li {
		padding-bottom: 10px;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 10px;
	}

	.productlist li:last-of-type {
		margin-bottom: 0;
	}

	.protit {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		margin-bottom: 10px;
		background: #fff;
		border-bottom: 1px solid #e6e6e6;
		overflow: hidden;
	}

	.protit .name {
		font-size: 16px;
		color: #444444;
		font-weight: normal;
		display: flex;
		align-items: center;
	}

	.protit .name img {
		display: block;
		width: 35px;
		margin-left: 10px;
	}

	.protit span {
		font-size: 14px;
		color: #999;
		text-align: right;
	}

	.protit .group {
		background-size: 20px auto;
		padding-left: 25px;
	}

	.profit {
		padding: 10px 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #fff;
	}

	.profit .rate {
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 1;
		font-family: Arial;
	}

	.profit .rate b {
		color: #ff532c;
		font-size: 60px;
		font-weight: normal;
	}

	.profit .rate span {
		line-height: 30px;
		color: #ff532c;
		font-size: 20px;
		margin-left: 2px;
	}

	.profit .rate span em {
		display: block;
		color: gray;
		font-size: 14px;
		font-style: normal;
	}

	.profit .term p {
		margin: auto;
	}

	.productlist .rise {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>
