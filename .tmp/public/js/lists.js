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
            var box = $(this).parents('.list-box');
            var id = box[0]["id"];
            console.log("ID:"+id);
            $.ajax({
                type: 'POST',
                url: '/list/delete?id='+id,
                dataType: 'html',
                success: function(html, textStatus) {
                    console.log("Deleted record: " + id);
                },
                error: function(err) {
                    alert('An error occurred!' + err);
                }
            });
            $('#'+id).fadeOut(300, function() { $('#'+id).remove(); });
        });
});
