function resize(){
    if ($(window).width() <= 750) { 
      	$(".nav .logo").attr('src', 'images/logo_sm.png');
  	} 
  	else 
  	{
    	$(".nav .logo").attr('src', 'images/logo_pc.png');
  	}
}
$(document).ready(function() {
	
	console.log($(window).width());
	resize();
	$(window).on('resize', resize);
	
});