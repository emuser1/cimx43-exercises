let rain = document.getElementsByClassName("rain");

let waypoint = new Waypoint({
    element: rain,
    handler: function(direction) {
      console.log("Scrolled to waypoint!")
    }
  })