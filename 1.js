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
 vitrisp=$('#khoi-comment').offset().top;
 $(".comment").click(function(){
 	$('body,html').animate({scrollTop:vitrisp},800)
 }) 
})  
 