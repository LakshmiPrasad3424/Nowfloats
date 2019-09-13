function searchClick(element) {
    if ($(element).hasClass("active")) {
        $(element).stop();
    } else {
        $(element).addClass('active').animate({
            right: "+=60"
        })
    }

}

function searchClose(element) {
    $('.search-main').removeClass('active').animate({
        right: "0"
    })
}

$(window).on('load',function () {
    $.ajax({
        url: 'https://my.api.mockaroo.com/doctor.json?key=a05177c0',
        type: 'get',
        success: function (data) {
            $('#dynamicContent').append(`<h1><span>welcome to</span> ${data.hospitalName}</h1>
            <p> ${data.type} clinic of Dr.${data.first_name + ' ' + data.last_name} is located in ${data.location},${data.place}.The clinic od
                established in ${data.established.slice(0,4)} and is one of the most reputed clinic in the vicinty.Guided by a clear
                vision... <a href="#">SEE MORE</a></p>`)
            console.log(data, "data");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var errorMsg = 'Ajax request failed: ' + xhr.responseText;
            console.log(errorMsg);b
        }
    });
})