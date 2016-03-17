function Place(place, location, landmarks, time) {
  this.newPlace = place;
  this.newLocation = location;
  this.newLandmarks = landmarks;
  this.newTime = time;
}

$(document).ready(function(){
  $("form#places").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTime = $("input#new-time").val();

    var newSpots = new Place(inputtedPlace, inputtedLocation, inputtedLandmarks, inputtedTime);

    $("ul#visited").append("<li><span class='visit'>" + newSpots.newPlace + "</span></li>");

    $(".visit").last().click(function() {
      $("#show-details").show();
      $("#show-details h2").text(newSpots.newPlace);
      $(".new-place").text(newSpots.newPlace);
      $(".new-location").text(newSpots.newLocation);
      $(".new-landmarks").text(newSpots.newLandmarks);
      $(".new-time").text(newSpots.newTime);
    });

    $("input#new-place").val("");
    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
  });
});
