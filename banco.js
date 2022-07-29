//Registrar una cuenta
const cuentas = JSON.parse(localStorage.getItem('cuenta')) ?? [];
let i=0;
var formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function (e) { //recolecta los datos del formulario
  e.preventDefault();

  let cuenta={
      id: i++,
      nombre:document.getElementById('nombre').value,
      cantidadTotal:document.getElementById('cantidad').value,
      numeroCuenta:math.rand
  }
      cuentas.push(cuenta)
      localStorage.setItem('cuenta', JSON.stringify(cuentas));
    
});



