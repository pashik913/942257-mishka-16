var nojs = document.querySelector('.page-header--nojs');
var burger = document.querySelector('.page-header__toggle');
var header = document.querySelector('.page-header');


  nojs.classList.remove('page-header--nojs');

  burger.addEventListener('click', function () {

    console.log('click-menu');
    header.classList.toggle('page-header--opened');
  })
