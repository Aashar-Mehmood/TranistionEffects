function mouseOver() {
  txt.style.opacity = '1';
  txt.style.transform = 'translateY(0px)';

}

function moseOut() {
  txt.style.transform = 'translateY(-600px)';

}

function mouseOver2() {
  txt2.style.opacity = '1';
  txt2.style.transformOrigin = 'left';
  txt2.style.transform = 'scaleX(1)';

}

function moseOut2() {
  txt2.style.transformOrigin = 'left';
  txt2.style.transform = 'scaleX(0)';
}

function mouseOver3() {
  txt3.style.opacity = '1';
  txt3.style.transformOrigin = 'top';
  txt3.style.transform = 'scaleY(1)';

}

function moseOut3() {
  txt3.style.transformOrigin = 'bottom';
  txt3.style.transform = 'scaleY(0)';
}

function mouseOver4() {
  txt4.style.opacity = '1';
  txt4.style.transformOrigin = 'top left';
  txt4.style.transform = 'scale(1, 1)';
}

function moseOut4() {
  txt4.style.transform = 'scale(0, 0)';
}


const containers = document.querySelectorAll('div.container div.image');
const textContainers = document.querySelectorAll('div.container div.text');
containers.forEach((container)=>{
  container.addEventListener('mouseenter', (e)=>{
    const txt = e.target.nextElementSibling;
    txt.classList.add('hovered');
  });
});

textContainers.forEach((textContainer)=>{
  textContainer.addEventListener('mouseleave', (e)=>{
    e.target.classList.remove('hovered');
  });
});


