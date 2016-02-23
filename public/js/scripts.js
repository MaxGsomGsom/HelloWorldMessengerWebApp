
var passCheck = function () {
    var field = $("#passGroup").removeClass("has-error");
    if ($("#pass1").val() == $("#pass2").val() && $("#pass2").val().length>=5) {
        field.addClass("has-success");
        field.removeClass("has-error");
    }
    else {
        field.addClass("has-error");
        field.removeClass("has-success");
    }
}

$(document).ready(function() {

    $(".alert").append(
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
        '</button>'
        );
});


var page = 0;

var loadSearchUsers = function() {

    query = $("#query").val();
    page++;

    $.get( window.location.pathname +  "?query=" + query + "&partial=1&page=" + page, function(data) {
        $("#users_container").append( data );
    });

}
