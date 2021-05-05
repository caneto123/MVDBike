// console.log("Inventario para bicis 2");

// class Bicicletas {
//   constructor(marca,rodado,color) {
//     this.marca = marca.toLowerCase();
//     // validar que el rodado sea un número
//     this.rodado = parseFloat(rodado); 
//     this.color = color.toLowerCase()
//     //marca - rodado - nombre - frenos - cambios -color
//   }
// }

// const biciS = [];

// const getAll = () => {
//   return biciS;
// };

// const create = (bicibike) => {
//   biciS.push(bicibike);
// };

// const usuario = prompt("Cual es su nombre");

// const marca = prompt("Cual es la marca de tu bicicleta");
// const rodado = prompt("escribe en números el rodado de tu bici");
// const color = prompt("Dime el color principal de tu bici");


// const bici1 = new Bicicletas(marca,rodado,color)

// create (bici1);

// console.log(getAll())

// const marcaS = marca;
// const rodadoS = rodado;
// const colorS = color;
// const nombre = usuario;

// alert(`Hola  ${nombre} las características de tu bici son las siguientes marca ${marcaS}, de color ${colorS} y con un rodado número ${rodadoS}`)



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
