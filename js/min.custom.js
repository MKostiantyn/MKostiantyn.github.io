$(function(){var e=$("#js-header").height(),a=$("#js-main-nav"),t=$(window).scrollTop();t>=e?a.addClass("main-nav--scroll"):a.removeClass("main-nav--scroll")}),$(function(){$(".main-header__text-js").typed({strings:["html code from psd.","responsive web-sites.","W3C valid, clean code.","bootstrap web-sites.","pixel perfect sites"],typeSpeed:80,backDelay:1e3,loop:!0}),(new WOW).init(),$(window).scroll(function(){var e=$("#js-header").height(),a=$("#js-main-nav"),t=($("#js-main-content"),$(this).scrollTop()),s=($("#js-main-nav").height(),$("#js-skills").offset().top-600),n=$(".chart");t>=e?a.addClass("main-nav--scroll"):a.removeClass("main-nav--scroll"),t>=s&&(n.hasClass("chart-active")||n.each(function(){$(this).addClass("chart-active"),$(this).easyPieChart({size:120,animate:2e3,lineCap:"butt",scaleColor:!1,barColor:"#ff5252",trackColor:"transparent",lineWidth:10})}))}),$("#js-main-nav a").on("click",function(e){e.preventDefault();var a=$(this).attr("href"),t=$("#js-toggle").height();currentBlockOffset=$(a).offset().top-t,$("html, body").animate({scrollTop:currentBlockOffset},500)}),$("#js-toggle").on("click",function(e){e.preventDefault(),$("#js-menu").toggleClass("main-nav__list--active"),$("#js-main-nav").toggleClass("main-nav--toggle-open")}),$("#js-menu .main-nav__item").on("click",function(e){e.preventDefault(),$("#js-menu").removeClass("main-nav__list--active")})});