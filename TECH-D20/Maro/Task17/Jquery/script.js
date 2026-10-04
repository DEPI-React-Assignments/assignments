$(".tab").on("click", function () {

    $(".tab").removeClass("active");

    $(this).addClass("active");


    if ($(this).attr("id") == "tab1") {

        $("#content").text("Content 1");

    }

    else if ($(this).attr("id") == "tab2") {

        $("#content").text("Content 2");

    }

    else if ($(this).attr("id") == "tab3") {

        $("#content").text("Content 3");

    }

    else if ($(this).attr("id") == "tab4") {

        $("#content").text("Content 4");

    }

});