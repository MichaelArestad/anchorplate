$(function(){var a=$(window),b=$("body"),c=$("#top div.wrap"),d=$("#search");b.addClass("js");window.location.pathname==="/"&&b.css({position:"relative",top:-50,opacity:0}).animate({top:0,opacity:1});d.css("margin-top",-d.outerHeight());var e=1,f=d.css("margin-top");c.append('<img src="'+base+'img/search.gif" class="search">').children("#search").click(function(){d.animate({marginTop:e%2===0?f:0});if(e%2===0){$(this).animate({opacity:0},200,function(){$(this).attr("src",base+"img/search.gif").animate({opacity:1},200)});d.animate({marginTop:f})}else{$(this).animate({opacity:0},200,function(){$(this).attr("src",base+"img/close.gif").animate({opacity:1},200)});d.animate({marginTop:0})}e++})});