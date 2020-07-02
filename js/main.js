/*  slider */
(function($) {
	$(function() {
		$("#client_slider").simplyScroll();
	});
})(jQuery);

(function($) {
	$(function() {
		$("#home_product_slider").simplyScroll();
	});
})(jQuery);
 /*  slider */
/*home product */
$(function(){
            $('.click-me-hydraulic').click(function(){
                $('.hydraulic-content').slideDown(1000);
               
                $('.pneumatic-content').slideUp(1000);
                $('.earth-content').slideUp(1000);
            });
    
            $('.hydraulic-content').click(function(){
                $(this).fadeOut();
            });
    
            $('.click-me-pneumatic').click(function(){
                $('.pneumatic-content').slideDown(1000);
                
                 $('.hydraulic-content').slideUp(1000);
                 $('.earth-content').slideUp(1000);
            });
            
             $('.pneumatic-content').click(function(){
                $(this).fadeOut();
            });
        
            $('.click-me-earth').click(function(){
                $('.earth-content').slideDown(1000);
                
                $('.hydraulic-content').slideUp(1000);
                $('.pneumatic-content').slideUp(1000);
                 
            });
            
             $('.earth-content').click(function(){
                $(this).fadeOut();
            });
        });
/*home product */
/*DROP DOWN MENU */
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );

//Menu Functions
 $(function(){
   $('.home_nav').click(function(){
       $('.home_view').fadeIn(1000);
       
       $('.about_view').fadeOut(1000);
       $('.hydraulic_view').fadeOut(1000);
       $('.pneumatic_view').fadeOut(1000);
       $('.earthmoving_view').fadeOut(1000);
       $('.client_view').fadeOut(1000);
       $('.enquiry_view').fadeOut(1000);
       $('.contact_view').fadeOut(1000);
       
       $('.footer_view').fadeOut(1000);
   });
   
   $('.about_nav').click(function(){
       $('.about_view').fadeIn(1000);
       $('.footer_view').fadeIn(1000);
       
       $('.home_view').fadeOut(1000);
       $('.hydraulic_view').fadeOut(1000);
       $('.pneumatic_view').fadeOut(1000);
       $('.earthmoving_view').fadeOut(1000);
       $('.client_view').fadeOut(1000);
       $('.enquiry_view').fadeOut(1000);
        $('.contact_view').fadeOut(1000);
       
   });
   
   $('.hydraulic_nav').click(function(){
      $('.hydraulic_view').fadeIn(1000); 
      $('.footer_view').fadeIn(1000);
      
      $('.home_view').fadeOut(1000);
      $('.about_view').fadeOut(1000);
      $('.pneumatic_view').fadeOut(1000);
      $('.earthmoving_view').fadeOut(1000);
      $('.client_view').fadeOut(1000);
      $('.enquiry_view').fadeOut(1000);
       $('.contact_view').fadeOut(1000);
   });
   
   $('.pneumatic_nav').click(function(){
      $('.pneumatic_view').fadeIn(1000); 
      $('.footer_view').fadeIn(1000);
      
      $('.home_view').fadeOut(1000);
      $('.about_view').fadeOut(1000);
      $('.hydraulic_view').fadeOut(1000);
      $('.earthmoving_view').fadeOut(1000);
      $('.client_view').fadeOut(1000);
      $('.enquiry_view').fadeOut(1000);
       $('.contact_view').fadeOut(1000);
   });
   
   $('.earthmoving_nav').click(function(){
      $('.earthmoving_view').fadeIn(1000); 
      $('.footer_view').fadeIn(1000);
      
      $('.home_view').fadeOut(1000);
      $('.about_view').fadeOut(1000);
      $('.hydraulic_view').fadeOut(1000);
      $('.pneumatic_view').fadeOut(1000);
      $('.client_view').fadeOut(1000);
      $('.enquiry_view').fadeOut(1000);
       $('.contact_view').fadeOut(1000);
   });
   
   $('.client_nav').click(function(){
      $('.client_view').fadeIn(1000);
      $('.footer_view').fadeIn(1000);
      
      $('.home_view').fadeOut(1000);
      $('.about_view').fadeOut(1000);
      $('.hydraulic_view').fadeOut(1000);
      $('.pneumatic_view').fadeOut(1000);
      $('.earthmoving_view').fadeOut(1000);
      $('.enquiry_view').fadeOut(1000);
       $('.contact_view').fadeOut(1000);
   });
   
   $('.enquiry_nav').click(function(){
      $('.enquiry_view').fadeIn(1000);
      $('.footer_view').fadeIn(1000);
      
      $('.home_view').fadeOut(1000);
      $('.about_view').fadeOut(1000);
      $('.hydraulic_view').fadeOut(1000);
      $('.pneumatic_view').fadeOut(1000);
      $('.earthmoving_view').fadeOut(1000);
      $('.client_view').fadeOut(1000);
      $('.contact_view').fadeOut(1000);
       
   });
   
   $('.contact_nav').click(function(){
      $('.contact_view').fadeIn(1000);
      $('.footer_view').fadeIn(1000);
      
       $('.home_view').fadeOut(1000);
       $('.about_view').fadeOut(1000);
       $('.hydraulic_view').fadeOut(1000);
       $('.pneumatic_view').fadeOut(1000);
       $('.earthmoving_view').fadeOut(1000);
       $('.client_view').fadeOut(1000);
       $('.enquiry_view').fadeOut(1000);
   });
});
 
 //product dropdown
$(function() {
    $('select').material_select();
});
//Enquiry form

