function encrypt() {
    const input = document.getElementById("input").value;
    const password = document.getElementById("password").value;
  
    if (input && password) {
      const ciphertext = `JUSEAN${CryptoJS.AES.encrypt(input, password)}.jsn`;
      document.getElementById("output").value = ciphertext;
    } else {
      alert("Por favor, ingrese texto para encriptar y una key.");
    }
  }
  
  function decrypt() {
    const ciphertext = document.getElementById("input").value;
    const password = document.getElementById("password").value;
  
    if (ciphertext && password) {
      const plaintext = CryptoJS.AES.decrypt(ciphertext.slice(6, -4), password).toString(CryptoJS.enc.Utf8);
      document.getElementById("output").value = plaintext;
    } else {
      alert("Por favor, ingrese texto para desencriptar y una key.");
    }
  }
  
  function limpiarFormulario() {
    document.getElementById("input").value = "";
    document.getElementById("password").value = "";
    document.getElementById("output").value = "";
  }
  
  function copyToClipboard() {
    const output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  