var calApp;
calApp = angular.module('calApp', ['ngAnimate'])
calApp.controller('calCtrl',  function($scope, $sce) {
  
  $scope.eventsVisible = 5; // How many events should be shown?
  
  $scope.events = [
    {
      title    : "Bezoek Rijksmuseum",
      date     : 1453786245352,
      location : "Rijksmuseum",
    },
    {
      title    : "BBQ in the park",
      date     : 1456813856559,
      location : "16 Ferdinando Gardens Hampton",
    },
    {
      title    : "Good Friday",
      date     : 1459290634807,
      location : "Flinders St, Melbourne",
    },
    {
      title    : "Family Day",
      date     : 1459290634807,
      location : "Collins St, Melbourne",
    },
    {
      title    : "Concert In Altona",
      date     : 1461990642447,
      location : "Altona Beach",
    }
  ];
  
  $scope.getMap = function(event){
    // Creates a Google Map URL
    return "https://www.google.nl/maps/place/mbo+%7C+Mediacollege+Amsterdam/@52.3824502,4.8300032,14z/data=!4m6!3m5!1s0x47c5e28849730d2f:0x5dffd675d740eddb!8m2!3d52.3910058!4d4.8560905!16s%2Fg%2F1v8gb6q7?hl=nl&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" + event.location;
  };
    
 $scope.getEvents = function(){
  // Gets x number of events , using scope.eventsVisible 
  // to determine how many events to show
   var events = [];
   for(x = 0; x<$scope.eventsVisible; x++){
     events.push($scope.events[x]);
   }
   return events;
 } 
 
 $scope.hiddenEvents = function(){
   // Calculates how many events are hidden
   var remaining;
   if($scope.events.length - $scope.eventsVisible > 0){
     remaining = $scope.events.length - $scope.eventsVisible;
   } else{
     remaining = 0;
   }
   
   return remaining;
 }
 
 $scope.showHidden = function(){
   // Show hidden events
   $scope.eventsVisible = $scope.events.length;
 }
 $scope.hideEvents = function(){
   // Hide events
   $scope.eventsVisible = 3;
 } 
 
  
});