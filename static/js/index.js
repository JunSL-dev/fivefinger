$(window).on('scroll',function(){
	
	var height = $(document).scrollTop();

	console.log(height);

	if( height>=$('.uwi').height() ){
		$('#hide_nav').fadeIn(100);
	} else{
		$('#hide_nav').fadeOut(100);
	}
});

$(window).resize(function(){
	$('article').css('top',$('.uwi').height());
});

$(document).ready(function(){

	$('article').css('top',$('.uwi').height());

	var scrollEvent = false;
	var cnt = 0;

	$('html,body').on('mousewheel',function(e){
		e.preventDefault();

		var m = e.originalEvent.wheelDelta;
		var height = $('.uwi').height();
		
		if(m>1 && scrollEvent==false && cnt>=1){
			console.log("up");
			scrollEvent=true;
			cnt--;
			$('html, body').stop().animate({
				scrollTop:height*cnt		
			},{duration:1000, complete:function(){
				scrollEvent = false;
			}});
		} else if(m<1 && scrollEvent==false && cnt <3){
			console.log("up");
			scrollEvent=true;
			cnt++;
			$('html, body').stop().animate({
				scrollTop:height*cnt		
			},{duration:1000, complete:function(){
				scrollEvent = false;
			}});
		}


	});

});

