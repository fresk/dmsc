
$(function(){

  //add a h1 with title for each event to '#events' container
  var container = $("#events");
  $.each(db.events, function(idx, event){
    var event_element = $("<h1>"+event.event+"</h1>");
    container.append(event_element);
  });

});
