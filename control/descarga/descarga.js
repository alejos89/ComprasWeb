import { seccionDescargar } from "./myLocalStorage.js";

function loadHtmlSectionDownload(){
    const divDownload = document.querySelector("#download");
    divDownload.innerHTML = "";
    divDownload.appendChild(seccionDescargar());

    document.querySelector("#btnDownload").addEventListener("click", downloadAsImage);
}

function downloadAsImage() {
    document.querySelector("#download").classList.add('ocultar');
    const form = document.querySelector("#formulario");
    if (form) form.classList.add('ocultar');
    document.querySelectorAll(".delete-button").forEach(btn=>{
        btn.classList.add('ocultar');
    });
    document.querySelectorAll(".item").forEach(box =>{
        box.classList.add('acomodar');
    });  

    const contenido = document.querySelector('#root');
    html2canvas(contenido, {
        scale: 2,            
        useCORS: true,        
        logging: false,        
         windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'contenido.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).finally(()=>{
        document.querySelector("#download").classList.remove('ocultar');
        if (form) form.classList.remove('ocultar');
        document.querySelectorAll(".delete-button").forEach(btn=>{
            btn.classList.remove('ocultar');
        });
        document.querySelectorAll(".item").forEach(box =>{
            box.classList.remove('acomodar');
        });  
    });
}

export { loadHtmlSectionDownload };
