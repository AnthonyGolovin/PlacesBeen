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
    //var adding = new Locations

    //placesArray.push(adding);
    //console.log(adding);
    // locaton.id = assignId();
    // placesArray.push(Locations);
    console.log(this.placesArray);
    console.log(Locations);
    alert(userInput);
    console.log(userInput);
    console.log(city);
    alert(city);
    alert(landmarkVisited);
    alert(dateOfVisit);

    event.preventDefault();
  });
  // Business Logic for Location Objects ---------

  function Locations(city, landmarkVisited, dateOfVisit) {
  this.city = city,
  this.landmarkVisited = landmarkVisited,
  this.dateOfVisit = dateOfVisit
}

// Locations.prototype.locationFull = function() {
//   return this.city + " " + this.landmarkVisited + " " + this.dateOfVisit;
// }
  // Business Logic for LocationsDataBase ---------
  function LocationsDataBase() {
  this.placesArray =[];
  this.currentId = 0
  }

  LocationsDataBase.prototype.addLocation = function(location) {
    location.id = this.assignId();
    this.placesArray.push(location);
  }

  LocationsDataBase.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }


  // LocationsDataBase.prototype.deleteLocation = function(id) {
  //   for (var i=0; i<this.locations.length; i++) {
  //     if (this.locations[i]) {
  //       if (this.location[i].id == id) {
  //         delete this.locations[i];
  //         return true;
  //     }
  //   }
  // };
  // return false;
  // };


});
