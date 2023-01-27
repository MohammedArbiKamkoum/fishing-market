var hook = [

    {
        category: "hook",
        imgSrc: "./hooks/hook1.jpg"
    }, {
        category: "hook",
        imgSrc: "./hooks/hook2.jpg"
    }, {
        category: "hook",
        imgSrc: "./hooks/hook3.jpg"
    }, {
        category: "hook",
        imgSrc: "./hooks/hook4.jpg"
    }, {
        category: "hook",
        imgSrc: "./hooks/hook5.jpg"
    }, {
        category: "hook",
        imgSrc: "./hooks/hook6.jpg"
    }, {
        category: "hook",
        imgSrc: "./hooks/hook7.jpg"
    }, {
        category: "hook",
        imgSrc: "./hooks/hook8.jpg"
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

each(hook, function(elem, i) {
    $(".container").append('<div class="grid-item"><img src="'+elem.imgSrc+'"/></div>')
})

$('.grid-item').click(function(event){
    cart.push(event.target.src)
    $("#cart").empty()
    $("#cart").append("<span class='badge'>"+cart.length+"</span>")
  })