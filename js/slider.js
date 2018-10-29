var index = 1;

    imageSlide();
    manualSlide(index);

    function previousSlide(n){
    	index = index + n;
    	manualSlide(index);
    }
    function nextSlide(n){
    	index = index + n;
    	manualSlide(index);
    }


	function imageSlide(){
		var slide = document.getElementsByClassName("slide");
		if (index > slide.length) {
			index = 1;
		}
		for (var i = 0; i < slide.length; i++) {
			slide[i].style.display = "none";
		};
		slide[index-1].style.display = "block";
		index = index + 1;
		setTimeout(imageSlide,5000);
	}

	function manualSlide(n){
		var slide = document.getElementsByClassName("slide");
		if (n > slide.length) {
			index = 1;
		}
		if (n < 1) {
			index = slide.length;
		}
		for (var i = 0; i < slide.length; i++) {
			slide[i].style.display = "none";
		};
		slide[index-1].style.display = "block";
	}