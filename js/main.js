//inicialización libreria AOS
AOS.init();

//Habilitar DM AÑADE UNA CLASE AL CSS
function enableDarkMode() {
  document.body.classList.add('dark-mode');
 
}
//Desabilitar DM /sacar .darkmode
function disableDarkMode() {
  document.body.classList.remove('dark-mode');

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


//llamar btn + add event + cambiar <P id=mode> </P> (modo oscuro) cambiar p a nigth mode / day

const button = document.getElementById('dark-butn');
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


let btn = document.getElementById('tn');

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


      setTimeout(function () {

        Swal.fire(
          'Su archivo se esta descargando',
          'success',

          window.location.href = "./img/Emiliano_CamposCampazzo_CV (1).pdf"
        )
      }, 2000);


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