export function seccionDescargar() {
    const imgDownload = document.createElement('img');
    imgDownload.src = "https://raw.githubusercontent.com/ROCKEMMA/Market_list/f9e692a8ec3d3844f33d543577ac58c49a584dae/assets/svg/download.svg";
    imgDownload.id = "btnDownload";
    imgDownload.alt = "Descargar";
    return imgDownload;
}

function loadHtmlSectionDownload() {
    document.querySelector("#download").appendChild(seccionDescargar());
    document.querySelector("#btnDownload").addEventListener("click", downloadAsImage);
}

export { loadHtmlSectionDownload }

function downloadAsImage() {
    const contenido = document.querySelector('#root');
    html2canvas(contenido).then(canvas => {
        const link = document.createElement('a');
        link.download = 'lista-compras.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
