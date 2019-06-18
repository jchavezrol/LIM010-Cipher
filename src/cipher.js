window.cipher = {
  encode: (offset, string) => {
    /*Acá va tu código de cifrado */
    let cifrado = "";
    for (let c = 0; c < string.length; c++) {
      let Ascii = string[c].charCodeAt();
      if (Ascii >= 65 && Ascii <= 90) {
        cifrado = cifrado + String.fromCharCode((Ascii - 65 + parseInt(offset)) % 26 + 65);
      }
      else if (Ascii === 32) {
        cifrado = cifrado + " ";
      }

    }
    return cifrado;
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let descifrado = "";
    for (let a = 0; a < string.length; a++) {
      let codeAscii = string[a].charCodeAt();
      if (codeAscii >= 65 && codeAscii <= 90) {
        descifrado = descifrado + String.fromCharCode((codeAscii - 90 - parseInt(offset)) % 26 + 90);
      }
      else if (codeAscii === 32) {
        descifrado = descifrado + " ";
      }
    }
    return descifrado;
  }
}
