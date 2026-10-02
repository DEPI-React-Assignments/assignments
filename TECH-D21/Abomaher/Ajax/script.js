$(function () {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const postsUrl = "https://jsonplaceholder.typicode.com/posts";
    const postsCache = new Map();
    const pendingPosts = new Map();
    let activeUserId = null;

    function showUsersError() {
        $("#user-count").text("Unable to load users");
        $("#user-tabs")
            .empty()
            .append(
                $("<span>", { class: "tabs-message", role: "alert" }).text(
                    "Users could not be loaded.",
                ),
                $("<button>", {
                    class: "retry-button",
                    id: "retry-users",
                    type: "button",
                }).text("Try again"),
            );
    }

    function loadUsers() {
        $("#user-count").text("Loading users");
        $("#user-tabs").html(
            '<span class="tabs-message" role="status">Loading users…</span>',
        );

        $.ajax({
            url: usersUrl,
            method: "GET",
            dataType: "json",
            timeout: 10000,
        })
            .done(function (users) {
                if (!Array.isArray(users)) {
                    showUsersError();
                    return;
                }

                $("#user-count").text(
                    users.length + (users.length === 1 ? " user" : " users"),
                );
                const $tabs = $("#user-tabs").empty();

                users.forEach(function (user, index) {
                    const label =
                        user.name || user.username || "User " + user.id;
                    const $tab = $("<button>", {
                        class: "user-tab",
                        type: "button",
                        role: "tab",
                        id: "user-tab-" + user.id,
                        "aria-controls": "posts-panel",
                        "aria-selected": "false",
                        tabindex: index === 0 ? "0" : "-1",
                    })
                        .attr("data-user-id", user.id)
                        .text(label);

                    $tabs.append($tab);
                });
            })
            .fail(showUsersError);
    }

    function setActiveTab($tab) {
        $(".user-tab").attr({ "aria-selected": "false", tabindex: "-1" });
        $tab.attr({ "aria-selected": "true", tabindex: "0" });
        activeUserId = String($tab.attr("data-user-id"));
        $("#posts-panel").attr("aria-labelledby", $tab.attr("id"));
    }

    function showMessage(message, isError) {
        const role = isError ? "alert" : "status";
        const $message = $("<p>", { role: role }).text(message);
        $("#posts-panel")
            .empty()
            .append(
                $("<div>", { class: "message-state" }).append(
                    $(
                        '<span class="loading-indicator" aria-hidden="true"></span>',
                    ),
                    $message,
                ),
            );
    }

    function renderPosts(userId, posts) {
        if (activeUserId !== String(userId)) {
            return;
        }

        const $list = $("<ul>", { class: "post-list" });

        if (posts.length === 0) {
            $list.append($("<li>").text("No posts found for this user."));
        } else {
            posts.forEach(function (post) {
                $list.append($("<li>").text(post.title || "Untitled post"));
            });
        }

        $("#posts-panel").empty().append($list);
    }

    function loadPosts(userId) {
        const id = String(userId);
        if (postsCache.has(id)) {
            renderPosts(id, postsCache.get(id));
            return;
        }

        if (pendingPosts.has(id)) {
            showMessage("Loading post titles…", false);
            return;
        }

        showMessage("Loading post titles…", false);
        const request = $.ajax({
            url: postsUrl,
            method: "GET",
            data: { userId: id },
            dataType: "json",
            timeout: 10000,
        });

        pendingPosts.set(id, request);
        request
            .done(function (posts) {
                pendingPosts.delete(id);
                if (!Array.isArray(posts)) {
                    if (activeUserId === id) {
                        showMessage(
                            "The server returned an unexpected response.",
                            true,
                        );
                    }
                    return;
                }

                postsCache.set(id, posts);
                renderPosts(id, posts);
            })
            .fail(function () {
                pendingPosts.delete(id);
                if (activeUserId === id) {
                    const $message = $("<p>", { role: "alert" }).text(
                        "Post titles could not be loaded.",
                    );
                    const $retry = $("<button>", {
                        class: "retry-button",
                        type: "button",
                    }).text("Try again");
                    $retry.attr("data-retry-user", id);
                    $("#posts-panel")
                        .empty()
                        .append(
                            $("<div>", { class: "message-state" }).append(
                                $message,
                                $retry,
                            ),
                        );
                }
            });
    }

    $("#user-tabs").on("click", ".user-tab", function () {
        const $tab = $(this);
        setActiveTab($tab);
        loadPosts($tab.attr("data-user-id"));
    });

    $("#user-tabs").on("keydown", ".user-tab", function (event) {
        const $tabs = $(".user-tab");
        const currentIndex = $tabs.index(this);
        let nextIndex;

        if (event.key === "ArrowRight") {
            nextIndex = (currentIndex + 1) % $tabs.length;
        } else if (event.key === "ArrowLeft") {
            nextIndex = (currentIndex - 1 + $tabs.length) % $tabs.length;
        } else if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = $tabs.length - 1;
        } else {
            return;
        }

        event.preventDefault();
        $tabs.eq(nextIndex).trigger("focus").trigger("click");
    });

    $("#user-tabs").on("click", "#retry-users", loadUsers);

    $("#posts-panel").on("click", "[data-retry-user]", function () {
        loadPosts($(this).attr("data-retry-user"));
    });

    loadUsers();
});
