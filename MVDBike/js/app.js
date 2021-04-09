// console.log("Simulador interactivo");


// //Validar que esto sea un string
// function nameBike() {
//   let myName = prompt("Cual es tu nombre?");
//   if (myName != "" && myName != 0) {
//     console.log(myName);
//   } else {
//     alert("Gime More");
//   }
//   return myName;
// }
// //Validar que esto sea un number
// function dayBike() {
//   let day = prompt("Cuantos días quieres usarla?");

//   if (day >= 0 && day != "") {
//     console.log(dayBike);
//   } else {
//     alert("debes alquilarla más días");
//   }
//   return day;
// }
// //Validar que esto sea un number
// function numberBike() {
//   let bike = prompt("How many bikes do you need?");
  
//   if (bike >= 0 && bike != "") {
//     console.log(numberBike);
//   } else {
//     alert("seguro?");
//   }
//   return bike;
// }

// function presupuesto() {
//   const primer = nameBike();
//   const segundo = numberBike();
//   const tercero = dayBike();
//   suma = 0;
//   if (segundo !== 0 && tercero !== 0) {
//     suma = segundo * tercero * 300;
//     alert( "Holis "+" "+ primer +" "+ "el número de bicis a alquilar es de"+" " +segundo + " "+"el número de días es de"+" " + tercero + " " + "sumando un total de pesos de "+" "+suma);
//   } else {
//     alert("chao");
//   }
//   return suma;
// }

// const primer = nameBike();
// console.log(primer);

// const segundo = numberBike();
// console.log(segundo);

// const tercero = dayBike();
// console.log(tercero);

// const total = presupuesto();
// console.log(total);




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
