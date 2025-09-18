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
}
