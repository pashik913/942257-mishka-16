var burger = document.querySelector('.page-header__toggle');
var header = document.querySelector('.page-header');


  header.classList.remove('page-header--nojs');

  burger.addEventListener('click', function () {

    header.classList.toggle('page-header--opened');
  })
