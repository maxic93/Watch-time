function obtenerHoraActual(){
  let relojs = new Date()
  let  hora = relojs.getHours()
  let  minuto = relojs.getMinutes()
  let  segundo = relojs.getSeconds()
  let dia = relojs.getDay()
  let diaNumero = relojs.getDate()
  let month = relojs.getMonth()
  let year = relojs.getFullYear()

  let semana = ["Domingo","lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
  let newDia = dia.textContent = semana[dia]

  const fechaActual = `${newDia} ${diaNumero}/${month+1}/${year}`
  const horaActual = `${hora}:${minuto}:${segundo}`

document.form_reloj.fecha.value = fechaActual
document.form_reloj.reloj.value = horaActual
setTimeout("obtenerHoraActual()",1000)
}




