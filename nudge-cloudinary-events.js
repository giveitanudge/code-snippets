// List of video events to track in Nudge
var eventTypes = ['play', 'pause', 'mute', 'unmute', 'percentsplayed', 'ended'];

eventTypes.forEach(function(eventType) {
  player.on(eventType, function(event) {
  var ndgEventCapture = eventType;
    if (eventType == 'percentsplayed') {
      ndgEventCapture = event.eventData.percent + '_percent_played';
      addTrackingPixel(ndgEventCapture);
      } 
    else {
        addTrackingPixel(ndgEventCapture);
    }
  })
});

// Add ndgEventPixel to page / track event in Nudge
function addTrackingPixel(ndgEventCapture) {
  var ndgAccountID = 'NUDGE UNIQUE ID'; // Paste your Nudge Unique ID / Account ID here
  var ndgContentID = 'CUSTOM CONTENT ID'; // Set a content ID for the video here

  var pixel = document.createElement("IMG");
  pixel.setAttribute("src", "https://e.ndg.io/v1/v.gif?owner_id=" + ndgAccountID + "&content_id=" + ndgContentID + "&name=" + ndgEventCapture);
  pixel.setAttribute("height", "1");
  pixel.setAttribute("width", "1");
  document.body.appendChild(pixel);
}
