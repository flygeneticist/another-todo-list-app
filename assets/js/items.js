$(document).ready(function () {
    /*
     * Toggles the list's items visability on clicking button
    */
        $('#itemCntBtn').click(function (){
            $($(this).parents('.list-box')).children("#list-items").toggle();
        });
    /*
     * Adds an item to a given list on clicking button
    */
        $('#addItemBtn').click(function (){
            var listId = $(this).parents('.list-box').id;
        });
});
