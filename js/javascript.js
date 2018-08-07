var art_gallery_info = [
    {
        "filename": "Dancing in the wind.jpg",
        "dimensions": "36x48",
        "price": "$500"
    },
    {
        "filename": "color maze.jpg",
        "dimensions": "36x48",
        "price": "$345"
    },
    {
        "filename": "overburdened.jpg",
        "dimensions": "30x40",
        "price": "$425"
    },
    {
        "filename": "image in the darkness.jpg",
        "dimensions": "30x40",
        "price": "$325"
    },
    {
        "filename": "Vortex.jpg",
        "dimensions": "36x48",
        "price": "$550"
    },
    {
        "filename": "magical creation.jpg",
        "dimensions": "30x40",
        "price": "Sold"
    },
    {
        "filename": "The Road Home.jpg",
        "dimensions": "30x48",
        "price": "$475"
    },
    {
        "filename": "Unentanglement.jpg",
        "dimensions": "36x48",
        "price": "$525"
    },
    {
        "filename": "Illumination.jpg",
        "dimensions": "30x40",
        "price": "$325"
    },
    {
        "filename": "The Lighten Path.jpg",
        "dimensions": "30x40",
        "price": "$225"
    },
    {
        "filename": "windswept.jpg",
        "dimensions": "36x48",
        "price": "Sold"
    },
    {
        "filename": "evolving colors.jpg",
        "dimensions": "36x48",
        "price": "$340"
    },
    {
        "filename": "playing with paint.jpg",
        "dimensions": "36x36",
        "price": "$350"
    },
    {
        "filename": "Geometric Colors.jpg",
        "dimensions": "36x36",
        "price": "$250"
    },
    {
        "filename": "Unstuck.jpg",
        "dimensions": "24x18",
        "price": "$250"
    },
    {
        "filename": "lets get physical.jpg",
        "dimensions": "36x48",
        "price": "$450"
    },
    {
        "filename": "Santa Fe Evening.jpg",
        "dimensions": "30x40",
        "price": "$325"
    },
    {
        "filename": "staying fit.jpg",
        "dimensions": "36x48",
        "price": "Sold"
    },
    {
        "filename": "the healer.jpg",
        "dimensions": "36x48",
        "price": "Sold"
    },
    {
        "filename": "Evening Sky.jpg",
        "dimensions": "36x48",
        "price": "$425"
    }
];

function modalFunction(event) {
    $("#artModalLabel").text(event.data.filename.replace(/\.[^/.]+$/, ""));
    $("#modalImage").attr("src", "art/"+event.data.filename);
    $("#modalDimensions").text(event.data.dimensions);
    $("#modalPrice").text(event.data.price);
    $("#artModal").modal();
}

function populate_gallery() {
    var arrayLength = art_gallery_info.length;
    var array_index = 0;
    while (array_index < arrayLength) {
        var row = document.createElement("div");
        $(row).addClass("row");
        for (var i = 0; i < 4; i++) { // each row should have 4 columns
            var col = document.createElement("div");
            $(col).addClass("col-md-6 col-lg-4 col-xl-3 my-1");
            var img = document.createElement("img");
            $(img).addClass("img-fluid gallery-img");
            $(img).attr("src", "art/" + art_gallery_info[array_index]["filename"]);
            $(img).click({filename: art_gallery_info[array_index]["filename"], dimensions: art_gallery_info[array_index]["dimensions"], price: art_gallery_info[array_index]["price"]}, modalFunction);
            $(col).append(img);
            $(row).append(col);
            array_index++;
            if (array_index == arrayLength) {
                break;
            }
        }
        $("#gallery").append(row);
    }
}

$(document).ready(populate_gallery());
