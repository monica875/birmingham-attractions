$(function() {
    var availableTags = [
        "Library of Birmingham",
        "Cadbury World",
        "Black Country Living Museum"
    ];
    $("#tags").autocomplete ({
        source: availableTags
    });

    $("#tags").on("autocompleteselect", function(event, ui) {
        const selected = ui.item.value;
        $(".attraction").each(function() {
            const name = $(this).find("img").data("name");
            if (name === selected) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }); 

    $("#tags").on("input", function() {
        if (!this.value) {
            $(".attraction").show();
        }
    });
});