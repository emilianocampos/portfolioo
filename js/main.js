
//Habilitar DM
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkModeEnabled', 'true');
}
//Desabilitar DM
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
//inicialización libreria AOS
AOS.init();

//menu hambur

//chart.js


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

const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['HTML', 'CSS', 'SCSS', 'JAVASCRIPT'],
    datasets: [{
      label: 'Porcentaje de skills',
      data: [90, 85, 85, 65],
      borderWidth: 1,
      hoverOffset: 30
    }]
  },

  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
