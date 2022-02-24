// The below code needs to be added AFTER the Nudge tracking snippet to ensure it is registered to the page correctly. 
// Remember to wrap the code in <script> tags when adding into a .html, .php or other non .js type file. 

document.getElementById("nudge-track").addEventListener("click", function() {
  ndg(this.getAttribute('data-nudge'));
});
