// This code snippet is designed to work standalone and  
// can be added to any page serving video using the 
// Cloudinary Video Player. 

// Set your Nudge Unique ID / Account ID here (Required)
var ndgAccountID = 'NUDGE_UNIQUE_ID'; 

// Set a content ID for the video here (Recommended)
var ndgContentID = 'CUSTOM_CONTENT_ID';

// Register events to track
var eventTypes = ['play', 'pause', 'mute', 'complete'];

eventTypes.forEach(function(eventType) {
  jwplayer().on(eventType, function(event) {
  var ndgEventCapture = eventType;
    if (eventType == 'play') {
      addTrackingPixel(eventType);
    } else if (eventType == 'complete') {
      eventType = 'play_complete';
      addTrackingPixel(eventType);
    } else {
      addTrackingPixel(eventType);
    } 
    // DEBUG Uncomment below to view event logs
    // console.log(eventType);
  })
});

// Add Nudge Event Pixels to page for each event to track within Nudge
function addTrackingPixel(eventType) {
  var pageURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
  var pixel = document.createElement("IMG");
  pixel.setAttribute("src", url);
  pixel.setAttribute("height", "1");
  pixel.setAttribute("width", "1");
  document.body.appendChild(pixel);
}