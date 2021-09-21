// Declare which Cloudinary events to capture
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
  var ndgAccountID = 'NUDGE ACCOUNT ID';
  var ndgContentID = 'CUSTOM CONTENT ID';

  var pixel = document.createElement("IMG");
  pixel.setAttribute("src", "https://e.ndg.io/v1/v.gif?owner_id=" + ndgAccountID + "&content_id=" + ndgContentID + "&name=" + ndgEventCapture);
  pixel.setAttribute("height", "1");
  pixel.setAttribute("width", "1");
  document.body.appendChild(pixel);
}
