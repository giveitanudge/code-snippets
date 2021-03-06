// This code snippet is designed to work standalone and  
// can be added to any page serving video using the 
// Cloudinary Video Player. 

// Set your Nudge Unique ID / Account ID here (Required)
var ndgAccountID = 'NUDGE_UNIQUE_ID'; 

// Set a content ID for the video here (Recommended)
var ndgContentID = 'CUSTOM_CONTENT_ID';

// Register events to track
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
    // DEBUG Uncomment below to view event logs
    // console.log(eventType);
  })
});

// Add Nudge Event Pixels to page for each event to track within Nudge
function addTrackingPixel(eventType) {
  var ndgURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
  var pixel = document.createElement("IMG");
  pixel.setAttribute("src", "https://e.ndg.io/v1/v.gif?owner_id=" + ndgAccountID + "&content_id=" + ndgContentID + "&name=" + eventType + "&url=" + ndgURL);
  pixel.setAttribute("height", "1");
  pixel.setAttribute("width", "1");
  document.body.appendChild(pixel);
}