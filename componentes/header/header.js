<<<<<<< HEAD
export function obtenerHeader() {
    let header = document.createElement("header");
    header.className = "header";

    let titulo = document.createElement("h1");
    titulo.textContent = "Lista de Compras";

    let divDownload = document.createElement("div");
    divDownload.id = "download";

    header.appendChild(titulo);
    header.appendChild(divDownload);

    return header;
=======
// componentes/header/header.js
export function obtenerHeader() {
    let header = document.createElement("header");
    header.className = "header";
    header.textContent = "Lista de Compras";
   return header;
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
}
