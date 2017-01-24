jQuery( document ).ready(function() {



$( "#show-filters" ).click(function() {
 	jQuery('.lesFiltres').slideDown("slow");
 	jQuery('#close-filters').fadeIn();
});

$("#close-filters" ).click(function() {
 	jQuery('.lesFiltres').slideUp("slow");
 	jQuery('#close-filters').fadeOut("slow");
});
	

});