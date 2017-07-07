/* by-杨昀赫
 ***仿苹果轮播图插件
 ***插件支持图片数量为三、四、五张的情况，且可以无限轮播
 ***在调用该插件时传入图片数量
 */
+
function(a) {
	a.fn.AppleSlider = function(b) {
		function k(b) {
			f = 1, "left" == b ? e-- : "right" == b ? e++ : "left_two" == b ? e -= 2 : "right_two" == b ? e += 2 : "left_three" == b ? e -= 3 : "right_three" == b ? e += 3 : "left_four" == b ? e -= 4 : "right_four" == b && (e += 4);
			var d=a(window).width(),g = e,
				j = e % c.imgNum,
				k = Math.floor((g + 1) / c.imgNum),
				l = Math.floor(g / c.imgNum),
				m = Math.floor(g / c.imgNum),
				n = Math.floor(g / c.imgNum),
				o = Math.floor((g - 1) / c.imgNum) + 1,
				p = -d * g,
				q = d * c.imgNum * k,
				r = d + l * c.imgNum * d,
				s = 2 * d + m * c.imgNum * d,
				t = 3 * d + n * c.imgNum * d,
				u = -d + o * c.imgNum * d;
			3 == c.imgNum ? (m = Math.floor((g - 1) / c.imgNum) + 1, s = -d + m * c.imgNum * d) : 4 == c.imgNum && (n = Math.floor((g - 1) / c.imgNum) + 1, t = -d + n * c.imgNum * d), j = -1 == e % 5 ? 4 : -2 == e % 5 ? 3 : -3 == e % 5 ? 2 : -4 == e % 5 ? 1 : e % 5 == -0 ? 0 : e % 5, 4 == c.imgNum && (j = -1 == e % 4 ? 3 : -2 == e % 4 ? 2 : -3 == e % 4 ? 1 : e % 4 == -0 ? 0 : e % 4), 3 == c.imgNum && (j = -1 == e % 3 ? 2 : -2 == e % 3 ? 1 : e % 3 == -0 ? 0 : e % 3), j == c.imgNum - 1 ? (a(".header").removeClass("black"), a(".languageBtn circle").eq(0).attr("stroke", "#000")) : (a(".header").addClass("black"), a(".languageBtn circle").eq(0).attr("stroke", "#fff")), i.find(".gallery_slide_wrapper").css({
				transform: "translate3d(" + p + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="0"]').css({
				transform: "translate3d(" + q + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="1"]').css({
				transform: "translate3d(" + r + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transform: "translate3d(" + s + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), 4 == c.imgNum && i.find('.gallery_item[data-idx="3"]').css({
				transform: "translate3d(" + t + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), 5 == c.imgNum && (i.find('.gallery_item[data-idx="3"]').css({
				transform: "translate3d(" + t + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="4"]').css({
				transform: "translate3d(" + u + "px,0,0)",
				transition: "all .7s ease-in-out"
			})), 3 == c.imgNum && (0 == j && "right" == b || 2 == j && "left" == b ? i.find('.gallery_item[data-idx="1"]').css({
				transition: "all 0s ease-in-out"
			}) : 0 == j && "left" == b || 1 == j && "right" == b ? i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			}) : 1 == j && "left" == b || 2 == j && "right" == b ? i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 0 == j && "left_two" == b ? (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 2 == j && "right_two" == b && (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex"), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			}))), 4 == c.imgNum && (0 == j && "right" == b || 3 == j && "left" == b ? (i.find('.gallery_item[data-idx="1"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			})) : 1 == j && "right" == b || 0 == j && "left" == b ? i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out"
			}) : 3 == j && "right" == b || 2 == j && "left" == b ? i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 2 == j && "right_two" == b || 0 == j && "left_two" == b ? i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 3 == j && "right_two" == b || 1 == j && "left_two" == b ? i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 3 == j && "right_three" == b ? (i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 0 == j && "left_three" == b && (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex"))), 5 == c.imgNum && (0 == j && "right" == b ? (i.find('.gallery_item[data-idx="1"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 4 == j && "left" == b ? (i.find('.gallery_item[data-idx="1"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 1 == j && "right" == b || 0 == j && "left" == b ? i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out"
			}) : 4 == j && "right" == b || 3 == j && "left" == b ? i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 2 == j && "right_two" == b || 0 == j && "left_two" == b || 3 == j && "right_three" == b || 0 == j && "left_three" == b ? i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 4 == j && "right_two" == b || 2 == j && "left_two" == b || 4 == j && "right_three" == b || 1 == j && "left_three" == b ? (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex"), console.log(111)) : 4 == j && "right_four" == b ? (i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 0 == j && "left_four" == b && (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex"))), 3 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_item_content").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (2 == j ? j - 2 : j + 1) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 2) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 4 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_item_content").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (3 == j ? j - 3 : j + 1) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (3 == j ? j - 2 : j + 2) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 3) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 5 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_item_content").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 4 : j + 1) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 3 : j + 2) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 2 : j + 3) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 4) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 3 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (2 == j ? j - 2 : j + 1) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 2) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 4 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (3 == j ? j - 3 : j + 1) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (3 == j ? j - 2 : j + 2) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 3) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 5 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 4 : j + 1) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 3 : j + 2) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 2 : j + 3) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 4) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), ("right_two" == b || "left_two" == b || "right_three" == b || "left_three" == b || "right_four" == b || "left_four" == b) && (i.find(".gallery_item").find(".gallery_item_content").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all 0s ease-in-out"
			}), i.find(".gallery_item").find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all 0s ease-in-out"
			}), 3 == c.imgNum && (i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 2) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 2) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			})), 4 == c.imgNum && (i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 3) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 3) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			})), 5 == c.imgNum && (i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 4) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 4) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			}))), i.find(".nav li").eq(j).addClass("active").siblings().removeClass("active"), c.autoplay && i.find(".nav li").eq(j).addClass("autoplay").siblings().removeClass("autoplay"), clearTimeout(h), h = setTimeout(function() {
				f = 0
			}, 700)
		}
		function l() {
			c.autoplay = !0, g = setInterval(function() {
				k("right")
			}, c.autoTime)
		}
		function m() {
			c.autoplay = !1, i.find(".nav li").removeClass("autoplay"), clearInterval(g)
		}
		function r(){
			var d=a(window).width(),
				g = e,
				j = e % c.imgNum,
				k = Math.floor((g + 1) / c.imgNum),
				l = Math.floor(g / c.imgNum),
				m = Math.floor(g / c.imgNum),
				n = Math.floor(g / c.imgNum),
				o = Math.floor((g - 1) / c.imgNum) + 1,
				p = -d * g,
				q = d * c.imgNum * k,
				r = d + l * c.imgNum * d,
				s = 2 * d + m * c.imgNum * d,
				t = 3 * d + n * c.imgNum * d,
				u = -d + o * c.imgNum * d;
			3 == c.imgNum ? (m = Math.floor((g - 1) / c.imgNum) + 1, s = -d + m * c.imgNum * d) : 4 == c.imgNum && (n = Math.floor((g - 1) / c.imgNum) + 1, t = -d + n * c.imgNum * d), j = -1 == e % 5 ? 4 : -2 == e % 5 ? 3 : -3 == e % 5 ? 2 : -4 == e % 5 ? 1 : e % 5 == -0 ? 0 : e % 5, 4 == c.imgNum && (j = -1 == e % 4 ? 3 : -2 == e % 4 ? 2 : -3 == e % 4 ? 1 : e % 4 == -0 ? 0 : e % 4), 3 == c.imgNum && (j = -1 == e % 3 ? 2 : -2 == e % 3 ? 1 : e % 3 == -0 ? 0 : e % 3), j == c.imgNum - 1 ? (a(".header").removeClass("black"), a(".languageBtn circle").eq(0).attr("stroke", "#000")) : (a(".header").addClass("black"), a(".languageBtn circle").eq(0).attr("stroke", "#fff")), i.find(".gallery_slide_wrapper").css({
				transform: "translate3d(" + p + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="0"]').css({
				transform: "translate3d(" + q + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="1"]').css({
				transform: "translate3d(" + r + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transform: "translate3d(" + s + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), 4 == c.imgNum && i.find('.gallery_item[data-idx="3"]').css({
				transform: "translate3d(" + t + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), 5 == c.imgNum && (i.find('.gallery_item[data-idx="3"]').css({
				transform: "translate3d(" + t + "px,0,0)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="4"]').css({
				transform: "translate3d(" + u + "px,0,0)",
				transition: "all .7s ease-in-out"
			})), 3 == c.imgNum && (0 == j && "right" == b || 2 == j && "left" == b ? i.find('.gallery_item[data-idx="1"]').css({
				transition: "all 0s ease-in-out"
			}) : 0 == j && "left" == b || 1 == j && "right" == b ? i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			}) : 1 == j && "left" == b || 2 == j && "right" == b ? i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 0 == j && "left_two" == b ? (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 2 == j && "right_two" == b && (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex"), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			}))), 4 == c.imgNum && (0 == j && "right" == b || 3 == j && "left" == b ? (i.find('.gallery_item[data-idx="1"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			})) : 1 == j && "right" == b || 0 == j && "left" == b ? i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out"
			}) : 3 == j && "right" == b || 2 == j && "left" == b ? i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 2 == j && "right_two" == b || 0 == j && "left_two" == b ? i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 3 == j && "right_two" == b || 1 == j && "left_two" == b ? i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 3 == j && "right_three" == b ? (i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 0 == j && "left_three" == b && (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex"))), 5 == c.imgNum && (0 == j && "right" == b ? (i.find('.gallery_item[data-idx="1"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 4 == j && "left" == b ? (i.find('.gallery_item[data-idx="1"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="2"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="3"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 1 == j && "right" == b || 0 == j && "left" == b ? i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out"
			}) : 4 == j && "right" == b || 3 == j && "left" == b ? i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 2 == j && "right_two" == b || 0 == j && "left_two" == b || 3 == j && "right_three" == b || 0 == j && "left_three" == b ? i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex") : 4 == j && "right_two" == b || 2 == j && "left_two" == b || 4 == j && "right_three" == b || 1 == j && "left_three" == b ? (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex"), console.log(111)) : 4 == j && "right_four" == b ? (i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex")) : 0 == j && "left_four" == b && (i.find('.gallery_item[data-idx="0"]').css({
				transition: "all 0s ease-in-out"
			}), i.find('.gallery_item[data-idx="4"]').css({
				transition: "all 0s ease-in-out .7s"
			}).addClass("zIndex").siblings().removeClass("zIndex"))), 3 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_item_content").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (2 == j ? j - 2 : j + 1) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 2) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 4 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_item_content").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (3 == j ? j - 3 : j + 1) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (3 == j ? j - 2 : j + 2) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 3) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 5 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_item_content").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 4 : j + 1) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 3 : j + 2) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 2 : j + 3) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .2 * d + "px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 4) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 3 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (2 == j ? j - 2 : j + 1) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 2) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 4 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (3 == j ? j - 3 : j + 1) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (3 == j ? j - 2 : j + 2) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 3) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), 5 == c.imgNum && (i.find('.gallery_item[data-idx="' + j + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 4 : j + 1) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 3 : j + 2) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (4 == j ? j - 2 : j + 3) + '"]').find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all .7s ease-in-out"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 4) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all .7s ease-in-out"
			})), ("right_two" == b || "left_two" == b || "right_three" == b || "left_three" == b || "right_four" == b || "left_four" == b) && (i.find(".gallery_item").find(".gallery_item_content").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all 0s ease-in-out"
			}), i.find(".gallery_item").find(".gallery_image").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
				transition: "all 0s ease-in-out"
			}), 3 == c.imgNum && (i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 2) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 2) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			})), 4 == c.imgNum && (i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 3) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 3) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			})), 5 == c.imgNum && (i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 4) + '"]').find(".gallery_item_content").css({
				transform: "translate3d(" + .95 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			}), i.find('.gallery_item[data-idx="' + (j > 0 ? j - 1 : j + 4) + '"]').find(".gallery_image").css({
				transform: "translate3d(" + .9 * d + "px, 0px, 0px) scale3d(.9, .9, 1)",
				transition: "all 0s ease-in-out .7s"
			}))), i.find(".nav li").eq(j).addClass("active").siblings().removeClass("active"), c.autoplay && i.find(".nav li").eq(j).addClass("autoplay").siblings().removeClass("autoplay"), clearTimeout(h), h = setTimeout(function() {
				f = 0
			}, 700)
		}
		var j, c = a.extend({
			imgList: ".gallery_item",
			autoplay: !0,
			imgNum: 3,
			autoTime: 5e3
		}, b),
			d = a(window).width(),
			e = 0,
			f = 0,
			g = null,
			h = null,
			i = a(this);
		$(window).resize(function(){
			r();
		})
		i.find('.gallery_item[data-idx="0"]').css({
			transform: "translate3d(0,0,0)",
			transition: "all 0s ease-in-out"
		}), i.find('.gallery_item[data-idx="1"]').css({
			transform: "translate3d(" + d + "px,0,0)",
			transition: "all 0s ease-in-out"
		}), i.find('.gallery_item[data-idx="2"]').css({
			transform: "translate3d(" + 2 * d + "px,0,0)",
			transition: "all 0s ease-in-out"
		}), 3 == c.imgNum ? i.find('.gallery_item[data-idx="2"]').css({
			transform: "translate3d(-" + d + "px,0,0)",
			transition: "all 0s ease-in-out"
		}) : 4 == c.imgNum ? i.find('.gallery_item[data-idx="3"]').css({
			transform: "translate3d(-" + d + "px,0,0)",
			transition: "all 0s ease-in-out"
		}) : 5 == c.imgNum && (i.find('.gallery_item[data-idx="3"]').css({
			transform: "translate3d(" + 3 * d + "px,0,0)",
			transition: "all 0s ease-in-out"
		}), i.find('.gallery_item[data-idx="4"]').css({
			transform: "translate3d(-" + d + "px,0,0)",
			transition: "all 0s ease-in-out"
		})), j = "", j = c.autoplay ? '<li data-target="1" class="nav_slide nav_slide_1 active autoplay"><div class="slide_btn"></div></li>' : '<li data-target="1" class="nav_slide nav_slide_1 active"><div class="slide_btn"></div></li>', j += '<li data-target="2" class="nav_slide nav_slide_2"><div class="slide_btn"></div></li><li data-target="3" class="nav_slide nav_slide_3"><div class="slide_btn"></div></li>', ul_html = "", btn_html = "", 3 == c.imgNum ? j = j : 4 == c.imgNum ? j += '<li data-target="4" class="nav_slide nav_slide_4"><div class="slide_btn"></div></li>' : 5 == c.imgNum && (j = j + '<li data-target="4" class="nav_slide nav_slide_4"><div class="slide_btn"></div></li>' + '<li data-target="5" class="nav_slide nav_slide_5"><div class="slide_btn"></div></li>'), ul_html = '<ul class="nav">' + j + "</ul>", i.append(ul_html), 640 > d ? i.swipe({
			swipe: function(a, b) {
				m(), "left" == b ? 0 == f && k("right") : "right" == b && 0 == f && k("left")
			}
		}) : (btn_html = '<div class="nav_btn left"><div class="btn_left"></div></div><div class="nav_btn right"><div class="btn_right"></div></div>', i.append(btn_html), i.find(".nav_btn.right").on("click", function() {
			m(), 0 == f && k("right")
		}), i.find(".nav_btn.left").on("click", function() {
			m(), 0 == f && k("left")
		})), i.find(".nav li").click(function() {
			if (m(), 1 != f) {
				var b = e % c.imgNum,
					d = a(this).index();
				if (b = -1 == e % 5 ? 4 : -2 == e % 5 ? 3 : -3 == e % 5 ? 2 : -4 == e % 5 ? 1 : e % 5 == -0 ? 0 : e % 5, 4 == c.imgNum && (b = -1 == e % 4 ? 3 : -2 == e % 4 ? 2 : -3 == e % 4 ? 1 : e % 4 == -0 ? 0 : e % 4), 3 == c.imgNum && (b = -1 == e % 3 ? 2 : -2 == e % 3 ? 1 : e % 3 == -0 ? 0 : e % 3), a(this).addClass("active").siblings().removeClass("active"), d > b) 1 == d - b ? k("right") : 2 == d - b ? k("right_two") : 3 == d - b ? k("right_three") : 4 == d - b && k("right_four");
				else if (b > d) 1 == b - d ? k("left") : 2 == b - d ? k("left_two") : 3 == b - d ? k("left_three") : 4 == b - d && k("left_four");
				else if (d == b) return;
				clearTimeout(h), h = setTimeout(function() {
					f = 0
				}, 700)
			}
		}), c.autoplay && l()
	}
}(jQuery);