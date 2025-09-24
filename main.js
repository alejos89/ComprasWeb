import { obtenerHeader } from "./componentes/header/header.js";
import { obtenerSection } from "./componentes/section/section.js";
import { loadHtmlSectionDownload } from "./control/descarga/descarga.js";
function lista() {
    let paginaLista = document.createElement("div");
    paginaLista.className = "pagina-lista";
    paginaLista.id = "root";

    paginaLista.appendChild(obtenerHeader());
    paginaLista.appendChild(obtenerSection());

    return paginaLista;
}

document.body.appendChild(lista());
loadHtmlSectionDownload();
