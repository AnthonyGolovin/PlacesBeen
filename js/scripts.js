//Design elements: Have multiple fields for each destination property.
//Design elements: Have 1 field that cylces through questions.
//Design elements: Have have dropdown options for only specific locations.(meh)
//1. Location:City 2. Landmark Visited 3. Date of visit 4. Additional notes.
$(document).ready(function() {
  $("form#eitherOneWorks").submit(function(event) {
    //alert("hi");
    var city = ($(".city").val());
    var landmarkVisited = ($(".landmarkVisited").val());
    var dateOfVisit = ($(".dateOfVisit").val());
    var userInput = new Locations (city, landmarkVisited, dateOfVisit);
    this.placesArray = [];
    this.placesArray.push(userInput);
    // (".input1").append(userInput);

    console.log(this.placesArray);
    console.log(Locations);
    alert(userInput);
    console.log(userInput);
    console.log(city);


    event.preventDefault();
    // $(".input1").append(trip1.city + trip1.landmarkVisited + trip1.dateOfVisit);
    $(".input1").append(userInput.city + ("<br>"));
    console.log(trip1);


  });
  // Business Logic for Location Objects ---------

  function Locations(city, landmarkVisited, dateOfVisit) {
  this.city = city,
  this.landmarkVisited = landmarkVisited,
  this.dateOfVisit = dateOfVisit
}

// Locations.prototype.locationFull = function() {
function locationsDataBase() {
  this.placesArray =[];
  this.currentId = 0
}

locationsDataBase.prototype.addLocation = function(city,landmarkVisited,dateOfVisit) {
  location.id = this.assignId();
  this.placesArray.push(location);
}
//   return this.city + " " + this.landmarkVisited + " " + this.dateOfVisit;
// }
  // Business Logic for LocationsDataBase ---------

  locationsDataBase.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }



});

var trip1 = {
  city: "Seattle",
  landmarkVisited: "Buildings",
  dateOfVisit: "Today",
};
//
// var trip2 = {
//   city: "Atlanta",
//   landmarkVisited: "concrete",
//   dateOfVisit: "Yesterday",
// };
