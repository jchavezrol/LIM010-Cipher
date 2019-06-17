window.cipher = {
   encode: (offset, string) => {
    /*Acá va tu código de cifrado */
    let cifrado = " ";
    for(let c = 0; c < string.length; c++){
     let Ascii = string[c].charCodeAt();
      cifrado = cifrado + String.fromCharCode((Ascii-65 + parseInt(offset))%26 + 65);
    }
    return cifrado;
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let descifrado=" ";
    for(let a = 0; a < string.length; a++) {
      let codeAscii = string[a].charCodeAt();
      descifrado = descifrado + String.fromCharCode((codeAscii-65-parseInt(offset))%26+65);
  }
  return descifrado;
}
}
