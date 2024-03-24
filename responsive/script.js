var badge = document.querySelector('.badge');
var menu = document.querySelector('.menu');
var menuVisible = document.querySelector('.menu__list');
var addCart = document.querySelectorAll('[data-product-id]');
var link = document.getElementsByClassName('breadcrumbs__link');
var count = 0;

menu.addEventListener("click", function () {
   menuVisible.classList.toggle('active');
});

for (let i = 0; link.length; i++) {
   if (link[i].href === window.location.href) {
      link[i].classList.add('active__link');
      break;
   }
}

addCart.forEach(item => {
   item.addEventListener("click", function () {
      count += 1;
      badge.innerHTML = count;

   });
})