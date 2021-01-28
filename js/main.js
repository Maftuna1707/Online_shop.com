function l_phones() {
    document.getElementById("menu_right1").className = "bi bi-chevron-down"
    document.getElementById("companies_p").style.display = "block";
}
function l_laptops() {
    document.getElementById("menu_right2").className = "bi bi-chevron-down"
    document.getElementById("companies_c").style.display = "block";
}
let main_right = document.getElementById("main");
function iPhone() {
    let checkBox = document.getElementById("myCheck_iphone");
    let m_iphone = document.getElementById("iphone");
    if (checkBox.checked == true){
        main_right.style.display = "none";
        m_iphone.style.display = "block";
    } else {
        main_right.style.display = "block";
        m_iphone.style.display = "none";
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


function sony() {
    let checkBox_sony = document.getElementById("myCheck_sony");
    let m_sony = document.getElementById("sony");
    if (checkBox_sony.checked == true){
        main_right.style.display = "none";
        m_sony.style.display = "block";
    } else {
        main_right.style.display = "block";
        m_sony.style.display = "none";
    }
}
let xperia5 = {
    src: 'images/XPERIA5.png'
}
let xperia10 = {
    src: 'images/xperia10.png'
}
let xperiaL7 = {
    src: 'images/xperiaL7.png'
}
document.getElementById("img1_sony").src = xperia5.src
document.getElementById("img2_sony").src = xperia10.src
document.getElementById("img3_sony").src = xperiaL7.src



function huawei() {
    let checkBox_huawei = document.getElementById("myCheck_huawei");
    let m_huawei = document.getElementById("huawei");
    if (checkBox_huawei.checked == true){
        main_right.style.display = "none";
        m_huawei.style.display = "block";
    } else {
        main_right.style.display = "block";
        m_huawei.style.display = "none";
    }
}
let huaweiP40 = {
    src: 'images/Huawei-P40.png'
}
let huaweiP30 = {
    src: 'images/huaweiP30.png'
}
let huaweiY7 = {
    src: 'images/Huawei-Y7.png'
}
document.getElementById("img1_huawei").src = huaweiP30.src
document.getElementById("img2_huawei").src = huaweiP40.src
document.getElementById("img3_huawei").src = huaweiY7.src



function macBook() {
    let checkBox_macBook = document.getElementById("myCheck_macBook");
    let m_macBook = document.getElementById("macBook");
    if (checkBox_macBook.checked == true){
        main_right.style.display = "none";
        m_macBook.style.display = "block";
    } else {
        main_right.style.display = "block";
        m_macBook.style.display = "none";
    }
}
let m_2015 = {
    src: 'images/2015-03.png'
}
let m_2020M1 = {
    src: 'images/2020M1.png'
}
let m_2018 = {
    src: 'images/macbook2018.png'
}
document.getElementById("img1_macBook").src = m_2015.src
document.getElementById("img2_makBook").src = m_2018.src
document.getElementById("img3_macBook").src = m_2020M1.src





// function sony() {
//     var checkBox_sony = document.getElementById("myCheck_sony");
//     var m_sony = document.getElementById("sony");
//     if (checkBox_sony.checked == true){
//         main_right.style.display = "none";
//         m_sony.style.display = "block";
//     } else {
//         main_right.style.display = "block";
//         m_sony.style.display = "none";
//     }
// }
// let xperia5 = {
//     src: 'images/XPERIA5.png'
// }
// let xperia10 = {
//     src: 'images/xperia10.png'
// }
// let xperiaL7 = {
//     src: 'images/xperiaL7.png'
// }
// document.getElementById("img1_sony").src = xperia5.src
// document.getElementById("img2_sony").src = xperia10.src
// document.getElementById("img3_sony").src = xperiaL7.src
//
//
//
// function huawei() {
//     var checkBox_huawei = document.getElementById("myCheck_huawei");
//     var m_huawei = document.getElementById("huawei");
//     if (checkBox_huawei.checked == true){
//         main_right.style.display = "none";
//         m_huawei.style.display = "block";
//     } else {
//         main_right.style.display = "block";
//         m_huawei.style.display = "none";
//     }
// }
// let huaweiP40 = {
//     src: 'images/Huawei-P40.png'
// }
// let huaweiP30 = {
//     src: 'images/huaweiP30.png'
// }
// let huaweiY7 = {
//     src: 'images/Huawei-Y7.png'
// }
// document.getElementById("img1_huawei").src = huaweiP30.src
// document.getElementById("img2_huawei").src = huaweiP40.src
// document.getElementById("img3_huawei").src = huaweiY7.src
//
//
//
function honor() {
    var checkBox_honor = document.getElementById("myCheck_honor");
    var m_honor = document.getElementById("honor");
    if (checkBox_honor.checked == true){
        main_right.style.display = "none";
        m_honor.style.display = "block";
    } else {
        main_right.style.display = "block";
        m_honor.style.display = "none";
    }
}
let honor30 = {
    src: 'images/honor30.png'
}
let honor20 = {
    src: 'images/honor20.png'
}
let honor9A = {
    src: 'images/Honor9A.png'
}
document.getElementById("img1_honor").src = honor9A.src
document.getElementById("img2_honor").src = honor20.src
document.getElementById("img3_honor").src = honor30.src
