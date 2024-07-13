const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e) {
if (e.keyCode ===13){
    play()
}
})

button.addEventListener("click", play);

//1 Доступ к числу которое вводит пользователь
//2 Запрещаем вводить число меньше 1 и больше 20

function play() {
    const userNumber = document.querySelector("#guess").value;

    if(userNumber <1 || userNumber >20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Введи число от 1 до 20!',
          })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Нужно ввести число!',
          })
    }
    else {
    if (userNumber < answer){
        Swal.fire('Попробуй число повыше!', 
        'Компьютер пока побеждает!')
    }
    else if (userNumber > answer) {
        Swal.fire('Попробуй число пониже!', 
        'Компьютер пока побеждает!')
    }
    else {
        Swal.fire({
            title: 'ПОБЕДА!',
            imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }
}
}
particlesJS("particles-js", {
    "particles":{"number":{"value":6,"density":{"enable":true,"value_area":800
}},
"color":{"value":"#53330e"},
"shape":{"type":"circle","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},
"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
"size":{"value":160,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},
"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},
"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,
"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},
"onclick":{"enable":false,"mode":"push"},
"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
"remove":{"particles_nb":2}}},"retina_detect":true});
var count_particles, stats, update; stats = new Stats; stats.setMode(0); 
stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = '0px'; 
document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles');
 update = function() { stats.begin(); stats.end(); 
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
    requestAnimationFrame(update); };
     requestAnimationFrame(update);;