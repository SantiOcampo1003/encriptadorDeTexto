document.querySelector(".btn-encriptar").addEventListener("click", encriptar);
document.querySelector(".btn-desencriptar").addEventListener("click", desencriptar);
document.querySelector(".btn-copiar").addEventListener("click", copiarTexto);

const munieco = document.querySelector(".contenedormunieco");
const contenedorParrafo = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");

function encriptar() {
    ocultarElementos();
    const texto = recuperarTexto();
    resultado.textContent = encriptarTexto(texto);
}

function desencriptar() {
    ocultarElementos();
    const texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(texto);
}

function recuperarTexto() {
    return document.querySelector(".cajatexto").value;  // Clase corregida aquí
}

function ocultarElementos() {
    munieco.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(texto) {
    const reglas = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
    return texto.split("").map(letra => reglas[letra] || letra).join("");
}

function desencriptarTexto(texto) {
    return texto.replace(/ai|enter|imes|ober|ufat/g, match => {
        return { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" }[match];
    });
}

function copiarTexto() {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => console.log("Texto copiado"))
        .catch(err => console.error("Error al copiar el texto: ", err));
}
