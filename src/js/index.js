import '../scss/style.scss'

console.log('It works!')



const menuButton = document.querySelector('.open-sidebar');
const closeButton = document.querySelector('.burger-icon');
const sideBar = document.querySelector('.sidebar');
const mainContents = document.querySelector('.main-contents')

menuButton.addEventListener('click', function () {
  sideBar.classList.add('show-mobile');
  mainContents.classList.add('sidebar-open');
}
);
closeButton.addEventListener('click', function () {
  sideBar.classList.remove('show-mobile');
  mainContents.classList.remove('sidebar-open');
}
);




/*second container*/


document.addEventListener('DOMContentLoaded', function () { 
  var swiper = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

var swiper = new Swiper('.swiper2', {
    slidesPerView: 1,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

var swiper = new Swiper('.logos', {
    slidesPerView: 1,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

});

document.getElementById('toggle-desktop1').addEventListener('click', function () {
  const hiddenLogos = document.querySelectorAll('.tablet-hidden1');
  const btnText = this.querySelector('.button-text1')
  hiddenLogos.forEach(logo => {
    logo.classList.toggle('show');
  });
  this.classList.toggle('expanded');
  if (this.classList.contains('expanded')) {
    btnText.textContent = 'Hide';
  } else {
    btnText.textContent = 'Show all'
  }
});



document.getElementById('toggle-desktop2').addEventListener('click', function () {
  const hiddenRepair = document.querySelectorAll('.tablet-hide');
  const showText = this.querySelector('.button-text2')
  hiddenRepair.forEach(repair => {
    repair.classList.toggle('repair-show');
  });
  this.classList.toggle('expanded');
  if (this.classList.contains('expanded')) {
    showText.textContent = 'Hide';
  } else {
    showText.textContent = 'Show all'
  }
});




document.getElementById('first-more').addEventListener('click', function () {
  const hiddenPara = document.querySelectorAll('.hidden-para');
  const buttonText = this.querySelector('.more1')
  hiddenPara.forEach(para => {
    para.classList.toggle('para-show');
  });
  this.classList.toggle('expanded');
  if (this.classList.contains('expanded')) {
    buttonText.textContent = 'Read less';
  } else {
    buttonText.textContent = 'Read More'
  }
});