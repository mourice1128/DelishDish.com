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

$("button").click(function(){
    $("textarea").select();
    document.execCommand('copy');
});

// FOR THE COPY BUTTON 

//(function() {

 // 'use strict';

  // click events
//  document.body.addEventListener('click', copy, true);

  // event handler
 // function copy(e) {

    // find target element
   // var
   //   t = e.target,
   //   c = t.dataset.copytarget,
   //   inp = (c ? document.querySelector(c) : null);

    // is element selectable?
  //  if (inp && inp.select) {

      // select text
   //   inp.select();

   //   try {
        // copy text
    //    document.execCommand('copy');
    //    inp.blur();
     // }
    //  catch (err) {
     //   alert('please press Ctrl/Cmd+C to copy');
    //  }

  //  }

 // }

// })();
 END \\

	//	function showPopup(url) {
	//	newwindow=window.open(url,'name','height=300,width=500,top=300,left=500,resizable');
	//	if (window.focus) {newwindow.focus()}
	//	}
