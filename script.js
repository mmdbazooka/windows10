let body = document.querySelector("body")
let windowsLogo = document.querySelector(".windows-logo")
let winLogoImg = document.querySelector(".windows-logo-img")
let windowsSearchTab  = document.querySelector(".windows-search-tab ")
let logoes = document.querySelectorAll(".lg")
let taskBar = document.querySelector(".task-bar")
let folderShortcut = document.querySelector(".folder-codes")
let folder = document.querySelector(".folder")
let thisPcLogo = document.querySelector(".this-pc-logo")
let thisPc = document.querySelector(".this-pc")
let thisPcHeader = document.querySelector(".this-pc-header")
let folderHeader = document.querySelector(".folder-header")
let recycleHeader = document.querySelector(".recycle-header")
let maximize = document.querySelector(".maximize")
let minimizePage = document.querySelector(".minimize")
let closePage = document.querySelector(".close")
let maximizefol = document.querySelector(".maximizefol")
let minimizePagefol = document.querySelector(".minimizefol")
let closePagefol = document.querySelector(".closefol")
let maximizeR = document.querySelector(".maximizer")
let minimizePageR = document.querySelector(".minimizer")
let closePageR = document.querySelector(".closer")
let recycleBin = document.querySelector(".recycle-bin")
let recycleBinLogo = document.querySelector(".recycle-bin-logo")
let folderLogo = document.querySelector(".folder-logo")
let recycleBinImg = document.querySelector(".recycle-bin-img")
let fileExplore = document.querySelector(".this-pc-files")
let recycleBinFiles = document.querySelector(".recycle-bin-files")
let thisPcDownIcon = document.querySelector(".folders > img")
let thisPcFolders = document.querySelector(".folders > ul")
let thisPcDrives = document.querySelector(".disks > ul")
let thisPcDownIconDrives = document.querySelector(".disks > img")
let firefox = document.querySelector(".mozila-firefox")
let firefoxShortcut = document.querySelector(".firefox")
let firefoxTabs = document.querySelector(".firefox-tabs")
let firefoxLogo = document.querySelector(".firefox-logo")
let firefoxHeader = document.querySelector(".firefox-header")
let maximizeF = document.querySelector(".maximizef")
let minimizePageF = document.querySelector(".minimizef")
let closePageF = document.querySelector(".closef")
let newTab = document.querySelector(".new-tab")
let tabName = document.querySelector(".tab-name > div")
let tab = document.querySelector(".tab")
let closeTab = document.querySelector(".close-tab")
let firefoxSearchInputBox = document.querySelector(".mozila-firefox > .tab > .bottom > .search")
let firefoxSearchInput = document.querySelector(".search-in-firefox")
let firefoxSearchInput1 = document.querySelector(".search-in-firefox1")
let searchIcon = document.querySelector(".search-icon-in-firefox")
let searchIcon1 = document.querySelector(".search-icon-in-firefox1")
let shixon = document.querySelector(".shixon")
let amazon = document.querySelector(".amazon")
let digiStyle = document.querySelector(".digi-style")
let addTab = document.querySelector(".add-tab")
let startMenuLeft = document.querySelector(".start-menu-left")
let powerMenu = document.querySelector(".power-menu")
let power = document.querySelector(".power")
let shutDownBtn = document.querySelector(".shut-down-btn")
let shutDown = document.querySelector(".shut-down")
let startingWindow = document.querySelector(".starting-window")
let shutingDownWindow = document.querySelector(".shuting-down-window")
let restart = document.querySelector(".restart")
let sleep = document.querySelector(".sleep")
let desktop = document.querySelector(".desktop")
let thisRecyFire = document.querySelectorAll("main , header")
let notificationMenu = document.querySelector(".notification-menu")
let notification = document.querySelector(".notification")
let mode = document.querySelectorAll(".notification-menu > .mods > div")
let nightLight = document.querySelector(".night-light")
let windowsSearchInput = document.querySelector(".windows-search-input")
let vscode = document.querySelector(".visual-studio-code")
let vscodeShortcut = document.querySelector(".vs-code")
let vscodeLogo = document.querySelector(".vs-code-logo")
let vscodeHeader = document.querySelector(".vs-code-header")
let maximizeV = document.querySelector(".maximizev")
let vsTitle = document.querySelector(".vs-title")
let minimizePageV = document.querySelector(".minimizev")
let closePageV = document.querySelector(".closev")
let vscodeTools = document.querySelectorAll(".visual-studio-code > .work-space > .left > .left > .top > div")
let vscodeCloseTab = document.querySelectorAll(".visual-studio-code > .work-space > .right > .top > div > img:nth-child(2)")
let vscodeTabs = document.querySelectorAll(".visual-studio-code > .work-space > .right > .center > div")
let vscodeTab = document.querySelectorAll(".visual-studio-code > .work-space > .right > .top > div")
let vscodeTopTab = document.querySelector(".visual-studio-code > .work-space > .right > .top")
let htmlTab = document.querySelector(".html-tab")
let cssTab = document.querySelector(".css-tab")
let jsTab = document.querySelector(".js-tab")
let htmlCodeTab = document.querySelector(".html-code-tab")
let cssCodeTab = document.querySelector(".css-code-tab")
let jsCodeTab = document.querySelector(".js-code-tab")
let selectCodeTab = document.querySelectorAll(".select-code-tab")
let files = document.querySelectorAll(".folder > .container > .right-menu > div ")
let rightClickBar = document.querySelector(".right-click")
let zIndex = 1
let vsZIndex = 1

jsCodeTab.value = ""
cssCodeTab.value = ""
htmlCodeTab.value = ""
firefoxSearchInput.value = ""
firefoxSearchInput1.value = ""
windowsSearchInput.value = ""

setInterval(()=>{
  body.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)} , ${Math.floor(Math.random()*255)} , ${Math.floor(Math.random()*255)})`
},10000)

setInterval(() => {
    const clock = document.querySelector('.time');
    let time = new Date();
    let min = time.getMinutes();
    let hr = time.getHours();
  
    let timeLine = 'AM';
    if (hr > 12) {
      timeLine = 'PM';
      hr = hr - 12;
    }
    if (hr == 0) {
      hr = 12;
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (hr < 10) {
      hr = '0' + hr;
    }
    clock.innerHTML = `<p>${hr}</p>:<p>${min}</p></p> <p>${timeLine}</p>`;
  }, 1000);

const date = document.querySelector('.date');
let time = new Date();
let day = time.toLocaleDateString(); 
let month = time.getDate();
let year = time.getFullYear();
  
date.innerHTML = `<p>${day}</p>`;

const timeDate = document.querySelector('.time-date');
let timeDateTitle = time.toDateString(); 
timeDate.title = `${timeDateTitle}`

windowsLogo.onmouseout = function() {
    winLogoImg.className = "windows-logo-img"
}
windowsLogo.onmouseover = function() {
    winLogoImg.classList.toggle("windows-logo-selected");
}
windowsLogo.onclick = function() {
  if(startMenuLeft.style.bottom == "-550px"){
    startMenuLeft.style.bottom = "45px"
  } else {
    startMenuLeft.style.bottom = "-550px"
    powerMenu.style.visibility = "hidden"
  }
}
windowsSearchInput.onclick = function() {
  windowsSearchTab.style.visibility = "visible"
  windowsSearchTab.style.zIndex = zIndex ++
}
document.querySelector(".desktop > *").onclick = function() {
  if(windowsSearchTab.style.visibility == "visible") {
    windowsSearchTab.style.visibility = "hidden"
  }
}
for(i=0;i<thisRecyFire.length;i++) {
  thisRecyFire[i].onclick = function() {
    if(windowsSearchTab.style.visibility == "visible") {
      windowsSearchTab.style.visibility = "hidden"
    }
  }
}
let clone = fileExplore.cloneNode(true);
let copy = recycleBinFiles.cloneNode(true);
let copyfire = firefox.cloneNode(true);
thisPc.addEventListener("dblclick" , ()=>{
   thisPcLogo.className = "this-pc-logo-active"
    fileExplore.style.visibility = "visible"
    fileExplore.style.zIndex = zIndex ++
})
thisPcHeader.addEventListener("dblclick" , ()=> {
  fileExplore.classList.toggle("file-100-percent")
  fileExplore.style.left = "0%"
  fileExplore.style.top = "0%"
})
fileExplore.addEventListener("click" , ()=> {
  fileExplore.style.zIndex = zIndex ++
})
thisPcLogo.addEventListener("click" , ()=>{
  thisPcLogo.className = "this-pc-logo-active"
  fileExplore.style.visibility = "visible"
  fileExplore.style.zIndex = zIndex ++
})
maximize.addEventListener("click" , ()=> {
  fileExplore.classList.toggle("file-100-percent")
  fileExplore.style.left = "0%"
  fileExplore.style.top = "0%"
})
closePage.addEventListener("click" , ()=> {
  fileExplore.style.visibility = "hidden"
  thisPcLogo.className = "this-pc-logo"
  thisPcDrives.className = ""
  thisPcFolders.className = ""
})
minimizePage.addEventListener("click" , ()=> {
  fileExplore.style.visibility = "hidden"
  thisPcDrives.className = ""
  thisPcFolders.className = ""
})
folderShortcut.addEventListener("dblclick" , ()=>{
   folderLogo.className = "folder-logo-active"
    folder.style.visibility = "visible"
    folder.style.zIndex = zIndex ++
})
folderHeader.addEventListener("dblclick" , ()=> {
  folder.classList.toggle("file-100-percent")
  folder.style.left = "0%"
  folder.style.top = "0%"
})
folder.addEventListener("click" , ()=> {
  folder.style.zIndex = zIndex ++
})
folderLogo.addEventListener("click" , ()=>{
  folderLogo.className = "folder-logo-active"
  folder.style.visibility = "visible"
  folder.style.zIndex = zIndex ++
})
maximizefol.addEventListener("click" , ()=> {
  folder.classList.toggle("file-100-percent")
  folder.style.left = "0%"
  folder.style.top = "0%"
})
closePagefol.addEventListener("click" , ()=> {
  folder.style.visibility = "hidden"
  folderLogo.className = "folder-logo"
})
minimizePagefol.addEventListener("click" , ()=> {
  folder.style.visibility = "hidden"
})
recycleBin.addEventListener("dblclick" , ()=>{
  recycleBinLogo.className = "recycle-bin-logo-active"
  recycleBinFiles.style.visibility = "visible"
  recycleBinFiles.style.zIndex = zIndex ++
})
recycleHeader.addEventListener("dblclick" , ()=> {
  recycleBinFiles.classList.toggle("file-100-percent");
  recycleBinFiles.style.left = "0%"
  recycleBinFiles.style.top = "0%"
})
recycleBinFiles.addEventListener("click" , ()=> {
  recycleBinFiles.style.zIndex = zIndex ++
})
recycleBinLogo.addEventListener("click" , ()=>{
  recycleBinLogo.className = "recycle-bin-logo-active"
  recycleBinFiles.style.visibility = "visible"
  recycleBinFiles.style.zIndex = zIndex ++
})
maximizeR.addEventListener("click" , ()=> {
  recycleBinFiles.classList.toggle("file-100-percent")
  recycleBinFiles.style.left = "0%"
  recycleBinFiles.style.top = "0%"
})
closePageR.addEventListener("click" , ()=> {
  recycleBinFiles.style.visibility = "hidden"
  recycleBinLogo.className = "recycle-bin-logo"
})
minimizePageR.addEventListener("click" , ()=> {
  recycleBinFiles.style.visibility = "hidden"
})
thisPcDownIcon.addEventListener("click" , ()=> {
  thisPcFolders.classList.toggle("active")
  setTimeout(() => {
    thisPcDownIcon.classList.toggle("active-icon")
  }, 300);
})
thisPcDownIconDrives.addEventListener("click" , ()=> {
  thisPcDrives.classList.toggle("active")
  setTimeout(() => {
    thisPcDownIconDrives.classList.toggle("active-icon")
  }, 300);
})
firefoxShortcut.addEventListener("dblclick" , ()=>{
  firefoxLogo.className = "firefox-logo-active"
   firefox.style.visibility = "visible"
   firefox.style.zIndex = zIndex ++
   tab.classList.remove("active-tab")
})
firefoxLogo.addEventListener("click" , ()=>{
  firefoxLogo.className = "firefox-logo-active"
  firefox.style.visibility = "visible"
  firefox.style.zIndex = zIndex ++
})
firefox.addEventListener("click" , ()=>{
  firefox.style.zIndex = zIndex ++
})
firefoxHeader.addEventListener("dblclick" , ()=> {
  firefox.classList.toggle("file-100-percent")
  firefox.style.left = "0%"
  firefox.style.top = "0%"
})
maximizeF.addEventListener("click" , ()=> {
  document.querySelector(".mozila-firefox")
  firefox.classList.toggle("file-100-percent")
  firefox.style.left = "0%"
  firefox.style.top = "0%"
})
closePageF.addEventListener("click" , ()=> {
  firefox.style.visibility = "hidden"
  tab.classList.toggle("active-tab")
  firefoxLogo.className = "firefox-logo"
})
minimizePageF.addEventListener("click" , ()=> {
  firefox.style.visibility = "hidden"
})
vscodeShortcut.addEventListener("dblclick" , ()=>{
  vscodeLogo.className = "vs-code-logo-active"
  vscode.style.visibility = "visible"
  vscode.style.zIndex = zIndex ++
})
vscodeHeader.addEventListener("dblclick" , ()=> {
  vscode.classList.toggle("file-100-percent");
  vscode.style.left = "0%"
  vscode.style.top = "0%"
})
vscode.addEventListener("click" , ()=> {
  vscode.style.zIndex = zIndex ++
})
vscodeLogo.addEventListener("click" , ()=>{
  vscodeLogo.className = "vs-code-logo-active"
  vscode.style.visibility = "visible"
  vscode.style.zIndex = zIndex ++
})
maximizeV.addEventListener("click" , ()=> {
  vscode.classList.toggle("file-100-percent")
  vscode.style.left = "0%"
  vscode.style.top = "0%"
})
closePageV.addEventListener("click" , ()=> {
  vscode.style.visibility = "hidden"
  vscodeLogo.className = "vs-code-logo"
})
minimizePageV.addEventListener("click" , ()=> {
  vscode.style.visibility = "hidden"
})
newTab.addEventListener("click" , ()=> {
  newTab.classList.toggle("current-tab")
  document.querySelector(".firefox-tabs > div:nth-child(4)").className = "new-tab"
});newTab.title = `${tabName.innerHTML}`

searchIcon.addEventListener("click" , ()=> {
  if(firefoxSearchInput.value == "digistyle") {
    tab.style.visibility = "hidden"
    digiStyle.className = "active-digi-style"
    tabName.innerText = "Digi Style"
    newTab.title = `${tabName.innerHTML}`
  }
})
searchIcon.addEventListener("click" , ()=> {
  if(firefoxSearchInput.value == "amazon") {
    tab.style.visibility = "hidden"
    amazon.className = "active-amazon"
    tabName.innerText = "amazon"
    newTab.title = `${tabName.innerHTML}`
  }
})
searchIcon.addEventListener("click" , ()=> {
  if(firefoxSearchInput.value == "shixon") {
    tab.style.visibility = "hidden"
    shixon.className = "active-shixon"
    tabName.innerText = "shixon"
    newTab.title = `${tabName.innerHTML}`
  }
})
searchIcon1.addEventListener("click" , ()=> {
  if(firefoxSearchInput1.value == "digistyle") {
    tab.style.visibility = "hidden"
    digiStyle.className = "active-digi-style"
    tabName.innerText = "Digi Style"
    newTab.title = `${tabName.innerHTML}`
  }
})
searchIcon1.addEventListener("click" , ()=> {
  if(firefoxSearchInput1.value == "amazon") {
    tab.style.visibility = "hidden"
    amazon.className = "active-amazon"
    tabName.innerText = "amazon"
    newTab.title = `${tabName.innerHTML}`
  }
})
searchIcon1.addEventListener("click" , ()=> {
  if(firefoxSearchInput1.value == "shixon") {
    tab.style.visibility = "hidden"
    shixon.className = "active-shixon"
    tabName.innerText = "shixon"
    newTab.title = `${tabName.innerHTML}`
  }
})
firefoxSearchInput.onclick = function() {
  firefoxSearchInputBox.classList.toggle("focus-input-search")
}
addTab.addEventListener("click" , ()=> {
  let newTab = document.createElement("div")
  newTab.className = "new-tab"
  newTab.innerHTML = `
<div class="tab-name" ><img src="images/Firefox_logo,_2019.svg.webp" width="15"><div>New Tab</div> </div>
<img src="images/firefox-close-tab.png" class="close-tab" >
`
  firefoxTabs.appendChild(newTab)
  tab.style.visibility = "visible"
  shixon.style.visibility = "hidden"
  digiStyle.style.visibility = "hidden"
  amazon.style.visibility = "hidden"
  document.querySelector(".firefox-tabs > div:nth-child(4)").className = "new-tab current-tab"
  document.querySelector(".firefox-tabs > div:nth-child(3)").className = "new-tab"
})
closeTab.addEventListener("click" , ()=> {
  firefoxTabs.lastChild.style.display = "none"
})
power.onclick = function() {
  if(powerMenu.style.visibility == "hidden") {
    powerMenu.style.visibility = "visible"
    powerMenu.style.bottom = "100px"
  }else {
    powerMenu.style.visibility = "hidden"
    powerMenu.style.bottom = "50px"
  }
}
shutDownBtn.onclick = function() {
  if(shutDown.style.visibility == "hidden") {
    shutingDownWindow.style.visibility = "visible"
    shutDown.style.visibility = "visible"
    startMenuLeft.style.bottom = "-550px"
    for(i=0;i<thisRecyFire.length;i++) {
      thisRecyFire[i].style.visibility = "hidden"
      logoes[i].className = ""
      windowsSearchTab.style.visibility = "hidden"
      if(notificationMenu.className == "notification-menu-active")
      notificationMenu.className = "notification-menu"
    }
    setTimeout(() => {
      shutingDownWindow.style.visibility = "hidden"
    }, 4000);
  }else {
    shutDown.style.visibility = "hidden"
  }
}
shutDown.onclick = function() {
  setTimeout(() => {
    startingWindow.style.visibility = "visible"
    setTimeout(() => {
      shutDown.style.visibility = "hidden"
      startingWindow.style.visibility = "hidden"
  }, 3000);
  }, 1000);
}
restart.onclick = function() {
  window.location.reload()
}
sleep.onclick = function() {
  if(shutDown.style.visibility == "hidden") {
    shutDown.style.visibility = "visible"
    for(i=0;i<thisRecyFire.length;i++) {
      thisRecyFire[i].style.visibility = "hidden"
      windowsSearchTab.style.visibility = "hidden"
    }
    setTimeout(() => {
      shutingDownWindow.style.visibility = "hidden"
    }, 1);
  }else {
    shutDown.style.visibility = "hidden"
  }
}
notification.onclick = function() {notificationMenu.classList.toggle("notification-menu-active")}
function changeModes(num) {mode[num].classList.toggle("active-mode")}
nightLight.onclick = function() {
  document.querySelector("html").classList.toggle("night-mode")
  nightLight.classList.toggle("active-mode")
}
function selectVSTool(num) {
  for(i=0;i<vscodeTools.length;i++) {
    vscodeTools[i].className = ""
  }
  vscodeTools[num].className = "selected-vs-tool"
}
function closeCodeTab(num) {vscodeCloseTab[num].parentNode.remove()}
function selectedCodeTab(num) {
  for(i=0;i<vscodeTab.length;i++) {
    vscodeTab[i].className = ""
  }
  vscodeTab[num].className = "selected-code-tab"
}
vscodeTab[0].onclick = function() {
  htmlTab.style.zIndex = vsZIndex ++
  for(i=0;i<vscodeTab.length;i++) {
    vscodeTab[i].className = ""
    selectCodeTab[i].className = ""
  }
  vscodeTab[0].className = "selected-code-tab"
  selectCodeTab[0].className = "select-code-tab-active"
}
vscodeTab[1].onclick = function() {
  cssTab.style.zIndex = vsZIndex ++
  for(i=0;i<vscodeTab.length;i++) {
    vscodeTab[i].className = ""
    selectCodeTab[i].className = ""
  }
  vscodeTab[1].className = "selected-code-tab"
  selectCodeTab[1].className = "select-code-tab-active"
}
vscodeTab[2].onclick = function() {
  jsTab.style.zIndex = vsZIndex ++
  for(i=0;i<vscodeTab.length;i++) {
    vscodeTab[i].className = ""
    selectCodeTab[i].className = ""
  }
  vscodeTab[2].className = "selected-code-tab"
  selectCodeTab[2].className = "select-code-tab-active"
}
function selectedCodeTab1(num) {
  for(i=0;i<vscodeTab.length;i++) {
    vscodeTab[i].className = ""
    selectCodeTab[i].className = ""
  }
  vscodeTab[num].className = "selected-code-tab"
  vscodeTabs[num].style.zIndex = vsZIndex ++
  selectCodeTab[num].className = "select-code-tab-active"
  if(!vscodeTab[num].checkVisibility()) {
    vscodeTopTab.appendChild(vscodeTab[num])
  }
}
function selectFile(num) {
  for(i=0;i<files.length;i++) {
    files[i].style.background = "none"
  }
  files[num].style.background = "#cce8ff"
}
desktop.oncontextmenu = function(e) {
  e.preventDefault()
  rightClickBar.style.display = "flex"
  rightClickBar.style.left = e.pageX / 10.2 + "%"
  rightClickBar.style.top = e.pageY / 6 + "%" 
}
desktop.onclick = function() {
  rightClickBar.style.display = "none"
}
vscodeHeader.onmousemove = function() {
  vscode.ondragover = function(e) {
    e.preventDefault()
    vscodeHeader.style.cursor = "move"
  vscode.style.left = e.pageX / 40 + "%"
  vscode.style.top = e.pageY / 40 + "%"
  }
}
thisPcHeader.onmousemove = function() {
  fileExplore.ondragover = function(e) {
    e.preventDefault()
  fileExplore.style.left = e.pageX / 40 + "%"
  fileExplore.style.top = e.pageY / 40 + "%"
  }
}
firefoxHeader.onmousemove = function() {
  firefox.ondragover = function(e) {
    e.preventDefault()
  firefox.style.left = e.pageX / 40 + "%"
  firefox.style.top = e.pageY / 40 + "%"
  }
}
recycleHeader.onmousemove = function() {
  recycleBinFiles.ondragover = function(e) {
    e.preventDefault()
  recycleBinFiles.style.left = e.pageX / 40 + "%"
  recycleBinFiles.style.top = e.pageY / 40 + "%"
  }
}