AOS.init();


let Up = document.getElementById('goup');
let header = document.getElementById('header');
let containerJs = document.getElementById('container');


// scroll
window.onscroll = function () {
    let scrollvalue = scrollY;

    if (scrollvalue >= 20) {
        header.style.background = '#0F172B';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }

    if (scrollvalue >= 170) {
        Up.style.display = 'block';
    } else {
        Up.style.display = 'none';
    }

}


let headermediaJs = document.getElementById('headermedia');
let hrlineJs = document.getElementById('hrline');
let iconmediaJs = document.getElementById('iconmedia');


iconmediaJs.onclick = function () {
    if (headermediaJs.classList.contains('hide')) {
        headermediaJs.classList.remove('hide');
        hrlineJs.classList.remove('hide');
        // containerJs.style.paddingTop = '350px';
    } else {
        headermediaJs.classList.add('hide');
        hrlineJs.classList.add('hide');
        // containerJs.style.paddingTop = '77px';
    }
}

// Food menu
let breakfast = document.getElementById('break_lunach_dinner__items1');
let launch = document.getElementById('break_lunach_dinner__items2');
let dinner = document.getElementById('break_lunach_dinner__items3');
let menuListFood1 = document.getElementById('menuList_food1');
let menuListFood2 = document.getElementById('menuList_food2');
let menuListFood3 = document.getElementById('menuList_food3');

breakfast.onclick = function () {
    breakfast.style.borderBottom = '2px solid #EA6D27';
    launch.style.borderBottom = 'none';
    dinner.style.borderBottom = 'none';
    menuListFood1.style.display = 'block';
    menuListFood2.style.display = 'none';
    menuListFood3.style.display = 'none';

}

launch.onclick = function () {
    breakfast.style.borderBottom = 'none';
    launch.style.borderBottom = '2px solid #EA6D27';
    dinner.style.borderBottom = 'none';
    menuListFood1.style.display = 'none';
    menuListFood2.style.display = 'block';
    menuListFood3.style.display = 'none';
}
dinner.onclick = function () {
    breakfast.style.borderBottom = 'none';
    launch.style.borderBottom = 'none';
    dinner.style.borderBottom = '2px solid #EA6D27';
    menuListFood1.style.display = 'none';
    menuListFood2.style.display = 'none';
    menuListFood3.style.display = 'block';
}

// 

let breakfast_2 = document.getElementById('break_lunach_dinner__items1_2');
let launch_2 = document.getElementById('break_lunach_dinner__items2_2');
let dinner_2 = document.getElementById('break_lunach_dinner__items3_2');
let menuListFood1_2 = document.getElementById('menuList_food1_2');
let menuListFood2_2 = document.getElementById('menuList_food2_2');
let menuListFood3_2 = document.getElementById('menuList_food3_2');

breakfast_2.onclick = function () {
    breakfast_2.style.borderBottom = '2px solid #EA6D27';
    launch_2.style.borderBottom = 'none';
    dinner_2.style.borderBottom = 'none';
    menuListFood1_2.style.display = 'block';
    menuListFood2_2.style.display = 'none';
    menuListFood3_2.style.display = 'none';

}

launch_2.onclick = function () {
    breakfast_2.style.borderBottom = 'none';
    launch_2.style.borderBottom = '2px solid #EA6D27';
    dinner_2.style.borderBottom = 'none';
    menuListFood1_2.style.display = 'none';
    menuListFood2_2.style.display = 'block';
    menuListFood3_2.style.display = 'none';
}
dinner_2.onclick = function () {
    breakfast_2.style.borderBottom = 'none';
    launch_2.style.borderBottom = 'none';
    dinner_2.style.borderBottom = '2px solid #EA6D27';
    menuListFood1_2.style.display = 'none';
    menuListFood2_2.style.display = 'none';
    menuListFood3_2.style.display = 'block';
}

// 

let breakfast_3 = document.getElementById('break_lunach_dinner__items1_3');
let launch_3 = document.getElementById('break_lunach_dinner__items2_3');
let dinner_3 = document.getElementById('break_lunach_dinner__items3_3');
let menuListFood1_3 = document.getElementById('menuList_food1_3');
let menuListFood2_3 = document.getElementById('menuList_food2_3');
let menuListFood3_3 = document.getElementById('menuList_food3_3');

breakfast_3.onclick = function () {
    breakfast_3.style.borderBottom = '2px solid #EA6D27';
    launch_3.style.borderBottom = 'none';
    dinner_3.style.borderBottom = 'none';
    menuListFood1_3.style.display = 'block';
    menuListFood2_3.style.display = 'none';
    menuListFood3_3.style.display = 'none';

}

launch_3.onclick = function () {
    breakfast_3.style.borderBottom = 'none';
    launch_3.style.borderBottom = '2px solid #EA6D27';
    dinner_3.style.borderBottom = 'none';
    menuListFood1_3.style.display = 'none';
    menuListFood2_3.style.display = 'block';
    menuListFood3_3.style.display = 'none';
}
dinner_3.onclick = function () {
    breakfast_3.style.borderBottom = 'none';
    launch_3.style.borderBottom = 'none';
    dinner_3.style.borderBottom = '2px solid #EA6D27';
    menuListFood1_3.style.display = 'none';
    menuListFood2_3.style.display = 'none';
    menuListFood3_3.style.display = 'block';
}



// booking

let buttoBooktableJs = document.getElementById('button_booktable');

let inputNameJs = document.getElementById('input_name') ;

let inputemailJs = document.getElementById('input_email') ;

let inputdatetime = document.getElementById('input_datetime') ;

let selectdatetimeJs = document.getElementById('select_datetime') ;

let selectclassJs = document.getElementById('select_class') ;

let textareavalueJs = document.getElementById('textarea_value') ;

// let arrayList_Booking = [] ;

// buttoBooktableJs.onclick = function booking() {
   
// }
