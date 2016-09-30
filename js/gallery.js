$(document).ready(function() {
    $("#lightSlider").lightSlider({
			slideMargin: 0,
			// item: 8,
			autoWidth: true,
      loop: true,
			enableDrag: false
    });
		$(".gallery__item").click(function() {
		    var src = $(this).data("preview");
		    $("#preview").attr("src", src);
		});
});
