

$("ul").on("click","li",function () {
    $(this).toggleClass("done");
    // $(this).span.remove();
});
$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut("slow");
    event.stopPropagation();
});


$("input").keypress(function (event) {
    if (event.which === 13) {
        let mike = $("input").val();
        $("ul").append("<li><span>@</span>" + mike + "</li>");
        $("input").val("");
    }
})