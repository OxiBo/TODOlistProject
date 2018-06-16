const $item = $("li");
const $delete = $("span");

$item.on("click", function() {
    $(this).toggleClass("completed");
})

$delete.on("click", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
})

