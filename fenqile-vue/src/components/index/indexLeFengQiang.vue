<template>
	<div class="fengqiang">
		<div class="t">
			<div class="l">乐疯抢</div>
			<div class="r">
				<span>距离本场结束</span>
				<p class="daojishi">
					<em class="hour">20</em>:<em class="minute">30</em>:<em class="seconds">40</em>
				</p>
			</div>
		</div>
		<div class="m">
			<!--小轮播2-->
			<div class="swiper-container4">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="../../assets/img/zds/hRoGAFlTIpOAApJAAAUwKKeStaY696_336x336.png" alt="" />
						<div>
							<p><b>￥299</b><em>￥472</em></p>
							<span>月供￥12.11起</span>
						</div>
					</div>
					<div class="swiper-slide">
						<img src="../../assets/img/zds/hBoGAFm55uKAAqxDAAQJ-8W-xEY772_336x336.jpg" alt="" />
						<div>
							<p><b>￥299</b><em>￥472</em></p>
							<span>月供￥12.11起</span>
						</div>
					</div>
					<div class="swiper-slide">
						<img src="../../assets/img/zds/hRoGAFkPykaALpbyAACdZp0zwFU973_336x336.jpg" alt="" />
						<div>
							<p><b>￥299</b><em>￥472</em></p>
							<span>月供￥12.11起</span>
						</div>
					</div>
					<div class="swiper-slide">
						<img src="../../assets/img/zds/hRoGAFlTIpOAApJAAAUwKKeStaY696_336x336.png" alt="" />
						<div>
							<p><b>￥299</b><em>￥472</em></p>
							<span>月供￥12.11起</span>
						</div>
					</div>
					<div class="swiper-slide">
						<img src="../../assets/img/zds/hBoGAFm55uKAAqxDAAQJ-8W-xEY772_336x336.jpg" alt="" />
						<div>
							<p><b>￥299</b><em>￥472</em></p>
							<span>月供￥12.11起</span>
						</div>
					</div>
					<div class="swiper-slide">
						<img src="../../assets/img/zds/hRoGAFkPykaALpbyAACdZp0zwFU973_336x336.jpg" alt="" />
						<div>
							<p><b>￥299</b><em>￥472</em></p>
							<span>月供￥12.11起</span>
						</div>
					</div>
					<div class="swiper-slide last">
						<i><a href="###">MORE</a></i>
						<u><a href="###">查看更多</a></u>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted: function() {
			function daojishi() {
				var endTime;
				var time = new Date();
				var year = time.getFullYear();
				var month = time.getMonth();
				var day = time.getDate();
				var hour = time.getHours();
				var minute = time.getMinutes();
				var second = time.getSeconds();
				//假设每天的12:00:00为抢购结束时间
				if((hour < 12) && (hour >= 0)) {
					endTime = new Date(year, month, day, 12, 0, 0)
					//console.log(endTime);

				} else {
					/*$(".hour").text("00");
					$(".minute").text("00");
					$(".seconds").text("00");
					return;
					*/
					endTime = new Date(year, month, day + 1, 12, 0, 0)
					//console.log(endTime);
				}
				var chazhi = endTime - time;
				//console.log(chazhi);
				var h, min, sec;
				chazhi = parseInt(chazhi / 1000);
				sec = chazhi % 60;
				min = parseInt(chazhi / 60) % 60;
				h = parseInt(chazhi / 3600);
				//console.log(h + ":" + min + ":" + sec);

				function doubleNum(num) {
					if(num >= 10) {
						return "" + num;
					} else {
						return "0" + num;
					}
				}
				$(".hour").text(doubleNum(h));
				$(".minute").text(doubleNum(min));
				$(".seconds").text(doubleNum(sec));
			}
			daojishi();
			setInterval(function() {
				daojishi();
			}, 1000);
		}
	}
</script>

<style scoped="scoped">
	.fengqiang {
		font-size: 0.12rem;
		margin-bottom: 0.1rem;
		background: white;
	}
	
	.fengqiang .t {
		padding: 0.24rem 0.1rem;
		display: flex;
		justify-content: space-between;
		line-height: 0.2rem;
	}
	
	.fengqiang .t .l {
		font-size: 0.16rem;
		padding: 0 0.1rem;
	}
	
	.fengqiang .t .r {
		text-align: right;
	}
	
	.fengqiang .t .r p {
		display: inline-block;
	}
	
	.fengqiang .t .r p em {
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		text-align: center;
		border: 1px solid #e6e6e6;
		color: #888c8f;
	}
	
	.fengqiang .m .swiper-container4 {
		background: white;
		width: 100%;
		height: 2.15rem;
		margin-bottom: 0.1rem;
		overflow: hidden;
	}
	
	.fengqiang .m .swiper-container4 .swiper-wrapper {
		width: 100%;
		height: 100%;
		padding: 0 0.05rem;
	}
	
	.fengqiang .m .swiper-container4 .swiper-wrapper .swiper-slide {
		width: auto;
		height: 100%;
	}
	
	.fengqiang .m .swiper-container4 .swiper-wrapper .swiper-slide img {
		display: block;
		width: 1rem;
		height: 1rem;
		vertical-align: auto;
		margin: 0.26rem 0.2rem;
	}
	
	.fengqiang .m .swiper-container4 .swiper-wrapper .swiper-slide div {
		width: 100%;
		text-align: center;
		line-height: 0.22rem;
	}
	
	.fengqiang .m .swiper-container4 .swiper-wrapper .swiper-slide div p b {
		color: #89a5f8;
	}
	
	.fengqiang .m .swiper-container4 .swiper-wrapper .swiper-slide div p em {
		color: #aaafb3;
		text-decoration: line-through;
	}
	
	.fengqiang .m .swiper-container4 .swiper-wrapper .last {
		text-align: center;
		padding-top: 1rem;
	}
	
	.fengqiang .m .swiper-container4 .swiper-wrapper .last i {
		display: block;
		color: black;
		font-size: 0.2rem;
	}
</style>