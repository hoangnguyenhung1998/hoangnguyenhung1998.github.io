﻿ $(function(){
 vitriedu=$('#khoiedu').offset().top;
 $(".xuong,.history").click(function(){
 	$('body,html').animate({scrollTop:vitriedu},800)
 })
 vitrimenutop=$('#khoimenutop').offset().top;
 $(".myself").click(function(){
 	$('body,html').animate({scrollTop:vitrimenutop},800)
 }) 
 vitrisp=$('#khoisp').offset().top;
 $(".portfolio").click(function(){
 	$('body,html').animate({scrollTop:vitrisp},800)
 }) 
 vitricmt=$('#khoi-comment').offset().top;
 $(".comment").click(function(){
 	$('body,html').animate({scrollTop:vitricmt},800)
 })
 vitrikn=$('#khoikn').offset().top;
 $(".experience").click(function(){
 	$('body,html').animate({scrollTop:vitrikn},800)
 })  
})  
 