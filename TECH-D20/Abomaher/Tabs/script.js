$(function () {
    $(".tab-list").on("click", ".tab", function () {
        const $tab = $(this);
        const tabNumber = $tab.data("tab");

        $(".tab").removeClass("is-active");
        $tab.addClass("is-active");
        $(".tab-panel").text(`Content ${tabNumber}`);
    });
});
