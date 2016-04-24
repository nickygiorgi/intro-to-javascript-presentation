	
$( document ).ready(function() {
	
    pages = $('.page');
	for (var i = 1; i < pages.length; i++) {
		$(pages[i]).hide();
	}
    refresh();	
	
	$('#next').click(function() {
		index++;
		refresh();
	});
	
	$('#prev').click(function() {
		index--;
		refresh();
	});
	
});

var pages;
var index = 0;

var refresh = function() {
	useIndex();	
	handleNextVisibility();	
	handlePrevVisibility();
};

var useIndex = function () {
	
	// check index is within range
	if (index >= pages.length) {
		return;
	}
	
	// show page at index
	$(pages[index]).show();
	
	// hide previous page
	if (index > 0) {
		$(pages[index-1]).hide();
	}
	
	// hide next page
	if (index < pages.length-1) {
		$(pages[index+1]).hide();
	}
};

var handleNextVisibility = function() {
	hideNextIfAppropriate();
	showNextIfAppropriate();
};

var hideNextIfAppropriate = function() {
	if (index == pages.length-1) {
		$('#next').hide();
	}
};

var showNextIfAppropriate = function() {
	if (index < pages.length-1) {
		$('#next').show();
	}
};

var handlePrevVisibility = function() {
	hidePrevIfAppropriate();
	showPrevIfAppropriate();
};

var hidePrevIfAppropriate = function() {
	if (index == 0) {
		$('#prev').hide();
	}
};

var showPrevIfAppropriate = function() {
	if (index > 0) {
		$('#prev').show();
	}
};


