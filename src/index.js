// tomandodo el click
const btn = document.getElementById("btn");
//tomando lo que ingresa el usuario 
const clave = document.getElementById("clave");
// const string = clave.toUpperCase(); 
btn.addEventListener('click', ()=>{

    if(clave.value=="LABORATORIA" ){
      document.getElementById('acceso').style.display = 'none';
      document.getElementById('ingreso').style.display='block';
    }else{
       alert('fallaste');
    }
   
});




