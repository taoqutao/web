var attrId, attrName;
function fhd_input(obj) {
    attrId = $(obj).attr("attrId");
    attrName = $(obj).val();
    var dd = $("#select1 dd");
    $(".fhd_div .select .select-list dd").removeClass("selected");
    if (attrName.length > 0) {
        for (var i = 0; i < dd.length; i++) {
            var text = $(dd[i]).text();
            if (text == attrName) {
                $(dd[i]).addClass("selected");
            }
        }
    }
    $('.chj_fhd').show();
    $('.chj_fhd').height($(document).height());
    $('.chj_min_fhd').slideDown(200);
}

$(function () {
    $("#select1 dd").click(function () {
        $(".fhd_div .select .select-list dd").removeClass("selected");
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected").siblings().removeClass("selected");
        }
    });

    $(".cz_button").click(function () {
        $(".fhd_div .select .select-list dd").removeClass("selected");
        $(".select-result dl").html("");
    })

    $(".dz_button").click(function () {
        var id_a = $("#select1 dd.selected a").text();
        $("#task_keys_area" + attrId).val(id_a);
        $('.chj_fhd').hide();
        $('.chj_min_fhd').slideUp(200);
    })

    /*$(".select dd").click(function () {
     if ($(".select-result dd").length > 1) {
     $(".select-no").hide();
     } else {
     $(".select-no").show();
     }
     });*/

});