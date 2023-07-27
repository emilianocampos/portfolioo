


let iconos = document.getElementsByClassName('red');
let sonidoHover = document.getElementById('sonidoHover');

function reproducirSonido() {
  sonidoHover.currentTime = 0; // Reinicia el audio para que se pueda reproducir nuevamente al hacer hover
  sonidoHover.play();
}

// Agregar el evento 'mouseover' a cada enlace con la clase 'red'
for (let i = 0; i < iconos.length; i++) {
  iconos[i].addEventListener('mouseover', reproducirSonido);
}





let pop = document.getElementById('menu-icon');


function reproducirPop() {
  let sonidoPop = document.getElementById('sonidoblop');

  sonidoPop.play();
}

pop.addEventListener('click', reproducirPop);


















//Habilitar DM AÑADE UNA CLASE AL CSS
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('tema', 'dark-mode');
}
//Desabilitar DM /sacar .darkmode
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('tema', 'dark-mode');
}

//alternador de DM 
function toggleDarkMode() {
  const darkModeEnabled = document.body.classList.contains('dark-mode');

  if (darkModeEnabled) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }

}






//llamar btn + add event + cambiar <P id=mode> </P> (modo oscuro) cambiar p a nigth mode / day + sonido

function reproducirSonidoa() {
  let sonido = document.getElementById("miSonido");

  sonido.play();
}




const button = document.getElementById('dark-butn');
button.addEventListener('click', reproducirSonidoa);
button.addEventListener('click', toggleDarkMode);

button.addEventListener("click", function () {

  let modePara = document.getElementById("mode");

  if (modePara.textContent === "DAY MODE") {

    modePara.textContent = "NIGHT MODE";
  } else {

    modePara.textContent = "DAY MODE";
  }

});



//sweet alert boton descargar


let des = document.getElementById('sonidodesc');

let btn = document.getElementById('tn');

function sonidoDescarga() {

  des.play();
}

btn.addEventListener('click', () => {
  Swal.fire({
    title: 'Se descargara un archivo .pdf',
    text: "Estas de acuerdo?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Descargar'
  }).then((result) => {
    if (result.isConfirmed) {

      sonidoDescarga();
      setTimeout(function () {

        Swal.fire(
          'Su archivo se esta descargando',
          'success',

          window.location.href = "./img/Emiliano_CamposCampazzo_CV (1).pdf"
        )
      }, 1000);


    } 
  })



})



//chart.js



const ctx = document.getElementById('myChart');


new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'SCSS', 'JAVASCRIPT', 'PHOTOSHOP', 'GIT'],


    datasets: [{

      label: 'Porcentaje de skills',
      data: [90, 85, 50, 65, 30, 40],

      borderWidth: 3,
      hoverOffset: 30,
      backgroundColor: '#ee5522',
      borderColor: 'black',
      hoverBackgroundColor: '#ffaa3f'
    }],

  },

  options: {
    color: 'black',

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//b 

let btnForm = document.getElementById('btnform');

btnForm.addEventListener('click', () => {

  Swal.fire(
    'Mensaje Enviado',

  )

})



//inicialización libreria AOS


AOS.init();



