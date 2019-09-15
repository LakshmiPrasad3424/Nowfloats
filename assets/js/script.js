$(window).on('load', function () {
    $.ajax({
        url: 'https://my.api.mockaroo.com/doctor.json?key=a05177c0',
        type: 'get',
        success: function (data) {
            $('#dynamicContent').empty();
            $('#dynamicContent').append(`<h1><span>welcome to</span> ${data.hospitalName}</h1>
            <p> ${data.type} clinic of Dr.${data.first_name + ' ' + data.last_name} is located in ${data.location},${data.place}.The clinic od
                established in ${data.established.slice(0,4)} and is one of the most reputed clinic in the vicinty.Guided by a clear
                vision... <a href="#">SEE MORE</a></p>`)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var errorMsg = 'Ajax request failed: ' + xhr.responseText;
            console.log(errorMsg);
            b
        }
    });
})


$(document).ready(function () {
    $('.timeslot-header h4').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.timeslot-header h4').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#tab-" + tab_id).addClass('active');
    });


    $('#consult li').on('click', function (e) {
        $(this).parent('#consult').slideToggle().siblings('.purpose-main').find('input').val(e.target.innerText)

        $('.purpose-main').toggleClass('active');
    })

    $(function () {
        $("#datepicker").datepicker();
    });

})


function searchClick(element) {
    if ($(element).hasClass("active")) {
        $(element).stop();
    } else {
        $(element).addClass('active').animate({
            right: "+=60"
        })

        setTimeout(function () {
            $('.close-btn').show();
        }, 2000)
    }

}

function searchClose(element) {
    $('.search-main').animate({
        right: "0"
    }).removeClass('active')

    $(element).hide();
}

function menuClick(element) {
    $(element).toggleClass('active');
    $(element).siblings('ul').toggleClass('active');
}

function purposeDrop(element) {
    $(element).toggleClass('active');
    $(element).siblings('ul').slideToggle();
}
