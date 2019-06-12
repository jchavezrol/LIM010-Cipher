// tomandodo el click
const clickBtn = document.getElementById("btn");
//tomando lo que ingresa el usuario 
const clave = document.getElementById("clave");

const clickIngresar = document.getElementById("ingresar");
const clickCifrado = document.getElementById("cifrado");

const clickCifrar = document.getElementById("Cifrar");
const clickDescifrar = document.getElementById("Descifrar");


let intentos = 2;

btn.addEventListener("click", ()=>{
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

clickIngresar.addEventListener("click", () =>{
  document.getElementById("acceso").classList.add("ocultar");
  document.getElementById("ingreso").classList.add("ocultar");
  document.getElementById("cifrado").classList.remove("ocultar");
  document.getElementById("final").classList.add("ocultar");
})

clickCifrado.addEventListener("click", ()=>{
  document.getElementById("acceso").classList.add("ocultar");
  document.getElementById("ingreso").classList.add("ocultar");
  document.getElementById("cifrado").classList.add("ocultar");
  document.getElementById("final").classList.remove("ocultar");
})

clickCifrar.addEventListener("click", ()=>{
  document.getElementById("acceso").classList.add("ocultar");
  document.getElementById("ingreso").classList.add("ocultar");
  document.getElementById("cifrado").classList.remove("ocultar");
  document.getElementById("final").classList.add("ocultar");
})

clickDescifrar.addEventListener("click", ()=>{
  document.getElementById("acceso").classList.add("ocultar");
  document.getElementById("ingreso").classList.add("ocultar");
  document.getElementById("cifrado").classList.remove("ocultar");
  document.getElementById("final").classList.add("ocultar");
})

/* cifrado */






