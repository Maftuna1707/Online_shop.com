let num_1 = 0
function l_phones() {
    num_1++
    if(num_1 % 2 != 0){
        document.getElementById("menu_right1").className = "bi bi-chevron-down"
        document.getElementById("companies_p").style.display = "block";
    }else{
        document.getElementById("menu_right1").className = "bi bi-chevron-right"
        document.getElementById("companies_p").style.display = "none";
    }
}
let num_2 = 0
function l_laptops() {
    num_2++
    if(num_2 % 2 != 0){
        document.getElementById("menu_right2").className = "bi bi-chevron-down"
        document.getElementById("companies_c").style.display = "block";
    }else{
        document.getElementById("menu_right2").className = "bi bi-chevron-right"
        document.getElementById("companies_c").style.display = "none";
    }
}

let left = document.getElementById("left");
let right = document.getElementById("right");
let main_right = document.getElementById("main");
function iPhone() {
    let checkBox = document.getElementById("myCheck_iphone");
    let m_iphone = document.getElementById("iphone");
    if (checkBox.checked == true){
        left.style.borderRightStyle = "none"
        right.style.borderLeftColor = "#0d6efd"
        right.style.borderLeftStyle = "solid"
        main_right.style.display = "none";
        m_iphone.style.display = "block";
    } else {
        right.style.borderLeftStyle = "none"
        left.style.borderRightColor = "#0d6efd"
        left.style.borderRightStyle = "solid"
        main_right.style.display = "block";
        m_iphone.style.display = "none";
    }
}

let iphone8 = {
    memory: '64GB',
    version: 'iPhone 8',
    price: '$299.99',
    src: 'images/apple8.png'
}
document.getElementById("iP8_memory").innerHTML = iphone8.memory
document.getElementById("iP8_version").innerHTML = iphone8.version
document.getElementById("iP8_price").innerHTML = iphone8.price
document.getElementById("img1").src = iphone8.src

let iphone11pro = {
    memory: '64GB',
    version: 'iPhone 11 Pro',
    price: '$999.99',
    src: 'images/apple11pro.png'
}

document.getElementById("iP11pro_memory").innerHTML = iphone11pro.memory
document.getElementById("iP11pro_version").innerHTML = iphone11pro.version
document.getElementById("iP11pro_price").innerHTML = iphone11pro.price
document.getElementById("img2").src = iphone11pro.src
let iphoneXS = {
    memory: '64GB',
    version: 'iPhone 11 Pro',
    price: '$999.99',
    src: 'images/appleXS.png'
}
document.getElementById("iPXS_memory").innerHTML = iphoneXS.memory
document.getElementById("iPXS_version").innerHTML = iphoneXS.version
document.getElementById("iPXS_price").innerHTML = iphoneXS.price
document.getElementById("img3").src = iphoneXS.src


function sony() {
    let checkBox_sony = document.getElementById("myCheck_sony");
    let m_sony = document.getElementById("sony");
    if (checkBox_sony.checked == true){
        main_right.style.display = "none";
        left.style.borderRightStyle = "none"
        right.style.borderLeftColor = "#0d6efd"
        right.style.borderLeftStyle = "solid"
        m_sony.style.display = "block";
    } else {
        main_right.style.display = "block";
        right.style.borderLeftStyle = "none"
        left.style.borderRightColor = "#0d6efd"
        left.style.borderRightStyle = "solid"
        m_sony.style.display = "none";
    }
}
let xperia5 = {
    memory: '72GB',
    version: 'Xperia 5 II',
    price: '$899.99',
    src: 'images/XPERIA5.png'
}
document.getElementById("img1_sony").src = xperia5.src
document.getElementById("xperia5_version").innerHTML = xperia5.version
document.getElementById("xperia5_memory").innerHTML = xperia5.memory
document.getElementById("xperia5_price").innerHTML = xperia5.price
let xperia10 = {
    memory: '65GB',
    version: 'Xperia 10',
    price: '$1222.99',
    src: 'images/xperia10.png'
}
document.getElementById("img2_sony").src = xperia10.src
document.getElementById("xperia10_version").innerHTML = xperia10.version
document.getElementById("xperia10_memory").innerHTML = xperia10.memory
document.getElementById("xperia10_price").innerHTML = xperia10.price

let xperiaL7 = {
    memory: '72GB',
    version: 'Xperia L7',
    price: '$827.77',
    src: 'images/xperiaL7.png'
}
document.getElementById("img3_sony").src = xperiaL7.src
document.getElementById("xperia7_version").innerHTML = xperiaL7.version
document.getElementById("xperia7_memory").innerHTML = xperiaL7.memory
document.getElementById("xperia7_price").innerHTML = xperiaL7.price

let aa=56;

function huawei() {
    let checkBox_huawei = document.getElementById("myCheck_huawei");
    let m_huawei = document.getElementById("huawei");
    if (checkBox_huawei.checked == true){
        left.style.borderRightStyle = "none"
        right.style.borderLeftColor = "#0d6efd"
        right.style.borderLeftStyle = "solid"
        main_right.style.display = "none";
        m_huawei.style.display = "block";
    } else {
        main_right.style.display = "block";
        right.style.borderLeftStyle = "none"
        left.style.borderRightColor = "##0d6efd"
        left.style.borderRightStyle = "solid"
        m_huawei.style.display = "none";
    }
}
let huawei1 = {
    memory: '74GB',
    version: 'Huawei P40',
    price: '$999.99',
    src: 'images/Huawei-P40.png'
}
document.getElementById("img1_huawei").src = huawei1.src
document.getElementById("huawei_version").innerHTML = huawei1.version
document.getElementById("huawei_memory").innerHTML = huawei1.memory
document.getElementById("huawei_price").innerHTML = huawei1.price

let huawei2 = {
    memory: '74GB',
    version: 'Huawei P40',
    price: '$999.99',
    src: 'images/huaweiP30.png'
}
document.getElementById("img2_huawei").src = huawei2.src
document.getElementById("huawei2_version").innerHTML = huawei2.version
document.getElementById("huawei2_memory").innerHTML = huawei2.memory
document.getElementById("huawei2_price").innerHTML = huawei2.price
let huawei3 = {
    memory: '74GB',
    version: 'Huawei P40',
    price: '$999.99',
    src: 'images/Huawei-Y7.png'
}

document.getElementById("img3_huawei").src = huawei3.src
document.getElementById("huawei3_version").innerHTML = huawei3.version
document.getElementById("huawei3_memory").innerHTML = huawei3.memory
// document.getElementById("huawei3_price").innerHTML = huawei3.price

function honor() {
    var checkBox_honor = document.getElementById("myCheck_honor");
    var m_honor = document.getElementById("honor");
    if (checkBox_honor.checked == true){
        main_right.style.display = "none";
        left.style.borderRightStyle = "none"
        right.style.borderLeftColor = "0d6efd"
        right.style.borderLeftStyle = "solid"
        m_honor.style.display = "block";
    } else {
        main_right.style.display = "block";
        m_honor.style.display = "none";
        right.style.borderLeftStyle = "none"
        left.style.borderRightColor = "0d6efd"
        left.style.borderRightStyle = "solid"
    }
}
let honor1 = {
    memory: '64GB',
    version: 'Honor 30',
    price: '$799.99',
    src: 'images/honor30.png'
}
document.getElementById("img1_honor").src = honor1.src
document.getElementById("honor1_version").innerHTML = honor1.version
document.getElementById("honor1_memory").innerHTML = honor1.memory
document.getElementById("honor1_price").innerHTML = honor1.price

let honor2 = {
    memory: '74GB',
    version: 'Honor 20',
    price: '$999.99',
    src: 'images/honor20.png'
}
document.getElementById("img2_honor").src = honor2.src
document.getElementById("honor2_version").innerHTML = honor2.version
document.getElementById("honor2_memory").innerHTML = honor2.memory
document.getElementById("honor2_price").innerHTML = honor2.price

let honor3 = {
    memory: '74GB',
    version: 'Honor 9A',
    price: '$999.99',
    src: 'images/Honor9A.png'
}
document.getElementById("img3_honor").src = honor3.src
document.getElementById("honor3_version").innerHTML = honor3.version
document.getElementById("honor3_memory").innerHTML = honor3.memory
document.getElementById("honor3_price").innerHTML = honor2.price

function macBook() {
    let checkBox_macBook = document.getElementById("myCheck_macBook");
    let m_macBook = document.getElementById("macBook");
    if (checkBox_macBook.checked == true){
        main_right.style.display = "none";
        left.style.borderRightStyle = "none"
        right.style.borderLeftColor = "0d6efd"
        right.style.borderLeftStyle = "solid"
        main_right.style.display = "none";
        m_macBook.style.display = "block";
    } else {
        right.style.borderLeftStyle = "none"
        left.style.borderRightColor = "0d6efd"
        left.style.borderRightStyle = "solid"
        main_right.style.display = "block";
        m_macBook.style.display = "none";
    }
}
let macBook1 = {
    memory: '74GB',
    version: 'MacBook',
    price: '$2000.99',
    src: 'images/2015-03.png'
}
document.getElementById("img1_macBook").src = honor3.src
document.getElementById("macBook1_version").innerHTML = macBook1.version
document.getElementById("macBook1_memory").innerHTML = macBook1.memory
document.getElementById("macBook1_price").innerHTML = macBook1.price

let macBook2 = {
    memory: '74GB',
    version: 'MacBook',
    price: '$2000.99',
    src: 'images/2020M1.png'
}
document.getElementById("img2_macBook").src = macBook2.src
document.getElementById("macBook2_version").innerHTML = macBook2.version
document.getElementById("macBook2_memory").innerHTML = macBook2.memory
document.getElementById("macBook2_price").innerHTML = macBook2.price

let macBook3 = {
    memory: '74GB',
    version: 'MacBook',
    price: '$2000.99',
    src: 'images/macbook2018.png'
}
document.getElementById("img3_macBook").src = macBook3.src
document.getElementById("macBook3_version").innerHTML = macBook3.version
document.getElementById("macBook3_memory").innerHTML = macBook3.memory
document.getElementById("macBook3_price").innerHTML = macBook3.price


function lenovo() {
    let checkBox_lenovo = document.getElementById("myCheck_lenovo");
    let m_lenovo = document.getElementById("lenovo");
    if (checkBox_lenovo.checked == true){
        main_right.style.display = "none";
        left.style.borderRightStyle = "none"
        right.style.borderLeftColor = "0d6efd"
        right.style.borderLeftStyle = "solid"
        main_right.style.display = "none";
        m_lenovo.style.display = "block";
    } else {
        right.style.borderLeftStyle = "none"
        left.style.borderRightColor = "0d6efd"
        left.style.borderRightStyle = "solid"
        main_right.style.display = "block";
        m_lenovo.style.display = "none";
    }
}
let lenovo1 = {
    memory: '74GB',
    version: 'Lenovo',
    price: '$2000.99',
    src: 'images/2015-03.png'
}
document.getElementById("img1_lenovo").src = lenovo1.src
document.getElementById("lenovo_version").innerHTML = lenovo1.version
document.getElementById("lenovo_memory").innerHTML = lenovo1.memory
document.getElementById("lenovo_price").innerHTML = lenovo1.price

let lenovo2 = {
    memory: '74GB',
    version: 'Lenovo',
    price: '$2000.99',
    src: 'images/2020M1.png'
}
document.getElementById("img2_lenovo").src = lenovo2.src
document.getElementById("lenovo2_version").innerHTML = lenovo2.version
document.getElementById("lenovo2_memory").innerHTML = lenovo2.memory
document.getElementById("lenovo2_price").innerHTML = lenovo2.price

let lenovo3 = {
    memory: '74GB',
    version: 'Lenovo',
    price: '$2000.99',
    src: 'images/macbook2018.png'
}
document.getElementById("img3_lenovo").src = lenovo3.src
document.getElementById("lenovo3_version").innerHTML = lenovo3.version
document.getElementById("lenovo3_memory").innerHTML = lenovo3.memory
document.getElementById("lenovo3_price").innerHTML = lenovo3.price


function acer() {
    let checkBox_lenovo = document.getElementById("myCheck_acer");
    let m_lenovo = document.getElementById("acer");
    if (checkBox_lenovo.checked == true){
        main_right.style.display = "none";
        left.style.borderRightStyle = "none"
        right.style.borderLeftColor = "0d6efd"
        right.style.borderLeftStyle = "solid"
        main_right.style.display = "none";
        m_lenovo.style.display = "block";
    } else {
        right.style.borderLeftStyle = "none"
        left.style.borderRightColor = "0d6efd"
        left.style.borderRightStyle = "solid"
        main_right.style.display = "block";
        m_lenovo.style.display = "none";
    }
}
let acer1 = {
    memory: '74GB',
    version: 'Lenovo',
    price: '$2000.99',
    src: 'images/2015-03.png'
}
document.getElementById("img1_acer").src = acer1.src
document.getElementById("acer1_version").innerHTML = acer1.version
document.getElementById("acer1_version").innerHTML = acer1.memory
document.getElementById("acer1_price").innerHTML = acer1.price

let acer2 = {
    memory: '74GB',
    version: 'Lenovo',
    price: '$2000.99',
    src: 'images/2020M1.png'
}
document.getElementById("img2_acer").src = acer2.src
document.getElementById("acer2_version").innerHTML = acer2.version
document.getElementById("acer2_memory").innerHTML = acer2.memory
document.getElementById("acer2_price").innerHTML = acer2.price

let acer3 = {
    memory: '74GB',
    version: 'Lenovo',
    price: '$2000.99',
    src: 'images/macbook2018.png'
}
document.getElementById("img3_acer").src = acer3.src
document.getElementById("acer3_version").innerHTML = acer3.version
document.getElementById("acer3_memory").innerHTML = acer3.memory
document.getElementById("acer3_price").innerHTML = acer3.price

function hp() {
    let checkBox_hp = document.getElementById("myCheck_hp");
    let myCheck_hp = document.getElementById("hp");
    if (checkBox_hp.checked == true ){
        main_right.style.display = "none";
        left.style.borderRightStyle = "none"
        right.style.borderLeftColor = "0d6efd"
        right.style.borderLeftStyle = "solid"
        main_right.style.display = "none";
        myCheck_hp.style.display = "block";
    } else {
        right.style.borderLeftStyle = "none"
        left.style.borderRightColor = "0d6efd"
        left.style.borderRightStyle = "solid"
        main_right.style.display = "block";
        myCheck_hp.display = "none";
    }
}
let hp1 = {
    memory: '74GB',
    version: 'HP',
    price: '$2000.99',
    src: 'images/2015-03.png'
}
document.getElementById("img1_hp").src = hp1.src
document.getElementById("hp1_version").innerHTML = hp1.version
document.getElementById("hp1_memory").innerHTML = hp1.memory
document.getElementById("hp1_price").innerHTML = hp1.price

let hp2={
    memory: '74GB',
    version: 'Lenovo',
    price: '$2000.99',
    src: 'images/2020M1.png'
}
document.getElementById("img2_hp").src = acer2.src
document.getElementById("hp2_version").innerHTML = acer2.version
document.getElementById("hp2_memory").innerHTML = acer2.memory
document.getElementById("hp2_price").innerHTML = acer2.price

let hp3 = {
    memory: '74GB',
    version: 'Lenovo',
    price: '$2000.99',
    src: 'images/macbook2018.png'
}
document.getElementById("img3_hp").src = hp3.src
document.getElementById("hp3_version").innerHTML = hp3.version
document.getElementById("hp3_memory").innerHTML = hp3.memory
document.getElementById("hp3_price").innerHTML = hp3.price


let counter = 0
function count(){
    counter++   
    document.getElementById("counter").innerHTML = counter;
} 
let num_n = 0
function cart(){
    num++
    if(num%2!=0){
        document.getElementById("orders").style.display = "block"
    }else{
        document.getElementById("orders").style.display = "none"
    }
}

