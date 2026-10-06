$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",

    success: function (data) {

        data.forEach(function (user) {

            var button = $("<button>");

            button.text(user.username);

            button.attr("data-id", user.id);

            $("#users").append(button);

        });

    },

    fail: function (err) {

        console.log(err);

    }
});


$("#users").on("click", "button", function () {

    var userId = $(this).attr("data-id");


    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
        method: "GET",

        success: function (data) {

            $("#postsList").empty();

            data.forEach(function (post) {

                $("#postsList").append(
                    "<li>" + post.title + "</li>"
                );

            });

        },

        fail: function (err) {

            console.log(err);

        }
    });

});