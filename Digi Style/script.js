let right = document.querySelector(".right-click")
let left = document.querySelector(".left-click")
let tabGadget = document.querySelectorAll(".slideshow-gadget ul li")
let tabButs = document.querySelectorAll(".tab-buts > div")
let iconButs = document.querySelectorAll(".category > ul > li > div > .top > div ")
let gal = document.querySelector(".gal")
let tabGal = document.querySelector(".tab-gal")
let tabMenuGal = document.querySelector(".tab-menu-gal")
let searchAct = document.querySelector(".search-active")
let back = document.querySelector(".back")
let rightContentBtn = document.querySelector(".right-btn")
let leftContentBtn = document.querySelector(".left-btn")
let galContent = document.querySelector(".content > .left > .gal")
let pos = 0
let posTab = 0
let posTabMenu = 0
function changeTab(num) {
    pos =  -100 * num
    gal.style.bottom = pos + "%"
    for(i=0;i<tabGadget.length;i++) {
        tabGadget[i].style.background = "none"
    }
    tabGadget[num].style.background = "#000"
}
right.onclick = function() {
    pos = pos - 100 //چون دیسپلی کالمن ریورس هس
    gal.style.bottom = pos + "%"
    gal.style.opacity = "0"
    if(pos == -700) {
        pos = 0
        gal.style.bottom = pos + "%"
    }
    let i = 0
    let setAkbar = setInterval(function akbar(){
        gal.style.opacity = `${i+=.1}`
    },50)
    setTimeout(()=>{
        clearInterval(setAkbar)
    },500 )
    changeTab(pos/-100)
}
left.onclick = function() {
    pos = pos + 100
    gal.style.bottom = pos + "%"
    if(pos == 100) {
        pos = -600
        gal.style.bottom = pos + "%"
    }
    let i = 0
    let setAkbar = setInterval(function akbar(){
        gal.style.opacity = `${i+=.1}`
    },50)
    setTimeout(()=>{
        clearInterval(setAkbar)
    },500 )
    changeTab(pos/-100)
}
setInterval(() => {
    pos = pos - 100
    gal.style.bottom = pos + "%"
    if(pos == -700) {
        pos = 0
        gal.style.bottom = pos + "%"
    }
    changeTab(pos/-100)
}, 4000);
function searchActive() {
    searchAct.style.top = "0"
}
function backSearch() {
    searchAct.style.top = "-500px"
}
let posContent = 0

rightContentBtn.onclick = function() {
    posContent = posContent - 50
    galContent.style.left = posContent + "%"
    if(posContent == -150) {
        posContent = 0
        galContent.style.left = posContent + "%"
    }
    if(posContent == -50) {
        leftContentBtn.style.display = "flex"
    }
    if(posContent == -100) {
        rightContentBtn.style.display = "none"
    }
}
if(posContent == 0) {
    leftContentBtn.style.display = "none"
}
leftContentBtn.onclick = function() {
    posContent = posContent + 50
    galContent.style.left = posContent + "%"
    if(posContent == 50) {
        posContent = -100
        galContent.style.left = posContent + "%"
    }
    if(posContent == 0) {
        leftContentBtn.style.display = "none"
    }
    if(posContent == -50) {
        rightContentBtn.style.display = "flex"
    }
}
function changeTabContent(num) {
    posTab =  -100 * num
    tabGal.style.left = posTab + "%"
    for(i=0;i<tabButs.length;i++){
        tabButs[i].style.borderBottom = "none"
    }
    tabButs[num].style.borderBottom = "4px solid #000"
}
function changeTabclothes(num) {
    posTabMenu = 100 * num
    tabMenuGal.style.left = posTabMenu + "%"
    for(i=0;i<iconButs.length;i++){
        iconButs[i].style.borderBottom = "none"
        iconButs[i].style.color = "#555"
    }
    iconButs[num].style.borderBottom = "2px solid #1bb4d8"
    iconButs[num].style.color = "#000"
}
function jumpToTop() {
    document.documentElement.scrollTop = 0;
}