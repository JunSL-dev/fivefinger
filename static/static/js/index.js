$(window).on('scroll',function(){
	
	var height = $(document).scrollTop();
	
	console.log(height);

	if( height>850 ){
		$('#hide_nav').fadeIn(100);
	} else{
		$('#hide_nav').fadeOut(100);
	}
});
