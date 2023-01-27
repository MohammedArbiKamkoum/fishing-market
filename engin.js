var engin = [

    {
        category: "engin",
        imgSrc: "./motors/motor1.jpg"
    }, {
        category: "engin",
        imgSrc: "./motors/motor2.jpg"
    }, {
        category: "engin",
        imgSrc: "./motors/motor3.jpg"
    }, {
        category: "engin",
        imgSrc: "./motors/motor4.jpg"
    }, {
        category: "engin",
        imgSrc: "./motors/motor5.jpg"
    }, {
        category: "engin",
        imgSrc: "./motors/motor6.jpg"
    }, {
        category: "engin",
        imgSrc: "./motors/motor7.jpg"
    }, {
        category: "engin",
        imgSrc: "./motors/motor8.jpg"
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

each(engin, function(elem, i) {
    $(".container").append('<div class="grid-item"><img src="'+elem.imgSrc+'"/></div>')
})

$('.grid-item').click(function(event){
    cart.push(event.target.src)
    $("#cart").empty()
    $("#cart").append("<span class='badge'>"+cart.length+"</span>")
  })

  var prices=['25$','20$','19$','40$','50$', '45$']

 