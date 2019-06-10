// tomandodo el click
const btn = document.getElementById("btn");
//tomando lo que ingresa el usuario 
const clave = document.getElementById("clave");
const intentos = 0;

btn.addEventListener('click', ()=>{
    if(clave.value == "LABORATORIA" ){
      document.getElementById('acceso').style.display = 'none';
      document.getElementById('ingreso').style.display='block';
}
    else if (clave.value != "LABORATORIA"){
    if(intentos.value=intentos+1){
         alert('¡Error!, te quedan 2 intentos');
    }
    else if (intentos.value=intentos+2){
        alert('¡Error!, te queda 1 intento');
    }
      else (intentos.value=intentos+3){
        alert('Ya utilizaste todos tus intentos, en este momento, no podrás seguir');    
  }
}
});




