window.cipher = {
 
  encode: (offset, string) => {
    /*Acá va tu código de cifrado */
    let resultado = "";
    resultado =string.charCodeAt(0)-65+parseInt(offset,10)%26+65;
    return String.fromCharCode(resultado);
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let descifrado="";
    for(let a=0; a < string.length; a++){
      let cd = string[a].charCodeAt();
      descifrado = descifrado+String.fromCharCode((cd-65-parseInt(offset,10))%26+65);
  }
  return descifrado;
}
}
