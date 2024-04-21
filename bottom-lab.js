function vedio(){
    var container = document.querySelector(".container")
    container.style.display="none"
    var header = document.querySelector(".header")
    header.style.display = "none"
    var bottomlab=document.querySelector(".bottom-lab")
    bottomlab.style.display="block"
    bottomlab.style.backgroundColor ="black"
    var mypage = document.querySelector(".mypage")
    mypage.style.display = "none"
    var my = document.querySelector(".my")
    my.style.color = "gray"
    var headepage = document.querySelector(".headpage")
    headepage.style.color = "gray"
    var vedio = document.querySelector(".vedio")
    vedio.style.color = "white"
}
function headpage(){
    var container = document.querySelector(".container")
    container.style.display = "block"
    var header = document.querySelector(".header")
    header.style.display = "block"
    var headepage = document.querySelector(".headpage")
    headepage.style.color = "orange"
    var my = document.querySelector(".my")
    my.style.color = "gray"
    var vedio = document.querySelector(".vedio")
    vedio.style.color = "gray"
    var bottomlab = document.querySelector(".bottom-lab")
    bottomlab.style.backgroundColor = "white"
}

function headpageiconchange() {
    var headpage = document.querySelector(".headpage")
    var currentScrollPosition = window.scrollY;

    // 判断是否满足触发刷新条件：在页面顶部且向上滚动
    if (currentScrollPosition === 0) {
        headpage.innerHTML = "推荐"
    }
}
function mypage() {
    var mypage = document.querySelector(".mypage")
    mypage.style.display = "block"
    var officialpage = document.querySelector(".Official-page")
    officialpage.style.height = "0px"
    officialpage.style.width = "100%"
    var container = document.querySelector(".container")
    container.style.display = "none"
    var header = document.querySelector(".header")
    header.style.display = "none"
    var bottomlab = document.querySelector(".bottom-lab")
    bottomlab.style.display = "block"
    var my = document.querySelector(".my")
    my.style.color = "orange"
    var headepage = document.querySelector(".headpage")
    headepage.style.color = "gray"
    var vedio = document.querySelector(".vedio")
    vedio.style.color = "gray"   
    var bottomlab = document.querySelector(".bottom-lab")
    bottomlab.style.backgroundColor = "white"
}
