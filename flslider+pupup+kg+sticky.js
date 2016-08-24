<script><!--StickyBox-->
$(document).on("ready",function() {$('#StickyBox').hcSticky({top: 10,bottomEnd: 
$("#footer").height()});$(window).on("load",function(){var probando = 
$("#footer").offset().top -$("#rightContent").offset().top -
$('#StickyBox').height() - 1630;$("#rightContent").css("height", (probando));});});
</script>
<script><!--flexslider-->
(function ($) {
$(window).load(function(){
$('.flexslider').flexslider({
	animation: "slide", 
	//animation:"fade",
	controlNav: false,
	directionNav: false,
	slideshow: true,  
	smoothHeight:false,
	itemMargin: 100,
	start: function(slider){
		$('#sliderlodar').remove();
	}
});
});
})(jQuery);
</script>
<script><!--pupup-->
$(function () {
if('1' == '1'){
window.onbeforeunload = exitAction;
}
}); function exitAction() { window.onbeforeunload = null; allow_exit = false; if (allow_exit === false) 
{ $("#popup_coupon, .CS_black_overlay").show(); 
return "You are about to leave the best opportunitie of your life!"; } } 
$(document).on("ready",function(){ $("#closeModal").on("click",function(){ $("#popup_coupon, .CS_black_overlay").hide(); }); });
</script>
<script><!--kg-->
var kgConverter = function(unit, amount) {
var weight;
switch (unit) {
case 'kg':
weight = amount * 1;
return document.write(Math.round(weight) + " " + unit);
break;
case 'lbs':
weight = amount * 2.20462;
return document.write(weight.toFixed(1) + " " + unit);
break;
case 'stone':
weight = amount * 0.157473;
return document.write(weight.toFixed(1) + " " + unit);
break;
}
}
</script>