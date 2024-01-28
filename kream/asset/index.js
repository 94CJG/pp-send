/* btn_top */
$(document).ready(function() {
	$(window).scroll(function(){
		if ($(this).scrollTop () > 100) {
			$('.btn_top').fadeIn();
		} else {
			$('.btn_top').fadeOut();
		}
	});
	$('.btn_top').click(function(){
		$("html, body").animate({ scrollTop: 0}, 100);
		return false;
	})
})