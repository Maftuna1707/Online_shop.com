function l_phones() {
    document.getElementById("menu_right1").className = "bi bi-chevron-down"
    document.getElementById("companies_p").style.display = "block";
}
function l_computers() {
    document.getElementById("menu_right2").className = "bi bi-chevron-down"
    document.getElementById("companies_c").style.display = "block";
}
var main_right = document.getElementById("main");
function iPhone() {
    var checkBox = document.getElementById("myCheck_iphone");
    var m_iphone = document.getElementById("iphone");
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
    var checkBox_sony = document.getElementById("myCheck_sony");
    var m_sony = document.getElementById("sony");
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
    var checkBox_huawei = document.getElementById("myCheck_huawei");
    var m_huawei = document.getElementById("huawei");
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



// function iPhone() {
//     var checkBox = document.getElementById("laptopss");
//     var m_iphone = document.getElementById("iphone");
//     if (checkBox.checked == true){
//         main_right.style.display = "none";
//         m_iphone.style.display = "block";
//     } else {
//         main_right.style.display = "block";
//         m_iphone.style.display = "none";
//     }
// }
//
// let iphone8 = {
//     src: 'images/apple8.png'
// }
// let iphone11pro = {
//     src: 'images/apple11pro.png'
// }
// let iphoneXS = {
//     src: 'images/appleXS.png'
// }
// document.getElementById("img1").src = iphone8.src
// document.getElementById("img2").src = iphone11pro.src
// document.getElementById("img3").src = iphoneXS.src
//
//
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
// function honor() {
//     var checkBox_honor = document.getElementById("myCheck_honor");
//     var m_honor = document.getElementById("honor");
//     if (checkBox_honor.checked == true){
//         main_right.style.display = "none";
//         m_honor.style.display = "block";
//     } else {
//         main_right.style.display = "block";
//         m_honor.style.display = "none";
//     }
// }
// let honor30 = {
//     src: 'images/honor30.png'
// }
// let honor20 = {
//     src: 'images/honor20.png'
// }
// let honor9A = {
//     src: 'images/Honor9A.png'
// }
// document.getElementById("img1_honor").src = honor9A.src
// document.getElementById("img2_honor").src = honor20.src
// document.getElementById("img3_honor").src = honor30.src
