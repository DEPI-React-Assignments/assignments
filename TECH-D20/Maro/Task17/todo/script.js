var editTask = null;


$( "#add" ).on( "click", function () {

    var task = $( "#task" ).val();


    if (task == "") {
        return;
    }


    if (editTask != null) {

        editTask.find("span").text(task);

        editTask = null;

        $("#task").val("");

        return;
    }


    $("#tasks").append(
        '<li>' +
            '<input type="checkbox">' +
            '<span>' + task + '</span>' +
            '<button class="edit">Edit</button>' +
            '<button class="delete">Delete</button>' +
        '</li>'
    );


    $("#task").val("");

});


$("#tasks").on("click", ".edit", function () {

    editTask = $(this).parent();

    var oldTask = editTask.find("span").text();

    $("#task").val(oldTask);

});


$("#tasks").on("click", ".delete", function () {

    $(this).parent().remove();

});


$("#tasks").on("change", "input[type='checkbox']", function () {

    if ($(this).prop("checked")) {

        $(this).parent().addClass("done");

    }
    else {

        $(this).parent().removeClass("done");

    }

});