
let main = document.getElementsByClassName("bk-img");


// aading background 
window.onload = function () {
  window.addEventListener("scroll", addBackground);

  function addBackground() {

    // for 2nd section
    let video = document.querySelector(".video-div");
    let img1 = document.getElementById('1').getBoundingClientRect();

    if (img1.bottom < 0) {

      video.style.opacity = "0";
      video.style.removeProperty("top");
      main[0].style.backgroundImage = 'url("img/aboutus-img.jpg")';

    } else {
      main[0].style.backgroundColor = "#f5f0ec";
      main[0].style.removeProperty("background-image");
      video.style.top = "0"
      video.style.opacity = "1"
      video.style.zIndex = "0";

    }

    //for 3rd section

    let sec_2 = document.getElementById("2").getBoundingClientRect();
    let sec_3 = document.querySelector(".sec-3");
    if (sec_2.bottom < -130) {

      sec_3.style.opacity = "1";

    } else {
      sec_3.style.opacity = "0";
    }

    // removing image
    if (sec_2.bottom < -300) {
      main[0].style.backgroundImage = "none"
    }

    // for 4rth sectoin bio
    let bio_sec = document.querySelector(".bio");
    let layer = document.getElementById("7").getBoundingClientRect();

    let sec3_btn = document.querySelector(".sec3-btn").getBoundingClientRect();

    if (sec3_btn.bottom < 200) {

      bio_sec.style.opacity = "1";
      bio_sec.style.position = "fixed"
      bio_sec.style.top = "0"
      bio_sec.style.zIndex = "1"
      main[0].style.backgroundColor = "white";

    } else {
      bio_sec.style.opacity = "0";
      bio_sec.style.zIndex = "-1"
    }

    if (layer.bottom < 500 && layer.bottom < 500) {
      bio_sec.style.opacity = "0";
      bio_sec.style.zIndex = "-1"
    }

    // changing text
    let p1 = document.querySelector(".t-1");
    let p2 = document.querySelector(".t-2");
    if (layer.bottom < 1200 ) {
      p1.style.right = "100%";
      p1.style.opacity= "0"
      p2.style.right = "100%";
      p2.style.opacity= "1"
      
    }else{
      p1.style.right = "0%";
      p1.style.opacity= "1"
      p2.style.right = "0%";
      p2.style.opacity= "0"
     
    }

    //  for 7nth  section
    let sec8 = document.querySelector(".sec-8");
    let sec7 = document.querySelector(".sec-7").getBoundingClientRect();

    if (sec7.bottom < 70) {
      main[0].style.backgroundColor = " #ff7360";
    }

    // for 8th section
    let sec8end = sec8.getBoundingClientRect();
    let sec9 = document.querySelector(".footer");

    if (sec8end.bottom < 0) {
      main[0].style.backgroundColor = "black";
    }


  }

}


// gallery scroll

let gallery = document.querySelector(".gallery-box");
let lastScrollTop = 0;
document.addEventListener("scroll", function () {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  let galleryRect = gallery.getBoundingClientRect();

  const isGalleryVisible = galleryRect.top < window.innerHeight && galleryRect.bottom >= 0;

  if (isGalleryVisible) {
    if (st > lastScrollTop) {
      function scrollRight() {
        gallery.scrollLeft += 1; // Scroll to the right
      }

      let scrollInterval = setInterval(scrollRight, 50);

      setTimeout(() => clearInterval(scrollInterval), 400);

    } else {

      function scrollleft() {
        gallery.scrollLeft -= 1; // Scroll to the right
      }

      let scrollInterval2 = setInterval(scrollleft, 90);

      setTimeout(() => clearInterval(scrollInterval2), 400);
    }
  }

  lastScrollTop = st;

});






