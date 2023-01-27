var rods = [

    {
        category: "rod",
        imgSrc: "./fishing rods/rod1.jpg"
    }, {
        category: "rod",
        imgSrc: "./fishing rods/rod2.jpg"
    }, {
        category: "rod",
        imgSrc: "./fishing rods/rod3.jpg"
    }, {
        category: "rod",
        imgSrc: "./fishing rods/rod4.jpg"
    }, {
        category: "rod",
        imgSrc: "./fishing rods/rod5.jpg"
    }, {
        category: "rod",
        imgSrc: "./fishing rods/rod6.jpg"
    }, {
        category: "rod",
        imgSrc: "./fishing rods/rod7.jpg"
    }, {
        category: "rod",
        imgSrc: "./fishing rods/rod8.jpg"
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

each(rods, function(elem, i) {
    $(".container").append('<div class="grid-item"><img src="'+elem.imgSrc+'"/></div>')
})

$('.grid-item').click(function(event){
    cart.push(event.target.src)
    $("#cart").empty()
    $("#cart").append("<span class='badge'>"+cart.length+"</span>")
  })