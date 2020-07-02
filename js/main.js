// $(function() {
// 	$(document).pjax('', '', {fragment: ''})
// 	$('').on('pjax:success', function () {
// 		$.pjax({
// 			url: window.location.href,
// 			container: '',
// 			fragment: ''
// 		});
// 	});
// });

// Mobile Header Scroll
function headerScroll() {
	var header = document.getElementById('mobile-header');
	
	$(window).scroll(
		{
        	previousTop: 0
    	},
    	function () {
	    var currentTop = $(window).scrollTop();
	    if (currentTop < this.previousTop) {
	    	header.classList.remove("sticky-header-out");
			header.classList.add("sticky-header-in");
		}
		else {
			header.classList.remove("sticky-header-in");
			header.classList.add("sticky-header-out");
		}
		this.previousTop = currentTop;
	});
}

window.onload = function(){
	document.getElementById('scroll-to-top').onclick = function(){
		window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
	}
}

headerScroll();