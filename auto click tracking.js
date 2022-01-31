// The below code needs to be added AFTER the Nudge tracking snippet to ensure it fires correctly. 
// Remember to wrap the code in <script> tags when adding into a .html or other non .js type file. 

$('#nudge-track').on('click', function () {
    var $el = $(this);
    ndg($el.data('nudge'));
    //Uncomment below to view event in the browser console. 
    //console.log($el.data('nudge'));
});
