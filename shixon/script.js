let pos = 0

right.onclick = function(){
    pos = pos - 102
    gal.style.left = pos + "%"

    if(pos == -408) {
    pos = 0
    gal.style.left = pos + "%";
}
changeTab(pos/-102)
}
left.onclick = function(){
    pos = pos + 102
    gal.style.left = pos + "%"

    if(pos == 102) {
    pos = -306
    gal.style.left = pos + "%";
}
changeTab(pos/-102)
}

let buts = document.querySelectorAll("#but > li")

function changeTab(num) {
    pos = -102*num
    gal.style.left = pos + "%"

    // select
    for(i=0; i<buts.length; i++) {
        buts[i].className = ""
    }

    buts[num].className = "select"
}

// setInterval( ()=> {
// pos = pos - 102
// gal.style.left = pos + "%"

// // changeTab(pos/ -102)
// if(pos == -408) {
//     pos = 0
//     gal.style.left = pos + "%";
// }
// } , 4000)

let position = 0

products = document.querySelector(".products")
productsTwo = document.querySelector(".products-2")
rightButton = document.querySelector(".right")
leftButton = document.querySelector(".left")

rightButton.onclick = function(){
    position = position - 20
    products.style.left = position + "%"

    if(position == -120) {
        position = 0
        products.style.left = position + "%";
    }
}

leftButton.onclick = function(){
    position = position + 20
    products.style.left = position + "%"

    if(position == 20) {
        position = -100
        products.style.left = position + "%";
    }
}

setInterval( ()=> {
    position = position - 20
    products.style.left = position + "%"
    
    
    if(position == -120) {
        position = 0
        products.style.left = position + "%";
    }
    } , 4000)

let positionTwo = 0


setInterval( ()=> {
    positionTwo = positionTwo - 16.5
    productsTwo.style.left = positionTwo + "%"
        
        
    if(positionTwo == -82.5) {
        positionTwo = 0
            productsTwo.style.left = positionTwo + "%";
    }
} , 4000)