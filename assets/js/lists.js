$(document).ready(function () {
    /*
     * Toggles the new list dialog form visability on clicking button
    */
        $(".list-trigger").click(function () {
            $("#newListModal").toggle();
        });

    /*
     * Deletes the list on clicking button
    */
        $(document).on("click", "#deleteListBtn", function (){
            var id = $(this).parents('.list-box').id;
            console.log(id);
            $(this).parents('.list-box').fadeOut(300, function() { $(this).remove(); });
        });
});
