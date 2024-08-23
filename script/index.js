$('.show-filters').on('click', function(){
  /*TODO
  1. When our navigation is expanded, collapse it
  2. Change text of show filters to show filters

  3. Otherwise, if the nav if collapsed, expand it
  4. Change the text to say hide filters
  */

  if($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp();
    $('.show-filters').text('Show Filters')
  } else {
    $('.filters-list').slideDown();
    $('.show-filters').text('Hide Filters')
  }


})