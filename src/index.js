// tomandodo el click
const clickBtn = document.getElementById("btn");
//tomando lo que ingresa el usuario 
const clave = document.getElementById("clave");

const clickCifrado = document.getElementById("cifrado");

const clickCifrar = document.getElementById("cifrar");
const clickDescifrar = document.getElementById("Descifrar");
const clicklisto = document.getElementById("listo");
//se declara la variable para los intentos al ingresar PASSWORD
let intentos = 2;

//se ejecuta contraseña y los intentos
clickBtn.addEventListener("click", ()=>{
    if(clave.value =="LABORATORIA" ){
      document.getElementById("acceso").classList.add("ocultar");
      document.getElementById("ingreso").classList.remove("ocultar");
  
    } else if(intentos ==0){
      alert("Ya utilizaste todos tus intentos, en este momento, no podrás seguir.");
      btn.disabled="disabled";
     }
    
     else{
        alert("Clave incorrecta, te quedan "+ intentos + " intentos");
        intentos= intentos-1;
      }
});

// se declaran variables para realizar el cifrado

const smensaje1 = document.getElementById("mensaje1");
const coffset1 = document.getElementById("offset1");
const smensaje2 = document.getElementById("mensaje2");
const doffset2 = document.getElementById("offset2");

//De la pagina ingreso a la pagina decifrado
// ademas capturar el cifrado 

clickCifrar.addEventListener("click", ()=>{
 
  console.log(cipher.encode(coffset1.value,smensaje1.value));

  document.getElementById("acceso").classList.add("ocultar");
  document.getElementById("ingreso").classList.add("ocultar");
  document.getElementById("cifrado").classList.remove("ocultar");
  document.getElementById("final").classList.add("ocultar");
});

//de ingreso a cifrado para descifrar
clickDescifrar.addEventListener("click", ()=>{
  document.getElementById("acceso").classList.add("ocultar");
  document.getElementById("ingreso").classList.add("ocultar");
  document.getElementById("cifrado").classList.remove("ocultar");
  document.getElementById("final").classList.add("ocultar");
});

//Luego de cifrar o descifrar al final
clicklisto.addEventListener("click", ()=>{
  document.getElementById("acceso").classList.add("ocultar");
  document.getElementById("ingreso").classList.add("ocultar");
  document.getElementById("cifrado").classList.add("ocultar");
  document.getElementById("final").classList.remove("ocultar");
})







