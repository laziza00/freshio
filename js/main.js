let elshopbox=document.getElementById('modalshop');
let elshopbtn=document.getElementById('btnshop');
let elshopremove=document.getElementById('shopbtn');

elshopbtn.addEventListener('click',function () {
elshopbox.classList.add('show');
});

elshopremove.addEventListener('click',function () {
elshopbox.classList.remove('show');
 });