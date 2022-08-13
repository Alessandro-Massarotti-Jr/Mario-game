
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


function jump() {
   mario.classList.add('jump') 
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 580);
}

const loop = setInterval(()=>{

     const pipePosition = pipe.offsetLeft
     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

     if(pipePosition <= 120 && pipePosition >0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.setAttribute('src','assets/img/mario_die.png');

        clearInterval(loop);

     }
},10);

document.addEventListener('keydown', (event)=>{
    jump()
});

//120px