export function obtenerSection() {
    let section = document.createElement("section");
    section.className = "section";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre del producto";

    let inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.placeholder = "Precio (Q)";

    let btnAgregar = document.createElement("button");
    btnAgregar.textContent = "Agregar";

    let lista = document.createElement("ul");
    lista.className = "lista-compras";

    btnAgregar.addEventListener("click", () => {
        let nombre = inputNombre.value.trim();
        let precio = inputPrecio.value.trim();

        if (nombre && precio) {
            let item = document.createElement("li");
            item.textContent = `${nombre} - Q${precio}`;

            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "X";
            btnEliminar.className = "btn-eliminar";

            btnEliminar.addEventListener("click", () => {
                item.remove();
                let productos = JSON.parse(localStorage.getItem("productos")) || [];
                productos = productos.filter(p => !(p.nombre === nombre && p.precio === precio));
                localStorage.setItem("productos", JSON.stringify(productos));
            });

            item.appendChild(btnEliminar);
            lista.appendChild(item);

            let productos = JSON.parse(localStorage.getItem("productos")) || [];
            productos.push({ nombre, precio });
            localStorage.setItem("productos", JSON.stringify(productos));

            inputNombre.value = "";
            inputPrecio.value = "";
        }
    });

    let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    productosGuardados.forEach(p => {
        let item = document.createElement("li");
        item.textContent = `${p.nombre} - Q${p.precio}`;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.className = "btn-eliminar";

        btnEliminar.addEventListener("click", () => {
            item.remove();
            let productos = JSON.parse(localStorage.getItem("productos")) || [];
            productos = productos.filter(prod => !(prod.nombre === p.nombre && prod.precio === p.precio));
            localStorage.setItem("productos", JSON.stringify(productos));
        });

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });

    section.appendChild(inputNombre);
    section.appendChild(inputPrecio);
    section.appendChild(btnAgregar);
    section.appendChild(lista);

    return section;
}
