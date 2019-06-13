window.cipher = {
 
  encode: (offset, string) => {
    let resultado = "";
    resultado =string.charCodeAt(0)-65+parseInt(offset,10)+65;
    return String.fromCharCode(resultado);
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
