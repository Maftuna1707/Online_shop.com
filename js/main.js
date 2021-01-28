function l_phones() {
    document.getElementById("menu_right1").className = "bi bi-chevron-down"
    document.getElementById("companies_p").style.display = "block";
}
function l_computers() {
    document.getElementById("menu_right2").className = "bi bi-chevron-down"
    document.getElementById("companies_c").style.display = "block";
}

function iPhone() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    var iphone1 = document.querySelectorAll("article")
    if (checkBox.checked == true){
        text.style.display = "block";
        iphone1.style.display = "block";
    } else {
        text.style.display = "none";
        iphone1.style.display = "none";
    }
}

let iphone8 = {
    src: 'images/apple8.png'
}
let iphone11pro = {
    src: 'images/apple11pro.png'
}
let iphoneXS = {
    src: 'images/appleXS.png'
}
document.getElementById("img1").src = iphone8.src
document.getElementById("img2").src = iphone11pro.src
document.getElementById("img3").src = iphoneXS.src
// let apple8 = {
    //     src: 'D:\\school\\IT projects\\Projects\\Active projects\\online_shop.com\\images\\apple8.png'
    // }
    // document.getElementsByTagName("body").style.background = apple8.src