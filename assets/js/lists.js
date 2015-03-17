$(document).ready(function () {
    /*
     * Toggles the new list dialog form visability on clicking button
    */
        $("#newListBtn").click(function () {
            $("#newListModal").toggle();
        });

    /*
     * Deletes the list on clicking button
    */
        $(document).on("click", "#deleteListBtn", function (){
            var box = $(this).parents('.list-box');
            var id = box[0].id;
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

    /*
     * Creates the list on clicking button
    */
        $(document).on("click", "#newListSubmit", function () {
            var title = $("#title").val();
            var userId = $("#userId").val();
            $.ajax({
                type: 'POST',
                url: '/list/create?title='+title+'&userId='+userId,
                dataType: 'html',
                success: function(html, textStatus) {
                    console.log("Added list record: " + title);
                },
                error: function(err) {
                    alert('An error occurred!' + err);
                }
            });

            // jQuery AJAX call for JSON
            $.getJSON('/list/show?userId='+userId, function (data) {
                $.each(data, function () {
                    // Add a table row and cells to the content string
                    listHtml =  '<div class="row list-box" id="'+this._id+'">';
                    listHtml += '<div id="list-header" class="row"><div id="list-title" class="col-md-9">';
                    listHtml += '<h3 id="list-title">'+this.title+'</h3></div>';
                    listHtml += '<div id="list-edits" class="col-md-3">';
                    listHtml += '<button id="itemCntBtn" class="btn btn-info btn-sm" type="button">Items <span class="badge">'+(this.items).length+'</span></button>';
                    listHtml += '<button id="addItemBtn" class="btn btn-sm btn-success">New Item</button>';
                    listHtml += '<button id="deleteListBtn" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-remove-sign"></span></button></div></div>';
                    listHtml += '<div id="list-items" class="container row" style="display: none;">';
                    listHtml += '<div class="col-md-9"><table id="item-table" class="table table-striped table-hover">';
                    listHtml += '<thead><tr><th>Title</th><th>Description</th><th>Due Date</th><th>Complete</th></tr></thead><tbody>';
                    listHtml += '<tr class="item-row" id="'+this._id+'">';
                    listHtml += '<td>'+ title +'</td><td></td><td></td>';
                    listHtml += '<td><span class="glyphicon glyphicon-minus"></span></td>';
                    listHtml += '<td><button id="item-edit" class="btn btn-xs btn-success"><span class="glyphicon glyphicon-pencil"></span></button>';
                    listHtml += '<button id="item-delete" class="btn btn-xs  btn-danger"><span class="glyphicon glyphicon-trash"></span></button></td></tr>';
                    listHtml += '</tbody></div>';
                });
            });
            // Inject the content string into table
            $('#item-table table tbody').html(listHtml);
        });
});
