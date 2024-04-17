$(document) .ready(function() {
    $("#search").keyup(function() {
        
    });
});


var albums = $(".album");
$(albums).show();

var searchTerm = $ (this).val ().toLocalLowerCase()

albums.each(function() {
    if($(this).text().toLocalLowerCase().search(searchTerm) == -1) {
        $(this).hide();
    }
});