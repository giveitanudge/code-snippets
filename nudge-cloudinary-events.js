// This code snippet is designed to work standalone and  
// can be added to any page serving video using the 
// Cloudinary Video Player. 

// List of video events to track in Nudge
var eventTypes = ['play', 'pause', 'mute', 'unmute', 'percentsplayed', 'ended'];

eventTypes.forEach(function(eventType) {
  player.on(eventType, function(event) {
  var ndgEventCapture = eventType;
    if (eventType == 'percentsplayed') {
      ndgEventCapture = event.eventData.percent + '_Percent';
      addTrackingPixel(ndgEventCapture);
    } else if (eventType == 'ended') {
      ndgEventCapture = 'play_complete';
      addTrackingPixel(ndgEventCapture);
    } else {
      addTrackingPixel(ndgEventCapture);
    } 
    //console.log(ndgEventCapture); // Uncomment to view event logs
  })
});

// Function to add Nudge Event Pixels to page and track the events within Nudge
function addTrackingPixel(ndgEventCapture) {
  var ndgAccountID = 'NUDGE UNIQUE ID'; // Paste your Nudge Unique ID / Account ID here
  var ndgContentID = 'CUSTOM CONTENT ID'; // Set a content ID for the video here

  var ndgURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
  var pixel = document.createElement("IMG");
  pixel.setAttribute("src", "https://e.ndg.io/v1/v.gif?owner_id=" + ndgAccountID + "&content_id=" + ndgContentID + "&name=" + ndgEventCapture + "&url=" + ndgURL);
  pixel.setAttribute("height", "1");
  pixel.setAttribute("width", "1");
  document.body.appendChild(pixel);
}
