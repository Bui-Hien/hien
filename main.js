// let slideIndex = 1;
// let slides = document.getElementsByClassName("about-right-item");
// window.addEventListener("load", () => {
//     for (i = 3; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
// });
//
// function plusSlides(n) {
//     showSlides(slideIndex += n);
//
// }
//
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("about-right-item");
//     let dots = document.getElementsByClassName("dot");
//     if (n == 4) {
//         slideIndex = 3
//     }
//     if (n == 0) {
//         slideIndex = 1;
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//
//     }
//     slides[slideIndex - 1].style.display = "block";
//     slides[slideIndex].style.display = "block";
//     slides[slideIndex + 1].style.display = "block";
//
//
//     for (i = 0; i < dots.length; i++) {
//         dots[i].style.background = "#d4d7dd";
//         dots[i].style.transform = "scale(1)";
//
//     }
//     dots[slideIndex - 1].style.transition = "transform 0.2s ease-in-out";
//     dots[slideIndex - 1].style.background = "#717171";
//     dots[slideIndex - 1].style.transform = "scale(1.2)";
// }
//lây kich thươc cua cua so dang mo
var w = window.innerWidth;
var h = window.innerHeight;
console.log(w);
window.addEventListener('resize', function () {
    w = window.innerWidth;
    h = window.innerHeight;
});


// var index = 0;
//
// function currentSlidetestimonials(n) {
//     let dottestimonials = document.getElementsByClassName("dottestimonials");
//     let testimonials_left_content = document.getElementsByClassName("testimonials-left-content");
//     for (i = 0; i < dottestimonials.length; i++) {
//         dottestimonials[i].style.background = "#d4d7dd";
//         dottestimonials[i].style.transform = "scale(1)";
//
//     }
//     const widthItem = testimonials_left_content[0].offsetWidth;
//
//     if (index < n) {
//         let hieu = n - index;
//         let mar = 0;
//         for (j = index; j < n; j++) {
//             mar++;
//         }
//         document.querySelector('div.testimonials-left-content-wrap').scrollLeft += mar * widthItem;
//     }
//     if (index > n) {
//         let hieu = index - n;
//         let mar = 0;
//         for (j = index; j > n; j--) {
//             mar++;
//         }
//         document.querySelector('div.testimonials-left-content-wrap').scrollLeft -= mar * widthItem;
//     }
//     dottestimonials[n].style.transition = "transform 0.2s ease-in-out";
//     dottestimonials[n].style.background = "#717171";
//     dottestimonials[n].style.transform = "scale(1.2)";
//     index = n;
// }

//

var list_about_slider = document.querySelector("div.list-about-right");
var item_about_slider = document.querySelector("div.about-right-item");
const widthItem_about = list_about_slider.offsetWidth / 2;
list_about_slider.addEventListener('mousedown', (event) => {
    list_about_slider.style.cursor = "grabbing";
    // Nếu chuột không được nhấn ở phần tử con của testimonialsWrap
    if (event.target.closest('.about-right-item') === null) {
        return;
    }

    // Ngăn chặn sự kiện mặc định để tránh việc kéo toàn bộ trang web
    event.preventDefault();

    // Lấy vị trí khởi đầu của sự kiện chuột
    const startX = event.pageX;

    list_about_slider.addEventListener('mousemove', onMouseMove);
    list_about_slider.addEventListener('mouseup', onMouseUp);
    let moveX;

    function onMouseMove(event) {
        // Tính toán khoảng cách di chuyển của chuột so với vị trí khởi đầu
        moveX = event.pageX - startX;
        list_about_slider.scrollLeft += moveX;
        // Di chuyển khung cuộn theo khoảng cách tính
    }

    function onMouseUp() {
        list_about_slider.style.cursor = "grab";
        list_about_slider.removeEventListener('mousemove', onMouseMove);
        list_about_slider.removeEventListener('mouseup', onMouseUp);
        if (moveX >= widthItem_about) {
            list_about_slider.scrollLeft -= (widthItem_about * 2);
        } else {
            list_about_slider.scrollLeft += (widthItem_about * 2);
        }
    }
});

var testimonialsWrap = document.querySelector('div.testimonials-left-content-wrap');
var testimonials_left_content = document.querySelector('div.testimonials-left-content');
const widthItem = testimonialsWrap.offsetWidth / 2;
testimonialsWrap.addEventListener('mousedown', (event) => {
    //KHI MUOSEDOWN THI CURSOR CHUYEN KIEU
    testimonialsWrap.style.cursor = "grabbing";
    // Nếu chuột không được nhấn ở phần tử con của testimonialsWrap
    if (event.target.closest('.testimonials-left-content') === null) {
        return;
    }

    // Ngăn chặn sự kiện mặc định để tránh việc kéo toàn bộ trang web
    event.preventDefault();

    // Lấy vị trí khởi đầu của sự kiện chuột
    const startX = event.pageX;

    testimonialsWrap.addEventListener('mousemove', onMouseMove);
    testimonialsWrap.addEventListener('mouseup', onMouseUp);

    let moveX;

    function onMouseMove(event) {
        // Tính toán khoảng cách di chuyển của chuột so với vị trí khởi đầu
        moveX = event.pageX - startX;
        testimonialsWrap.scrollLeft += moveX;
        // Di chuyển khung cuộn theo khoảng cách tính
    }

    // var dottestimonials = document.getElementsByClassName("p.dottestimonials");
    // console.log("fadjlka;" + dottestimonials)
    // for (j = 0; i < dottestimonials.length; i++) {
    //     dottestimonials[j].style.background = "#d4d7dd";
    //     dottestimonials[j].style.transform = "scale(1)";
    // }
    // if (moveX < 0 && mark < 3) dottestimonials[mark + 1].style.background = "#717171";
    // dottestimonials[mark + 1].style.transform = "scale(1.2)";
    // if (moveX > 0 && mark > 0) {
    //     dottestimonials[mark - 1].style.background = "#717171";
    //     dottestimonials[mark - 1].style.transform = "scale(1.2)";
    // }

    function onMouseUp() {
        testimonialsWrap.removeEventListener('mousemove', onMouseMove);
        testimonialsWrap.removeEventListener('mouseup', onMouseUp);
        testimonialsWrap.style.cursor = "grab";
        if (moveX >= widthItem) {
            testimonialsWrap.scrollLeft -= widthItem * 2;
        }
        if (moveX < widthItem) {
            testimonialsWrap.scrollLeft += widthItem * 2;
        }
    }
});


var dragLink = document.getElementById('drag-link');

dragLink.addEventListener('dragstart', function () {
    dragLink.classList.add('dragging');
});

dragLink.addEventListener('dragend', function () {
    dragLink.classList.remove('dragging');
});


//khi load form
var loadTitle = document.getElementById('home-content-scale-title');
var loadText = document.getElementById('home-content-scale-text');
let timerId;

window.addEventListener("load", () => {

    // Tạo 3 Promise cho 3 sự kiện cần xử lý
    const firstEvent = new Promise((resolve, reject) => {
        setTimeout(() => {
            loadTitle.style.transition = "scale 1s ease-out";
            loadTitle.style.scale = "1.8";
        }, 0);
    });

    const secondEvent = new Promise((resolve, reject) => {
        setTimeout(() => {
            loadText.style.display = "block";
        }, 1000);
    });

    const thirdEvent = new Promise((resolve, reject) => {
        setTimeout(() => {
            loadText.style.transition = "scale 1s ease-out";
            loadText.style.scale = "1.5";
        }, 1200);
    });
    Promise.all([secondEvent, thirdEvent]).then(results => {
        loadText.style.display = "block";
        loadText.style.transition = "scale 1s ease-out";
        loadText.style.scale = "1.8";
    }).catch(error => {
        console.log(error);
    });
// Kích hoạt các sự kiện liên tiếp bằng cách sử dụng then()
    firstEvent.then(result => {
        return result;
    }).catch(error => {
        console.log(error);
    });
});


//proces ẩn hiện
function hien() {
    let displayNone = document.getElementsByClassName("process-bottom-left-content");
    for (i = 0; i < displayNone.length; i++) {
        if (displayNone[i].classList.contains("hien")) {
            if (i != 0) displayNone[i].classList.remove("hien");
        }
    }
    const element = document.querySelector("p.hien1");
    element.classList.toggle("hien");

}

function hien1() {
    let displayNone = document.getElementsByClassName("process-bottom-left-content");
    for (i = 0; i < displayNone.length; i++) {
        if (displayNone[i].classList.contains("hien")) {
            if (i != 1) displayNone[i].classList.remove("hien");
        }
    }
    const element = document.querySelector("p.hien2");
    element.classList.toggle("hien");

}

function hien2() {
    let displayNone = document.getElementsByClassName("process-bottom-left-content");
    for (i = 0; i < displayNone.length; i++) {
        if (displayNone[i].classList.contains("hien")) {
            if (i != 2) displayNone[i].classList.remove("hien");
        }
    }
    const element = document.querySelector("p.hien3");
    element.classList.toggle("hien");

}

//xóa thẻ br o man hinh table
if (768 <= w && w <= 1023) {
    var p = document.querySelector('#footer-content-item-search-p'); // chọn phần tử <p>
    var br = p.querySelector('br'); // tìm phần tử <br>
    p.removeChild(br); // loại bỏ phần tử <br> khỏi phần tử <p>
}

//hien menu table, mebile
function displayMenu() {

    var element = document.getElementsByClassName("header-center");
    if (element[0].classList.contains("header-center_block")) {
        const element = document.querySelectorAll('.header-center_block')[0];

        // Gán tên animation và thời gian hoàn thành của animation cho phần tử
        element.style.animationName = 'example';
        element.style.animationDuration = '1s';

        // Định nghĩa keyframes cho animation
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
      @keyframes example {
        from {margin-left: 0;}
        to {margin-left: -100%;}
      }
    `;
        document.head.appendChild(styleSheet);
        setTimeout(() => {
            element.classList.remove("header-center_block");
        }, 1000);


    } else {
        element[0].classList.add("header-center_block");
        // Đặt các thuộc tính animation cho phần tử
        element[0].style.animationName = 'example1';
        element[0].style.animationDuration = '1s';

        // Định nghĩa keyframes cho animation
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
          @keyframes example1 {
            from {margin-left: -100%;}
            to {margin-left: 0;}
          }
        `;
        document.head.appendChild(styleSheet);
    }
}