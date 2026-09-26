$(document).ready(function () {
    const $taskForm = $("#task-form");
    const $taskInput = $("#task-input");
    const $taskList = $("#task-list");

    function createTask(taskText) {
        const $item = $("<li>", { class: "task-item" });
        const $checkbox = $("<input>", {
            class: "task-checkbox",
            type: "checkbox",
            "aria-label": `Mark ${taskText} as complete`,
        });
        const $label = $("<label>", { class: "task-label" });
        const $text = $("<span>", { class: "task-text" }).text(taskText);
        const $editButton = $("<button>", {
            class: "edit-button",
            type: "button",
            "aria-label": `Edit ${taskText}`,
            text: "\u270e",
        });
        const $deleteButton = $("<button>", {
            class: "delete-button",
            type: "button",
            "aria-label": `Delete ${taskText}`,
            text: "×",
        });

        $label.append($checkbox, $text);
        $item.append($label, $editButton, $deleteButton);
        $taskList.append($item);
    }

    function finishEditing($item, saveChanges) {
        const $editor = $item.find(".task-editor");
        if (!$editor.length) {
            return;
        }

        const $editButton = $item.find(".edit-button");
        const previousText = $editor.data("original-text");
        const editedText = $editor.val().trim();
        const taskText = saveChanges && editedText ? editedText : previousText;
        const $text = $("<span>", { class: "task-text" }).text(taskText);

        $editor.replaceWith($text);
        $item.removeClass("is-editing");
        $editButton.text("\u270e").attr("aria-label", `Edit ${taskText}`);
        $item
            .find(".task-checkbox")
            .attr("aria-label", `Mark ${taskText} as complete`);
    }

    $taskForm.on("submit", function (event) {
        event.preventDefault();

        const taskText = $taskInput.val().trim();
        if (!taskText) {
            $taskInput.trigger("focus");
            return;
        }

        createTask(taskText);
        $taskInput.val("").trigger("focus");
    });

    $taskList.on("change", ".task-checkbox", function () {
        $(this).closest(".task-item").toggleClass("is-complete", this.checked);
    });

    $taskList.on("click", ".edit-button", function () {
        const $item = $(this).closest(".task-item");
        if ($item.hasClass("is-editing")) {
            finishEditing($item, true);
            return;
        }

        const $text = $item.find(".task-text");
        const taskText = $text.text();
        const $editor = $("<input>", {
            class: "task-editor",
            type: "text",
            maxlength: 160,
            "aria-label": `Edit task: ${taskText}`,
        })
            .val(taskText)
            .data("original-text", taskText);

        $text.replaceWith($editor);
        $item.addClass("is-editing");
        $(this).text("\u2713").attr("aria-label", `Save ${taskText}`);
        $editor.trigger("focus").trigger("select");
    });

    $taskList.on("keydown", ".task-editor", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            finishEditing($(this).closest(".task-item"), true);
        } else if (event.key === "Escape") {
            finishEditing($(this).closest(".task-item"), false);
        }
    });

    $taskList.on("click", ".delete-button", function () {
        $(this).closest(".task-item").remove();
    });
});
