const INPUT = document.querySelector(".text-input");

const OUTPUT = document.querySelector(".text-output");



const VALUES = [["e", "enter"], ["i", "imes"], ["a", "ai"],  ["o", "ober"], ["u", "ufat"]]

function activarEncrypt() {
    const TEXTO_ENCRIPTADO = encriptarStr(INPUT.value);
    OUTPUT.value = TEXTO_ENCRIPTADO;
    INPUT.value = "";
}

function encriptarStr(stringInput) {
    
    if ( /[A-Z]/g.test(stringInput)) {

        alert("Solo debe utilizar MINUSCULAS");

    } else {

        for(let i = 0; i < VALUES.length; i++) {
            
            if (stringInput.includes(VALUES[i][0])) {

                stringInput = stringInput.replaceAll(VALUES[i][0], VALUES[i][1]);
            
            }
    
         }

    }
    return stringInput;
}


function activarDecrypt() {
    const TEXTO_ENCRIPTADO = desencriptarStr(INPUT.value);
    OUTPUT.value = TEXTO_ENCRIPTADO;
    INPUT.value = "";
}

function desencriptarStr(stringInput) {

    if (/[A-Z]/g.test(stringInput)) {

        alert("Solo debe utilizar MINUSCULAS");
    
    } else {
    
        for(let i = 0; i < VALUES.length; i++) {
    
            if (stringInput.includes(VALUES[i][1])) {
    
                stringInput = stringInput.replaceAll(VALUES[i][1], VALUES[i][0]);
                    
            }
            
        }

        return stringInput;

    }   

}


function copiar() {
    
    OUTPUT.select();
    navigator.clipboard.writeText(OUTPUT.value);
    OUTPUT.value = "";
}
