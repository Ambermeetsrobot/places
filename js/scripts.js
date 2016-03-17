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

    var newPlace = new Place(inputtedPlace, inputtedLocation, inputtedLandmarks, inputtedTime);

    (".new-places").append(newPlace.place);

    $(".placedetails").last().click(function() {
      ("show-details").show();
      $("#show-details h2").text(newPlace.place);
      $(".new-place").text(newPlace.place);
      $(".new-location").text(newLocation.location);
      $(".new-landmarks").text(newLandmarks.landmarks);
      $(".new-time").text(newTime.time);
      debugger;
    });

    $("input#new-place").val("");
    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
  });
});
