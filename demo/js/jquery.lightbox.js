$.fn.lightbox = function() {
    jQuery(document).ready(function($) {
        $('.lightbox-activate').click(function(e) {
            e.preventDefault();
            var bigImg_href = $(this).attr("href");
            // see if lightbox is open
            if ($('#lightbox').length > 0) {
                $('#lightbox-content').html('<img src="' + bigImg_href + '" />');
                $('#lightbox').fadeIn("medium");
            } else { // create and append lightbox
                $('body').append(
                    '<div id="lightbox">' +
                        '<div id="lightbox-content">' +
                            '<img src="' + bigImg_href +'" />' +
                        '</div>' +
                        '<span> Close </span>' +
                    '</div>'
                );
            }
        });
        // Close lightbox
        $('body').on('click', '#lightbox', function() {
            $('#lightbox').fadeOut("medium");
        });
        $('body').on('keyup', function(evt) {
            if (evt.keyCode === 27) {
                $('#lightbox').fadeOut("medium");
            }
        });
    });
}
$("lightbox-activate").lightbox();