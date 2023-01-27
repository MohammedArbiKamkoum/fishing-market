var cart= []
var line = [

    {
        category: "line",
        imgSrc: "./lines/line1.jpg"
    }, {
        category: "lines",
        imgSrc: "./lines/line2.jpg"
    }, {
        category: "lines",
        imgSrc: "./lines/line3.jpg"
    }, {
        category: "lines",
        imgSrc: "./lines/line4.jpg"
    }, {
        category: "lines",
        imgSrc: "./lines/line5.jpg"
    }, {
        category: "lines",
        imgSrc: "./lines/line6.jpg"
    }, {
        category: "lines",
        imgSrc: "./lines/line7.jpg"
    }, {
        category: "lines",
        imgSrc: "./lines/line8.jpg"
    }, 
];

var each = function(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    } else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function(array, predicate) {
    var acc = [];
    each(array, function(e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}

each(line, function(elem, i) {
    $(".container").append('<div class="grid-item"><img src="'+elem.imgSrc+'"/></div>')
})

$('.grid-item').click(function(event){
  cart.push(event.target.src)
  $("#cart").empty()
  $("#cart" ).append("<span class='badge'>"+cart.length+"</span>")
  window.alert("Product added")
})
