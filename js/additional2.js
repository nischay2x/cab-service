$(document).ready(function() {
    $("#appendedInputButton").keyup(function() {
        var query = $("#appendedInputButton").val();
        $.ajax({
            url: 'location.php',
            type: 'GET',
            data: {
                q: query
            },
            success: function(data) {
                $("#appendedInputButton_ul").show();
                $("#appendedInputButton_ul").html(data);
                $('.select-city').each(function() {
                    var value = this.innerHTML;
                    $(this).click(function() {
                        $("#appendedInputButton").val(value);
                        $("#appendedInputButton_ul").hide();
                    });
                });
            }
        });
    });

    $("#pickup_location_oneway").keyup(function() {
        var query = $("#pickup_location_oneway").val();
        $.ajax({
            url: 'location.php',
            type: 'GET',
            data: {
                q: query
            },
            success: function(data) {
                $("#pickup_location_oneway_ul").show();
                $("#pickup_location_oneway_ul").html(data);
                $('.select-city').each(function() {
                    var value = this.innerHTML;
                    $(this).click(function() {
                        $("#pickup_location_oneway").val(value);
                        $("#pickup_location_oneway_ul").hide();
                    });
                });
            }
        });
    });

    $("#drop_location_oneway").keyup(function() {
        var query = $("#drop_location_oneway").val();
        $.ajax({
            url: 'location.php',
            type: 'GET',
            data: {
                q: query
            },
            success: function(data) {
                $("#drop_location_oneway_ul").show();
                $("#drop_location_oneway_ul").html(data);
                $('.select-city').each(function() {
                    var value = this.innerHTML;
                    $(this).click(function() {
                        $("#drop_location_oneway").val(value);
                        $("#drop_location_oneway_ul").hide();
                    });
                });
            }
        });
    });

    $("#pickup_location_round").keyup(function() {
        var query = $("#pickup_location_round").val();
        $.ajax({
            url: 'location.php',
            type: 'GET',
            data: {
                q: query
            },
            success: function(data) {
                $("#pickup_location_round_ul").show();
                $("#pickup_location_round_ul").html(data);
                $('.select-city').each(function() {
                    var value = this.innerHTML;
                    $(this).click(function() {
                        $("#pickup_location_round").val(value);
                        $("#pickup_location_round_ul").hide();
                    });
                });
            }
        });
    });

    $("#drop_location_round").keyup(function() {
        var query = $("#drop_location_round").val();
        $.ajax({
            url: 'location.php',
            type: 'GET',
            data: {
                q: query
            },
            success: function(data) {
                $("#drop_location_round_ul").show();
                $("#drop_location_round_ul").html(data);
                $('.select-city').each(function() {
                    var value = this.innerHTML;
                    $(this).click(function() {
                        $("#drop_location_round").val(value);
                        $("#drop_location_round_ul").hide();
                    });
                });
            }
        });
    });
    $('.fare-box').each(function() {
        var ele = $(this);
        ele.click(function() {
            $('#popular_fair_modal').modal();
            var title = $(this).find('h4').html();
            $('#popular_fair_modal_title').html(title);
            $('#fair_route').val(title);
        });
    });
});

function sendInquiryOneWay() {
    var formType = $('#service_type').val();
    var returnDate = "";
    var drop = "";
    if (formType == 1) {
        var pickup = $('#pickup_location_oneway').val();
        drop = $('#drop_location_oneway').val();
        var bookingDate = $('#pickup-date').val();

    } else if (formType == 2) {
        var pickup = $('#pickup_location_round').val();
        drop = $('#drop_location_round').val();
        var bookingDate = $('#pickup-date-r').val();
        returnDate = $('#pickup-r-date').val();
    } else if (formType == 3) {
        var pickup = $('#appendedInputButton_l').val();
        var bookingDate = $('#pickup-date-l').val();
    }

    var name = $('#name_oneway').val();
    var mobile = $('#mobile_oneway').val();
    var carType = $('#car_type').val();
    $.ajax({
        url: "submitinq2.php",
        data: {
            pickup: pickup,
            drop: drop,
            bd: bookingDate,
            name: name,
            mobile: mobile,
            r_date: returnDate,
            car_type: carType
        },
        //method:GET,
        success: function(result) {
            $('#exampleModalCenter').modal('hide');
            $('#successmessage').modal();
        }
    });
}

function sendInqPopular() {
    var route = $('#fair_route').val();
    var carType = $('#car_type_fair').val();
    var name = $('#name_fair').val();
    var mobile = $('#mobile_fair').val();

    $.ajax({
        url: "submitinq2.php",
        data: {
            route: route,
            name: name,
            mobile: mobile,
            car_type: carType
        },
        //method:GET,
        success: function(result) {
            $('#popular_fair_modal').modal('hide');
            $('#successmessage').modal();
        }
    });
}

function outstationmodal(val = 0) {
    //var name = $('#name_vc').val();
    //var mobile = $('#mobile_vc').val();
    var vehicle = '';
    if (val == 1) {
        vehicle = 'HatchBack';
        $('#vc_modal_title').html('Out Station-HatchBack');
    } else if (val == 2) {
        vehicle = 'Sedan';
        $('#vc_modal_title').html('Out Station-Sedan');
    } else if (val == 3) {
        vehicle = 'SUV';
        $('#vc_modal_title').html('Out Station-SUV');
    } else if (val == 4) {
        vehicle = 'Innova';
        $('#vc_modal_title').html('Out Station-Innova');
    } else if (val == 5) {
        vehicle = 'Traveller';
        $('#vc_modal_title').html('Out Station-Traveller');
    }
    $('#car_type_vc').val(vehicle);
    $('#out_station_modal').modal();
    return false;
}

function sendInqOutStation() {
    var carType = $('#car_type_vc').val();
    var name = $('#name_vc').val();
    var mobile = $('#mobile_vc').val();
    $.ajax({
        url: "submitinq2.php",
        data: {
            name: name,
            mobile: mobile,
            car_type_text: carType
        },
        //method:GET,
        success: function(result) {
            $('#out_station_modal').modal('hide');
            $('#successmessage').modal();
        }
    });
}

function sendSimpleInq() {
    var name = $('#name_simple').val();
    var mobile = $('#mobile_simple').val();
    $.ajax({
        url: "submitinq2.php",
        data: {
            name: name,
            mobile: mobile
        },
        //method:GET,
        success: function(result) {
            $('#simple_modal').modal('hide');
            $('#successmessage').modal();
        }
    });
}