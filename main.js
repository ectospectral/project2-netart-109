let img0= document.querySelector('#image-0');
let img1= document.querySelector('#image-1');
let img2= document.querySelector('#image-2');
let img3= document.querySelector('#image-3');
let img4= document.querySelector('#image-4');

let button = document.querySelector('#btn');

img0.addEventListener('click', function(){
    img2.style.visibility = 'visible';
});
img1.addEventListener('click', function(){
    img3.style.visibility = 'visible';
    img4.style.visibility = 'visible';
});
img2.addEventListener('click', function(){
    img1.style.visibility = 'visible';
    img0.style.visibility = 'hidden';
});
img3.addEventListener('click', function(){
    img0.style.visibility = 'visible';
    img2.style.visibility = 'hidden'; 
    button.style.visibility = 'visible';
});
img4.addEventListener('click', function(){
    img0.style.visibility = 'visible';
    img1.style.visibility = 'hidden';
    img2.style.visibility = 'hidden';
    img3.style.visibility = 'hidden';
    img4.style.visibility = 'hidden';
});


