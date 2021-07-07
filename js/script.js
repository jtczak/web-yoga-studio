const nav = document.querySelector('.navbar')
const allNavItems = document.querySelectorAll('.nav-link')
const navList = document.querySelector('.navbar-collapse')
const burger = document.querySelector('.navbar-toggler')
const burgerIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-times')

burger.addEventListener('click', function () {
    nav.classList.toggle('show');
    burger.classList.toggle('show');

    if (burger.classList.contains('show')) {

        navList.classList.remove('hide')
        burgerIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
        nav.classList.add('shadow-bg')

    } else {
        closeIcon.classList.add('hide');
        burgerIcon.classList.remove('hide')
        navList.classList.add('hide')
        burger.classList.remove('shadow-bg')

    }
})


document.addEventListener('DOMContentLoaded', function () {

    function addShadow() {
        if (window.scrollY >= 10) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

    window.addEventListener('scroll', addShadow)
})

mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

AOS.init();



function initMap() {
    const wpdc = {
        lat: 52.23114,
        lng: 20.992289
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: wpdc,
    });
    const marker = new google.maps.Marker({
        position: wpdc,
        animation: google.maps.Animation.DROP,
        map: map,
    });
    marker.addListener("click", toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
};
