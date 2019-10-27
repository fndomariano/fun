$(document).ready(function() {

    getMessage();

    
});

var getMessage = function () {
    $.ajax({
        type: "get",
        url: "messages.json",
        dataType: "json",
        success: function(data) {
            var html = '';
            var messages = shuffle(data.messages);
            
            $.each(messages, function(key, value) {
                html += '<div>'+value+'</div>';
            }); 

            $('.message').html(html);         
            
            $('.message').slick({
                dots: false,
                autoplay: true,
                autoplaySpeed: 3500,
                infinite: true,
                speed: 500,
                slidesToShow: 1,                
            });
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
