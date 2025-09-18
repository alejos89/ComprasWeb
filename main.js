import { obtenerHeader } from "./componentes/header/header.js";
import { obtenerSection } from "./componentes/section/section.js";
<<<<<<< HEAD
import { loadHtmlSectionDownload } from "./control/descarga/seccionDescarga.js";
=======
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4

function lista() {
    let paginaLista = document.createElement("div");
    paginaLista.className = "pagina-lista";
<<<<<<< HEAD
    paginaLista.id = "root";
=======
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4

    paginaLista.appendChild(obtenerHeader());
    paginaLista.appendChild(obtenerSection());

    return paginaLista;
}

document.body.appendChild(lista());
<<<<<<< HEAD
loadHtmlSectionDownload();
=======
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
