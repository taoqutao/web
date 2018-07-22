/**
 短暂提示
 msg: 显示消息
 time：停留时间
 type：类型 >1：成功，<1：失败，其他：警告
 **/
function tipDialog(msg, time) {
    $('#tipDialog').html(msg);
    $('.rele-rea-men-ts').slideDown(300);
    window.timer = setTimeout(function () {
        $('.rele-rea-men-ts').slideUp(300);
    }, time);
}

/** 绑定店铺漂浮 **/
$(function () {
    $('#close_im').bind('click', function () {
        $('#main-im').css("height", "0");
        $('#im_main').fadeOut();
        $('#open_im').fadeIn();
    });
    $('#open_im').bind('click', function (e) {
        $('#main-im').css("height", "272");
        $('#im_main').fadeIn();
        $(this).hide();
    });
//	$('.go-top').bind('click',function(){
//		$(window).scrollTop(0);
//	});
    $(".weixing-container").bind('mouseenter', function () {
        $('.weixing-show').fadeOut();
    })
    $(".weixing-container").bind('mouseleave', function () {
        $('.weixing-show').fadeIn();
    });
});

/** 填写关键词 **/
$(document).ready(function () {
    $("#gjca").click(function () {
        $("#gjcmin").fadeOut();
    });
    $("#gjctj").click(function () {
        $("#gjcmin").fadeIn();
    });
});


//发布任务
$(document).ready(function ($) {
    $('#rel-tp').click(function () {
        var attrid = $(this).attr("attrid");
        $("#rel-img").attr("src", path + "/assets/img/rqb/rel-tp.png");
        if (attrid == 2) {
            $("#rel-img").attr("src", path + "/assets/img/rqb/rel-tp-.png");
        }
        $('.rel-tp-bj').show();
        $('.rel-tp-bj').height($(document).height());
        $('.rel-tp-tc').show();
    })
    $('.rel-tp-bj').click(function () {
        $('.rel-tp-bj').hide();
        $('.rel-tp-tc').hide();
    })
});

//发布任务
$(document).ready(function ($) {
    $('.release-hydq').click(function () {
        $('.chj_bj').show();
        $('.chj_bj').height($(document).height());
        $('.chj_min').slideDown(200);
    })
    $('.chj_min_a').click(function () {
        $('.chj_bj').hide();
        $('.chj_min').slideUp(200);
    })
});
$(document).ready(function ($) {
    $('#relse_one').click(function () {
        $('.chj_bj_one').show();
        $('.chj_bj_one').height($(document).height());
        $('.chj_min_one').slideDown(200);
        $('.chj_bj_two').hide();
        $('.chj_min_two').hide();
        $('.chj_bj_three').hide();
        $('.chj_min_three').hide();
        $('.chj_min_fhd').hide();
        $('.chj_fhd').hide();
    })
    $('.chj_min_a').click(function () {
        $('.chj_bj_one').hide();
        $('.chj_min_one').slideUp(200);
    })
});
$(document).ready(function ($) {
    $('#relse_two').click(function () {
        $('.chj_bj_two').show();
        $('.chj_bj_two').height($(document).height());
        $('.chj_min_two').slideDown(200);
        $('.chj_bj_one').hide();
        $('.chj_min_one').hide();
        $('.chj_bj_three').hide();
        $('.chj_min_three').hide();
    })
    $('.chj_min_a').click(function () {
        $('.chj_bj_two').hide();
        $('.chj_min_two').slideUp(200);
    })
});
$(document).ready(function ($) {
    $('#relse_three').click(function () {
        $('.chj_bj_three').show();
        $('.chj_bj_three').height($(document).height());
        $('.chj_min_three').slideDown(200);
        $('.chj_bj_one').hide();
        $('.chj_min_one').hide();
        $('.chj_bj_two').hide();
        $('.chj_min_two').hide();
    })
    $('.chj_min_a').click(function () {
        $('.chj_bj_three').hide();
        $('.chj_min_three').slideUp(200);
    })
});

$(document).ready(function ($) {
    $('.chj_min_a_fhd').click(function () {
        $('.chj_fhd').hide();
        $('.chj_min_fhd').slideUp(200);
    })
});

$(document).ready(function ($) {
    $('.banner-tp-a').click(function () {
        $('.banner-tp').hide();
        $('.top-wrap').css({"margin-top": "0px"});
        $('.box').css({"margin-top": "70px"});
    })
});

//首页弹窗
$(function () {
    var KF = $(".chj_ms");
    var wkbox = $(".chj_box");
    var kf_close = $(".chj_ms_head .chj_ms_close");
    var icon_keifu = $(".chj_ms_ico");
    var kH = wkbox.height();
    var kW = wkbox.width();
    var wH = $(window).height();
    KF.css({height: kH});
    icon_keifu.css("top", parseInt((kH - 0) / 0));
    var KF_top = (wH - kH) / 2;
    if (KF_top < 0) KF_top = 0;
    KF.css("top", KF_top);
    $(kf_close).click(function () {
        $('.chj_bj').hide();
        $('.chj_min').slideUp(200);
        KF.animate({width: "100%"}, 0, function () {
            wkbox.hide();
            icon_keifu.show();
            KF.animate();
        });
    });
    $(icon_keifu).click(function () {
        $('.chj_bj').show();
        $('.chj_min').slideUp(200);
        $(this).hide();
        wkbox.show();
        KF.animate();
    });

});
//查看专业建议
$(document).ready(function ($) {
    $('.rel-zyjy').click(function () {
        $('.rel-zyjy-bj').show();
        $('.rel-zyjy-bj').height($(document).height());
        $('.rel-zyjy-tc').slideDown(200);
    });
    $('a.rel-zyjy-tc-min-a').click(function () {
        $('.rel-zyjy-bj').hide();
        $('.rel-zyjy-tc').slideUp(200);
    });
});

//保存方案
$(document).ready(function ($) {
    $('#rel-a').click(function () {
        $("#shop_task_isplan_hint_check").hide();
        $('.rel-qrxx-bj').show();
        $('.rel-qrxx-bj').height($(document).height());
        $('.rel-qrxx-tc').slideDown(200);
    });
    $('#rel-xx,a.rel-qr-tc-as').click(function () {
        $('.rel-qrxx-bj').hide();
        $('.rel-qrxx-tc').slideUp(200);
    })
});


//我的帐户=
$(function () {
    $(".account-bot ul li").click(function () {
        $(".account-bot ul li").removeClass("account-bot-a");
        $(this).addClass("account-bot-a");
        $("div.tab_boxx > div").eq($(this).index()).fadeIn(300, function () {
        }).siblings().hide();
    });
});

//我的帐户=任务管理-取消任务
$(document).ready(function ($) {
    $('.lb-qx').click(function () {
        $('.account-rwgl-bj').show();
        $('.account-rwgl-bj').height($(document).height());
        $('.account-rwgl-tc').slideDown(200);
    });
});
//我的帐户=任务管理-审核失败
$(document).ready(function ($) {
    $('.lb-hong').click(function () {
        $('.account-rwgl-bjs').show();
        $('.account-rwgl-bjs').height($(document).height());
        $('.account-rwgl-tcs').slideDown(200);
    })
    $('a.account-rwgl-tc-min-a,a.account-rwgl-tc-mins-p-s,a.account-rwgl-tc-min-p-s').click(function () {

        $('.account-rwgl-bjs').hide();
        $('.account-rwgl-tcs').slideUp(200);

        $('.account-rwgl-bjs1').hide();
        $('.account-rwgl-tcs1').slideUp(200);

        $('.account-rwgl-bjs2').hide();
        $('.account-rwgl-tcs2').slideUp(200);

        $('.account-rwgl-bj').hide();
        $('.account-rwgl-tc').slideUp(200);

        $("#task_appreciation_item_value_5").removeAttr("checked");
        $("#isCheck_5").hide();

        $("#task_appreciation_item_value_2").removeAttr("checked");
        $("#isCheck_2").hide();
        $("#ycxfb_div").hide();
    });
});

//查看专业建议
$(document).ready(function ($) {
    $('.banner-tp-a').click(function () {
        $('.banner-tp').hide();
    })
});

//帮助指南
//function aboutUsLeft (t) {
//	t = !t?320:t;
//	var l = $(".help-menu").height();
//	if($(window).scrollTop()>200){
//		/*if($(".help-content").height()<($(window).scrollTop()-t+l)){
//			$(".help-menu")//.css({"margin-top":($(".help-content").height()-l)+"px"})
//		}else{
//			$(".help-menu")//.css({"margin-top":($(window).scrollTop()-t)+"px"})
//		}	*/
//		$(".help-menu").css({"position":"fixed","top":"0px"})
//	}else{
//		$(".help-menu").css({"position":"static"})//.css({"margin-top":"0px"})
//	}
//}
//$(function () {
//	aboutUsLeft()
//	$(window).scroll(function () {
//		aboutUsLeft();
//	});
//});
$(function () {
    $(".help-menu ul li").click(function () {
        $(".help-menu ul li").removeClass("help-menu-a");
        $(this).addClass("help-menu-a");
        $("div.tab_box > div").eq($(this).index()).fadeIn(300, function () {
        }).siblings().hide();
    });
});

$(function () {
    $('.help-man-strong').click(function () {
        var p = $(this),
            i = p.parent().index();
        console.log(p)
        if ($(this).next().is(":hidden")) {
            p.addClass("active");
            p.next().fadeIn(300);
        } else {
            p.next().hide();
            p.removeClass("active");
        }
    });
    function testDisplay() {
        var div = document.addClass("help-man-p");
        if (div.style.display == "block") {
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }
    }
});

$(function () {
    $(".account-center-nav ul li").click(function () {
        $(".account-center-nav ul li").removeClass("account-center-nav-a");
        $(this).addClass("account-center-nav-a");
        $("div.tab_box > div").eq($(this).index()).fadeIn(300, function () {
        }).siblings().hide();
    });
});

/** 登录banner **/
jQuery.fn.extend({
    slideFocus: function () {
        var This = $(this);
        var sWidth = $(This).width(),
            len = $(This).find('ul li').length,
            index = 0,
            Timer;

        // btn event
        var btn = "<div class='btn'>";
        for (var i = 0; i < len; i++) {
            btn += "<span></span>";
        }
        ;
        btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
        $(This).append(btn);
        $(This).find('.btn span').eq(0).addClass('on');


        $(This).find('.btn span').mouseover(function () {
            index = $(This).find('.btn span').index(this);
            Tony(index);
        });

        $(This).find('.next').click(function () {
            index++;
            if (index == len) {
                index = 0;
            }
            Tony(index);
        });

        $(This).find('.pre').click(function () {
            index--;
            if (index == -1) {
                index = len - 1;
            }
            Tony(index);
        });
        // start setInterval
        $(This).find('ul').css("width", sWidth * (len));
        $(This).hover(function () {
            clearInterval(Timer);
            show($(This).find('.preNext'));
        }, function () {
            hide($(This).find('.preNext'));
            Timer = setInterval(function () {
                Tony(index);
                index++;
                if (len == index) {
                    index = 0;
                }
            }, 2000)
        }).trigger("mouseleave");

        function Tony(index) {
            var new_width = -index * sWidth;
            $(This).find('ul').stop(true, false).animate({'left': new_width}, 300);
            $(This).find('.btn span').stop(true, false).eq(index).addClass('on').siblings().removeClass('on');
        };
        // show hide
        function show(obj) {
            $(obj).stop(true, false).fadeIn();
        }

        function hide(obj) {
            $(obj).stop(true, false).fadeOut();
        }
    }
});


////首页
//$(function(){
//	var n=0;
//	var imgLength=$(".b-img e").length;
//	var ctWidth=imgLength*100;
//	var itemWidth=1/imgLength*100;
//	$(".b-img").width(ctWidth+"%");
//	$(".b-img e").width(itemWidth+"%");
//	$(".b-list").width(imgLength*30);
////	if(imgLength>1)
////	{
////	for(var i=0;i<imgLength;i++)
////	{
////		var listSpan=$("<span></span>")
////		$(".b-list").append(listSpan);
////		}
////	}
//	$(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
//	$(".bar-right em").click(function(){
//		if(n==imgLength-1)
//		{
//			var ctPosit=(n+1)*100;
//			$(".banner").append($(".b-img").clone());
//			$(".b-img:last").css("left","100%");
//			$(".b-img:first").animate({"left":"-"+ctPosit+"%"},1000);
//			$(".b-img:last").animate({"left":"0"},1000);
//			var setTime0=setTimeout(function () {
//          $(".banner .b-img:first").remove();
//          }, 1000);
//			n=0;
//			$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
//			}
//		else
//		{
//		n++;
//		var ctPosit=n*100;
//		$(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
//		$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
//		}
//		})
//	$(".bar-left em").click(function(){
//		if(n==0)
//		{
//			var stPosit=imgLength*100;
//			var etPosit=(imgLength-1)*100;
//			$(".banner").prepend($(".b-img").clone());
//			$(".b-img:first").css("left","-"+stPosit+"%");
//			$(".b-img:last").animate({"left":"100%"},1000);
//			$(".b-img:first").animate({"left":"-"+etPosit+"%"},1000);
//			var setTime0=setTimeout(function () {
//          $(".banner .b-img:last").remove();
//          }, 1000);
//			n=imgLength-1;
//			$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
//			}
//		else
//		{
//		n--;
//		var ctPosit=n*100;
//		$(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
//		$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
//		}
//		})
////	$(".b-list span").click(function(){
////		var lsIndex=$(this).index();
////		n=lsIndex;
////		var ctPosit=n*100;
////		$(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
////		$(this).addClass("spcss").siblings("span").removeClass("spcss");
////		})
//	function rollEnvent(){
//		if(n==imgLength-1)
//		{
//			var ctPosit=(n+1)*100;
//			$(".banner").append($(".b-img").clone());
//			$(".b-img:last").css("left","100%");
//			$(".b-img:first").animate({"left":"-"+ctPosit+"%"},1000);
//			$(".b-img:last").animate({"left":"0"},1000);
//			var setTime0=setTimeout(function () {
//          $(".banner .b-img:first").remove();
//          }, 1000);
//			n=0;
//			$(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
//			}
//		else
//		{
//		n++;
//		var ctPosit=n*100;
//		$(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
//		$(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
//		}
//		}
//	var slidesetInterval=setInterval(rollEnvent,10000);
////	$(".banner").hover(function(){clearInterval(slidesetInterval);},function(){slidesetInterval=setInterval(rollEnvent,5000);});
//	$(".bar-left").mouseover(function(){
//		$(this).find("em").addClass("emcss");
//		}).mouseleave(function(){
//		$(this).css("background","none");
//		$(this).find("em").removeClass("emcss");
//			})
//	$(".bar-right").mouseover(function(){
//		$(this).find("em").addClass("emcss");
//		}).mouseleave(function(){
//		$(this).css("background","none");
//		$(this).find("em").removeClass("emcss");
//			})
//	})
//
//

