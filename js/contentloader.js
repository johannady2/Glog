 $(document).ready(function(){
     var defaultContent = 'scan.html';
      $(".content-cont").load(defaultContent);/* default content*/
     
     $('.navbar-nav > li > a[href="'+defaultContent+'"]').parent().addClass('active');
     
     
     
     $('.navbar-nav > li > a , .navbar-brand').on( "click", function(event) 
        {
            event.preventDefault();
         
          $('.active').removeClass('active');
         
         
         if($(this).attr('class') == 'navbar-brand')
         {
            var navbarContent = $(this).attr('href');
             
             $('.navbar-nav > li > a[href="'+navbarContent+'"]').parent().addClass('active');
         }
         else
         {
              $(this).parent().addClass('active');/* .not('.navbar-brand')*/
        
         }
         
            var loadThisContent = $(this).attr('href');
         
            $(".content-cont").load(loadThisContent);
        });

     
     
 });