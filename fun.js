$(document).ready(function() {

    getMessages();

});

var getMessages = function () {
    $.ajax({
        type: "get",
        url: "messages.json",
        dataType: "json",
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, status, error){
            console.log("XHR: " + xhr);
            console.log("Status: " + status);
            console.log("Error: " + error);
        }
    });
};

var shuffle = function(arr) {
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
}
