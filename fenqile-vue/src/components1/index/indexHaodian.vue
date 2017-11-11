<template>
	<div class="goodStores">
		<p class="title">好店精选</p>

		<div class="oneStore">
			<div class="desc">
				<div class="left">
					<p>数码驿站数码专营店</p>
					<span>相机四周年庆</span>
				</div>
				<button>逛一下</button>
			</div>
			<div class="swiper-container6">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFjd1hGAbnUQAAEarjXzkrM806_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hRoGAFjKQBiAIZzQAABlL05ZBus594_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFjd19CASWVuAABjPnLf6WA639_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hhoGAFjd16iABwi4AAF5juzQLLY917_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFmKhGaAZOPJAAG3EXTexIo124_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hhoGAFjd0jmAAj6gAAH_SP73FhU210_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
				</div>
			</div>
		</div>

		<div class="oneStore">
			<div class="desc">
				<div class="left">
					<p>万天国际手表旗舰店</p>
					<span>品质保障，服务于芯</span>
				</div>
				<button>逛一下</button>
			</div>
			<div class="swiper-container6">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFjwmx2Ab33hAAFheTPDdXs864_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hhoGAFkK05GAGH0KAAFTQa114YY990_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFkKzv-AA7CeAAE5-eMFgZs027_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFkpL3uAW8eVAAHk3Z8wDos249_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hhoGAFitVxyAaP5GAAL8Du9DPq8069_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
					<div class="swiper-slide">
						<img v-lazy="'../../../static/assets/img/zds/hBoGAFjLWh2AU4ogAAC1jwI1VHY550_336x336.jpg'" alt="" />
						<b>￥299</b>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		methods:{
			

		},
		mounted:function(){
			var mySwiper6 = new Swiper('.swiper-container6', {
				slidesPerView: 'auto',
				freeMode: true,
				freeModeSticky: true
			});
			/*! echo.js v1.6.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/echo */ 
			/*!function(t, e) {
				    "function" == typeof define && define.amd ? define(function() {
				        return e(t)
				    }) : "object" == typeof exports ? module.exports = e : t.echo = e(t)
				}(this, function(t) {
				    "use strict";
				    var e, n, o, r, c, a = {},
				        d = function() {},
				        u = function(t, e) {
				            var n = t.getBoundingClientRect();
				            return n.right >= e.l && n.bottom >= e.t && n.left <= e.r && n.top <= e.b
				        },
				        l = function() {
				            (r || !n) && (clearTimeout(n), n = setTimeout(function() {
				                a.render(), n = null
				            }, o))
				        };
				    return a.init = function(n) {
				        n = n || {};
				        var u = n.offset || 0,
				            i = n.offsetVertical || u,
				            f = n.offsetHorizontal || u,
				            s = function(t, e) {
				                return parseInt(t || e, 10)
				            };
				        e = {
				            t: s(n.offsetTop, i),
				            b: s(n.offsetBottom, i),
				            l: s(n.offsetLeft, f),
				            r: s(n.offsetRight, f)
				        }, o = s(n.throttle, 250), r = n.debounce !== !1, c = !!n.unload, d = n.callback || d, a.render(), document.addEventListener ? (t.addEventListener("scroll", l, !1), t.addEventListener("load", l, !1)) : (t.attachEvent("onscroll", l), t.attachEvent("onload", l))
				    }, a.render = function() {
				        for (var n, o, r = document.querySelectorAll("img[data-echo], [data-echo-background]"), l = r.length, i = {
				                l: 0 - e.l,
				                t: 0 - e.t,
				                b: (t.innerHeight || document.documentElement.clientHeight) + e.b,
				                r: (t.innerWidth || document.documentElement.clientWidth) + e.r
				            }, f = 0; l > f; f++) o = r[f], u(o, i) ? (c && o.setAttribute("data-echo-placeholder", o.src), null !== o.getAttribute("data-echo-background") ? o.style.backgroundImage = "url(" + o.getAttribute("data-echo-background") + ")" : o.src = o.getAttribute("data-echo"), c || o.removeAttribute("data-echo"), d(o, "load")) : c && (n = o.getAttribute("data-echo-placeholder")) && (null !== o.getAttribute("data-echo-background") ? o.style.backgroundImage = "url(" + n + ")" : o.src = n, o.removeAttribute("data-echo-placeholder"), d(o, "unload"));
				        l || a.detach()
				    }, a.detach = function() {
				        document.removeEventListener ? t.removeEventListener("scroll", l) : t.detachEvent("onscroll", l), clearTimeout(n)
				    }, a
				});
			echo.init();*/
		}
	}
</script>

<style scoped="scoped">
	.goodStores {
		font-size: 0.12rem;
		background: #fff;
	}
	
	.goodStores .title {
		line-height: 0.7rem;
		font-size: 0.17rem;
		text-align: center;
		background: white;
	}
	
	.goodStores .oneStore {
		margin-bottom: 0.1rem;
	}
	
	.goodStores .oneStore .desc {
		display: flex;
		font-size: 0.12rem;
		padding: 0.2rem 0.3rem;
	}
	
	.goodStores .oneStore .desc .left {
		flex: 1;
		line-height: 0.2rem;
	}
	
	.goodStores .oneStore .desc .left p {
		color: #394050;
		font-size: 0.14rem;
	}
	
	.goodStores .oneStore .desc .left span {
		color: rgba(48, 64, 80, 0.4);
	}
	
	.goodStores .oneStore .desc button {
		padding: 0 0.3rem;
		line-height: 0.3rem;
		margin-top: 0.05rem;
		outline: none;
		border: 1px solid #ccc;
		box-shadow: none;
		border-radius: 0.05rem;
		background: none;
	}
	
	.goodStores .oneStore .swiper-container6 {
		width: 100%;
		height: 2rem;
		overflow: hidden;
	}
	
	.goodStores .oneStore .swiper-container6 .swiper-wrapper {
		width: 100%;
		height: 100%;
	}
	
	.goodStores .oneStore .swiper-container6 .swiper-wrapper .swiper-slide {
		width: auto;
		height: 100%;
	}
	
	.goodStores .oneStore .swiper-container6 .swiper-wrapper .swiper-slide img {
		width: 1rem;
		height: 1rem;
		margin: 0.24rem;
	}
	
	.goodStores .oneStore .swiper-container6 .swiper-wrapper .swiper-slide b {
		text-align: center;
		margin: 0 auto;
		display: block;
	}
</style>