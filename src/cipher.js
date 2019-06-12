window.cipher = {
 
  encode: (offset, string) => {
    let result = "";
    result =string.charCodeAt(0)-65+parseInt(offset,10)+65;
    return String.fromCharCode(result);
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
