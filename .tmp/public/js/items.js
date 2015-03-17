$(document).ready(function () {
    /*
     * Toggles the list's items visability on clicking button
    */
        $('#itemCntBtn').click(function (){
            $($(this).parents('.list-box')).children("#list-items").toggle();
        });

    /*
     * Toggles the new item dialog form visability on clicking button
    */
        $("#addItemBtn").click(function () {
            $("#newItemModal").toggle();
        });

    /*
     * Adds an item to a given list on clicking button
    */
        $('#newItemSubmit').click(function (){
            var listId = $(this).parents('.list-box')[0].id;
            var title = $("#title").val();
            var dueDate = $("#dueDate").val();
            $.ajax({
                type: 'POST',
                url: '/item/create?list='+listId+'&title='+title+'&dueDate='+dueDate,
                dataType: 'html',
                success: function(html, textStatus) {
                    alert("Added item record!");
                },
                error: function(err) {
                    alert('An error occurred!' + err);
                }
            });
        });
});
