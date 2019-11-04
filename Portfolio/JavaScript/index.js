$(function(){
	$(window).resize(function() {
		var $t = $(".divider");
	  	if ($(window).width() < 768){
	        $t.addClass("noDivider");
	    }
	    else{
	    	$t.removeClass("noDivider");
	    }
	});
});

function scrollToContact() {
	var currentUrl = document.URL;
	if(currentUrl && currentUrl.includes("portfolio.html")){
	  	window.location = "index.html";
	}
	var contact = document.getElementById("contact");
	contact.scrollIntoView();
}
