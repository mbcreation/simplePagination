(function( $ ){

  $.fn.simplePagination = function( options ) {  

   	var pagedItemContainer = this.selector;

    var settings = $.extend( {
      'transition' : 0,
      'pagedItem' : '.pagedItem',
      'navContainer' : '#navContainer',
      'itemsPerPage' : 10

    }, options);

    return this.each(function() {        
		 
		var transition = settings.transition;
		var pagedItem = $(settings.pagedItem);
		
		var navContainer = $(settings.navContainer);
		var itemsPerPage = settings.itemsPerPage;

		var listes = $(pagedItem,pagedItemContainer);
		var totalItems = listes.length;
		var numberOfPages = Math.ceil(totalItems/itemsPerPage);
		

		$(pagedItem,pagedItemContainer).hide();

		// page une
		listes.slice(0, itemsPerPage).addClass("page1 pageVisible").show();

		// autres page

		for(i=1;i<numberOfPages+1;i++){
		listes.slice(i*itemsPerPage, (i*itemsPerPage)+itemsPerPage).addClass("page"+(i+1));
		}
			
		var htmlNavigation = '';
		var currentLink = 1;

		htmlNavigation += '<a class="pageLink active link0" href="#" rel="page1">1</a>';
		while(numberOfPages > currentLink){
				htmlNavigation += '<a class="pageLink link'+currentLink+'" href="#" rel="page'+(currentLink + 1)+'">'+ (currentLink + 1) +'</a>';
				currentLink++;
		}
		if(numberOfPages>1)
		navContainer.html(htmlNavigation);


		$('a.pageLink',navContainer).live('click',function(e){

	  		e.preventDefault();

			var current = $('a.link'+$(this).index(),navContainer);

	  		if(!current.hasClass('active')){

		 		$('a.pageLink',navContainer).removeClass('active');
		  		current.each(function(){$(this).addClass('active');});
		  		nextpage = $(this).attr('rel');
		  		$('.pageVisible').hide(transition).removeClass('pageVisible');
		  		$('.'+nextpage).addClass('pageVisible').show(transition);
		  	}
	  	
	  	})
	  
		


    });

  };
})( jQuery );	



		
	



		
	 
