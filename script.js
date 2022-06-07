// VANTA.TOPOLOGY({
//     el: ".container1",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: 0x001116,
//     backgroundColor: 0x80cfdf
// })



function fontsize() {
    let widthBlock = $(".target").width()
    $(".target-text").css("font-size", widthBlock / 48 + "px")
    $(".target-header-text").css("font-size", widthBlock / 36 + "px")
    $(".about-text").css("font-size", widthBlock / 36 + "px")
}
window.onload = fontsize()


var windowHeight = window.innerHeight

function scrollNext(index) {
    window.scrollTo({
        top: windowHeight * index,
        behavior: "smooth"
    })
}



var container1IsLoad = false
var container1IsProcessing = false
var container2Stop = false

if (window.pageYOffset >= windowHeight) {
    container1IsProcessing = true
    if (Math.round(window.pageYOffset) >= windowHeight * 2) {
        $(".container1-main-up").css("display", "none")
        $(".container1-main-down").css("display", "none")
    }
    $("body").css("overflow-y", "hidden")
    $(".container1-main-up1").css("transition", `1s ease`)
    $(".container1-main-up2").css("transition", `1s ease`)

    $(".container1-main-up1").css("left", "calc(50% - 150px)")
    $(".container1-main-up2").css("right", "calc(50% - 150px)")
    $(".container1-main-up-text").css("transition", `1s ease 1s`)
    $(".container1-main-up-text").css("opacity", "1")
    $(".card").css("transition", `1s ease 1s`)
    $("#card3").css("margin-left", "0")
    $("#card4").css("margin-right", "0")
    let timer = setTimeout(
        function() {
            $("#card1").css("margin-left", "0")
            $("#card2").css("margin-right", "0")
        }, 1000)
    timer = setTimeout(
        function() {
            container1IsLoad = true
            container1IsProcessing = false
        }, 2000)
    timer = setTimeout(
        function() {
            $("body").css("overflow-y", "scroll")
            $(".container1-main-up").css("display", "flex")
            $(".container1-main-down").css("display", "block")
        }, 3000)
}

window.addEventListener("scroll", function scrollEvent() {

    var pageNow = Math.round(window.pageYOffset) - windowHeight
    var ratio = 1 - pageNow / windowHeight
    if (window.pageYOffset > windowHeight / 3) {
        document.querySelector(".up").style.display = "block"
        document.querySelector(".up-circle").style.display = "block"
    } else {
        document.querySelector(".up").style.display = "none"
        document.querySelector(".up-circle").style.display = "none"
    }

    if (window.pageYOffset >= windowHeight && !container1IsLoad && !container1IsProcessing && window.pageYOffset < windowHeight * 2) {
        container1IsProcessing = true
        $("body").css("overflow-y", "hidden")
        $(".container1-main-up1").css("transition", `1s ease`)
        $(".container1-main-up2").css("transition", `1s ease`)

        $(".container1-main-up1").css("left", "calc(50% - 150px)")
        $(".container1-main-up2").css("right", "calc(50% - 150px)")
        $(".container1-main-up-text").css("transition", `1s ease 1s`)
        $(".container1-main-up-text").css("opacity", "1")
        $(".card").css("transition", `1s ease 1s`)
        $("#card3").css("margin-left", "0")
        $("#card4").css("margin-right", "0")
        let timer = setTimeout(
            function() {
                $("#card1").css("margin-left", "0")
                $("#card2").css("margin-right", "0")
            }, 1000)
        timer = setTimeout(
            function() {
                container1IsLoad = true
                container1IsProcessing = false
            }, 2000)
        timer = setTimeout(
            function() {
                $("body").css("overflow-y", "scroll")
            }, 3000)
    } else if (window.pageYOffset < windowHeight) {
        $(".container1-main-down").css("position", "relative")
        $(".container1-main-down").css("padding", "0")
        $(".container1-main-up").css("position", "relative")
        $(".container1-main-up").css("padding", "0")
        if (container1IsLoad) {
            $(".container1-main-up1").css("left", "calc(50% - 150px)")
            $(".container1-main-up2").css("right", "calc(50% - 150px)")
            $(".container1-main-up-text").css("opacity", "1")
            $(".container1-main-up-text").css("opacity", "1")
            $("#card3").css("margin-left", "0")
            $("#card4").css("margin-right", "0")
            $("#card1").css("margin-left", "0")
            $("#card2").css("margin-right", "0")
            $(".container1-main-up1").css("transition", `1s ease`)
            $(".container1-main-up2").css("transition", `1s ease`)
            $(".container1-main-up-text").css("transition", `1s ease 1s`)
            $(".card").css("transition", `1s ease 1s`)
        }
    } else if (window.pageYOffset > windowHeight && container1IsLoad) {
        if (window.pageYOffset <= windowHeight * 1.2 || Math.round(window.pageYOffset) >= windowHeight * 2) {
            $(".container1-main-down").css("position", "fixed")
            $(".container1-main-down").css("padding", "10px")
            $(".container1-main-up").css("position", "fixed")
            $(".container1-main-up").css("padding", "10px")
        }
        $(".card").css("transition", `none`)
        $(".container1-main-up-text").css("transition", `none`)
        $(".container1-main-up1").css("transition", `none`)
        $(".container1-main-up2").css("transition", `none`)
        $(".container1-main-up1").css("left", `calc(${ratio} * (50% - 150px) - (50% * ${(ratio - 1)*(-1)}))`)
        $(".container1-main-up2").css("right", `calc(${ratio} * (50% - 150px) - (50% * ${(ratio - 1)*(-1)}))`)

        $(".container1-main-up-text").css("opacity", ratio - 0.5)

        $("#card3").css("margin-left", `calc(-50vw * ${(ratio - 1)*(-2.25)})`)
        $("#card4").css("margin-right", `calc(-50vw * ${(ratio - 1)*(-2.25)})`)
        $("#card1").css("margin-left", `calc(-50vw * ${(ratio - 1)*(-1.2)})`)
        $("#card2").css("margin-right", `calc(-50vw * ${(ratio - 1)*(-1.2)})`)
    }

    if (window.pageYOffset < windowHeight * 2 && window.pageYOffset > windowHeight) {
        container2Stop = false
        $(".target").css("width", `calc((100% / 3) * ${1 + (ratio - 1)*(-2)})`)
        $(".target").css("height", `calc(calc(230px / 3) * ${1 + (ratio - 1)*(-2)})`)
        $(".big").css("height", `calc((365px / 3) * ${1 + (ratio - 1)*(-2)})`)
        $(".about-text").css("width", `calc((30% / 3) * ${1 + (ratio - 1)*(-2)})`)
        $(".about-text").css("height", `calc((3% / 3) * ${1 + (ratio - 1)*(-2)})`)
        fontsize();
    } else if (window.pageYOffset >= windowHeight * 2 && !container2Stop) {
        container2Stop = true
        $(".target").css("width", `100%`)
        $(".target").css("height", `230px`)
        $(".big").css("height", `365px`)
        $(".about-text").css("width", `30%`)
        $(".about-text").css("height", `3%`)
        fontsize();
    }
})

function container2Load() {
    var pageNow = Math.round(window.pageYOffset) - windowHeight
    var ratio = 1 - pageNow / windowHeight
    if (window.pageYOffset < windowHeight * 2 && window.pageYOffset > windowHeight) {
        container2Stop = false
        $(".target").css("width", `calc((100% / 3) * ${1 + (ratio - 1)*(-2)})`)
        $(".target").css("height", `calc(calc(230px / 3) * ${1 + (ratio - 1)*(-2)})`)
        $(".big").css("height", `calc((365px / 3) * ${1 + (ratio - 1)*(-2)})`)
        $(".about-text").css("width", `calc((30% / 3) * ${1 + (ratio - 1)*(-2)})`)
        $(".about-text").css("height", `calc((3% / 3) * ${1 + (ratio - 1)*(-2)})`)
        fontsize();
    } else if (window.pageYOffset >= windowHeight * 2 && !container2Stop) {
        container2Stop = true
        $(".target").css("width", `100%`)
        $(".target").css("height", `230px`)
        $(".big").css("height", `365px`)
        $(".about-text").css("width", `30%`)
        $(".about-text").css("height", `3%`)
        fontsize();
    }
}

document.querySelector(".up").addEventListener("click", function(item) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

let isOver = false

document.querySelector(".menu-icon").addEventListener("mouseover", function(item) {
    let up = document.querySelector(".menu-icon-up")
    let centre = document.querySelector(".menu-icon-centre")
    let down = document.querySelector(".menu-icon-down")
    if (!isOver) {
        isOver = true
        up.style.left = "30px"
        let timer = setTimeout(
            function() {
                centre.style.left = "30px"
            }, 100)
        timer = setTimeout(
            function() {
                down.style.left = "30px"
            }, 200)

        timer = setTimeout(
            function() {
                up.style.left = "10px"
            }, 500)
        timer = setTimeout(
            function() {
                centre.style.left = "10px"
            }, 400)
        timer = setTimeout(
            function() {
                down.style.left = "10px"
            }, 300)
    }

})

let been = false

document.querySelector(".menu-icon").addEventListener("mouseout", function(item) {
    if (isOver) {
        if (!been) {
            been = true
            let timer = setTimeout(
                function() {
                    isOver = false
                    been = false
                }, 500)
        }
    }

})

let menuIsOpen = false

function menuOpenClose() {
    let menu = document.getElementById("menu")
    if (!menuIsOpen) {
        menu.style.left = "0"
        menuIsOpen = true
    } else {
        menu.style.left = "-35vw"
        menuIsOpen = false
    }
}

window.onload = container2Load()