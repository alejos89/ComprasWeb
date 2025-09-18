<<<<<<< HEAD
=======
// componentes/section/section.js
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
export function obtenerSection() {
    let section = document.createElement("section");
    section.className = "section";

<<<<<<< HEAD
=======
    // Input para nombre
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre del producto";

<<<<<<< HEAD
=======
    // Input para precio
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
    let inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.placeholder = "Precio (Q)";

<<<<<<< HEAD
    let btnAgregar = document.createElement("button");
    btnAgregar.textContent = "Agregar";

    let lista = document.createElement("ul");
    lista.className = "lista-compras";

=======
    // Botón para agregar
    let btnAgregar = document.createElement("button");
    btnAgregar.textContent = "Agregar";

    // Lista donde se mostrarán los productos
    let lista = document.createElement("ul");
    lista.className = "lista-compras";

    // Evento para agregar productos
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
    btnAgregar.addEventListener("click", () => {
        let nombre = inputNombre.value.trim();
        let precio = inputPrecio.value.trim();

        if (nombre && precio) {
            let item = document.createElement("li");
            item.textContent = `${nombre} - Q${precio}`;

<<<<<<< HEAD
=======
            // 🔴 Botón eliminar
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "X";
            btnEliminar.className = "btn-eliminar";

            btnEliminar.addEventListener("click", () => {
                item.remove();
<<<<<<< HEAD
=======

                // Actualizar localStorage
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
                let productos = JSON.parse(localStorage.getItem("productos")) || [];
                productos = productos.filter(p => !(p.nombre === nombre && p.precio === precio));
                localStorage.setItem("productos", JSON.stringify(productos));
            });

            item.appendChild(btnEliminar);
            lista.appendChild(item);

<<<<<<< HEAD
=======
            // Guardar en localStorage
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
            let productos = JSON.parse(localStorage.getItem("productos")) || [];
            productos.push({ nombre, precio });
            localStorage.setItem("productos", JSON.stringify(productos));

<<<<<<< HEAD
=======
            // Limpiar inputs
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
            inputNombre.value = "";
            inputPrecio.value = "";
        }
    });

<<<<<<< HEAD
=======
    // Cargar productos ya guardados
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
    let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    productosGuardados.forEach(p => {
        let item = document.createElement("li");
        item.textContent = `${p.nombre} - Q${p.precio}`;

<<<<<<< HEAD
=======
        // 🔴 Botón eliminar también en los productos guardados
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.className = "btn-eliminar";

        btnEliminar.addEventListener("click", () => {
            item.remove();
<<<<<<< HEAD
=======

            // Actualizar localStorage
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
            let productos = JSON.parse(localStorage.getItem("productos")) || [];
            productos = productos.filter(prod => !(prod.nombre === p.nombre && prod.precio === p.precio));
            localStorage.setItem("productos", JSON.stringify(productos));
        });

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });

<<<<<<< HEAD
=======
    // Agregar todo al section
>>>>>>> 12079b65073084366c0de7ef09a45cb8a0db12b4
    section.appendChild(inputNombre);
    section.appendChild(inputPrecio);
    section.appendChild(btnAgregar);
    section.appendChild(lista);

    return section;
}
