// Create the dropdown base
$("<select />").appendTo("nav");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo("nav select");

// Populate dropdown with menu items
$("nav a").each(function () {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("nav select");
});

$("nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});

$(function(){
   // See if this is a touch device
   if ('ontouchstart' in window)
   {
      // Set the correct [touchscreen] body class
      $('body').removeClass('no-touch').addClass('touch');
     
      // Add the touch toggle to show text when tapped
      $('div.boxInner img').click(function(){
         $(this).closest('.boxInner').toggleClass('touchFocus');
      });
   }
});

	//	function showPopup(url) {
	//	newwindow=window.open(url,'name','height=300,width=500,top=300,left=500,resizable');
	//	if (window.focus) {newwindow.focus()}
	//	}
