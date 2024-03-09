var cart = document.querySelector('.cart');
var badge = document.querySelector('.badge');
var menu = document.querySelector('.menu');
var menuVisible = document.querySelector('.menu__list');
var count = 0;
cart.addEventListener("click", function() {
   count += 1;
   badge.innerHTML = count;

});

menu.addEventListener("click", function() {
   menuVisible.classList.toggle('active');
});
