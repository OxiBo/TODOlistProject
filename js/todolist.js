const $list = $("ul");
const $item = "li";
const $delete = "span";
const $input = $("input[type='text']");
const $plus = $(".fa-plus");

$list.on("click", $item, function() {
    $(this).toggleClass("completed");
})

$list.on("click", $delete, function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
})

$input.on("keypress", function(event) {
if(event.which === 13) {
    let todoText = $input.val();
    $(this).val("");
    $("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span>${todoText}`);
}
})

$plus.on("click", function() {
    $input.fadeToggle();
})


